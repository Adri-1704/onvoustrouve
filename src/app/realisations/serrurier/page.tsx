import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Securi-Cle Muller | Serrurier d'Urgence - Lucerne",
  description:
    "Serrurier d'urgence a Lucerne. Ouverture de porte, changement de serrure, installation securite, coffre-fort. Disponible 24h/24, 7j/7. Intervention en 30 minutes.",
};

export default function SerrurierDemo() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-950 font-sans">
      {/* Bandeau demo */}
      <div className="bg-gray-900 text-white text-center text-sm py-2 px-4">
        Ceci est une demonstration{" "}
        <Link href="/" className="underline font-semibold hover:text-blue-300">
          OnVousTrouve.ch
        </Link>{" "}
        — Ce site n&apos;est pas reel
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-stone-950/95 backdrop-blur-md border-b border-stone-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight">
                  Securi-Cle Muller
                </span>
                <p className="text-xs text-orange-500 font-medium tracking-wide">
                  Lucerne
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-400">
              <a href="#services" className="hover:text-orange-500 transition-colors duration-300">
                Services
              </a>
              <a href="#tarifs" className="hover:text-orange-500 transition-colors duration-300">
                Tarifs
              </a>
              <a href="#zone" className="hover:text-orange-500 transition-colors duration-300">
                Zone
              </a>
              <a href="#avis" className="hover:text-orange-500 transition-colors duration-300">
                Avis
              </a>
              <a href="#contact" className="hover:text-orange-500 transition-colors duration-300">
                Contact
              </a>
            </div>
            <a
              href="tel:+41412101234"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-orange-600 text-white text-sm font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg shadow-orange-600/20 hover:shadow-orange-600/30"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Urgence 24/7
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 min-h-[85vh] flex items-center">
        <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-gradient-to-bl from-orange-900/10 to-transparent rounded-bl-[120px]" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-orange-900/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-orange-900/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-600 text-white text-sm font-bold mb-8 shadow-lg shadow-orange-600/30 animate-pulse">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                URGENCE 24h/24 &mdash; 7j/7
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                Serrurier
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                  d&apos;urgence
                </span>
              </h1>
              <p className="mt-8 text-lg text-stone-400 max-w-lg leading-relaxed">
                Porte claquee, serrure bloquee, cambriolage ? Notre equipe
                intervient a Lucerne et environs en moins de 30 minutes,
                24 heures sur 24, 7 jours sur 7.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="tel:+41412101234"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-orange-600 text-white font-bold text-lg hover:bg-orange-700 transition-all duration-300 shadow-xl shadow-orange-600/30 hover:shadow-orange-600/40 hover:-translate-y-0.5"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +41 41 210 12 34
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-stone-700 text-stone-300 font-semibold hover:border-orange-600 hover:text-orange-500 transition-all duration-300"
                >
                  Demander un devis
                </a>
              </div>
              <div className="mt-14 grid grid-cols-3 gap-6">
                {[
                  { value: "30 min", label: "Intervention rapide" },
                  { value: "24/7", label: "Disponibilite" },
                  { value: "25+", label: "Annees d'experience" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl sm:text-3xl font-extrabold text-orange-500">{stat.value}</p>
                    <p className="text-xs text-stone-500 mt-1 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-orange-900/20 border border-stone-800">
                  <img
                    src="https://images.unsplash.com/photo-1621274147744-cfb5694bb233?w=800&q=80"
                    alt="Serrurier Securi-Cle Muller a Lucerne"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-6 -right-6 bg-stone-900 rounded-2xl p-5 shadow-xl border border-stone-700">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-600/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Intervention rapide</p>
                      <p className="text-xs text-stone-400">30 minutes max.</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-stone-900 rounded-2xl p-5 shadow-xl border border-stone-700">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">4.9/5</p>
                      <p className="text-xs text-stone-400">(150 avis)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bande de confiance */}
      <section className="py-8 bg-stone-900 border-y border-stone-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-stone-500">
            {[
              {
                text: "Urgence 24/7",
                icon: (
                  <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                text: "Devis gratuit",
                icon: (
                  <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
              {
                text: "Sans degats",
                icon: (
                  <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                text: "Tarifs transparents",
                icon: (
                  <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                text: "Garanti 2 ans",
                icon: (
                  <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2.5">
                {item.icon}
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 sm:py-32 bg-stone-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-orange-500 font-semibold tracking-widest uppercase text-sm mb-4">
              Nos services
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Solutions pour toutes les situations
            </h2>
            <p className="mt-6 text-stone-400 max-w-2xl mx-auto text-lg leading-relaxed">
              De l&apos;ouverture de porte d&apos;urgence a l&apos;installation de systemes
              de securite complets, nous couvrons tous vos besoins.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Ouverture de porte",
                desc: "Porte claquee, cle perdue ou cassee dans la serrure. Ouverture rapide et sans degats grace a nos techniques professionnelles.",
                icon: (
                  <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: "Changement de serrure",
                desc: "Remplacement de serrure suite a un cambriolage, une perte de cle ou pour ameliorer votre securite. Serrures certifiees.",
                icon: (
                  <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                ),
              },
              {
                title: "Installation securite",
                desc: "Systemes de securite pour portes, fenetres et immeubles. Serrures multipoints, cylindres haute securite, digicodes.",
                icon: (
                  <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: "Coffre-fort",
                desc: "Ouverture, installation et reparation de coffres-forts. Toutes marques et tous modeles. Intervention discrete et confidentielle.",
                icon: (
                  <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                ),
              },
              {
                title: "Reproduction de cles",
                desc: "Copie de cles standard, securisees et brevetees. Cles de voiture, badges d'immeuble, cles de boites aux lettres.",
                icon: (
                  <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: "Blindage de porte",
                desc: "Renforcement de votre porte d'entree avec un blindage professionnel. Protection maximale contre les tentatives d'effraction.",
                icon: (
                  <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                ),
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group relative p-8 rounded-3xl border border-stone-800 bg-stone-900 hover:shadow-2xl hover:shadow-orange-900/20 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-600/10 border border-orange-600/20 flex items-center justify-center mb-6 group-hover:bg-orange-600/20 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-stone-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image band */}
      <section className="relative h-[400px] sm:h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80"
          alt="Serrurier professionnel au travail"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-lg">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Plus de 25 ans d&apos;experience a votre service
              </h2>
              <p className="mt-4 text-stone-300 text-lg leading-relaxed">
                Entreprise familiale depuis 1999, Securi-Cle Muller est le
                specialiste de la serrurerie a Lucerne. Confiance, rapidite
                et tarifs transparents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section id="tarifs" className="py-24 sm:py-32 bg-stone-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-orange-500 font-semibold tracking-widest uppercase text-sm mb-4">
              Tarifs transparents
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Nos prix, sans surprises
            </h2>
            <p className="mt-6 text-stone-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Nous communiquons nos tarifs avant chaque intervention. Aucun
              supplement cache. Devis gratuit sur place.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Ouverture simple",
                price: "150 - 250",
                desc: "Porte claquee, sans degats. Intervention standard en journee.",
                details: ["Sans destruction", "Deplacements inclus", "Heures ouvrables"],
              },
              {
                title: "Ouverture urgence nuit",
                price: "280 - 450",
                desc: "Intervention nocturne ou week-end. Supplement urgence inclus.",
                details: ["Nuit / week-end / jours feries", "Intervention en 30 min", "Sans destruction"],
                highlighted: true,
              },
              {
                title: "Changement serrure",
                price: "350 - 650",
                desc: "Fourniture et pose d'une serrure neuve. Marques certifiees.",
                details: ["Serrure fournie", "Pose professionnelle", "Garantie 2 ans"],
              },
              {
                title: "Cylindre haute securite",
                price: "180 - 380",
                desc: "Remplacement du cylindre par un modele haute securite.",
                details: ["Cylindre certifie", "Carte de propriete", "Anti-crochetage"],
              },
              {
                title: "Blindage de porte",
                price: "1200 - 2500",
                desc: "Blindage complet de votre porte d'entree existante.",
                details: ["Blindage acier", "Serrure multipoints", "Devis personnalise"],
              },
              {
                title: "Reproduction de cle",
                price: "25 - 120",
                desc: "Copie de cle standard ou securisee. Sur place ou sur commande.",
                details: ["Cle standard des 25 CHF", "Cle securisee des 60 CHF", "Delai 24-72h"],
              },
            ].map((tarif) => (
              <div
                key={tarif.title}
                className={`relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
                  tarif.highlighted
                    ? "border-orange-600 bg-gradient-to-b from-orange-600/10 to-stone-900 shadow-xl shadow-orange-900/20"
                    : "border-stone-800 bg-stone-950 hover:shadow-xl hover:shadow-orange-900/10"
                }`}
              >
                {tarif.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-orange-600 text-white text-xs font-bold rounded-full">
                    Le plus demande
                  </div>
                )}
                <h3 className="text-lg font-bold text-white mb-2">
                  {tarif.title}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-extrabold text-orange-500">{tarif.price}</span>
                  <span className="text-sm text-stone-500">CHF</span>
                </div>
                <p className="text-sm text-stone-400 leading-relaxed mb-6">
                  {tarif.desc}
                </p>
                <ul className="space-y-2">
                  {tarif.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-sm text-stone-400">
                      <svg className="w-4 h-4 text-orange-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-stone-500 text-sm mt-10">
            * Prix indicatifs TTC. Le tarif exact est communique avant chaque intervention.
          </p>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section id="zone" className="py-24 sm:py-32 bg-stone-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold tracking-widest uppercase text-sm mb-4">
              Couverture regionale
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Zone d&apos;intervention
            </h2>
            <p className="mt-6 text-stone-400 max-w-2xl mx-auto text-lg">
              Nous intervenons a Lucerne et dans un rayon de 30 km. Deplacement
              inclus dans le tarif pour la zone principale.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { city: "Lucerne", detail: "Zone principale", highlight: true },
              { city: "Kriens", detail: "5 min", highlight: false },
              { city: "Horw", detail: "8 min", highlight: false },
              { city: "Emmen", detail: "10 min", highlight: false },
              { city: "Ebikon", detail: "10 min", highlight: false },
              { city: "Meggen", detail: "12 min", highlight: false },
              { city: "Adligenswil", detail: "12 min", highlight: false },
              { city: "Rothenburg", detail: "15 min", highlight: false },
              { city: "Buchrain", detail: "15 min", highlight: false },
              { city: "Root", detail: "18 min", highlight: false },
              { city: "Kussnacht am Rigi", detail: "20 min", highlight: false },
              { city: "Stans", detail: "25 min", highlight: false },
            ].map((zone) => (
              <div
                key={zone.city}
                className={`flex items-center gap-3 p-4 rounded-2xl border transition-all duration-300 ${
                  zone.highlight
                    ? "border-orange-600 bg-orange-600/10"
                    : "border-stone-800 bg-stone-900 hover:border-stone-700"
                }`}
              >
                <svg className={`w-5 h-5 shrink-0 ${zone.highlight ? "text-orange-500" : "text-stone-600"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className={`text-sm font-bold ${zone.highlight ? "text-orange-500" : "text-white"}`}>
                    {zone.city}
                  </p>
                  <p className="text-xs text-stone-500">{zone.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <section id="avis" className="py-24 sm:py-32 bg-stone-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-orange-500 font-semibold tracking-widest uppercase text-sm mb-4">
              Temoignages
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ils nous font confiance
            </h2>
            <p className="mt-6 text-stone-400 max-w-2xl mx-auto text-lg">
              La satisfaction de nos clients est notre meilleure carte de visite.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sandra K.",
                text: "Porte claquee a 23h un samedi. M. Muller est arrive en 20 minutes ! Ouverture propre, sans aucun degat. Prix annonce respecte. Je recommande sans hesitation.",
                rating: 5,
                date: "Fevrier 2026",
              },
              {
                name: "Michael R.",
                text: "Suite a un cambriolage, Securi-Cle Muller a securise mon appartement en urgence et installe un systeme de serrure multipoints. Travail impeccable, equipe rassurante dans un moment difficile.",
                rating: 5,
                date: "Janvier 2026",
              },
              {
                name: "Heidi F.",
                text: "Tres professionnel. Deplacement rapide pour changer la serrure de notre local commercial. Tarif honnete et transparent, facture detaillee. Une adresse a garder precieusement !",
                rating: 5,
                date: "Decembre 2025",
              },
            ].map((avis) => (
              <div
                key={avis.name}
                className="bg-stone-950 rounded-3xl p-8 border border-stone-800 shadow-sm hover:shadow-lg hover:shadow-orange-900/10 transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i <= avis.rating ? "text-amber-400" : "text-stone-700"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-stone-300 text-sm leading-relaxed mb-6">
                  &ldquo;{avis.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-white">{avis.name}</p>
                  <p className="text-xs text-stone-500">{avis.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Urgence */}
      <section id="contact" className="py-24 sm:py-32 bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Besoin d&apos;un serrurier ?
            </h2>
            <p className="mt-6 text-orange-100 max-w-2xl mx-auto text-lg leading-relaxed">
              Appelez-nous directement pour une intervention urgente ou remplissez
              le formulaire pour un devis gratuit.
            </p>
            <a
              href="tel:+41412101234"
              className="inline-flex items-center gap-3 mt-8 px-10 py-5 rounded-full bg-white text-orange-700 font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl shadow-orange-900/30 hover:-translate-y-0.5"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +41 41 210 12 34
            </a>
          </div>
          <div className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Demande de devis gratuit</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom et prenom
                </label>
                <input
                  type="text"
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                  placeholder="Votre nom complet"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Telephone
                </label>
                <input
                  type="tel"
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                  placeholder="+41 41 000 00 00"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                  placeholder="votre@email.ch"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Type d&apos;intervention
                </label>
                <select className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all">
                  <option value="">Selectionner...</option>
                  <option value="ouverture">Ouverture de porte</option>
                  <option value="serrure">Changement de serrure</option>
                  <option value="securite">Installation securite</option>
                  <option value="coffre">Coffre-fort</option>
                  <option value="cle">Reproduction de cle</option>
                  <option value="blindage">Blindage de porte</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Urgence
                </label>
                <select className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all">
                  <option value="">Selectionner...</option>
                  <option value="urgente">Oui, intervention urgente</option>
                  <option value="rapide">Sous 24-48h</option>
                  <option value="planifie">A planifier (devis)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Adresse d&apos;intervention
                </label>
                <input
                  type="text"
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                  placeholder="Rue, numero, NPA Ville"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description du probleme (optionnel)
              </label>
              <textarea
                className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all h-28 resize-none"
                placeholder="Decrivez votre situation : porte claquee, serrure bloquee, type de porte..."
              />
            </div>
            <div className="mt-10 text-center">
              <button className="px-12 py-4 rounded-full bg-orange-600 text-white font-bold text-lg hover:bg-orange-700 transition-all duration-300 shadow-xl shadow-orange-600/25 hover:shadow-orange-600/35 hover:-translate-y-0.5">
                Envoyer ma demande
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-white">
                  Securi-Cle Muller
                </span>
              </div>
              <p className="text-sm leading-relaxed max-w-md">
                Serrurier d&apos;urgence a Lucerne depuis 1999. Intervention 24h/24,
                7j/7. Ouverture de porte, changement de serrure, installation de
                systemes de securite. Tarifs transparents, devis gratuit.
              </p>
              <div className="mt-6 flex gap-3">
                <div className="px-4 py-2 bg-stone-800/80 rounded-lg text-xs text-stone-300 font-medium">
                  Urgence 24/7
                </div>
                <div className="px-4 py-2 bg-stone-800/80 rounded-lg text-xs text-stone-300 font-medium">
                  Garanti 2 ans
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-5">Disponibilite</h4>
              <ul className="space-y-2.5 text-sm">
                <li>Lun-Dim : 24h/24</li>
                <li>Jours feries : Disponible</li>
                <li className="text-orange-500 font-medium mt-3 pt-3 border-t border-stone-800">
                  Urgences : Intervention en 30 min
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-5">Contact</h4>
              <ul className="space-y-2.5 text-sm">
                <li>Hirschengraben 12, 6003 Lucerne</li>
                <li>
                  <a href="tel:+41412101234" className="text-orange-500 font-semibold hover:underline">
                    +41 41 210 12 34
                  </a>
                </li>
                <li>info@securi-cle-muller.ch</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-stone-800 mt-14 pt-8 text-sm text-center text-stone-600">
            <p>
              &copy; {new Date().getFullYear()} Securi-Cle Muller Sarl &mdash;
              Tous droits reserves.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
