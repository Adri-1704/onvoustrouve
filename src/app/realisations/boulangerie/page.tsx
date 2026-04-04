import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boulangerie Artisanale Favre | Nyon - Démonstration OnVousTrouve.ch",
  description:
    "Démonstration d'un site vitrine pour une boulangerie-pâtisserie artisanale à Nyon, créé par OnVousTrouve.ch",
};

export default function BoulangeriePage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      {/* Bandeau démo */}
      <div className="bg-blue-600 text-white text-center py-2 text-sm">
        Ceci est une démonstration{" "}
        <Link href="/" className="underline font-semibold hover:text-blue-200">
          OnVousTrouve.ch
        </Link>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-amber-50/95 backdrop-blur-sm border-b border-amber-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-amber-800 flex items-center justify-center text-amber-50 text-xl font-bold">
                F
              </div>
              <div>
                <div className="text-xl font-bold text-amber-900">Boulangerie Favre</div>
                <div className="text-xs text-amber-700 tracking-widest uppercase">Artisanale depuis 1987</div>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-amber-800">
              <a href="#pains" className="hover:text-amber-600 transition-colors">Nos Pains</a>
              <a href="#patisseries" className="hover:text-amber-600 transition-colors">Pâtisseries</a>
              <a href="#commandes" className="hover:text-amber-600 transition-colors">Commandes</a>
              <a href="#horaires" className="hover:text-amber-600 transition-colors">Horaires</a>
              <a href="#contact" className="hover:text-amber-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-yellow-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-36">
          <div className="max-w-2xl">
            <p className="text-amber-300 uppercase tracking-[0.3em] text-sm mb-4">Boulangerie-Pâtisserie</p>
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-6">
              Le goût authentique du pain fait maison
            </h1>
            <p className="text-lg text-amber-100 mb-8 leading-relaxed">
              Depuis 1987, la famille Favre perpétue la tradition boulangère à Nyon.
              Farines locales, levain naturel et savoir-faire artisanal pour un pain d&apos;exception.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#pains" className="inline-flex items-center px-8 py-3 rounded-full bg-amber-500 text-amber-950 font-semibold hover:bg-amber-400 transition-colors">
                Découvrir nos pains
              </a>
              <a href="#commandes" className="inline-flex items-center px-8 py-3 rounded-full border-2 border-amber-400 text-amber-100 font-semibold hover:bg-amber-400/20 transition-colors">
                Commander un gâteau
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Pains & Viennoiseries */}
      <section id="pains" className="py-20 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-700 uppercase tracking-widest text-sm mb-2">Chaque jour, dès 5h du matin</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-900">Nos Pains & Viennoiseries</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Pain au levain", desc: "Farine bio de la région, fermentation longue 24h. Croûte croustillante, mie aérée et savoureuse.", price: "CHF 5.80" },
              { name: "Tresse au beurre", desc: "La traditionnelle tresse du dimanche, au beurre de la Gruyère. Dorée et moelleuse.", price: "CHF 4.50" },
              { name: "Pain de seigle", desc: "Seigle valaisan mélangé à notre levain maison. Dense, parfumé, parfait avec le fromage.", price: "CHF 6.20" },
              { name: "Croissant pur beurre", desc: "Feuilletage fait main, beurre AOP. 72 couches de pur bonheur croustillant.", price: "CHF 2.80" },
              { name: "Pain aux noix", desc: "Noix du Périgord incorporées dans notre pâte au levain. Un classique indémodable.", price: "CHF 7.50" },
              { name: "Petit pain au lait", desc: "Doux et moelleux, idéal pour les enfants. Également disponible aux pépites de chocolat.", price: "CHF 1.80" },
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-amber-100">
                <div className="w-full h-40 rounded-xl mb-4 overflow-hidden">
                  <img
                    src={
                      ["Pain au levain", "Pain de seigle", "Pain aux noix"].includes(item.name)
                        ? "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80"
                        : ["Croissant pur beurre", "Tresse au beurre"].includes(item.name)
                        ? "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=800&q=80"
                        : "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&q=80"
                    }
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-amber-900 mb-2">{item.name}</h3>
                <p className="text-amber-700 text-sm leading-relaxed mb-3">{item.desc}</p>
                <p className="text-amber-900 font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pâtisseries */}
      <section id="patisseries" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-700 uppercase tracking-widest text-sm mb-2">Fait avec passion</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-900">Nos Pâtisseries</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Tarte aux fruits de saison", desc: "Pâte sablée maison, crème pâtissière vanillée et fruits frais du marché de Nyon.", price: "Dès CHF 28.–" },
              { name: "Forêt-Noire", desc: "Génoise chocolat, chantilly, griottes. Notre recette secrète depuis 3 générations.", price: "Dès CHF 32.–" },
              { name: "Mille-feuille", desc: "Feuilletage caramélisé, crème diplomate à la vanille Bourbon de Madagascar.", price: "CHF 6.50 / pièce" },
              { name: "Meringues à la double crème", desc: "Meringues cuites lentement, servies avec la double crème de la Gruyère.", price: "CHF 8.– / portion" },
            ].map((item) => (
              <div key={item.name} className="flex gap-6 bg-amber-50 rounded-2xl p-6 border border-amber-100">
                <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80"
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-amber-900 mb-1">{item.name}</h3>
                  <p className="text-amber-700 text-sm leading-relaxed mb-2">{item.desc}</p>
                  <p className="text-amber-900 font-bold text-sm">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commandes spéciales */}
      <section id="commandes" className="py-20 bg-amber-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-amber-400 uppercase tracking-widest text-sm mb-2">Sur commande</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Gâteaux sur mesure</h2>
              <p className="text-amber-200 leading-relaxed mb-6">
                Anniversaire, mariage, baptême ou simplement envie de se faire plaisir ?
                Notre maître pâtissier crée votre gâteau sur mesure, selon vos envies et vos goûts.
              </p>
              <ul className="space-y-3 mb-8">
                {["Gâteaux d'anniversaire personnalisés", "Pièces montées pour mariages", "Wedding cakes", "Buffets de mignardises", "Gâteaux sans gluten sur demande"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-amber-100">
                    <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-amber-300 text-sm mb-4">Commander au minimum 48h à l&apos;avance</p>
              <a href="tel:+41223611234" className="inline-flex items-center px-8 py-3 rounded-full bg-amber-500 text-amber-950 font-semibold hover:bg-amber-400 transition-colors">
                Appelez-nous : +41 22 361 12 34
              </a>
            </div>
            <div className="bg-amber-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">Demande de devis</h3>
              <div className="space-y-4">
                <input type="text" placeholder="Votre nom" className="w-full px-4 py-3 rounded-lg bg-amber-900 border border-amber-700 text-white placeholder-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                <input type="email" placeholder="Votre email" className="w-full px-4 py-3 rounded-lg bg-amber-900 border border-amber-700 text-white placeholder-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                <input type="text" placeholder="Date de l'événement" className="w-full px-4 py-3 rounded-lg bg-amber-900 border border-amber-700 text-white placeholder-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                <textarea placeholder="Décrivez votre gâteau idéal..." rows={4} className="w-full px-4 py-3 rounded-lg bg-amber-900 border border-amber-700 text-white placeholder-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                <button className="w-full py-3 rounded-lg bg-amber-500 text-amber-950 font-semibold hover:bg-amber-400 transition-colors">
                  Envoyer la demande
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horaires */}
      <section id="horaires" className="py-20 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-900">Horaires d&apos;ouverture</h2>
          </div>
          <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-sm border border-amber-100 overflow-hidden">
            {[
              { day: "Lundi", hours: "06h00 – 18h30" },
              { day: "Mardi", hours: "06h00 – 18h30" },
              { day: "Mercredi", hours: "06h00 – 18h30" },
              { day: "Jeudi", hours: "06h00 – 18h30" },
              { day: "Vendredi", hours: "06h00 – 19h00" },
              { day: "Samedi", hours: "06h30 – 17h00" },
              { day: "Dimanche", hours: "07h00 – 12h00" },
            ].map((row, i) => (
              <div key={row.day} className={`flex justify-between items-center px-8 py-4 ${i % 2 === 0 ? "bg-amber-50/50" : "bg-white"}`}>
                <span className="font-medium text-amber-900">{row.day}</span>
                <span className="text-amber-700">{row.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localisation */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-900">Nous trouver</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
              <h3 className="text-xl font-bold text-amber-900 mb-6">Nos coordonnées</h3>
              <div className="space-y-4 text-amber-800">
                <p className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">📍</span>
                  <span>Rue de la Gare 14<br />1260 Nyon</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-xl">📞</span>
                  <a href="tel:+41223611234" className="hover:text-amber-600">+41 22 361 12 34</a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-xl">✉️</span>
                  <a href="mailto:info@boulangerie-favre.ch" className="hover:text-amber-600">info@boulangerie-favre.ch</a>
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-amber-200">
                <p className="text-amber-700 text-sm">
                  Parking gratuit à 50m (Parking de la Gare).<br />
                  À 2 minutes à pied de la gare de Nyon.
                </p>
              </div>
            </div>
            <div className="bg-amber-100 rounded-2xl h-80 flex items-center justify-center text-amber-600">
              <div className="text-center">
                <span className="text-6xl block mb-4">🗺️</span>
                <p className="font-medium">Carte interactive</p>
                <p className="text-sm text-amber-500">Rue de la Gare 14, 1260 Nyon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-200 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-xl font-bold text-white mb-2">Boulangerie Favre</div>
              <p className="text-sm text-amber-400">Artisanale depuis 1987</p>
              <p className="text-sm mt-4">Rue de la Gare 14, 1260 Nyon</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#pains" className="hover:text-white transition-colors">Nos Pains</a></li>
                <li><a href="#patisseries" className="hover:text-white transition-colors">Pâtisseries</a></li>
                <li><a href="#commandes" className="hover:text-white transition-colors">Commandes spéciales</a></li>
                <li><a href="#horaires" className="hover:text-white transition-colors">Horaires</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>+41 22 361 12 34</li>
                <li>info@boulangerie-favre.ch</li>
              </ul>
              <div className="flex gap-4 mt-4">
                <span className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center text-amber-300 hover:bg-amber-700 cursor-pointer">f</span>
                <span className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center text-amber-300 hover:bg-amber-700 cursor-pointer">ig</span>
              </div>
            </div>
          </div>
          <div className="border-t border-amber-800 mt-8 pt-8 text-center text-sm text-amber-500">
            &copy; 2026 Boulangerie Artisanale Favre. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
