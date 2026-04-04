import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Studio Lumière | Photographe Professionnelle - Sion, Valais",
  description:
    "Studio Lumière, photographe professionnelle à Sion. Mariages, portraits, corporate, événements. Capturer l'instant parfait avec authenticité et élégance.",
};

export default function PhotographePage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-white font-serif">
      {/* Bandeau démo */}
      <div className="bg-gray-900 text-white text-center text-sm py-2 px-4 font-sans">
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
      <header className="sticky top-0 z-50 bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div>
              <div className="text-2xl font-bold tracking-[0.2em] text-white">
                STUDIO
              </div>
              <div className="text-[11px] tracking-[0.5em] text-amber-400 -mt-0.5">
                LUMIERE
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-12 text-xs tracking-[0.25em] uppercase text-neutral-400">
              <a
                href="#portfolio"
                className="hover:text-amber-400 transition-colors duration-300"
              >
                Portfolio
              </a>
              <a
                href="#apropos"
                className="hover:text-amber-400 transition-colors duration-300"
              >
                A propos
              </a>
              <a
                href="#tarifs"
                className="hover:text-amber-400 transition-colors duration-300"
              >
                Tarifs
              </a>
              <a
                href="#contact"
                className="hover:text-amber-400 transition-colors duration-300"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80"
            alt="Photographie de mariage"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/80 to-neutral-950" />
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <p className="text-amber-400 tracking-[0.6em] uppercase text-xs sm:text-sm mb-10 animate-fade-in">
            Photographe professionnelle &mdash; Sion, Valais
          </p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.85] mb-10">
            Capturer
            <br />
            <span className="italic text-amber-400">l&apos;instant</span>
            <br />
            parfait
          </h1>
          <p className="text-neutral-400 text-lg sm:text-xl max-w-2xl mx-auto mb-14 leading-relaxed">
            Mariages, portraits, corporate, événements. Chaque photo raconte
            votre histoire avec authenticité et élégance.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#portfolio"
              className="inline-flex items-center px-10 py-4 border border-amber-400 text-amber-400 tracking-[0.2em] uppercase text-sm hover:bg-amber-400 hover:text-black transition-all duration-300"
            >
              Voir le portfolio
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-10 py-4 bg-amber-400 text-black tracking-[0.2em] uppercase text-sm hover:bg-amber-300 transition-all duration-300 font-semibold"
            >
              Me contacter
            </a>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-neutral-600 animate-bounce">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-28 sm:py-36 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-24">
            <p className="text-amber-400 tracking-[0.6em] uppercase text-xs mb-5">
              Portfolio
            </p>
            <h2 className="text-4xl sm:text-6xl font-bold">Mes univers</h2>
            <div className="w-16 h-px bg-amber-400/40 mx-auto mt-8" />
          </div>

          {/* Mariages */}
          <div className="mb-28">
            <div className="flex items-center gap-6 mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold whitespace-nowrap">
                Mariages
              </h3>
              <div className="h-px bg-neutral-800 flex-1" />
              <p className="text-neutral-500 text-sm italic hidden sm:block">
                L&apos;amour, capturé dans sa plus belle lumière
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  cat: "Cérémonie",
                  img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
                },
                {
                  cat: "Préparatifs",
                  img: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80",
                },
                {
                  cat: "Couple",
                  img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
                },
                {
                  cat: "Réception",
                  img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
                },
              ].map((item, i) => (
                <div
                  key={item.cat}
                  className={`${
                    i === 0 ? "md:col-span-2 md:row-span-2" : ""
                  } bg-neutral-900 overflow-hidden group relative cursor-pointer`}
                >
                  <div
                    className={`${
                      i === 0 ? "h-80 md:h-full" : "h-44 md:h-56"
                    }`}
                  >
                    <img
                      src={item.img}
                      alt={item.cat}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <span className="text-amber-400 text-xs tracking-[0.3em] uppercase block mb-1">
                        Mariage
                      </span>
                      <span className="text-white text-lg font-semibold">
                        {item.cat}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Portraits */}
          <div className="mb-28">
            <div className="flex items-center gap-6 mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold whitespace-nowrap">
                Portraits
              </h3>
              <div className="h-px bg-neutral-800 flex-1" />
              <p className="text-neutral-500 text-sm italic hidden sm:block">
                Révéler la personnalité de chacun
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {[
                {
                  cat: "Studio",
                  img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
                },
                {
                  cat: "Extérieur",
                  img: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80",
                },
                {
                  cat: "Famille",
                  img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
                },
                {
                  cat: "Grossesse",
                  img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
                },
                {
                  cat: "Nouveau-né",
                  img: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80",
                },
                {
                  cat: "Artistique",
                  img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
                },
              ].map((item) => (
                <div
                  key={item.cat}
                  className="bg-neutral-900 overflow-hidden group relative aspect-[3/4] cursor-pointer"
                >
                  <img
                    src={item.img}
                    alt={`Portrait ${item.cat}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-medium">
                      {item.cat}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Corporate */}
          <div>
            <div className="flex items-center gap-6 mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold whitespace-nowrap">
                Corporate
              </h3>
              <div className="h-px bg-neutral-800 flex-1" />
              <p className="text-neutral-500 text-sm italic hidden sm:block">
                Valoriser votre image professionnelle
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  cat: "Portraits professionnels",
                  img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
                },
                {
                  cat: "Événements d'entreprise",
                  img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
                },
                {
                  cat: "Architecture & Intérieur",
                  img: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80",
                },
              ].map((item) => (
                <div
                  key={item.cat}
                  className="bg-neutral-900 overflow-hidden group relative h-64 sm:h-72 cursor-pointer"
                >
                  <img
                    src={item.img}
                    alt={item.cat}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white text-base font-medium">
                      {item.cat}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bandeau citation */}
      <section className="py-20 bg-neutral-900 border-y border-neutral-800/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <blockquote className="text-2xl sm:text-3xl font-light italic text-neutral-300 leading-relaxed">
            &laquo; Les plus belles photos naissent de la spontanéité.
            <br className="hidden sm:block" />
            Mon rôle est d&apos;être là au bon moment. &raquo;
          </blockquote>
          <p className="text-amber-400 text-sm tracking-[0.3em] uppercase mt-8">
            Claire Bonvin
          </p>
        </div>
      </section>

      {/* A propos */}
      <section id="apropos" className="py-28 sm:py-36 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80"
                  alt="Claire Bonvin, photographe professionnelle"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-400 text-black p-8 hidden sm:block">
                <p className="text-3xl font-black">12</p>
                <p className="text-xs uppercase tracking-[0.2em] mt-1">
                  Ans d&apos;expérience
                </p>
              </div>
            </div>
            <div>
              <p className="text-amber-400 tracking-[0.6em] uppercase text-xs mb-5">
                A propos
              </p>
              <h2 className="text-3xl sm:text-5xl font-bold mb-8 leading-tight">
                L&apos;oeil derrière
                <br />
                l&apos;objectif
              </h2>
              <div className="space-y-5 text-neutral-400 leading-relaxed text-base">
                <p>
                  Passionnée de photographie depuis l&apos;adolescence, j&apos;ai
                  transformé ma passion en métier il y a 12 ans. Diplômée de
                  l&apos;ECAL à Lausanne, j&apos;ai ouvert le Studio Lumière à
                  Sion en 2016.
                </p>
                <p>
                  Mon approche : capturer l&apos;authenticité de chaque moment,
                  avec une lumière naturelle et une esthétique intemporelle. Je
                  crois que les plus belles photos naissent de la spontanéité.
                </p>
                <p>
                  En 12 ans, j&apos;ai eu l&apos;honneur de photographier plus
                  de 200 mariages à travers la Suisse romande, et
                  d&apos;accompagner des dizaines d&apos;entreprises dans leur
                  communication visuelle.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-neutral-800">
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-amber-400">
                    200+
                  </div>
                  <div className="text-xs text-neutral-500 mt-2 tracking-wide uppercase">
                    Mariages
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-amber-400">
                    12
                  </div>
                  <div className="text-xs text-neutral-500 mt-2 tracking-wide uppercase">
                    Ans
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-amber-400">
                    50+
                  </div>
                  <div className="text-xs text-neutral-500 mt-2 tracking-wide uppercase">
                    Entreprises
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section id="tarifs" className="py-28 sm:py-36 bg-neutral-900">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-amber-400 tracking-[0.6em] uppercase text-xs mb-5">
              Tarifs
            </p>
            <h2 className="text-4xl sm:text-6xl font-bold">
              Investissez dans
              <br />
              vos souvenirs
            </h2>
            <div className="w-16 h-px bg-amber-400/40 mx-auto mt-8" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Portrait",
                price: "350",
                desc: "Séance en studio ou extérieur, 1h, 15 photos retouchées en haute résolution.",
                detail: "Maquillage en option",
                popular: false,
              },
              {
                name: "Mariage Essentiel",
                price: "2'900",
                desc: "Couverture de la cérémonie et du vin d'honneur. 200+ photos retouchées.",
                detail: "6h de couverture",
                popular: false,
              },
              {
                name: "Mariage Premium",
                price: "4'500",
                desc: "Journée complète, des préparatifs à la soirée. 500+ photos, album premium inclus.",
                detail: "Journée entière",
                popular: true,
              },
              {
                name: "Corporate",
                price: "Sur devis",
                desc: "Portraits d'équipe, événements, architecture. Tarif adapté à vos besoins.",
                detail: "Licence commerciale incluse",
                popular: false,
              },
            ].map((tarif) => (
              <div
                key={tarif.name}
                className={`relative border rounded-sm p-8 sm:p-10 transition-all duration-300 group hover:-translate-y-1 ${
                  tarif.popular
                    ? "border-amber-400/60 bg-amber-400/5"
                    : "border-neutral-800 hover:border-amber-400/30"
                }`}
              >
                {tarif.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-black text-xs font-bold tracking-[0.15em] uppercase px-4 py-1">
                    Populaire
                  </div>
                )}
                <h3 className="text-lg font-bold text-amber-400 mb-3">
                  {tarif.name}
                </h3>
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                  {tarif.price.startsWith("Sur")
                    ? tarif.price
                    : `CHF ${tarif.price}`}
                </div>
                <p className="text-xs text-neutral-500 mb-6">{tarif.detail}</p>
                <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                  {tarif.desc}
                </p>
                <a
                  href="#contact"
                  className={`block text-center py-3 text-sm tracking-[0.1em] uppercase transition-all duration-300 ${
                    tarif.popular
                      ? "bg-amber-400 text-black font-bold hover:bg-amber-300"
                      : "border border-neutral-700 text-neutral-300 hover:border-amber-400 hover:text-amber-400"
                  }`}
                >
                  Réserver
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-neutral-600 text-sm mt-10">
            Tous les forfaits incluent une galerie en ligne privée pour le
            téléchargement de vos photos.
          </p>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-28 sm:py-36 bg-neutral-950">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-amber-400 tracking-[0.6em] uppercase text-xs mb-5">
              Témoignages
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold">
              Ce qu&apos;ils en disent
            </h2>
            <div className="w-16 h-px bg-amber-400/40 mx-auto mt-8" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sophie & Marc",
                event: "Mariage, 2025",
                text: "Claire a su capturer chaque émotion de notre journée. Des photos naturelles, lumineuses, qui nous font revivre ces moments magiques à chaque fois.",
              },
              {
                name: "Entreprise Vitalis SA",
                event: "Corporate, 2024",
                text: "Un travail remarquable pour nos portraits d'équipe et notre événement annuel. Professionnelle, discrète et toujours souriante. Résultat au-delà de nos attentes.",
              },
              {
                name: "Famille Ducret",
                event: "Portrait famille, 2025",
                text: "Une séance en extérieur mémorable avec nos trois enfants. Claire a une patience d'ange et un oeil incroyable pour saisir les instants spontanés.",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="border border-neutral-800 p-8 hover:border-amber-400/30 transition-colors duration-300"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
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
                <p className="text-neutral-300 leading-relaxed text-sm italic mb-8">
                  &laquo; {t.text} &raquo;
                </p>
                <div>
                  <p className="text-white font-semibold">{t.name}</p>
                  <p className="text-neutral-500 text-xs mt-1">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 sm:py-36 bg-neutral-900">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-amber-400 tracking-[0.6em] uppercase text-xs mb-5">
              Contact
            </p>
            <h2 className="text-4xl sm:text-6xl font-bold">
              Parlons de
              <br />
              votre projet
            </h2>
            <div className="w-16 h-px bg-amber-400/40 mx-auto mt-8" />
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="space-y-8 text-neutral-400">
                <div>
                  <h4 className="text-amber-400 text-xs uppercase tracking-[0.3em] mb-3">
                    Studio
                  </h4>
                  <p className="text-neutral-300 leading-relaxed">
                    Rue de la Dixence 8<br />
                    1950 Sion
                  </p>
                </div>
                <div>
                  <h4 className="text-amber-400 text-xs uppercase tracking-[0.3em] mb-3">
                    Téléphone
                  </h4>
                  <p>
                    <a
                      href="tel:+41274561234"
                      className="text-neutral-300 hover:text-amber-400 transition-colors duration-300"
                    >
                      +41 27 456 12 34
                    </a>
                  </p>
                </div>
                <div>
                  <h4 className="text-amber-400 text-xs uppercase tracking-[0.3em] mb-3">
                    Email
                  </h4>
                  <p>
                    <a
                      href="mailto:claire@studio-lumiere.ch"
                      className="text-neutral-300 hover:text-amber-400 transition-colors duration-300"
                    >
                      claire@studio-lumiere.ch
                    </a>
                  </p>
                </div>
                <div>
                  <h4 className="text-amber-400 text-xs uppercase tracking-[0.3em] mb-3">
                    Réseaux sociaux
                  </h4>
                  <div className="flex gap-6 mt-2">
                    <span className="text-neutral-400 hover:text-amber-400 cursor-pointer transition-colors duration-300 text-sm">
                      Instagram
                    </span>
                    <span className="text-neutral-400 hover:text-amber-400 cursor-pointer transition-colors duration-300 text-sm">
                      Facebook
                    </span>
                    <span className="text-neutral-400 hover:text-amber-400 cursor-pointer transition-colors duration-300 text-sm">
                      Pinterest
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full px-5 py-4 bg-neutral-800/50 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors duration-300 text-sm"
                />
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-5 py-4 bg-neutral-800/50 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors duration-300 text-sm"
                />
                <select className="w-full px-5 py-4 bg-neutral-800/50 border border-neutral-700 text-neutral-500 focus:outline-none focus:border-amber-400 transition-colors duration-300 text-sm">
                  <option>Type de projet</option>
                  <option>Mariage</option>
                  <option>Portrait</option>
                  <option>Corporate</option>
                  <option>Événement</option>
                  <option>Autre</option>
                </select>
                <input
                  type="text"
                  placeholder="Date souhaitée"
                  className="w-full px-5 py-4 bg-neutral-800/50 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors duration-300 text-sm"
                />
                <textarea
                  placeholder="Décrivez votre projet..."
                  rows={5}
                  className="w-full px-5 py-4 bg-neutral-800/50 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors duration-300 text-sm"
                />
                <button className="w-full py-4 bg-amber-400 text-black font-bold tracking-[0.15em] uppercase text-sm hover:bg-amber-300 transition-colors duration-300">
                  Envoyer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-800/50 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-10 items-center">
            <div>
              <div className="text-xl font-bold tracking-[0.2em]">
                STUDIO LUMIERE
              </div>
              <p className="text-neutral-600 text-sm mt-2">
                Photographe professionnelle
              </p>
              <p className="text-neutral-700 text-sm">Sion, Valais</p>
            </div>
            <div className="text-center">
              <p className="text-neutral-500 text-sm">
                +41 27 456 12 34
              </p>
              <p className="text-neutral-500 text-sm mt-1">
                claire@studio-lumiere.ch
              </p>
              <p className="text-neutral-600 text-sm mt-1">
                Rue de la Dixence 8, 1950 Sion
              </p>
            </div>
            <div className="flex justify-end gap-8 text-neutral-600 text-sm">
              <span className="hover:text-amber-400 cursor-pointer transition-colors duration-300">
                Instagram
              </span>
              <span className="hover:text-amber-400 cursor-pointer transition-colors duration-300">
                Facebook
              </span>
              <span className="hover:text-amber-400 cursor-pointer transition-colors duration-300">
                Pinterest
              </span>
            </div>
          </div>
          <div className="border-t border-neutral-800/50 mt-12 pt-10 text-center text-xs text-neutral-700">
            &copy; {new Date().getFullYear()} Studio Lumière. Tous droits réservés. Toute
            reproduction interdite sans autorisation.
          </div>
        </div>
      </footer>
    </div>
  );
}
