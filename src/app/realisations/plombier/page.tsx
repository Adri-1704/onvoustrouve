import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plomberie Müller & Fils | Artisan Plombier - Fribourg",
  description:
    "Plombier professionnel à Fribourg. Dépannage urgence 24h/24, rénovation, installation. Devis gratuit. +41 26 322 45 67.",
};

export default function PlombierDemo() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* Bandeau démo */}
      <div className="bg-gray-900 text-white text-center text-sm py-2 px-4">
        Ceci est une démonstration{" "}
        <Link href="/" className="underline font-semibold hover:text-blue-300">
          OnVousTrouve.ch
        </Link>{" "}
        — Ce site n&apos;est pas réel
      </div>

      {/* Bandeau urgence */}
      <div className="bg-orange-500 text-white text-center text-sm py-2.5 px-4 font-medium">
        <span className="inline-flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
          Urgence plomberie 24h/24 — Appelez le{" "}
          <a href="tel:+41263224567" className="underline font-bold">
            +41 26 322 45 67
          </a>
        </span>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0A1628]/95 backdrop-blur-md border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold text-white">
                  Müller & Fils
                </span>
                <p className="text-[11px] text-blue-300/50 tracking-wide">
                  Plomberie depuis 1987
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-10 text-sm text-blue-200/60">
              <a href="#services" className="hover:text-orange-400 transition-colors duration-300">
                Services
              </a>
              <a href="#zone" className="hover:text-orange-400 transition-colors duration-300">
                Zone d&apos;intervention
              </a>
              <a href="#temoignages" className="hover:text-orange-400 transition-colors duration-300">
                Témoignages
              </a>
              <a href="#devis" className="hover:text-orange-400 transition-colors duration-300">
                Devis gratuit
              </a>
            </div>
            <a
              href="tel:+41263224567"
              className="hidden sm:inline-flex items-center gap-2 px-7 py-2.5 rounded-xl bg-orange-500 text-white text-sm font-bold hover:bg-orange-600 transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Appeler maintenant
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0A1628] min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1600&q=80"
            alt="Plombier professionnel au travail"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/95 to-[#0A1628]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-[#0A1628]/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Intervention rapide — 30 min en urgence
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1]">
              Votre plombier
              <br />
              de confiance
              <br />
              à <span className="text-orange-400">Fribourg</span>
            </h1>
            <p className="mt-8 text-lg text-blue-200/50 max-w-lg leading-relaxed">
              Dépannage, rénovation et installation. Depuis 1987, la famille
              Müller met son expertise au service de votre confort.
            </p>
            <div className="mt-12 flex flex-wrap gap-5">
              <a
                href="tel:+41263224567"
                className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors duration-300 shadow-lg shadow-orange-500/20"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +41 26 322 45 67
              </a>
              <a
                href="#devis"
                className="inline-flex items-center px-9 py-4 rounded-xl border border-blue-400/20 text-blue-200 font-semibold hover:border-orange-400/50 hover:text-orange-300 transition-all duration-300"
              >
                Devis gratuit en ligne
              </a>
            </div>
            <div className="mt-20 grid grid-cols-3 gap-8">
              {[
                { value: "37+", label: "Ans d'expérience" },
                { value: "5000+", label: "Interventions" },
                { value: "24/7", label: "Disponibilité" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-orange-400">
                    {stat.value}
                  </p>
                  <p className="text-xs text-blue-300/40 mt-1.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Confiance - bandeau */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Certifié et assuré" },
              { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Intervention 30 min" },
              { icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z", label: "Devis transparent" },
              { icon: "M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5", label: "Satisfaction garantie" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-12 h-px bg-orange-400 mx-auto mb-8" />
            <p className="text-orange-500 text-sm tracking-[0.3em] uppercase font-semibold mb-4">
              Nos compétences
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Nos Services
            </h2>
            <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
              Une équipe qualifiée pour tous vos travaux de plomberie, chauffage
              et sanitaire.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Dépannage & Urgences",
                desc: "Fuite d'eau, canalisation bouchée, panne de chauffage... Nous intervenons dans les 30 minutes sur Fribourg et environs.",
                features: [
                  "Intervention en 30 min",
                  "Disponible 24h/24",
                  "Devis avant intervention",
                  "Pas de surfacturation",
                ],
                color: "orange",
              },
              {
                title: "Rénovation Sanitaire",
                desc: "Transformation complète de votre salle de bain ou cuisine. Du plan à la réalisation, nous gérons votre projet de A à Z.",
                features: [
                  "Salle de bain clé en main",
                  "Cuisine & buanderie",
                  "Conseils personnalisés",
                  "Garantie 5 ans",
                ],
                color: "blue",
              },
              {
                title: "Installation & Entretien",
                desc: "Installation de nouveaux équipements sanitaires, chauffe-eau, adoucisseur d'eau. Contrats d'entretien pour votre tranquillité.",
                features: [
                  "Chauffe-eau & boilers",
                  "Adoucisseurs d'eau",
                  "Robinetterie",
                  "Contrats d'entretien",
                ],
                color: "teal",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                    service.color === "orange"
                      ? "bg-orange-50 text-orange-500"
                      : service.color === "blue"
                      ? "bg-blue-50 text-blue-500"
                      : "bg-teal-50 text-teal-500"
                  }`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>
                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations photos */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-orange-400 mx-auto mb-8" />
            <p className="text-orange-500 text-sm tracking-[0.3em] uppercase font-semibold mb-4">
              Avant / Après
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Nos Réalisations
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80", title: "Salle de bain moderne", desc: "Rénovation complète, Fribourg" },
              { img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80", title: "Installation chauffage", desc: "Système haute efficacité, Bulle" },
              { img: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80", title: "Réparation urgente", desc: "Dépannage fuite, Villars-sur-Glâne" },
            ].map((item) => (
              <div key={item.title} className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="h-56 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section id="zone" className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-px bg-orange-400 mb-8" />
              <p className="text-orange-500 text-sm tracking-[0.3em] uppercase font-semibold mb-4">
                Où nous intervenir
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                Zone d&apos;intervention
              </h2>
              <p className="text-gray-500 leading-relaxed mb-10">
                Basés à Fribourg, nous intervenons dans un rayon de 30 km.
                Dépannage rapide dans toute la région fribourgeoise.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Fribourg",
                  "Bulle",
                  "Morat / Murten",
                  "Villars-sur-Glâne",
                  "Marly",
                  "Givisiez",
                  "Granges-Paccot",
                  "Düdingen",
                  "Tafers",
                  "Belfaux",
                  "Corminboeuf",
                  "Guin / Düdingen",
                ].map((city) => (
                  <div
                    key={city}
                    className="flex items-center gap-2.5 text-sm text-gray-600"
                  >
                    <svg className="w-4 h-4 text-orange-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {city}
                  </div>
                ))}
              </div>
            </div>
            <div className="h-96 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80"
                alt="Salle de bain moderne renovee par Plomberie Muller et Fils"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section id="temoignages" className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-orange-400 mx-auto mb-8" />
            <p className="text-orange-500 text-sm tracking-[0.3em] uppercase font-semibold mb-4">
              La satisfaction client
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Témoignages
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Jean-Pierre Aebischer",
                text: "Fuite d'eau un dimanche soir. Müller & Fils sont arrivés en 25 minutes. Problème résolu rapidement et proprement. Prix très correct. Bravo !",
                stars: 5,
                type: "Urgence",
              },
              {
                name: "Sandra Bühler",
                text: "Rénovation complète de notre salle de bain. Travail soigné, dans les délais et le budget. L'équipe est très professionnelle et à l'écoute.",
                stars: 5,
                type: "Rénovation",
              },
              {
                name: "Marco Bernasconi",
                text: "Installation d'un nouveau chauffe-eau. Conseils pertinents sur le choix du modèle. Installation impeccable. Je recommande vivement.",
                stars: 5,
                type: "Installation",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-0.5">
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
                  <span className="text-xs font-medium text-orange-500 bg-orange-50 px-3 py-1 rounded-full">
                    {review.type}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm mb-8">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="pt-6 border-t border-gray-200">
                  <p className="font-semibold text-gray-900 text-sm">
                    {review.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devis gratuit */}
      <section id="devis" className="py-24 sm:py-32 bg-[#0A1628]">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <div className="w-12 h-px bg-orange-400 mx-auto mb-8" />
            <p className="text-orange-400/80 text-sm tracking-[0.3em] uppercase font-semibold mb-4">
              Sans engagement
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Demandez votre devis gratuit
            </h2>
            <p className="mt-5 text-blue-200/40 max-w-xl mx-auto">
              Décrivez-nous votre besoin et nous vous répondrons sous 24h avec un
              devis détaillé.
            </p>
          </div>
          <div className="bg-white/[0.03] backdrop-blur-sm border border-blue-500/10 rounded-2xl p-8 sm:p-12">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-blue-200/80 mb-2.5">
                  Nom complet
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-blue-500/15 text-white placeholder-blue-300/30 focus:outline-none focus:border-orange-400/50 transition-colors duration-300"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-200/80 mb-2.5">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-blue-500/15 text-white placeholder-blue-300/30 focus:outline-none focus:border-orange-400/50 transition-colors duration-300"
                  placeholder="+41 26 000 00 00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-200/80 mb-2.5">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-blue-500/15 text-white placeholder-blue-300/30 focus:outline-none focus:border-orange-400/50 transition-colors duration-300"
                  placeholder="votre@email.ch"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-200/80 mb-2.5">
                  Type de prestation
                </label>
                <select className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-blue-500/15 text-white focus:outline-none focus:border-orange-400/50 transition-colors duration-300">
                  <option value="">Choisir...</option>
                  <option value="urgence">Dépannage / Urgence</option>
                  <option value="renovation">Rénovation salle de bain</option>
                  <option value="installation">Installation sanitaire</option>
                  <option value="chauffage">Chauffage</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-blue-200/80 mb-2.5">
                Description de votre besoin
              </label>
              <textarea
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-blue-500/15 text-white placeholder-blue-300/30 focus:outline-none focus:border-orange-400/50 transition-colors duration-300 h-32 resize-none"
                placeholder="Décrivez-nous votre problème ou votre projet..."
              />
            </div>
            <div className="mt-10 text-center">
              <button className="px-10 py-4 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors duration-300 shadow-lg shadow-orange-500/20">
                Envoyer ma demande de devis
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#060E1A] text-blue-200/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-lg font-bold text-white">
                    Plomberie Müller & Fils
                  </span>
                  <p className="text-xs text-blue-300/30">Fribourg, depuis 1987</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed max-w-md">
                Artisan plombier de père en fils. Nous mettons notre savoir-faire
                au service de votre confort depuis plus de 37 ans dans la
                région fribourgeoise.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">Services</h4>
              <ul className="space-y-3 text-sm">
                <li>Dépannage urgence 24h/24</li>
                <li>Rénovation salle de bain</li>
                <li>Installation sanitaire</li>
                <li>Chauffage & chauffe-eau</li>
                <li>Détection de fuite</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li>Route de la Fonderie 8, 1700 Fribourg</li>
                <li>
                  <a href="tel:+41263224567" className="text-orange-400 font-bold hover:underline">
                    +41 26 322 45 67
                  </a>
                </li>
                <li>info@muller-plomberie.ch</li>
              </ul>
              <div className="mt-5 p-3 bg-orange-500/10 border border-orange-500/15 rounded-xl">
                <p className="text-orange-400 text-xs font-bold">
                  Urgence 24h/24 — 7j/7
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-900/20 mt-16 pt-8 text-sm text-center text-blue-200/30">
            <p>
              &copy; {new Date().getFullYear()} Plomberie Müller & Fils Sàrl —
              Tous droits réservés. RC Fribourg CHE-123.456.789
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
