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
  const primaire = site.couleur_primaire || '#1e40af'
  const secondaire = site.couleur_secondaire || '#dbeafe'

  const hasServices = services.length > 0
  const hasGalerie = galerie.length > 0
  const hasTemoignages = temoignages.length > 0
  const hasHoraires = horaires.length > 0
  const hasAddress = !!(site.adresse && site.ville)
  const mapsQuery = encodeURIComponent(`${site.adresse || ''}, ${site.ville || ''}`)

  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      {/* ============================================================ */}
      {/* NAVIGATION STICKY                                            */}
      {/* ============================================================ */}
      <header
        className="sticky top-0 z-50 backdrop-blur-md border-b border-white/10"
        style={{ backgroundColor: `${primaire}f0` }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo + Nom */}
            <div className="flex items-center gap-3">
              {site.logo_url ? (
                <img
                  src={site.logo_url}
                  alt={`Logo ${site.titre}`}
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover bg-white shadow-md"
                />
              ) : (
                <div
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-full flex items-center justify-center text-lg sm:text-xl font-bold shadow-md"
                  style={{ backgroundColor: secondaire, color: primaire }}
                >
                  {site.titre.charAt(0).toUpperCase()}
                </div>
              )}
              <div>
                <div className="text-lg sm:text-xl font-bold text-white">{site.titre}</div>
                <div className="text-xs text-white/70 tracking-widest uppercase hidden sm:block">{site.metier}</div>
              </div>
            </div>

            {/* Navigation desktop */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-white/90">
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
              {site.telephone && (
                <a
                  href={`tel:${site.telephone}`}
                  className="ml-2 px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105"
                  style={{ backgroundColor: secondaire, color: primaire }}
                >
                  Nous appeler
                </a>
              )}
            </nav>

            {/* Bouton mobile */}
            {site.telephone && (
              <a
                href={`tel:${site.telephone}`}
                className="md:hidden px-4 py-2 rounded-full text-xs font-semibold"
                style={{ backgroundColor: secondaire, color: primaire }}
              >
                Appeler
              </a>
            )}
          </div>
        </div>
      </header>

      {/* ============================================================ */}
      {/* HERO SECTION                                                  */}
      {/* ============================================================ */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: site.hero_image_url
            ? `linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.65)), url(${site.hero_image_url})`
            : `linear-gradient(135deg, ${primaire} 0%, ${primaire}cc 50%, ${secondaire}99 100%)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Motif decoratif quand pas d image hero */}
        {!site.hero_image_url && (
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        )}

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p
              className="uppercase tracking-[0.3em] text-sm mb-4 font-medium"
              style={{ color: site.hero_image_url ? '#ffffffcc' : `${secondaire}` }}
            >
              {site.metier}{site.ville ? ` - ${site.ville}` : ''}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              {site.hero_titre || site.titre}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
              {site.hero_sous_titre || site.description}
            </p>
            <div className="flex flex-wrap gap-4">
              {site.telephone && (
                <a
                  href={`tel:${site.telephone}`}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base transition-all hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: secondaire, color: primaire }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {site.telephone}
                </a>
              )}
              {hasServices && (
                <a
                  href="#services"
                  className="inline-flex items-center px-8 py-3.5 rounded-full border-2 border-white/40 text-white font-semibold text-base hover:bg-white/10 transition-all"
                >
                  Nos services
                </a>
              )}
            </div>

            {/* Badge avis */}
            {hasTemoignages && (
              <div className="mt-10 inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-full px-5 py-2.5">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white text-sm font-medium">
                  {averageRating(temoignages)}/5 - {temoignages.length} avis
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Vague decorative en bas */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ============================================================ */}
      {/* A PROPOS                                                      */}
      {/* ============================================================ */}
      {site.description && (
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <p
                className="uppercase tracking-widest text-sm mb-3 font-medium"
                style={{ color: primaire }}
              >
                Bienvenue
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-8"
                style={{ color: primaire }}
              >
                A propos
              </h2>
              <div
                className="w-16 h-1 mx-auto mb-8 rounded-full"
                style={{ backgroundColor: secondaire }}
              />
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
                {site.description}
              </p>
            </div>

            {/* Indicateurs rapides */}
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {hasServices && (
                <div
                  className="text-center p-5 rounded-2xl"
                  style={{ backgroundColor: `${secondaire}40` }}
                >
                  <div className="text-2xl sm:text-3xl font-bold" style={{ color: primaire }}>
                    {services.length}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {services.length > 1 ? 'Services' : 'Service'}
                  </div>
                </div>
              )}
              {hasTemoignages && (
                <div
                  className="text-center p-5 rounded-2xl"
                  style={{ backgroundColor: `${secondaire}40` }}
                >
                  <div className="text-2xl sm:text-3xl font-bold" style={{ color: primaire }}>
                    {averageRating(temoignages)}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Note moyenne</div>
                </div>
              )}
              {hasGalerie && (
                <div
                  className="text-center p-5 rounded-2xl"
                  style={{ backgroundColor: `${secondaire}40` }}
                >
                  <div className="text-2xl sm:text-3xl font-bold" style={{ color: primaire }}>
                    {galerie.length}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Photos</div>
                </div>
              )}
              {site.ville && (
                <div
                  className="text-center p-5 rounded-2xl"
                  style={{ backgroundColor: `${secondaire}40` }}
                >
                  <div className="text-2xl sm:text-3xl font-bold" style={{ color: primaire }}>
                    <svg className="w-7 h-7 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{site.ville}</div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/* SERVICES                                                      */}
      {/* ============================================================ */}
      {hasServices && (
        <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p
                className="uppercase tracking-widest text-sm mb-3 font-medium"
                style={{ color: primaire }}
              >
                Ce que nous proposons
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold"
                style={{ color: primaire }}
              >
                Nos services
              </h2>
              <div
                className="w-16 h-1 mx-auto mt-4 rounded-full"
                style={{ backgroundColor: secondaire }}
              />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
                >
                  {/* Numero */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold mb-5 transition-colors duration-300"
                    style={{
                      backgroundColor: `${secondaire}60`,
                      color: primaire,
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {service.nom}
                  </h3>
                  {service.description && (
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                  )}
                  {service.prix && (
                    <div className="flex items-center gap-2">
                      <div
                        className="h-px flex-1"
                        style={{ backgroundColor: `${secondaire}80` }}
                      />
                      <span
                        className="font-bold text-lg"
                        style={{ color: primaire }}
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
              <p
                className="uppercase tracking-widest text-sm mb-3 font-medium"
                style={{ color: primaire }}
              >
                Nos realisations
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold"
                style={{ color: primaire }}
              >
                Galerie
              </h2>
              <div
                className="w-16 h-1 mx-auto mt-4 rounded-full"
                style={{ backgroundColor: secondaire }}
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
              {galerie.map((item, index) => (
                <div
                  key={item.id}
                  className={`group relative overflow-hidden rounded-2xl ${
                    index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                  }`}
                >
                  <img
                    src={item.image_url}
                    alt={item.legende || 'Photo'}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      index === 0 ? 'h-64 sm:h-80 md:h-full' : 'h-48 sm:h-56 lg:h-64'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {item.legende && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-sm font-medium">
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
        <section id="temoignages" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p
                className="uppercase tracking-widest text-sm mb-3 font-medium"
                style={{ color: primaire }}
              >
                Ils nous font confiance
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold"
                style={{ color: primaire }}
              >
                Avis clients
              </h2>
              <div
                className="w-16 h-1 mx-auto mt-4 rounded-full"
                style={{ backgroundColor: secondaire }}
              />
              <p className="mt-4 text-gray-500 text-lg">
                Note moyenne : <span className="font-bold" style={{ color: primaire }}>{averageRating(temoignages)}/5</span> sur {temoignages.length} avis
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {temoignages.map((t) => (
                <div
                  key={t.id}
                  className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 relative"
                >
                  {/* Guillemet decoratif */}
                  <div
                    className="absolute -top-3 left-6 w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-serif"
                    style={{ backgroundColor: primaire }}
                  >
                    &ldquo;
                  </div>
                  <div className="pt-4">
                    <StarRating note={t.note} />
                    <p className="text-gray-600 mt-4 leading-relaxed italic">
                      {t.texte}
                    </p>
                    <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
                        style={{ backgroundColor: primaire }}
                      >
                        {t.nom.charAt(0).toUpperCase()}
                      </div>
                      <span className="font-semibold text-gray-800">{t.nom}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/* HORAIRES & CONTACT                                            */}
      {/* ============================================================ */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="uppercase tracking-widest text-sm mb-3 font-medium"
              style={{ color: primaire }}
            >
              Retrouvez-nous
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ color: primaire }}
            >
              Contact & Horaires
            </h2>
            <div
              className="w-16 h-1 mx-auto mt-4 rounded-full"
              style={{ backgroundColor: secondaire }}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Colonne Horaires */}
            {hasHoraires && (
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${secondaire}60`, color: primaire }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Horaires d&apos;ouverture
                  </h3>
                </div>
                <div className="space-y-1">
                  {horaires.map((h, i) => (
                    <div
                      key={h.id}
                      className={`flex justify-between items-center px-4 py-3 rounded-xl ${
                        i % 2 === 0 ? 'bg-white' : ''
                      }`}
                    >
                      <span className="font-medium text-gray-700">{h.jour}</span>
                      <span
                        className={`text-sm font-medium px-3 py-1 rounded-full ${
                          h.ferme
                            ? 'bg-red-50 text-red-600'
                            : ''
                        }`}
                        style={!h.ferme ? { backgroundColor: `${secondaire}40`, color: primaire } : {}}
                      >
                        {h.ferme ? 'Ferme' : `${h.ouverture} - ${h.fermeture}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Colonne Contact */}
            <div className="space-y-6">
              {/* Coordonnees */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${secondaire}60`, color: primaire }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Coordonnees</h3>
                </div>

                <div className="space-y-4">
                  {site.adresse && (
                    <div className="flex items-start gap-4 p-3 rounded-xl bg-white">
                      <svg className="w-5 h-5 mt-0.5 shrink-0" style={{ color: primaire }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-700">
                        {site.adresse}
                        {site.ville && <>, {site.ville}</>}
                      </span>
                    </div>
                  )}
                  {site.telephone && (
                    <a
                      href={`tel:${site.telephone}`}
                      className="flex items-center gap-4 p-3 rounded-xl bg-white hover:shadow-md transition-shadow group"
                    >
                      <svg className="w-5 h-5 shrink-0" style={{ color: primaire }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-gray-700 group-hover:underline">{site.telephone}</span>
                    </a>
                  )}
                  {site.email_contact && (
                    <a
                      href={`mailto:${site.email_contact}`}
                      className="flex items-center gap-4 p-3 rounded-xl bg-white hover:shadow-md transition-shadow group"
                    >
                      <svg className="w-5 h-5 shrink-0" style={{ color: primaire }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-700 group-hover:underline">{site.email_contact}</span>
                    </a>
                  )}
                </div>
              </div>

              {/* CTA telephone */}
              {site.telephone && (
                <a
                  href={`tel:${site.telephone}`}
                  className="block w-full text-center px-8 py-4 rounded-2xl text-white font-semibold text-lg transition-all hover:shadow-lg hover:scale-[1.02]"
                  style={{ backgroundColor: primaire }}
                >
                  Appelez-nous maintenant
                </a>
              )}
            </div>
          </div>

          {/* Google Maps */}
          {hasAddress && (
            <div className="mt-10 rounded-2xl overflow-hidden shadow-md border border-gray-100">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${mapsQuery}`}
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
      {/* FOOTER                                                        */}
      {/* ============================================================ */}
      <footer
        className="text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 mt-auto"
        style={{ backgroundColor: primaire }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Colonne 1 : Identite */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                {site.logo_url ? (
                  <img
                    src={site.logo_url}
                    alt={`Logo ${site.titre}`}
                    className="h-10 w-10 rounded-full object-cover bg-white"
                  />
                ) : (
                  <div
                    className="h-10 w-10 rounded-full flex items-center justify-center text-lg font-bold"
                    style={{ backgroundColor: secondaire, color: primaire }}
                  >
                    {site.titre.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="text-xl font-bold">{site.titre}</div>
              </div>
              <p className="text-white/60 text-sm">{site.metier}</p>
              {site.adresse && (
                <p className="text-white/60 text-sm mt-2">
                  {site.adresse}{site.ville ? `, ${site.ville}` : ''}
                </p>
              )}
            </div>

            {/* Colonne 2 : Navigation */}
            <div>
              <h4 className="font-bold mb-4 text-white/90">Navigation</h4>
              <ul className="space-y-2 text-sm text-white/60">
                {hasServices && (
                  <li>
                    <a href="#services" className="hover:text-white transition-colors">Nos services</a>
                  </li>
                )}
                {hasGalerie && (
                  <li>
                    <a href="#galerie" className="hover:text-white transition-colors">Galerie</a>
                  </li>
                )}
                {hasTemoignages && (
                  <li>
                    <a href="#temoignages" className="hover:text-white transition-colors">Avis clients</a>
                  </li>
                )}
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">Contact & Horaires</a>
                </li>
              </ul>
            </div>

            {/* Colonne 3 : Contact + RS */}
            <div>
              <h4 className="font-bold mb-4 text-white/90">Contact</h4>
              <ul className="space-y-2 text-sm text-white/60">
                {site.telephone && (
                  <li>
                    <a href={`tel:${site.telephone}`} className="hover:text-white transition-colors">
                      {site.telephone}
                    </a>
                  </li>
                )}
                {site.email_contact && (
                  <li>
                    <a href={`mailto:${site.email_contact}`} className="hover:text-white transition-colors">
                      {site.email_contact}
                    </a>
                  </li>
                )}
              </ul>

              {/* Reseaux sociaux */}
              {(site.facebook || site.instagram || site.linkedin) && (
                <div className="flex gap-3 mt-5">
                  {site.facebook && (
                    <a
                      href={site.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                      style={{ backgroundColor: `${secondaire}30` }}
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                  )}
                  {site.instagram && (
                    <a
                      href={site.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                      style={{ backgroundColor: `${secondaire}30` }}
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                  )}
                  {site.linkedin && (
                    <a
                      href={site.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                      style={{ backgroundColor: `${secondaire}30` }}
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Separateur + copyright */}
          <div className="border-t border-white/10 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} {site.titre}. Tous droits reserves.
            </p>

            {/* Bandeau OnVousTrouve */}
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Site cree avec OnVousTrouve.ch
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
