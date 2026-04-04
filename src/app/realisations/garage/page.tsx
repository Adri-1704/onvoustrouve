import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Garage Central Steiner | Bienne - Démonstration OnVousTrouve.ch",
  description:
    "Démonstration d'un site vitrine pour un garage automobile à Bienne, créé par OnVousTrouve.ch",
};

export default function GaragePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      {/* Bandeau démo */}
      <div className="bg-blue-600 text-white text-center py-2 text-sm">
        Ceci est une démonstration{" "}
        <Link href="/" className="underline font-semibold hover:text-blue-200">
          OnVousTrouve.ch
        </Link>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-red-600 flex items-center justify-center text-white font-black text-lg">
                GS
              </div>
              <div>
                <div className="text-xl font-black text-white tracking-tight">GARAGE CENTRAL</div>
                <div className="text-xs text-red-500 font-bold tracking-[0.2em]">STEINER</div>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#marques" className="hover:text-white transition-colors">Marques</a>
              <a href="#devis" className="hover:text-white transition-colors">Devis gratuit</a>
              <a href="#horaires" className="hover:text-white transition-colors">Horaires</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </nav>
            <a href="#devis" className="hidden sm:inline-flex items-center px-6 py-2.5 rounded-lg bg-red-600 text-white text-sm font-bold hover:bg-red-500 transition-colors">
              Devis gratuit
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gray-950 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80" alt="Garage automobile professionnel" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 to-transparent" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-36">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-600/50 text-red-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Ouvert du lundi au samedi
            </div>
            <h1 className="text-4xl sm:text-6xl font-black leading-tight mb-6 tracking-tight">
              Votre garage de confiance à <span className="text-red-500">Bienne</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Entretien, réparation, contrôle technique et service pneus.
              Plus de 30 ans d&apos;expertise au service de votre véhicule, toutes marques confondues.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#devis" className="inline-flex items-center px-8 py-4 rounded-lg bg-red-600 text-white font-bold hover:bg-red-500 transition-colors text-lg">
                Demander un devis
              </a>
              <a href="tel:+41323231234" className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-gray-700 text-gray-300 font-bold hover:border-gray-500 hover:text-white transition-colors text-lg">
                +41 32 323 12 34
              </a>
            </div>
          </div>
        </div>
        {/* Stats bar */}
        <div className="relative z-20 border-t border-gray-800 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "30+", label: "Années d'expérience" },
                { value: "5'000+", label: "Véhicules entretenus" },
                { value: "98%", label: "Clients satisfaits" },
                { value: "24h", label: "Délai moyen réparation" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-black text-red-500">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Nos Services</h2>
            <p className="text-gray-500 mt-3">Un service complet pour votre véhicule</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🔧", title: "Entretien & Révision", desc: "Service complet selon les recommandations du constructeur. Vidange, filtres, bougies, freins, courroies.", price: "Dès CHF 189.–" },
              { icon: "⚙️", title: "Réparation mécanique", desc: "Diagnostic électronique, réparation moteur, boîte de vitesses, suspension, direction, échappement.", price: "Sur devis" },
              { icon: "🛞", title: "Service pneus", desc: "Changement, équilibrage, stockage saisonnier. Large choix de pneus été, hiver et 4 saisons en stock.", price: "Dès CHF 40.–/pneu" },
              { icon: "📋", title: "Contrôle technique", desc: "Préparation et passage au contrôle technique cantonal. Pré-contrôle offert pour anticiper les éventuels problèmes.", price: "CHF 69.–" },
              { icon: "🚗", title: "Véhicule de prêt", desc: "Véhicule de remplacement disponible gratuitement pour les réparations de plus d'une journée.", price: "Gratuit" },
              { icon: "🔋", title: "Climatisation & Électrique", desc: "Recharge climatisation, diagnostic batterie, alternateur, démarreur, éclairage complet.", price: "Dès CHF 89.–" },
            ].map((service) => (
              <div key={service.title} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-800/80 transition-colors border border-gray-700/50 group">
                <span className="text-4xl block mb-4">{service.icon}</span>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.desc}</p>
                <p className="text-red-500 font-bold text-sm">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Notre atelier</h2>
            <p className="text-gray-500 mt-3">Un apercu de nos installations</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-xl overflow-hidden aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80" alt="Atelier du garage" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=800&q=80" alt="Reparation automobile" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80" alt="Mecanicien au travail" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Marques */}
      <section id="marques" className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Toutes marques</h2>
            <p className="text-gray-500 mt-3">Nous entretenons et réparons tous types de véhicules</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {["VW", "BMW", "Mercedes", "Audi", "Toyota", "Renault", "Peugeot", "Skoda", "Ford", "Hyundai", "Fiat", "Opel"].map((brand) => (
              <div key={brand} className="bg-gray-900 rounded-xl p-6 flex items-center justify-center border border-gray-800 hover:border-red-600/50 transition-colors">
                <span className="text-gray-400 font-bold text-lg">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devis en ligne */}
      <section id="devis" className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Devis gratuit en ligne</h2>
            <p className="text-red-100 mt-3">Recevez votre estimation sous 24h</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-gray-900">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Nom et prénom" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500" />
              <input type="tel" placeholder="Téléphone" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500" />
              <input type="text" placeholder="Marque et modèle du véhicule" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500" />
              <input type="text" placeholder="Année / Kilométrage" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500" />
              <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-500 md:col-span-2">
                <option>Type de service souhaité</option>
                <option>Entretien / Révision</option>
                <option>Réparation</option>
                <option>Contrôle technique</option>
                <option>Service pneus</option>
                <option>Climatisation</option>
                <option>Autre</option>
              </select>
              <textarea placeholder="Décrivez votre besoin..." rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 md:col-span-2" />
            </div>
            <button className="mt-6 w-full py-4 rounded-lg bg-red-600 text-white font-bold text-lg hover:bg-red-500 transition-colors">
              Envoyer ma demande de devis
            </button>
          </div>
        </div>
      </section>

      {/* Horaires */}
      <section id="horaires" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-8">Horaires & Accès</h2>
              <div className="space-y-3">
                {[
                  { day: "Lundi – Vendredi", hours: "07h30 – 12h00 / 13h30 – 18h00" },
                  { day: "Samedi", hours: "08h00 – 12h00" },
                  { day: "Dimanche", hours: "Fermé" },
                ].map((row) => (
                  <div key={row.day} className="flex justify-between items-center py-3 border-b border-gray-800">
                    <span className="font-medium text-gray-300">{row.day}</span>
                    <span className="text-gray-500">{row.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 rounded-lg bg-red-600/10 border border-red-600/30">
                <p className="text-red-400 text-sm font-medium">Service dépannage disponible 7j/7 au +41 32 323 12 35</p>
              </div>
            </div>
            <div>
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">Comment nous trouver</h3>
                <div className="space-y-4 text-gray-400">
                  <p className="flex items-start gap-3">
                    <span className="text-red-500 font-bold mt-0.5">📍</span>
                    <span>Route de Soleure 45<br />2502 Bienne</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-red-500 font-bold">📞</span>
                    <a href="tel:+41323231234" className="hover:text-white transition-colors">+41 32 323 12 34</a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-red-500 font-bold">✉️</span>
                    <a href="mailto:info@garage-steiner.ch" className="hover:text-white transition-colors">info@garage-steiner.ch</a>
                  </p>
                </div>
                <p className="text-gray-600 text-sm mt-6">
                  Parking client devant le garage. Accès facile depuis l&apos;autoroute A5, sortie Bienne-Centre.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-950 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center text-white font-black text-xs">GS</div>
                <span className="font-black text-white">GARAGE STEINER</span>
              </div>
              <p className="text-sm text-gray-500">Votre partenaire automobile de confiance à Bienne depuis 1993.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm">Services</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#services" className="hover:text-gray-300">Entretien</a></li>
                <li><a href="#services" className="hover:text-gray-300">Réparation</a></li>
                <li><a href="#services" className="hover:text-gray-300">Pneus</a></li>
                <li><a href="#services" className="hover:text-gray-300">Contrôle technique</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>+41 32 323 12 34</li>
                <li>info@garage-steiner.ch</li>
                <li>Route de Soleure 45</li>
                <li>2502 Bienne</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm">Horaires</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>Lun-Ven : 07h30-18h00</li>
                <li>Samedi : 08h00-12h00</li>
                <li>Dimanche : Fermé</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-600">
            &copy; 2026 Garage Central Steiner SA. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
