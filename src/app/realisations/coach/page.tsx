import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FitPulse Coaching | Zurich - Démonstration OnVousTrouve.ch",
  description:
    "Démonstration d'un site vitrine pour un coach sportif à Zurich, créé par OnVousTrouve.ch",
};

export default function CoachPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      {/* Bandeau démo */}
      <div className="bg-gray-900 text-white text-center text-sm py-2 px-4">
        Ceci est une démonstration{" "}
        <Link href="/" className="underline font-semibold hover:text-emerald-300">
          OnVousTrouve.ch
        </Link>{" "}
        — Ce site n&apos;est pas réel
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-emerald-900/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-black font-black text-sm">
                FP
              </div>
              <div>
                <span className="text-xl font-black tracking-tight">
                  FIT<span className="text-emerald-400">PULSE</span>
                </span>
                <p className="text-[11px] text-emerald-400/60 tracking-[0.25em] uppercase">
                  Zurich
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-10 text-sm text-gray-500">
              <a href="#programmes" className="hover:text-emerald-400 transition-colors duration-300">
                Programmes
              </a>
              <a href="#coach" className="hover:text-emerald-400 transition-colors duration-300">
                Le Coach
              </a>
              <a href="#resultats" className="hover:text-emerald-400 transition-colors duration-300">
                Résultats
              </a>
              <a href="#tarifs" className="hover:text-emerald-400 transition-colors duration-300">
                Tarifs
              </a>
              <a href="#contact" className="hover:text-emerald-400 transition-colors duration-300">
                Contact
              </a>
            </div>
            <a
              href="#reservation"
              className="hidden sm:inline-flex items-center px-7 py-2.5 rounded-full bg-emerald-500 text-black text-sm font-bold hover:bg-emerald-400 transition-colors duration-300 shadow-lg shadow-emerald-500/20"
            >
              Séance d&apos;essai gratuite
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/40 via-black to-black" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="w-12 h-px bg-emerald-400 mb-8" />
              <p className="text-emerald-400/80 text-sm tracking-[0.3em] uppercase mb-6 font-medium">
                Coach certifié Swiss Olympic
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight">
                TRANSFORME
                <br />
                TON <span className="text-emerald-400">CORPS</span>,
                <br />
                TRANSFORME
                <br />
                TA <span className="text-emerald-400">VIE</span>.
              </h1>
              <p className="mt-8 text-lg text-gray-400 max-w-lg leading-relaxed">
                Coaching sportif personnalisé à Zurich. Programmes sur mesure,
                suivi nutritionnel et motivation sans faille pour atteindre vos objectifs.
              </p>
              <div className="mt-12 flex flex-wrap gap-5">
                <a
                  href="#reservation"
                  className="inline-flex items-center px-9 py-4 rounded-full bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-colors duration-300 shadow-lg shadow-emerald-500/20"
                >
                  Commencer maintenant
                </a>
                <a
                  href="#programmes"
                  className="inline-flex items-center px-9 py-4 rounded-full border-2 border-emerald-500/40 text-emerald-400 font-bold hover:bg-emerald-500/10 transition-colors duration-300"
                >
                  Voir les programmes
                </a>
              </div>
              <div className="mt-20 flex items-center gap-10">
                <div className="text-center">
                  <p className="text-3xl font-black text-white">8+</p>
                  <p className="text-xs text-gray-500 mt-1">Années d&apos;expérience</p>
                </div>
                <div className="w-px h-10 bg-gray-800" />
                <div className="text-center">
                  <p className="text-3xl font-black text-white">200+</p>
                  <p className="text-xs text-gray-500 mt-1">Clients transformés</p>
                </div>
                <div className="w-px h-10 bg-gray-800" />
                <div className="text-center">
                  <p className="text-3xl font-black text-white">4.9</p>
                  <p className="text-xs text-gray-500 mt-1">Note Google</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl shadow-emerald-900/30 border border-emerald-800/20">
                  <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
                    alt="Salle de sport FitPulse Zurich"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-emerald-500 rounded-2xl p-6 shadow-xl">
                  <div className="text-center">
                    <p className="text-2xl font-black text-black">1re</p>
                    <p className="text-xs text-black/70 font-semibold mt-1">séance offerte</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section id="programmes" className="py-24 sm:py-32 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-12 h-px bg-emerald-400 mx-auto mb-8" />
            <p className="text-emerald-400/80 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Programmes
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Un programme pour chaque objectif
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Perte de poids",
                desc: "Programme HIIT combiné à un plan nutritionnel personnalisé. Brûlez les graisses efficacement tout en préservant votre masse musculaire.",
                features: ["Entraînement HIIT 3x/semaine", "Plan nutritionnel sur mesure", "Suivi poids & mensurations", "Check-in hebdomadaire"],
                gradient: "from-orange-500 to-red-500",
                icon: (
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                ),
              },
              {
                title: "Musculation",
                desc: "Développez votre masse musculaire avec un programme de musculation progressif adapté à votre niveau et vos objectifs.",
                features: ["Programme musculation 4x/semaine", "Technique & posture", "Plan alimentaire protéiné", "Progression mensuelle"],
                gradient: "from-emerald-500 to-emerald-300",
                icon: (
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h1m16 0h1m-9-9v1m0 16v1m-6.364-1.636l.707-.707m12.02-12.02l.707-.707M5.636 5.636l.707.707m12.02 12.02l.707.707" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                ),
              },
              {
                title: "Bien-être & Mobilité",
                desc: "Retrouvez énergie et souplesse. Idéal pour gérer le stress, améliorer votre posture et prévenir les douleurs.",
                features: ["Yoga & stretching", "Exercices de mobilité", "Gestion du stress", "Techniques de respiration"],
                gradient: "from-purple-500 to-blue-500",
                icon: (
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
            ].map((prog) => (
              <div
                key={prog.title}
                className="bg-gray-900/80 rounded-2xl p-8 hover:shadow-lg hover:shadow-emerald-900/10 transition-all duration-300 border border-gray-800 group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${prog.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {prog.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                  {prog.title}
                </h3>
                <p className="text-xs text-emerald-400/60 tracking-wide uppercase mb-6">
                  Programme personnalisé
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {prog.desc}
                </p>
                <ul className="space-y-3">
                  {prog.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
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

      {/* About the Coach */}
      <section id="coach" className="py-24 sm:py-32 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-12 h-px bg-emerald-400 mx-auto mb-8" />
            <p className="text-emerald-400/80 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Votre coach
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Rencontrez Marco
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-emerald-800/20 shadow-2xl shadow-emerald-900/20">
                <img
                  src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=800&q=80"
                  alt="Coach Marco - FitPulse Zurich"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-gray-900 border border-emerald-500/30 rounded-2xl p-5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">Certifié</p>
                    <p className="text-gray-500 text-xs">Swiss Olympic</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Marco Bellini
              </h3>
              <p className="text-emerald-400/70 text-sm tracking-wide uppercase mb-6">
                Fondateur & Head Coach
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Passionné de sport depuis toujours, Marco a transformé sa passion en mission. Après 8 ans d&apos;expérience dans le coaching de haut niveau, il a fondé FitPulse avec une conviction simple : chaque personne mérite un accompagnement personnalisé pour atteindre ses objectifs.
              </p>
              <p className="text-gray-400 leading-relaxed mb-10">
                Sa philosophie ? Pas de raccourcis. Des méthodes éprouvées, un suivi rigoureux et une motivation constante. Que vous souhaitiez perdre du poids, prendre du muscle ou simplement vous sentir mieux, Marco s&apos;adapte à votre rythme et vos contraintes.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Swiss Olympic", detail: "Coach certifié" },
                  { label: "Nutrition sportive", detail: "Diplômé ESSM" },
                  { label: "Réhabilitation", detail: "Spécialiste mobilité" },
                  { label: "HIIT & Functional", detail: "Expert méthodes" },
                ].map((cert) => (
                  <div key={cert.label} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-semibold">{cert.label}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{cert.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Résultats / Témoignages */}
      <section id="resultats" className="py-24 sm:py-32 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-12 h-px bg-emerald-400 mx-auto mb-8" />
            <p className="text-emerald-400/80 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Résultats
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Ils ont transformé leur corps
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                age: "34 ans",
                result: "-12 kg en 4 mois",
                quote: "Marco m'a redonné confiance en moi. Son programme perte de poids est intense mais les résultats parlent d'eux-mêmes !",
                programme: "Perte de poids",
                stars: 5,
              },
              {
                name: "Thomas K.",
                age: "28 ans",
                result: "+8 kg de muscle en 6 mois",
                quote: "Jamais je n'aurais cru pouvoir atteindre ce physique. Le suivi de Marco est exceptionnel, il s'adapte à chaque séance.",
                programme: "Musculation",
                stars: 5,
              },
              {
                name: "Elena B.",
                age: "45 ans",
                result: "Plus de douleurs dorsales",
                quote: "Après 2 mois de programme mobilité, mes douleurs chroniques au dos ont disparu. Je me sens revivre !",
                programme: "Bien-être",
                stars: 5,
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-gray-900/80 rounded-2xl overflow-hidden border border-gray-800 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-900/10 transition-all duration-300"
              >
                <div className="grid grid-cols-2 gap-px bg-gray-800">
                  <div className="bg-gray-900 h-48 relative overflow-hidden group">
                    <img
                      src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
                      alt="Avant la transformation"
                      className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-gray-400 font-bold uppercase tracking-wider">
                      Avant
                    </span>
                  </div>
                  <div className="bg-gray-900 h-48 relative overflow-hidden group">
                    <img
                      src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80"
                      alt="Après la transformation"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-emerald-400 font-bold uppercase tracking-wider">
                      Après
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                      {t.programme}
                    </span>
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.stars }).map((_, i) => (
                        <svg
                          key={i}
                          className="w-3.5 h-3.5 text-amber-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-emerald-400 font-black text-lg mb-3">{t.result}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    &laquo; {t.quote} &raquo;
                  </p>
                  <div className="pt-5 border-t border-gray-800">
                    <p className="text-white text-sm font-semibold">
                      {t.name}, <span className="text-gray-500 font-normal">{t.age}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section id="tarifs" className="py-24 sm:py-32 bg-black relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <div className="text-center mb-20">
            <div className="w-12 h-px bg-emerald-400 mx-auto mb-8" />
            <p className="text-emerald-400/80 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Tarifs
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Investissez en vous
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Découverte",
                price: "89",
                period: "/séance",
                features: ["1 séance de coaching", "Bilan forme initial", "Programme personnalisé", "Conseils nutrition de base"],
                highlight: false,
              },
              {
                name: "Transformation",
                price: "690",
                period: "/mois",
                features: ["3 séances/semaine", "Plan nutritionnel complet", "Suivi quotidien WhatsApp", "Mensurations mensuelles", "Accès app de suivi"],
                highlight: true,
              },
              {
                name: "Pack 10 séances",
                price: "790",
                period: "",
                features: ["10 séances de coaching", "Valable 3 mois", "Programme évolutif", "Suivi par email", "1 bilan mensuel"],
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 border transition-all duration-300 ${
                  plan.highlight
                    ? "bg-emerald-500/10 border-emerald-500 scale-105 shadow-lg shadow-emerald-500/10"
                    : "bg-gray-900/80 border-gray-800 hover:border-gray-700"
                }`}
              >
                {plan.highlight && (
                  <div className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                    Le plus populaire
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-black text-white">CHF {plan.price}</span>
                  <span className="text-gray-500 text-sm">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#reservation"
                  className={`block text-center py-3.5 rounded-full font-bold transition-colors duration-300 ${
                    plan.highlight
                      ? "bg-emerald-500 text-black hover:bg-emerald-400"
                      : "bg-gray-800 text-white hover:bg-gray-700"
                  }`}
                >
                  Choisir
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réservation */}
      <section id="reservation" className="py-24 sm:py-32 bg-emerald-600">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="w-12 h-px bg-white/40 mx-auto mb-8" />
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Réserve ta séance d&apos;essai
          </h2>
          <p className="mt-5 text-lg text-emerald-100/80 max-w-xl mx-auto">
            Première séance gratuite et sans engagement. Faites le premier pas vers votre transformation.
          </p>
          <div className="mt-12 bg-black/20 backdrop-blur-sm border border-white/15 rounded-2xl p-8 sm:p-12">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2.5 text-left">
                  Prénom
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3.5 rounded-xl bg-black/20 border border-white/15 text-white placeholder-emerald-200/40 focus:outline-none focus:border-white/40 transition-colors duration-300"
                  placeholder="Votre prénom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2.5 text-left">
                  Nom
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3.5 rounded-xl bg-black/20 border border-white/15 text-white placeholder-emerald-200/40 focus:outline-none focus:border-white/40 transition-colors duration-300"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2.5 text-left">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3.5 rounded-xl bg-black/20 border border-white/15 text-white placeholder-emerald-200/40 focus:outline-none focus:border-white/40 transition-colors duration-300"
                  placeholder="votre@email.ch"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2.5 text-left">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3.5 rounded-xl bg-black/20 border border-white/15 text-white placeholder-emerald-200/40 focus:outline-none focus:border-white/40 transition-colors duration-300"
                  placeholder="+41 44 000 00 00"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-white/80 mb-2.5 text-left">
                  Votre objectif
                </label>
                <select className="w-full px-4 py-3.5 rounded-xl bg-black/20 border border-white/15 text-white focus:outline-none focus:border-white/40 transition-colors duration-300">
                  <option value="">Choisir un objectif</option>
                  <option value="perte">Perte de poids</option>
                  <option value="musculation">Musculation</option>
                  <option value="bienetre">Bien-être & Mobilité</option>
                  <option value="sport">Préparation sportive</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-white/80 mb-2.5 text-left">
                  Message (optionnel)
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3.5 rounded-xl bg-black/20 border border-white/15 text-white placeholder-emerald-200/40 focus:outline-none focus:border-white/40 transition-colors duration-300"
                  placeholder="Parlez-nous de vos objectifs..."
                />
              </div>
            </div>
            <div className="mt-10">
              <button className="px-10 py-4 rounded-full bg-white text-emerald-700 font-bold hover:bg-emerald-50 transition-colors duration-300 shadow-lg">
                Réserver ma séance gratuite
              </button>
            </div>
          </div>
          <p className="mt-8 text-emerald-200/70 text-sm">
            Ou appelez directement au{" "}
            <a
              href="tel:+41445207890"
              className="text-white font-semibold hover:underline"
            >
              +41 44 520 78 90
            </a>
          </p>
        </div>
      </section>

      {/* Contact & Infos */}
      <footer id="contact" className="bg-gray-950 text-gray-400">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-black font-black text-sm">
                  FP
                </div>
                <span className="text-xl font-black text-white">
                  FIT<span className="text-emerald-400">PULSE</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed max-w-md">
                Coaching sportif personnalisé à Zurich. Transforme ton corps, transforme ta vie. Première séance offerte, sans engagement.
              </p>
              <div className="flex gap-3 mt-6">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-colors duration-300"
                >
                  <span className="text-xs text-white font-bold">IG</span>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-colors duration-300"
                >
                  <span className="text-xs text-white font-bold">YT</span>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-colors duration-300"
                >
                  <span className="text-xs text-white font-bold">TT</span>
                </a>
              </div>
              <p className="text-gray-600 text-xs mt-3">@fitpulse_zurich</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">
                Horaires
              </h4>
              <ul className="space-y-3 text-sm">
                <li>Lundi : Fermé</li>
                <li>Mar-Ven : 6h00 – 21h00</li>
                <li>Samedi : 8h00 – 18h00</li>
                <li>Dimanche : 9h00 – 14h00</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">
                Contact
              </h4>
              <ul className="space-y-3 text-sm">
                <li>Limmatstrasse 120, 8005 Zurich</li>
                <li>
                  <a href="tel:+41445207890" className="hover:text-emerald-400 transition-colors duration-300">
                    +41 44 520 78 90
                  </a>
                </li>
                <li>
                  <a href="mailto:info@fitpulse.ch" className="hover:text-emerald-400 transition-colors duration-300">
                    info@fitpulse.ch
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-16 pt-8 text-sm text-center text-gray-600">
            <p>
              &copy; {new Date().getFullYear()} FitPulse Coaching — Tous droits
              réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
