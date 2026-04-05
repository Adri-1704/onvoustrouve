import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Garage Central Steiner | Bienne - Démonstration OnVousTrouve.ch",
  description:
    "Démonstration d'un site vitrine pour un garage automobile à Bienne, créé par OnVousTrouve.ch",
};

export default function GaragePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100 font-sans">
      {/* Bandeau démo */}
      <div className="bg-gray-900 text-white text-center text-sm py-2 px-4">
        Ceci est une démonstration{" "}
        <Link href="/" className="underline font-semibold hover:text-red-400">
          OnVousTrouve.ch
        </Link>{" "}
        — Ce site n&apos;est pas réel
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur-sm border-b border-red-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white font-black text-xl tracking-tighter">
                GS
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-wide uppercase">
                  Garage Central
                </span>
                <p className="text-xs text-red-500 tracking-[0.3em] uppercase font-bold">
                  Steiner
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
              <a href="#services" className="hover:text-red-500 transition-colors">
                Services
              </a>
              <a href="#equipe" className="hover:text-red-500 transition-colors">
                L&apos;Équipe
              </a>
              <a href="#galerie" className="hover:text-red-500 transition-colors">
                Galerie
              </a>
              <a href="#avis" className="hover:text-red-500 transition-colors">
                Avis
              </a>
              <a href="#contact" className="hover:text-red-500 transition-colors">
                Contact
              </a>
            </div>
            <a
              href="#devis"
              className="hidden sm:inline-flex items-center px-6 py-2.5 rounded-lg bg-red-600 text-white text-sm font-bold uppercase tracking-wider hover:bg-red-500 transition-colors"
            >
              Devis gratuit
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-950 min-h-[85vh] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80"
            alt="Garage automobile professionnel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/40" />
        </div>
        {/* Texture de fond */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-72 h-72 bg-red-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-red-800/5 rounded-full blur-3xl" />
        </div>
        {/* Lignes décoratives verticales */}
        <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-red-900/20 to-transparent" />
        <div className="absolute right-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-red-900/10 to-transparent" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-red-800/50 text-red-500 text-xs font-bold tracking-[0.25em] uppercase mb-8">
              <span className="w-8 h-px bg-red-600" />
              Garage automobile
              <span className="w-8 h-px bg-red-600" />
            </div>
            <h1 className="text-5xl sm:text-7xl font-black text-white leading-[0.9] uppercase tracking-tight">
              Votre garage
              <br />
              de <span className="text-red-500">confiance</span>
            </h1>
            <p className="mt-8 text-lg text-gray-400 max-w-lg leading-relaxed">
              Entretien, réparation, contrôle technique et service pneus.
              Plus de 30 ans d&apos;expertise au service de votre véhicule,
              toutes marques confondues, au coeur de Bienne.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#devis"
                className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-wider hover:bg-red-500 transition-colors"
              >
                Demander un devis
              </a>
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-700 text-gray-300 font-bold uppercase tracking-wider hover:border-red-600 hover:text-red-500 transition-colors"
              >
                Nos prestations
              </a>
            </div>
            <div className="mt-14 flex items-center gap-10">
              <div>
                <p className="text-4xl font-black text-red-500">30+</p>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Ans d&apos;expérience</p>
              </div>
              <div className="w-px h-12 bg-gray-800" />
              <div>
                <p className="text-4xl font-black text-red-500">5k+</p>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Véhicules entretenus</p>
              </div>
              <div className="w-px h-12 bg-gray-800" />
              <div>
                <p className="text-4xl font-black text-red-500">98%</p>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Clients satisfaits</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating badge */}
        <div className="hidden lg:block absolute bottom-24 right-16 z-20">
          <div className="w-36 h-36 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center rotate-3 shadow-2xl shadow-red-900/30">
            <div className="text-center -rotate-3">
              <p className="text-3xl font-black text-white">24h</p>
              <p className="text-xs text-red-200 uppercase tracking-wider">Délai moyen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Tarifs */}
      <section id="services" className="py-24 sm:py-32 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-red-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">
              Nos prestations
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wide">
              Services & Tarifs
            </h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Entretien & Révision",
                desc: "Service complet selon les recommandations du constructeur. Vidange, filtres, bougies, freins, courroies.",
                price: "Dès CHF 189.--",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                  </svg>
                ),
              },
              {
                title: "Réparation mécanique",
                desc: "Diagnostic électronique, réparation moteur, boîte de vitesses, suspension, direction, échappement.",
                price: "Sur devis",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                ),
              },
              {
                title: "Service pneus",
                desc: "Changement, équilibrage, stockage saisonnier. Large choix de pneus été, hiver et 4 saisons en stock.",
                price: "Dès CHF 40.--/pneu",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                  </svg>
                ),
              },
              {
                title: "Contrôle technique",
                desc: "Préparation et passage au contrôle technique cantonal. Pré-contrôle offert pour anticiper les éventuels problèmes.",
                price: "CHF 69.--",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                  </svg>
                ),
              },
              {
                title: "Véhicule de prêt",
                desc: "Véhicule de remplacement disponible gratuitement pour les réparations de plus d&apos;une journée.",
                price: "Gratuit",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                ),
              },
              {
                title: "Climatisation & Électrique",
                desc: "Recharge climatisation, diagnostic batterie, alternateur, démarreur, éclairage complet.",
                price: "Dès CHF 89.--",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                  </svg>
                ),
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-gray-950 border border-gray-800 p-6 hover:border-red-800/50 transition-colors group"
              >
                <div className="text-red-500 mb-4 group-hover:text-red-400 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {service.desc}
                </p>
                <p className="text-red-500 font-bold text-sm">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section id="equipe" className="py-24 sm:py-32 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-red-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">
              Les experts du moteur
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wide">
              Notre Équipe
            </h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mt-6" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Thomas Steiner",
                role: "Fondateur & Maître garagiste",
                exp: "30 ans d'expérience",
                specialty: "Diagnostic & gestion",
              },
              {
                name: "Patrick Moser",
                role: "Chef d'atelier",
                exp: "18 ans d'expérience",
                specialty: "Mécanique générale & moteurs",
              },
              {
                name: "Julien Favre",
                role: "Mécanicien Senior",
                exp: "12 ans d'expérience",
                specialty: "Électronique & climatisation",
              },
              {
                name: "Davide Rossi",
                role: "Mécanicien & Pneumaticien",
                exp: "8 ans d'expérience",
                specialty: "Service pneus & freinage",
              },
            ].map((member) => (
              <div key={member.name} className="group">
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-800 group-hover:border-red-800/50 transition-colors flex items-center justify-center mb-5 relative overflow-hidden">
                  <span className="text-6xl text-gray-700 font-black uppercase">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                  <div className="absolute inset-3 border border-gray-700/30 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-950 to-transparent" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                  {member.name}
                </h3>
                <p className="text-red-500 text-sm font-semibold mt-1">{member.role}</p>
                <p className="text-gray-500 text-xs mt-1">{member.exp}</p>
                <p className="text-gray-600 text-xs mt-1 italic">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section id="galerie" className="py-24 sm:py-32 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-red-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">
              Notre savoir-faire
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wide">
              Notre Atelier
            </h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Atelier mécanique", img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80" },
              { label: "Réparation moteur", img: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=800&q=80" },
              { label: "Mécanicien au travail", img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80" },
              { label: "Diagnostic électronique", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80" },
              { label: "Service pneus", img: "https://images.unsplash.com/photo-1581783898323-3df9d25e1a3c?w=800&q=80" },
              { label: "Finition & contrôle", img: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&q=80" },
            ].map((item, i) => (
              <div
                key={i}
                className="aspect-square border border-gray-800 hover:border-red-700/50 overflow-hidden transition-all cursor-pointer group relative"
              >
                <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <p className="text-white/80 group-hover:text-red-500 text-sm text-center px-4 uppercase tracking-wider font-semibold transition-colors">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marques */}
      <section className="py-24 sm:py-32 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-red-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">
              Multimarque
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wide">
              Toutes Marques
            </h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mt-6" />
            <p className="text-gray-500 mt-4 max-w-lg mx-auto">
              Nous entretenons et réparons tous types de véhicules
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {["VW", "BMW", "Mercedes", "Audi", "Toyota", "Renault", "Peugeot", "Skoda", "Ford", "Hyundai", "Fiat", "Opel"].map((brand) => (
              <div key={brand} className="bg-gray-900 border border-gray-800 p-6 flex items-center justify-center hover:border-red-600/50 transition-colors group">
                <span className="text-gray-500 group-hover:text-white font-bold text-lg transition-colors">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avis Clients */}
      <section id="avis" className="py-24 sm:py-32 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-red-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">
              Ils nous font confiance
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wide">
              Avis Clients
            </h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Marc W.",
                text: "Un garage sérieux et honnête. Thomas m'a clairement expliqué ce qui devait être réparé et ce qui pouvait attendre. Pas de mauvaises surprises sur la facture. Je recommande à 100%.",
                stars: 5,
                date: "Mars 2026",
              },
              {
                name: "Sandra K.",
                text: "Service pneus impeccable et rapide. Véhicule de prêt mis à disposition sans frais pendant que ma voiture était en révision. C'est rare de trouver un garage aussi arrangeant.",
                stars: 5,
                date: "Février 2026",
              },
              {
                name: "Philippe M.",
                text: "Mon moteur avait un problème complexe que deux autres garages n'avaient pas réussi à diagnostiquer. Patrick a trouvé la panne en moins d'une heure. Des vrais pros.",
                stars: 5,
                date: "Janvier 2026",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-gray-950 border border-gray-800 p-8 hover:border-red-800/40 transition-colors"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed text-sm italic mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex justify-between items-end">
                  <p className="font-bold text-white">{review.name}</p>
                  <p className="text-xs text-gray-600">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devis en ligne */}
      <section id="devis" className="py-24 sm:py-32 bg-gradient-to-br from-red-700 to-red-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wide">
            Devis gratuit en ligne
          </h2>
          <p className="mt-4 text-lg text-red-100/80 max-w-2xl mx-auto">
            Recevez votre estimation sous 24h. Décrivez-nous votre besoin
            et nous vous recontactons rapidement.
          </p>
          <div className="mt-10 bg-black/20 backdrop-blur-sm border border-white/10 p-8 sm:p-12">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-red-100 mb-2 text-left uppercase tracking-wider">
                  Nom et prénom
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-black/20 border border-white/15 text-white placeholder-red-200/30 focus:outline-none focus:border-red-400/50"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-red-100 mb-2 text-left uppercase tracking-wider">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-black/20 border border-white/15 text-white placeholder-red-200/30 focus:outline-none focus:border-red-400/50"
                  placeholder="+41 32 000 00 00"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-red-100 mb-2 text-left uppercase tracking-wider">
                  Marque et modèle
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-black/20 border border-white/15 text-white placeholder-red-200/30 focus:outline-none focus:border-red-400/50"
                  placeholder="Ex: VW Golf 2020"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-red-100 mb-2 text-left uppercase tracking-wider">
                  Service souhaité
                </label>
                <select className="w-full px-4 py-3 bg-black/20 border border-white/15 text-white focus:outline-none focus:border-red-400/50">
                  <option value="">Choisir un service</option>
                  <option value="entretien">Entretien / Révision</option>
                  <option value="reparation">Réparation</option>
                  <option value="controle">Contrôle technique</option>
                  <option value="pneus">Service pneus</option>
                  <option value="clim">Climatisation</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-bold text-red-100 mb-2 text-left uppercase tracking-wider">
                Description du besoin
              </label>
              <textarea
                rows={3}
                className="w-full px-4 py-3 bg-black/20 border border-white/15 text-white placeholder-red-200/30 focus:outline-none focus:border-red-400/50"
                placeholder="Décrivez votre besoin..."
              />
            </div>
            <div className="mt-8">
              <button className="px-10 py-4 bg-white text-gray-900 font-black uppercase tracking-wider hover:bg-red-100 transition-colors">
                Envoyer ma demande
              </button>
            </div>
          </div>
          <p className="mt-6 text-red-200/60 text-sm">
            Ou appelez-nous au{" "}
            <a
              href="tel:+41323231234"
              className="text-white font-bold hover:underline"
            >
              +41 32 323 12 34
            </a>
          </p>
        </div>
      </section>

      {/* Horaires & Contact */}
      <section className="py-24 sm:py-32 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-red-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">
              Informations pratiques
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wide">
              Horaires & Accès
            </h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="space-y-3">
                {[
                  { day: "Lundi -- Vendredi", hours: "07h30 -- 12h00 / 13h30 -- 18h00" },
                  { day: "Samedi", hours: "08h00 -- 12h00" },
                  { day: "Dimanche", hours: "Fermé" },
                ].map((row) => (
                  <div key={row.day} className="flex justify-between items-center py-4 border-b border-gray-800">
                    <span className="font-medium text-white">{row.day}</span>
                    <span className="text-gray-400">{row.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-5 bg-red-600/10 border border-red-600/30">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                  </svg>
                  <p className="text-red-400 text-sm font-medium">
                    Service dépannage disponible 7j/7 au +41 32 323 12 35
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 border border-gray-800 p-8">
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">
                Comment nous trouver
              </h3>
              <div className="space-y-5 text-gray-400">
                <p className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <span>Route de Soleure 45<br />2502 Bienne</span>
                </p>
                <p className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  <a href="tel:+41323231234" className="hover:text-white transition-colors">+41 32 323 12 34</a>
                </p>
                <p className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <a href="mailto:info@garage-steiner.ch" className="hover:text-white transition-colors">info@garage-steiner.ch</a>
                </p>
              </div>
              <p className="text-gray-600 text-sm mt-6">
                Parking client devant le garage. Accès facile depuis l&apos;autoroute A5, sortie Bienne-Centre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-950 text-gray-500 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white font-black text-xl tracking-tighter">
                  GS
                </div>
                <span className="text-xl font-bold text-white uppercase tracking-wide">
                  Garage Steiner
                </span>
              </div>
              <p className="text-sm leading-relaxed max-w-md text-gray-500">
                Votre partenaire automobile de confiance à Bienne depuis 1993.
                Entretien, réparation et service pneus pour toutes marques,
                avec passion et expertise.
              </p>
              <div className="flex gap-3 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-colors"
                >
                  <span className="text-xs text-white font-bold">FB</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-colors"
                >
                  <span className="text-xs text-white font-bold">IG</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-colors"
                >
                  <span className="text-xs text-white font-bold">GL</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Horaires</h4>
              <ul className="space-y-2 text-sm">
                <li>Lun-Ven : 07h30-18h00</li>
                <li>Samedi : 08h00-12h00</li>
                <li>Dimanche : Fermé</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Route de Soleure 45, 2502 Bienne</li>
                <li>+41 32 323 12 34</li>
                <li>info@garage-steiner.ch</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-xs text-center text-gray-600">
            <p>
              &copy; {new Date().getFullYear()} Garage Central Steiner SA — Tous droits
              réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
