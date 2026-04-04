import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Atelier Bonvin Architecture | Sierre - Démonstration OnVousTrouve.ch",
  description:
    "Démonstration d'un site vitrine pour un cabinet d'architecture à Sierre, créé par OnVousTrouve.ch",
};

export default function ArchitectePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-neutral-900" style={{ fontFamily: "'Helvetica Neue', 'Segoe UI', Arial, sans-serif" }}>
      {/* Bandeau démo */}
      <div className="bg-blue-600 text-white text-center py-2 text-sm">
        Ceci est une démonstration{" "}
        <Link href="/" className="underline font-semibold hover:text-blue-200">
          OnVousTrouve.ch
        </Link>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div>
              <div className="text-lg font-light tracking-[0.3em] uppercase text-neutral-900">Atelier Bonvin</div>
              <div className="text-[10px] tracking-[0.5em] uppercase text-neutral-400">Architecture</div>
            </div>
            <nav className="hidden md:flex items-center gap-10 text-xs tracking-[0.15em] uppercase text-neutral-500">
              <a href="#projets" className="hover:text-neutral-900 transition-colors">Projets</a>
              <a href="#philosophie" className="hover:text-neutral-900 transition-colors">Philosophie</a>
              <a href="#services" className="hover:text-neutral-900 transition-colors">Services</a>
              <a href="#contact" className="hover:text-neutral-900 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 via-neutral-50 to-white" />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(90deg, transparent 49.5%, #e5e5e5 49.5%, #e5e5e5 50.5%, transparent 50.5%)", backgroundSize: "120px 100%" , opacity: 0.3 }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-32 w-full">
          <div className="grid md:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-xs tracking-[0.5em] uppercase text-neutral-400 mb-6">Cabinet d&apos;architecture - Sierre, Valais</p>
              <h1 className="text-4xl sm:text-6xl font-light leading-tight mb-8 tracking-tight">
                Concevoir des espaces<br />
                <span className="font-bold">qui inspirent</span>
              </h1>
              <p className="text-neutral-500 text-lg leading-relaxed mb-10 max-w-lg">
                Architecture contemporaine ancrée dans le paysage valaisan.
                Chaque projet est une conversation entre le lieu, la lumière et les gens qui l&apos;habitent.
              </p>
              <a href="#projets" className="inline-flex items-center gap-4 text-sm tracking-[0.15em] uppercase text-neutral-900 font-medium hover:gap-6 transition-all group">
                Découvrir nos projets
                <span className="w-12 h-px bg-neutral-900 group-hover:w-16 transition-all" />
              </a>
            </div>
            <div className="hidden md:block">
              <div className="bg-neutral-100 rounded-sm aspect-[4/5] flex items-center justify-center border border-neutral-200">
                <div className="text-center">
                  <div className="w-24 h-32 border-2 border-neutral-300 mx-auto mb-4" />
                  <div className="w-40 h-24 border-2 border-neutral-300 mx-auto mb-4" />
                  <p className="text-neutral-400 text-xs tracking-widest uppercase">Villa Edelweiss, Crans-Montana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projets */}
      <section id="projets" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <p className="text-xs tracking-[0.5em] uppercase text-neutral-400 mb-3">Portfolio</p>
            <h2 className="text-3xl sm:text-4xl font-light">Projets <span className="font-bold">réalisés</span></h2>
          </div>
          <div className="space-y-24">
            {[
              {
                num: "01",
                title: "Villa Edelweiss",
                location: "Crans-Montana",
                year: "2024",
                desc: "Villa contemporaine de 280m2 intégrée dans la pente alpine. Grandes baies vitrées offrant une vue panoramique sur les Alpes. Matériaux : béton brut, bois de mélèze local, pierre naturelle.",
                tags: ["Résidentiel", "Neuf", "280m²"],
              },
              {
                num: "02",
                title: "Loft Rhône",
                location: "Sierre",
                year: "2023",
                desc: "Transformation d'un ancien entrepôt vinicole en loft de standing. Conservation des éléments patrimoniaux (charpente en chêne, murs en pierre) tout en apportant confort moderne et luminosité.",
                tags: ["Rénovation", "Loft", "180m²"],
              },
              {
                num: "03",
                title: "Cabinet Médical du Lac",
                location: "Sierre",
                year: "2023",
                desc: "Aménagement intérieur d'un cabinet médical pluridisciplinaire. Atmosphère apaisante grâce aux matériaux naturels, circulation fluide des patients, acoustique soignée.",
                tags: ["Commercial", "Aménagement", "350m²"],
              },
              {
                num: "04",
                title: "Résidence Les Terrasses",
                location: "Sion",
                year: "2022",
                desc: "Ensemble résidentiel de 12 appartements avec terrasses généreuses. Architecture bioclimatique, panneaux solaires intégrés, certifié Minergie-P.",
                tags: ["Résidentiel", "Collectif", "Minergie-P"],
              },
            ].map((project) => (
              <div key={project.num} className="grid md:grid-cols-2 gap-12 items-center group">
                <div className="bg-neutral-100 aspect-[4/3] rounded-sm flex items-center justify-center border border-neutral-200 group-hover:border-neutral-300 transition-colors">
                  <div className="text-center">
                    <div className="text-6xl font-extralight text-neutral-300 mb-2">{project.num}</div>
                    <p className="text-neutral-400 text-xs tracking-widest uppercase">{project.title}</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-3 text-xs text-neutral-400">
                    <span>{project.location}</span>
                    <span className="w-4 h-px bg-neutral-300" />
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-light mb-4 group-hover:text-amber-800 transition-colors">{project.title}</h3>
                  <p className="text-neutral-500 leading-relaxed mb-6">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-neutral-100 text-neutral-500 text-xs tracking-wide rounded-sm">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophie */}
      <section id="philosophie" className="py-24 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.5em] uppercase text-neutral-400 mb-3">Philosophie</p>
              <h2 className="text-3xl sm:text-4xl font-light mb-8">L&apos;architecture au service<br /><span className="font-bold">du vivant</span></h2>
              <div className="space-y-4 text-neutral-500 leading-relaxed">
                <p>
                  Chez Atelier Bonvin, nous croyons que l&apos;architecture doit s&apos;effacer
                  pour sublimer le quotidien. Chaque projet est une réponse sensible
                  au contexte : le paysage, le climat, la culture locale.
                </p>
                <p>
                  Fondé en 2010 par Pierre Bonvin, diplômé de l&apos;EPFL, notre atelier
                  rassemble une équipe de 6 architectes passionnés. Nous privilégions
                  les matériaux durables et locaux, avec une attention particulière
                  à l&apos;efficacité énergétique.
                </p>
                <p>
                  Notre approche : écouter, comprendre, puis créer des espaces
                  qui racontent une histoire. Votre histoire.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {[
                { value: "50+", label: "Projets réalisés" },
                { value: "14", label: "Années d'expérience" },
                { value: "6", label: "Architectes dans l'équipe" },
                { value: "3", label: "Prix d'architecture" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-6 py-4 border-b border-neutral-200">
                  <span className="text-3xl font-light text-neutral-900 w-20">{stat.value}</span>
                  <span className="text-neutral-500 text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs tracking-[0.5em] uppercase text-neutral-400 mb-3">Prestations</p>
            <h2 className="text-3xl sm:text-4xl font-light">Nos <span className="font-bold">services</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-neutral-200">
            {[
              {
                title: "Architecture résidentielle",
                desc: "Villas, chalets, appartements. Du concept à la réalisation, nous concevons votre lieu de vie idéal, adapté à votre mode de vie et au paysage environnant.",
                items: ["Maisons individuelles", "Immeubles résidentiels", "Chalets de montagne", "Surélévations"],
              },
              {
                title: "Architecture commerciale",
                desc: "Bureaux, commerces, espaces médicaux. Des espaces fonctionnels et inspirants qui reflètent votre identité et optimisent votre activité.",
                items: ["Bureaux & coworking", "Commerces & restaurants", "Cabinets médicaux", "Espaces publics"],
              },
              {
                title: "Rénovation & Transformation",
                desc: "Redonner vie aux bâtiments existants. Nous transformons votre bien en respectant son histoire tout en le projetant dans la modernité.",
                items: ["Rénovation énergétique", "Transformation d'usage", "Valorisation patrimoniale", "Mise aux normes"],
              },
            ].map((service) => (
              <div key={service.title} className="bg-white p-10 group hover:bg-neutral-50 transition-colors">
                <h3 className="text-xl font-light mb-4 group-hover:text-amber-800 transition-colors">{service.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-neutral-400">
                      <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-16 bg-amber-50 rounded-sm p-10 border border-amber-100">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-light mb-3">Notre processus</h3>
                <div className="flex flex-wrap gap-x-12 gap-y-4 text-sm text-neutral-500">
                  {["1. Consultation initiale", "2. Étude de faisabilité", "3. Avant-projet", "4. Demande de permis", "5. Projet d'exécution", "6. Suivi de chantier"].map((step) => (
                    <span key={step} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                      {step}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-center md:text-right">
                <a href="#contact" className="inline-flex items-center gap-3 text-sm tracking-[0.15em] uppercase text-amber-800 font-medium hover:gap-5 transition-all">
                  Discutons de votre projet
                  <span className="w-8 h-px bg-amber-800" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-xs tracking-[0.5em] uppercase text-neutral-500 mb-3">Contact</p>
              <h2 className="text-3xl sm:text-4xl font-light mb-8">Parlons de votre <span className="font-bold">projet</span></h2>
              <p className="text-neutral-400 leading-relaxed mb-10">
                Chaque projet commence par une conversation. Contactez-nous pour une
                première consultation gratuite et sans engagement.
              </p>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-2">Adresse</h4>
                  <p className="text-neutral-300">Rue du Bourg 22<br />3960 Sierre</p>
                </div>
                <div>
                  <h4 className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-2">Téléphone</h4>
                  <p><a href="tel:+41274561890" className="text-neutral-300 hover:text-white transition-colors">+41 27 456 18 90</a></p>
                </div>
                <div>
                  <h4 className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-2">Email</h4>
                  <p><a href="mailto:info@atelier-bonvin.ch" className="text-neutral-300 hover:text-white transition-colors">info@atelier-bonvin.ch</a></p>
                </div>
                <div>
                  <h4 className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-2">Horaires</h4>
                  <p className="text-neutral-400 text-sm">Lundi - Vendredi : 08h00 - 12h00 / 13h30 - 17h30<br />Sur rendez-vous en dehors des heures</p>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Prénom" className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors text-sm" />
                  <input type="text" placeholder="Nom" className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors text-sm" />
                </div>
                <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors text-sm" />
                <input type="tel" placeholder="Téléphone" className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors text-sm" />
                <select className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 text-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors text-sm">
                  <option>Type de projet</option>
                  <option>Construction neuve - Résidentiel</option>
                  <option>Construction neuve - Commercial</option>
                  <option>Rénovation / Transformation</option>
                  <option>Aménagement intérieur</option>
                  <option>Conseil / Expertise</option>
                </select>
                <textarea placeholder="Décrivez brièvement votre projet..." rows={5} className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors text-sm" />
                <button className="w-full py-3 bg-white text-neutral-900 font-medium text-sm tracking-[0.1em] uppercase hover:bg-neutral-100 transition-colors">
                  Envoyer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 text-neutral-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div className="text-sm font-light tracking-[0.3em] uppercase text-neutral-400">Atelier Bonvin</div>
              <div className="text-[10px] tracking-[0.4em] uppercase text-neutral-600 mt-0.5">Architecture - Sierre</div>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-xs tracking-wider uppercase">
              <a href="#projets" className="hover:text-neutral-300 transition-colors">Projets</a>
              <a href="#philosophie" className="hover:text-neutral-300 transition-colors">Philosophie</a>
              <a href="#services" className="hover:text-neutral-300 transition-colors">Services</a>
              <a href="#contact" className="hover:text-neutral-300 transition-colors">Contact</a>
            </div>
            <div className="text-center md:text-right text-xs">
              <p>Rue du Bourg 22, 3960 Sierre</p>
              <p>+41 27 456 18 90</p>
            </div>
          </div>
          <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-xs text-neutral-700">
            &copy; 2026 Atelier Bonvin Architecture Sàrl. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
