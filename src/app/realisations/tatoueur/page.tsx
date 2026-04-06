import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Black Ink Studio | Salon de Tatouage - Bale",
  description:
    "Salon de tatouage professionnel a Bale. Tatouages realistes, old school, japonais, geometriques. Prenez rendez-vous avec nos artistes.",
};

export default function TatoueurDemo() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 font-sans">
      {/* Bandeau demo */}
      <div className="bg-gray-900 text-white text-center text-sm py-2 px-4">
        Ceci est une demonstration{" "}
        <Link href="/" className="underline font-semibold hover:text-red-400">
          OnVousTrouve.ch
        </Link>{" "}
        — Ce site n&apos;est pas reel
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-zinc-950/95 backdrop-blur-sm border-b border-red-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-red-600 flex items-center justify-center text-white font-black text-lg">
                BI
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-widest uppercase">
                  Black Ink
                </span>
                <p className="text-xs text-red-500 tracking-[0.3em] uppercase">
                  Studio — Bale
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
              <a href="#styles" className="hover:text-red-500 transition-colors">
                Styles
              </a>
              <a href="#portfolio" className="hover:text-red-500 transition-colors">
                Portfolio
              </a>
              <a href="#artistes" className="hover:text-red-500 transition-colors">
                Artistes
              </a>
              <a href="#avis" className="hover:text-red-500 transition-colors">
                Avis
              </a>
              <a href="#hygiene" className="hover:text-red-500 transition-colors">
                Hygiene
              </a>
              <a href="#contact" className="hover:text-red-500 transition-colors">
                Contact
              </a>
            </div>
            <a
              href="#rdv"
              className="hidden sm:inline-flex items-center px-6 py-2.5 bg-red-600 text-white text-sm font-bold uppercase tracking-wider hover:bg-red-500 transition-colors"
            >
              Prendre RDV
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-zinc-950 min-h-[85vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-red-950/20 via-zinc-950 to-zinc-950" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-72 h-72 bg-red-900/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-red-950/10 rounded-full blur-3xl" />
        </div>
        <div className="absolute left-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-red-900/15 to-transparent" />
        <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-zinc-800/20 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-red-800/50 text-red-500 text-xs font-bold tracking-[0.25em] uppercase mb-8">
                <span className="w-8 h-px bg-red-600" />
                Tattoo studio
                <span className="w-8 h-px bg-red-600" />
              </div>
              <h1 className="text-5xl sm:text-7xl font-black text-white leading-[0.9] uppercase tracking-tight">
                Votre peau,
                <br />
                notre <span className="text-red-500">art</span>
              </h1>
              <p className="mt-8 text-lg text-zinc-400 max-w-lg leading-relaxed">
                Trois artistes tatoueurs, chacun maitre de son style. Du realisme
                hyperdetaille au minimalisme geometrique, nous transformons vos
                idees en oeuvres permanentes. Studio professionnel certifie
                au coeur de Bale.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#rdv"
                  className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-wider hover:bg-red-500 transition-colors"
                >
                  Prendre rendez-vous
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center px-8 py-4 border-2 border-zinc-700 text-zinc-300 font-bold uppercase tracking-wider hover:border-red-600 hover:text-red-500 transition-colors"
                >
                  Voir le portfolio
                </a>
              </div>
              <div className="mt-14 flex items-center gap-10">
                <div>
                  <p className="text-4xl font-black text-red-500">8+</p>
                  <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Ans d&apos;experience</p>
                </div>
                <div className="w-px h-12 bg-zinc-800" />
                <div>
                  <p className="text-4xl font-black text-red-500">3000+</p>
                  <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Tatouages realises</p>
                </div>
                <div className="w-px h-12 bg-zinc-800" />
                <div>
                  <p className="text-4xl font-black text-red-500">4.9</p>
                  <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Note Google</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full aspect-[3/4] border border-zinc-800 overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800&q=80"
                    alt="Black Ink Studio Bale"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-red-600 px-6 py-4 flex items-center gap-3">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <div>
                    <p className="text-white font-bold text-sm">Certifie</p>
                    <p className="text-red-200 text-xs">Normes suisses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Styles */}
      <section id="styles" className="py-20 sm:py-28 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-red-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">
              Nos specialites
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wide">
              Styles de Tatouage
            </h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mt-6" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Realiste",
                desc: "Portraits, animaux, paysages. Reproduction fidele avec un souci du detail photographique. Noir & gris ou couleur.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                name: "Old School",
                desc: "Le style traditionnel americain. Contours epais, couleurs vives, motifs classiques : ancres, roses, hirondelles, pin-ups.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                  </svg>
                ),
              },
              {
                name: "Japonais",
                desc: "Irezumi traditionnel et neo-japonais. Dragons, koi, fleurs de cerisier, vagues. Pieces larges ou manches completes.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                ),
              },
              {
                name: "Geometrique",
                desc: "Lignes precises, formes sacrees, mandalas, patterns symetriques. L'alliance de la precision mathematique et de l'art corporel.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                  </svg>
                ),
              },
              {
                name: "Lettering",
                desc: "Calligraphie, typographies uniques, citations, prenoms. Du script elegant au graffiti, chaque lettrage est dessine sur mesure.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                ),
              },
              {
                name: "Dotwork",
                desc: "Technique pointilliste pour des degrades subtils et des textures uniques. Ideal pour les motifs ornementaux et les mandalas.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                  </svg>
                ),
              },
            ].map((s) => (
              <div
                key={s.name}
                className="bg-zinc-950 border border-zinc-800 p-6 hover:border-red-600/50 transition-colors group"
              >
                <div className="text-zinc-500 group-hover:text-red-500 transition-colors mb-4">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-3">
                  {s.name}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Galerie */}
      <section id="portfolio" className="py-20 sm:py-28 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-red-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">
              Nos realisations
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wide">
              Portfolio
            </h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Realisme noir & gris", img: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=800&q=80" },
              { label: "Neo-traditionnel", img: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=800&q=80" },
              { label: "Geometrie sacree", img: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=800&q=80" },
              { label: "Japanese sleeve", img: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=800&q=80" },
              { label: "Dotwork mandala", img: "https://images.unsplash.com/photo-1581922819941-6ab31ab79afc?w=800&q=80" },
              { label: "Lettering custom", img: "https://images.unsplash.com/photo-1550537687-c91072c4792d?w=800&q=80" },
            ].map((item, i) => (
              <div
                key={i}
                className="aspect-square border border-zinc-800 hover:border-red-600/50 overflow-hidden transition-all cursor-pointer group relative"
              >
                <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-zinc-950/60 group-hover:bg-zinc-950/30 transition-colors flex items-center justify-center">
                  <div className="text-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <p className="text-red-500 text-sm uppercase tracking-wider font-bold">
                      {item.label}
                    </p>
                    <div className="w-8 h-px bg-red-600 mx-auto mt-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Les Artistes */}
      <section id="artistes" className="py-20 sm:py-28 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-red-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">
              Les talents du studio
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wide">
              Nos Artistes
            </h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mt-6" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Viktor Hess",
                role: "Fondateur & Tatoueur Senior",
                exp: "12 ans d'experience",
                specialty: "Realisme noir & gris, portraits",
                styles: ["Realiste", "Noir & Gris", "Portraits"],
              },
              {
                name: "Mia Chen",
                role: "Tatoueuse & Illustratrice",
                exp: "8 ans d'experience",
                specialty: "Japonais, neo-traditionnel, couleur",
                styles: ["Japonais", "Neo-trad", "Couleur"],
              },
              {
                name: "Leo Brandt",
                role: "Tatoueur & Designer",
                exp: "6 ans d'experience",
                specialty: "Geometrique, dotwork, minimaliste",
                styles: ["Geometrique", "Dotwork", "Minimaliste"],
              },
            ].map((member) => (
              <div key={member.name} className="group">
                <div className="aspect-[3/4] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 group-hover:border-red-600/50 transition-colors flex items-center justify-center mb-5 relative overflow-hidden">
                  <span className="text-6xl text-zinc-700 font-black uppercase">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-zinc-950 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    {member.styles.map((s) => (
                      <span key={s} className="px-2 py-1 bg-red-600/80 text-white text-xs font-bold uppercase tracking-wider">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                  {member.name}
                </h3>
                <p className="text-red-500 text-sm font-semibold mt-1">{member.role}</p>
                <p className="text-zinc-500 text-xs mt-1">{member.exp}</p>
                <p className="text-zinc-600 text-xs mt-1 italic">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avis Clients */}
      <section id="avis" className="py-20 sm:py-28 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-red-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">
              Ils nous font confiance
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wide">
              Avis Clients
            </h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah W.",
                text: "Viktor a realise un portrait de ma fille sur mon avant-bras. Le realisme est bluffant, chaque detail est parfait. Un vrai artiste, patient et a l'ecoute. Le studio est impeccable.",
                stars: 5,
                date: "Mars 2026",
              },
              {
                name: "Julien B.",
                text: "Mia a cree un sleeve japonais complet : dragon, vagues, fleurs de cerisier. Quatre seances de pur bonheur. Le resultat depasse mes attentes. Bravo pour le talent et la rigueur hygienique.",
                stars: 5,
                date: "Fevrier 2026",
              },
              {
                name: "Elena M.",
                text: "Premier tatouage chez Black Ink : un mandala geometrique par Leo. Il a su me mettre en confiance et le resultat est magnifique. Les lignes sont d'une precision chirurgicale. Je recommande a 100%.",
                stars: 5,
                date: "Janvier 2026",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-zinc-900 border border-zinc-800 p-8 hover:border-red-600/40 transition-colors"
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
                <p className="text-zinc-300 leading-relaxed text-sm italic mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex justify-between items-end">
                  <p className="font-bold text-white">{review.name}</p>
                  <p className="text-xs text-zinc-600">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hygiene & Securite */}
      <section id="hygiene" className="py-20 sm:py-28 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-red-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">
              Votre securite, notre priorite
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wide">
              Hygiene & Securite
            </h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mt-6" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Materiel sterile",
                desc: "Aiguilles a usage unique, materiel sterilise en autoclave apres chaque client. Zero compromis.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
              {
                title: "Encres certifiees",
                desc: "Encres conformes aux normes europeennes et suisses, testees dermatologiquement, sans metaux lourds.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                ),
              },
              {
                title: "Studio desinfecte",
                desc: "Desinfection complete du poste de travail entre chaque seance. Surfaces, equipements, mobilier.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                ),
              },
              {
                title: "Suivi post-tattoo",
                desc: "Instructions de soin detaillees, creme cicatrisante offerte, retouche gratuite sous 3 mois si necessaire.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="bg-zinc-950 border border-zinc-800 p-6 hover:border-red-600/30 transition-colors group text-center">
                <div className="text-zinc-500 group-hover:text-red-500 transition-colors mx-auto w-fit mb-4">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prise de RDV */}
      <section id="rdv" className="py-20 sm:py-28 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-950/20 via-zinc-950 to-zinc-950" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-red-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">
              Commencez votre projet
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wide">
              Prise de Rendez-vous
            </h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mt-6" />
            <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
              Decrivez votre projet et nous vous recontacterons sous 48h
              pour planifier une consultation gratuite.
            </p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-8 sm:p-12">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-zinc-300 mb-2 text-left uppercase tracking-wider">
                  Nom complet
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-zinc-950 border border-zinc-700 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600/50"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-300 mb-2 text-left uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-zinc-950 border border-zinc-700 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600/50"
                  placeholder="votre@email.ch"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-300 mb-2 text-left uppercase tracking-wider">
                  Telephone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-zinc-950 border border-zinc-700 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600/50"
                  placeholder="+41 61 000 00 00"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-300 mb-2 text-left uppercase tracking-wider">
                  Artiste souhaite
                </label>
                <select className="w-full px-4 py-3 bg-zinc-950 border border-zinc-700 text-white focus:outline-none focus:border-red-600/50">
                  <option value="">Choisir un artiste</option>
                  <option value="viktor">Viktor Hess — Realisme</option>
                  <option value="mia">Mia Chen — Japonais / Neo-trad</option>
                  <option value="leo">Leo Brandt — Geometrique / Dotwork</option>
                  <option value="any">Pas de preference</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-300 mb-2 text-left uppercase tracking-wider">
                  Zone du corps
                </label>
                <select className="w-full px-4 py-3 bg-zinc-950 border border-zinc-700 text-white focus:outline-none focus:border-red-600/50">
                  <option value="">Ou souhaitez-vous le tatouage ?</option>
                  <option value="bras">Bras / Avant-bras</option>
                  <option value="jambe">Jambe / Mollet</option>
                  <option value="dos">Dos</option>
                  <option value="torse">Torse / Cotes</option>
                  <option value="epaule">Epaule / Omoplate</option>
                  <option value="main">Main / Doigts</option>
                  <option value="cou">Cou / Nuque</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-300 mb-2 text-left uppercase tracking-wider">
                  Taille estimee
                </label>
                <select className="w-full px-4 py-3 bg-zinc-950 border border-zinc-700 text-white focus:outline-none focus:border-red-600/50">
                  <option value="">Taille approximative</option>
                  <option value="petit">Petit (5-10 cm)</option>
                  <option value="moyen">Moyen (10-20 cm)</option>
                  <option value="grand">Grand (20-35 cm)</option>
                  <option value="tres-grand">Tres grand / Sleeve</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-bold text-zinc-300 mb-2 text-left uppercase tracking-wider">
                Description du projet
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-zinc-950 border border-zinc-700 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600/50 resize-none"
                placeholder="Decrivez votre idee de tatouage : style, motif, references, couleurs souhaitees..."
              />
            </div>
            <div className="mt-8 text-center">
              <button className="px-10 py-4 bg-red-600 text-white font-black uppercase tracking-wider hover:bg-red-500 transition-colors">
                Envoyer ma demande
              </button>
            </div>
          </div>
          <div className="mt-8 grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <svg className="w-7 h-7 text-red-500 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-white font-bold text-sm">Tarifs</p>
              <p className="text-zinc-500 text-xs mt-1">A partir de CHF 150.—</p>
              <p className="text-zinc-500 text-xs">Consultation gratuite</p>
            </div>
            <div>
              <svg className="w-7 h-7 text-red-500 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-white font-bold text-sm">Adresse</p>
              <p className="text-zinc-500 text-xs mt-1">Feldbergstrasse 12</p>
              <p className="text-zinc-500 text-xs">4057 Bale</p>
            </div>
            <div>
              <svg className="w-7 h-7 text-red-500 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <p className="text-white font-bold text-sm">Contact</p>
              <p className="text-zinc-500 text-xs mt-1">+41 61 283 45 67</p>
              <p className="text-zinc-500 text-xs">info@blackink-basel.ch</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-zinc-950 text-zinc-500 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-red-600 flex items-center justify-center text-white font-black text-lg">
                  BI
                </div>
                <span className="text-xl font-bold text-white tracking-widest uppercase">
                  Black Ink Studio
                </span>
              </div>
              <p className="text-sm leading-relaxed max-w-md text-zinc-500">
                Studio de tatouage professionnel a Bale. Trois artistes,
                six styles, une passion commune : transformer votre peau
                en oeuvre d&apos;art. Certifie aux normes suisses d&apos;hygiene.
              </p>
              <div className="flex gap-3 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-colors"
                >
                  <span className="text-xs text-white font-bold">IG</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-colors"
                >
                  <span className="text-xs text-white font-bold">FB</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-colors"
                >
                  <span className="text-xs text-white font-bold">TK</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Horaires</h4>
              <ul className="space-y-2 text-sm">
                <li>Lun-Dim : Ferme</li>
                <li>Mar-Ven : 10h00 - 19h00</li>
                <li>Samedi : 10h00 - 17h00</li>
                <li>Sur rendez-vous uniquement</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Feldbergstrasse 12, 4057 Bale</li>
                <li>+41 61 283 45 67</li>
                <li>info@blackink-basel.ch</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-12 pt-8 text-xs text-center text-zinc-600">
            <p>
              &copy; {new Date().getFullYear()} Black Ink Studio Bale — Tous droits
              reserves.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
