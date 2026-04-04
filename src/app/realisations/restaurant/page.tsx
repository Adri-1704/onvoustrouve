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
      <nav className="sticky top-0 z-50 bg-[#2C0A0A]/95 backdrop-blur-sm border-b border-[#5C1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-lg">
                C
              </div>
              <div>
                <span className="text-xl font-serif font-bold text-amber-100 tracking-wide">
                  Le Comptoir du Lac
                </span>
                <p className="text-xs text-amber-300/70 tracking-widest uppercase">
                  Lausanne
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-amber-200/80">
              <a href="#carte" className="hover:text-amber-300 transition-colors">
                La Carte
              </a>
              <a href="#menu-du-jour" className="hover:text-amber-300 transition-colors">
                Menu du Jour
              </a>
              <a href="#horaires" className="hover:text-amber-300 transition-colors">
                Horaires
              </a>
              <a href="#contact" className="hover:text-amber-300 transition-colors">
                Contact
              </a>
            </div>
            <a
              href="#reservation"
              className="hidden sm:inline-flex items-center px-6 py-2.5 rounded-full bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600 transition-colors"
            >
              Réserver une table
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2C0A0A] via-[#4A1515] to-[#1A0505] min-h-[85vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-900/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-amber-400 font-medium tracking-widest uppercase text-sm mb-4">
                Restaurant Gastronomique
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
                L&apos;art de la
                <br />
                <span className="text-amber-400">table</span> au bord
                <br />
                du lac
              </h1>
              <p className="mt-6 text-lg text-amber-100/70 max-w-lg leading-relaxed">
                Une cuisine raffinée mettant en valeur les produits du terroir
                vaudois, dans un cadre exceptionnel face au Léman.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#reservation"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/25"
                >
                  Réserver une table
                </a>
                <a
                  href="#carte"
                  className="inline-flex items-center px-8 py-4 rounded-full border-2 border-amber-400/30 text-amber-200 font-semibold hover:border-amber-400 hover:text-amber-100 transition-colors"
                >
                  Découvrir la carte
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full aspect-[4/5] rounded-3xl border border-amber-500/10 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                    alt="Intérieur élégant du restaurant Le Comptoir du Lac"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#2C0A0A] border border-amber-500/20 rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-1">
                      {[1, 2, 3, 4, 5].map((i) => (
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
                    <div>
                      <p className="text-amber-100 text-sm font-semibold">
                        15 Gault&Millau
                      </p>
                      <p className="text-amber-400/60 text-xs">
                        Guide 2026
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu du jour */}
      <section id="menu-du-jour" className="py-20 sm:py-28 bg-[#FBF7F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-600 font-medium tracking-widest uppercase text-sm mb-3">
              Fraîcheur du marché
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              Menu du Jour
            </h2>
            <p className="mt-3 text-gray-500">
              Renouvelé chaque jour selon les arrivages
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl border border-amber-100 p-8 sm:p-12">
            <div className="text-center mb-10">
              <p className="text-sm text-amber-600 font-medium uppercase tracking-wider">
                Jeudi 3 avril 2026
              </p>
              <div className="w-16 h-px bg-amber-300 mx-auto mt-4" />
            </div>
            <div className="space-y-10">
              <div className="text-center">
                <p className="text-xs text-amber-500 uppercase tracking-widest mb-2">
                  Entrée
                </p>
                <h3 className="text-xl font-serif text-gray-900">
                  Tartare de féra du Léman
                </h3>
                <p className="text-gray-500 mt-1 text-sm">
                  Agrumes, aneth frais, crème légère au raifort
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-8 h-px bg-amber-200" />
              </div>
              <div className="text-center">
                <p className="text-xs text-amber-500 uppercase tracking-widest mb-2">
                  Plat
                </p>
                <h3 className="text-xl font-serif text-gray-900">
                  Filet de veau de la Gruyère
                </h3>
                <p className="text-gray-500 mt-1 text-sm">
                  Jus corsé, mousseline de céleri, légumes de saison
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-8 h-px bg-amber-200" />
              </div>
              <div className="text-center">
                <p className="text-xs text-amber-500 uppercase tracking-widest mb-2">
                  Dessert
                </p>
                <h3 className="text-xl font-serif text-gray-900">
                  Tarte aux pommes tiède
                </h3>
                <p className="text-gray-500 mt-1 text-sm">
                  Glace vanille bourbon, caramel au beurre salé
                </p>
              </div>
            </div>
            <div className="text-center mt-10 pt-8 border-t border-amber-100">
              <p className="text-2xl font-serif font-bold text-gray-900">
                CHF 68.—
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Menu 3 plats, boissons non comprises
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* La Carte */}
      <section id="carte" className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-600 font-medium tracking-widest uppercase text-sm mb-3">
              Notre sélection
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              La Carte
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Entrées */}
            <div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-6 pb-3 border-b-2 border-amber-300">
                Entrées
              </h3>
              <div className="space-y-6">
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
                      <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                    </div>
                    <span className="text-amber-700 font-semibold whitespace-nowrap">
                      {item.price}.—
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Plats */}
            <div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-6 pb-3 border-b-2 border-amber-300">
                Plats
              </h3>
              <div className="space-y-6">
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
                      <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                    </div>
                    <span className="text-amber-700 font-semibold whitespace-nowrap">
                      {item.price}.—
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Desserts */}
            <div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-6 pb-3 border-b-2 border-amber-300">
                Desserts
              </h3>
              <div className="space-y-6">
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
                      <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                    </div>
                    <span className="text-amber-700 font-semibold whitespace-nowrap">
                      {item.price}.—
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Vins */}
            <div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-6 pb-3 border-b-2 border-amber-300">
                Vins au verre
              </h3>
              <div className="space-y-6">
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
                      <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                    </div>
                    <span className="text-amber-700 font-semibold whitespace-nowrap">
                      {item.price}.—
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Réservation */}
      <section id="reservation" className="py-20 sm:py-28 bg-gradient-to-br from-[#2C0A0A] to-[#4A1515]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-400 font-medium tracking-widest uppercase text-sm mb-3">
              Votre table vous attend
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Réserver une table
            </h2>
            <p className="mt-4 text-amber-200/60">
              Pour toute réservation, veuillez nous contacter par téléphone ou
              via le formulaire ci-dessous.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-amber-500/10 rounded-3xl p-8 sm:p-12">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-amber-200 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-amber-500/20 text-white placeholder-amber-300/40 focus:outline-none focus:border-amber-400"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-amber-200 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-amber-500/20 text-white placeholder-amber-300/40 focus:outline-none focus:border-amber-400"
                  placeholder="+41 21 000 00 00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-amber-200 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-amber-500/20 text-white focus:outline-none focus:border-amber-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-amber-200 mb-2">
                  Nombre de personnes
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-white/10 border border-amber-500/20 text-white focus:outline-none focus:border-amber-400">
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
              <label className="block text-sm font-medium text-amber-200 mb-2">
                Message (optionnel)
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-amber-500/20 text-white placeholder-amber-300/40 focus:outline-none focus:border-amber-400 h-28 resize-none"
                placeholder="Allergies, occasion spéciale, demandes particulières..."
              />
            </div>
            <div className="mt-8 text-center">
              <button className="px-10 py-4 rounded-full bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/25">
                Envoyer la demande
              </button>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-amber-200/60 text-sm">
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
      <section id="horaires" className="py-20 sm:py-28 bg-[#FBF7F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-amber-600 font-medium tracking-widest uppercase text-sm mb-3">
                Quand nous rendre visite
              </p>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
                Horaires d&apos;ouverture
              </h2>
              <div className="space-y-4">
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
                    className={`flex justify-between py-3 px-4 rounded-xl ${
                      item.hours === "Fermé"
                        ? "bg-red-50 text-red-400"
                        : "bg-white text-gray-600"
                    }`}
                  >
                    <span className="font-medium text-gray-900">{item.day}</span>
                    <span>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
            <div id="contact">
              <p className="text-amber-600 font-medium tracking-widest uppercase text-sm mb-3">
                Nous trouver
              </p>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
                Localisation
              </h2>
              <div className="bg-white rounded-3xl shadow-lg border border-amber-100 p-8">
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Adresse</p>
                      <p className="text-gray-600 text-sm">
                        Quai d&apos;Ouchy 12
                        <br />
                        1006 Lausanne
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Téléphone</p>
                      <p className="text-gray-600 text-sm">+41 21 601 23 45</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600 text-sm">
                        info@lecomptoirdulac.ch
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-8 4h4m4 4H8m8-8V5a2 2 0 00-2-2H6a2 2 0 00-2 2v14l4-2 4 2 4-2 4 2V5a2 2 0 00-2-2h-2" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Parking</p>
                      <p className="text-gray-600 text-sm">
                        Parking d&apos;Ouchy à 50m (payant)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Map placeholder */}
              <div className="mt-6 h-48 rounded-2xl border border-amber-200 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80"
                  alt="Ambiance chaleureuse du restaurant avec vue sur le lac"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A0505] text-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
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
              <h4 className="text-amber-100 font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#menu-du-jour" className="hover:text-amber-300 transition-colors">
                    Menu du Jour
                  </a>
                </li>
                <li>
                  <a href="#carte" className="hover:text-amber-300 transition-colors">
                    La Carte
                  </a>
                </li>
                <li>
                  <a href="#reservation" className="hover:text-amber-300 transition-colors">
                    Réservation
                  </a>
                </li>
                <li>
                  <a href="#horaires" className="hover:text-amber-300 transition-colors">
                    Horaires
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-amber-100 font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Quai d&apos;Ouchy 12, 1006 Lausanne</li>
                <li>+41 21 601 23 45</li>
                <li>info@lecomptoirdulac.ch</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-amber-900/30 mt-12 pt-8 text-sm text-center">
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
