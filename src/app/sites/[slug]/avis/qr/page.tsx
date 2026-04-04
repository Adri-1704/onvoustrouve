import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import PrintButton from './PrintButton'

type Props = {
  params: Promise<{ slug: string }>
}

interface SiteData {
  id: string
  titre: string
  metier: string
  ville: string
  couleur_primaire: string
  logo_url: string | null
}

async function getSiteForQr(slug: string): Promise<SiteData | null> {
  const { data: client } = await supabase
    .from('clients')
    .select('id, is_active')
    .eq('slug', slug)
    .eq('is_active', true)
    .single()

  if (!client) return null

  const { data: site } = await supabase
    .from('sites')
    .select('id, titre, metier, ville, couleur_primaire, logo_url')
    .eq('client_id', client.id)
    .single()

  return site as SiteData | null
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const site = await getSiteForQr(slug)

  if (!site) {
    return { title: 'QR Code introuvable' }
  }

  return {
    title: `QR Code Avis - ${site.titre}`,
    description: `QR Code pour laisser un avis Google pour ${site.titre}`,
  }
}

export default async function QrCodePage({ params }: Props) {
  const { slug } = await params
  const site = await getSiteForQr(slug)

  if (!site) {
    notFound()
  }

  const accent = site.couleur_primaire || '#1a1a1a'
  const reviewUrl = `https://onvoustrouve.ch/sites/${slug}/avis?source=qr`
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(reviewUrl)}`

  return (
    <>
      {/* Styles d'impression */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media print {
              body { margin: 0; padding: 0; }
              .no-print { display: none !important; }
              .print-container {
                padding: 2cm;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
              }
            }
          `,
        }}
      />

      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8 print-container">
        <div className="w-full max-w-sm text-center">
          {/* Logo */}
          {site.logo_url && (
            <div className="mb-6 flex justify-center">
              <img
                src={site.logo_url}
                alt={`Logo ${site.titre}`}
                className="h-16 w-16 object-contain rounded-lg"
              />
            </div>
          )}

          {/* Nom du commerce */}
          <h1
            className="text-2xl sm:text-3xl font-bold mb-2"
            style={{ color: accent }}
          >
            {site.titre}
          </h1>
          <p className="text-gray-500 text-sm mb-8">
            {site.metier} &middot; {site.ville}
          </p>

          {/* Texte d'invitation */}
          <p className="text-lg font-semibold text-gray-800 mb-6">
            Votre avis compte !
          </p>

          {/* QR Code */}
          <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 inline-block mb-6 shadow-sm">
            <img
              src={qrImageUrl}
              alt={`QR Code pour laisser un avis a ${site.titre}`}
              width={280}
              height={280}
              className="mx-auto"
            />
          </div>

          {/* Instruction */}
          <p className="text-gray-700 font-medium text-base mb-2">
            Scannez pour laisser un avis
          </p>
          <p className="text-gray-500 text-sm mb-8">
            Pointez l&apos;appareil photo de votre telephone vers le QR code
          </p>

          {/* Decorative stars */}
          <div className="flex justify-center gap-1 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-6 h-6"
                fill={accent}
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Boutons d'action (non imprimes) */}
          <div className="no-print flex flex-col gap-3">
            <a
              href={qrImageUrl}
              download={`qr-avis-${slug}.png`}
              className="inline-flex items-center justify-center gap-2 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: accent }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Telecharger le QR Code
            </a>

            <PrintButton />
          </div>

          {/* Footer OnVousTrouve */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <a
              href="https://onvoustrouve.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors no-print"
            >
              Propulse par OnVousTrouve.ch
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
