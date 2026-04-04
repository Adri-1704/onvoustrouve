import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Centre Dentaire du Léman | Cabinet Dentaire - Montreux",
  description:
    "Cabinet dentaire moderne à Montreux. Soins dentaires, implants, orthodontie, esthétique dentaire. Urgences dentaires disponibles.",
};

export default function DentisteDemo() {
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

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-400 to-teal-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold text-gray-900 tracking-tight">
                  Centre Dentaire du Léman
                </span>
                <p className="text-xs text-teal-600 font-medium tracking-wide">
                  Montreux
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
              <a href="#soins" className="hover:text-teal-600 transition-colors duration-300">
                Soins
              </a>
              <a href="#technologies" className="hover:text-teal-600 transition-colors duration-300">
                Technologies
              </a>
              <a href="#equipe" className="hover:text-teal-600 transition-colors duration-300">
                Équipe
              </a>
              <a href="#urgences" className="hover:text-teal-600 transition-colors duration-300">
                Urgences
              </a>
              <a href="#rdv" className="hover:text-teal-600 transition-colors duration-300">
                Contact
              </a>
            </div>
            <a
              href="#rdv"
              className="hidden sm:inline-flex items-center px-6 py-2.5 rounded-full bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 transition-all duration-300 shadow-lg shadow-teal-600/20 hover:shadow-teal-600/30"
            >
              Prendre RDV
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50/80 via-white to-sky-50/60 min-h-[85vh] flex items-center">
        <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-gradient-to-bl from-teal-100/30 to-transparent rounded-bl-[120px]" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-sky-100/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-teal-100/15 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-teal-100 text-teal-700 text-sm font-medium mb-8 shadow-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Cabinet certifié SwissDental Quality
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                Votre sourire,
                <br />
                notre{" "}
                <span className="bg-gradient-to-r from-teal-600 to-sky-500 bg-clip-text text-transparent">
                  priorité
                </span>
              </h1>
              <p className="mt-8 text-lg text-gray-500 max-w-lg leading-relaxed">
                Un cabinet dentaire moderne au coeur de Montreux, équipé des
                dernières technologies pour des soins précis, confortables et
                durables.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#rdv"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-all duration-300 shadow-xl shadow-teal-600/20 hover:shadow-teal-600/30 hover:-translate-y-0.5"
                >
                  Prendre rendez-vous
                </a>
                <a
                  href="tel:+41219632100"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-teal-200 text-teal-700 font-semibold hover:border-teal-400 hover:bg-teal-50 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Urgence dentaire
                </a>
              </div>
              <div className="mt-14 grid grid-cols-3 gap-6">
                {[
                  { value: "15+", label: "Années d'expérience" },
                  { value: "4.9/5", label: "Note patients" },
                  { value: "3", label: "Dentistes SSO" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl sm:text-3xl font-extrabold text-teal-600">{stat.value}</p>
                    <p className="text-xs text-gray-400 mt-1 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-teal-200/40 border border-teal-100/50">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
                    alt="Cabinet dentaire moderne du Centre Dentaire du Leman"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-5 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Places disponibles</p>
                      <p className="text-xs text-gray-400">Cette semaine</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">4.9/5</p>
                      <p className="text-xs text-gray-400">(180 avis)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bande de confiance */}
      <section className="py-8 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-gray-400">
            {[
              { icon: "🕐", text: "Résultats en 1 séance" },
              { icon: "🔬", text: "Technologie 3D" },
              { icon: "😊", text: "Soins sans douleur" },
              { icon: "🏥", text: "Membre SSO" },
              { icon: "🇨🇭", text: "Laboratoire suisse" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2.5">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soins proposés */}
      <section id="soins" className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-teal-600 font-semibold tracking-widest uppercase text-sm mb-4">
              Nos expertises
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Des soins complets pour toute la famille
            </h2>
            <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Du contrôle annuel aux traitements spécialisés, notre équipe vous accompagne
              avec professionnalisme et bienveillance.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Soins conservateurs",
                desc: "Caries, détartrage, polissage, contrôle annuel. Prévention et maintien de votre santé bucco-dentaire.",
                icon: (
                  <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
              {
                title: "Implantologie",
                desc: "Pose d'implants dentaires de haute qualité. Remplacement durable et esthétique des dents manquantes.",
                icon: (
                  <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: "Orthodontie",
                desc: "Alignement dentaire pour adultes et enfants. Gouttières invisibles Invisalign et appareils classiques.",
                icon: (
                  <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Esthétique dentaire",
                desc: "Blanchiment professionnel, facettes céramiques, couronnes. Pour un sourire éclatant et naturel.",
                icon: (
                  <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
              },
              {
                title: "Prothèses dentaires",
                desc: "Couronnes, bridges, prothèses amovibles. Solutions sur mesure fabriquées en laboratoire suisse.",
                icon: (
                  <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
              },
              {
                title: "Pédodontie",
                desc: "Soins adaptés aux enfants dans un environnement rassurant. Prévention, scellements, premiers contrôles.",
                icon: (
                  <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
              },
            ].map((soin) => (
              <div
                key={soin.title}
                className="group relative p-8 rounded-3xl border border-gray-100 bg-white hover:shadow-2xl hover:shadow-teal-100/50 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors duration-300">
                  {soin.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {soin.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {soin.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image band */}
      <section className="relative h-[400px] sm:h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80"
          alt="Interieur du cabinet dentaire"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 via-teal-900/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-lg">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Un cadre moderne et apaisant
              </h2>
              <p className="mt-4 text-teal-100 text-lg leading-relaxed">
                Notre cabinet a été conçu pour vous offrir une expérience sereine,
                dans un environnement lumineux et équipé des toutes dernières technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section id="technologies" className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-teal-600 font-semibold tracking-widest uppercase text-sm mb-4">
              Innovation & confort
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Technologies de pointe
            </h2>
            <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">
              Des équipements de dernière génération pour des soins plus précis,
              plus rapides et plus confortables.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Scanner 3D CBCT",
                desc: "Imagerie 3D haute résolution pour un diagnostic ultra-précis. Planification chirurgicale assistée par ordinateur.",
                detail: "Dose de radiation réduite de 90% vs radiographie traditionnelle",
              },
              {
                title: "Empreintes numériques",
                desc: "Scanner intra-oral pour des empreintes confortables et précises. Fini la pâte d'empreinte traditionnelle.",
                detail: "Résultats immédiats, prothèses en 48h",
              },
              {
                title: "Laser dentaire",
                desc: "Soins doux et précis des gencives. Réduction de la douleur et guérison accélérée après intervention.",
                detail: "Traitements souvent sans anesthésie",
              },
              {
                title: "Caméra intra-orale",
                desc: "Visualisez en temps réel l'état de vos dents sur écran. Transparence totale sur les soins nécessaires.",
                detail: "Suivi photographique à chaque visite",
              },
            ].map((tech) => (
              <div
                key={tech.title}
                className="flex gap-6 p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-xl hover:shadow-teal-100/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {tech.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">
                    {tech.desc}
                  </p>
                  <p className="text-xs text-teal-600 font-semibold bg-teal-50 inline-block px-3 py-1 rounded-full">
                    {tech.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section id="equipe" className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-teal-600 font-semibold tracking-widest uppercase text-sm mb-4">
              Des professionnels qualifiés
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Notre équipe
            </h2>
            <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">
              Trois dentistes expérimentés et une équipe d&apos;hygiénistes dévouée
              à votre santé bucco-dentaire.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: "Dr. Nathalie Wenger",
                role: "Médecin-dentiste SSO",
                specialty: "Implantologie, Chirurgie orale",
                formation: "Univ. de Genève, 2005",
                img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
              },
              {
                name: "Dr. Alexandre Pittet",
                role: "Médecin-dentiste SSO",
                specialty: "Orthodontie, Esthétique",
                formation: "Univ. de Lausanne, 2010",
                img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
              },
              {
                name: "Dr. Laura Moser",
                role: "Médecin-dentiste SSO",
                specialty: "Pédodontie, Soins conservateurs",
                formation: "Univ. de Berne, 2014",
                img: "https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=400&q=80",
              },
            ].map((member) => (
              <div key={member.name} className="group text-center">
                <div className="w-48 h-48 mx-auto rounded-3xl overflow-hidden mb-6 border border-gray-100 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-teal-600 text-sm font-semibold mt-1">{member.role}</p>
                <p className="text-gray-500 text-sm mt-2">{member.specialty}</p>
                <p className="text-gray-400 text-xs mt-1">{member.formation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgences */}
      <section id="urgences" className="py-20 sm:py-24 bg-red-50 border-y border-red-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
            <div className="w-24 h-24 rounded-3xl bg-red-100 flex items-center justify-center shrink-0">
              <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
                Urgence dentaire ?
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                En cas de douleur intense, traumatisme dentaire ou gonflement,
                contactez-nous immédiatement. Des créneaux d&apos;urgence sont
                réservés chaque jour.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:+41219632100"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-red-500 text-white font-bold hover:bg-red-600 transition-all duration-300 shadow-lg shadow-red-500/20"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +41 21 963 21 00
                </a>
                <p className="text-sm text-gray-500 self-center font-medium">
                  Lun-Ven 8h-19h / Sam 9h-12h
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prise de RDV */}
      <section id="rdv" className="py-24 sm:py-32 bg-gradient-to-br from-teal-600 via-teal-700 to-sky-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Prendre rendez-vous
            </h2>
            <p className="mt-6 text-teal-100 max-w-2xl mx-auto text-lg leading-relaxed">
              Remplissez le formulaire ci-dessous et nous vous recontacterons
              dans les 24 heures pour confirmer votre rendez-vous.
            </p>
          </div>
          <div className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-2xl">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom et prénom
                </label>
                <input
                  type="text"
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
                  placeholder="Votre nom complet"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
                  placeholder="+41 21 000 00 00"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
                  placeholder="votre@email.ch"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Type de soin
                </label>
                <select className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all">
                  <option value="">Sélectionner...</option>
                  <option value="controle">Contrôle annuel</option>
                  <option value="detartrage">Détartrage</option>
                  <option value="carie">Soin de carie</option>
                  <option value="implant">Implant</option>
                  <option value="orthodontie">Orthodontie</option>
                  <option value="blanchiment">Blanchiment</option>
                  <option value="urgence">Urgence</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Date souhaitée
                </label>
                <input
                  type="date"
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Plage horaire préférée
                </label>
                <select className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all">
                  <option value="">Sélectionner...</option>
                  <option value="matin">Matin (8h-12h)</option>
                  <option value="aprem">Après-midi (13h-17h)</option>
                  <option value="soir">Fin de journée (17h-19h)</option>
                  <option value="indifferent">Indifférent</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Remarques (optionnel)
              </label>
              <textarea
                className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all h-28 resize-none"
                placeholder="Informations complémentaires, allergies, anxiété dentaire..."
              />
            </div>
            <div className="mt-10 text-center">
              <button className="px-12 py-4 rounded-full bg-teal-600 text-white font-bold text-lg hover:bg-teal-700 transition-all duration-300 shadow-xl shadow-teal-600/25 hover:shadow-teal-600/35 hover:-translate-y-0.5">
                Demander un rendez-vous
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-teal-400 to-sky-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-white">
                  Centre Dentaire du Léman
                </span>
              </div>
              <p className="text-sm leading-relaxed max-w-md">
                Cabinet dentaire moderne à Montreux, membre de la Société Suisse
                d&apos;Odonto-stomatologie (SSO). Des soins de qualité dans un
                cadre agréable et rassurant.
              </p>
              <div className="mt-6 flex gap-3">
                <div className="px-4 py-2 bg-gray-800/80 rounded-lg text-xs text-gray-300 font-medium">
                  Membre SSO
                </div>
                <div className="px-4 py-2 bg-gray-800/80 rounded-lg text-xs text-gray-300 font-medium">
                  Swiss Quality
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-5">Horaires</h4>
              <ul className="space-y-2.5 text-sm">
                <li>Lun-Ven : 8h00 – 19h00</li>
                <li>Samedi : 9h00 – 12h00</li>
                <li>Dimanche : Fermé</li>
                <li className="text-red-400 font-medium mt-3 pt-3 border-t border-gray-800">
                  Urgences : Lun-Sam aux heures d&apos;ouverture
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-5">Contact</h4>
              <ul className="space-y-2.5 text-sm">
                <li>Grand-Rue 54, 1820 Montreux</li>
                <li>
                  <a href="tel:+41219632100" className="text-teal-400 font-semibold hover:underline">
                    +41 21 963 21 00
                  </a>
                </li>
                <li>info@dentaire-leman.ch</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-14 pt-8 text-sm text-center text-gray-600">
            <p>
              &copy; {new Date().getFullYear()} Centre Dentaire du Léman Sàrl —
              Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
