import { supabase } from '@/lib/supabase'

export async function GET(request: Request) {
  try {
    // Verification du token d'autorisation
    const authHeader = request.headers.get('Authorization')
    if (!authHeader || authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return Response.json(
        { error: 'Non autorise' },
        { status: 401 }
      )
    }

    // Recuperer tous les sites
    const { data: sites, error: sitesError } = await supabase
      .from('sites')
      .select('id, titre, ville')

    if (sitesError || !sites) {
      return Response.json(
        { error: 'Erreur lors de la recuperation des sites' },
        { status: 500 }
      )
    }

    const results: { site_id: string; titre: string; status: string; detail?: string }[] = []

    for (const site of sites) {
      // Verifier si un article a ete cree dans les 14 derniers jours
      const fourteenDaysAgo = new Date()
      fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14)

      const { data: recentPosts } = await supabase
        .from('blog_posts')
        .select('id')
        .eq('site_id', site.id)
        .gte('created_at', fourteenDaysAgo.toISOString())
        .limit(1)

      if (recentPosts && recentPosts.length > 0) {
        results.push({
          site_id: site.id,
          titre: site.titre,
          status: 'skipped',
          detail: 'Article recent existant',
        })
        continue
      }

      // Generer un nouvel article via l'API interne
      try {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
          || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

        const response = await fetch(`${baseUrl}/api/blog/generate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.CRON_SECRET}`,
          },
          body: JSON.stringify({ site_id: site.id }),
        })

        const data = await response.json()

        if (response.ok) {
          results.push({
            site_id: site.id,
            titre: site.titre,
            status: 'generated',
            detail: data.article?.titre || 'Article genere',
          })
        } else {
          results.push({
            site_id: site.id,
            titre: site.titre,
            status: 'error',
            detail: data.error || 'Erreur inconnue',
          })
        }
      } catch {
        results.push({
          site_id: site.id,
          titre: site.titre,
          status: 'error',
          detail: 'Erreur lors de l\'appel API',
        })
      }
    }

    return Response.json({
      success: true,
      total: sites.length,
      generated: results.filter((r) => r.status === 'generated').length,
      skipped: results.filter((r) => r.status === 'skipped').length,
      errors: results.filter((r) => r.status === 'error').length,
      details: results,
    })
  } catch {
    return Response.json(
      { error: 'Erreur serveur. Veuillez reessayer.' },
      { status: 500 }
    )
  }
}
