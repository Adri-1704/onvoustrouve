export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-white font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">
                OnVousTrouve
              </span>
              <span className="text-sm text-primary-light font-medium">.ch</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
              <a href="#metiers" className="hover:text-primary transition-colors">
                Réalisations
              </a>
              <a
                href="#comment-ca-marche"
                className="hover:text-primary transition-colors"
              >
                Comment ça marche
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
            </div>
            <a
              href="#tarifs"
              className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors"
            >
              Commencer
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent to-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-20 sm:pb-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-primary text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Plus de 200 professionnels nous font confiance
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Votre métier mérite
              <br />
              <span className="text-primary">d&apos;être trouvé en ligne</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Nous créons votre site web professionnel clé en main. Vous vous
              concentrez sur votre métier, on s&apos;occupe de tout le reste.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#tarifs"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-white text-lg font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-blue-500/25"
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
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-gray-200 text-gray-700 text-lg font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                Comment ça marche
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Comment ça marche */}
      <section
        id="comment-ca-marche"
        className="py-14 sm:py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Simple comme{" "}
              <span className="text-primary">1, 2, 3</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Obtenir votre site professionnel n&apos;a jamais été aussi facile.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
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
              },
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary mb-6">
                  {item.icon}
                </div>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full text-7xl font-extrabold text-gray-100 select-none pointer-events-none">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos réalisations */}
      <section id="metiers" className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Nos <span className="text-primary">réalisations</span>
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
                name: "Cabinet Renaud & Associés",
                metier: "Avocat",
                href: "/realisations/avocat",
                gradient: "from-blue-950 via-blue-900 to-blue-800",
                emoji: "⚖️",
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
            ].map((realisation) => (
              <a
                key={realisation.metier}
                href={realisation.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-end rounded-2xl overflow-hidden h-48 sm:h-56 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
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
      <section id="tarifs" className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Des tarifs <span className="text-primary">transparents</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Sans engagement. Sans surprise. Choisissez l&apos;offre qui vous
              convient.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "49",
                desc: "L'essentiel pour être visible en ligne",
                features: [
                  "Site vitrine 1 page",
                  "Design professionnel",
                  "Adapté mobile",
                  "Formulaire de contact",
                  "Hébergement inclus",
                  "Certificat SSL",
                ],
                cta: "Choisir Starter",
                popular: false,
              },
              {
                name: "Pro",
                price: "69",
                desc: "La solution complète pour se démarquer",
                features: [
                  "Site jusqu'à 5 pages",
                  "Design premium sur mesure",
                  "Optimisation SEO",
                  "Intégration Google Maps",
                  "Galerie photos",
                  "Statistiques de visite",
                  "Support prioritaire",
                ],
                cta: "Choisir Pro",
                popular: true,
              },
              {
                name: "Premium",
                price: "99",
                desc: "Tout inclus pour les professionnels exigeants",
                features: [
                  "Site illimité en pages",
                  "Design haut de gamme",
                  "SEO avancé + blog",
                  "Système de réservation",
                  "Intégration réseaux sociaux",
                  "Maintenance mensuelle",
                  "Modifications illimitées",
                  "Support dédié 7j/7",
                ],
                cta: "Choisir Premium",
                popular: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl p-8 lg:p-10 ${
                  plan.popular
                    ? "bg-primary text-white shadow-2xl shadow-blue-500/25 ring-1 ring-primary scale-105"
                    : "bg-white border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-yellow-400 text-yellow-900 text-xs font-bold uppercase tracking-wide">
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
                  href="mailto:contact@onvoustrouve.ch"
                  className={`block text-center py-3.5 px-6 rounded-full font-semibold text-sm transition-colors ${
                    plan.popular
                      ? "bg-white text-primary hover:bg-blue-50"
                      : "bg-primary text-white hover:bg-primary-dark"
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
        </div>
      </section>

      {/* Témoignages */}
      <section
        id="temoignages"
        className="py-14 sm:py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Ils nous font <span className="text-primary">confiance</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez ce que nos clients disent de leur expérience avec
              OnVousTrouve.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Marc Zürcher",
                role: "Restaurant Le Vieux-Bourg, Lausanne",
                text: "En deux semaines, mon restaurant avait un site magnifique. Les réservations en ligne ont augmenté de 40%. Je recommande sans hésiter.",
                stars: 5,
              },
              {
                name: "Sophie Favre",
                role: "Salon Coiffure Élégance, Genève",
                text: "Je n'y connaissais rien en informatique. L'équipe a tout géré pour moi. Mon site est superbe et mes clientes adorent prendre rendez-vous en ligne.",
                stars: 5,
              },
              {
                name: "Thomas Brügger",
                role: "Menuiserie Brügger & Fils, Fribourg",
                text: "Le meilleur investissement pour mon atelier. Je reçois des demandes de devis chaque semaine via le formulaire du site. Très professionnel.",
                stars: 5,
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex flex-col p-8 rounded-2xl bg-white border border-gray-100 shadow-sm"
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
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-14 sm:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Prêt à être trouvé en ligne ?
          </h2>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
            Rejoignez les professionnels qui ont fait le choix de la visibilité.
            Votre site peut être en ligne dès la semaine prochaine.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@onvoustrouve.ch"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-primary text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Demander un devis gratuit
            </a>
            <a
              href="tel:+41000000000"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/30 text-white text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Nous appeler
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
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#metiers"
                    className="hover:text-white transition-colors"
                  >
                    Métiers
                  </a>
                </li>
                <li>
                  <a
                    href="#comment-ca-marche"
                    className="hover:text-white transition-colors"
                  >
                    Comment ça marche
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
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:contact@onvoustrouve.ch"
                    className="hover:text-white transition-colors"
                  >
                    contact@onvoustrouve.ch
                  </a>
                </li>
                <li>Suisse</li>
              </ul>
              <h4 className="text-white font-semibold mt-6 mb-4">Légal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mentions légales
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
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            <p>
              &copy; {new Date().getFullYear()} OnVousTrouve.ch — Tous droits
              réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
