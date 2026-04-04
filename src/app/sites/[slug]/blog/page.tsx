import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'

type Props = {
  params: Promise<{ slug: string }>
}

interface Site {
  id: string
  titre: string
  metier: string
  ville: string
  couleur_primaire: string
  logo_url: string | null
}

interface BlogPost {
  id: string
  titre: string
  slug: string
  contenu: string
  meta_description: string | null
  mots_cles: string[] | null
  image_url: string | null
  created_at: string
}

async function getBlogData(slug: string) {
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
    .select('id, titre, metier, ville, couleur_primaire, logo_url')
    .eq('client_id', client.id)
    .single()

  if (!site) return null

  // 3. Recuperer les articles publies
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('id, titre, slug, contenu, meta_description, mots_cles, image_url, created_at')
    .eq('site_id', site.id)
    .eq('publie', true)
    .order('created_at', { ascending: false })

  return {
    site: site as Site,
    posts: (posts || []) as BlogPost[],
    clientSlug: slug,
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const data = await getBlogData(slug)

  if (!data) {
    return { title: 'Blog introuvable' }
  }

  return {
    title: `Blog - ${data.site.titre} | ${data.site.metier} a ${data.site.ville}`,
    description: `Decouvrez les articles et conseils de ${data.site.titre}, ${data.site.metier} a ${data.site.ville}.`,
    openGraph: {
      title: `Blog - ${data.site.titre}`,
      description: `Articles et conseils de ${data.site.titre}, ${data.site.metier} a ${data.site.ville}.`,
      type: 'website',
      locale: 'fr_CH',
    },
  }
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('fr-CH', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function getExcerpt(html: string, maxLength: number = 160): string {
  const text = html.replace(/<[^>]*>/g, '')
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength).trim() + '...'
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params
  const data = await getBlogData(slug)

  if (!data) {
    notFound()
  }

  const { site, posts, clientSlug } = data
  const accent = site.couleur_primaire || '#1a1a1a'

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <nav className="flex items-center justify-center gap-6 sm:gap-8 pb-3 text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-gray-500">
            <Link href={`/sites/${clientSlug}`} className="hover:text-gray-900 transition-colors">
              Accueil
            </Link>
            <span style={{ color: accent }} className="font-semibold">
              Blog
            </span>
          </nav>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="flex-1">
        {/* Hero section */}
        <section className="py-12 sm:py-16" style={{ backgroundColor: `${accent}08` }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-light tracking-wide text-gray-900 mb-4">
              Notre Blog
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Conseils, actualites et astuces de votre {site.metier.toLowerCase()} a {site.ville}
            </p>
          </div>
        </section>

        {/* Liste des articles */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {posts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">Aucun article pour le moment.</p>
                <p className="text-gray-400 mt-2">Revenez bientot pour decouvrir nos premiers articles !</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {posts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/sites/${clientSlug}/blog/${post.slug}`}
                    className="group block bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    {post.image_url && (
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={post.image_url}
                          alt={post.titre}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-5 sm:p-6">
                      <time className="text-xs font-medium tracking-wider uppercase text-gray-400">
                        {formatDate(post.created_at)}
                      </time>
                      <h3 className="mt-2 text-lg font-semibold text-gray-900 group-hover:transition-colors line-clamp-2" style={{ ['--tw-line-clamp' as string]: 2 }}>
                        <span className="group-hover:underline" style={{ textDecorationColor: accent }}>
                          {post.titre}
                        </span>
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 line-clamp-3" style={{ ['--tw-line-clamp' as string]: 3 }}>
                        {post.meta_description || getExcerpt(post.contenu)}
                      </p>
                      {post.mots_cles && post.mots_cles.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {post.mots_cles.slice(0, 3).map((motCle, index) => (
                            <span
                              key={index}
                              className="text-[10px] font-medium tracking-wider uppercase px-2 py-0.5 rounded-full"
                              style={{
                                backgroundColor: `${accent}10`,
                                color: accent,
                              }}
                            >
                              {motCle}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="mt-4 flex items-center text-sm font-medium" style={{ color: accent }}>
                        Lire l&apos;article
                        <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {site.titre}. Tous droits reserves.
          </p>
          <p className="text-xs text-gray-300 mt-2">
            Site cree par{' '}
            <a href="https://onvoustrouve.ch" className="hover:text-gray-500 transition-colors" style={{ color: accent }}>
              OnVousTrouve.ch
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
