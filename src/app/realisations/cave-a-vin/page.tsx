import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cave du Valais | Cave a Vin & Degustations - Sion",
  description:
    "Cave du Valais a Sion. Selection de vins suisses et internationaux, degustations, cours d'oenologie. Decouvrez nos crus d'exception.",
};

export default function CaveAVinDemo() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8F0] font-sans">
      {/* Bandeau demo */}
      <div className="bg-gray-900 text-white text-center text-sm py-2 px-4">
        Ceci est une demonstration{" "}
        <Link href="/" className="underline font-semibold hover:text-blue-300">
          OnVousTrouve.ch
        </Link>{" "}
        — Ce site n&apos;est pas reel
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#2D0A1F]/95 backdrop-blur-sm border-b border-[#5C1A3A]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B1A4A] to-[#4A0E2A] flex items-center justify-center text-[#D4A853] font-bold text-lg font-serif">
                V
              </div>
              <div>
                <span className="text-xl font-serif font-bold text-[#F5E6D0] tracking-wide">
                  Cave du Valais
                </span>
                <p className="text-xs text-[#D4A853]/70 tracking-widest uppercase">
                  Sion
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#F5E6D0]/80">
              <a href="#selection" className="hover:text-[#D4A853] transition-colors">
                Nos Vins
              </a>
              <a href="#degustations" className="hover:text-[#D4A853] transition-colors">
                Degustations
              </a>
              <a href="#histoire" className="hover:text-[#D4A853] transition-colors">
                Notre Histoire
              </a>
              <a href="#avis" className="hover:text-[#D4A853] transition-colors">
                Avis
              </a>
              <a href="#contact" className="hover:text-[#D4A853] transition-colors">
                Contact
              </a>
            </div>
            <a
              href="#degustations"
              className="hidden sm:inline-flex items-center px-6 py-2.5 rounded-full bg-[#8B1A4A] text-[#F5E6D0] text-sm font-semibold hover:bg-[#A02055] transition-colors border border-[#D4A853]/30"
            >
              Reserver une degustation
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2D0A1F] via-[#3D1028] to-[#1A0612] min-h-[85vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#8B1A4A]/15 via-transparent to-transparent" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#D4A853]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8B1A4A]/10 rounded-full blur-3xl" />
        {/* Decorative grape pattern */}
        <div className="absolute top-1/4 right-10 opacity-5 text-[200px] leading-none select-none pointer-events-none">
          🍇
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#D4A853] font-medium tracking-[0.25em] uppercase text-sm mb-6">
                Cave a vin &bull; Caviste &bull; Degustations
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#F5E6D0] leading-tight">
                Le terroir
                <br />
                valaisan dans
                <br />
                <span className="text-[#D4A853]">votre verre</span>
              </h1>
              <p className="mt-8 text-lg text-[#F5E6D0]/60 max-w-lg leading-relaxed">
                Depuis trois generations, nous selectionnons les plus beaux crus
                du Valais et du monde entier. Venez decouvrir notre cave voutee
                et laissez-vous guider par nos sommeliers passionnes.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#selection"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-[#8B1A4A] text-[#F5E6D0] font-semibold hover:bg-[#A02055] transition-colors shadow-lg shadow-[#8B1A4A]/25 border border-[#D4A853]/20"
                >
                  Decouvrir nos vins
                </a>
                <a
                  href="#degustations"
                  className="inline-flex items-center px-8 py-4 rounded-full border-2 border-[#D4A853]/30 text-[#D4A853] font-semibold hover:border-[#D4A853] hover:text-[#F5E6D0] transition-colors"
                >
                  Nos degustations
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full aspect-[3/4] rounded-3xl bg-gradient-to-br from-[#4A1530]/60 to-[#2D0A1F]/60 border border-[#D4A853]/10 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4 opacity-30">🍷</div>
                    <p className="text-[#D4A853]/40 text-sm italic">
                      Photo de la cave voutee
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#2D0A1F] border border-[#D4A853]/20 rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">🏆</div>
                    <div>
                      <p className="text-[#F5E6D0] text-sm font-semibold">
                        +500 references
                      </p>
                      <p className="text-[#D4A853]/60 text-xs">
                        Vins suisses & internationaux
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-[#2D0A1F] border border-[#D4A853]/20 rounded-2xl p-4 shadow-2xl">
                  <p className="text-[#D4A853] text-xs font-medium uppercase tracking-wider">
                    Depuis 1962
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres cles */}
      <section className="bg-[#2D0A1F] border-y border-[#5C1A3A]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "References" },
              { number: "62", label: "Annees d'experience" },
              { number: "12", label: "Pays representes" },
              { number: "3", label: "Generations" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-4xl font-serif font-bold text-[#D4A853]">
                  {stat.number}
                </p>
                <p className="text-[#F5E6D0]/50 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Selection */}
      <section id="selection" className="py-20 sm:py-28 bg-[#FDF8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#8B1A4A] font-medium tracking-widest uppercase text-sm mb-3">
              Notre cave
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2D0A1F]">
              Notre Selection de Vins
            </h2>
            <p className="mt-4 text-[#5C3A4A] max-w-2xl mx-auto">
              Un choix exigeant de vins du Valais, de Suisse et du monde entier,
              selectionnes par nos sommeliers pour leur caractere et leur qualite.
            </p>
          </div>

          {/* Categories de vins */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "🔴",
                title: "Vins Rouges",
                description:
                  "Pinot Noir, Syrah, Humagne Rouge, Cornalin... Les grands rouges du Valais et d'ailleurs.",
                count: "180+ references",
                bg: "from-[#8B1A4A]/10 to-[#5C1030]/5",
                border: "border-[#8B1A4A]/20",
              },
              {
                icon: "⚪",
                title: "Vins Blancs",
                description:
                  "Fendant, Petite Arvine, Johannisberg, Heida... La fraicheur des cepages alpins.",
                count: "200+ references",
                bg: "from-[#D4A853]/10 to-[#C49A40]/5",
                border: "border-[#D4A853]/20",
              },
              {
                icon: "🌸",
                title: "Vins Roses",
                description:
                  "OEil-de-Perdrix, roses de Gamay et assemblages delicats pour les beaux jours.",
                count: "40+ references",
                bg: "from-pink-100/50 to-pink-50/30",
                border: "border-pink-200/50",
              },
            ].map((cat) => (
              <div
                key={cat.title}
                className={`bg-gradient-to-br ${cat.bg} border ${cat.border} rounded-3xl p-8 text-center hover:shadow-lg transition-shadow`}
              >
                <div className="text-5xl mb-4">{cat.icon}</div>
                <h3 className="text-xl font-serif font-bold text-[#2D0A1F] mb-3">
                  {cat.title}
                </h3>
                <p className="text-[#5C3A4A] text-sm leading-relaxed mb-4">
                  {cat.description}
                </p>
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#2D0A1F]/5 text-[#8B1A4A] text-xs font-semibold">
                  {cat.count}
                </span>
              </div>
            ))}
          </div>

          {/* Vins vedettes */}
          <h3 className="text-2xl font-serif font-bold text-[#2D0A1F] text-center mb-10">
            Coups de coeur du sommelier
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Cornalin du Valais AOC",
                domaine: "Domaine Gilliard, 2023",
                type: "Rouge",
                price: "32",
                note: "93/100",
              },
              {
                name: "Petite Arvine AOC",
                domaine: "Cave Dorsaz, 2024",
                type: "Blanc",
                price: "28",
                note: "91/100",
              },
              {
                name: "Syrah du Valais AOC",
                domaine: "Simon Maye & Fils, 2022",
                type: "Rouge",
                price: "38",
                note: "94/100",
              },
              {
                name: "Heida du Valais AOC",
                domaine: "Cave St-Pierre, 2024",
                type: "Blanc",
                price: "26",
                note: "90/100",
              },
            ].map((vin) => (
              <div
                key={vin.name}
                className="bg-white rounded-2xl border border-[#E8D5C0] p-6 hover:shadow-md transition-shadow group"
              >
                <div className="w-full h-40 rounded-xl bg-gradient-to-b from-[#2D0A1F]/5 to-[#2D0A1F]/10 flex items-center justify-center mb-4">
                  <div className="text-5xl opacity-30 group-hover:opacity-50 transition-opacity">
                    🍾
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      vin.type === "Rouge"
                        ? "bg-[#8B1A4A]/10 text-[#8B1A4A]"
                        : "bg-[#D4A853]/10 text-[#A07D30]"
                    }`}
                  >
                    {vin.type}
                  </span>
                  <span className="text-xs font-bold text-[#D4A853]">
                    {vin.note}
                  </span>
                </div>
                <h4 className="font-serif font-bold text-[#2D0A1F] mb-1">
                  {vin.name}
                </h4>
                <p className="text-[#5C3A4A] text-xs mb-3">{vin.domaine}</p>
                <p className="text-lg font-bold text-[#8B1A4A]">
                  CHF {vin.price}.—
                </p>
              </div>
            ))}
          </div>

          {/* Vins internationaux */}
          <div className="mt-16 bg-white rounded-3xl border border-[#E8D5C0] p-8 sm:p-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-bold text-[#2D0A1F]">
                Selection internationale
              </h3>
              <p className="text-[#5C3A4A] text-sm mt-2">
                Les plus belles appellations du monde
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  region: "🇫🇷 Bordeaux",
                  vins: "Saint-Emilion, Pauillac, Margaux",
                  from: "Des CHF 35.—",
                },
                {
                  region: "🇫🇷 Bourgogne",
                  vins: "Chablis, Pommard, Meursault",
                  from: "Des CHF 42.—",
                },
                {
                  region: "🇮🇹 Toscane",
                  vins: "Chianti Classico, Brunello, Super Toscans",
                  from: "Des CHF 28.—",
                },
                {
                  region: "🇪🇸 Rioja",
                  vins: "Crianza, Reserva, Gran Reserva",
                  from: "Des CHF 22.—",
                },
                {
                  region: "🇦🇷 Mendoza",
                  vins: "Malbec, Cabernet Sauvignon",
                  from: "Des CHF 18.—",
                },
                {
                  region: "🇵🇹 Douro",
                  vins: "Porto, vins rouges du Douro",
                  from: "Des CHF 24.—",
                },
              ].map((region) => (
                <div
                  key={region.region}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#FDF8F0] transition-colors"
                >
                  <div>
                    <p className="font-semibold text-[#2D0A1F]">{region.region}</p>
                    <p className="text-[#5C3A4A] text-sm mt-0.5">{region.vins}</p>
                    <p className="text-[#8B1A4A] text-sm font-medium mt-1">
                      {region.from}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Degustations & Evenements */}
      <section id="degustations" className="py-20 sm:py-28 bg-gradient-to-br from-[#2D0A1F] to-[#3D1028]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#D4A853] font-medium tracking-widest uppercase text-sm mb-3">
              Experiences
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#F5E6D0]">
              Degustations & Evenements
            </h2>
            <p className="mt-4 text-[#F5E6D0]/60 max-w-2xl mx-auto">
              Vivez des moments d&apos;exception au coeur de notre cave voutee.
              Nos sommeliers vous guident a travers les saveurs du Valais et du monde.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Degustation Decouverte",
                description:
                  "Initiation aux vins du Valais. 5 vins, accompagnes de fromages et charcuteries locales.",
                duration: "1h30",
                price: "CHF 45.— / pers.",
                schedule: "Chaque vendredi a 18h",
                badge: "Populaire",
              },
              {
                title: "Cours d'Oenologie",
                description:
                  "Apprenez a deguster comme un professionnel : nez, bouche, accords mets-vins, vocabulaire du vin.",
                duration: "3h",
                price: "CHF 120.— / pers.",
                schedule: "1er samedi du mois",
                badge: "Formation",
              },
              {
                title: "Soiree Grand Cru",
                description:
                  "Degustation de 8 vins d'exception du monde entier, accords gastronomiques par notre chef partenaire.",
                duration: "2h30",
                price: "CHF 95.— / pers.",
                schedule: "Dernier jeudi du mois",
                badge: "Premium",
              },
              {
                title: "Visite de la Cave",
                description:
                  "Decouvrez notre cave voutee du XVIIIe siecle, son histoire et ses tresors caches. Degustation de 3 vins incluse.",
                duration: "1h",
                price: "CHF 25.— / pers.",
                schedule: "Mardi au samedi, sur reservation",
                badge: "Decouverte",
              },
              {
                title: "Atelier Assemblage",
                description:
                  "Creez votre propre assemblage sous la supervision de notre oenologue. Repartez avec votre bouteille personnalisee.",
                duration: "2h",
                price: "CHF 85.— / pers.",
                schedule: "Sur reservation (min. 4 pers.)",
                badge: "Exclusif",
              },
              {
                title: "Evenements Prives",
                description:
                  "Anniversaires, team building, seminaires... Notre cave se privatise pour vos evenements sur mesure.",
                duration: "Sur mesure",
                price: "Sur devis",
                schedule: "Sur reservation",
                badge: "Prive",
              },
            ].map((event) => (
              <div
                key={event.title}
                className="bg-white/5 backdrop-blur-sm border border-[#D4A853]/10 rounded-2xl p-6 hover:border-[#D4A853]/25 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#D4A853]/15 text-[#D4A853]">
                    {event.badge}
                  </span>
                  <span className="text-xs text-[#F5E6D0]/40">
                    {event.duration}
                  </span>
                </div>
                <h3 className="text-lg font-serif font-bold text-[#F5E6D0] mb-2">
                  {event.title}
                </h3>
                <p className="text-[#F5E6D0]/50 text-sm leading-relaxed mb-4">
                  {event.description}
                </p>
                <div className="border-t border-[#D4A853]/10 pt-4 flex items-center justify-between">
                  <div>
                    <p className="text-[#D4A853] font-bold text-sm">
                      {event.price}
                    </p>
                    <p className="text-[#F5E6D0]/30 text-xs mt-0.5">
                      {event.schedule}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 rounded-full bg-[#D4A853] text-[#2D0A1F] font-semibold hover:bg-[#E0B863] transition-colors shadow-lg shadow-[#D4A853]/20"
            >
              Reserver une experience
            </a>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section id="histoire" className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#8B1A4A] font-medium tracking-widest uppercase text-sm mb-3">
                Depuis 1962
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2D0A1F] mb-8">
                Notre Histoire
              </h2>
              <div className="space-y-6 text-[#5C3A4A] leading-relaxed">
                <p>
                  Fondee en 1962 par Henri Bonvin, la Cave du Valais est nee d&apos;une
                  passion familiale pour les vins du terroir valaisan. Dans les voutes
                  ancestrales de la vieille ville de Sion, Henri a commence par
                  selectionner les meilleurs crus des vignerons de la region.
                </p>
                <p>
                  Son fils Pierre a repris le flambeau en 1988, elargissant la
                  selection aux grands vins internationaux tout en restant fidele a
                  l&apos;esprit du fondateur : privilegier la qualite, la rencontre avec
                  les vignerons et le conseil personnalise.
                </p>
                <p>
                  Aujourd&apos;hui, c&apos;est la troisieme generation, Sophie et Marc, qui
                  perpetue cette tradition. Ils ont enrichi l&apos;offre avec des
                  degustations, des cours d&apos;oenologie et des evenements prives,
                  faisant de la cave un lieu vivant de partage autour du vin.
                </p>
              </div>
              <div className="mt-8 flex gap-8">
                <div>
                  <p className="text-3xl font-serif font-bold text-[#8B1A4A]">3</p>
                  <p className="text-[#5C3A4A] text-sm">Generations</p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-bold text-[#8B1A4A]">62</p>
                  <p className="text-[#5C3A4A] text-sm">Annees de passion</p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-bold text-[#8B1A4A]">
                    2&apos;000+
                  </p>
                  <p className="text-[#5C3A4A] text-sm">Clients fideles</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full aspect-[4/5] rounded-3xl bg-gradient-to-br from-[#2D0A1F]/10 to-[#8B1A4A]/5 border border-[#E8D5C0] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4 opacity-20">🏛️</div>
                  <p className="text-[#8B1A4A]/40 text-sm italic">
                    Photo de la cave historique
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#2D0A1F] rounded-2xl p-6 shadow-xl">
                <p className="text-[#D4A853] font-serif text-lg italic">
                  &laquo; Le vin est le miroir
                  <br />
                  de son terroir &raquo;
                </p>
                <p className="text-[#F5E6D0]/50 text-xs mt-2">
                  — Henri Bonvin, fondateur
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avis Clients */}
      <section id="avis" className="py-20 sm:py-28 bg-[#FDF8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#8B1A4A] font-medium tracking-widest uppercase text-sm mb-3">
              Temoignages
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2D0A1F]">
              Ce que disent nos clients
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Marie-Claire D.",
                location: "Sion",
                text: "Un conseil personnalise exceptionnel. Sophie m'a fait decouvrir des cepages autochtones que je ne connaissais pas. La Petite Arvine qu'elle m'a recommandee etait sublime !",
                stars: 5,
              },
              {
                name: "Jean-Pierre M.",
                location: "Sierre",
                text: "La soiree Grand Cru est une experience inoubliable. Des vins d'exception, des accords parfaits et des explications passionnantes. On revient chaque mois avec plaisir.",
                stars: 5,
              },
              {
                name: "Isabelle & Thomas R.",
                location: "Montreux",
                text: "Nous avons privatise la cave pour nos 25 ans de mariage. L'equipe a ete formidable, le cadre est magique et les vins etaient a la hauteur. Un moment hors du temps.",
                stars: 5,
              },
              {
                name: "Luca B.",
                location: "Martigny",
                text: "Le cours d'oenologie est tres bien structure. J'ai appris enormement en 3 heures. Marc est un pedagogue ne. Je recommande vivement a tous les amateurs de vin.",
                stars: 5,
              },
              {
                name: "Nathalie F.",
                location: "Lausanne",
                text: "Meme en venant de loin, ca vaut le detour. La selection est incroyable et les prix sont justes. Le Cornalin est devenu mon vin prefere grace a eux !",
                stars: 5,
              },
              {
                name: "Patrick G.",
                location: "Geneve",
                text: "Cave historique magnifique au coeur de Sion. Le personnel est aux petits soins. J'y commande regulierement pour ma cave personnelle. Livraison impeccable.",
                stars: 4,
              },
            ].map((avis) => (
              <div
                key={avis.name}
                className="bg-white rounded-2xl border border-[#E8D5C0] p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < avis.stars ? "text-[#D4A853]" : "text-gray-200"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#5C3A4A] text-sm leading-relaxed mb-4 italic">
                  &laquo; {avis.text} &raquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#8B1A4A] to-[#5C1030] flex items-center justify-center text-[#F5E6D0] text-xs font-bold">
                    {avis.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[#2D0A1F] text-sm font-semibold">
                      {avis.name}
                    </p>
                    <p className="text-[#5C3A4A] text-xs">{avis.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Horaires */}
      <section id="contact" className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Horaires */}
            <div>
              <p className="text-[#8B1A4A] font-medium tracking-widest uppercase text-sm mb-3">
                Nous rendre visite
              </p>
              <h2 className="text-3xl font-serif font-bold text-[#2D0A1F] mb-8">
                Horaires d&apos;ouverture
              </h2>
              <div className="space-y-3">
                {[
                  { day: "Lundi", hours: "Ferme" },
                  { day: "Mardi", hours: "10h00 - 12h30 / 14h00 - 18h30" },
                  { day: "Mercredi", hours: "10h00 - 12h30 / 14h00 - 18h30" },
                  { day: "Jeudi", hours: "10h00 - 12h30 / 14h00 - 18h30" },
                  { day: "Vendredi", hours: "10h00 - 12h30 / 14h00 - 19h00" },
                  { day: "Samedi", hours: "09h30 - 17h00" },
                  { day: "Dimanche", hours: "Ferme" },
                ].map((item) => (
                  <div
                    key={item.day}
                    className={`flex justify-between py-3 px-4 rounded-xl ${
                      item.hours === "Ferme"
                        ? "bg-[#8B1A4A]/5 text-[#8B1A4A]/60"
                        : "bg-[#FDF8F0] text-[#5C3A4A]"
                    }`}
                  >
                    <span className="font-medium text-[#2D0A1F]">{item.day}</span>
                    <span>{item.hours}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#5C3A4A]/60 mt-4 italic">
                Degustations en soiree sur reservation uniquement.
              </p>
            </div>

            {/* Contact */}
            <div>
              <p className="text-[#8B1A4A] font-medium tracking-widest uppercase text-sm mb-3">
                Coordonnees
              </p>
              <h2 className="text-3xl font-serif font-bold text-[#2D0A1F] mb-8">
                Nous contacter
              </h2>
              <div className="bg-[#FDF8F0] rounded-3xl border border-[#E8D5C0] p-8">
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#8B1A4A]/10 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-[#8B1A4A]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[#2D0A1F]">Adresse</p>
                      <p className="text-[#5C3A4A] text-sm">
                        Rue du Grand-Pont 18
                        <br />
                        1950 Sion
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#8B1A4A]/10 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-[#8B1A4A]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[#2D0A1F]">Telephone</p>
                      <p className="text-[#5C3A4A] text-sm">+41 27 322 45 67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#8B1A4A]/10 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-[#8B1A4A]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[#2D0A1F]">Email</p>
                      <p className="text-[#5C3A4A] text-sm">
                        info@caveduvalais.ch
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#8B1A4A]/10 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-[#8B1A4A]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[#2D0A1F]">Parking</p>
                      <p className="text-[#5C3A4A] text-sm">
                        Parking de la Planta a 2 min (gratuit 1h)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Map placeholder */}
              <div className="mt-6 h-48 rounded-2xl bg-gradient-to-br from-[#2D0A1F]/5 to-[#8B1A4A]/5 border border-[#E8D5C0] flex items-center justify-center">
                <p className="text-[#8B1A4A]/40 text-sm">
                  Google Maps — Rue du Grand-Pont 18, 1950 Sion
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A0612] text-[#F5E6D0]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B1A4A] to-[#4A0E2A] flex items-center justify-center text-[#D4A853] font-bold text-lg font-serif">
                  V
                </div>
                <span className="text-xl font-serif font-bold text-[#F5E6D0]">
                  Cave du Valais
                </span>
              </div>
              <p className="text-sm leading-relaxed max-w-sm">
                Caviste et espace degustation au coeur de Sion depuis 1962.
                Trois generations de passion pour les vins d&apos;exception du Valais
                et du monde entier.
              </p>
            </div>
            <div>
              <h4 className="text-[#F5E6D0] font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#selection"
                    className="hover:text-[#D4A853] transition-colors"
                  >
                    Nos Vins
                  </a>
                </li>
                <li>
                  <a
                    href="#degustations"
                    className="hover:text-[#D4A853] transition-colors"
                  >
                    Degustations
                  </a>
                </li>
                <li>
                  <a
                    href="#histoire"
                    className="hover:text-[#D4A853] transition-colors"
                  >
                    Notre Histoire
                  </a>
                </li>
                <li>
                  <a
                    href="#avis"
                    className="hover:text-[#D4A853] transition-colors"
                  >
                    Avis Clients
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-[#D4A853] transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#F5E6D0] font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Rue du Grand-Pont 18</li>
                <li>1950 Sion</li>
                <li>+41 27 322 45 67</li>
                <li>info@caveduvalais.ch</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#5C1A3A]/20 mt-12 pt-8 text-sm text-center">
            <p>
              &copy; {new Date().getFullYear()} Cave du Valais — Tous droits
              reserves. L&apos;abus d&apos;alcool est dangereux pour la sante, a consommer avec moderation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
