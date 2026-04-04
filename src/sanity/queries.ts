import { client } from "./client";

// Recuperer un site vitrine par son slug
export async function getSiteBySlug(slug: string) {
  return client.fetch(
    `*[_type == "siteVitrine" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      metier,
      description,
      phone,
      email,
      address,
      city,
      heroTitle,
      heroSubtitle,
      colorPrimary,
      colorSecondary,
      logo,
      heroImage,
      services[]{
        name,
        description,
        price
      },
      horaires[]{
        jour,
        ouverture,
        fermeture
      },
      testimonials[]{
        name,
        text,
        rating
      },
      galleryImages[]{
        asset->{
          _id,
          url
        },
        hotspot
      },
      socialLinks{
        facebook,
        instagram,
        linkedin
      }
    }`,
    { slug },
    { next: { revalidate: 60 } }
  );
}

// Recuperer tous les slugs (pour generateStaticParams)
export async function getAllSiteSlugs() {
  return client.fetch<{ slug: string }[]>(
    `*[_type == "siteVitrine" && defined(slug.current)]{
      "slug": slug.current
    }`,
    {},
    { next: { revalidate: 60 } }
  );
}

// Recuperer tous les sites (pour la page listing)
export async function getAllSites() {
  return client.fetch(
    `*[_type == "siteVitrine"] | order(_createdAt desc){
      _id,
      title,
      slug,
      metier,
      city,
      description,
      colorPrimary,
      colorSecondary,
      logo
    }`,
    {},
    { next: { revalidate: 60 } }
  );
}
