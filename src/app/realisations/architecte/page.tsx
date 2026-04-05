import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Atelier Bonvin Architecture | Cabinet d'Architecture - Sierre, Valais",
  description:
    "Atelier Bonvin Architecture à Sierre. Architecture contemporaine résidentielle et commerciale, rénovation et transformation en Valais.",
};

export default function ArchitectePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-neutral-900 font-sans">
      {/* Bandeau démo */}
      <div className="bg-gray-900 text-white text-center text-sm py-2 px-4">
        Ceci est une démonstration{" "}
        <Link
          href="/"
          className="underline font-semibold hover:text-blue-300"
        >
          OnVousTrouve.ch
        </Link>{" "}
        — Ce site n&apos;est pas réel
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div>
              <div className="text-lg font-light tracking-[0.3em] uppercase text-neutral-900">
                Atelier Bonvin
              </div>
              <div className="text-[10px] tracking-[0.5em] uppercase text-neutral-400">
                Architecture
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-12 text-xs tracking-[0.2em] uppercase text-neutral-400">
              <a
                href="#projets"
                className="hover:text-neutral-900 transition-colors duration-300"
              >
                Projets
              </a>
              <a
                href="#philosophie"
                className="hover:text-neutral-900 transition-colors duration-300"
              >
                Philosophie
              </a>
              <a
                href="#services"
                className="hover:text-neutral-900 transition-colors duration-300"
              >
                Services
              </a>
              <a
                href="#contact"
                className="hover:text-neutral-900 transition-colors duration-300"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
            alt="Villa contemporaine"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-white/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-24 pt-40 w-full">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.5em] uppercase text-neutral-500 mb-8">
              Cabinet d&apos;architecture &mdash; Sierre, Valais
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.05] mb-10 tracking-tight">
              Concevoir des
              <br />
              espaces qui
              <br />
              <span className="font-bold">inspirent</span>
            </h1>
            <p className="text-neutral-500 text-lg leading-relaxed mb-12 max-w-lg">
              Architecture contemporaine ancrée dans le paysage valaisan. Chaque
              projet est une conversation entre le lieu, la lumière et les gens
              qui l&apos;habitent.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="#projets"
                className="inline-flex items-center gap-4 text-sm tracking-[0.15em] uppercase text-neutral-900 font-medium hover:gap-6 transition-all duration-300 group"
              >
                Découvrir nos projets
                <span className="w-12 h-px bg-neutral-900 group-hover:w-20 transition-all duration-300" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-4 px-8 py-3 bg-neutral-900 text-white text-sm tracking-[0.15em] uppercase hover:bg-neutral-800 transition-colors duration-300"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Projets réalisés" },
              { value: "14", label: "Années d'expérience" },
              { value: "6", label: "Architectes" },
              { value: "3", label: "Prix d'architecture" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-light text-neutral-900">
                  {stat.value}
                </div>
                <div className="text-xs text-neutral-400 mt-2 tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projets */}
      <section id="projets" className="py-28 sm:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-24">
            <p className="text-xs tracking-[0.5em] uppercase text-neutral-400 mb-4">
              Portfolio
            </p>
            <h2 className="text-3xl sm:text-5xl font-light">
              Projets <span className="font-bold">réalisés</span>
            </h2>
            <div className="w-16 h-px bg-neutral-300 mt-8" />
          </div>
          <div className="space-y-32">
            {[
              {
                num: "01",
                title: "Villa Edelweiss",
                location: "Crans-Montana",
                year: "2024",
                desc: "Villa contemporaine de 280m2 intégrée dans la pente alpine. Grandes baies vitrées offrant une vue panoramique sur les Alpes. Matériaux : béton brut, bois de mélèze local, pierre naturelle.",
                tags: ["Résidentiel", "Neuf", "280m2"],
                img: "https://images.unsplash.com/photo-1486325212027-8a9f81f9e988?w=800&q=80",
              },
              {
                num: "02",
                title: "Loft Rhône",
                location: "Sierre",
                year: "2023",
                desc: "Transformation d'un ancien entrepôt vinicole en loft de standing. Conservation des éléments patrimoniaux (charpente en chêne, murs en pierre) tout en apportant confort moderne et luminosité.",
                tags: ["Rénovation", "Loft", "180m2"],
                img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
              },
              {
                num: "03",
                title: "Cabinet Médical du Lac",
                location: "Sierre",
                year: "2023",
                desc: "Aménagement intérieur d'un cabinet médical pluridisciplinaire. Atmosphère apaisante grâce aux matériaux naturels, circulation fluide des patients, acoustique soignée.",
                tags: ["Commercial", "Aménagement", "350m2"],
                img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
              },
              {
                num: "04",
                title: "Résidence Les Terrasses",
                location: "Sion",
                year: "2022",
                desc: "Ensemble résidentiel de 12 appartements avec terrasses généreuses. Architecture bioclimatique, panneaux solaires intégrés, certifié Minergie-P.",
                tags: ["Résidentiel", "Collectif", "Minergie-P"],
                img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
              },
            ].map((project, i) => (
              <div
                key={project.num}
                className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center group ${
                  i % 2 === 1 ? "md:direction-rtl" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2">
                    <span className="text-2xl font-extralight text-neutral-400">
                      {project.num}
                    </span>
                  </div>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <div className="flex items-center gap-4 mb-4 text-xs text-neutral-400 tracking-wide uppercase">
                    <span>{project.location}</span>
                    <span className="w-6 h-px bg-neutral-300" />
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-light mb-6 group-hover:text-amber-800 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-neutral-500 leading-relaxed text-base mb-8">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 bg-neutral-50 text-neutral-500 text-xs tracking-wide border border-neutral-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophie */}
      <section id="philosophie" className="py-28 sm:py-36 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-xs tracking-[0.5em] uppercase text-neutral-400 mb-4">
                Philosophie
              </p>
              <h2 className="text-3xl sm:text-5xl font-light mb-10 leading-tight">
                L&apos;architecture
                <br />
                au service
                <br />
                <span className="font-bold">du vivant</span>
              </h2>
              <div className="space-y-5 text-neutral-500 leading-relaxed">
                <p>
                  Chez Atelier Bonvin, nous croyons que l&apos;architecture doit
                  s&apos;effacer pour sublimer le quotidien. Chaque projet est
                  une réponse sensible au contexte : le paysage, le climat, la
                  culture locale.
                </p>
                <p>
                  Fondé en 2010 par Pierre Bonvin, diplômé de l&apos;EPFL,
                  notre atelier rassemble une équipe de 6 architectes passionnés.
                  Nous privilégions les matériaux durables et locaux, avec une
                  attention particulière à l&apos;efficacité énergétique.
                </p>
                <p>
                  Notre approche : écouter, comprendre, puis créer des espaces
                  qui racontent une histoire. Votre histoire.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-white p-10 border border-neutral-200">
                <blockquote className="text-xl font-light text-neutral-700 italic leading-relaxed mb-8">
                  &laquo; L&apos;architecture est le jeu savant, correct et
                  magnifique des volumes sous la lumière. &raquo;
                </blockquote>
                <p className="text-xs text-neutral-400 tracking-[0.2em] uppercase">
                  Le Corbusier
                </p>
              </div>
              <div className="grid grid-cols-2 gap-px bg-neutral-200 mt-px">
                {[
                  { value: "50+", label: "Projets réalisés" },
                  { value: "14", label: "Années d'expérience" },
                  { value: "6", label: "Architectes" },
                  { value: "3", label: "Prix d'architecture" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white p-6 text-center"
                  >
                    <span className="text-2xl font-light text-neutral-900">
                      {stat.value}
                    </span>
                    <span className="block text-neutral-400 text-xs mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 sm:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-20">
            <p className="text-xs tracking-[0.5em] uppercase text-neutral-400 mb-4">
              Prestations
            </p>
            <h2 className="text-3xl sm:text-5xl font-light">
              Nos <span className="font-bold">services</span>
            </h2>
            <div className="w-16 h-px bg-neutral-300 mt-8" />
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-neutral-200">
            {[
              {
                title: "Architecture résidentielle",
                desc: "Villas, chalets, appartements. Du concept à la réalisation, nous concevons votre lieu de vie idéal, adapté à votre mode de vie et au paysage environnant.",
                items: [
                  "Maisons individuelles",
                  "Immeubles résidentiels",
                  "Chalets de montagne",
                  "Surélévations",
                ],
              },
              {
                title: "Architecture commerciale",
                desc: "Bureaux, commerces, espaces médicaux. Des espaces fonctionnels et inspirants qui reflètent votre identité et optimisent votre activité.",
                items: [
                  "Bureaux & coworking",
                  "Commerces & restaurants",
                  "Cabinets médicaux",
                  "Espaces publics",
                ],
              },
              {
                title: "Rénovation & Transformation",
                desc: "Redonner vie aux bâtiments existants. Nous transformons votre bien en respectant son histoire tout en le projetant dans la modernité.",
                items: [
                  "Rénovation énergétique",
                  "Transformation d'usage",
                  "Valorisation patrimoniale",
                  "Mise aux normes",
                ],
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white p-10 sm:p-12 group hover:bg-neutral-50 transition-colors duration-300"
              >
                <h3 className="text-xl font-light mb-5 group-hover:text-amber-800 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-neutral-400"
                    >
                      <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Processus */}
          <div className="mt-20 bg-neutral-50 p-10 sm:p-14 border border-neutral-100">
            <div className="grid md:grid-cols-3 gap-10 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-light mb-6">Notre processus</h3>
                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4 text-sm text-neutral-500">
                  {[
                    "1. Consultation initiale",
                    "2. Étude de faisabilité",
                    "3. Avant-projet",
                    "4. Demande de permis",
                    "5. Projet d'exécution",
                    "6. Suivi de chantier",
                  ].map((step) => (
                    <span key={step} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-amber-700/60 rounded-full shrink-0" />
                      {step}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-center md:text-right">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 text-sm tracking-[0.15em] uppercase text-amber-800 font-medium hover:gap-5 transition-all duration-300"
                >
                  Discutons de votre projet
                  <span className="w-8 h-px bg-amber-800" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 sm:py-36 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-xs tracking-[0.5em] uppercase text-neutral-500 mb-4">
                Contact
              </p>
              <h2 className="text-3xl sm:text-5xl font-light mb-10 leading-tight">
                Parlons de
                <br />
                votre <span className="font-bold">projet</span>
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-12">
                Chaque projet commence par une conversation. Contactez-nous pour
                une première consultation gratuite et sans engagement.
              </p>
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-3">
                    Adresse
                  </h4>
                  <p className="text-neutral-300">
                    Rue du Bourg 22
                    <br />
                    3960 Sierre
                  </p>
                </div>
                <div>
                  <h4 className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-3">
                    Téléphone
                  </h4>
                  <p>
                    <a
                      href="tel:+41274561890"
                      className="text-neutral-300 hover:text-white transition-colors duration-300"
                    >
                      +41 27 456 18 90
                    </a>
                  </p>
                </div>
                <div>
                  <h4 className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-3">
                    Email
                  </h4>
                  <p>
                    <a
                      href="mailto:info@atelier-bonvin.ch"
                      className="text-neutral-300 hover:text-white transition-colors duration-300"
                    >
                      info@atelier-bonvin.ch
                    </a>
                  </p>
                </div>
                <div>
                  <h4 className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-3">
                    Horaires
                  </h4>
                  <p className="text-neutral-400 text-sm">
                    Lundi - Vendredi : 08h00 - 12h00 / 13h30 - 17h30
                    <br />
                    Sur rendez-vous en dehors des heures
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Prénom"
                    className="w-full px-5 py-4 bg-neutral-800/50 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors duration-300 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Nom"
                    className="w-full px-5 py-4 bg-neutral-800/50 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors duration-300 text-sm"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-5 py-4 bg-neutral-800/50 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors duration-300 text-sm"
                />
                <input
                  type="tel"
                  placeholder="Téléphone"
                  className="w-full px-5 py-4 bg-neutral-800/50 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors duration-300 text-sm"
                />
                <select className="w-full px-5 py-4 bg-neutral-800/50 border border-neutral-700 text-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors duration-300 text-sm">
                  <option>Type de projet</option>
                  <option>Construction neuve - Résidentiel</option>
                  <option>Construction neuve - Commercial</option>
                  <option>Rénovation / Transformation</option>
                  <option>Aménagement intérieur</option>
                  <option>Conseil / Expertise</option>
                </select>
                <textarea
                  placeholder="Décrivez brièvement votre projet..."
                  rows={5}
                  className="w-full px-5 py-4 bg-neutral-800/50 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors duration-300 text-sm"
                />
                <button className="w-full py-4 bg-white text-neutral-900 font-medium text-sm tracking-[0.15em] uppercase hover:bg-neutral-100 transition-colors duration-300">
                  Envoyer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 text-neutral-500 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-10 items-center">
            <div>
              <div className="text-sm font-light tracking-[0.3em] uppercase text-neutral-400">
                Atelier Bonvin
              </div>
              <div className="text-[10px] tracking-[0.4em] uppercase text-neutral-600 mt-1">
                Architecture - Sierre
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-xs tracking-wider uppercase">
              <a
                href="#projets"
                className="hover:text-neutral-300 transition-colors duration-300"
              >
                Projets
              </a>
              <a
                href="#philosophie"
                className="hover:text-neutral-300 transition-colors duration-300"
              >
                Philosophie
              </a>
              <a
                href="#services"
                className="hover:text-neutral-300 transition-colors duration-300"
              >
                Services
              </a>
              <a
                href="#contact"
                className="hover:text-neutral-300 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
            <div className="text-right text-xs">
              <p>Rue du Bourg 22, 3960 Sierre</p>
              <p className="mt-1">+41 27 456 18 90</p>
            </div>
          </div>
          <div className="border-t border-neutral-800 mt-12 pt-10 text-center text-xs text-neutral-700">
            &copy; {new Date().getFullYear()} Atelier Bonvin Architecture Sàrl. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
