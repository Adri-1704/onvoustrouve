import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'onvoustrouve-secret-key-2024'
const DASHBOARD_PASSWORD = process.env.DASHBOARD_PASSWORD

export async function POST(request: Request) {
  try {
    const { password } = await request.json()

    if (!password) {
      return Response.json(
        { error: 'Mot de passe requis' },
        { status: 400 }
      )
    }

    if (!DASHBOARD_PASSWORD) {
      return Response.json(
        { error: 'Configuration serveur incomplete (DASHBOARD_PASSWORD manquant)' },
        { status: 500 }
      )
    }

    if (password !== DASHBOARD_PASSWORD) {
      return Response.json(
        { error: 'Mot de passe incorrect' },
        { status: 401 }
      )
    }

    const token = jwt.sign(
      { role: 'admin' },
      JWT_SECRET,
      { expiresIn: '7d' }
    )

    return Response.json({ token })
  } catch {
    return Response.json(
      { error: 'Erreur serveur. Veuillez reessayer.' },
      { status: 500 }
    )
  }
}
