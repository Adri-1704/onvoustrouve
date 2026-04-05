import { supabase } from '@/lib/supabase'
import { verifyAdmin } from '@/lib/auth'
import bcrypt from 'bcryptjs'

export async function GET(request: Request) {
  if (!verifyAdmin(request)) {
    return Response.json({ error: 'Acces non autorise' }, { status: 401 })
  }

  try {
    // Recuperer tous les clients avec comptages sites et factures
    const { data: clients, error } = await supabase
      .from('clients')
      .select(`
        id, email, nom, slug, is_active, abonnement, date_debut,
        telephone, adresse, ville, notes, created_at,
        sites(count),
        factures(count)
      `)
      .order('created_at', { ascending: false })

    if (error) {
      return Response.json(
        { error: 'Erreur lors de la recuperation des clients' },
        { status: 500 }
      )
    }

    // Formater les comptages
    const formatted = (clients || []).map((c) => ({
      ...c,
      sites_count: c.sites?.[0]?.count ?? 0,
      factures_count: c.factures?.[0]?.count ?? 0,
      sites: undefined,
      factures: undefined,
    }))

    return Response.json({ clients: formatted })
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
    const { email, nom, slug, password, abonnement, telephone, adresse, ville, notes } = body

    if (!email || !nom || !slug || !password) {
      return Response.json(
        { error: 'Email, nom, slug et mot de passe sont requis' },
        { status: 400 }
      )
    }

    // Verifier si l'email existe deja
    const { data: existing } = await supabase
      .from('clients')
      .select('id')
      .eq('email', email.toLowerCase().trim())
      .single()

    if (existing) {
      return Response.json(
        { error: 'Un client avec cet email existe deja' },
        { status: 409 }
      )
    }

    // Hasher le mot de passe
    const password_hash = await bcrypt.hash(password, 10)

    const { data: client, error } = await supabase
      .from('clients')
      .insert({
        email: email.toLowerCase().trim(),
        nom,
        slug: slug.toLowerCase().trim(),
        password_hash,
        is_active: true,
        abonnement: abonnement || 'starter',
        date_debut: new Date().toISOString().split('T')[0],
        telephone: telephone || null,
        adresse: adresse || null,
        ville: ville || null,
        notes: notes || null,
      })
      .select('id, email, nom, slug, is_active, abonnement, date_debut, telephone, adresse, ville, notes, created_at')
      .single()

    if (error) {
      return Response.json(
        { error: 'Erreur lors de la creation du client' },
        { status: 500 }
      )
    }

    return Response.json({ client }, { status: 201 })
  } catch {
    return Response.json(
      { error: 'Erreur serveur. Veuillez reessayer.' },
      { status: 500 }
    )
  }
}
