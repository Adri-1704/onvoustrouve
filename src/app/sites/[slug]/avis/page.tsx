'use client'

import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

interface SiteData {
  id: string
  titre: string
  couleur_primaire: string
  logo_url: string | null
  google_review_url: string | null
}

function StarIcon({ filled, color }: { filled: boolean; color: string }) {
  return (
    <svg
      className="w-8 h-8 sm:w-10 sm:h-10"
      fill={filled ? color : '#e5e7eb'}
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

export default function AvisPage() {
  const params = useParams()
  const slug = params.slug as string
  const [site, setSite] = useState<SiteData | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [tracked, setTracked] = useState(false)

  useEffect(() => {
    async function fetchSite() {
      const { data: client } = await supabase
        .from('clients')
        .select('id, is_active')
        .eq('slug', slug)
        .eq('is_active', true)
        .single()

      if (!client) {
        setNotFound(true)
        setLoading(false)
        return
      }

      const { data: siteData } = await supabase
        .from('sites')
        .select('id, titre, couleur_primaire, logo_url, google_review_url')
        .eq('client_id', client.id)
        .single()

      if (!siteData) {
        setNotFound(true)
        setLoading(false)
        return
      }

      setSite(siteData as SiteData)
      setLoading(false)
    }

    fetchSite()
  }, [slug])

  async function handleClick() {
    if (!site || tracked) return

    // Determiner la source depuis les parametres URL
    const urlParams = new URLSearchParams(window.location.search)
    const source = urlParams.get('source') || 'link'

    try {
      await fetch('/api/reviews/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ site_id: site.id, source }),
      })
      setTracked(true)
    } catch {
      // Ne pas bloquer l'utilisateur si le tracking echoue
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
      </div>
    )
  }

  if (notFound || !site) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center px-6">
          <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Site introuvable
          </h2>
          <p className="text-gray-600 mb-8 max-w-md">
            Le site que vous recherchez n&apos;existe pas ou n&apos;est plus
            disponible.
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Retour a l&apos;accueil
          </Link>
        </div>
      </div>
    )
  }

  const accent = site.couleur_primaire || '#1a1a1a'

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Contenu principal */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md text-center">
          {/* Logo */}
          {site.logo_url && (
            <div className="mb-6 flex justify-center">
              <img
                src={site.logo_url}
                alt={`Logo ${site.titre}`}
                className="h-20 w-20 object-contain rounded-xl shadow-sm"
              />
            </div>
          )}

          {/* Icone coeur / merci */}
          <div
            className="mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${accent}15` }}
          >
            <svg
              className="w-8 h-8"
              fill={accent}
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

          {/* Message de remerciement */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Merci d&apos;avoir choisi
          </h1>
          <p
            className="text-2xl sm:text-3xl font-bold mb-6"
            style={{ color: accent }}
          >
            {site.titre} !
          </p>

          <p className="text-gray-600 mb-8 text-base sm:text-lg leading-relaxed">
            Votre avis compte enormement pour nous.
            <br />
            Partagez votre experience en quelques secondes !
          </p>

          {/* Etoiles decoratives */}
          <div className="flex justify-center gap-1 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon key={star} filled={true} color={accent} />
            ))}
          </div>

          {/* Bouton Google Review */}
          {site.google_review_url ? (
            <a
              href={site.google_review_url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
              className="inline-flex items-center justify-center gap-3 w-full text-white font-semibold text-lg py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: accent }}
            >
              {/* Google icon */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#fff" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#fff" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#fff" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#fff" />
              </svg>
              Laisser un avis sur Google
            </a>
          ) : (
            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
              <svg
                className="w-12 h-12 mx-auto mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-gray-600 font-medium">
                Le lien pour laisser un avis est en cours de configuration.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Revenez bientot !
              </p>
            </div>
          )}

          {/* Lien retour */}
          <Link
            href={`/sites/${slug}`}
            className="inline-block mt-6 text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            &larr; Retour au site
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center">
        <a
          href="https://onvoustrouve.ch"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
        >
          Propulse par OnVousTrouve.ch
        </a>
      </footer>
    </div>
  )
}
