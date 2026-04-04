import { supabase } from '@/lib/supabase'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'onvoustrouve-secret-key-2024'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return Response.json(
        { error: 'Email et mot de passe requis' },
        { status: 400 }
      )
    }

    // Chercher le client par email
    const { data: client, error } = await supabase
      .from('clients')
      .select('id, email, nom, slug, is_active, password_hash')
      .eq('email', email.toLowerCase().trim())
      .single()

    if (error || !client) {
      return Response.json(
        { error: 'Email ou mot de passe incorrect' },
        { status: 401 }
      )
    }

    if (!client.is_active) {
      return Response.json(
        { error: 'Votre compte est desactive. Contactez le support.' },
        { status: 403 }
      )
    }

    // Verifier le mot de passe
    const isValid = await bcrypt.compare(password, client.password_hash)
    if (!isValid) {
      return Response.json(
        { error: 'Email ou mot de passe incorrect' },
        { status: 401 }
      )
    }

    // Generer un token JWT
    const token = jwt.sign(
      {
        clientId: client.id,
        email: client.email,
        slug: client.slug,
      },
      JWT_SECRET,
      { expiresIn: '7d' }
    )

    return Response.json({
      token,
      client: {
        id: client.id,
        email: client.email,
        nom: client.nom,
        slug: client.slug,
      },
    })
  } catch {
    return Response.json(
      { error: 'Erreur serveur. Veuillez reessayer.' },
      { status: 500 }
    )
  }
}
