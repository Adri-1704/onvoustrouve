import { supabase } from '@/lib/supabase'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export async function POST(request: Request) {
  try {
    // Verification du token d'autorisation
    const authHeader = request.headers.get('Authorization')
    if (!authHeader || authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return Response.json(
        { error: 'Non autorise' },
        { status: 401 }
      )
    }

    const { site_id } = await request.json()

    if (!site_id) {
      return Response.json(
        { error: 'site_id requis' },
        { status: 400 }
      )
    }

    // Recuperer les donnees du site
    const { data: site, error: siteError } = await supabase
      .from('sites')
      .select('id, titre, metier, ville, description')
      .eq('id', site_id)
      .single()

    if (siteError || !site) {
      return Response.json(
        { error: 'Site introuvable' },
        { status: 404 }
      )
    }

    // Generer l'article avec Claude
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2000,
      messages: [
        {
          role: 'user',
          content: `Tu es un redacteur SEO expert pour les commerces locaux en Suisse. Genere un article de blog SEO optimise pour le commerce suivant :

- Nom : ${site.titre}
- Metier : ${site.metier}
- Ville : ${site.ville}
- Description : ${site.description || 'Non fournie'}

CONSIGNES :
- L'article doit faire entre 600 et 800 mots
- Optimise pour les mots-cles "${site.metier} ${site.ville}" et "${site.metier} a ${site.ville}"
- Le contenu doit etre en HTML (utilise des balises <h2>, <h3>, <p>, <ul>, <li>, <strong>)
- Le ton doit etre professionnel mais accessible
- Inclus des conseils pratiques lies au metier
- Mentionne la ville et la region naturellement dans le texte
- Ne mets PAS de balise <h1> (elle sera ajoutee automatiquement)

Reponds UNIQUEMENT en JSON valide avec cette structure exacte :
{
  "titre": "Titre accrocheur de l'article (60-70 caracteres max)",
  "slug": "titre-en-minuscules-avec-tirets",
  "contenu": "<h2>...</h2><p>...</p>...",
  "meta_description": "Description meta de 150-160 caracteres pour le SEO",
  "mots_cles": ["mot-cle-1", "mot-cle-2", "mot-cle-3", "mot-cle-4", "mot-cle-5"],
  "image_suggestion": "Description courte d'une image appropriee pour l'article"
}`,
        },
      ],
    })

    // Extraire le JSON de la reponse
    const responseText =
      message.content[0].type === 'text' ? message.content[0].text : ''

    // Nettoyer la reponse pour extraire le JSON
    const jsonMatch = responseText.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      return Response.json(
        { error: 'Erreur lors de la generation du contenu' },
        { status: 500 }
      )
    }

    const article = JSON.parse(jsonMatch[0])

    // Sauvegarder dans la base de donnees
    const { data: blogPost, error: insertError } = await supabase
      .from('blog_posts')
      .insert({
        site_id: site.id,
        titre: article.titre,
        slug: article.slug,
        contenu: article.contenu,
        meta_description: article.meta_description,
        mots_cles: article.mots_cles,
        image_url: null,
        publie: true,
      })
      .select()
      .single()

    if (insertError) {
      return Response.json(
        { error: 'Erreur lors de la sauvegarde', details: insertError.message },
        { status: 500 }
      )
    }

    return Response.json({
      success: true,
      article: blogPost,
      image_suggestion: article.image_suggestion,
    })
  } catch {
    return Response.json(
      { error: 'Erreur serveur. Veuillez reessayer.' },
      { status: 500 }
    )
  }
}
