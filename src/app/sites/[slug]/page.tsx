import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'

type Props = {
  params: Promise<{ slug: string }>
}

// Types
interface Site {
  id: string
  client_id: string
  titre: string
  metier: string
  description: string
  telephone: string
  email_contact: string
  adresse: string
  ville: string
  hero_titre: string
  hero_sous_titre: string
  couleur_primaire: string
  couleur_secondaire: string
  logo_url: string | null
  hero_image_url: string | null
  facebook: string | null
  instagram: string | null
  linkedin: string | null
}

interface Service {
  id: string
  nom: string
  description: string
  prix: string
  ordre: number
}

interface Horaire {
  id: string
  jour: string
  ouverture: string
  fermeture: string
  ferme: boolean
  ordre: number
}

interface Temoignage {
  id: string
  nom: string
  texte: string
  note: number
}

interface GalerieItem {
  id: string
  image_url: string
  legende: string
  ordre: number
}

async function getSiteData(slug: string) {
  // Recuperer le client par slug
  const { data: client } = await supabase
    .from('clients')
    .select('id, is_active')
    .eq('slug', slug)
    .eq('is_active', true)
    .single()

  if (!client) return null

  // Recuperer toutes les donnees en parallele
  const [siteRes, servicesRes, horairesRes, temoignagesRes, galerieRes] =
    await Promise.all([
      supabase
        .from('sites')
        .select('*')
        .eq('client_id', client.id)
        .single(),
      supabase
        .from('services')
        .select('*')
        .eq('site_id', client.id)
        .order('ordre', { ascending: true }),
      supabase
        .from('horaires')
        .select('*')
        .eq('site_id', client.id)
        .order('ordre', { ascending: true }),
      supabase
        .from('temoignages')
        .select('*')
        .eq('site_id', client.id),
      supabase
        .from('galerie')
        .select('*')
        .eq('site_id', client.id)
        .order('ordre', { ascending: true }),
    ])

  if (!siteRes.data) return null

  return {
    site: siteRes.data as Site,
    services: (servicesRes.data || []) as Service[],
    horaires: (horairesRes.data || []) as Horaire[],
    temoignages: (temoignagesRes.data || []) as Temoignage[],
    galerie: (galerieRes.data || []) as GalerieItem[],
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const data = await getSiteData(slug)

  if (!data) {
    return { title: 'Site introuvable' }
  }

  return {
    title: `${data.site.titre} - ${data.site.metier} a ${data.site.ville}`,
    description: data.site.description,
    openGraph: {
      title: data.site.titre,
      description: data.site.description,
      type: 'website',
      locale: 'fr_CH',
    },
  }
}

function StarRating({ note }: { note: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= note ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default async function SitePage({ params }: Props) {
  const { slug } = await params
  const data = await getSiteData(slug)

  if (!data) {
    notFound()
  }

  const { site, services, horaires, temoignages, galerie } = data
  const primaire = site.couleur_primaire || '#1e40af'
  const secondaire = site.couleur_secondaire || '#dbeafe'

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header
        className="text-white py-4 px-6 shadow-md"
        style={{ backgroundColor: primaire }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            {site.logo_url && (
              <img
                src={site.logo_url}
                alt={`Logo ${site.titre}`}
                className="h-10 w-10 rounded-full object-cover bg-white"
              />
            )}
            <div>
              <h1 className="text-xl font-bold">{site.titre}</h1>
              <p className="text-sm opacity-90">{site.metier}</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            {services.length > 0 && (
              <a href="#services" className="hover:opacity-80 transition-opacity">
                Services
              </a>
            )}
            {galerie.length > 0 && (
              <a href="#galerie" className="hover:opacity-80 transition-opacity">
                Galerie
              </a>
            )}
            {temoignages.length > 0 && (
              <a href="#temoignages" className="hover:opacity-80 transition-opacity">
                Avis
              </a>
            )}
            <a href="#contact" className="hover:opacity-80 transition-opacity">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative py-20 px-6"
        style={{
          backgroundColor: secondaire,
          backgroundImage: site.hero_image_url
            ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${site.hero_image_url})`
            : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: site.hero_image_url ? '#ffffff' : primaire }}
          >
            {site.hero_titre || site.titre}
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{
              color: site.hero_image_url ? '#ffffffdd' : '#4b5563',
            }}
          >
            {site.hero_sous_titre || site.description}
          </p>
          {site.telephone && (
            <a
              href={`tel:${site.telephone}`}
              className="inline-block mt-8 px-8 py-3 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: primaire }}
            >
              Appelez-nous : {site.telephone}
            </a>
          )}
        </div>
      </section>

      {/* Description */}
      {site.description && (
        <section className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: primaire }}
            >
              A propos
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {site.description}
            </p>
          </div>
        </section>
      )}

      {/* Services */}
      {services.length > 0 && (
        <section id="services" className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h3
              className="text-2xl font-bold text-center mb-10"
              style={{ color: primaire }}
            >
              Nos services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {service.nom}
                  </h4>
                  {service.description && (
                    <p className="text-gray-600 text-sm mb-3">
                      {service.description}
                    </p>
                  )}
                  {service.prix && (
                    <p
                      className="font-bold text-lg"
                      style={{ color: primaire }}
                    >
                      {service.prix}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Galerie */}
      {galerie.length > 0 && (
        <section id="galerie" className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h3
              className="text-2xl font-bold text-center mb-10"
              style={{ color: primaire }}
            >
              Galerie
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galerie.map((item) => (
                <div key={item.id} className="relative group">
                  <img
                    src={item.image_url}
                    alt={item.legende || 'Photo'}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  {item.legende && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.legende}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Temoignages */}
      {temoignages.length > 0 && (
        <section id="temoignages" className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h3
              className="text-2xl font-bold text-center mb-10"
              style={{ color: primaire }}
            >
              Avis clients
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {temoignages.map((t) => (
                <div
                  key={t.id}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <StarRating note={t.note} />
                  <p className="text-gray-600 mt-3 italic">
                    &ldquo;{t.texte}&rdquo;
                  </p>
                  <p className="text-gray-800 font-semibold mt-3">
                    {t.nom}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Horaires + Contact */}
      <section id="contact" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3
            className="text-2xl font-bold text-center mb-10"
            style={{ color: primaire }}
          >
            Contact & Horaires
          </h3>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Horaires */}
            {horaires.length > 0 && (
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-4">
                  Horaires d&apos;ouverture
                </h4>
                <div className="space-y-2">
                  {horaires.map((h) => (
                    <div
                      key={h.id}
                      className="flex justify-between py-2 border-b border-gray-100"
                    >
                      <span className="font-medium text-gray-700">
                        {h.jour}
                      </span>
                      <span className="text-gray-600">
                        {h.ferme
                          ? 'Ferme'
                          : `${h.ouverture} - ${h.fermeture}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-4">
                Coordonnees
              </h4>
              <div className="space-y-3">
                {site.adresse && (
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 mt-0.5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-gray-600">
                      {site.adresse}
                      {site.ville && `, ${site.ville}`}
                    </span>
                  </div>
                )}
                {site.telephone && (
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <a
                      href={`tel:${site.telephone}`}
                      className="text-gray-600 hover:underline"
                    >
                      {site.telephone}
                    </a>
                  </div>
                )}
                {site.email_contact && (
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a
                      href={`mailto:${site.email_contact}`}
                      className="text-gray-600 hover:underline"
                    >
                      {site.email_contact}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="text-white py-8 px-6 mt-auto"
        style={{ backgroundColor: primaire }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="font-semibold">{site.titre}</p>
              <p className="text-sm opacity-80">
                {site.metier}
                {site.ville && ` - ${site.ville}`}
              </p>
            </div>

            {/* Reseaux sociaux */}
            <div className="flex gap-4">
              {site.facebook && (
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              )}
              {site.instagram && (
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              )}
              {site.linkedin && (
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Bandeau OnVousTrouve */}
          <div className="mt-8 pt-4 border-t border-white/20 text-center">
            <Link
              href="/"
              className="text-xs opacity-60 hover:opacity-80 transition-opacity"
            >
              Site cree avec OnVousTrouve.ch
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
