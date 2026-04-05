import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fleurs & Jardins Rossi | Fleuriste Artisanale - Neuchâtel",
  description:
    "Fleuriste artisanale à Neuchâtel. Bouquets sur mesure, compositions florales pour mariages, événements et deuil. Livraison à domicile.",
};

export default function FleuristeDemo() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* Bandeau démo */}
      <div className="bg-gray-900 text-white text-center text-sm py-2 px-4">
        Ceci est une démonstration{" "}
        <Link href="/" className="underline font-semibold hover:text-blue-300">
          OnVousTrouve.ch
        </Link>{" "}
        &mdash; Ce site n&apos;est pas réel
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-green-100/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-300 to-pink-400 flex items-center justify-center text-white font-bold text-lg font-serif italic">
                R
              </div>
              <div>
                <span className="text-xl font-serif font-bold text-gray-900 tracking-wide">
                  Fleurs &amp; Jardins Rossi
                </span>
                <p className="text-[11px] text-green-500/70 tracking-[0.25em] uppercase">
                  Neuchâtel
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-10 text-sm text-gray-500">
              <a href="#creations" className="hover:text-green-600 transition-colors duration-300">
                Créations
              </a>
              <a href="#galerie" className="hover:text-green-600 transition-colors duration-300">
                Galerie
              </a>
              <a href="#equipe" className="hover:text-green-600 transition-colors duration-300">
                L&apos;Équipe
              </a>
              <a href="#avis" className="hover:text-green-600 transition-colors duration-300">
                Avis
              </a>
              <a href="#commande" className="hover:text-green-600 transition-colors duration-300">
                Commander
              </a>
            </div>
            <a
              href="#commande"
              className="hidden sm:inline-flex items-center px-7 py-2.5 rounded-full bg-green-600 text-white text-sm font-semibold hover:bg-green-700 transition-colors duration-300 shadow-lg shadow-green-600/20"
            >
              Commander
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FDF9F3] min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 via-transparent to-pink-50/50" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-pink-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-100/20 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="w-12 h-px bg-green-500 mb-8" />
              <p className="text-green-600/80 text-sm tracking-[0.3em] uppercase mb-6">
                Fleuriste artisanale depuis 2009
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-gray-900 leading-[1.1]">
                L&apos;art floral
                <br />
                au service de
                <br />
                <span className="text-green-600">vos émotions</span>
              </h1>
              <p className="mt-8 text-lg text-gray-500 max-w-lg leading-relaxed">
                Des créations florales uniques, confectionnées avec passion au
                coeur de Neuchâtel. Bouquets sur mesure, décorations
                événementielles et livraison à domicile.
              </p>
              <div className="mt-12 flex flex-wrap gap-5">
                <a
                  href="#commande"
                  className="inline-flex items-center px-9 py-4 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors duration-300 shadow-lg shadow-green-600/20"
                >
                  Commander un bouquet
                </a>
                <a
                  href="#creations"
                  className="inline-flex items-center px-9 py-4 rounded-full border border-green-200 text-green-700 font-semibold hover:border-green-400 transition-colors duration-300"
                >
                  Nos créations
                </a>
              </div>
              <div className="mt-20 flex items-center gap-10">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">15+</p>
                  <p className="text-xs text-gray-400 mt-1">Années d&apos;expérience</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">8k+</p>
                  <p className="text-xs text-gray-400 mt-1">Bouquets livrés</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">4.8</p>
                  <p className="text-xs text-gray-400 mt-1">Note Google</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl shadow-green-200/40">
                  <img
                    src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&q=80"
                    alt="Composition florale artisanale chez Fleurs & Jardins Rossi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-green-100/50">
                  <div className="flex items-center gap-3">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25V3.375c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125v7.875m-12 3h12.75c.621 0 1.125.504 1.125 1.125v2.25" />
                    </svg>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Livraison</p>
                      <p className="text-xs text-gray-500">Neuchâtel & environs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Créations & Tarifs */}
      <section id="creations" className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-12 h-px bg-green-500 mx-auto mb-8" />
            <p className="text-green-600/80 text-sm tracking-[0.3em] uppercase mb-4">
              Nos spécialités
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              Créations & Tarifs
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Bouquets Mariage",
                subtitle: "Votre jour, vos fleurs",
                icon: (
                  <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                ),
                items: [
                  { name: "Bouquet de mariée", price: "CHF 180.—" },
                  { name: "Boutonniere marié", price: "CHF 25.—" },
                  { name: "Déco table (par pièce)", price: "CHF 65.—" },
                  { name: "Arche florale", price: "Dès CHF 450.—" },
                  { name: "Forfait mariage complet", price: "Sur devis" },
                ],
              },
              {
                title: "Deuil & Hommage",
                subtitle: "Avec respect et délicatesse",
                icon: (
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                ),
                items: [
                  { name: "Gerbe de fleurs", price: "Dès CHF 80.—" },
                  { name: "Coussin de deuil", price: "Dès CHF 120.—" },
                  { name: "Couronne mortuaire", price: "Dès CHF 200.—" },
                  { name: "Croix fleurie", price: "Dès CHF 150.—" },
                  { name: "Composition personnalisée", price: "Sur devis" },
                ],
              },
              {
                title: "Événements",
                subtitle: "Sublimez vos occasions",
                icon: (
                  <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                  </svg>
                ),
                items: [
                  { name: "Déco soirée privée", price: "Dès CHF 250.—" },
                  { name: "Déco entreprise", price: "Sur devis" },
                  { name: "Anniversaire / baptême", price: "Dès CHF 150.—" },
                  { name: "Abonnement hebdo bureau", price: "CHF 45.—/sem." },
                  { name: "Séminaire / conférence", price: "Sur devis" },
                ],
              },
              {
                title: "Plantes & Cadeaux",
                subtitle: "Végétalisez votre quotidien",
                icon: (
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                ),
                items: [
                  { name: "Orchidée en pot", price: "Dès CHF 35.—" },
                  { name: "Plante verte d’intérieur", price: "Dès CHF 25.—" },
                  { name: "Terrarium artisanal", price: "CHF 55.—" },
                  { name: "Coffret fleurs séchées", price: "CHF 45.—" },
                  { name: "Bouquet du jour", price: "Dès CHF 39.—" },
                ],
              },
            ].map((category) => (
              <div
                key={category.title}
                className="bg-[#FDF9F3] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-green-100/50 group"
              >
                <div className="mb-5">{category.icon}</div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-1">
                  {category.title}
                </h3>
                <p className="text-xs text-green-500/70 tracking-wide uppercase mb-8">
                  {category.subtitle}
                </p>
                <div className="space-y-5">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex justify-between items-center"
                    >
                      <span className="text-sm text-gray-600">{item.name}</span>
                      <span className="text-sm font-semibold text-gray-900 whitespace-nowrap ml-2">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section id="galerie" className="py-24 sm:py-32 bg-[#FDF9F3]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-green-500 mx-auto mb-8" />
            <p className="text-green-600/80 text-sm tracking-[0.3em] uppercase mb-4">
              Notre savoir-faire
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              Galerie Photos
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Bouquet champetre", img: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80", span: "" },
              { label: "Roses anciennes", img: "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=800&q=80", span: "row-span-2" },
              { label: "Décoration de table", img: "https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?w=800&q=80", span: "" },
              { label: "Composition de deuil", img: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&q=80", span: "" },
              { label: "Bouquet de mariée", img: "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?w=800&q=80", span: "" },
              { label: "Plantes d’intérieur", img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80", span: "" },
            ].map((item, i) => (
              <div
                key={i}
                className={`${item.span} aspect-square rounded-xl overflow-hidden relative group cursor-pointer`}
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

      {/* Équipe */}
      <section id="equipe" className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-12 h-px bg-green-500 mx-auto mb-8" />
            <p className="text-green-600/80 text-sm tracking-[0.3em] uppercase mb-4">
              Des artisans passionnés
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              Notre Équipe
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-10">
            {[
              {
                name: "Elena Rossi",
                role: "Fondatrice & Maître Fleuriste",
                exp: "20 ans d’expérience",
              },
              {
                name: "Julie Favre",
                role: "Fleuriste Créative",
                exp: "10 ans d’expérience",
              },
              {
                name: "Marc-Antoine Blanc",
                role: "Fleuriste & Paysagiste",
                exp: "8 ans d’expérience",
              },
            ].map((member) => (
              <div key={member.name} className="text-center group">
                <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-green-100 to-pink-100/60 border-2 border-white shadow-lg flex items-center justify-center mb-6 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                  <span className="text-3xl text-green-400 font-serif">
                    {member.name[0]}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-green-600 text-sm mt-1">{member.role}</p>
                <p className="text-gray-400 text-xs mt-2">{member.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avis Clients */}
      <section id="avis" className="py-24 sm:py-32 bg-[#FDF9F3]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-green-500 mx-auto mb-8" />
            <p className="text-green-600/80 text-sm tracking-[0.3em] uppercase mb-4">
              Ce que disent nos clients
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              Avis Clients
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sophie L.",
                text: "Elena a réalisé le bouquet de mariée de mes rêves. Chaque détail était parfait, les couleurs sublimes. Toute la décoration florale de notre mariage était magique. Merci infiniment !",
                stars: 5,
                date: "Mars 2026",
              },
              {
                name: "Pierre-André M.",
                text: "Je commande régulierement des bouquets pour ma compagne. La qualité est toujours au rendez-vous, les fleurs sont fraîches et les compositions originales. Un vrai plaisir à chaque fois.",
                stars: 5,
                date: "Février 2026",
              },
              {
                name: "Nathalie B.",
                text: "Dans un moment difficile, l’équipe a su créer une composition de deuil d’une grande délicatesse. Merci pour votre sensibilité et votre professionnalisme. Service impeccable.",
                stars: 5,
                date: "Janvier 2026",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-2xl p-8 border border-green-100/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed text-sm mb-8">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex justify-between items-end pt-6 border-t border-gray-100">
                  <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commande / Livraison */}
      <section id="commande" className="py-24 sm:py-32 bg-green-700">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="w-12 h-px bg-white/40 mx-auto mb-8" />
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Commandez vos fleurs
          </h2>
          <p className="mt-5 text-lg text-green-100/80 max-w-xl mx-auto">
            Livraison à Neuchâtel et environs du lundi au samedi.
            Commandez avant 14h pour une livraison le jour même.
          </p>
          <div className="mt-12 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-8 sm:p-12">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2.5 text-left">
                  Nom complet
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-green-200/40 focus:outline-none focus:border-white/40 transition-colors duration-300"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2.5 text-left">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-green-200/40 focus:outline-none focus:border-white/40 transition-colors duration-300"
                  placeholder="+41 32 000 00 00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2.5 text-left">
                  Type de création
                </label>
                <select className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white focus:outline-none focus:border-white/40 transition-colors duration-300">
                  <option value="">Choisir une création</option>
                  <option value="bouquet">Bouquet sur mesure</option>
                  <option value="mariage">Mariage</option>
                  <option value="deuil">Deuil & Hommage</option>
                  <option value="evenement">Événement</option>
                  <option value="plante">Plante / Cadeau</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2.5 text-left">
                  Date de livraison souhaitée
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white focus:outline-none focus:border-white/40 transition-colors duration-300"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-white/80 mb-2.5 text-left">
                  Adresse de livraison
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-green-200/40 focus:outline-none focus:border-white/40 transition-colors duration-300"
                  placeholder="Rue, NPA, Ville"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-white/80 mb-2.5 text-left">
                  Message à joindre (optionnel)
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-green-200/40 focus:outline-none focus:border-white/40 transition-colors duration-300 resize-none"
                  placeholder="Un petit mot pour accompagner vos fleurs..."
                />
              </div>
            </div>
            <div className="mt-10">
              <button className="px-10 py-4 rounded-full bg-white text-green-700 font-semibold hover:bg-green-50 transition-colors duration-300 shadow-lg">
                Envoyer ma commande
              </button>
            </div>
          </div>
          <p className="mt-8 text-green-200/70 text-sm">
            Ou appelez-nous au{" "}
            <a
              href="tel:+41327221540"
              className="text-white font-semibold hover:underline"
            >
              +41 32 722 15 40
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-300 to-pink-400 flex items-center justify-center text-white font-bold text-lg font-serif italic">
                  R
                </div>
                <span className="text-xl font-serif font-bold text-white">
                  Fleurs &amp; Jardins Rossi
                </span>
              </div>
              <p className="text-sm leading-relaxed max-w-md">
                Votre fleuriste artisanale au coeur de Neuchâtel. Bouquets sur
                mesure, décorations événementielles et livraison à domicile
                depuis 2009.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">Horaires</h4>
              <ul className="space-y-3 text-sm">
                <li>Lundi : 13h30 – 18h30</li>
                <li>Mar-Ven : 8h30 – 18h30</li>
                <li>Samedi : 8h30 – 17h00</li>
                <li>Dimanche : Fermé</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li>Rue des Moulins 12, 2000 Neuchâtel</li>
                <li>+41 32 722 15 40</li>
                <li>info@fleurs-rossi.ch</li>
              </ul>
              <div className="flex gap-3 mt-5">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                >
                  <span className="text-xs text-white">IG</span>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                >
                  <span className="text-xs text-white">FB</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-16 pt-8 text-sm text-center text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Fleurs &amp; Jardins Rossi &mdash; Tous droits
              réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
