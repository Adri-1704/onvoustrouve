import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PhysioVita | Cabinet de Physiotherapie - Winterthur",
  description:
    "Cabinet de physiotherapie a Winterthur. Physiotherapie classique, sportive, reeducation, therapie manuelle, drainage lymphatique. Agree ASPI.",
};

export default function PhysiotherapeuteDemo() {
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
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold text-gray-900 tracking-tight">
                  PhysioVita
                </span>
                <p className="text-xs text-blue-600 font-medium tracking-wide">
                  Winterthur
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
              <a href="#soins" className="hover:text-blue-600 transition-colors duration-300">
                Soins
              </a>
              <a href="#approche" className="hover:text-blue-600 transition-colors duration-300">
                Approche
              </a>
              <a href="#equipe" className="hover:text-blue-600 transition-colors duration-300">
                Equipe
              </a>
              <a href="#avis" className="hover:text-blue-600 transition-colors duration-300">
                Avis
              </a>
              <a href="#rdv" className="hover:text-blue-600 transition-colors duration-300">
                Contact
              </a>
            </div>
            <a
              href="#rdv"
              className="hidden sm:inline-flex items-center px-6 py-2.5 rounded-full bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
            >
              Prendre RDV
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50/80 via-white to-gray-50/60 min-h-[85vh] flex items-center">
        <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-gradient-to-bl from-blue-100/30 to-transparent rounded-bl-[120px]" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-blue-100/15 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-blue-100 text-blue-700 text-sm font-medium mb-8 shadow-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Cabinet agree ASPI &mdash; Rembourse par la LAMal
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                Retrouvez votre
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  mobilite
                </span>
              </h1>
              <p className="mt-8 text-lg text-gray-500 max-w-lg leading-relaxed">
                Un cabinet de physiotherapie moderne a Winterthur, dedie a votre
                bien-etre. Des soins personnalises pour retrouver votre plein
                potentiel physique.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#rdv"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5"
                >
                  Prendre rendez-vous
                </a>
                <a
                  href="tel:+41522101580"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-blue-200 text-blue-700 font-semibold hover:border-blue-400 hover:bg-blue-50 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +41 52 210 15 80
                </a>
              </div>
              <div className="mt-14 grid grid-cols-3 gap-6">
                {[
                  { value: "10+", label: "Annees d'experience" },
                  { value: "5000+", label: "Patients traites" },
                  { value: "4.8/5", label: "Note patients" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl sm:text-3xl font-extrabold text-blue-500">{stat.value}</p>
                    <p className="text-xs text-gray-400 mt-1 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-200/40 border border-blue-100/50">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
                    alt="Cabinet de physiotherapie PhysioVita a Winterthur"
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
                      <p className="text-sm font-bold text-gray-900">Agree LAMal</p>
                      <p className="text-xs text-gray-400">Sur prescription</p>
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
                      <p className="text-sm font-bold text-gray-900">4.8/5</p>
                      <p className="text-xs text-gray-400">(220 avis)</p>
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
              {
                text: "Agree ASPI",
                icon: (
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                text: "Rembourse LAMal",
                icon: (
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                text: "Sans douleur",
                icon: (
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
              {
                text: "Approche personnalisee",
                icon: (
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
              },
              {
                text: "Equipement moderne",
                icon: (
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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

      {/* Soins proposes */}
      <section id="soins" className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-blue-500 font-semibold tracking-widest uppercase text-sm mb-4">
              Nos expertises
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Des soins adaptes a chaque besoin
            </h2>
            <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              De la reeducation post-operatoire a la physiotherapie du sport,
              notre equipe vous accompagne avec des traitements sur mesure.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Physiotherapie classique",
                desc: "Traitement des douleurs musculaires et articulaires, reeducation post-operatoire, mobilisation. Prise en charge globale et individualisee.",
                icon: (
                  <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
              {
                title: "Physiotherapie du sport",
                desc: "Prise en charge des blessures sportives, prevention, preparation physique. Retour au sport en toute securite apres blessure.",
                icon: (
                  <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: "Reeducation",
                desc: "Reeducation fonctionnelle apres chirurgie, fracture ou accident. Programme progressif pour retrouver votre autonomie.",
                icon: (
                  <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
              },
              {
                title: "Therapie manuelle",
                desc: "Techniques manuelles specialisees pour soulager les tensions, ameliorer la mobilite articulaire et traiter les blocages.",
                icon: (
                  <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                  </svg>
                ),
              },
              {
                title: "Drainage lymphatique",
                desc: "Technique douce pour stimuler la circulation lymphatique. Ideal apres chirurgie, en cas d'oedeme ou pour le bien-etre general.",
                icon: (
                  <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
              },
              {
                title: "Pilates therapeutique",
                desc: "Exercices de renforcement profond adaptes a votre condition. Amelioration de la posture, prevention des recidives.",
                icon: (
                  <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((soin) => (
              <div
                key={soin.title}
                className="group relative p-8 rounded-3xl border border-gray-100 bg-white hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300">
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

      {/* Image band - Approche & Philosophie */}
      <section className="relative h-[400px] sm:h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80"
          alt="Seance de physiotherapie au cabinet PhysioVita"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-900/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-lg">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Une approche humaine et personnalisee
              </h2>
              <p className="mt-4 text-blue-100 text-lg leading-relaxed">
                Chaque patient est unique. Nous prenons le temps d&apos;ecouter,
                d&apos;evaluer et de concevoir un programme de soins adapte a vos
                objectifs et a votre rythme de vie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approche & Philosophie */}
      <section id="approche" className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-blue-500 font-semibold tracking-widest uppercase text-sm mb-4">
              Notre philosophie
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Approche therapeutique
            </h2>
            <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">
              Une prise en charge basee sur les dernieres evidences scientifiques,
              combinee a une ecoute attentive de vos besoins.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Bilan complet initial",
                desc: "Evaluation approfondie de votre condition physique, de vos douleurs et de vos objectifs. Un plan de traitement clair vous est propose des la premiere seance.",
                detail: "45 minutes de bilan personnalise",
              },
              {
                title: "Traitement base sur l'evidence",
                desc: "Nos methodes sont fondees sur les dernieres recherches scientifiques en physiotherapie. Nous utilisons des protocoles valides et reconnus.",
                detail: "Formation continue reguliere",
              },
              {
                title: "Exercices a domicile",
                desc: "Un programme d'exercices personnalise vous est remis pour poursuivre votre reeducation entre les seances et optimiser les resultats.",
                detail: "Support video et fiches illustrees",
              },
              {
                title: "Remboursement LAMal",
                desc: "La physiotherapie est remboursee par l'assurance maladie de base (LAMal) sur prescription medicale. 9 seances par ordonnance, renouvelable.",
                detail: "Facturation directe a votre assurance",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-6 p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-xl hover:shadow-blue-100/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">
                    {item.desc}
                  </p>
                  <p className="text-xs text-blue-600 font-semibold bg-blue-50 inline-block px-3 py-1 rounded-full">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section id="equipe" className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-blue-500 font-semibold tracking-widest uppercase text-sm mb-4">
              Des professionnels qualifies
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Notre equipe
            </h2>
            <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">
              Trois physiotherapeutes diplomes et une receptionniste devouee
              pour vous accueillir dans les meilleures conditions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                name: "Stefan Keller",
                role: "Physiotherapeute HES",
                specialty: "Therapie manuelle, Sport",
                formation: "ZHAW Winterthur, 2013",
                img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80",
              },
              {
                name: "Anna Meier",
                role: "Physiotherapeute HES",
                specialty: "Reeducation, Pilates",
                formation: "HES-SO Lausanne, 2016",
                img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
              },
              {
                name: "Marco Bernasconi",
                role: "Physiotherapeute HES",
                specialty: "Drainage, Post-operatoire",
                formation: "SUPSI Lugano, 2018",
                img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
              },
              {
                name: "Lena Huber",
                role: "Receptionniste",
                specialty: "Accueil, Administration",
                formation: "CFC Employe de commerce",
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
                <p className="text-blue-500 text-sm font-semibold mt-1">{member.role}</p>
                <p className="text-gray-500 text-sm mt-2">{member.specialty}</p>
                <p className="text-gray-400 text-xs mt-1">{member.formation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <section id="avis" className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-blue-500 font-semibold tracking-widest uppercase text-sm mb-4">
              Temoignages
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Ce que disent nos patients
            </h2>
            <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">
              La satisfaction de nos patients est notre plus belle recompense.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Thomas W.",
                text: "Apres mon operation du genou, l'equipe de PhysioVita m'a accompagne pendant 3 mois. Grace a leur programme de reeducation, j'ai pu reprendre le football plus vite que prevu. Merci Stefan !",
                rating: 5,
                date: "Janvier 2026",
              },
              {
                name: "Claudia B.",
                text: "Je souffre de douleurs chroniques au dos depuis des annees. Anna a pris le temps de bien comprendre mon probleme et m'a propose un traitement combine physio + pilates. Une vraie amelioration !",
                rating: 5,
                date: "Decembre 2025",
              },
              {
                name: "Peter S.",
                text: "Cabinet tres professionnel, propre et bien equipe. Marco m'a traite pour un drainage lymphatique apres ma chirurgie. Resultats excellents. La prise en charge LAMal simplifie tout.",
                rating: 5,
                date: "Novembre 2025",
              },
            ].map((avis) => (
              <div
                key={avis.name}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i <= avis.rating ? "text-amber-400" : "text-gray-200"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  &ldquo;{avis.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-gray-900">{avis.name}</p>
                  <p className="text-xs text-gray-400">{avis.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horaires */}
      <section className="py-16 bg-blue-50 border-y border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
            <div className="w-24 h-24 rounded-3xl bg-blue-100 flex items-center justify-center shrink-0">
              <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
                Horaires d&apos;ouverture
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 text-gray-600 text-sm">
                <div className="space-y-2">
                  <p><span className="font-semibold">Lundi :</span> 7h30 &ndash; 19h00</p>
                  <p><span className="font-semibold">Mardi :</span> 7h30 &ndash; 19h00</p>
                  <p><span className="font-semibold">Mercredi :</span> 7h30 &ndash; 19h00</p>
                </div>
                <div className="space-y-2">
                  <p><span className="font-semibold">Jeudi :</span> 7h30 &ndash; 19h00</p>
                  <p><span className="font-semibold">Vendredi :</span> 7h30 &ndash; 17h00</p>
                  <p><span className="font-semibold">Sam &ndash; Dim :</span> Ferme</p>
                </div>
              </div>
              <p className="mt-4 text-xs text-blue-600 font-medium">
                Sur prescription medicale, la physiotherapie est remboursee par l&apos;assurance de base LAMal (9 seances par ordonnance).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prise de RDV */}
      <section id="rdv" className="py-24 sm:py-32 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Prendre rendez-vous
            </h2>
            <p className="mt-6 text-blue-100 max-w-2xl mx-auto text-lg leading-relaxed">
              Remplissez le formulaire ci-dessous et nous vous recontacterons
              dans les 24 heures pour confirmer votre rendez-vous.
            </p>
          </div>
          <div className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-2xl">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom et prenom
                </label>
                <input
                  type="text"
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="Votre nom complet"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Telephone
                </label>
                <input
                  type="tel"
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="+41 52 000 00 00"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="votre@email.ch"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Type de soin
                </label>
                <select className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all">
                  <option value="">Selectionner...</option>
                  <option value="classique">Physiotherapie classique</option>
                  <option value="sport">Physiotherapie du sport</option>
                  <option value="reeducation">Reeducation</option>
                  <option value="manuelle">Therapie manuelle</option>
                  <option value="drainage">Drainage lymphatique</option>
                  <option value="pilates">Pilates therapeutique</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Prescription medicale
                </label>
                <select className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all">
                  <option value="">Selectionner...</option>
                  <option value="oui">Oui, j&apos;ai une prescription</option>
                  <option value="non">Non, pas encore</option>
                  <option value="renouvellement">Renouvellement en cours</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Date souhaitee
                </label>
                <input
                  type="date"
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description de votre probleme (optionnel)
              </label>
              <textarea
                className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all h-28 resize-none"
                placeholder="Decrivez vos douleurs, la zone concernee, depuis quand..."
              />
            </div>
            <div className="mt-10 text-center">
              <button className="px-12 py-4 rounded-full bg-blue-500 text-white font-bold text-lg hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-blue-500/25 hover:shadow-blue-500/35 hover:-translate-y-0.5">
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
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-white">
                  PhysioVita
                </span>
              </div>
              <p className="text-sm leading-relaxed max-w-md">
                Cabinet de physiotherapie moderne a Winterthur, agree ASPI.
                Des soins de qualite rembourses par l&apos;assurance de base LAMal
                sur prescription medicale.
              </p>
              <div className="mt-6 flex gap-3">
                <div className="px-4 py-2 bg-gray-800/80 rounded-lg text-xs text-gray-300 font-medium">
                  Agree ASPI
                </div>
                <div className="px-4 py-2 bg-gray-800/80 rounded-lg text-xs text-gray-300 font-medium">
                  Rembourse LAMal
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-5">Horaires</h4>
              <ul className="space-y-2.5 text-sm">
                <li>Lun-Jeu : 7h30 &ndash; 19h00</li>
                <li>Vendredi : 7h30 &ndash; 17h00</li>
                <li>Sam-Dim : Ferme</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-5">Contact</h4>
              <ul className="space-y-2.5 text-sm">
                <li>Marktgasse 28, 8400 Winterthur</li>
                <li>
                  <a href="tel:+41522101580" className="text-blue-400 font-semibold hover:underline">
                    +41 52 210 15 80
                  </a>
                </li>
                <li>info@physiovita-winterthur.ch</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-14 pt-8 text-sm text-center text-gray-600">
            <p>
              &copy; {new Date().getFullYear()} PhysioVita Sarl &mdash;
              Tous droits reserves.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
