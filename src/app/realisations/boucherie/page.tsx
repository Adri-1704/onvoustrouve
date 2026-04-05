import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boucherie Gasser | Boucherie-Charcuterie Artisanale - Fribourg",
  description:
    "Boucherie-charcuterie artisanale depuis 3 generations a Fribourg. Viande suisse de qualite, charcuterie maison, service traiteur. Decouvrez nos produits.",
};

export default function BoucherieDemo() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* Bandeau demo */}
      <div className="bg-gray-900 text-white text-center text-sm py-2 px-4">
        Ceci est une demonstration{" "}
        <Link href="/" className="underline font-semibold hover:text-blue-300">
          OnVousTrouve.ch
        </Link>{" "}
        — Ce site n&apos;est pas reel
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-red-950/95 backdrop-blur-md border-b border-red-900/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center text-white font-bold text-lg">
                G
              </div>
              <div>
                <span className="text-xl font-serif font-bold text-red-50 tracking-wide">
                  Boucherie Gasser
                </span>
                <p className="text-[11px] text-red-300/50 tracking-[0.25em] uppercase">
                  Fribourg
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-10 text-sm text-red-200/70">
              <a href="#produits" className="hover:text-red-300 transition-colors duration-300">
                Nos Produits
              </a>
              <a href="#savoir-faire" className="hover:text-red-300 transition-colors duration-300">
                Savoir-faire
              </a>
              <a href="#galerie" className="hover:text-red-300 transition-colors duration-300">
                Galerie
              </a>
              <a href="#equipe" className="hover:text-red-300 transition-colors duration-300">
                L&apos;Equipe
              </a>
              <a href="#commande" className="hover:text-red-300 transition-colors duration-300">
                Commander
              </a>
            </div>
            <a
              href="#commande"
              className="hidden sm:inline-flex items-center px-7 py-2.5 rounded-full bg-red-700 text-white text-sm font-semibold hover:bg-red-800 transition-colors duration-300 shadow-lg shadow-red-700/20"
            >
              Commander
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-red-950 min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=1600&q=80"
            alt="Boucher artisan au travail dans la Boucherie Gasser"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-950 via-red-950/90 to-red-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-red-950 via-transparent to-red-950/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="max-w-2xl">
            <div className="w-16 h-px bg-red-500 mb-8" />
            <p className="text-red-400/80 text-sm tracking-[0.3em] uppercase mb-6">
              Boucherie-Charcuterie Artisanale
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] tracking-tight">
              Le gout de la
              <br />
              <span className="text-red-400">tradition</span>
              <br />
              depuis 3 generations
            </h1>
            <p className="mt-8 text-lg text-red-100/50 max-w-lg leading-relaxed">
              Viande suisse selectionnee avec soin, charcuterie maison elaboree
              selon des recettes familiales transmises de pere en fils.
            </p>
            <div className="mt-12 flex flex-wrap gap-5">
              <a
                href="#commande"
                className="inline-flex items-center px-9 py-4 rounded-full bg-red-700 text-white font-semibold hover:bg-red-800 transition-colors duration-300 shadow-lg shadow-red-700/20"
              >
                Commander en ligne
              </a>
              <a
                href="#produits"
                className="inline-flex items-center px-9 py-4 rounded-full border border-red-400/30 text-red-200 font-semibold hover:border-red-400 hover:text-red-100 transition-all duration-300"
              >
                Decouvrir nos produits
              </a>
            </div>
            <div className="mt-20 flex items-center gap-10">
              <div>
                <p className="text-3xl font-serif font-bold text-red-400">3</p>
                <p className="text-xs text-red-200/40 mt-1 tracking-wide">Generations</p>
              </div>
              <div className="w-px h-10 bg-red-800/30" />
              <div>
                <p className="text-3xl font-serif font-bold text-red-400">45+</p>
                <p className="text-xs text-red-200/40 mt-1 tracking-wide">Ans d&apos;experience</p>
              </div>
              <div className="w-px h-10 bg-red-800/30" />
              <div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-red-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-red-200/40 mt-1 tracking-wide">4.9 sur Google</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Produits */}
      <section id="produits" className="py-24 sm:py-32 bg-[#FDF8F5]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-12 h-px bg-red-700 mx-auto mb-8" />
            <p className="text-red-700/70 text-sm tracking-[0.3em] uppercase mb-4">
              Qualite suisse
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              Nos Produits
            </h2>
            <p className="mt-5 text-gray-500 max-w-xl mx-auto">
              Viande 100% suisse, selectionnee aupres d&apos;eleveurs locaux de confiance.
              Charcuterie elaboree dans notre atelier selon des recettes traditionnelles.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
            {/* Boeuf */}
            <div>
              <h3 className="text-base font-serif font-bold text-gray-900 mb-8 pb-4 border-b border-red-200/60 tracking-wide uppercase text-sm">
                <span className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Boeuf
                </span>
              </h3>
              <div className="space-y-7">
                {[
                  {
                    name: "Entrecote de boeuf suisse",
                    desc: "Piece de 250g, persillage fin, ideale grillee",
                    price: "28.50",
                  },
                  {
                    name: "Filet de boeuf",
                    desc: "Le morceau noble par excellence, tendre et savoureux",
                    price: "42.90",
                  },
                  {
                    name: "Cote a l'os",
                    desc: "Piece de 400g minimum, maturation 21 jours",
                    price: "35.80",
                  },
                ].map((item) => (
                  <div key={item.name} className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                    </div>
                    <span className="text-red-800/80 font-semibold whitespace-nowrap text-sm">
                      CHF {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Porc */}
            <div>
              <h3 className="text-base font-serif font-bold text-gray-900 mb-8 pb-4 border-b border-red-200/60 tracking-wide uppercase text-sm">
                <span className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  Porc
                </span>
              </h3>
              <div className="space-y-7">
                {[
                  {
                    name: "Cotelettes de porc",
                    desc: "Porc suisse eleve en plein air, par 2 pieces",
                    price: "14.90",
                  },
                  {
                    name: "Saucisses maison",
                    desc: "Recette familiale, par 4 pieces (environ 400g)",
                    price: "12.50",
                  },
                  {
                    name: "Jambon a l'os",
                    desc: "Fume au bois de hetre, tranche sur mesure",
                    price: "18.90",
                  },
                ].map((item) => (
                  <div key={item.name} className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                    </div>
                    <span className="text-red-800/80 font-semibold whitespace-nowrap text-sm">
                      CHF {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Volaille */}
            <div>
              <h3 className="text-base font-serif font-bold text-gray-900 mb-8 pb-4 border-b border-red-200/60 tracking-wide uppercase text-sm">
                <span className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Volaille
                </span>
              </h3>
              <div className="space-y-7">
                {[
                  {
                    name: "Poulet fermier entier",
                    desc: "Eleve en plein air, environ 1.5kg",
                    price: "24.50",
                  },
                  {
                    name: "Magret de canard",
                    desc: "Piece genereuse, parfait rose a la poele",
                    price: "19.80",
                  },
                ].map((item) => (
                  <div key={item.name} className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                    </div>
                    <span className="text-red-800/80 font-semibold whitespace-nowrap text-sm">
                      CHF {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Charcuterie maison */}
            <div>
              <h3 className="text-base font-serif font-bold text-gray-900 mb-8 pb-4 border-b border-red-200/60 tracking-wide uppercase text-sm">
                <span className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  Charcuterie Maison
                </span>
              </h3>
              <div className="space-y-7">
                {[
                  {
                    name: "Saucisson sec vaudois",
                    desc: "Sechage naturel minimum 8 semaines, aux 100g",
                    price: "6.90",
                  },
                  {
                    name: "Jambon cru fribourgeois",
                    desc: "Affinage 12 mois, tranche fine, aux 100g",
                    price: "8.50",
                  },
                  {
                    name: "Pate de campagne",
                    desc: "Recette traditionnelle, aux herbes fraiches",
                    price: "4.90",
                  },
                  {
                    name: "Terrine du boucher",
                    desc: "Specialite maison, pistaches et noisettes",
                    price: "5.50",
                  },
                ].map((item) => (
                  <div key={item.name} className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                    </div>
                    <span className="text-red-800/80 font-semibold whitespace-nowrap text-sm">
                      CHF {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Savoir-faire */}
      <section id="savoir-faire" className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <div className="w-12 h-px bg-red-700 mb-8" />
              <p className="text-red-700/70 text-sm tracking-[0.3em] uppercase mb-6">
                Depuis 1979
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 leading-snug">
                Un savoir-faire artisanal
                <br />
                transmis avec passion
              </h2>
              <p className="mt-8 text-gray-500 leading-relaxed">
                Fondee en 1979 par Hans Gasser, notre boucherie perpetue une tradition
                familiale d&apos;excellence. Chaque morceau est selectionne avec soin aupres
                d&apos;eleveurs fribourgeois et suisses de confiance, garantissant une
                tracabilite totale du paturage a l&apos;assiette.
              </p>
              <p className="mt-5 text-gray-500 leading-relaxed">
                Notre charcuterie est entierement elaboree dans notre atelier, selon des
                recettes familiales qui font la fierte de Fribourg depuis trois generations.
                Nous privilegions les methodes traditionnelles : sechage naturel, fumage au
                bois de hetre et affinage lent.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="bg-[#FDF8F5] rounded-xl p-5">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">100% Suisse</h4>
                  <p className="text-xs text-gray-400 mt-1">Viande tracee et certifiee</p>
                </div>
                <div className="bg-[#FDF8F5] rounded-xl p-5">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Circuit court</h4>
                  <p className="text-xs text-gray-400 mt-1">Eleveurs locaux partenaires</p>
                </div>
                <div className="bg-[#FDF8F5] rounded-xl p-5">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Fait maison</h4>
                  <p className="text-xs text-gray-400 mt-1">Charcuterie artisanale</p>
                </div>
                <div className="bg-[#FDF8F5] rounded-xl p-5">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Conseil expert</h4>
                  <p className="text-xs text-gray-400 mt-1">Cuisson et preparation</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560781290-7dc94c0f8f4f?w=800&q=80"
                  alt="Comptoir de la Boucherie Gasser avec une selection de viandes fraiches"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-red-900 text-white rounded-2xl p-6 shadow-xl">
                <p className="text-3xl font-serif font-bold">45+</p>
                <p className="text-sm text-red-200/70 mt-1">ans d&apos;experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section id="galerie" className="py-24 sm:py-32 bg-[#FDF8F5]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-red-700 mx-auto mb-8" />
            <p className="text-red-700/70 text-sm tracking-[0.3em] uppercase mb-4">
              Notre univers
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              Galerie
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { img: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=800&q=80", label: "Notre boucher a l'oeuvre", aspect: "aspect-[4/3]" },
              { img: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=800&q=80", label: "Boeuf de qualite superieure", aspect: "aspect-square" },
              { img: "https://images.unsplash.com/photo-1528711832515-0bed20acbc66?w=800&q=80", label: "Plateau de charcuterie", aspect: "aspect-square" },
              { img: "https://images.unsplash.com/photo-1560781290-7dc94c0f8f4f?w=800&q=80", label: "Notre comptoir", aspect: "aspect-square" },
              { img: "https://images.unsplash.com/photo-1599921841143-819065a55cc6?w=800&q=80", label: "Saucisses artisanales", aspect: "aspect-square" },
              { img: "https://images.unsplash.com/photo-1542901031-ec5eeb518e57?w=800&q=80", label: "L'interieur de la boutique", aspect: "aspect-[4/3]" },
            ].map((item, i) => (
              <div
                key={i}
                className={`${item.aspect} rounded-xl overflow-hidden relative group cursor-pointer`}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <p className="text-white text-sm font-medium">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* L'Equipe */}
      <section id="equipe" className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-red-700 mx-auto mb-8" />
            <p className="text-red-700/70 text-sm tracking-[0.3em] uppercase mb-4">
              Des passionnes a votre service
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              L&apos;Equipe
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Thomas Gasser",
                role: "Boucher-Maitre",
                desc: "3e generation, 25 ans de metier. Specialiste des decoupes nobles et de la maturation.",
              },
              {
                name: "Pierre Muller",
                role: "Charcutier",
                desc: "Expert en charcuterie artisanale. Gardien des recettes familiales depuis 18 ans.",
              },
              {
                name: "Lucas Berset",
                role: "Apprenti boucher-charcutier",
                desc: "En 3e annee d'apprentissage. La releve passionnee de la Boucherie Gasser.",
              },
              {
                name: "Marie Schneider",
                role: "Responsable vente & conseil",
                desc: "Accueil chaleureux et conseils personnalises. Specialiste des plateaux traiteur.",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-[#FDF8F5] rounded-2xl p-6 text-center group hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-200 to-red-300 mx-auto mb-5 flex items-center justify-center">
                  <svg className="w-10 h-10 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-serif font-bold text-gray-900">{member.name}</h3>
                <p className="text-red-700 text-sm font-medium mt-1">{member.role}</p>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <section className="py-24 sm:py-32 bg-[#FDF8F5]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-red-700 mx-auto mb-8" />
            <p className="text-red-700/70 text-sm tracking-[0.3em] uppercase mb-4">
              Ils nous font confiance
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              Avis de nos clients
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Francoise D.",
                text: "La meilleure boucherie de Fribourg, sans hesitation. La qualite de la viande est exceptionnelle et les conseils de cuisson toujours precieux. Leur saucisson sec est une pure merveille !",
                date: "Mars 2026",
              },
              {
                name: "Marc-Andre B.",
                text: "Je commande regulierement des plateaux raclette et fondue chinoise pour nos soirees. Toujours impeccable, viande fraiche et bien preparee. Un service traiteur au top !",
                date: "Fevrier 2026",
              },
              {
                name: "Isabelle K.",
                text: "Cela fait 15 ans que je suis cliente chez Gasser. On retrouve le vrai gout de la viande, comme avant. L'equipe est adorable et prend le temps de bien conseiller chaque client.",
                date: "Janvier 2026",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-2xl p-8 border border-red-100/60 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex gap-0.5 mb-5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  &quot;{review.text}&quot;
                </p>
                <div className="mt-6 pt-5 border-t border-red-50">
                  <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                  <p className="text-gray-400 text-xs mt-1">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commande & Contact */}
      <section id="commande" className="py-24 sm:py-32 bg-red-950">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <div className="w-12 h-px bg-red-500 mx-auto mb-8" />
            <p className="text-red-400/70 text-sm tracking-[0.3em] uppercase mb-4">
              Service traiteur & commandes speciales
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Passez votre commande
            </h2>
            <p className="mt-5 text-red-200/40 max-w-xl mx-auto">
              Fondue chinoise, plateaux raclette, buffet traiteur... Commandez a l&apos;avance
              pour vos evenements et soirees entre amis.
            </p>
          </div>
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Formulaire */}
            <div className="lg:col-span-3 bg-white/[0.03] backdrop-blur-sm border border-red-500/10 rounded-2xl p-8 sm:p-10">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-red-200/80 mb-2.5">
                    Nom
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-red-500/15 text-white placeholder-red-300/30 focus:outline-none focus:border-red-400/50 transition-colors duration-300"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-red-200/80 mb-2.5">
                    Telephone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-red-500/15 text-white placeholder-red-300/30 focus:outline-none focus:border-red-400/50 transition-colors duration-300"
                    placeholder="+41 26 000 00 00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-red-200/80 mb-2.5">
                    Date souhaitee
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-red-500/15 text-white focus:outline-none focus:border-red-400/50 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-red-200/80 mb-2.5">
                    Type de commande
                  </label>
                  <select className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-red-500/15 text-white focus:outline-none focus:border-red-400/50 transition-colors duration-300">
                    <option value="">Choisir...</option>
                    <option value="fondue">Fondue chinoise</option>
                    <option value="raclette">Plateau raclette</option>
                    <option value="traiteur">Service traiteur</option>
                    <option value="grillade">Assortiment grillade</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium text-red-200/80 mb-2.5">
                  Details de votre commande
                </label>
                <textarea
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-red-500/15 text-white placeholder-red-300/30 focus:outline-none focus:border-red-400/50 transition-colors duration-300 h-28 resize-none"
                  placeholder="Nombre de personnes, preferences, allergies..."
                />
              </div>
              <div className="mt-8 text-center">
                <button className="px-10 py-4 rounded-full bg-red-700 text-white font-semibold hover:bg-red-800 transition-colors duration-300 shadow-lg shadow-red-700/20">
                  Envoyer la commande
                </button>
              </div>
            </div>
            {/* Infos contact */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white/[0.03] backdrop-blur-sm border border-red-500/10 rounded-2xl p-6">
                <h3 className="text-red-100 font-semibold mb-5 text-sm tracking-wide uppercase">
                  Horaires d&apos;ouverture
                </h3>
                <div className="space-y-2.5">
                  {[
                    { day: "Lundi", hours: "Ferme" },
                    { day: "Mardi - Vendredi", hours: "7h00 - 12h30 / 14h00 - 18h30" },
                    { day: "Samedi", hours: "7h00 - 16h00" },
                    { day: "Dimanche", hours: "Ferme" },
                  ].map((item) => (
                    <div
                      key={item.day}
                      className={`flex justify-between py-2.5 px-4 rounded-lg text-sm ${
                        item.hours === "Ferme"
                          ? "bg-red-900/30 text-red-400/60"
                          : "bg-white/[0.03] text-red-200/60"
                      }`}
                    >
                      <span className="font-medium text-red-100/80">{item.day}</span>
                      <span>{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/[0.03] backdrop-blur-sm border border-red-500/10 rounded-2xl p-6">
                <h3 className="text-red-100 font-semibold mb-5 text-sm tracking-wide uppercase">
                  Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-red-900/50 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-red-100/80 text-sm font-medium">Adresse</p>
                      <p className="text-red-200/50 text-sm mt-0.5">
                        Rue de Lausanne 42
                        <br />
                        1700 Fribourg
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-red-900/50 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-red-100/80 text-sm font-medium">Telephone</p>
                      <a href="tel:+41263221845" className="text-red-400 text-sm font-semibold hover:underline">
                        +41 26 322 18 45
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-red-900/50 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-red-100/80 text-sm font-medium">Email</p>
                      <p className="text-red-200/50 text-sm mt-0.5">info@boucherie-gasser.ch</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-950/95 text-red-200/40 border-t border-red-900/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center text-white font-bold text-lg">
                  G
                </div>
                <span className="text-xl font-serif font-bold text-red-100">
                  Boucherie Gasser
                </span>
              </div>
              <p className="text-sm leading-relaxed">
                Boucherie-charcuterie artisanale a Fribourg depuis 1979.
                Viande suisse de qualite, charcuterie maison et service
                traiteur pour toutes vos occasions.
              </p>
            </div>
            <div>
              <h4 className="text-red-100 font-semibold mb-5 text-sm tracking-wide uppercase">Navigation</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#produits" className="hover:text-red-300 transition-colors duration-300">
                    Nos Produits
                  </a>
                </li>
                <li>
                  <a href="#savoir-faire" className="hover:text-red-300 transition-colors duration-300">
                    Savoir-faire
                  </a>
                </li>
                <li>
                  <a href="#galerie" className="hover:text-red-300 transition-colors duration-300">
                    Galerie
                  </a>
                </li>
                <li>
                  <a href="#equipe" className="hover:text-red-300 transition-colors duration-300">
                    L&apos;Equipe
                  </a>
                </li>
                <li>
                  <a href="#commande" className="hover:text-red-300 transition-colors duration-300">
                    Commander
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-red-100 font-semibold mb-5 text-sm tracking-wide uppercase">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li>Rue de Lausanne 42, 1700 Fribourg</li>
                <li>
                  <a href="tel:+41263221845" className="hover:text-red-300 transition-colors duration-300">
                    +41 26 322 18 45
                  </a>
                </li>
                <li>info@boucherie-gasser.ch</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-red-900/20 mt-16 pt-8 text-sm text-center text-red-200/30">
            <p>
              &copy; {new Date().getFullYear()} Boucherie Gasser — Tous droits
              reserves.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
