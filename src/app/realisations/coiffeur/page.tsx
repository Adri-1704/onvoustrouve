import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Salon Élégance | Coiffure Haut de Gamme - Genève",
  description:
    "Salon de coiffure haut de gamme à Genève. Coupes, colorations, soins capillaires. Prenez rendez-vous en ligne.",
};

export default function CoiffeurDemo() {
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
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-300 to-rose-400 flex items-center justify-center text-white font-bold text-lg font-serif italic">
                É
              </div>
              <div>
                <span className="text-xl font-serif font-bold text-gray-900 tracking-wide">
                  Salon Élégance
                </span>
                <p className="text-xs text-rose-400 tracking-widest uppercase">
                  Genève
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
              <a href="#services" className="hover:text-rose-500 transition-colors">
                Services
              </a>
              <a href="#equipe" className="hover:text-rose-500 transition-colors">
                L&apos;Équipe
              </a>
              <a href="#galerie" className="hover:text-rose-500 transition-colors">
                Galerie
              </a>
              <a href="#avis" className="hover:text-rose-500 transition-colors">
                Avis
              </a>
              <a href="#contact" className="hover:text-rose-500 transition-colors">
                Contact
              </a>
            </div>
            <a
              href="#rdv"
              className="hidden sm:inline-flex items-center px-6 py-2.5 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 text-white text-sm font-semibold hover:from-rose-500 hover:to-pink-600 transition-all shadow-lg shadow-pink-500/20"
            >
              Prendre RDV
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 min-h-[80vh] flex items-center">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-100/50 to-transparent" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 text-rose-500 text-sm font-medium mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                Salon haut de gamme depuis 2015
              </div>
              <h1 className="text-5xl sm:text-6xl font-serif font-bold text-gray-900 leading-tight">
                Révélez votre
                <br />
                <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                  beauté naturelle
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-lg leading-relaxed">
                Un espace dédié à votre bien-être au coeur de Genève. Nos
                experts subliment votre style avec passion et savoir-faire.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#rdv"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 text-white font-semibold hover:from-rose-500 hover:to-pink-600 transition-all shadow-lg shadow-pink-500/25"
                >
                  Prendre rendez-vous
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center px-8 py-4 rounded-full border-2 border-rose-200 text-rose-600 font-semibold hover:border-rose-400 transition-colors"
                >
                  Nos services
                </a>
              </div>
              <div className="mt-12 flex items-center gap-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">9+</p>
                  <p className="text-xs text-gray-500 mt-1">Années d&apos;expérience</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">5k+</p>
                  <p className="text-xs text-gray-500 mt-1">Clientes satisfaites</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">4.9</p>
                  <p className="text-xs text-gray-500 mt-1">Note Google</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full aspect-[3/4] rounded-[2rem] border border-rose-200/50 overflow-hidden shadow-2xl shadow-pink-200/30">
                  <img
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
                    alt="Intérieur moderne du Salon Élégance"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-gradient-to-br from-amber-200 to-amber-300/50 border border-amber-200/50 flex items-center justify-center shadow-xl">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-amber-800">15%</p>
                    <p className="text-xs text-amber-600">1re visite</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Tarifs */}
      <section id="services" className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-rose-500 font-medium tracking-widest uppercase text-sm mb-3">
              Ce que nous proposons
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              Services & Tarifs
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Coupes",
                icon: "✂️",
                color: "rose",
                items: [
                  { name: "Coupe femme", price: "CHF 85.—" },
                  { name: "Coupe homme", price: "CHF 55.—" },
                  { name: "Coupe enfant (-12 ans)", price: "CHF 35.—" },
                  { name: "Coupe + brushing", price: "CHF 110.—" },
                  { name: "Brushing seul", price: "CHF 55.—" },
                ],
              },
              {
                title: "Colorations",
                icon: "🎨",
                color: "amber",
                items: [
                  { name: "Coloration complète", price: "CHF 120.—" },
                  { name: "Mèches / Balayage", price: "CHF 150.—" },
                  { name: "Ombré hair", price: "CHF 180.—" },
                  { name: "Retouche racines", price: "CHF 75.—" },
                  { name: "Toner / Gloss", price: "CHF 60.—" },
                ],
              },
              {
                title: "Soins",
                icon: "💆",
                color: "purple",
                items: [
                  { name: "Soin profond Kérastase", price: "CHF 45.—" },
                  { name: "Lissage brésilien", price: "CHF 350.—" },
                  { name: "Traitement anti-chute", price: "CHF 65.—" },
                  { name: "Massage crânien", price: "CHF 30.—" },
                  { name: "Soin botox capillaire", price: "CHF 90.—" },
                ],
              },
            ].map((category) => (
              <div
                key={category.title}
                className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex justify-between items-center"
                    >
                      <span className="text-sm text-gray-600">{item.name}</span>
                      <span className="text-sm font-semibold text-gray-900">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section id="galerie" className="py-20 sm:py-28 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-rose-500 font-medium tracking-widest uppercase text-sm mb-3">
              Nos réalisations
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              Galerie
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Balayage blond", aspect: "aspect-square", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80" },
              { label: "Coupe courte moderne", aspect: "aspect-[3/4]", img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80" },
              { label: "Coloration cuivré", aspect: "aspect-square", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80" },
              { label: "Chignon de mariée", aspect: "aspect-[3/4]", img: "https://images.unsplash.com/photo-1521590832167-7228f0d3e8ad?w=800&q=80" },
              { label: "Ombré hair", aspect: "aspect-square", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80" },
              { label: "Coupe homme tendance", aspect: "aspect-square", img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80" },
            ].map((item, i) => (
              <div
                key={i}
                className={`${item.aspect} rounded-2xl border border-rose-200/50 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer relative group`}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
                  <p className="text-white text-sm font-medium">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section id="equipe" className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-rose-500 font-medium tracking-widest uppercase text-sm mb-3">
              Des experts passionnés
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              Notre Équipe
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Isabelle Moreau",
                role: "Fondatrice & Styliste",
                exp: "18 ans d'expérience",
              },
              {
                name: "Lucas Bertrand",
                role: "Coloriste Expert",
                exp: "12 ans d'expérience",
              },
              {
                name: "Amélie Fontaine",
                role: "Styliste Senior",
                exp: "9 ans d'expérience",
              },
              {
                name: "Yann Keller",
                role: "Barbier & Styliste",
                exp: "7 ans d'expérience",
              },
            ].map((member) => (
              <div key={member.name} className="text-center group">
                <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-rose-100 to-pink-200 border-4 border-white shadow-lg flex items-center justify-center mb-5 group-hover:shadow-xl transition-shadow">
                  <span className="text-4xl text-rose-300">
                    {member.name[0]}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-rose-500 text-sm font-medium">{member.role}</p>
                <p className="text-gray-400 text-xs mt-1">{member.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avis Clients */}
      <section id="avis" className="py-20 sm:py-28 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-rose-500 font-medium tracking-widest uppercase text-sm mb-3">
              Ce que disent nos clientes
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              Avis Clients
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Caroline M.",
                text: "Le meilleur salon de Genève ! Isabelle a parfaitement compris ce que je voulais. Mon balayage est sublime. Je recommande à 100%.",
                stars: 5,
                date: "Mars 2026",
              },
              {
                name: "Marie-Claire D.",
                text: "Accueil chaleureux, cadre magnifique et résultat impeccable. Lucas est un magicien de la couleur. J'adore ma nouvelle teinte !",
                stars: 5,
                date: "Février 2026",
              },
              {
                name: "Thomas R.",
                text: "Première fois dans un salon haut de gamme pour homme. Yann a fait un travail remarquable, coupe précise et ambiance détendue. J'y retourne !",
                stars: 5,
                date: "Janvier 2026",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-3xl p-8 border border-rose-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed text-sm italic mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex justify-between items-end">
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prise de RDV */}
      <section id="rdv" className="py-20 sm:py-28 bg-gradient-to-br from-rose-500 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Prenez rendez-vous
          </h2>
          <p className="mt-4 text-lg text-rose-100 max-w-2xl mx-auto">
            Réservez votre créneau en ligne ou appelez-nous. Nous vous accueillons
            du mardi au samedi.
          </p>
          <div className="mt-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 sm:p-12">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-rose-100 mb-2 text-left">
                  Nom complet
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-rose-200/50 focus:outline-none focus:border-white/50"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-rose-100 mb-2 text-left">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-rose-200/50 focus:outline-none focus:border-white/50"
                  placeholder="+41 22 000 00 00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-rose-100 mb-2 text-left">
                  Service souhaité
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/50">
                  <option value="">Choisir un service</option>
                  <option value="coupe">Coupe</option>
                  <option value="coloration">Coloration</option>
                  <option value="soin">Soin capillaire</option>
                  <option value="brushing">Brushing</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-rose-100 mb-2 text-left">
                  Date souhaitée
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/50"
                />
              </div>
            </div>
            <div className="mt-8">
              <button className="px-10 py-4 rounded-full bg-white text-rose-600 font-semibold hover:bg-rose-50 transition-colors shadow-lg">
                Demander un rendez-vous
              </button>
            </div>
          </div>
          <p className="mt-6 text-rose-200 text-sm">
            Ou appelez-nous au{" "}
            <a
              href="tel:+41223456789"
              className="text-white font-semibold hover:underline"
            >
              +41 22 345 67 89
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-300 to-rose-400 flex items-center justify-center text-white font-bold text-lg font-serif italic">
                  É
                </div>
                <span className="text-xl font-serif font-bold text-white">
                  Salon Élégance
                </span>
              </div>
              <p className="text-sm leading-relaxed max-w-md">
                Votre salon de coiffure haut de gamme au coeur de Genève.
                Sublimez votre style avec nos experts passionnés.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Horaires</h4>
              <ul className="space-y-2 text-sm">
                <li>Lundi : Fermé</li>
                <li>Mar-Ven : 9h00 – 19h00</li>
                <li>Samedi : 9h00 – 17h00</li>
                <li>Dimanche : Fermé</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Rue du Rhône 48, 1204 Genève</li>
                <li>+41 22 345 67 89</li>
                <li>info@salon-elegance.ch</li>
              </ul>
              <div className="flex gap-3 mt-4">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-rose-500 transition-colors"
                >
                  <span className="text-xs text-white">IG</span>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-rose-500 transition-colors"
                >
                  <span className="text-xs text-white">FB</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            <p>
              &copy; {new Date().getFullYear()} Salon Élégance — Tous droits
              réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
