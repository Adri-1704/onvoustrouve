import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'

type Props = {
  params: Promise<{ slug: string; articleSlug: string }>
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
  updated_at: string
}

async function getArticleData(slug: string, articleSlug: string) {
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

  // 3. Recuperer l'article par slug
  const { data: post } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('site_id', site.id)
    .eq('slug', articleSlug)
    .eq('publie', true)
    .single()

  if (!post) return null

  return {
    site: site as Site,
    post: post as BlogPost,
    clientSlug: slug,
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, articleSlug } = await params
  const data = await getArticleData(slug, articleSlug)

  if (!data) {
    return { title: 'Article introuvable' }
  }

  return {
    title: `${data.post.titre} | ${data.site.titre}`,
    description: data.post.meta_description || `Article de ${data.site.titre}, ${data.site.metier} a ${data.site.ville}.`,
    keywords: data.post.mots_cles?.join(', ') || undefined,
    openGraph: {
      title: data.post.titre,
      description: data.post.meta_description || undefined,
      type: 'article',
      locale: 'fr_CH',
      publishedTime: data.post.created_at,
      modifiedTime: data.post.updated_at,
      ...(data.post.image_url ? { images: [{ url: data.post.image_url }] } : {}),
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

export default async function ArticlePage({ params }: Props) {
  const { slug, articleSlug } = await params
  const data = await getArticleData(slug, articleSlug)

  if (!data) {
    notFound()
  }

  const { site, post, clientSlug } = data
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
              <Link
                href={`/sites/${clientSlug}`}
                className="text-xl sm:text-2xl font-light tracking-[0.25em] uppercase text-gray-900 hover:opacity-70 transition-opacity"
              >
                {site.titre}
              </Link>
            </div>
          </div>
          <nav className="flex items-center justify-center gap-6 sm:gap-8 pb-3 text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-gray-500">
            <Link href={`/sites/${clientSlug}`} className="hover:text-gray-900 transition-colors">
              Accueil
            </Link>
            <Link href={`/sites/${clientSlug}/blog`} className="hover:text-gray-900 transition-colors" style={{ color: accent }}>
              Blog
            </Link>
          </nav>
        </div>
      </header>

      {/* Contenu de l'article */}
      <main className="flex-1">
        <article className="py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Retour au blog */}
            <Link
              href={`/sites/${clientSlug}/blog`}
              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors mb-8"
            >
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour au blog
            </Link>

            {/* En-tete de l'article */}
            <header className="mb-8 sm:mb-10">
              <time className="text-sm font-medium tracking-wider uppercase text-gray-400">
                {formatDate(post.created_at)}
              </time>
              <h1 className="mt-3 text-3xl sm:text-4xl font-light tracking-wide text-gray-900 leading-tight">
                {post.titre}
              </h1>
              {post.mots_cles && post.mots_cles.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.mots_cles.map((motCle, index) => (
                    <span
                      key={index}
                      className="text-[11px] font-medium tracking-wider uppercase px-3 py-1 rounded-full"
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
            </header>

            {/* Image de l'article */}
            {post.image_url && (
              <div className="mb-8 sm:mb-10 rounded-xl overflow-hidden">
                <img
                  src={post.image_url}
                  alt={post.titre}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* Contenu HTML */}
            <div
              className="prose prose-gray prose-lg max-w-none
                prose-headings:font-light prose-headings:tracking-wide prose-headings:text-gray-900
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-gray-700 prose-p:leading-relaxed
                prose-li:text-gray-700
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-a:transition-colors"
              style={{
                ['--tw-prose-links' as string]: accent,
              }}
              dangerouslySetInnerHTML={{ __html: post.contenu }}
            />

            {/* Separateur */}
            <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-500">
                    Publie par <strong className="text-gray-900">{site.titre}</strong>
                  </p>
                  <p className="text-sm text-gray-400">
                    {site.metier} a {site.ville}
                  </p>
                </div>
                <Link
                  href={`/sites/${clientSlug}/blog`}
                  className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-full transition-colors"
                  style={{
                    backgroundColor: `${accent}10`,
                    color: accent,
                  }}
                >
                  Voir tous les articles
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </article>
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
