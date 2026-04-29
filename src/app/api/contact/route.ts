import { Resend } from 'resend'

function getResend() {
  const key = process.env.RESEND_API_KEY
  if (!key) throw new Error('RESEND_API_KEY non configuree')
  return new Resend(key)
}

export async function POST(request: Request) {
  try {
    const { name, email, phone, plan, message } = await request.json()

    if (!name || !email || !message) {
      return Response.json(
        { error: 'Nom, email et message sont requis' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json({ error: 'Email invalide' }, { status: 400 })
    }

    const resend = getResend()
    await resend.emails.send({
      from: 'OnVousTrouve.ch <contact@lateliersuisse.ch>',
      to: 'contact@onvoustrouve.ch',
      replyTo: email,
      subject: `Nouveau prospect : ${name}${plan ? ` (${plan})` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1e40af; color: white; padding: 24px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Nouveau contact OnVousTrouve.ch</h1>
          </div>
          <div style="padding: 32px; background: #f9fafb;">
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Téléphone :</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
            ${plan ? `<p><strong>Plan choisi :</strong> ${plan}</p>` : ''}
            <p><strong>Message :</strong></p>
            <div style="background: white; padding: 16px; border-left: 4px solid #1e40af; white-space: pre-wrap;">${message}</div>
          </div>
          <div style="padding: 16px; text-align: center; color: #9ca3af; font-size: 12px;">
            Envoyé depuis le formulaire de contact OnVousTrouve.ch
          </div>
        </div>
      `
    })

    return Response.json({ success: true })
  } catch (err: unknown) {
    console.error('Erreur envoi contact:', err)
    return Response.json(
      { error: err instanceof Error ? err.message : 'Erreur lors de l\'envoi' },
      { status: 500 }
    )
  }
}
