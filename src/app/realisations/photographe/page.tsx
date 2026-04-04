import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Studio Lumière | Sion - Démonstration OnVousTrouve.ch",
  description:
    "Démonstration d'un site vitrine pour un photographe professionnel à Sion, créé par OnVousTrouve.ch",
};

export default function PhotographePage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-white" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      {/* Bandeau démo */}
      <div className="bg-blue-600 text-white text-center py-2 text-sm" style={{ fontFamily: "system-ui, sans-serif" }}>
        Ceci est une démonstration{" "}
        <Link href="/" className="underline font-semibold hover:text-blue-200">
          OnVousTrouve.ch
        </Link>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-neutral-950/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div>
              <div className="text-2xl font-bold tracking-[0.15em] text-white">STUDIO</div>
              <div className="text-sm tracking-[0.4em] text-amber-400 -mt-1">LUMIERE</div>
            </div>
            <nav className="hidden md:flex items-center gap-10 text-xs tracking-[0.2em] uppercase text-neutral-400">
              <a href="#portfolio" className="hover:text-amber-400 transition-colors">Portfolio</a>
              <a href="#apropos" className="hover:text-amber-400 transition-colors">A propos</a>
              <a href="#tarifs" className="hover:text-amber-400 transition-colors">Tarifs</a>
              <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #d4a853 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <p className="text-amber-400 tracking-[0.5em] uppercase text-sm mb-8">Photographe professionnel - Sion, Valais</p>
          <h1 className="text-5xl sm:text-8xl font-bold leading-[0.9] mb-8">
            Capturer<br />
            <span className="italic text-amber-400">l&apos;instant</span><br />
            parfait
          </h1>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Mariages, portraits, corporate, événements.
            Chaque photo raconte votre histoire avec authenticité et élégance.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#portfolio" className="inline-flex items-center px-10 py-4 border border-amber-400 text-amber-400 tracking-[0.2em] uppercase text-sm hover:bg-amber-400 hover:text-black transition-all">
              Voir le portfolio
            </a>
            <a href="#contact" className="inline-flex items-center px-10 py-4 bg-amber-400 text-black tracking-[0.2em] uppercase text-sm hover:bg-amber-300 transition-all">
              Me contacter
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-600 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-amber-400 tracking-[0.5em] uppercase text-xs mb-4">Portfolio</p>
            <h2 className="text-4xl sm:text-5xl font-bold">Mes univers</h2>
          </div>

          {/* Mariages */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-2">Mariages</h3>
            <p className="text-neutral-500 mb-8 text-sm italic">L&apos;amour, capturé dans sa plus belle lumière</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { cat: "Cérémonie", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80" },
                { cat: "Préparatifs", img: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80" },
                { cat: "Couple", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80" },
                { cat: "Réception", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80" },
              ].map((item, i) => (
                <div key={item.cat} className={`${i === 0 ? "md:col-span-2 md:row-span-2" : ""} bg-neutral-900 rounded-lg overflow-hidden group relative`}>
                  <div className={`${i === 0 ? "h-80 md:h-full" : "h-40 md:h-48"}`}>
                    <img src={item.img} alt={item.cat} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-sm font-medium">{item.cat}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Portraits */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-2">Portraits</h3>
            <p className="text-neutral-500 mb-8 text-sm italic">Révéler la personnalité de chacun</p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {[
                { cat: "Studio", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80" },
                { cat: "Extérieur", img: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80" },
                { cat: "Famille", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80" },
                { cat: "Grossesse", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80" },
                { cat: "Nouveau-né", img: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80" },
                { cat: "Artistique", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80" },
              ].map((item) => (
                <div key={item.cat} className="bg-neutral-900 rounded-lg overflow-hidden group relative aspect-[3/4]">
                  <img src={item.img} alt={`Portrait ${item.cat}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-white text-xs font-medium">{item.cat}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Corporate */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-2">Corporate</h3>
            <p className="text-neutral-500 mb-8 text-sm italic">Valoriser votre image professionnelle</p>
            <div className="grid md:grid-cols-3 gap-3">
              {[
                { cat: "Portraits professionnels", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80" },
                { cat: "Événements d'entreprise", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80" },
                { cat: "Architecture & Intérieur", img: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80" },
              ].map((item) => (
                <div key={item.cat} className="bg-neutral-900 rounded-lg overflow-hidden group relative h-56">
                  <img src={item.img} alt={item.cat} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-sm font-medium">{item.cat}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* A propos */}
      <section id="apropos" className="py-24 bg-neutral-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-neutral-800 rounded-2xl aspect-square overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80" alt="Claire Bonvin, photographe professionnelle" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-900 to-transparent p-6">
                <p className="text-amber-400 font-bold">Claire Bonvin</p>
                <p className="text-neutral-400 text-sm">Photographe</p>
              </div>
            </div>
            <div>
              <p className="text-amber-400 tracking-[0.5em] uppercase text-xs mb-4">A propos</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">L&apos;oeil derrière l&apos;objectif</h2>
              <div className="space-y-4 text-neutral-400 leading-relaxed">
                <p>
                  Passionnée de photographie depuis l&apos;adolescence, j&apos;ai transformé ma passion
                  en métier il y a 12 ans. Diplômée de l&apos;ECAL à Lausanne, j&apos;ai ouvert
                  le Studio Lumière à Sion en 2016.
                </p>
                <p>
                  Mon approche : capturer l&apos;authenticité de chaque moment, avec une lumière
                  naturelle et une esthétique intemporelle. Je crois que les plus belles photos
                  naissent de la spontanéité.
                </p>
                <p>
                  En 12 ans, j&apos;ai eu l&apos;honneur de photographier plus de 200 mariages
                  à travers la Suisse romande, et d&apos;accompagner des dizaines d&apos;entreprises
                  dans leur communication visuelle.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-neutral-800">
                <div className="text-center">
                  <div className="text-2xl font-black text-amber-400">200+</div>
                  <div className="text-xs text-neutral-500 mt-1">Mariages</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-amber-400">12</div>
                  <div className="text-xs text-neutral-500 mt-1">Ans d&apos;expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-amber-400">50+</div>
                  <div className="text-xs text-neutral-500 mt-1">Entreprises</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section id="tarifs" className="py-24 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-400 tracking-[0.5em] uppercase text-xs mb-4">Tarifs</p>
            <h2 className="text-4xl sm:text-5xl font-bold">Investissez dans vos souvenirs</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Portrait", price: "350", desc: "Séance en studio ou extérieur, 1h, 15 photos retouchées en haute résolution.", detail: "Maquillage en option" },
              { name: "Mariage Essentiel", price: "2'900", desc: "Couverture de la cérémonie et du vin d'honneur. 200+ photos retouchées.", detail: "6h de couverture" },
              { name: "Mariage Premium", price: "4'500", desc: "Journée complète, des préparatifs à la soirée. 500+ photos, album premium inclus.", detail: "Journée entière" },
              { name: "Corporate", price: "Sur devis", desc: "Portraits d'équipe, événements, architecture. Tarif adapté à vos besoins.", detail: "Licence commerciale incluse" },
            ].map((tarif) => (
              <div key={tarif.name} className="border border-neutral-800 rounded-xl p-8 hover:border-amber-400/50 transition-colors group">
                <h3 className="text-lg font-bold text-amber-400 mb-1">{tarif.name}</h3>
                <div className="text-3xl font-black text-white mb-1">
                  {tarif.price.startsWith("Sur") ? tarif.price : `CHF ${tarif.price}`}
                </div>
                <p className="text-xs text-neutral-500 mb-4">{tarif.detail}</p>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">{tarif.desc}</p>
                <a href="#contact" className="block text-center py-2.5 border border-neutral-700 text-neutral-300 rounded-lg text-sm hover:border-amber-400 hover:text-amber-400 transition-colors">
                  Réserver
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-neutral-600 text-sm mt-8">
            Tous les forfaits incluent une galerie en ligne privée pour le téléchargement de vos photos.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-400 tracking-[0.5em] uppercase text-xs mb-4">Contact</p>
            <h2 className="text-4xl sm:text-5xl font-bold">Parlons de votre projet</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6 text-neutral-400">
                <div>
                  <h4 className="text-amber-400 text-xs uppercase tracking-widest mb-2">Studio</h4>
                  <p>Rue de la Dixence 8<br />1950 Sion</p>
                </div>
                <div>
                  <h4 className="text-amber-400 text-xs uppercase tracking-widest mb-2">Téléphone</h4>
                  <p><a href="tel:+41274561234" className="hover:text-amber-400 transition-colors">+41 27 456 12 34</a></p>
                </div>
                <div>
                  <h4 className="text-amber-400 text-xs uppercase tracking-widest mb-2">Email</h4>
                  <p><a href="mailto:claire@studio-lumiere.ch" className="hover:text-amber-400 transition-colors">claire@studio-lumiere.ch</a></p>
                </div>
                <div>
                  <h4 className="text-amber-400 text-xs uppercase tracking-widest mb-2">Réseaux sociaux</h4>
                  <div className="flex gap-4 mt-2">
                    <span className="text-neutral-500 hover:text-amber-400 cursor-pointer transition-colors">Instagram</span>
                    <span className="text-neutral-500 hover:text-amber-400 cursor-pointer transition-colors">Facebook</span>
                    <span className="text-neutral-500 hover:text-amber-400 cursor-pointer transition-colors">Pinterest</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-4">
                <input type="text" placeholder="Votre nom" className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors" />
                <input type="email" placeholder="Votre email" className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors" />
                <select className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 text-neutral-500 focus:outline-none focus:border-amber-400 transition-colors">
                  <option>Type de projet</option>
                  <option>Mariage</option>
                  <option>Portrait</option>
                  <option>Corporate</option>
                  <option>Événement</option>
                  <option>Autre</option>
                </select>
                <input type="text" placeholder="Date souhaitée" className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors" />
                <textarea placeholder="Décrivez votre projet..." rows={4} className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors" />
                <button className="w-full py-3 bg-amber-400 text-black font-bold tracking-[0.1em] uppercase text-sm hover:bg-amber-300 transition-colors">
                  Envoyer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-lg font-bold tracking-[0.15em]">STUDIO LUMIERE</div>
              <p className="text-neutral-600 text-sm mt-1">Photographe professionnelle - Sion, Valais</p>
            </div>
            <div className="text-center">
              <p className="text-neutral-600 text-sm">+41 27 456 12 34 | claire@studio-lumiere.ch</p>
              <p className="text-neutral-700 text-sm mt-1">Rue de la Dixence 8, 1950 Sion</p>
            </div>
            <div className="flex gap-6 text-neutral-600 text-sm">
              <span className="hover:text-amber-400 cursor-pointer transition-colors">IG</span>
              <span className="hover:text-amber-400 cursor-pointer transition-colors">FB</span>
              <span className="hover:text-amber-400 cursor-pointer transition-colors">PIN</span>
            </div>
          </div>
          <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-xs text-neutral-700">
            &copy; 2026 Studio Lumière. Tous droits réservés. Toute reproduction interdite sans autorisation.
          </div>
        </div>
      </footer>
    </div>
  );
}
