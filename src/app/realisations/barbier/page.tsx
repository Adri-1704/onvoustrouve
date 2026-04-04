import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Barber House | Barbershop Premium - Lausanne",
  description:
    "Barbershop premium au coeur de Lausanne. Coupes, barbes, rasages traditionnels. Prenez rendez-vous en ligne.",
};

export default function BarbierDemo() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 font-sans">
      {/* Bandeau démo */}
      <div className="bg-amber-600 text-white text-center text-sm py-2 px-4">
        Ceci est une démonstration{" "}
        <Link href="/" className="underline font-semibold hover:text-amber-200">
          OnVousTrouve.ch
        </Link>{" "}
        — Ce site n&apos;est pas réel
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-neutral-950/95 backdrop-blur-sm border-b border-amber-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-neutral-950 font-black text-xl tracking-tighter">
                BH
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-wide uppercase">
                  Barber House
                </span>
                <p className="text-xs text-amber-500 tracking-[0.3em] uppercase">
                  Lausanne
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
              <a href="#services" className="hover:text-amber-500 transition-colors">
                Services
              </a>
              <a href="#equipe" className="hover:text-amber-500 transition-colors">
                L&apos;Équipe
              </a>
              <a href="#galerie" className="hover:text-amber-500 transition-colors">
                Galerie
              </a>
              <a href="#avis" className="hover:text-amber-500 transition-colors">
                Avis
              </a>
              <a href="#contact" className="hover:text-amber-500 transition-colors">
                Contact
              </a>
            </div>
            <a
              href="#rdv"
              className="hidden sm:inline-flex items-center px-6 py-2.5 rounded-lg bg-amber-600 text-white text-sm font-bold uppercase tracking-wider hover:bg-amber-500 transition-colors"
            >
              Réserver
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-neutral-950 min-h-[85vh] flex items-center">
        {/* Texture de fond */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/20 via-neutral-950 to-neutral-950" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-72 h-72 bg-amber-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-800/5 rounded-full blur-3xl" />
        </div>
        {/* Lignes décoratives verticales */}
        <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-amber-900/20 to-transparent" />
        <div className="absolute right-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-amber-900/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-amber-800/50 text-amber-500 text-xs font-bold tracking-[0.25em] uppercase mb-8">
                <span className="w-8 h-px bg-amber-600" />
                Barbershop premium
                <span className="w-8 h-px bg-amber-600" />
              </div>
              <h1 className="text-5xl sm:text-7xl font-black text-white leading-[0.9] uppercase tracking-tight">
                Le style
                <br />
                au <span className="text-amber-500">masculin</span>
              </h1>
              <p className="mt-8 text-lg text-neutral-400 max-w-lg leading-relaxed">
                Un espace dédié aux hommes exigeants, au coeur de Lausanne.
                Coupes précises, rasages traditionnels et soins de barbe
                dans une ambiance authentique.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#rdv"
                  className="inline-flex items-center px-8 py-4 bg-amber-600 text-white font-bold uppercase tracking-wider hover:bg-amber-500 transition-colors"
                >
                  Prendre rendez-vous
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center px-8 py-4 border-2 border-neutral-700 text-neutral-300 font-bold uppercase tracking-wider hover:border-amber-600 hover:text-amber-500 transition-colors"
                >
                  Nos prestations
                </a>
              </div>
              <div className="mt-14 flex items-center gap-10">
                <div>
                  <p className="text-4xl font-black text-amber-500">12+</p>
                  <p className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">Ans d&apos;expérience</p>
                </div>
                <div className="w-px h-12 bg-neutral-800" />
                <div>
                  <p className="text-4xl font-black text-amber-500">8k+</p>
                  <p className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">Clients fidèles</p>
                </div>
                <div className="w-px h-12 bg-neutral-800" />
                <div>
                  <p className="text-4xl font-black text-amber-500">4.9</p>
                  <p className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">Note Google</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full aspect-[3/4] border border-neutral-800 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80" alt="Barber House Lausanne" className="w-full h-full object-cover" />
                  {/* Cadre doré décoratif */}
                  <div className="absolute inset-3 border border-amber-800/30 pointer-events-none" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-3xl font-black text-white">-20%</p>
                    <p className="text-xs text-amber-200 uppercase tracking-wider">1re visite</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Tarifs */}
      <section id="services" className="py-20 sm:py-28 bg-neutral-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">
              Nos prestations
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wide">
              Services & Tarifs
            </h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Coupes",
                icon: "✂️",
                items: [
                  { name: "Coupe classique", price: "CHF 45.—" },
                  { name: "Coupe + coiffage", price: "CHF 55.—" },
                  { name: "Coupe dégradé / fade", price: "CHF 50.—" },
                  { name: "Coupe jeune (-16 ans)", price: "CHF 35.—" },
                  { name: "Tonte complète", price: "CHF 30.—" },
                ],
              },
              {
                title: "Barbe",
                icon: "🪒",
                items: [
                  { name: "Taille de barbe", price: "CHF 30.—" },
                  { name: "Rasage traditionnel", price: "CHF 45.—" },
                  { name: "Rasage serviette chaude", price: "CHF 55.—" },
                  { name: "Soin barbe premium", price: "CHF 40.—" },
                  { name: "Coloration barbe", price: "CHF 35.—" },
                ],
              },
              {
                title: "Forfaits",
                icon: "⭐",
                items: [
                  { name: "Coupe + barbe", price: "CHF 70.—" },
                  { name: "Coupe + rasage luxe", price: "CHF 90.—" },
                  { name: "Le Complet (tout inclus)", price: "CHF 110.—" },
                  { name: "Forfait père & fils", price: "CHF 75.—" },
                  { name: "Abonnement mensuel", price: "CHF 120.—/mois" },
                ],
              },
              {
                title: "Soins",
                icon: "🧴",
                items: [
                  { name: "Soin visage homme", price: "CHF 50.—" },
                  { name: "Gommage & masque", price: "CHF 45.—" },
                  { name: "Massage crânien", price: "CHF 25.—" },
                  { name: "Traitement antipelliculaire", price: "CHF 35.—" },
                  { name: "Teinture cheveux", price: "CHF 40.—" },
                ],
              },
            ].map((category) => (
              <div
                key={category.title}
                className="bg-neutral-950 border border-neutral-800 p-6 hover:border-amber-800/50 transition-colors group"
              >
                <div className="text-3xl mb-3 grayscale group-hover:grayscale-0 transition-all">{category.icon}</div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-5">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex justify-between items-baseline gap-2"
                    >
                      <span className="text-sm text-neutral-400">{item.name}</span>
                      <span className="text-sm font-bold text-amber-500 whitespace-nowrap">
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

      {/* Équipe */}
      <section id="equipe" className="py-20 sm:py-28 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">
              Les artisans du style
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wide">
              Nos Barbiers
            </h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto mt-6" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Marco Ribeiro",
                role: "Fondateur & Master Barber",
                exp: "15 ans d'expérience",
                specialty: "Dégradés & rasages traditionnels",
              },
              {
                name: "Youssef Amrani",
                role: "Barbier Senior",
                exp: "10 ans d'expérience",
                specialty: "Tailles de barbe & soins",
              },
              {
                name: "Luca Fontana",
                role: "Barbier & Styliste",
                exp: "7 ans d'expérience",
                specialty: "Coupes tendance & fades",
              },
            ].map((member) => (
              <div key={member.name} className="group">
                <div className="aspect-[3/4] bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-800 group-hover:border-amber-800/50 transition-colors flex items-center justify-center mb-5 relative overflow-hidden">
                  <span className="text-6xl text-neutral-700 font-black uppercase">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                  <div className="absolute inset-3 border border-neutral-700/30 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-neutral-950 to-transparent" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                  {member.name}
                </h3>
                <p className="text-amber-500 text-sm font-semibold mt-1">{member.role}</p>
                <p className="text-neutral-500 text-xs mt-1">{member.exp}</p>
                <p className="text-neutral-600 text-xs mt-1 italic">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie de styles */}
      <section id="galerie" className="py-20 sm:py-28 bg-neutral-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">
              Notre savoir-faire
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wide">
              Galerie de Styles
            </h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Fade classique", img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80" },
              { label: "Barbe sculptée", img: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80" },
              { label: "Pompadour moderne", img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80" },
              { label: "Rasage au coupe-chou", img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80" },
              { label: "Undercut texturé", img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80" },
              { label: "Buzz cut design", img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80" },
            ].map((item, i) => (
              <div
                key={i}
                className="aspect-square border border-neutral-800 hover:border-amber-700/50 overflow-hidden transition-all cursor-pointer group relative"
              >
                <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <p className="text-white/80 group-hover:text-amber-500 text-sm text-center px-4 uppercase tracking-wider font-semibold transition-colors">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avis Clients */}
      <section id="avis" className="py-20 sm:py-28 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">
              Ils nous font confiance
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wide">
              Avis Clients
            </h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "David L.",
                text: "Le meilleur barbershop de Lausanne, sans hésiter. Marco est un artiste du rasage. Ambiance au top, résultat impeccable. J'y vais chaque mois.",
                stars: 5,
                date: "Mars 2026",
              },
              {
                name: "Sébastien R.",
                text: "Enfin un vrai barbier qui comprend ce que tu veux. Youssef a sculpté ma barbe comme jamais. Le soin serviette chaude, c'est un must !",
                stars: 5,
                date: "Février 2026",
              },
              {
                name: "Nicolas P.",
                text: "J'ai emmené mon fils pour sa première coupe chez un barbier. Luca a été génial avec lui. Le forfait père & fils est une super idée. On revient !",
                stars: 5,
                date: "Janvier 2026",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-neutral-900 border border-neutral-800 p-8 hover:border-amber-800/40 transition-colors"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-amber-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-neutral-300 leading-relaxed text-sm italic mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex justify-between items-end">
                  <p className="font-bold text-white">{review.name}</p>
                  <p className="text-xs text-neutral-600">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prise de RDV */}
      <section id="rdv" className="py-20 sm:py-28 bg-gradient-to-br from-amber-700 to-amber-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wide">
            Réservez votre créneau
          </h2>
          <p className="mt-4 text-lg text-amber-100/80 max-w-2xl mx-auto">
            Prenez rendez-vous en ligne ou passez directement au shop.
            Ouvert du mardi au samedi.
          </p>
          <div className="mt-10 bg-black/20 backdrop-blur-sm border border-white/10 p-8 sm:p-12">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-amber-100 mb-2 text-left uppercase tracking-wider">
                  Nom complet
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-black/20 border border-white/15 text-white placeholder-amber-200/30 focus:outline-none focus:border-amber-400/50"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-amber-100 mb-2 text-left uppercase tracking-wider">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-black/20 border border-white/15 text-white placeholder-amber-200/30 focus:outline-none focus:border-amber-400/50"
                  placeholder="+41 21 000 00 00"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-amber-100 mb-2 text-left uppercase tracking-wider">
                  Prestation
                </label>
                <select className="w-full px-4 py-3 bg-black/20 border border-white/15 text-white focus:outline-none focus:border-amber-400/50">
                  <option value="">Choisir une prestation</option>
                  <option value="coupe">Coupe</option>
                  <option value="barbe">Taille de barbe</option>
                  <option value="rasage">Rasage traditionnel</option>
                  <option value="forfait">Forfait coupe + barbe</option>
                  <option value="complet">Le Complet</option>
                  <option value="soin">Soin visage</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-amber-100 mb-2 text-left uppercase tracking-wider">
                  Date souhaitée
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-black/20 border border-white/15 text-white focus:outline-none focus:border-amber-400/50"
                />
              </div>
            </div>
            <div className="mt-8">
              <button className="px-10 py-4 bg-white text-neutral-900 font-black uppercase tracking-wider hover:bg-amber-100 transition-colors">
                Réserver maintenant
              </button>
            </div>
          </div>
          <p className="mt-6 text-amber-200/60 text-sm">
            Ou appelez-nous au{" "}
            <a
              href="tel:+41216543210"
              className="text-white font-bold hover:underline"
            >
              +41 21 654 32 10
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-neutral-950 text-neutral-500 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-neutral-950 font-black text-xl tracking-tighter">
                  BH
                </div>
                <span className="text-xl font-bold text-white uppercase tracking-wide">
                  Barber House
                </span>
              </div>
              <p className="text-sm leading-relaxed max-w-md text-neutral-500">
                Votre barbershop premium au coeur de Lausanne. Depuis 2013,
                nous cultivons l&apos;art du barbier avec passion et précision.
              </p>
              <div className="flex gap-3 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-amber-600 hover:border-amber-600 transition-colors"
                >
                  <span className="text-xs text-white font-bold">IG</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-amber-600 hover:border-amber-600 transition-colors"
                >
                  <span className="text-xs text-white font-bold">FB</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-amber-600 hover:border-amber-600 transition-colors"
                >
                  <span className="text-xs text-white font-bold">TK</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Horaires</h4>
              <ul className="space-y-2 text-sm">
                <li>Lundi : Fermé</li>
                <li>Mar-Ven : 9h00 - 19h00</li>
                <li>Samedi : 8h00 - 17h00</li>
                <li>Dimanche : Fermé</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Rue de Bourg 22, 1003 Lausanne</li>
                <li>+41 21 654 32 10</li>
                <li>info@barberhouse-lausanne.ch</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 mt-12 pt-8 text-xs text-center text-neutral-600">
            <p>
              &copy; {new Date().getFullYear()} Barber House Lausanne — Tous droits
              réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
