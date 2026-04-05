import { supabase } from '@/lib/supabase'
import { verifyAdmin } from '@/lib/auth'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!verifyAdmin(request)) {
    return Response.json({ error: 'Acces non autorise' }, { status: 401 })
  }

  try {
    const { id } = await params

    // Client avec details complets
    const { data: client, error } = await supabase
      .from('clients')
      .select(`
        id, email, nom, slug, is_active, abonnement, date_debut,
        telephone, adresse, ville, notes, created_at,
        sites(id, nom, url, created_at),
        factures(id, numero, type, description, montant_total, statut, date_emission, date_echeance)
      `)
      .eq('id', id)
      .single()

    if (error || !client) {
      return Response.json(
        { error: 'Client introuvable' },
        { status: 404 }
      )
    }

    return Response.json({ client })
  } catch {
    return Response.json(
      { error: 'Erreur serveur. Veuillez reessayer.' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!verifyAdmin(request)) {
    return Response.json({ error: 'Acces non autorise' }, { status: 401 })
  }

  try {
    const { id } = await params
    const body = await request.json()

    // Champs modifiables
    const allowedFields = [
      'nom', 'email', 'slug', 'is_active', 'abonnement',
      'date_debut', 'telephone', 'adresse', 'ville', 'notes'
    ]

    const updates: Record<string, unknown> = {}
    for (const field of allowedFields) {
      if (body[field] !== undefined) {
        updates[field] = body[field]
      }
    }

    if (Object.keys(updates).length === 0) {
      return Response.json(
        { error: 'Aucun champ a mettre a jour' },
        { status: 400 }
      )
    }

    // Normaliser l'email si present
    if (updates.email && typeof updates.email === 'string') {
      updates.email = updates.email.toLowerCase().trim()
    }

    const { data: client, error } = await supabase
      .from('clients')
      .update(updates)
      .eq('id', id)
      .select('id, email, nom, slug, is_active, abonnement, date_debut, telephone, adresse, ville, notes, created_at')
      .single()

    if (error || !client) {
      return Response.json(
        { error: 'Client introuvable ou erreur lors de la mise a jour' },
        { status: 404 }
      )
    }

    return Response.json({ client })
  } catch {
    return Response.json(
      { error: 'Erreur serveur. Veuillez reessayer.' },
      { status: 500 }
    )
  }
}
