import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clinique Veterinaire des Alpes | Veterinaire - Thun",
  description:
    "Clinique veterinaire a Thun. Consultations, chirurgie, dentaire, vaccination, urgences 24h/24. Soins pour chiens, chats et NAC.",
};

export default function VeterinaireDemo() {
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
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-teal-100/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold text-gray-900 tracking-wide">
                  Clinique Veterinaire des Alpes
                </span>
                <p className="text-[11px] text-teal-600 tracking-wide">
                  Medecine veterinaire a Thun
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-10 text-sm text-gray-600">
              <a href="#soins" className="hover:text-teal-600 transition-colors duration-300">
                Soins
              </a>
              <a href="#equipe" className="hover:text-teal-600 transition-colors duration-300">
                Equipe
              </a>
              <a href="#avis" className="hover:text-teal-600 transition-colors duration-300">
                Avis
              </a>
              <a href="#horaires" className="hover:text-teal-600 transition-colors duration-300">
                Horaires
              </a>
              <a href="#contact" className="hover:text-teal-600 transition-colors duration-300">
                Contact
              </a>
            </div>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center px-6 py-2.5 bg-teal-600 text-white text-sm font-semibold rounded-full hover:bg-teal-700 transition-colors duration-300"
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-teal-700 min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=1600&q=80"
            alt="Veterinaire examinant un animal de compagnie"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-800 via-teal-700/95 to-teal-700/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-800 via-transparent to-teal-800/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-sm text-teal-100 mb-8 backdrop-blur-sm">
              <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="6" />
              </svg>
              Urgences veterinaires 24h/24
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1]">
              Des soins
              <br />
              attentionnes pour
              <br />
              <span className="text-teal-200">vos compagnons</span>
            </h1>
            <p className="mt-10 text-lg text-teal-100/80 max-w-2xl leading-relaxed">
              Depuis plus de 15 ans, la Clinique Veterinaire des Alpes accompagne
              vos animaux de compagnie avec expertise, douceur et devouement.
              Notre equipe passionnee est a vos cotes pour chaque etape de la vie
              de votre animal.
            </p>
            <div className="mt-12 flex flex-wrap gap-5">
              <a
                href="#contact"
                className="inline-flex items-center px-9 py-4 bg-white text-teal-700 font-semibold rounded-full hover:bg-teal-50 transition-colors duration-300"
              >
                Prendre rendez-vous
              </a>
              <a
                href="#soins"
                className="inline-flex items-center px-9 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Nos soins
              </a>
            </div>
            <div className="mt-24 flex items-center gap-12">
              {[
                { value: "15+", label: "Annees d'experience" },
                { value: "3000+", label: "Patients par an" },
                { value: "24h", label: "Urgences disponibles" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs text-teal-200/60 mt-1.5">{stat.label}</p>
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
                title: "Bienveillance",
                desc: "Chaque animal est accueilli avec douceur et respect. Nous prenons le temps de rassurer vos compagnons et de vous ecouter.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
              {
                title: "Expertise",
                desc: "Notre equipe se forme continuellement aux dernieres avancees en medecine veterinaire pour offrir les meilleurs soins.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
              },
              {
                title: "Disponibilite",
                desc: "Service d'urgence 24h/24 et 7j/7. Parce que la sante de votre animal n'attend pas, nous sommes toujours la pour vous.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((value) => (
              <div key={value.title}>
                <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-5 text-teal-600">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
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

      {/* Soins */}
      <section id="soins" className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">Nos prestations</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Des soins complets pour vos animaux
            </h2>
            <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
              Notre clinique dispose d&apos;un plateau technique moderne pour
              diagnostiquer et traiter un large eventail de pathologies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Consultation generale",
                desc: "Examen clinique complet, bilan de sante, conseils nutritionnels et comportementaux. Des CHF 65.-",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                ),
              },
              {
                title: "Chirurgie",
                desc: "Sterilisation, chirurgie des tissus mous, orthopedique et dentaire sous anesthesie securisee. Sur devis.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
              },
              {
                title: "Soins dentaires",
                desc: "Detartrage, extraction, radiographie dentaire. Prevenir les maladies parodontales de votre animal. Des CHF 180.-",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Vaccination",
                desc: "Protocoles vaccinaux adaptes a chaque espece et mode de vie. Carnet de vaccination international. Des CHF 85.-",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: "Urgences 24h/24",
                desc: "Service d'urgence disponible jour et nuit, week-ends et jours feries. Equipe de garde permanente. Appel prealable requis.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                ),
              },
              {
                title: "NAC",
                desc: "Soins specialises pour les nouveaux animaux de compagnie : lapins, furets, reptiles, oiseaux. Des CHF 75.-",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
              },
            ].map((soin) => (
              <div
                key={soin.title}
                className="p-7 bg-white rounded-xl border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 mb-5 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                  {soin.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
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

      {/* Galerie */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">Notre clinique</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Un environnement adapte et rassurant
            </h2>
            <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
              Des locaux modernes conçus pour le bien-etre de vos animaux,
              equipes des dernieres technologies en imagerie et chirurgie.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                src: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=800&q=80",
                alt: "Veterinaire avec un chien",
              },
              {
                src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80",
                alt: "Deux chiens heureux en promenade",
              },
              {
                src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
                alt: "Chien en bonne sante",
              },
              {
                src: "https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=800&q=80",
                alt: "Chat en consultation veterinaire",
              },
            ].map((img) => (
              <div key={img.alt} className="h-64 rounded-xl overflow-hidden group">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section id="equipe" className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">Notre equipe</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Des professionnels passionnes
            </h2>
            <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
              Une equipe soudee et complementaire, unie par la passion des animaux.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                name: "Dr. Thomas Brunner",
                role: "Directeur & Veterinaire",
                specialty: "Chirurgie, Medecine interne",
                since: "Diplome Univ. de Berne, 2008",
              },
              {
                name: "Dr. Sophie Muller",
                role: "Veterinaire associee",
                specialty: "Dermatologie, NAC",
                since: "Diplomee Univ. de Zurich, 2012",
              },
              {
                name: "Dr. Lucas Gerber",
                role: "Veterinaire",
                specialty: "Dentisterie, Imagerie",
                since: "Diplome Univ. de Berne, 2016",
              },
              {
                name: "Anna Keller",
                role: "Assistante veterinaire",
                specialty: "Accueil, Soins postoperatoires",
                since: "CFC Assistante veterinaire, 2018",
              },
            ].map((member) => (
              <div key={member.name} className="text-center group">
                <div className="w-44 h-52 mx-auto bg-gradient-to-b from-teal-600 to-teal-700 rounded-xl flex items-center justify-center mb-6 border border-gray-200 group-hover:border-teal-300 transition-all duration-300 group-hover:shadow-lg">
                  <span className="text-4xl text-white/20 font-bold">
                    {member.name.split(" ").pop()?.[0]}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-teal-600 text-sm font-medium mt-1">{member.role}</p>
                <p className="text-gray-400 text-xs mt-3">{member.specialty}</p>
                <p className="text-gray-300 text-xs mt-1">{member.since}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <section id="avis" className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">Temoignages</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Ce que disent nos clients
            </h2>
            <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
              La confiance de nos clients est notre plus belle recompense.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Kathrin Wyss",
                animal: "Proprietaire de Max (Labrador)",
                text: "Une equipe formidable qui a sauve notre Max apres son accident. Le Dr. Brunner nous a explique chaque etape avec patience et professionnalisme. Merci infiniment !",
                stars: 5,
              },
              {
                name: "Stefan Hofer",
                animal: "Proprietaire de Luna (Chat Persan)",
                text: "Nous amenons Luna depuis sa naissance. L'ambiance est toujours calme et bienveillante. Les prix sont justes et transparents. Je recommande cette clinique sans hesitation.",
                stars: 5,
              },
              {
                name: "Marie-Claire Dupont",
                animal: "Proprietaire de Noisette (Lapin)",
                text: "Tres contente d'avoir trouve une clinique qui soigne aussi les NAC. La Dr. Muller est passionnee et tres competente avec les lapins. Noisette est en pleine forme !",
                stars: 5,
              },
            ].map((review) => (
              <div
                key={review.name}
                className="p-8 bg-gray-50 rounded-xl border border-gray-100"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  &laquo; {review.text} &raquo;
                </p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                  <p className="text-gray-400 text-xs mt-1">{review.animal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horaires & Urgences */}
      <section id="horaires" className="py-24 sm:py-32 bg-teal-700">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-sm font-semibold text-teal-200 uppercase tracking-wider mb-3">Horaires</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
                Quand nous consulter
              </h2>
              <div className="space-y-4">
                {[
                  { day: "Lundi - Vendredi", hours: "8h00 - 12h00 / 14h00 - 18h30" },
                  { day: "Samedi", hours: "8h30 - 12h00" },
                  { day: "Dimanche", hours: "Ferme (urgences uniquement)" },
                ].map((schedule) => (
                  <div
                    key={schedule.day}
                    className="flex justify-between items-center py-4 border-b border-white/10"
                  >
                    <span className="text-white font-medium">{schedule.day}</span>
                    <span className="text-teal-200 text-sm">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Urgences 24h/24</h3>
                  <p className="text-teal-200 text-sm">7 jours sur 7</p>
                </div>
              </div>
              <p className="text-teal-100/80 text-sm leading-relaxed mb-6">
                En cas d&apos;urgence en dehors des heures d&apos;ouverture, appelez
                notre numero d&apos;urgence. Un veterinaire de garde est toujours
                disponible pour intervenir rapidement.
              </p>
              <div className="bg-white/10 rounded-lg p-5 text-center">
                <p className="text-teal-200 text-sm mb-2">Numero d&apos;urgence</p>
                <p className="text-3xl font-bold text-white">+41 33 222 44 55</p>
              </div>
              <p className="text-teal-200/60 text-xs mt-4 text-center">
                Merci de telephoner avant de vous deplacer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">Contact</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                Prenez rendez-vous
              </h2>
              <p className="text-gray-500 leading-relaxed mb-12">
                Pour une consultation ou un renseignement, n&apos;hesitez pas
                a nous contacter. Nous vous accueillons avec plaisir.
              </p>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">Adresse</p>
                    <p className="text-gray-500 text-sm mt-1.5">
                      Allmendstrasse 12<br />
                      3600 Thun
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">Telephone</p>
                    <p className="text-gray-500 text-sm mt-1.5">+41 33 222 44 55</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">Email</p>
                    <p className="text-gray-500 text-sm mt-1.5">
                      info@clinique-alpes-vet.ch
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">Parking</p>
                    <p className="text-gray-500 text-sm mt-1.5">
                      Places de parc gratuites devant la clinique
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-xl border border-gray-200 p-8 sm:p-10 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-8">
                  Formulaire de rendez-vous
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2.5">
                      Votre nom
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-teal-500 rounded-lg transition-colors duration-300"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2.5">
                        Telephone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-teal-500 rounded-lg transition-colors duration-300"
                        placeholder="+41 33 000 00 00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2.5">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-teal-500 rounded-lg transition-colors duration-300"
                        placeholder="votre@email.ch"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2.5">
                        Nom de l&apos;animal
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-teal-500 rounded-lg transition-colors duration-300"
                        placeholder="Nom de votre animal"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2.5">
                        Type d&apos;animal
                      </label>
                      <select className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:border-teal-500 rounded-lg transition-colors duration-300">
                        <option value="">Selectionner...</option>
                        <option value="chien">Chien</option>
                        <option value="chat">Chat</option>
                        <option value="lapin">Lapin</option>
                        <option value="furet">Furet</option>
                        <option value="oiseau">Oiseau</option>
                        <option value="reptile">Reptile</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2.5">
                      Motif de la consultation
                    </label>
                    <textarea
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-teal-500 h-28 resize-none rounded-lg transition-colors duration-300"
                      placeholder="Decrivez brievement le motif de votre visite..."
                    />
                  </div>
                  <button className="w-full py-4 bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors duration-300 rounded-lg">
                    Demander un rendez-vous
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    Nous vous recontactons dans les 24 heures pour confirmer votre creneau.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-500">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-teal-600/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <span className="text-sm font-bold text-gray-300">
                  Clinique Veterinaire des Alpes
                </span>
                <p className="text-xs text-gray-600">
                  Medecine veterinaire a Thun
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-600">
              <span>Allmendstrasse 12, 3600 Thun</span>
              <span className="hidden md:inline">|</span>
              <span>+41 33 222 44 55</span>
              <span className="hidden md:inline">|</span>
              <span>info@clinique-alpes-vet.ch</span>
            </div>
          </div>
          <div className="border-t border-gray-800/50 mt-10 pt-8 text-xs text-center text-gray-600">
            <p>
              &copy; {new Date().getFullYear()} Clinique Veterinaire des Alpes — Tous
              droits reserves. Membre de la Societe des Veterinaires Suisses (SVS).
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
