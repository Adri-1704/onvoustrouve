import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Helvetia Immobilier | Agence Immobiliere - Lugano",
  description:
    "Agence immobiliere a Lugano. Vente, achat, estimation, gestion locative. Plus de 20 ans d'experience sur le marche immobilier suisse.",
};

export default function ImmobilierDemo() {
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
      <nav className="sticky top-0 z-50 bg-[#1E293B]/95 backdrop-blur-md border-b border-[#D4A853]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border border-[#D4A853]/60 rounded flex items-center justify-center">
                <span className="text-[#D4A853] font-serif font-bold text-lg">H</span>
              </div>
              <div>
                <span className="text-lg font-serif font-bold text-white tracking-wide">
                  Helvetia Immobilier
                </span>
                <p className="text-[11px] text-[#D4A853]/50 tracking-[0.25em] uppercase">
                  Agence immobiliere Lugano
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-10 text-sm text-gray-400">
              <a href="#services" className="hover:text-[#D4A853] transition-colors duration-300">
                Services
              </a>
              <a href="#biens" className="hover:text-[#D4A853] transition-colors duration-300">
                Biens
              </a>
              <a href="#equipe" className="hover:text-[#D4A853] transition-colors duration-300">
                Equipe
              </a>
              <a href="#avis" className="hover:text-[#D4A853] transition-colors duration-300">
                Avis
              </a>
              <a href="#estimation" className="hover:text-[#D4A853] transition-colors duration-300">
                Estimation
              </a>
            </div>
            <a
              href="#estimation"
              className="hidden sm:inline-flex items-center px-7 py-2.5 bg-[#D4A853] text-[#1E293B] text-sm font-semibold hover:bg-[#C49A48] transition-colors duration-300"
            >
              Estimation gratuite
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1E293B] min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80"
            alt="Villa de luxe avec vue sur le lac de Lugano"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E293B] via-[#1E293B]/95 to-[#1E293B]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-transparent to-[#1E293B]/60" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A853]/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="max-w-3xl">
            <div className="w-16 h-px bg-[#D4A853] mb-10" />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1]">
              L&apos;immobilier
              <br />
              d&apos;exception au
              <br />
              <span className="text-[#D4A853]">Tessin</span>
            </h1>
            <p className="mt-10 text-lg text-gray-400 max-w-2xl leading-relaxed">
              Depuis plus de 20 ans, Helvetia Immobilier vous accompagne dans vos
              projets immobiliers au coeur du Tessin. Expertise locale, reseau
              international et service sur mesure pour une experience sans compromis.
            </p>
            <div className="mt-12 flex flex-wrap gap-5">
              <a
                href="#estimation"
                className="inline-flex items-center px-9 py-4 bg-[#D4A853] text-[#1E293B] font-semibold hover:bg-[#C49A48] transition-colors duration-300"
              >
                Estimation gratuite
              </a>
              <a
                href="#biens"
                className="inline-flex items-center px-9 py-4 border border-gray-600 text-gray-300 font-semibold hover:border-[#D4A853] hover:text-[#D4A853] transition-all duration-300"
              >
                Voir nos biens
              </a>
            </div>
            <div className="mt-24 flex items-center gap-12">
              {[
                { value: "20+", label: "Annees d'experience" },
                { value: "500+", label: "Biens vendus" },
                { value: "98%", label: "Clients satisfaits" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-serif font-bold text-[#D4A853]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 mt-1.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              {
                title: "Prestige",
                desc: "Nous selectionnons les biens les plus remarquables du marche tessinois et les valorisons pour une vente optimale.",
              },
              {
                title: "Confiance",
                desc: "Transparence totale sur les prix, les delais et les procedures. Votre confiance est le pilier de notre reussite.",
              },
              {
                title: "Discretion",
                desc: "Chaque transaction est menee avec la plus grande confidentialite. Nous protegeoons les interets de nos clients.",
              },
            ].map((value) => (
              <div key={value.title}>
                <div className="w-12 h-px bg-[#D4A853] mx-auto mb-6" />
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-12 h-px bg-[#D4A853] mx-auto mb-8" />
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              Nos services
            </h2>
            <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
              Un accompagnement complet pour tous vos projets immobiliers,
              de l&apos;estimation a la remise des cles.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Vente immobiliere",
                desc: "Strategie de vente personnalisee, photos professionnelles, visites organisees et negociation optimale pour votre bien.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
              },
              {
                title: "Achat & Recherche",
                desc: "Nous identifions le bien ideal selon vos criteres, y compris des opportunites off-market exclusives a nos clients.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
              },
              {
                title: "Estimation gratuite",
                desc: "Evaluation precise de votre bien basee sur l'analyse du marche local, les comparables et notre expertise de terrain.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: "Gestion locative",
                desc: "Administration complete de vos biens : recherche de locataires, encaissement, entretien et gestion des litiges.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
              },
              {
                title: "Conseil fiscal",
                desc: "Optimisation fiscale de vos investissements immobiliers. Collaboration avec nos partenaires fiduciaires de confiance.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Immobilier de prestige",
                desc: "Division dediee aux biens d'exception : villas avec vue lac, penthouses, proprietes historiques et domaines viticoles.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
              },
            ].map((service) => (
              <div
                key={service.title}
                className="flex gap-6 p-7 bg-white rounded-lg border border-gray-100 hover:border-[#D4A853]/40 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-lg bg-[#1E293B] flex items-center justify-center text-[#D4A853] shrink-0 group-hover:bg-[#D4A853] group-hover:text-[#1E293B] transition-colors duration-300">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biens en vedette */}
      <section id="biens" className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-12 h-px bg-[#D4A853] mx-auto mb-8" />
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              Biens en vedette
            </h2>
            <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
              Decouvrez une selection de nos proprietes les plus remarquables
              actuellement disponibles sur le marche.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Villa contemporaine vue lac",
                location: "Paradiso, Lugano",
                price: "CHF 3'850'000",
                surface: "320 m2",
                rooms: "7 pieces",
                image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
                badge: "Exclusivite",
              },
              {
                title: "Penthouse avec terrasse panoramique",
                location: "Cassarate, Lugano",
                price: "CHF 2'190'000",
                surface: "185 m2",
                rooms: "5 pieces",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
                badge: "Nouveau",
              },
              {
                title: "Appartement de standing renove",
                location: "Montagnola, Collina d'Oro",
                price: "CHF 1'450'000",
                surface: "140 m2",
                rooms: "4.5 pieces",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
                badge: "Coup de coeur",
              },
              {
                title: "Maison de maitre avec jardin",
                location: "Morcote, Lugano",
                price: "CHF 4'200'000",
                surface: "450 m2",
                rooms: "9 pieces",
                image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
                badge: "Prestige",
              },
            ].map((bien) => (
              <div
                key={bien.title}
                className="group rounded-lg overflow-hidden border border-gray-100 hover:border-[#D4A853]/40 hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={bien.image}
                    alt={bien.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#D4A853] text-[#1E293B] text-xs font-bold uppercase tracking-wider">
                    {bien.badge}
                  </div>
                  <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white text-2xl font-serif font-bold">{bien.price}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {bien.title}
                  </h3>
                  <p className="text-sm text-[#D4A853] font-medium mb-4">{bien.location}</p>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      {bien.surface}
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {bien.rooms}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section id="equipe" className="py-24 sm:py-32 bg-[#1E293B]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-12 h-px bg-[#D4A853] mx-auto mb-8" />
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Notre equipe
            </h2>
            <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
              Des professionnels experimentes et passionnes par l&apos;immobilier tessinois.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                name: "Marco Bernasconi",
                role: "Directeur & Fondateur",
                specialty: "Immobilier de prestige, Investissements",
                since: "Depuis 2004",
              },
              {
                name: "Giulia Fontana",
                role: "Directrice commerciale",
                specialty: "Vente residentielle, Negociation",
                since: "Depuis 2010",
              },
              {
                name: "Luca Martinelli",
                role: "Agent senior",
                specialty: "Gestion locative, Droit immobilier",
                since: "Depuis 2014",
              },
              {
                name: "Elena Rossi",
                role: "Conseillere immobiliere",
                specialty: "Biens neufs, Primo-accedants",
                since: "Depuis 2018",
              },
            ].map((member) => (
              <div key={member.name} className="text-center group">
                <div className="w-44 h-52 mx-auto bg-gradient-to-b from-[#2D3A4E] to-[#1E293B] rounded-lg flex items-center justify-center mb-6 border border-gray-700 group-hover:border-[#D4A853]/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#D4A853]/5">
                  <span className="text-4xl text-[#D4A853]/20 font-serif">
                    {member.name.split(" ").pop()?.[0]}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-[#D4A853] text-sm font-medium mt-1">{member.role}</p>
                <p className="text-gray-500 text-xs mt-3">{member.specialty}</p>
                <p className="text-gray-600 text-xs mt-1">{member.since}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <section id="avis" className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-12 h-px bg-[#D4A853] mx-auto mb-8" />
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              Ils nous font confiance
            </h2>
            <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
              L&apos;avis de nos clients temoigne de notre engagement
              pour un service d&apos;excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Pierre et Sophie Moret",
                context: "Vente d'une villa a Paradiso",
                text: "Helvetia Immobilier a vendu notre villa en moins de 3 mois, au-dessus du prix estime. Marco et son equipe sont des professionnels remarquables. Un service irreprochable du debut a la fin.",
                stars: 5,
              },
              {
                name: "Familie Schmid",
                context: "Achat d'un appartement a Lugano",
                text: "Giulia a parfaitement compris nos attentes et nous a trouve l'appartement ideal en quelques semaines. Sa connaissance du marche local est impressionnante. Merci pour votre patience !",
                stars: 5,
              },
              {
                name: "Andrea Colombo",
                context: "Gestion locative de 3 biens",
                text: "Depuis 5 ans, Helvetia gere mes trois appartements avec une efficacite exemplaire. Les locataires sont bien selectionnes, les comptes sont clairs et le rendement est excellent.",
                stars: 5,
              },
            ].map((review) => (
              <div
                key={review.name}
                className="p-8 bg-white rounded-lg border border-gray-100 shadow-sm"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#D4A853]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  &laquo; {review.text} &raquo;
                </p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                  <p className="text-[#D4A853] text-xs mt-1">{review.context}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estimation gratuite */}
      <section id="estimation" className="py-24 sm:py-32 bg-[#1E293B]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <div className="w-12 h-px bg-[#D4A853] mb-8" />
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-8">
                Estimation gratuite de votre bien
              </h2>
              <p className="text-gray-400 leading-relaxed mb-12">
                Vous souhaitez connaitre la valeur de votre bien ? Nos experts
                realisent une estimation precise et detaillee, basee sur une
                analyse approfondie du marche. Sans engagement.
              </p>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-[#D4A853]/10 border border-[#D4A853]/15 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#D4A853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Adresse</p>
                    <p className="text-gray-400 text-sm mt-1.5">
                      Via Nassa 32<br />
                      6900 Lugano
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-[#D4A853]/10 border border-[#D4A853]/15 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#D4A853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Telephone</p>
                    <p className="text-gray-400 text-sm mt-1.5">+41 91 923 45 67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-[#D4A853]/10 border border-[#D4A853]/15 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#D4A853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Email</p>
                    <p className="text-gray-400 text-sm mt-1.5">
                      contact@helvetia-immobilier.ch
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-[#D4A853]/10 border border-[#D4A853]/15 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#D4A853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Horaires</p>
                    <p className="text-gray-400 text-sm mt-1.5">
                      Lun-Ven : 9h00 - 18h00 / Sam : sur rendez-vous
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white/[0.03] border border-[#D4A853]/10 rounded-lg p-8 sm:p-10">
                <h3 className="text-lg font-semibold text-white mb-8">
                  Demande d&apos;estimation
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2.5">
                      Nom et prenom
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3.5 bg-white/5 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4A853]/50 rounded transition-colors duration-300"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2.5">
                        Telephone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3.5 bg-white/5 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4A853]/50 rounded transition-colors duration-300"
                        placeholder="+41 91 000 00 00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2.5">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3.5 bg-white/5 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4A853]/50 rounded transition-colors duration-300"
                        placeholder="votre@email.ch"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2.5">
                        Type de bien
                      </label>
                      <select className="w-full px-4 py-3.5 bg-white/5 border border-gray-700/50 text-white focus:outline-none focus:border-[#D4A853]/50 rounded transition-colors duration-300">
                        <option value="">Selectionner...</option>
                        <option value="appartement">Appartement</option>
                        <option value="villa">Villa</option>
                        <option value="maison">Maison</option>
                        <option value="terrain">Terrain</option>
                        <option value="commercial">Commercial</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2.5">
                        Surface (m2)
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3.5 bg-white/5 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4A853]/50 rounded transition-colors duration-300"
                        placeholder="ex: 120"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2.5">
                      Adresse du bien
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3.5 bg-white/5 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4A853]/50 rounded transition-colors duration-300"
                      placeholder="Adresse complete du bien a estimer"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2.5">
                      Informations complementaires
                    </label>
                    <textarea
                      className="w-full px-4 py-3.5 bg-white/5 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4A853]/50 h-28 resize-none rounded transition-colors duration-300"
                      placeholder="Annee de construction, renovations, particularites..."
                    />
                  </div>
                  <button className="w-full py-4 bg-[#D4A853] text-[#1E293B] font-semibold hover:bg-[#C49A48] transition-colors duration-300 rounded">
                    Demander mon estimation gratuite
                  </button>
                  <p className="text-xs text-gray-500 text-center">
                    Estimation sans engagement. Reponse sous 48 heures ouvrees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-gray-500">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border border-[#D4A853]/30 rounded flex items-center justify-center">
                <span className="text-[#D4A853]/50 font-serif font-bold text-lg">H</span>
              </div>
              <div>
                <span className="text-sm font-serif font-bold text-gray-300">
                  Helvetia Immobilier
                </span>
                <p className="text-xs text-gray-600">
                  Agence immobiliere Lugano
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-600">
              <span>Via Nassa 32, 6900 Lugano</span>
              <span className="hidden md:inline">|</span>
              <span>+41 91 923 45 67</span>
              <span className="hidden md:inline">|</span>
              <span>contact@helvetia-immobilier.ch</span>
            </div>
          </div>
          <div className="border-t border-gray-800/50 mt-10 pt-8 text-xs text-center text-gray-600">
            <p>
              &copy; {new Date().getFullYear()} Helvetia Immobilier SA — Tous
              droits reserves. Membre de l&apos;Union Suisse des Professionnels de l&apos;Immobilier (USPI).
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
