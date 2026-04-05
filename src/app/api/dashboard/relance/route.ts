import { verifyAdmin } from '@/lib/auth'
import { Resend } from 'resend'

function getResend() {
  const key = process.env.RESEND_API_KEY
  if (!key) throw new Error('RESEND_API_KEY non configuree')
  return new Resend(key)
}

export async function POST(request: Request) {
  if (!verifyAdmin(request)) {
    return Response.json({ error: 'Non autorisé' }, { status: 401 })
  }

  try {
    const { client_email, client_nom, numero, montant, date_echeance } = await request.json()

    if (!client_email || !numero || montant === undefined) {
      return Response.json(
        { error: 'Champs requis manquants (client_email, numero, montant)' },
        { status: 400 }
      )
    }

    const resend = getResend()
    await resend.emails.send({
      from: 'OnVousTrouve.ch <contact@lateliersuisse.ch>',
      to: client_email,
      subject: `Rappel de paiement - Facture ${numero}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1e40af; color: white; padding: 24px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">OnVousTrouve.ch</h1>
          </div>
          <div style="padding: 32px; background: #f9fafb;">
            <p>Bonjour ${client_nom || 'cher client'},</p>
            <p>Nous vous rappelons que la facture <strong>${numero}</strong> d'un montant de <strong>${Number(montant).toFixed(2)} CHF</strong> est en attente de paiement.</p>
            ${date_echeance ? `<p>Date d'échéance : <strong>${new Date(date_echeance).toLocaleDateString('fr-CH')}</strong></p>` : ''}
            <p>Merci de procéder au règlement dans les meilleurs délais.</p>
            <p>Si vous avez déjà effectué le paiement, veuillez ignorer ce message.</p>
            <br/>
            <p>Cordialement,<br/>L'équipe OnVousTrouve.ch</p>
          </div>
          <div style="padding: 16px; text-align: center; color: #9ca3af; font-size: 12px;">
            OnVousTrouve.ch — Adrien Haubrich — Le Bouveret, Suisse
          </div>
        </div>
      `
    })

    return Response.json({ success: true, message: 'Relance envoyée' })
  } catch (err: unknown) {
    console.error('Erreur envoi relance:', err)
    return Response.json(
      { error: err instanceof Error ? err.message : 'Erreur lors de l\'envoi de la relance' },
      { status: 500 }
    )
  }
}
