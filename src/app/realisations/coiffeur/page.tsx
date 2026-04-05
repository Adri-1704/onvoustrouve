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
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-300 to-rose-500 flex items-center justify-center text-white font-bold text-lg font-serif italic">
                E
              </div>
              <div>
                <span className="text-xl font-serif font-bold text-gray-900 tracking-wide">
                  Salon Élégance
                </span>
                <p className="text-[11px] text-rose-400/70 tracking-[0.25em] uppercase">
                  Genève
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-10 text-sm text-gray-500">
              <a href="#services" className="hover:text-rose-500 transition-colors duration-300">
                Services
              </a>
              <a href="#equipe" className="hover:text-rose-500 transition-colors duration-300">
                L&apos;Équipe
              </a>
              <a href="#galerie" className="hover:text-rose-500 transition-colors duration-300">
                Galerie
              </a>
              <a href="#avis" className="hover:text-rose-500 transition-colors duration-300">
                Avis
              </a>
              <a href="#contact" className="hover:text-rose-500 transition-colors duration-300">
                Contact
              </a>
            </div>
            <a
              href="#rdv"
              className="hidden sm:inline-flex items-center px-7 py-2.5 rounded-full bg-rose-500 text-white text-sm font-semibold hover:bg-rose-600 transition-colors duration-300 shadow-lg shadow-rose-500/20"
            >
              Prendre RDV
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FDF8F6] min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/80 via-transparent to-amber-50/50" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-rose-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-100/20 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="w-12 h-px bg-rose-400 mb-8" />
              <p className="text-rose-500/80 text-sm tracking-[0.3em] uppercase mb-6">
                Salon haut de gamme depuis 2015
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-gray-900 leading-[1.1]">
                Révélez votre
                <br />
                <span className="text-rose-500">beauté</span>
                <br />
                naturelle
              </h1>
              <p className="mt-8 text-lg text-gray-500 max-w-lg leading-relaxed">
                Un espace dédié à votre bien-être au coeur de Genève. Nos
                experts subliment votre style avec passion et savoir-faire.
              </p>
              <div className="mt-12 flex flex-wrap gap-5">
                <a
                  href="#rdv"
                  className="inline-flex items-center px-9 py-4 rounded-full bg-rose-500 text-white font-semibold hover:bg-rose-600 transition-colors duration-300 shadow-lg shadow-rose-500/20"
                >
                  Prendre rendez-vous
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center px-9 py-4 rounded-full border border-rose-200 text-rose-600 font-semibold hover:border-rose-400 transition-colors duration-300"
                >
                  Nos services
                </a>
              </div>
              <div className="mt-20 flex items-center gap-10">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">9+</p>
                  <p className="text-xs text-gray-400 mt-1">Années d&apos;expérience</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">5k+</p>
                  <p className="text-xs text-gray-400 mt-1">Clientes satisfaites</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">4.9</p>
                  <p className="text-xs text-gray-400 mt-1">Note Google</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl shadow-rose-200/40">
                  <img
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
                    alt="Intérieur moderne du Salon Élégance"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-rose-100/50">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-rose-500">-15%</p>
                    <p className="text-xs text-gray-500 mt-1">1re visite</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Tarifs */}
      <section id="services" className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-12 h-px bg-rose-400 mx-auto mb-8" />
            <p className="text-rose-500/80 text-sm tracking-[0.3em] uppercase mb-4">
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
                subtitle: "Expertise et precision",
                items: [
                  { name: "Coupe femme", price: "CHF 85.—" },
                  { name: "Coupe homme", price: "CHF 55.—" },
                  { name: "Coupe enfant (-12 ans)", price: "CHF 35.—" },
                  { name: "Coupe + brushing", price: "CHF 110.—" },
                  { name: "Brushing seul", price: "CHF 55.—" },
                ],
                accent: "rose",
              },
              {
                title: "Colorations",
                subtitle: "Couleurs sur mesure",
                items: [
                  { name: "Coloration complète", price: "CHF 120.—" },
                  { name: "Mèches / Balayage", price: "CHF 150.—" },
                  { name: "Ombré hair", price: "CHF 180.—" },
                  { name: "Retouche racines", price: "CHF 75.—" },
                  { name: "Toner / Gloss", price: "CHF 60.—" },
                ],
                accent: "amber",
              },
              {
                title: "Soins",
                subtitle: "Revitalisation intense",
                items: [
                  { name: "Soin profond Kérastase", price: "CHF 45.—" },
                  { name: "Lissage brésilien", price: "CHF 350.—" },
                  { name: "Traitement anti-chute", price: "CHF 65.—" },
                  { name: "Massage crânien", price: "CHF 30.—" },
                  { name: "Soin botox capillaire", price: "CHF 90.—" },
                ],
                accent: "purple",
              },
            ].map((category) => (
              <div
                key={category.title}
                className="bg-[#FDF8F6] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              >
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-1">
                  {category.title}
                </h3>
                <p className="text-xs text-rose-400/70 tracking-wide uppercase mb-8">
                  {category.subtitle}
                </p>
                <div className="space-y-5">
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
      <section id="galerie" className="py-24 sm:py-32 bg-[#FDF8F6]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-rose-400 mx-auto mb-8" />
            <p className="text-rose-500/80 text-sm tracking-[0.3em] uppercase mb-4">
              Nos réalisations
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              Galerie
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Balayage blond", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80", span: "" },
              { label: "Coupe courte moderne", img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80", span: "row-span-2" },
              { label: "Coloration cuivré", img: "https://images.unsplash.com/photo-1633681926035-ec1ac984418a?w=800&q=80", span: "" },
              { label: "Chignon de mariée", img: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80", span: "" },
              { label: "Ombré hair", img: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80", span: "" },
              { label: "Coupe homme tendance", img: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80", span: "" },
            ].map((item, i) => (
              <div
                key={i}
                className={`${item.span} aspect-square rounded-xl overflow-hidden relative group cursor-pointer`}
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

      {/* Équipe */}
      <section id="equipe" className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-12 h-px bg-rose-400 mx-auto mb-8" />
            <p className="text-rose-500/80 text-sm tracking-[0.3em] uppercase mb-4">
              Des experts passionnés
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              Notre Équipe
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
                <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-rose-100 to-rose-200/60 border-2 border-white shadow-lg flex items-center justify-center mb-6 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                  <span className="text-3xl text-rose-300 font-serif">
                    {member.name[0]}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-rose-500 text-sm mt-1">{member.role}</p>
                <p className="text-gray-400 text-xs mt-2">{member.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avis Clients */}
      <section id="avis" className="py-24 sm:py-32 bg-[#FDF8F6]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-rose-400 mx-auto mb-8" />
            <p className="text-rose-500/80 text-sm tracking-[0.3em] uppercase mb-4">
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
                className="bg-white rounded-2xl p-8 border border-rose-100/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: review.stars }).map((_, i) => (
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
                <p className="text-gray-600 leading-relaxed text-sm mb-8">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex justify-between items-end pt-6 border-t border-gray-100">
                  <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prise de RDV */}
      <section id="rdv" className="py-24 sm:py-32 bg-rose-500">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="w-12 h-px bg-white/40 mx-auto mb-8" />
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Prenez rendez-vous
          </h2>
          <p className="mt-5 text-lg text-rose-100/80 max-w-xl mx-auto">
            Réservez votre créneau en ligne ou appelez-nous. Nous vous accueillons
            du mardi au samedi.
          </p>
          <div className="mt-12 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-8 sm:p-12">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2.5 text-left">
                  Nom complet
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-rose-200/40 focus:outline-none focus:border-white/40 transition-colors duration-300"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2.5 text-left">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-rose-200/40 focus:outline-none focus:border-white/40 transition-colors duration-300"
                  placeholder="+41 22 000 00 00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2.5 text-left">
                  Service souhaité
                </label>
                <select className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white focus:outline-none focus:border-white/40 transition-colors duration-300">
                  <option value="">Choisir un service</option>
                  <option value="coupe">Coupe</option>
                  <option value="coloration">Coloration</option>
                  <option value="soin">Soin capillaire</option>
                  <option value="brushing">Brushing</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2.5 text-left">
                  Date souhaitée
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white focus:outline-none focus:border-white/40 transition-colors duration-300"
                />
              </div>
            </div>
            <div className="mt-10">
              <button className="px-10 py-4 rounded-full bg-white text-rose-600 font-semibold hover:bg-rose-50 transition-colors duration-300 shadow-lg">
                Demander un rendez-vous
              </button>
            </div>
          </div>
          <p className="mt-8 text-rose-200/70 text-sm">
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
      <footer id="contact" className="bg-gray-950 text-gray-400">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-300 to-rose-500 flex items-center justify-center text-white font-bold text-lg font-serif italic">
                  E
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
              <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">Horaires</h4>
              <ul className="space-y-3 text-sm">
                <li>Lundi : Fermé</li>
                <li>Mar-Ven : 9h00 – 19h00</li>
                <li>Samedi : 9h00 – 17h00</li>
                <li>Dimanche : Fermé</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li>Rue du Rhône 48, 1204 Genève</li>
                <li>+41 22 345 67 89</li>
                <li>info@salon-elegance.ch</li>
              </ul>
              <div className="flex gap-3 mt-5">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-rose-500 transition-colors duration-300"
                >
                  <span className="text-xs text-white">IG</span>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-rose-500 transition-colors duration-300"
                >
                  <span className="text-xs text-white">FB</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-16 pt-8 text-sm text-center text-gray-500">
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
