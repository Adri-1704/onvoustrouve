import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "La Vera Pizza | Pizzeria Artisanale Napolitaine - Berne",
  description:
    "Pizzeria artisanale napolitaine au coeur de Berne. Pizzas cuites au feu de bois, produits frais importes d'Italie. Reservez votre table en ligne.",
};

export default function PizzeriaDemo() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-950 font-sans">
      {/* Bandeau demo */}
      <div className="bg-gray-900 text-white text-center text-sm py-2 px-4">
        Ceci est une demonstration{" "}
        <Link href="/" className="underline font-semibold hover:text-red-300">
          OnVousTrouve.ch
        </Link>{" "}
        — Ce site n&apos;est pas reel
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-stone-950/95 backdrop-blur-sm border-b border-red-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center text-white font-black text-lg">
                VP
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-wide">
                  La Vera Pizza
                </span>
                <p className="text-xs text-red-400 tracking-[0.3em] uppercase">
                  Berne
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-400">
              <a href="#carte" className="hover:text-red-400 transition-colors">
                La Carte
              </a>
              <a href="#galerie" className="hover:text-red-400 transition-colors">
                Galerie
              </a>
              <a href="#histoire" className="hover:text-red-400 transition-colors">
                Notre Histoire
              </a>
              <a href="#avis" className="hover:text-red-400 transition-colors">
                Avis
              </a>
              <a href="#contact" className="hover:text-red-400 transition-colors">
                Contact
              </a>
            </div>
            <a
              href="#reservation"
              className="hidden sm:inline-flex items-center px-6 py-2.5 rounded-full bg-red-800 text-white text-sm font-bold uppercase tracking-wider hover:bg-red-700 transition-colors"
            >
              Reserver
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-stone-950 min-h-[85vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-950/40 via-stone-950 to-stone-950" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-20 w-80 h-80 bg-red-900/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-900/5 rounded-full blur-3xl" />
        </div>
        <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-red-900/15 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-red-800/50 text-red-400 text-xs font-bold tracking-[0.25em] uppercase mb-8">
                <span className="w-8 h-px bg-red-700" />
                Pizzeria artisanale
                <span className="w-8 h-px bg-red-700" />
              </div>
              <h1 className="text-5xl sm:text-7xl font-black text-white leading-[0.9] uppercase tracking-tight">
                L&apos;art de la
                <br />
                <span className="text-red-500">pizza</span> napolitaine
              </h1>
              <p className="mt-8 text-lg text-stone-400 max-w-lg leading-relaxed">
                Depuis trois generations, nous perpetuons la tradition napolitaine
                au coeur de Berne. Four a bois, pate fermentee 72h et ingredients
                frais importes directement d&apos;Italie.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#reservation"
                  className="inline-flex items-center px-8 py-4 bg-red-800 text-white font-bold uppercase tracking-wider rounded-full hover:bg-red-700 transition-colors"
                >
                  Reserver une table
                </a>
                <a
                  href="#carte"
                  className="inline-flex items-center px-8 py-4 border-2 border-stone-700 text-stone-300 font-bold uppercase tracking-wider rounded-full hover:border-red-700 hover:text-red-400 transition-colors"
                >
                  Decouvrir la carte
                </a>
              </div>
              <div className="mt-14 flex items-center gap-10">
                <div>
                  <p className="text-4xl font-black text-red-500">25+</p>
                  <p className="text-xs text-stone-500 mt-1 uppercase tracking-wider">Ans de tradition</p>
                </div>
                <div className="w-px h-12 bg-stone-800" />
                <div>
                  <p className="text-4xl font-black text-red-500">15k+</p>
                  <p className="text-xs text-stone-500 mt-1 uppercase tracking-wider">Pizzas par an</p>
                </div>
                <div className="w-px h-12 bg-stone-800" />
                <div>
                  <p className="text-4xl font-black text-red-500">4.8</p>
                  <p className="text-xs text-stone-500 mt-1 uppercase tracking-wider">Note Google</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden border border-stone-800 relative">
                  <img
                    src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80"
                    alt="Pizza napolitaine La Vera Pizza"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-3 border border-red-800/20 rounded-xl pointer-events-none" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-gradient-to-br from-red-700 to-red-900 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-3xl font-black text-white">72h</p>
                    <p className="text-xs text-red-200 uppercase tracking-wider">Fermentation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* La Carte */}
      <section id="carte" className="py-20 sm:py-28 bg-stone-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-red-400 font-bold tracking-[0.3em] uppercase text-xs mb-4">
              Nos creations
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wide">
              La Carte
            </h2>
            <div className="w-16 h-1 bg-red-700 mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Pizzas Classiques */}
            <div className="bg-stone-950 border border-stone-800 p-8 rounded-xl hover:border-red-800/50 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12l2-2 4 4" />
                </svg>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                  Pizzas Classiques
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Margherita", desc: "Sauce tomate San Marzano, mozzarella di bufala, basilic frais", price: "CHF 18.—" },
                  { name: "Napoli", desc: "Tomate, mozzarella, anchois, capres, olives noires", price: "CHF 21.—" },
                  { name: "Prosciutto e Funghi", desc: "Tomate, mozzarella, jambon cuit, champignons frais", price: "CHF 22.—" },
                  { name: "Quattro Formaggi", desc: "Mozzarella, gorgonzola, parmesan, taleggio", price: "CHF 24.—" },
                  { name: "Diavola", desc: "Tomate, mozzarella, salami piquant, piment calabrais", price: "CHF 22.—" },
                  { name: "Marinara", desc: "Tomate San Marzano, ail, origan, huile d'olive extra vierge", price: "CHF 16.—" },
                ].map((item) => (
                  <div key={item.name} className="flex justify-between items-start gap-4 pb-3 border-b border-stone-800/50 last:border-0 last:pb-0">
                    <div>
                      <p className="text-white font-semibold">{item.name}</p>
                      <p className="text-stone-500 text-xs mt-1">{item.desc}</p>
                    </div>
                    <span className="text-red-400 font-bold whitespace-nowrap text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pizzas Speciales */}
            <div className="bg-stone-950 border border-stone-800 p-8 rounded-xl hover:border-red-800/50 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                  Pizzas Speciales
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Tartufo Nero", desc: "Creme de truffe noire, mozzarella di bufala, roquette, copeaux de parmesan", price: "CHF 32.—" },
                  { name: "Burrata e Prosciutto", desc: "Tomate, burrata cremeuse, prosciutto di Parma 24 mois, roquette", price: "CHF 28.—" },
                  { name: "Salmone Affumicato", desc: "Creme fraiche, saumon fume, capres, oignon rouge, aneth", price: "CHF 27.—" },
                  { name: "Vegetariana del Sole", desc: "Tomate, mozzarella, aubergine grillee, courgette, poivrons, olives", price: "CHF 24.—" },
                  { name: "La Vera Speciale", desc: "Tomate, mozzarella, 'nduja calabraise, burrata, miel, pistaches", price: "CHF 30.—" },
                  { name: "Calzone Ripieno", desc: "Farci ricotta, jambon cuit, mozzarella, champignons, sauce tomate", price: "CHF 26.—" },
                ].map((item) => (
                  <div key={item.name} className="flex justify-between items-start gap-4 pb-3 border-b border-stone-800/50 last:border-0 last:pb-0">
                    <div>
                      <p className="text-white font-semibold">{item.name}</p>
                      <p className="text-stone-500 text-xs mt-1">{item.desc}</p>
                    </div>
                    <span className="text-red-400 font-bold whitespace-nowrap text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Antipasti & Insalate */}
            <div className="bg-stone-950 border border-stone-800 p-8 rounded-xl hover:border-red-800/50 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
                </svg>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                  Antipasti & Salades
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Bruschetta Classica", desc: "Tomates fraiches, basilic, ail, huile d'olive extra vierge", price: "CHF 12.—" },
                  { name: "Carpaccio di Manzo", desc: "Boeuf cru, roquette, parmesan, huile de truffe", price: "CHF 18.—" },
                  { name: "Caprese di Bufala", desc: "Mozzarella di bufala, tomates coeur de boeuf, basilic frais", price: "CHF 16.—" },
                  { name: "Antipasto Misto", desc: "Selection de charcuteries italiennes, olives, fromages", price: "CHF 22.—" },
                  { name: "Insalata Cesare", desc: "Romaine, parmesan, croutons, sauce cesare maison", price: "CHF 15.—" },
                ].map((item) => (
                  <div key={item.name} className="flex justify-between items-start gap-4 pb-3 border-b border-stone-800/50 last:border-0 last:pb-0">
                    <div>
                      <p className="text-white font-semibold">{item.name}</p>
                      <p className="text-stone-500 text-xs mt-1">{item.desc}</p>
                    </div>
                    <span className="text-red-400 font-bold whitespace-nowrap text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Desserts & Boissons */}
            <div className="bg-stone-950 border border-stone-800 p-8 rounded-xl hover:border-red-800/50 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" strokeLinecap="round" />
                </svg>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                  Desserts & Boissons
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Tiramisu Maison", desc: "Recette familiale, mascarpone, cafe espresso, cacao amer", price: "CHF 12.—" },
                  { name: "Panna Cotta", desc: "Creme vanillee, coulis de fruits rouges", price: "CHF 10.—" },
                  { name: "Affogato al Caffe", desc: "Glace fior di latte, double espresso", price: "CHF 9.—" },
                  { name: "Vins italiens (verre)", desc: "Chianti, Montepulciano, Prosecco, Pinot Grigio", price: "des CHF 8.—" },
                  { name: "Birra Moretti / Peroni", desc: "Biere italienne pression 33cl", price: "CHF 7.—" },
                ].map((item) => (
                  <div key={item.name} className="flex justify-between items-start gap-4 pb-3 border-b border-stone-800/50 last:border-0 last:pb-0">
                    <div>
                      <p className="text-white font-semibold">{item.name}</p>
                      <p className="text-stone-500 text-xs mt-1">{item.desc}</p>
                    </div>
                    <span className="text-red-400 font-bold whitespace-nowrap text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie Photos */}
      <section id="galerie" className="py-20 sm:py-28 bg-stone-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-red-400 font-bold tracking-[0.3em] uppercase text-xs mb-4">
              Notre univers
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wide">
              Galerie Photos
            </h2>
            <div className="w-16 h-1 bg-red-700 mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Pizza Margherita", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80" },
              { label: "Notre four a bois", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80" },
              { label: "Ambiance du restaurant", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80" },
              { label: "Pizza Tartufo Nero", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80" },
              { label: "Preparation artisanale", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80" },
              { label: "Terrasse d'ete", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80" },
            ].map((item, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl border border-stone-800 hover:border-red-700/50 overflow-hidden transition-all cursor-pointer group relative"
              >
                <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-end justify-center pb-6">
                  <p className="text-white/90 group-hover:text-red-300 text-sm text-center px-4 uppercase tracking-wider font-semibold transition-colors">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section id="histoire" className="py-20 sm:py-28 bg-stone-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-red-400 font-bold tracking-[0.3em] uppercase text-xs mb-4">
                Depuis 1999
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wide">
                Notre Histoire
              </h2>
              <div className="w-16 h-1 bg-red-700 mt-6 mb-8" />
              <div className="space-y-5 text-stone-400 leading-relaxed">
                <p>
                  Tout a commence a Naples, dans la petite pizzeria de Nonna Rosa.
                  C&apos;est la que Giovanni Ferraro, notre fondateur, a appris les
                  secrets de la vraie pizza napolitaine aupres de sa grand-mere.
                </p>
                <p>
                  En 1999, Giovanni quitte l&apos;Italie pour s&apos;installer en Suisse avec
                  un reve : faire decouvrir aux Bernois l&apos;authentique pizza
                  napolitaine. Avec son four a bois importe directement de Naples
                  et sa recette de pate fermentee 72 heures, La Vera Pizza ouvre
                  ses portes dans la vieille ville.
                </p>
                <p>
                  Aujourd&apos;hui, c&apos;est la troisieme generation qui perpetue la
                  tradition. Marco et Sofia, les petits-enfants de Giovanni,
                  continuent d&apos;utiliser les memes recettes, les memes ingredients
                  importes d&apos;Italie et le meme amour du metier.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                {[
                  { name: "Giovanni Ferraro", role: "Fondateur", exp: "La vision originale" },
                  { name: "Marco Ferraro", role: "Chef Pizzaiolo", exp: "Formation a Naples" },
                  { name: "Sofia Ferraro", role: "Directrice", exp: "Hospitalite & gestion" },
                ].map((member) => (
                  <div key={member.name} className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-800 to-red-950 flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm">
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <p className="text-white font-semibold text-sm">{member.name}</p>
                    <p className="text-red-400 text-xs mt-1">{member.role}</p>
                    <p className="text-stone-600 text-xs mt-1 italic">{member.exp}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full aspect-square rounded-2xl overflow-hidden border border-stone-800">
                  <img
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80"
                    alt="Preparation de pizza artisanale"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-red-800 text-white px-6 py-3 rounded-xl">
                  <p className="font-black text-lg">3 generations</p>
                  <p className="text-red-200 text-xs uppercase tracking-wider">de passion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avis Clients */}
      <section id="avis" className="py-20 sm:py-28 bg-stone-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-red-400 font-bold tracking-[0.3em] uppercase text-xs mb-4">
              Ce que disent nos clients
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wide">
              Avis Clients
            </h2>
            <div className="w-16 h-1 bg-red-700 mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Thomas M.",
                text: "La meilleure pizza de Berne, et de loin ! La Margherita est un chef-d'oeuvre de simplicite. On sent les produits frais, la pate est legere et croustillante. Un vrai voyage a Naples.",
                stars: 5,
                date: "Mars 2026",
              },
              {
                name: "Anna K.",
                text: "Nous y allons en famille chaque dimanche. L'accueil est toujours chaleureux, les pizzas sont genereuses et le tiramisu est a tomber. Les enfants adorent regarder le pizzaiolo travailler.",
                stars: 5,
                date: "Fevrier 2026",
              },
              {
                name: "Philippe R.",
                text: "J'ai goute a la Tartufo Nero : un pur delice ! Le rapport qualite-prix est excellent pour Berne. La carte des vins italiens est bien choisie. Reservation conseillee le week-end.",
                stars: 5,
                date: "Janvier 2026",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-stone-900 border border-stone-800 p-8 rounded-xl hover:border-red-800/40 transition-colors"
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
                <p className="text-stone-300 leading-relaxed text-sm italic mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex justify-between items-end">
                  <p className="font-bold text-white">{review.name}</p>
                  <p className="text-xs text-stone-600">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation */}
      <section id="reservation" className="py-20 sm:py-28 bg-gradient-to-br from-red-800 to-red-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wide">
            Reservez votre table
          </h2>
          <p className="mt-4 text-lg text-red-100/80 max-w-2xl mx-auto">
            Pour garantir votre place, reservez en ligne ou par telephone.
            Ouvert du mardi au dimanche, midi et soir.
          </p>
          <div className="mt-10 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-12">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-red-100 mb-2 text-left uppercase tracking-wider">
                  Nom complet
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-black/20 border border-white/15 rounded-lg text-white placeholder-red-200/30 focus:outline-none focus:border-red-400/50"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-red-100 mb-2 text-left uppercase tracking-wider">
                  Telephone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-black/20 border border-white/15 rounded-lg text-white placeholder-red-200/30 focus:outline-none focus:border-red-400/50"
                  placeholder="+41 31 000 00 00"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-red-100 mb-2 text-left uppercase tracking-wider">
                  Nombre de personnes
                </label>
                <select className="w-full px-4 py-3 bg-black/20 border border-white/15 rounded-lg text-white focus:outline-none focus:border-red-400/50">
                  <option value="">Combien de convives ?</option>
                  <option value="1">1 personne</option>
                  <option value="2">2 personnes</option>
                  <option value="3-4">3-4 personnes</option>
                  <option value="5-6">5-6 personnes</option>
                  <option value="7+">7+ personnes (groupe)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-red-100 mb-2 text-left uppercase tracking-wider">
                  Date et heure
                </label>
                <input
                  type="datetime-local"
                  className="w-full px-4 py-3 bg-black/20 border border-white/15 rounded-lg text-white focus:outline-none focus:border-red-400/50"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-bold text-red-100 mb-2 text-left uppercase tracking-wider">
                Remarques (allergies, occasion speciale...)
              </label>
              <textarea
                rows={3}
                className="w-full px-4 py-3 bg-black/20 border border-white/15 rounded-lg text-white placeholder-red-200/30 focus:outline-none focus:border-red-400/50 resize-none"
                placeholder="Vos remarques ou demandes speciales..."
              />
            </div>
            <div className="mt-8">
              <button className="px-10 py-4 bg-white text-red-900 font-black uppercase tracking-wider rounded-full hover:bg-red-100 transition-colors">
                Reserver maintenant
              </button>
            </div>
          </div>
          <div className="mt-8 grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <svg className="w-8 h-8 text-red-200 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-white font-bold text-sm">Horaires</p>
              <p className="text-red-200/70 text-xs mt-1">Mar-Sam : 11h30-14h / 18h-22h30</p>
              <p className="text-red-200/70 text-xs">Dim : 11h30-15h / 18h-22h</p>
            </div>
            <div>
              <svg className="w-8 h-8 text-red-200 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-white font-bold text-sm">Adresse</p>
              <p className="text-red-200/70 text-xs mt-1">Kramgasse 48</p>
              <p className="text-red-200/70 text-xs">3011 Berne</p>
            </div>
            <div>
              <svg className="w-8 h-8 text-red-200 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <p className="text-white font-bold text-sm">Telephone</p>
              <p className="text-red-200/70 text-xs mt-1">+41 31 312 45 67</p>
              <p className="text-red-200/70 text-xs">info@laverapizza-bern.ch</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-stone-950 text-stone-500 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center text-white font-black text-lg">
                  VP
                </div>
                <span className="text-xl font-bold text-white tracking-wide">
                  La Vera Pizza
                </span>
              </div>
              <p className="text-sm leading-relaxed max-w-md text-stone-500">
                Pizzeria artisanale napolitaine au coeur de Berne. Depuis 1999,
                trois generations de passion pour la vraie pizza italienne.
                Four a bois, produits frais d&apos;Italie, recettes authentiques.
              </p>
              <div className="flex gap-3 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 bg-stone-900 border border-stone-800 rounded-full flex items-center justify-center hover:bg-red-800 hover:border-red-800 transition-colors"
                >
                  <span className="text-xs text-white font-bold">IG</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-stone-900 border border-stone-800 rounded-full flex items-center justify-center hover:bg-red-800 hover:border-red-800 transition-colors"
                >
                  <span className="text-xs text-white font-bold">FB</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-stone-900 border border-stone-800 rounded-full flex items-center justify-center hover:bg-red-800 hover:border-red-800 transition-colors"
                >
                  <span className="text-xs text-white font-bold">GP</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Horaires</h4>
              <ul className="space-y-2 text-sm">
                <li>Lundi : Ferme</li>
                <li>Mar-Sam : 11h30-14h / 18h-22h30</li>
                <li>Dimanche : 11h30-15h / 18h-22h</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Kramgasse 48, 3011 Berne</li>
                <li>+41 31 312 45 67</li>
                <li>info@laverapizza-bern.ch</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-stone-800 mt-12 pt-8 text-xs text-center text-stone-600">
            <p>
              &copy; {new Date().getFullYear()} La Vera Pizza Berne — Tous droits
              reserves.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
