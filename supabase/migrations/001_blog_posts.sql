CREATE TABLE blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  site_id UUID REFERENCES sites(id) ON DELETE CASCADE,
  titre TEXT NOT NULL,
  slug TEXT NOT NULL,
  contenu TEXT NOT NULL,
  meta_description TEXT,
  mots_cles TEXT[],
  image_url TEXT,
  publie BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);
CREATE UNIQUE INDEX blog_posts_site_slug ON blog_posts(site_id, slug);
CREATE INDEX blog_posts_site_publie ON blog_posts(site_id, publie, created_at DESC);
