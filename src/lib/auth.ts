import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'onvoustrouve-secret-key-2024'

/**
 * Verifie que la requete provient d'un admin authentifie.
 * Extrait le Bearer token, verifie le JWT et controle le role.
 * Retourne true si l'acces est autorise, false sinon.
 */
export function verifyAdmin(request: Request): boolean {
  try {
    const authHeader = request.headers.get('Authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return false
    }

    const token = authHeader.split(' ')[1]
    const decoded = jwt.verify(token, JWT_SECRET) as { role?: string }

    return decoded.role === 'admin'
  } catch {
    return false
  }
}
