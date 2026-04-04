import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllSites } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";

export const metadata: Metadata = {
  title: "Nos sites clients | OnVousTrouve.ch",
  description:
    "Decouvrez les sites vitrines de nos clients crees avec OnVousTrouve.ch",
};

interface SiteListing {
  _id: string;
  title: string;
  slug: { current: string };
  metier?: string;
  city?: string;
  description?: string;
  colorPrimary?: string;
  colorSecondary?: string;
  logo?: unknown;
}

export default async function SitesListingPage() {
  const sites: SiteListing[] = await getAllSites();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gray-900">
              OnVousTrouve.ch
            </Link>
            <span className="text-sm text-gray-500">
              {sites.length} site{sites.length > 1 ? "s" : ""} client
              {sites.length > 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </div>

      {/* Titre */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Nos sites clients
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Decouvrez les sites vitrines professionnels que nous avons crees
            pour nos clients.
          </p>
        </div>

        {/* Grille */}
        {sites.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sites.map((site) => {
              const primary = site.colorPrimary || "#2563EB";
              const secondary = site.colorSecondary || "#1E40AF";
              const initial = site.title?.charAt(0)?.toUpperCase() || "?";

              return (
                <Link
                  key={site._id}
                  href={`/sites/${site.slug.current}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Bandeau couleur */}
                  <div
                    className="h-32 relative"
                    style={{
                      background: `linear-gradient(135deg, ${primary}, ${secondary})`,
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      {site.logo ? (
                        <Image
                          src={urlFor(site.logo).width(120).height(120).url()}
                          alt={`Logo ${site.title}`}
                          width={60}
                          height={60}
                          className="w-16 h-16 rounded-full object-cover border-2 border-white/30"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white text-2xl font-bold">
                          {initial}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                      {site.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      {site.metier && <span>{site.metier}</span>}
                      {site.metier && site.city && (
                        <span className="text-gray-300">•</span>
                      )}
                      {site.city && <span>{site.city}</span>}
                    </div>
                    {site.description && (
                      <p className="text-gray-400 text-sm line-clamp-2">
                        {site.description}
                      </p>
                    )}
                    <div
                      className="mt-4 text-sm font-semibold flex items-center gap-1"
                      style={{ color: primary }}
                    >
                      Voir le site
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-200 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Aucun site pour le moment
            </h2>
            <p className="text-gray-500">
              Les sites clients apparaitront ici une fois crees dans Sanity.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
