import { supabase } from '@/lib/supabase'
import { verifyAdmin } from '@/lib/auth'

// Montants par defaut en CHF
const MONTANTS = {
  mise_en_place: 395,
  abonnement: {
    starter: 49,
    pro: 69,
    premium: 99,
  },
} as const

/**
 * Genere le prochain numero de facture au format OVT-YYYY-XXXX
 */
async function generateNumeroFacture(): Promise<string> {
  const year = new Date().getFullYear()
  const prefix = `OVT-${year}-`

  const { data } = await supabase
    .from('factures')
    .select('numero')
    .like('numero', `${prefix}%`)
    .order('numero', { ascending: false })
    .limit(1)

  let nextNum = 1
  if (data && data.length > 0) {
    const lastNum = parseInt(data[0].numero.replace(prefix, ''), 10)
    if (!isNaN(lastNum)) {
      nextNum = lastNum + 1
    }
  }

  return `${prefix}${String(nextNum).padStart(4, '0')}`
}

export async function GET(request: Request) {
  if (!verifyAdmin(request)) {
    return Response.json({ error: 'Acces non autorise' }, { status: 401 })
  }

  try {
    const url = new URL(request.url)
    const statut = url.searchParams.get('statut')

    let query = supabase
      .from('factures')
      .select(`
        id, numero, type, description, montant, tva, montant_total,
        statut, date_emission, date_echeance, periode_debut, periode_fin, created_at,
        clients(id, nom, email)
      `)
      .order('created_at', { ascending: false })

    if (statut) {
      query = query.eq('statut', statut)
    }

    const { data: factures, error } = await query

    if (error) {
      return Response.json(
        { error: 'Erreur lors de la recuperation des factures' },
        { status: 500 }
      )
    }

    // Aplatir la relation client
    const formatted = (factures || []).map((f) => ({
      ...f,
      client: f.clients,
      clients: undefined,
    }))

    return Response.json({ factures: formatted })
  } catch {
    return Response.json(
      { error: 'Erreur serveur. Veuillez reessayer.' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  if (!verifyAdmin(request)) {
    return Response.json({ error: 'Acces non autorise' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { client_id, type, description, periode_debut, periode_fin, date_echeance } = body

    if (!client_id || !type) {
      return Response.json(
        { error: 'client_id et type sont requis' },
        { status: 400 }
      )
    }

    if (type !== 'mise_en_place' && type !== 'abonnement') {
      return Response.json(
        { error: 'Le type doit etre "mise_en_place" ou "abonnement"' },
        { status: 400 }
      )
    }

    // Recuperer le client pour connaitre son abonnement
    const { data: client, error: clientError } = await supabase
      .from('clients')
      .select('id, nom, abonnement')
      .eq('id', client_id)
      .single()

    if (clientError || !client) {
      return Response.json(
        { error: 'Client introuvable' },
        { status: 404 }
      )
    }

    // Calculer le montant selon le type
    let montant: number
    let autoDescription: string

    if (type === 'mise_en_place') {
      montant = MONTANTS.mise_en_place
      autoDescription = 'Mise en place du site OnVousTrouve.ch'
    } else {
      const abo = (client.abonnement || 'starter') as keyof typeof MONTANTS.abonnement
      montant = MONTANTS.abonnement[abo] || MONTANTS.abonnement.starter
      autoDescription = `Abonnement ${abo} - mensuel`
    }

    const numero = await generateNumeroFacture()

    const { data: facture, error } = await supabase
      .from('factures')
      .insert({
        client_id,
        numero,
        type,
        description: description || autoDescription,
        montant,
        tva: 0,
        montant_total: montant,
        statut: 'brouillon',
        date_echeance: date_echeance || null,
        periode_debut: periode_debut || null,
        periode_fin: periode_fin || null,
      })
      .select()
      .single()

    if (error) {
      return Response.json(
        { error: 'Erreur lors de la creation de la facture' },
        { status: 500 }
      )
    }

    return Response.json({ facture }, { status: 201 })
  } catch {
    return Response.json(
      { error: 'Erreur serveur. Veuillez reessayer.' },
      { status: 500 }
    )
  }
}
