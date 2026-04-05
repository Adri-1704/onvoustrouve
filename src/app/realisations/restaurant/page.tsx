import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Le Comptoir du Lac | Restaurant Gastronomique - Lausanne",
  description:
    "Restaurant gastronomique au bord du lac à Lausanne. Cuisine raffinée, produits locaux, vue imprenable. Réservez votre table.",
};

export default function RestaurantDemo() {
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
      <nav className="sticky top-0 z-50 bg-[#1A0808]/95 backdrop-blur-md border-b border-amber-900/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-lg">
                C
              </div>
              <div>
                <span className="text-xl font-serif font-bold text-amber-50 tracking-wide">
                  Le Comptoir du Lac
                </span>
                <p className="text-[11px] text-amber-400/50 tracking-[0.25em] uppercase">
                  Lausanne
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-10 text-sm text-amber-200/70">
              <a href="#carte" className="hover:text-amber-300 transition-colors duration-300">
                La Carte
              </a>
              <a href="#menu-du-jour" className="hover:text-amber-300 transition-colors duration-300">
                Menu du Jour
              </a>
              <a href="#galerie" className="hover:text-amber-300 transition-colors duration-300">
                Galerie
              </a>
              <a href="#horaires" className="hover:text-amber-300 transition-colors duration-300">
                Horaires
              </a>
              <a href="#contact" className="hover:text-amber-300 transition-colors duration-300">
                Contact
              </a>
            </div>
            <a
              href="#reservation"
              className="hidden sm:inline-flex items-center px-7 py-2.5 rounded-full bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600 transition-colors duration-300 shadow-lg shadow-amber-500/20"
            >
              Réserver une table
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1A0808] min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80"
            alt="Intérieur élégant du restaurant Le Comptoir du Lac"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A0808] via-[#1A0808]/90 to-[#1A0808]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A0808] via-transparent to-[#1A0808]/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="max-w-2xl">
            <div className="w-16 h-px bg-amber-500 mb-8" />
            <p className="text-amber-400/80 text-sm tracking-[0.3em] uppercase mb-6">
              Restaurant Gastronomique
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] tracking-tight">
              L&apos;art de la
              <br />
              <span className="text-amber-400">table</span> au bord
              <br />
              du lac
            </h1>
            <p className="mt-8 text-lg text-amber-100/50 max-w-lg leading-relaxed">
              Une cuisine raffinée mettant en valeur les produits du terroir
              vaudois, dans un cadre exceptionnel face au Léman.
            </p>
            <div className="mt-12 flex flex-wrap gap-5">
              <a
                href="#reservation"
                className="inline-flex items-center px-9 py-4 rounded-full bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors duration-300 shadow-lg shadow-amber-500/20"
              >
                Réserver une table
              </a>
              <a
                href="#carte"
                className="inline-flex items-center px-9 py-4 rounded-full border border-amber-400/30 text-amber-200 font-semibold hover:border-amber-400 hover:text-amber-100 transition-all duration-300"
              >
                Découvrir la carte
              </a>
            </div>
            <div className="mt-20 flex items-center gap-10">
              <div>
                <p className="text-3xl font-serif font-bold text-amber-400">15</p>
                <p className="text-xs text-amber-200/40 mt-1 tracking-wide">Gault&Millau 2026</p>
              </div>
              <div className="w-px h-10 bg-amber-800/30" />
              <div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-amber-200/40 mt-1 tracking-wide">4.8 sur Google</p>
              </div>
              <div className="w-px h-10 bg-amber-800/30" />
              <div>
                <p className="text-3xl font-serif font-bold text-amber-400">2018</p>
                <p className="text-xs text-amber-200/40 mt-1 tracking-wide">Depuis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophie / Intro */}
      <section className="py-24 sm:py-32 bg-[#FDFAF5]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="w-12 h-px bg-amber-400 mx-auto mb-8" />
          <p className="text-amber-600/80 text-sm tracking-[0.3em] uppercase mb-6">
            Notre philosophie
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 leading-snug">
            Des produits d&apos;exception,
            <br />
            une cuisine de saison
          </h2>
          <p className="mt-8 text-gray-500 leading-relaxed max-w-2xl mx-auto text-lg">
            Chaque matin, nous sélectionnons les meilleurs produits du marché
            et des producteurs locaux. Notre carte évolue au fil des saisons
            pour vous offrir le meilleur du terroir vaudois, sublimé par
            une technique gastronomique maîtrisée.
          </p>
        </div>
      </section>

      {/* Menu du jour */}
      <section id="menu-du-jour" className="py-24 sm:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-amber-400 mx-auto mb-8" />
            <p className="text-amber-600/80 text-sm tracking-[0.3em] uppercase mb-4">
              Fraîcheur du marché
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              Menu du Jour
            </h2>
            <p className="mt-4 text-gray-400 text-sm">
              Renouvelé chaque jour selon les arrivages
            </p>
          </div>
          <div className="bg-[#FDFAF5] rounded-2xl border border-amber-100/80 p-10 sm:p-14">
            <div className="text-center mb-12">
              <p className="text-sm text-amber-600/70 font-medium uppercase tracking-widest">
                Jeudi 3 avril 2026
              </p>
              <div className="w-12 h-px bg-amber-300/50 mx-auto mt-5" />
            </div>
            <div className="space-y-12">
              <div className="text-center">
                <p className="text-[11px] text-amber-500/80 uppercase tracking-[0.3em] mb-3">
                  Entrée
                </p>
                <h3 className="text-xl font-serif text-gray-900 font-medium">
                  Tartare de féra du Léman
                </h3>
                <p className="text-gray-400 mt-2 text-sm">
                  Agrumes, aneth frais, crème légère au raifort
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-6 h-px bg-amber-200" />
              </div>
              <div className="text-center">
                <p className="text-[11px] text-amber-500/80 uppercase tracking-[0.3em] mb-3">
                  Plat
                </p>
                <h3 className="text-xl font-serif text-gray-900 font-medium">
                  Filet de veau de la Gruyère
                </h3>
                <p className="text-gray-400 mt-2 text-sm">
                  Jus corsé, mousseline de céleri, légumes de saison
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-6 h-px bg-amber-200" />
              </div>
              <div className="text-center">
                <p className="text-[11px] text-amber-500/80 uppercase tracking-[0.3em] mb-3">
                  Dessert
                </p>
                <h3 className="text-xl font-serif text-gray-900 font-medium">
                  Tarte aux pommes tiède
                </h3>
                <p className="text-gray-400 mt-2 text-sm">
                  Glace vanille bourbon, caramel au beurre salé
                </p>
              </div>
            </div>
            <div className="text-center mt-14 pt-10 border-t border-amber-100/80">
              <p className="text-3xl font-serif font-bold text-gray-900">
                CHF 68.—
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Menu 3 plats, boissons non comprises
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* La Carte */}
      <section id="carte" className="py-24 sm:py-32 bg-[#FDFAF5]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-12 h-px bg-amber-400 mx-auto mb-8" />
            <p className="text-amber-600/80 text-sm tracking-[0.3em] uppercase mb-4">
              Notre sélection
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              La Carte
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
            {/* Entrées */}
            <div>
              <h3 className="text-base font-serif font-bold text-gray-900 mb-8 pb-4 border-b border-amber-200/60 tracking-wide uppercase text-sm">
                Entrées
              </h3>
              <div className="space-y-7">
                {[
                  {
                    name: "Tartare de féra du Léman",
                    desc: "Agrumes, aneth, crème au raifort",
                    price: "24",
                  },
                  {
                    name: "Foie gras de canard mi-cuit",
                    desc: "Chutney de figues, brioche maison",
                    price: "32",
                  },
                  {
                    name: "Velouté de potimarron",
                    desc: "Huile de noisette, chips de lard",
                    price: "18",
                  },
                  {
                    name: "Salade de chèvre chaud",
                    desc: "Miel de lavande, noix caramélisées",
                    price: "22",
                  },
                ].map((item) => (
                  <div key={item.name} className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                    </div>
                    <span className="text-amber-700/80 font-semibold whitespace-nowrap text-sm">
                      {item.price}.—
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Plats */}
            <div>
              <h3 className="text-base font-serif font-bold text-gray-900 mb-8 pb-4 border-b border-amber-200/60 tracking-wide uppercase text-sm">
                Plats
              </h3>
              <div className="space-y-7">
                {[
                  {
                    name: "Filet de boeuf Simmental",
                    desc: "Sauce au poivre, gratin dauphinois",
                    price: "52",
                  },
                  {
                    name: "Filet de perche du lac",
                    desc: "Beurre meunière, pommes vapeur",
                    price: "42",
                  },
                  {
                    name: "Risotto aux cèpes",
                    desc: "Parmesan 24 mois, roquette",
                    price: "38",
                  },
                  {
                    name: "Magret de canard",
                    desc: "Sauce aux cerises, polenta crémeuse",
                    price: "46",
                  },
                ].map((item) => (
                  <div key={item.name} className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                    </div>
                    <span className="text-amber-700/80 font-semibold whitespace-nowrap text-sm">
                      {item.price}.—
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Desserts */}
            <div>
              <h3 className="text-base font-serif font-bold text-gray-900 mb-8 pb-4 border-b border-amber-200/60 tracking-wide uppercase text-sm">
                Desserts
              </h3>
              <div className="space-y-7">
                {[
                  {
                    name: "Crème brûlée à la vanille",
                    desc: "Vanille de Madagascar",
                    price: "16",
                  },
                  {
                    name: "Fondant au chocolat",
                    desc: "Coeur coulant, glace vanille",
                    price: "18",
                  },
                  {
                    name: "Assiette de fromages affinés",
                    desc: "Sélection du maître fromager",
                    price: "22",
                  },
                ].map((item) => (
                  <div key={item.name} className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                    </div>
                    <span className="text-amber-700/80 font-semibold whitespace-nowrap text-sm">
                      {item.price}.—
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Vins */}
            <div>
              <h3 className="text-base font-serif font-bold text-gray-900 mb-8 pb-4 border-b border-amber-200/60 tracking-wide uppercase text-sm">
                Vins au verre
              </h3>
              <div className="space-y-7">
                {[
                  {
                    name: "Chasselas AOC Lavaux",
                    desc: "Domaine Louis Bovard, 2024",
                    price: "8",
                  },
                  {
                    name: "Pinot Noir AOC Vaud",
                    desc: "Domaine de la Ville, 2023",
                    price: "9",
                  },
                  {
                    name: "Rosé de Gamay",
                    desc: "Cave de la Côte, 2024",
                    price: "7",
                  },
                ].map((item) => (
                  <div key={item.name} className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                    </div>
                    <span className="text-amber-700/80 font-semibold whitespace-nowrap text-sm">
                      {item.price}.—
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section id="galerie" className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-amber-400 mx-auto mb-8" />
            <p className="text-amber-600/80 text-sm tracking-[0.3em] uppercase mb-4">
              Notre univers
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              Galerie
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { img: "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=800&q=80", label: "La salle principale", aspect: "aspect-[4/3]" },
              { img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", label: "Ambiance chaleureuse", aspect: "aspect-square" },
              { img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", label: "Nos créations", aspect: "aspect-square" },
              { img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80", label: "Produits du terroir", aspect: "aspect-square" },
              { img: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80", label: "Vue sur le lac", aspect: "aspect-square" },
              { img: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", label: "La terrasse", aspect: "aspect-[4/3]" },
            ].map((item, i) => (
              <div
                key={i}
                className={`${item.aspect} rounded-xl overflow-hidden relative group cursor-pointer`}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <p className="text-white text-sm font-medium">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réservation */}
      <section id="reservation" className="py-24 sm:py-32 bg-[#1A0808]">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <div className="w-12 h-px bg-amber-500 mx-auto mb-8" />
            <p className="text-amber-400/70 text-sm tracking-[0.3em] uppercase mb-4">
              Votre table vous attend
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Réserver une table
            </h2>
            <p className="mt-5 text-amber-200/40 max-w-xl mx-auto">
              Pour toute réservation, veuillez nous contacter par téléphone ou
              via le formulaire ci-dessous.
            </p>
          </div>
          <div className="bg-white/[0.03] backdrop-blur-sm border border-amber-500/10 rounded-2xl p-8 sm:p-12">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-amber-200/80 mb-2.5">
                  Nom
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-amber-500/15 text-white placeholder-amber-300/30 focus:outline-none focus:border-amber-400/50 transition-colors duration-300"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-amber-200/80 mb-2.5">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-amber-500/15 text-white placeholder-amber-300/30 focus:outline-none focus:border-amber-400/50 transition-colors duration-300"
                  placeholder="+41 21 000 00 00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-amber-200/80 mb-2.5">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-amber-500/15 text-white focus:outline-none focus:border-amber-400/50 transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-amber-200/80 mb-2.5">
                  Nombre de personnes
                </label>
                <select className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-amber-500/15 text-white focus:outline-none focus:border-amber-400/50 transition-colors duration-300">
                  <option value="2">2 personnes</option>
                  <option value="3">3 personnes</option>
                  <option value="4">4 personnes</option>
                  <option value="5">5 personnes</option>
                  <option value="6">6 personnes</option>
                  <option value="7">7+ personnes</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-amber-200/80 mb-2.5">
                Message (optionnel)
              </label>
              <textarea
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-amber-500/15 text-white placeholder-amber-300/30 focus:outline-none focus:border-amber-400/50 transition-colors duration-300 h-28 resize-none"
                placeholder="Allergies, occasion spéciale, demandes particulières..."
              />
            </div>
            <div className="mt-10 text-center">
              <button className="px-10 py-4 rounded-full bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors duration-300 shadow-lg shadow-amber-500/20">
                Envoyer la demande
              </button>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-amber-200/40 text-sm">
              Ou appelez-nous directement au{" "}
              <a
                href="tel:+41216012345"
                className="text-amber-400 font-semibold hover:underline"
              >
                +41 21 601 23 45
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Horaires & Localisation */}
      <section id="horaires" className="py-24 sm:py-32 bg-[#FDFAF5]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
            <div>
              <div className="w-12 h-px bg-amber-400 mb-8" />
              <p className="text-amber-600/80 text-sm tracking-[0.3em] uppercase mb-4">
                Quand nous rendre visite
              </p>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-10">
                Horaires d&apos;ouverture
              </h2>
              <div className="space-y-3">
                {[
                  { day: "Lundi", hours: "Fermé" },
                  { day: "Mardi", hours: "11h30 – 14h00 / 18h30 – 22h00" },
                  { day: "Mercredi", hours: "11h30 – 14h00 / 18h30 – 22h00" },
                  { day: "Jeudi", hours: "11h30 – 14h00 / 18h30 – 22h00" },
                  { day: "Vendredi", hours: "11h30 – 14h00 / 18h30 – 23h00" },
                  { day: "Samedi", hours: "18h30 – 23h00" },
                  { day: "Dimanche", hours: "11h30 – 15h00 (brunch)" },
                ].map((item) => (
                  <div
                    key={item.day}
                    className={`flex justify-between py-3.5 px-5 rounded-lg text-sm ${
                      item.hours === "Fermé"
                        ? "bg-red-50/80 text-red-400"
                        : "bg-white text-gray-500"
                    }`}
                  >
                    <span className="font-medium text-gray-900">{item.day}</span>
                    <span>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
            <div id="contact">
              <div className="w-12 h-px bg-amber-400 mb-8" />
              <p className="text-amber-600/80 text-sm tracking-[0.3em] uppercase mb-4">
                Nous trouver
              </p>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-10">
                Localisation
              </h2>
              <div className="bg-white rounded-2xl border border-amber-100/80 p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Adresse</p>
                      <p className="text-gray-500 text-sm mt-1">
                        Quai d&apos;Ouchy 12
                        <br />
                        1006 Lausanne
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Téléphone</p>
                      <p className="text-gray-500 text-sm mt-1">+41 21 601 23 45</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Email</p>
                      <p className="text-gray-500 text-sm mt-1">
                        info@lecomptoirdulac.ch
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Parking</p>
                      <p className="text-gray-500 text-sm mt-1">
                        Parking d&apos;Ouchy à 50m (payant)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 h-48 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80"
                  alt="Ambiance chaleureuse du restaurant avec vue sur le lac"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#110505] text-amber-200/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-lg">
                  C
                </div>
                <span className="text-xl font-serif font-bold text-amber-100">
                  Le Comptoir du Lac
                </span>
              </div>
              <p className="text-sm leading-relaxed">
                Restaurant gastronomique au bord du Léman. Une cuisine raffinée
                célébrant les saveurs du terroir vaudois depuis 2018.
              </p>
            </div>
            <div>
              <h4 className="text-amber-100 font-semibold mb-5 text-sm tracking-wide uppercase">Navigation</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#menu-du-jour" className="hover:text-amber-300 transition-colors duration-300">
                    Menu du Jour
                  </a>
                </li>
                <li>
                  <a href="#carte" className="hover:text-amber-300 transition-colors duration-300">
                    La Carte
                  </a>
                </li>
                <li>
                  <a href="#galerie" className="hover:text-amber-300 transition-colors duration-300">
                    Galerie
                  </a>
                </li>
                <li>
                  <a href="#reservation" className="hover:text-amber-300 transition-colors duration-300">
                    Réservation
                  </a>
                </li>
                <li>
                  <a href="#horaires" className="hover:text-amber-300 transition-colors duration-300">
                    Horaires
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-amber-100 font-semibold mb-5 text-sm tracking-wide uppercase">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li>Quai d&apos;Ouchy 12, 1006 Lausanne</li>
                <li>+41 21 601 23 45</li>
                <li>info@lecomptoirdulac.ch</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-amber-900/20 mt-16 pt-8 text-sm text-center text-amber-200/30">
            <p>
              &copy; {new Date().getFullYear()} Le Comptoir du Lac — Tous droits
              réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
