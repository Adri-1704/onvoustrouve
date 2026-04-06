export default function Home() {
  return (
    <div id="top" className="flex flex-col flex-1 bg-white font-sans scroll-smooth">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#top" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">
                OnVousTrouve
              </span>
              <span className="text-sm text-primary-light font-medium">.ch</span>
            </a>
            <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-600">
              <a href="#metiers" className="hover:text-primary transition-colors">
                Réalisations
              </a>
              <a
                href="#comment-ca-marche"
                className="hover:text-primary transition-colors"
              >
                Comment ça marche ?
              </a>
              <a href="#tarifs" className="hover:text-primary transition-colors">
                Tarifs
              </a>
              <a
                href="#temoignages"
                className="hover:text-primary transition-colors"
              >
                Témoignages
              </a>
              <a href="#faq" className="hover:text-primary transition-colors">
                FAQ
              </a>
            </div>
            <a
              href="#tarifs"
              className="hidden sm:inline-flex items-center px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-blue-500/25"
            >
              Commencer
            </a>

            {/* Mobile hamburger menu */}
            <div className="md:hidden relative">
              <input type="checkbox" id="mobile-nav" className="mobile-menu-toggle sr-only" />
              <label htmlFor="mobile-nav" className="hamburger-label cursor-pointer p-2" aria-label="Menu">
                <span className="hamburger-bar"></span>
                <span className="hamburger-bar"></span>
                <span className="hamburger-bar"></span>
              </label>
              <div className="mobile-menu absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col px-4">
                <a href="#metiers" className="py-2.5 text-sm font-medium text-gray-700 hover:text-primary transition-colors">Réalisations</a>
                <a href="#comment-ca-marche" className="py-2.5 text-sm font-medium text-gray-700 hover:text-primary transition-colors">Comment ça marche ?</a>
                <a href="#tarifs" className="py-2.5 text-sm font-medium text-gray-700 hover:text-primary transition-colors">Tarifs</a>
                <a href="#temoignages" className="py-2.5 text-sm font-medium text-gray-700 hover:text-primary transition-colors">Témoignages</a>
                <a href="#faq" className="py-2.5 text-sm font-medium text-gray-700 hover:text-primary transition-colors">FAQ</a>
                <a href="#tarifs" className="my-2 text-center py-2.5 rounded-full bg-primary text-white text-sm font-semibold">Commencer</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent to-white">
        {/* Animated background orbs */}
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        {/* Subtle grid */}
        <div className="absolute inset-0 hero-grid" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Votre métier mérite
              <br />
              <span className="gradient-text">d&apos;être trouvé en ligne</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
              Nous créons votre site web professionnel clé en main. Vous vous
              concentrez sur votre métier, on s&apos;occupe de tout le reste.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
              <a
                href="#tarifs"
                className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-primary text-white text-lg font-bold hover:bg-primary-dark transition-all shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
              >
                Découvrir nos offres
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#comment-ca-marche"
                className="inline-flex items-center justify-center px-10 py-5 rounded-full border-2 border-gray-200 text-gray-700 text-lg font-semibold hover:border-primary hover:text-primary transition-all hover:shadow-lg"
              >
                Comment ça marche ?
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500 animate-fade-in animate-delay-500">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                20+ métiers couverts
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Sites livrés en 7 jours
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Basé en Suisse
              </span>
            </div>
          </div>

          {/* Device mockup frames */}
          <div className="mt-16 flex items-end justify-center gap-4 sm:gap-6 animate-fade-in-up animate-delay-500">
            {/* Phone */}
            <div className="device-frame w-16 sm:w-20 h-28 sm:h-36 rounded-xl shadow-2xl">
              <div className="absolute inset-[3px] rounded-[9px] bg-gradient-to-br from-blue-50 to-blue-100 z-10 flex flex-col items-center justify-center gap-1 p-1">
                <div className="w-3/4 h-1.5 rounded bg-primary/20"></div>
                <div className="w-1/2 h-1 rounded bg-primary/10"></div>
                <div className="w-full h-6 sm:h-8 mt-1 rounded bg-gradient-to-br from-primary/10 to-primary/5"></div>
                <div className="w-3/4 h-1 rounded bg-primary/10"></div>
                <div className="w-3/4 h-1 rounded bg-primary/10"></div>
              </div>
            </div>
            {/* Desktop */}
            <div className="device-frame w-48 sm:w-72 h-32 sm:h-44 rounded-xl shadow-2xl">
              <div className="absolute inset-[3px] rounded-[9px] bg-gradient-to-br from-blue-50 to-white z-10 flex flex-col p-2 sm:p-3 gap-1.5">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-300"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-300"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-300"></div>
                </div>
                <div className="w-2/3 h-2 rounded bg-primary/20"></div>
                <div className="w-1/3 h-1.5 rounded bg-primary/10"></div>
                <div className="flex gap-2 mt-1 flex-1">
                  <div className="flex-1 rounded bg-gradient-to-br from-primary/10 to-primary/5"></div>
                  <div className="flex-1 rounded bg-gradient-to-br from-primary/5 to-primary/10"></div>
                </div>
              </div>
            </div>
            {/* Tablet */}
            <div className="device-frame w-24 sm:w-32 h-32 sm:h-40 rounded-xl shadow-2xl">
              <div className="absolute inset-[3px] rounded-[9px] bg-gradient-to-br from-blue-50 to-blue-100 z-10 flex flex-col p-2 gap-1">
                <div className="w-2/3 h-1.5 rounded bg-primary/20"></div>
                <div className="w-1/2 h-1 rounded bg-primary/10"></div>
                <div className="w-full h-10 sm:h-14 mt-1 rounded bg-gradient-to-br from-primary/10 to-primary/5"></div>
                <div className="flex gap-1 mt-1">
                  <div className="flex-1 h-4 sm:h-6 rounded bg-primary/8"></div>
                  <div className="flex-1 h-4 sm:h-6 rounded bg-primary/8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Comment ça marche */}
      <section
        id="comment-ca-marche"
        className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Comment ça <span className="gradient-text">marche ?</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Obtenir votre site professionnel n&apos;a jamais été aussi facile.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 steps-connector">
            {[
              {
                step: "01",
                title: "Choisissez votre métier",
                desc: "Sélectionnez votre domaine d'activité et l'offre qui correspond à vos besoins.",
                icon: (
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                ),
                delay: "",
              },
              {
                step: "02",
                title: "On crée votre site",
                desc: "Notre équipe conçoit un site sur mesure avec votre contenu, vos couleurs et votre identité.",
                icon: (
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                ),
                delay: "animate-delay-200",
              },
              {
                step: "03",
                title: "Vous êtes en ligne",
                desc: "Votre site est publié, optimisé pour Google et prêt à attirer vos futurs clients.",
                icon: (
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                delay: "animate-delay-400",
              },
            ].map((item) => (
              <div key={item.step} className={`relative text-center pt-4 animate-fade-in-up ${item.delay}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary mb-6">
                  {item.icon}
                </div>
                <div className="absolute top-10 left-1/2 -translate-x-1/2 text-8xl font-extrabold text-primary/10 select-none pointer-events-none z-0">
                  {item.step}
                </div>
                <div className="relative border-l-4 border-primary/30 pl-4 text-left mt-2 ml-4 sm:ml-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos réalisations */}
      <section id="metiers" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              20 exemples
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Nos <span className="gradient-text">réalisations</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez des exemples de sites créés pour nos clients
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                name: "Le Comptoir du Lac",
                metier: "Restaurant",
                href: "/realisations/restaurant",
                gradient: "from-red-900 via-red-700 to-amber-800",
                emoji: "🍽️",
              },
              {
                name: "Salon Élégance",
                metier: "Coiffeur",
                href: "/realisations/coiffeur",
                gradient: "from-pink-400 via-rose-300 to-yellow-300",
                emoji: "✂️",
              },
              {
                name: "Plomberie Müller & Fils",
                metier: "Plombier",
                href: "/realisations/plombier",
                gradient: "from-blue-600 via-blue-400 to-orange-400",
                emoji: "🔧",
              },
              {
                name: "Boucherie Gasser",
                metier: "Boucherie",
                href: "/realisations/boucherie",
                gradient: "from-red-800 via-red-700 to-amber-700",
                emoji: "🥩",
              },
              {
                name: "Centre Dentaire du Léman",
                metier: "Dentiste",
                href: "/realisations/dentiste",
                gradient: "from-sky-300 via-cyan-400 to-blue-400",
                emoji: "🦷",
              },
              {
                name: "Boulangerie Artisanale Favre",
                metier: "Boulangerie",
                href: "/realisations/boulangerie",
                gradient: "from-amber-100 via-yellow-200 to-amber-700",
                emoji: "🥖",
              },
              {
                name: "Garage Central Steiner",
                metier: "Garage",
                href: "/realisations/garage",
                gradient: "from-gray-600 via-gray-500 to-red-600",
                emoji: "🚗",
              },
              {
                name: "FitPulse Coaching",
                metier: "Coach sportif",
                href: "/realisations/coach",
                gradient: "from-green-500 via-emerald-600 to-gray-900",
                emoji: "💪",
              },
              {
                name: "Studio Lumière",
                metier: "Photographe",
                href: "/realisations/photographe",
                gradient: "from-gray-900 via-gray-800 to-yellow-500",
                emoji: "📸",
              },
              {
                name: "Atelier Bonvin Architecture",
                metier: "Architecte",
                href: "/realisations/architecte",
                gradient: "from-white via-gray-200 to-gray-900",
                emoji: "🏛️",
              },
              {
                name: "Barber House",
                metier: "Barbier",
                href: "/realisations/barbier",
                gradient: "from-neutral-950 via-neutral-800 to-amber-700",
                emoji: "💈",
              },
              {
                name: "Cave du Valais",
                metier: "Cave à vin",
                href: "/realisations/cave-a-vin",
                gradient: "from-rose-950 via-red-900 to-amber-800",
                emoji: "🍷",
              },
              {
                name: "Fleurs & Jardins Rossi",
                metier: "Fleuriste",
                href: "/realisations/fleuriste",
                gradient: "from-green-600 via-emerald-400 to-pink-300",
                emoji: "💐",
              },
              {
                name: "Élec-Pro Savoy",
                metier: "Électricien",
                href: "/realisations/electricien",
                gradient: "from-slate-900 via-blue-900 to-yellow-500",
                emoji: "⚡",
              },
              {
                name: "Clinique Vétérinaire des Alpes",
                metier: "Vétérinaire",
                href: "/realisations/veterinaire",
                gradient: "from-teal-600 via-teal-400 to-emerald-300",
                emoji: "🐾",
              },
              {
                name: "Helvetia Immobilier",
                metier: "Agent immobilier",
                href: "/realisations/immobilier",
                gradient: "from-slate-900 via-slate-800 to-amber-600",
                emoji: "🏠",
              },
              {
                name: "La Vera Pizza",
                metier: "Pizzeria",
                href: "/realisations/pizzeria",
                gradient: "from-red-900 via-red-700 to-orange-500",
                emoji: "🍕",
              },
              {
                name: "Black Ink Studio",
                metier: "Tatoueur",
                href: "/realisations/tatoueur",
                gradient: "from-zinc-950 via-zinc-900 to-red-700",
                emoji: "🎨",
              },
              {
                name: "PhysioVita",
                metier: "Physiothérapeute",
                href: "/realisations/physiotherapeute",
                gradient: "from-blue-500 via-blue-400 to-sky-300",
                emoji: "🦴",
              },
              {
                name: "Sécuri-Clé Müller",
                metier: "Serrurier",
                href: "/realisations/serrurier",
                gradient: "from-stone-900 via-stone-700 to-orange-600",
                emoji: "🔑",
              },
            ].map((realisation) => (
              <a
                key={realisation.metier}
                href={realisation.href}
                target="_blank"
                rel="noopener noreferrer"
                className="realization-card group relative flex flex-col justify-end rounded-2xl overflow-hidden h-48 sm:h-56 shadow-md"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${realisation.gradient}`}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="relative p-4 sm:p-5">
                  <span className="text-2xl sm:text-3xl mb-2 block">
                    {realisation.emoji}
                  </span>
                  <h3 className="text-white font-bold text-sm sm:text-base leading-tight">
                    {realisation.name}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm mt-1">
                    {realisation.metier}
                  </p>
                  <span className="inline-flex items-center gap-1 text-white/70 text-xs mt-2 group-hover:text-white transition-colors">
                    Voir le site
                    <svg
                      className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section Pricing */}
      <section id="tarifs" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Des tarifs <span className="gradient-text">transparents</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Sans engagement. Sans surprise. Choisissez l&apos;offre qui vous
              convient.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-sm text-gray-600 font-medium">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Facturation mensuelle
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "49",
                desc: "L'essentiel pour être visible en ligne",
                features: [
                  "Site vitrine 1 page",
                  "Design professionnel sur mesure",
                  "100% adapté mobile & tablette",
                  "Formulaire de contact",
                  "Hébergement & nom de domaine inclus",
                  "Certificat SSL (site sécurisé)",
                  "Fiche Google My Business optimisée",
                  "QR code avis Google inclus",
                  "Mises à jour de sécurité",
                ],
                cta: "Choisir Starter",
                popular: false,
                delay: "",
              },
              {
                name: "Pro",
                price: "69",
                desc: "La solution complète pour se démarquer",
                features: [
                  "Tout le Starter, plus :",
                  "Site jusqu'à 5 pages",
                  "Design premium personnalisé",
                  "Optimisation SEO complète",
                  "Intégration Google Maps",
                  "Galerie photos professionnelle",
                  "Blog SEO auto-généré (2 articles/mois)",
                  "Collecte d'avis Google automatisée",
                  "Statistiques de visite mensuelles",
                  "Étude de concurrence locale",
                  "Support prioritaire",
                ],
                cta: "Choisir Pro",
                popular: true,
                delay: "animate-delay-100",
              },
              {
                name: "Premium",
                price: "99",
                desc: "Tout inclus pour les professionnels exigeants",
                features: [
                  "Tout le Pro, plus :",
                  "Site illimité en pages",
                  "Design haut de gamme",
                  "SEO avancé & stratégie de mots-clés",
                  "Blog SEO auto-généré (4 articles/mois)",
                  "Système de réservation en ligne",
                  "Intégration réseaux sociaux",
                  "Rapport de performance mensuel",
                  "Modifications illimitées",
                  "Maintenance & mises à jour incluses",
                  "Support dédié 7j/7",
                ],
                cta: "Choisir Premium",
                popular: false,
                delay: "animate-delay-200",
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl p-8 lg:p-10 animate-fade-in-up ${plan.delay} ${
                  plan.popular
                    ? "bg-primary text-white shadow-2xl shadow-blue-500/25 ring-1 ring-primary scale-105 plan-glow"
                    : "bg-white border border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-yellow-400 text-yellow-900 text-xs font-bold uppercase tracking-wide shadow-lg">
                    Le plus populaire
                  </div>
                )}
                <div className="mb-6">
                  <h3
                    className={`text-lg font-bold ${
                      plan.popular ? "text-blue-100" : "text-gray-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mt-1 ${
                      plan.popular ? "text-blue-200" : "text-gray-500"
                    }`}
                  >
                    {plan.desc}
                  </p>
                </div>
                <div className="mb-4">
                  <span
                    className={`text-5xl font-extrabold ${
                      plan.popular ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-base ml-1 ${
                      plan.popular ? "text-blue-200" : "text-gray-500"
                    }`}
                  >
                    CHF/mois
                  </span>
                </div>
                <p
                  className={`text-sm mb-8 ${
                    plan.popular ? "text-blue-200" : "text-gray-500"
                  }`}
                >
                  + 395 CHF de mise en place (unique)
                </p>
                <ul className="flex-1 space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 shrink-0 mt-0.5 ${
                          plan.popular ? "text-blue-200" : "text-primary"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span
                        className={`text-sm ${
                          plan.popular ? "text-blue-100" : "text-gray-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/41794517496?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20l%27offre%20OnVousTrouve." target="_blank" rel="noopener noreferrer"
                  className={`block text-center py-4 px-6 rounded-full font-semibold text-sm transition-all ${
                    plan.popular
                      ? "bg-white text-primary hover:bg-blue-50 hover:shadow-lg"
                      : "bg-primary text-white hover:bg-primary-dark hover:shadow-lg"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-sm text-gray-500">
            Tous les prix sont en francs suisses (CHF), hors TVA. Frais de mise
            en place uniques de 395 CHF inclus dans chaque offre.
          </p>
          {/* Guarantee badge */}
          <div className="text-center mt-6">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Satisfait ou remboursé 30 jours
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section
        id="temoignages"
        className="py-16 sm:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Ils nous font <span className="gradient-text">confiance</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez ce que nos clients disent de leur expérience avec
              OnVousTrouve.
            </p>
            {/* Google rating */}
            <div className="mt-4 inline-flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
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
              <span className="text-sm font-semibold text-gray-700">4.9/5</span>
              <span className="text-sm text-gray-500">sur Google</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Marc Zürcher",
                initials: "MZ",
                color: "bg-blue-500",
                role: "Restaurant Le Vieux-Bourg, Lausanne",
                text: "En deux semaines, mon restaurant avait un site magnifique. Les réservations en ligne ont augmenté de 40%. Je recommande sans hésiter.",
                stars: 5,
                delay: "",
              },
              {
                name: "Sophie Favre",
                initials: "SF",
                color: "bg-pink-500",
                role: "Salon Coiffure Élégance, Genève",
                text: "Je n'y connaissais rien en informatique. L'équipe a tout géré pour moi. Mon site est superbe et mes clientes adorent prendre rendez-vous en ligne.",
                stars: 5,
                delay: "animate-delay-200",
              },
              {
                name: "Thomas Brügger",
                initials: "TB",
                color: "bg-emerald-500",
                role: "Menuiserie Brügger & Fils, Fribourg",
                text: "Le meilleur investissement pour mon atelier. Je reçois des demandes de devis chaque semaine via le formulaire du site. Très professionnel.",
                stars: 5,
                delay: "animate-delay-400",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className={`testimonial-quote relative flex flex-col p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow animate-fade-in-up ${testimonial.delay}`}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
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
                <p className="flex-1 text-gray-600 leading-relaxed italic mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-white text-sm font-bold`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Questions <span className="gradient-text">frequentes</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Tout ce que vous devez savoir avant de vous lancer.
            </p>
          </div>
          <div className="space-y-4 animate-fade-in-up animate-delay-200">
            {[
              {
                q: "Combien de temps faut-il pour avoir mon site ?",
                a: "En général, votre site est en ligne sous 7 jours ouvrés après réception de vos contenus.",
              },
              {
                q: "Puis-je modifier mon site moi-meme ?",
                a: "Oui, vous accédez à un panneau d'administration simple pour modifier vos textes, images, horaires et services.",
              },
              {
                q: "Que se passe-t-il si je résilie ?",
                a: "Pas d'engagement. Vous pouvez résilier à tout moment. Votre site sera désactivé à la fin de la période payée.",
              },
              {
                q: "Mon site sera-t-il bien référencé sur Google ?",
                a: "Oui. Tous nos sites sont optimisés pour le SEO local. Les offres Pro et Premium incluent un blog SEO auto-généré.",
              },
              {
                q: "Les frais de mise en place, c'est quoi ?",
                a: "C'est un frais unique de 395 CHF qui couvre la création sur mesure de votre site : design, contenu, configuration et mise en ligne.",
              },
              {
                q: "Proposez-vous un service de maintenance ?",
                a: "Oui. L'hébergement, le SSL et les mises à jour de sécurité sont inclus dans tous les abonnements. L'offre Premium inclut une maintenance complète.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="faq-item group rounded-2xl border border-gray-200 bg-white hover:border-primary/30 transition-colors"
              >
                <summary className="flex items-center justify-between p-6 text-left font-semibold text-gray-900">
                  <span className="pr-4">{item.q}</span>
                  <svg
                    className="faq-chevron w-5 h-5 shrink-0 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 sm:py-24 bg-primary relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <p className="text-blue-200 font-medium mb-4 text-lg">
            Votre concurrent est déjà en ligne. Et vous ?
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
            Prêt à être trouvé en ligne ?
          </h2>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
            Rejoignez les professionnels qui ont fait le choix de la visibilité.
            Votre site peut être en ligne dès la semaine prochaine.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/41794517496?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20vos%20services%20de%20cr%C3%A9ation%20de%20site%20web."
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pulse inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-[#25D366] text-white text-lg font-bold hover:bg-[#1fb855] transition-all shadow-xl hover:shadow-2xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Contactez-nous sur WhatsApp
            </a>
            <a
              href="tel:+41794517496"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full border-2 border-white/30 text-white text-lg font-semibold hover:bg-white/10 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +41 79 451 74 96
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <span className="text-2xl font-bold text-white">
                OnVousTrouve
              </span>
              <span className="text-sm text-blue-400 font-medium">.ch</span>
              <p className="mt-4 text-sm leading-relaxed max-w-md">
                Nous aidons les professionnels suisses à développer leur
                présence en ligne avec des sites web modernes, rapides et
                efficaces. Basés en Suisse, pour la Suisse.
              </p>
              <p className="mt-3 text-sm text-gray-500">
                Le Bouveret, Valais, Suisse
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#metiers"
                    className="hover:text-white transition-colors"
                  >
                    Réalisations
                  </a>
                </li>
                <li>
                  <a
                    href="#comment-ca-marche"
                    className="hover:text-white transition-colors"
                  >
                    Comment ça marche ?
                  </a>
                </li>
                <li>
                  <a
                    href="#tarifs"
                    className="hover:text-white transition-colors"
                  >
                    Tarifs
                  </a>
                </li>
                <li>
                  <a
                    href="#temoignages"
                    className="hover:text-white transition-colors"
                  >
                    Témoignages
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="hover:text-white transition-colors"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://wa.me/41794517496?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20l%27offre%20OnVousTrouve." target="_blank" rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    contact@onvoustrouve.ch
                  </a>
                </li>
                <li>Le Bouveret, Valais, Suisse</li>
              </ul>
              <h4 className="text-white font-semibold mt-6 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mentions legales
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Politique de confidentialité
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    CGV
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center space-y-2">
            <p>
              &copy; {new Date().getFullYear()} OnVousTrouve.ch — Tous droits
              réservés.
            </p>
            <p className="text-gray-600 text-xs">
              Made with ❤️ in Switzerland
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
