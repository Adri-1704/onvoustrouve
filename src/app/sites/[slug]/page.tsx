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
  // 1. Recuperer le client par slug
  const { data: client } = await supabase
    .from('clients')
    .select('id, is_active')
    .eq('slug', slug)
    .eq('is_active', true)
    .single()

  if (!client) return null

  // 2. Recuperer le site par client_id
  const { data: site } = await supabase
    .from('sites')
    .select('*')
    .eq('client_id', client.id)
    .single()

  if (!site) return null

  // 3. Utiliser site.id pour recuperer les donnees liees
  const [servicesRes, horairesRes, temoignagesRes, galerieRes] =
    await Promise.all([
      supabase
        .from('services')
        .select('*')
        .eq('site_id', site.id)
        .order('ordre', { ascending: true }),
      supabase
        .from('horaires')
        .select('*')
        .eq('site_id', site.id)
        .order('ordre', { ascending: true }),
      supabase
        .from('temoignages')
        .select('*')
        .eq('site_id', site.id),
      supabase
        .from('galerie')
        .select('*')
        .eq('site_id', site.id)
        .order('ordre', { ascending: true }),
    ])

  return {
    site: site as Site,
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
          className={`w-4 h-4 ${star <= note ? 'text-yellow-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function averageRating(temoignages: Temoignage[]): string {
  if (temoignages.length === 0) return '0'
  const avg = temoignages.reduce((sum, t) => sum + t.note, 0) / temoignages.length
  return avg.toFixed(1)
}

export default async function SitePage({ params }: Props) {
  const { slug } = await params
  const data = await getSiteData(slug)

  if (!data) {
    notFound()
  }

  const { site, services, horaires, temoignages, galerie } = data
  const accent = site.couleur_primaire || '#1a1a1a'

  const hasServices = services.length > 0
  const hasGalerie = galerie.length > 0
  const hasTemoignages = temoignages.length > 0
  const hasHoraires = horaires.length > 0
  const hasAddress = !!(site.adresse && site.ville)
  const mapsQuery = encodeURIComponent(`${site.adresse || ''}, ${site.ville || ''}`)

  return (
    <div className="min-h-screen flex flex-col scroll-smooth bg-white">

      {/* ============================================================ */}
      {/* HEADER - Epure, fond blanc, nom centre                       */}
      {/* ============================================================ */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Nom et metier centres */}
          <div className="flex flex-col items-center py-4 sm:py-5">
            <div className="flex items-center gap-3">
              {site.logo_url && (
                <img
                  src={site.logo_url}
                  alt={`Logo ${site.titre}`}
                  className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover"
                />
              )}
              <h1 className="text-xl sm:text-2xl font-light tracking-[0.25em] uppercase text-gray-900">
                {site.titre}
              </h1>
            </div>
          </div>

          {/* Navigation avec liens d ancrage */}
          <nav className="flex items-center justify-center gap-6 sm:gap-8 lg:gap-10 pb-3 text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-gray-500 overflow-x-auto">
            {hasServices && (
              <a href="#services" className="hover:text-gray-900 transition-colors whitespace-nowrap">
                Services
              </a>
            )}
            {hasGalerie && (
              <a href="#galerie" className="hover:text-gray-900 transition-colors whitespace-nowrap">
                Galerie
              </a>
            )}
            {hasTemoignages && (
              <a href="#temoignages" className="hover:text-gray-900 transition-colors whitespace-nowrap">
                Avis
              </a>
            )}
            <a href="#contact" className="hover:text-gray-900 transition-colors whitespace-nowrap">
              Contact
            </a>
            {site.telephone && (
              <a
                href={`tel:${site.telephone}`}
                className="hidden sm:inline-flex items-center gap-1.5 whitespace-nowrap transition-colors"
                style={{ color: accent }}
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {site.telephone}
              </a>
            )}
          </nav>
        </div>
      </header>

      {/* ============================================================ */}
      {/* HERO - Fond blanc/creme, texte elegant                       */}
      {/* ============================================================ */}
      <section className="relative bg-[#fafaf8]">
        {site.hero_image_url ? (
          /* Hero avec image de fond */
          <div
            className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(0,0,0,0.5)), url(${site.hero_image_url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="relative text-center px-4 sm:px-6 py-20 sm:py-28 max-w-4xl mx-auto">
              <p className="uppercase tracking-[0.35em] text-xs sm:text-sm mb-6 font-light text-white/80">
                {site.metier}{site.ville ? ` \u2014 ${site.ville}` : ''}
              </p>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6 text-white tracking-wide">
                {site.hero_titre || site.titre}
              </h2>
              <div className="w-12 h-px mx-auto mb-6" style={{ backgroundColor: accent }} />
              <p className="text-base sm:text-lg text-white/80 font-light max-w-2xl mx-auto leading-relaxed mb-10">
                {site.hero_sous_titre || site.description}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {site.telephone && (
                  <a
                    href={`tel:${site.telephone}`}
                    className="inline-flex items-center gap-2 px-8 py-3 border border-white text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-white hover:text-gray-900 transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Nous appeler
                  </a>
                )}
                {hasServices && (
                  <a
                    href="#services"
                    className="inline-flex items-center px-8 py-3 border border-white/50 text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-white/10 transition-all duration-300"
                  >
                    Decouvrir
                  </a>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Hero sans image - fond creme epure */
          <div className="relative flex items-center justify-center min-h-[50vh] sm:min-h-[60vh]">
            <div className="text-center px-4 sm:px-6 py-20 sm:py-28 max-w-4xl mx-auto">
              <p className="uppercase tracking-[0.35em] text-xs sm:text-sm mb-6 font-light text-gray-400">
                {site.metier}{site.ville ? ` \u2014 ${site.ville}` : ''}
              </p>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6 text-gray-900 tracking-wide">
                {site.hero_titre || site.titre}
              </h2>
              <div className="w-12 h-px mx-auto mb-6" style={{ backgroundColor: accent }} />
              <p className="text-base sm:text-lg text-gray-500 font-light max-w-2xl mx-auto leading-relaxed mb-10">
                {site.hero_sous_titre || site.description}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {site.telephone && (
                  <a
                    href={`tel:${site.telephone}`}
                    className="inline-flex items-center gap-2 px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium text-white transition-all duration-300 hover:opacity-90"
                    style={{ backgroundColor: accent }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Nous appeler
                  </a>
                )}
                {hasServices && (
                  <a
                    href="#services"
                    className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 text-xs uppercase tracking-[0.2em] font-medium hover:border-gray-900 hover:text-gray-900 transition-all duration-300"
                  >
                    Decouvrir
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ============================================================ */}
      {/* VALEURS / CHIFFRES CLES                                      */}
      {/* ============================================================ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 text-center">
            {site.ville && (
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-2">Localisation</div>
                <div className="text-sm sm:text-base font-medium text-gray-900 uppercase tracking-wider">
                  {site.ville}
                </div>
              </div>
            )}
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-2">Metier</div>
              <div className="text-sm sm:text-base font-medium text-gray-900 uppercase tracking-wider">
                {site.metier}
              </div>
            </div>
            {hasServices && (
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-2">
                  {services.length > 1 ? 'Services' : 'Service'}
                </div>
                <div className="text-sm sm:text-base font-medium text-gray-900 uppercase tracking-wider">
                  {services.length} {services.length > 1 ? 'prestations' : 'prestation'}
                </div>
              </div>
            )}
            {hasTemoignages && (
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-2">Avis clients</div>
                <div className="text-sm sm:text-base font-medium text-gray-900 uppercase tracking-wider">
                  {averageRating(temoignages)}/5
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* A PROPOS                                                      */}
      {/* ============================================================ */}
      {site.description && (
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-8 h-px mx-auto mb-6" style={{ backgroundColor: accent }} />
            <h2 className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-8 font-medium">
              A propos
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-light">
              {site.description}
            </p>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/* SERVICES                                                      */}
      {/* ============================================================ */}
      {hasServices && (
        <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#f9fafb]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="w-8 h-px mx-auto mb-6" style={{ backgroundColor: accent }} />
              <h2 className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3 font-medium">
                Ce que nous proposons
              </h2>
              <p className="text-2xl sm:text-3xl font-light text-gray-900 tracking-wide">
                Nos services
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="group bg-white p-7 sm:p-8 border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-gray-900 mb-4">
                    {service.nom}
                  </h3>
                  {service.description && (
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 font-light">
                      {service.description}
                    </p>
                  )}
                  {service.prix && (
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <span
                        className="text-sm font-medium"
                        style={{ color: accent }}
                      >
                        {service.prix}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/* GALERIE                                                       */}
      {/* ============================================================ */}
      {hasGalerie && (
        <section id="galerie" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="w-8 h-px mx-auto mb-6" style={{ backgroundColor: accent }} />
              <h2 className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3 font-medium">
                Nos realisations
              </h2>
              <p className="text-2xl sm:text-3xl font-light text-gray-900 tracking-wide">
                Galerie
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {galerie.map((item, index) => (
                <div
                  key={item.id}
                  className={`group relative overflow-hidden ${
                    index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                  }`}
                >
                  <img
                    src={item.image_url}
                    alt={item.legende || 'Photo'}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      index === 0 ? 'h-64 sm:h-80 md:h-full' : 'h-48 sm:h-56 lg:h-64'
                    }`}
                  />
                  {item.legende && (
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end">
                      <p className="text-white text-xs uppercase tracking-wider p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-light">
                        {item.legende}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/* TEMOIGNAGES                                                   */}
      {/* ============================================================ */}
      {hasTemoignages && (
        <section id="temoignages" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#f9fafb]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="w-8 h-px mx-auto mb-6" style={{ backgroundColor: accent }} />
              <h2 className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3 font-medium">
                Ils nous font confiance
              </h2>
              <p className="text-2xl sm:text-3xl font-light text-gray-900 tracking-wide">
                Avis clients
              </p>
              <p className="mt-4 text-gray-400 text-sm font-light">
                Note moyenne : <span className="font-medium text-gray-700">{averageRating(temoignages)}/5</span> sur {temoignages.length} avis
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {temoignages.map((t) => (
                <div
                  key={t.id}
                  className="bg-white p-7 sm:p-8 border border-gray-100 hover:shadow-sm transition-all duration-300"
                >
                  {/* Guillemet decoratif */}
                  <span className="text-4xl font-serif leading-none block mb-3" style={{ color: accent }}>
                    &ldquo;
                  </span>
                  <p className="text-gray-500 text-sm leading-relaxed font-light mb-6">
                    {t.texte}
                  </p>
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.15em] font-medium text-gray-800">
                      {t.nom}
                    </span>
                    <StarRating note={t.note} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/* CONTACT & HORAIRES                                            */}
      {/* ============================================================ */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="w-8 h-px mx-auto mb-6" style={{ backgroundColor: accent }} />
            <h2 className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3 font-medium">
              Retrouvez-nous
            </h2>
            <p className="text-2xl sm:text-3xl font-light text-gray-900 tracking-wide">
              Contact &amp; Horaires
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {/* Colonne Horaires */}
            {hasHoraires && (
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-gray-400 mb-6">
                  Horaires d&apos;ouverture
                </h3>
                <div className="space-y-0">
                  {horaires.map((h) => (
                    <div
                      key={h.id}
                      className="flex justify-between items-center py-3 border-b border-gray-100"
                    >
                      <span className="text-sm text-gray-700 font-light">{h.jour}</span>
                      <span className={`text-sm font-light ${h.ferme ? 'text-gray-400' : 'text-gray-900'}`}>
                        {h.ferme ? 'Ferme' : `${h.ouverture} \u2013 ${h.fermeture}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Colonne Contact */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-gray-400 mb-6">
                Coordonnees
              </h3>
              <div className="space-y-5">
                {site.adresse && (
                  <div className="flex items-start gap-4">
                    <svg className="w-4 h-4 mt-0.5 shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm text-gray-600 font-light">
                      {site.adresse}
                      {site.ville && <>, {site.ville}</>}
                    </span>
                  </div>
                )}
                {site.telephone && (
                  <a
                    href={`tel:${site.telephone}`}
                    className="flex items-center gap-4 group"
                  >
                    <svg className="w-4 h-4 shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm text-gray-600 font-light group-hover:text-gray-900 transition-colors">
                      {site.telephone}
                    </span>
                  </a>
                )}
                {site.email_contact && (
                  <a
                    href={`mailto:${site.email_contact}`}
                    className="flex items-center gap-4 group"
                  >
                    <svg className="w-4 h-4 shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-gray-600 font-light group-hover:text-gray-900 transition-colors">
                      {site.email_contact}
                    </span>
                  </a>
                )}
              </div>

              {/* CTA telephone */}
              {site.telephone && (
                <a
                  href={`tel:${site.telephone}`}
                  className="inline-flex items-center gap-2 mt-8 px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium text-white transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: accent }}
                >
                  Appelez-nous
                </a>
              )}
            </div>
          </div>

          {/* Google Maps */}
          {hasAddress && (
            <div className="mt-14 overflow-hidden border border-gray-100">
              <iframe
                src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Carte - ${site.titre}`}
              />
            </div>
          )}
        </div>
      </section>

      {/* ============================================================ */}
      {/* FOOTER - Gris tres fonce, sobre, professionnel               */}
      {/* ============================================================ */}
      <footer className="bg-[#1a1a1a] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 mt-auto">
        <div className="max-w-5xl mx-auto">
          {/* Nom centre en grand */}
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl font-light tracking-[0.3em] uppercase mb-2">
              {site.titre}
            </h2>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 font-light">
              {site.metier}{site.ville ? ` \u2014 ${site.ville}` : ''}
            </p>
          </div>

          {/* Separateur */}
          <div className="w-8 h-px mx-auto mb-10" style={{ backgroundColor: accent }} />

          {/* Coordonnees centrees */}
          <div className="text-center space-y-2 text-sm text-gray-400 font-light mb-8">
            {site.adresse && (
              <p>{site.adresse}{site.ville ? `, ${site.ville}` : ''}</p>
            )}
            {site.telephone && (
              <p>
                <a href={`tel:${site.telephone}`} className="hover:text-white transition-colors">
                  {site.telephone}
                </a>
              </p>
            )}
            {site.email_contact && (
              <p>
                <a href={`mailto:${site.email_contact}`} className="hover:text-white transition-colors">
                  {site.email_contact}
                </a>
              </p>
            )}
          </div>

          {/* Reseaux sociaux */}
          {(site.facebook || site.instagram || site.linkedin) && (
            <div className="flex justify-center gap-5 mb-10">
              {site.facebook && (
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              )}
              {site.instagram && (
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              )}
              {site.linkedin && (
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
            </div>
          )}

          {/* Navigation footer */}
          <nav className="flex flex-wrap justify-center gap-6 mb-10 text-[10px] uppercase tracking-[0.2em] text-gray-500">
            {hasServices && (
              <a href="#services" className="hover:text-white transition-colors">Services</a>
            )}
            {hasGalerie && (
              <a href="#galerie" className="hover:text-white transition-colors">Galerie</a>
            )}
            {hasTemoignages && (
              <a href="#temoignages" className="hover:text-white transition-colors">Avis</a>
            )}
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Copyright + bandeau OnVousTrouve */}
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-[10px] uppercase tracking-wider">
              &copy; {new Date().getFullYear()} {site.titre}. Tous droits reserves.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-gray-600 hover:text-gray-400 transition-colors"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Site cree avec OnVousTrouve.ch
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
