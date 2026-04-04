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
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          Urgence plomberie 24h/24 — Appelez le{" "}
          <a href="tel:+41263224567" className="underline font-bold">
            +41 26 322 45 67
          </a>
        </span>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0A1628]/95 backdrop-blur-sm border-b border-blue-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
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
                <p className="text-xs text-blue-300/70">
                  Plomberie depuis 1987
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-blue-200/70">
              <a href="#services" className="hover:text-orange-400 transition-colors">
                Services
              </a>
              <a href="#zone" className="hover:text-orange-400 transition-colors">
                Zone d&apos;intervention
              </a>
              <a href="#temoignages" className="hover:text-orange-400 transition-colors">
                Témoignages
              </a>
              <a href="#devis" className="hover:text-orange-400 transition-colors">
                Devis gratuit
              </a>
            </div>
            <a
              href="tel:+41263224567"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-orange-500 text-white text-sm font-bold hover:bg-orange-600 transition-colors"
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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#0F2140] to-[#0A1628] py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-900/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Intervention rapide — 30 min en urgence
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Votre plombier
                <br />
                de confiance à
                <br />
                <span className="text-orange-400">Fribourg</span>
              </h1>
              <p className="mt-6 text-lg text-blue-200/60 max-w-lg leading-relaxed">
                Dépannage, rénovation et installation. Depuis 1987, la famille
                Müller met son expertise au service de votre confort.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="tel:+41263224567"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/25"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +41 26 322 45 67
                </a>
                <a
                  href="#devis"
                  className="inline-flex items-center px-8 py-4 rounded-xl border-2 border-blue-400/30 text-blue-200 font-semibold hover:border-orange-400 hover:text-orange-300 transition-colors"
                >
                  Devis gratuit en ligne
                </a>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                {[
                  { value: "37+", label: "Ans d'expérience" },
                  { value: "5000+", label: "Interventions" },
                  { value: "24/7", label: "Disponibilité" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-orange-400">
                      {stat.value}
                    </p>
                    <p className="text-xs text-blue-300/50 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { icon: "🔧", title: "Dépannage", desc: "Intervention rapide" },
                { icon: "🚿", title: "Salle de bain", desc: "Rénovation complète" },
                { icon: "🔥", title: "Chauffage", desc: "Installation & entretien" },
                { icon: "💧", title: "Fuite d'eau", desc: "Urgence 24h/24" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white/5 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-6 hover:border-orange-500/30 transition-colors"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-white font-bold">{item.title}</h3>
                  <p className="text-blue-300/50 text-sm mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-3">
              Nos compétences
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Nos Services
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Une équipe qualifiée pour tous vos travaux de plomberie, chauffage
              et sanitaire.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Dépannage & Urgences",
                desc: "Fuite d'eau, canalisation bouchée, panne de chauffage... Nous intervenons dans les 30 minutes sur Fribourg et environs. Disponible 24h/24, 7j/7.",
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
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    service.color === "orange"
                      ? "bg-orange-100 text-orange-600"
                      : service.color === "blue"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-teal-100 text-teal-600"
                  }`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
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

      {/* Zone d'intervention */}
      <section id="zone" className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-3">
                Où nous trouvez
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                Zone d&apos;intervention
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Basés à Fribourg, nous intervenons dans un rayon de 30 km.
                Dépannage rapide dans toute la région fribourgeoise.
              </p>
              <div className="grid grid-cols-2 gap-3">
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
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <svg className="w-4 h-4 text-orange-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {city}
                  </div>
                ))}
              </div>
            </div>
            <div className="h-80 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-blue-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-blue-400/60 text-sm">
                  Carte de la zone d&apos;intervention
                  <br />
                  Rayon de 30 km autour de Fribourg
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section id="temoignages" className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-3">
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
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {Array.from({ length: review.stars }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs font-medium text-orange-500 bg-orange-50 px-2 py-1 rounded-full">
                    {review.type}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm italic mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="font-semibold text-gray-900 text-sm">
                  {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devis gratuit */}
      <section id="devis" className="py-20 sm:py-28 bg-gradient-to-br from-[#0A1628] to-[#0F2140]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-orange-400 font-bold tracking-widest uppercase text-sm mb-3">
              Sans engagement
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Demandez votre devis gratuit
            </h2>
            <p className="mt-4 text-blue-200/60 max-w-2xl mx-auto">
              Décrivez-nous votre besoin et nous vous répondrons sous 24h avec un
              devis détaillé.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-8 sm:p-12">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-blue-500/20 text-white placeholder-blue-300/40 focus:outline-none focus:border-orange-400"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-blue-500/20 text-white placeholder-blue-300/40 focus:outline-none focus:border-orange-400"
                  placeholder="+41 26 000 00 00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-blue-500/20 text-white placeholder-blue-300/40 focus:outline-none focus:border-orange-400"
                  placeholder="votre@email.ch"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-2">
                  Type de prestation
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-white/10 border border-blue-500/20 text-white focus:outline-none focus:border-orange-400">
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
              <label className="block text-sm font-medium text-blue-200 mb-2">
                Description de votre besoin
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-blue-500/20 text-white placeholder-blue-300/40 focus:outline-none focus:border-orange-400 h-32 resize-none"
                placeholder="Décrivez-nous votre problème ou votre projet..."
              />
            </div>
            <div className="mt-8 text-center">
              <button className="px-10 py-4 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/25">
                Envoyer ma demande de devis
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#060E1A] text-blue-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
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
                  <p className="text-xs text-blue-300/40">Fribourg, depuis 1987</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed max-w-md">
                Artisan plombier de père en fils. Nous mettons notre savoir-faire
                au service de votre confort depuis plus de 37 ans dans la
                région fribourgeoise.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>Dépannage urgence 24h/24</li>
                <li>Rénovation salle de bain</li>
                <li>Installation sanitaire</li>
                <li>Chauffage & chauffe-eau</li>
                <li>Détection de fuite</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Route de la Fonderie 8, 1700 Fribourg</li>
                <li>
                  <a href="tel:+41263224567" className="text-orange-400 font-bold hover:underline">
                    +41 26 322 45 67
                  </a>
                </li>
                <li>info@muller-plomberie.ch</li>
              </ul>
              <div className="mt-4 p-3 bg-orange-500/10 border border-orange-500/20 rounded-xl">
                <p className="text-orange-400 text-xs font-bold">
                  Urgence 24h/24 — 7j/7
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-900/30 mt-12 pt-8 text-sm text-center">
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
