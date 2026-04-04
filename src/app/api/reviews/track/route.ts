import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const { site_id, source } = await request.json()

    if (!site_id) {
      return Response.json(
        { error: 'site_id requis' },
        { status: 400 }
      )
    }

    const validSources = ['qr', 'link', 'email']
    const cleanSource = validSources.includes(source) ? source : 'link'

    const { error } = await supabase
      .from('review_clicks')
      .insert({ site_id, source: cleanSource })

    if (error) {
      return Response.json(
        { error: 'Erreur lors de l\'enregistrement' },
        { status: 500 }
      )
    }

    return Response.json({ success: true })
  } catch {
    return Response.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
