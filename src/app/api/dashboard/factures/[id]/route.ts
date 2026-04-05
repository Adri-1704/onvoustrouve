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

    const { data: facture, error } = await supabase
      .from('factures')
      .select(`
        id, numero, type, description, montant, tva, montant_total,
        statut, date_emission, date_echeance, periode_debut, periode_fin, created_at,
        clients(id, nom, email, slug, abonnement, telephone, adresse, ville)
      `)
      .eq('id', id)
      .single()

    if (error || !facture) {
      return Response.json(
        { error: 'Facture introuvable' },
        { status: 404 }
      )
    }

    return Response.json({
      facture: {
        ...facture,
        client: facture.clients,
        clients: undefined,
      },
    })
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
    const { statut } = body

    const statutsValides = ['brouillon', 'envoyee', 'payee', 'annulee']
    if (!statut || !statutsValides.includes(statut)) {
      return Response.json(
        { error: `Statut invalide. Valeurs acceptees : ${statutsValides.join(', ')}` },
        { status: 400 }
      )
    }

    const { data: facture, error } = await supabase
      .from('factures')
      .update({ statut })
      .eq('id', id)
      .select('id, numero, type, description, montant, tva, montant_total, statut, date_emission, date_echeance, periode_debut, periode_fin, created_at')
      .single()

    if (error || !facture) {
      return Response.json(
        { error: 'Facture introuvable ou erreur lors de la mise a jour' },
        { status: 404 }
      )
    }

    return Response.json({ facture })
  } catch {
    return Response.json(
      { error: 'Erreur serveur. Veuillez reessayer.' },
      { status: 500 }
    )
  }
}
