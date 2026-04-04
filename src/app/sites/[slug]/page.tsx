import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getSiteBySlug, getAllSiteSlugs } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";

// --- Types ---

interface Service {
  name: string;
  description?: string;
  price?: string;
}

interface Horaire {
  jour: string;
  ouverture?: string;
  fermeture?: string;
}

interface Testimonial {
  name: string;
  text: string;
  rating?: number;
}

interface GalleryImage {
  asset?: { _id: string; url: string };
  hotspot?: { x: number; y: number };
}

interface SocialLinks {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
}

interface SiteVitrine {
  _id: string;
  title: string;
  slug: { current: string };
  metier?: string;
  description?: string;
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  colorPrimary?: string;
  colorSecondary?: string;
  logo?: unknown;
  heroImage?: unknown;
  services?: Service[];
  horaires?: Horaire[];
  testimonials?: Testimonial[];
  galleryImages?: GalleryImage[];
  socialLinks?: SocialLinks;
}

// --- Static params ---

export async function generateStaticParams() {
  const slugs = await getAllSiteSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

// --- Metadata ---

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const site: SiteVitrine | null = await getSiteBySlug(slug);

  if (!site) {
    return { title: "Site introuvable" };
  }

  return {
    title: `${site.title}${site.metier ? ` | ${site.metier}` : ""}${site.city ? ` - ${site.city}` : ""}`,
    description:
      site.description ||
      `${site.title}${site.metier ? `, ${site.metier}` : ""}${site.city ? ` a ${site.city}` : ""}`,
  };
}

// --- Helpers ---

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className="w-4 h-4"
          fill={i <= rating ? "var(--color-primary)" : "#E5E7EB"}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// --- Page ---

export default async function SiteVitrinePage({ params }: Props) {
  const { slug } = await params;
  const site: SiteVitrine | null = await getSiteBySlug(slug);

  if (!site) {
    notFound();
  }

  const primary = site.colorPrimary || "#2563EB";
  const secondary = site.colorSecondary || "#1E40AF";
  const primaryRgb = hexToRgb(primary);
  const initial = site.title?.charAt(0)?.toUpperCase() || "?";

  const hasServices = site.services && site.services.length > 0;
  const hasGallery = site.galleryImages && site.galleryImages.length > 0;
  const hasTestimonials = site.testimonials && site.testimonials.length > 0;
  const hasHoraires = site.horaires && site.horaires.length > 0;
  const hasContact = site.phone || site.email || site.address;
  const hasSocial =
    site.socialLinks?.facebook ||
    site.socialLinks?.instagram ||
    site.socialLinks?.linkedin;

  // Navigation items based on available content
  const navItems: { label: string; href: string }[] = [];
  if (hasServices) navItems.push({ label: "Services", href: "#services" });
  if (hasGallery) navItems.push({ label: "Galerie", href: "#galerie" });
  if (hasTestimonials) navItems.push({ label: "Avis", href: "#avis" });
  if (hasHoraires) navItems.push({ label: "Horaires", href: "#horaires" });
  if (hasContact) navItems.push({ label: "Contact", href: "#contact" });

  return (
    <div
      className="flex flex-col min-h-screen bg-white font-sans"
      style={
        {
          "--color-primary": primary,
          "--color-secondary": secondary,
          "--color-primary-rgb": primaryRgb,
        } as React.CSSProperties
      }
    >
      {/* Bandeau OnVousTrouve */}
      <div className="bg-gray-900 text-white text-center text-sm py-2 px-4">
        Site cree avec{" "}
        <Link href="/" className="underline font-semibold hover:text-blue-300">
          OnVousTrouve.ch
        </Link>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              {site.logo ? (
                <Image
                  src={urlFor(site.logo).width(80).height(80).url()}
                  alt={`Logo ${site.title}`}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{
                    background: `linear-gradient(135deg, ${primary}, ${secondary})`,
                  }}
                >
                  {initial}
                </div>
              )}
              <div>
                <span className="text-xl font-bold text-gray-900 tracking-tight">
                  {site.title}
                </span>
                {site.city && (
                  <p className="text-xs text-gray-400 tracking-wider uppercase">
                    {site.city}
                  </p>
                )}
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-gray-900 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
            {site.phone && (
              <a
                href={`tel:${site.phone}`}
                className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-colors"
                style={{ backgroundColor: primary }}
              >
                Appeler
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${primary}, ${secondary})`,
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div
          className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: secondary }}
        />
        <div
          className="absolute bottom-20 left-20 w-64 h-64 rounded-full blur-3xl opacity-15"
          style={{ backgroundColor: primary }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {site.metier && (
                <p className="text-white/80 font-medium tracking-widest uppercase text-sm mb-4">
                  {site.metier}
                </p>
              )}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {site.heroTitle || site.title}
              </h1>
              {site.heroSubtitle && (
                <p className="mt-6 text-lg text-white/80 max-w-lg leading-relaxed">
                  {site.heroSubtitle}
                </p>
              )}
              <div className="mt-10 flex flex-wrap gap-4">
                {site.phone && (
                  <a
                    href={`tel:${site.phone}`}
                    className="inline-flex items-center px-8 py-4 rounded-full bg-white font-semibold transition-colors shadow-lg"
                    style={{ color: primary }}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
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
                    Nous appeler
                  </a>
                )}
                {hasServices && (
                  <a
                    href="#services"
                    className="inline-flex items-center px-8 py-4 rounded-full border-2 border-white/40 text-white font-semibold hover:border-white hover:bg-white/10 transition-colors"
                  >
                    Nos services
                  </a>
                )}
              </div>
            </div>

            {/* Hero image */}
            {site.heroImage ? (
              <div className="hidden lg:block">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                  <Image
                    src={urlFor(site.heroImage).width(800).height(1000).url()}
                    alt={site.heroTitle || site.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            ) : (
              <div className="hidden lg:block">
                <div className="w-full aspect-[4/5] rounded-3xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <div
                    className="text-9xl font-bold text-white/20"
                  >
                    {initial}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services */}
      {hasServices && (
        <section id="services" className="py-20 sm:py-28 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p
                className="font-medium tracking-widest uppercase text-sm mb-3"
                style={{ color: primary }}
              >
                Ce que nous proposons
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Nos services
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {site.services!.map((service, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-5"
                    style={{
                      background: `linear-gradient(135deg, ${primary}, ${secondary})`,
                    }}
                  >
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.name}
                  </h3>
                  {service.description && (
                    <p className="text-gray-500 leading-relaxed mb-4">
                      {service.description}
                    </p>
                  )}
                  {service.price && (
                    <p
                      className="text-lg font-bold"
                      style={{ color: primary }}
                    >
                      {service.price}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Galerie */}
      {hasGallery && (
        <section id="galerie" className="py-20 sm:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p
                className="font-medium tracking-widest uppercase text-sm mb-3"
                style={{ color: primary }}
              >
                Decouvrez notre univers
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Galerie photos
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {site.galleryImages!.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-2xl overflow-hidden group"
                >
                  {img.asset?.url ? (
                    <Image
                      src={urlFor(img).width(600).height(600).url()}
                      alt={`${site.title} - photo ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Temoignages */}
      {hasTestimonials && (
        <section id="avis" className="py-20 sm:py-28 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p
                className="font-medium tracking-widest uppercase text-sm mb-3"
                style={{ color: primary }}
              >
                Ce que disent nos clients
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Temoignages
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {site.testimonials!.map((t, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                >
                  {t.rating && <StarRating rating={t.rating} />}
                  <p className="text-gray-600 leading-relaxed mt-4 mb-6">
                    &laquo; {t.text} &raquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                      style={{ backgroundColor: primary }}
                    >
                      {t.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-semibold text-gray-900">
                      {t.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Horaires & Contact */}
      {(hasHoraires || hasContact) && (
        <section id="horaires" className="py-20 sm:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {/* Horaires */}
              {hasHoraires && (
                <div>
                  <p
                    className="font-medium tracking-widest uppercase text-sm mb-3"
                    style={{ color: primary }}
                  >
                    Quand nous rendre visite
                  </p>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Horaires d&apos;ouverture
                  </h2>
                  <div className="space-y-3">
                    {site.horaires!.map((h, i) => {
                      const isFerme =
                        !h.ouverture ||
                        h.ouverture.toLowerCase() === "ferme" ||
                        h.ouverture.toLowerCase() === "fermé";
                      return (
                        <div
                          key={i}
                          className={`flex justify-between py-3 px-4 rounded-xl ${
                            isFerme
                              ? "bg-red-50 text-red-400"
                              : "bg-gray-50 text-gray-600"
                          }`}
                        >
                          <span className="font-medium text-gray-900">
                            {h.jour}
                          </span>
                          <span>
                            {isFerme
                              ? "Ferme"
                              : `${h.ouverture}${h.fermeture ? ` – ${h.fermeture}` : ""}`}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Contact */}
              {hasContact && (
                <div id="contact">
                  <p
                    className="font-medium tracking-widest uppercase text-sm mb-3"
                    style={{ color: primary }}
                  >
                    Nous trouver
                  </p>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Contact
                  </h2>
                  <div className="bg-gray-50 rounded-3xl p-8 space-y-6">
                    {site.address && (
                      <div className="flex items-start gap-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                          style={{
                            backgroundColor: `rgba(${primaryRgb}, 0.1)`,
                          }}
                        >
                          <svg
                            className="w-5 h-5"
                            style={{ color: primary }}
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
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Adresse</p>
                          <p className="text-gray-600 text-sm">
                            {site.address}
                            {site.city && (
                              <>
                                <br />
                                {site.city}
                              </>
                            )}
                          </p>
                        </div>
                      </div>
                    )}

                    {site.phone && (
                      <div className="flex items-start gap-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                          style={{
                            backgroundColor: `rgba(${primaryRgb}, 0.1)`,
                          }}
                        >
                          <svg
                            className="w-5 h-5"
                            style={{ color: primary }}
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
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">
                            Telephone
                          </p>
                          <a
                            href={`tel:${site.phone}`}
                            className="text-gray-600 text-sm hover:underline"
                          >
                            {site.phone}
                          </a>
                        </div>
                      </div>
                    )}

                    {site.email && (
                      <div className="flex items-start gap-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                          style={{
                            backgroundColor: `rgba(${primaryRgb}, 0.1)`,
                          }}
                        >
                          <svg
                            className="w-5 h-5"
                            style={{ color: primary }}
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
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Email</p>
                          <a
                            href={`mailto:${site.email}`}
                            className="text-gray-600 text-sm hover:underline"
                          >
                            {site.email}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer
        className="text-white/70"
        style={{
          background: `linear-gradient(135deg, ${primary}, ${secondary})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Info entreprise */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                {site.logo ? (
                  <Image
                    src={urlFor(site.logo).width(80).height(80).url()}
                    alt={`Logo ${site.title}`}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg">
                    {initial}
                  </div>
                )}
                <span className="text-xl font-bold text-white">
                  {site.title}
                </span>
              </div>
              {site.description && (
                <p className="text-sm leading-relaxed text-white/60">
                  {site.description}
                </p>
              )}
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reseaux sociaux */}
            <div>
              {hasSocial && (
                <>
                  <h4 className="text-white font-semibold mb-4">
                    Suivez-nous
                  </h4>
                  <div className="flex gap-4">
                    {site.socialLinks?.facebook && (
                      <a
                        href={site.socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                        aria-label="Facebook"
                      >
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                    )}
                    {site.socialLinks?.instagram && (
                      <a
                        href={site.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                        aria-label="Instagram"
                      >
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                      </a>
                    )}
                    {site.socialLinks?.linkedin && (
                      <a
                        href={site.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </>
              )}
              {hasContact && (
                <div className="mt-6 space-y-2 text-sm">
                  {site.address && <p>{site.address}{site.city ? `, ${site.city}` : ""}</p>}
                  {site.phone && <p>{site.phone}</p>}
                  {site.email && <p>{site.email}</p>}
                </div>
              )}
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-sm text-center text-white/40">
            <p>
              &copy; {new Date().getFullYear()} {site.title} — Tous droits
              reserves. Site cree avec{" "}
              <Link href="/" className="underline hover:text-white/60">
                OnVousTrouve.ch
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
