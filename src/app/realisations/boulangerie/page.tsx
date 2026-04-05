import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boulangerie Artisanale Favre | Nyon - Démonstration OnVousTrouve.ch",
  description:
    "Démonstration d'un site vitrine pour une boulangerie-pâtisserie artisanale à Nyon, créé par OnVousTrouve.ch",
};

export default function BoulangeriePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-serif">
      {/* Bandeau démo */}
      <div className="bg-gray-900 text-white text-center text-sm py-2 px-4">
        Ceci est une démonstration{" "}
        <Link href="/" className="underline font-semibold hover:text-blue-300">
          OnVousTrouve.ch
        </Link>{" "}
        — Ce site n&apos;est pas réel
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-white font-bold text-lg italic">
                F
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900 tracking-wide">
                  Boulangerie Favre
                </span>
                <p className="text-[11px] text-amber-600/70 tracking-[0.25em] uppercase">
                  Nyon — depuis 1987
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-10 text-sm text-gray-500 font-sans">
              <a href="#pains" className="hover:text-amber-700 transition-colors duration-300">
                Nos Pains
              </a>
              <a href="#patisseries" className="hover:text-amber-700 transition-colors duration-300">
                Patisseries
              </a>
              <a href="#equipe" className="hover:text-amber-700 transition-colors duration-300">
                La Famille
              </a>
              <a href="#avis" className="hover:text-amber-700 transition-colors duration-300">
                Avis
              </a>
              <a href="#contact" className="hover:text-amber-700 transition-colors duration-300">
                Contact
              </a>
            </div>
            <a
              href="#commandes"
              className="hidden sm:inline-flex items-center px-7 py-2.5 rounded-full bg-amber-700 text-white text-sm font-semibold font-sans hover:bg-amber-800 transition-colors duration-300 shadow-lg shadow-amber-700/20"
            >
              Commander
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FBF7F2] min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-transparent to-orange-50/50" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-100/20 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="w-12 h-px bg-amber-500 mb-8" />
              <p className="text-amber-600/80 text-sm tracking-[0.3em] uppercase mb-6 font-sans">
                Boulangerie artisanale depuis 1987
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1]">
                Le gout
                <br />
                <span className="text-amber-700">authentique</span>
                <br />
                du pain
              </h1>
              <p className="mt-8 text-lg text-gray-500 max-w-lg leading-relaxed font-sans">
                La famille Favre perpetue la tradition boulangere a Nyon.
                Farines locales, levain naturel et savoir-faire artisanal
                pour un pain d&apos;exception.
              </p>
              <div className="mt-12 flex flex-wrap gap-5">
                <a
                  href="#pains"
                  className="inline-flex items-center px-9 py-4 rounded-full bg-amber-700 text-white font-semibold font-sans hover:bg-amber-800 transition-colors duration-300 shadow-lg shadow-amber-700/20"
                >
                  Decouvrir nos pains
                </a>
                <a
                  href="#commandes"
                  className="inline-flex items-center px-9 py-4 rounded-full border border-amber-300 text-amber-700 font-semibold font-sans hover:border-amber-500 transition-colors duration-300"
                >
                  Commander un gateau
                </a>
              </div>
              <div className="mt-20 flex items-center gap-10">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">37+</p>
                  <p className="text-xs text-gray-400 mt-1 font-sans">Annees d&apos;experience</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">4.8</p>
                  <p className="text-xs text-gray-400 mt-1 font-sans">Note Google</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">6</p>
                  <p className="text-xs text-gray-400 mt-1 font-sans">Sortes de pain / jour</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl shadow-amber-200/40">
                  <img
                    src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=800&q=80"
                    alt="Boulanger au travail dans la Boulangerie Favre"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-amber-100/50">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-amber-700">5h</p>
                    <p className="text-xs text-gray-500 mt-1 font-sans">Cuisson des 5h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Pains & Viennoiseries */}
      <section id="pains" className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-12 h-px bg-amber-500 mx-auto mb-8" />
            <p className="text-amber-600/80 text-sm tracking-[0.3em] uppercase mb-4 font-sans">
              Chaque jour, des 5h du matin
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Nos Pains & Viennoiseries
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Pain au levain",
                desc: "Farine bio de la region, fermentation longue 24h. Croute croustillante, mie aeree et savoureuse.",
                price: "CHF 5.80",
                img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
              },
              {
                name: "Tresse au beurre",
                desc: "La traditionnelle tresse du dimanche, au beurre de la Gruyere. Doree et moelleuse.",
                price: "CHF 4.50",
                img: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=800&q=80",
              },
              {
                name: "Pain de seigle",
                desc: "Seigle valaisan melange a notre levain maison. Dense, parfume, parfait avec le fromage.",
                price: "CHF 6.20",
                img: "https://images.unsplash.com/photo-1586444248879-bc604cbff877?w=800&q=80",
              },
              {
                name: "Croissant pur beurre",
                desc: "Feuilletage fait main, beurre AOP. 72 couches de pur bonheur croustillant.",
                price: "CHF 2.80",
                img: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=800&q=80",
              },
              {
                name: "Pain aux noix",
                desc: "Noix du Perigord incorporees dans notre pate au levain. Un classique indemodable.",
                price: "CHF 7.50",
                img: "https://images.unsplash.com/photo-1549931319-a545753467c8?w=800&q=80",
              },
              {
                name: "Petit pain au lait",
                desc: "Doux et moelleux, ideal pour les enfants. Egalement disponible aux pepites de chocolat.",
                price: "CHF 1.80",
                img: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&q=80",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="bg-[#FBF7F2] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-full h-44 rounded-xl mb-5 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 font-sans">
                  {item.desc}
                </p>
                <p className="text-sm font-semibold text-amber-700">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patisseries */}
      <section id="patisseries" className="py-24 sm:py-32 bg-[#FBF7F2]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-12 h-px bg-amber-500 mx-auto mb-8" />
            <p className="text-amber-600/80 text-sm tracking-[0.3em] uppercase mb-4 font-sans">
              Fait avec passion
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Nos Patisseries
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Tarte aux fruits de saison",
                desc: "Pate sablee maison, creme patissiere vanillee et fruits frais du marche de Nyon.",
                price: "Des CHF 28.--",
                img: "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?w=800&q=80",
              },
              {
                name: "Foret-Noire",
                desc: "Genoise chocolat, chantilly, griottes. Notre recette secrete depuis 3 generations.",
                price: "Des CHF 32.--",
                img: "https://images.unsplash.com/photo-1612203985729-70726954388c?w=800&q=80",
              },
              {
                name: "Mille-feuille",
                desc: "Feuilletage caramelise, creme diplomate a la vanille Bourbon de Madagascar.",
                price: "CHF 6.50 / piece",
                img: "https://images.unsplash.com/photo-1517686469429-8bae29a2f60e?w=800&q=80",
              },
              {
                name: "Meringues a la double creme",
                desc: "Meringues cuites lentement, servies avec la double creme de la Gruyere.",
                price: "CHF 8.-- / portion",
                img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="flex gap-6 bg-white rounded-2xl p-6 border border-amber-100/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-28 h-28 shrink-0 rounded-xl overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3 font-sans">
                    {item.desc}
                  </p>
                  <p className="text-sm font-semibold text-amber-700">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-amber-500 mx-auto mb-8" />
            <p className="text-amber-600/80 text-sm tracking-[0.3em] uppercase mb-4 font-sans">
              Notre savoir-faire en images
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Galerie
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Pains au levain", img: "https://images.unsplash.com/photo-1597079910443-1d0f75a8e156?w=800&q=80", span: "" },
              { label: "Notre fournil", img: "https://images.unsplash.com/photo-1590137876181-2a5a7e340de2?w=800&q=80", span: "row-span-2" },
              { label: "Croissants du matin", img: "https://images.unsplash.com/photo-1623334044303-241021148842?w=800&q=80", span: "" },
              { label: "Baguettes tradition", img: "https://images.unsplash.com/photo-1597079910443-1d0f75a8e156?w=800&q=80", span: "" },
              { label: "Patisseries fines", img: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=800&q=80", span: "" },
              { label: "Le boulanger a l'oeuvre", img: "https://images.unsplash.com/photo-1590137876181-2a5a7e340de2?w=800&q=80", span: "" },
            ].map((item, i) => (
              <div
                key={i}
                className={`${item.span} aspect-square rounded-xl overflow-hidden relative group cursor-pointer`}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <p className="text-white text-sm font-medium font-sans">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* La Famille */}
      <section id="equipe" className="py-24 sm:py-32 bg-[#FBF7F2]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-12 h-px bg-amber-500 mx-auto mb-8" />
            <p className="text-amber-600/80 text-sm tracking-[0.3em] uppercase mb-4 font-sans">
              Trois generations de passion
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              La Famille Favre
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                name: "Jean-Pierre Favre",
                role: "Fondateur & Maitre Boulanger",
                exp: "37 ans d'experience",
              },
              {
                name: "Marie Favre",
                role: "Patissiere & Gerante",
                exp: "30 ans d'experience",
              },
              {
                name: "Julien Favre",
                role: "Boulanger & Successeur",
                exp: "12 ans d'experience",
              },
              {
                name: "Lea Favre",
                role: "Patissiere Creatrice",
                exp: "8 ans d'experience",
              },
            ].map((member) => (
              <div key={member.name} className="text-center group">
                <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-amber-100 to-amber-200/60 border-2 border-white shadow-lg flex items-center justify-center mb-6 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                  <span className="text-3xl text-amber-400">
                    {member.name[0]}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-amber-600 text-sm mt-1 font-sans">{member.role}</p>
                <p className="text-gray-400 text-xs mt-2 font-sans">{member.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avis Clients */}
      <section id="avis" className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-amber-500 mx-auto mb-8" />
            <p className="text-amber-600/80 text-sm tracking-[0.3em] uppercase mb-4 font-sans">
              Ce que disent nos clients
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Avis Clients
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sophie L.",
                text: "Le meilleur pain au levain de la region ! On sent le travail artisanal a chaque bouchee. La tresse du dimanche est devenue un rituel familial.",
                stars: 5,
                date: "Mars 2026",
              },
              {
                name: "Marc-Antoine B.",
                text: "Les croissants sont absolument divins, croustillants a l'exterieur et fondants a l'interieur. Le service est toujours souriant, meme a 6h du matin !",
                stars: 5,
                date: "Fevrier 2026",
              },
              {
                name: "Catherine W.",
                text: "La Foret-Noire commandee pour l'anniversaire de ma fille etait magnifique et delicieuse. Toute la famille a adore. Merci a la famille Favre !",
                stars: 5,
                date: "Janvier 2026",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-[#FBF7F2] rounded-2xl p-8 border border-amber-100/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: review.stars }).map((_, i) => (
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
                <p className="text-gray-600 leading-relaxed text-sm mb-8 font-sans">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex justify-between items-end pt-6 border-t border-gray-100">
                  <p className="font-semibold text-gray-900 text-sm font-sans">{review.name}</p>
                  <p className="text-xs text-gray-400 font-sans">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commandes speciales */}
      <section id="commandes" className="py-24 sm:py-32 bg-amber-800">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="w-12 h-px bg-white/40 mx-auto mb-8" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Gateaux sur mesure
          </h2>
          <p className="mt-5 text-lg text-amber-100/80 max-w-xl mx-auto font-sans">
            Anniversaire, mariage, bapteme ou simplement envie de se faire plaisir ?
            Notre maitre patissier cree votre gateau sur mesure.
          </p>
          <div className="mt-8 text-left max-w-md mx-auto">
            <ul className="space-y-3 mb-8">
              {[
                "Gateaux d'anniversaire personnalises",
                "Pieces montees pour mariages",
                "Wedding cakes",
                "Buffets de mignardises",
                "Gateaux sans gluten sur demande",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-amber-100 font-sans text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-8 sm:p-12">
            <h3 className="text-xl font-bold text-white mb-8">Demande de devis</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2.5 text-left font-sans">
                  Nom complet
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-amber-200/40 focus:outline-none focus:border-white/40 transition-colors duration-300 font-sans"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2.5 text-left font-sans">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-amber-200/40 focus:outline-none focus:border-white/40 transition-colors duration-300 font-sans"
                  placeholder="votre@email.ch"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2.5 text-left font-sans">
                  Date de l&apos;evenement
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white focus:outline-none focus:border-white/40 transition-colors duration-300 font-sans"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2.5 text-left font-sans">
                  Nombre de personnes
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-amber-200/40 focus:outline-none focus:border-white/40 transition-colors duration-300 font-sans"
                  placeholder="10"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-white/80 mb-2.5 text-left font-sans">
                Decrivez votre gateau ideal
              </label>
              <textarea
                rows={3}
                className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-amber-200/40 focus:outline-none focus:border-white/40 transition-colors duration-300 font-sans"
                placeholder="Vos envies, allergies, theme..."
              />
            </div>
            <div className="mt-10">
              <button className="px-10 py-4 rounded-full bg-white text-amber-800 font-semibold font-sans hover:bg-amber-50 transition-colors duration-300 shadow-lg">
                Envoyer la demande
              </button>
            </div>
          </div>
          <p className="mt-8 text-amber-200/70 text-sm font-sans">
            Commander au minimum 48h a l&apos;avance. Appelez-nous au{" "}
            <a
              href="tel:+41223611234"
              className="text-white font-semibold hover:underline"
            >
              +41 22 361 12 34
            </a>
          </p>
        </div>
      </section>

      {/* Horaires */}
      <section id="horaires" className="py-24 sm:py-32 bg-[#FBF7F2]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-amber-500 mx-auto mb-8" />
            <p className="text-amber-600/80 text-sm tracking-[0.3em] uppercase mb-4 font-sans">
              Nous vous accueillons
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Horaires d&apos;ouverture
            </h2>
          </div>
          <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-sm border border-amber-100/50 overflow-hidden">
            {[
              { day: "Lundi", hours: "06h00 - 18h30" },
              { day: "Mardi", hours: "06h00 - 18h30" },
              { day: "Mercredi", hours: "06h00 - 18h30" },
              { day: "Jeudi", hours: "06h00 - 18h30" },
              { day: "Vendredi", hours: "06h00 - 19h00" },
              { day: "Samedi", hours: "06h30 - 17h00" },
              { day: "Dimanche", hours: "07h00 - 12h00" },
            ].map((row, i) => (
              <div
                key={row.day}
                className={`flex justify-between items-center px-8 py-4 font-sans ${
                  i % 2 === 0 ? "bg-amber-50/50" : "bg-white"
                }`}
              >
                <span className="font-medium text-gray-900">{row.day}</span>
                <span className="text-gray-500">{row.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-950 text-gray-400">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-white font-bold text-lg italic">
                  F
                </div>
                <span className="text-xl font-bold text-white">
                  Boulangerie Favre
                </span>
              </div>
              <p className="text-sm leading-relaxed max-w-md font-sans">
                Boulangerie-patisserie artisanale au coeur de Nyon depuis 1987.
                Farines locales, levain naturel et savoir-faire familial.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase font-sans">
                Horaires
              </h4>
              <ul className="space-y-3 text-sm font-sans">
                <li>Lun-Jeu : 6h00 - 18h30</li>
                <li>Vendredi : 6h00 - 19h00</li>
                <li>Samedi : 6h30 - 17h00</li>
                <li>Dimanche : 7h00 - 12h00</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase font-sans">
                Contact
              </h4>
              <ul className="space-y-3 text-sm font-sans">
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 mt-0.5 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Rue de la Gare 14, 1260 Nyon</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+41 22 361 12 34</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@boulangerie-favre.ch</span>
                </li>
              </ul>
              <div className="flex gap-3 mt-5">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-700 transition-colors duration-300"
                >
                  <span className="text-xs text-white font-sans">IG</span>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-700 transition-colors duration-300"
                >
                  <span className="text-xs text-white font-sans">FB</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-16 pt-8 text-sm text-center text-gray-500 font-sans">
            <p>
              &copy; {new Date().getFullYear()} Boulangerie Artisanale Favre — Tous droits
              reserves.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
