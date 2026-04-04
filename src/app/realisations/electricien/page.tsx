import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "\u00c9lec-Pro Savoy | \u00c9lectricien Agr\u00e9\u00e9 - Yverdon-les-Bains",
  description:
    "\u00c9lectricien agr\u00e9\u00e9 \u00e0 Yverdon-les-Bains. Installation, d\u00e9pannage, domotique, panneaux solaires. Devis gratuit.",
};

export default function ElectricienDemo() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0F172A] font-sans">
      {/* Bandeau d\u00e9mo */}
      <div className="bg-gray-900 text-white text-center text-sm py-2 px-4">
        Ceci est une d\u00e9monstration{" "}
        <Link href="/" className="underline font-semibold hover:text-blue-300">
          OnVousTrouve.ch
        </Link>{" "}
        &mdash; Ce site n&apos;est pas r\u00e9el
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0F172A]/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-yellow-500 flex items-center justify-center text-[#0F172A] font-bold text-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-wide">
                  \u00c9lec-Pro Savoy
                </span>
                <p className="text-[11px] text-yellow-500/70 tracking-[0.25em] uppercase">
                  Yverdon-les-Bains
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-10 text-sm text-gray-400">
              <a href="#services" className="hover:text-yellow-500 transition-colors duration-300">
                Services
              </a>
              <a href="#certifications" className="hover:text-yellow-500 transition-colors duration-300">
                Certifications
              </a>
              <a href="#equipe" className="hover:text-yellow-500 transition-colors duration-300">
                L&apos;\u00c9quipe
              </a>
              <a href="#avis" className="hover:text-yellow-500 transition-colors duration-300">
                Avis
              </a>
              <a href="#devis" className="hover:text-yellow-500 transition-colors duration-300">
                Devis
              </a>
            </div>
            <a
              href="#devis"
              className="hidden sm:inline-flex items-center px-7 py-2.5 rounded-lg bg-yellow-500 text-[#0F172A] text-sm font-bold hover:bg-yellow-400 transition-colors duration-300 shadow-lg shadow-yellow-500/20"
            >
              Devis gratuit
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[linear-gradient(rgba(234,179,8,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="w-12 h-px bg-yellow-500 mb-8" />
              <p className="text-yellow-500/80 text-sm tracking-[0.3em] uppercase mb-6">
                \u00c9lectricien agr\u00e9\u00e9 depuis 2011
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1]">
                Votre expert
                <br />
                <span className="text-yellow-500">\u00e9lectricit\u00e9</span>
                <br />
                de confiance
              </h1>
              <p className="mt-8 text-lg text-gray-400 max-w-lg leading-relaxed">
                Installation, r\u00e9novation, d\u00e9pannage et solutions \u00e9nerg\u00e9tiques
                durables. Intervention rapide dans tout le Nord Vaudois.
              </p>
              <div className="mt-12 flex flex-wrap gap-5">
                <a
                  href="#devis"
                  className="inline-flex items-center px-9 py-4 rounded-lg bg-yellow-500 text-[#0F172A] font-bold hover:bg-yellow-400 transition-colors duration-300 shadow-lg shadow-yellow-500/20"
                >
                  Demander un devis
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center px-9 py-4 rounded-lg border border-gray-700 text-gray-300 font-semibold hover:border-yellow-500/50 hover:text-yellow-500 transition-colors duration-300"
                >
                  Nos services
                </a>
              </div>
              <div className="mt-20 flex items-center gap-10">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">13+</p>
                  <p className="text-xs text-gray-500 mt-1">Ann\u00e9es d&apos;exp\u00e9rience</p>
                </div>
                <div className="w-px h-10 bg-gray-700" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">2k+</p>
                  <p className="text-xs text-gray-500 mt-1">Chantiers r\u00e9alis\u00e9s</p>
                </div>
                <div className="w-px h-10 bg-gray-700" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">4.9</p>
                  <p className="text-xs text-gray-500 mt-1">Note Google</p>
                </div>
                <div className="w-px h-10 bg-gray-700" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">24h</p>
                  <p className="text-xs text-gray-500 mt-1">D\u00e9lai d\u2019intervention</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-yellow-500/10 border border-gray-800">
                  <img
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
                    alt="\u00c9lectricien au travail - \u00c9lec-Pro Savoy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#1E293B] rounded-xl p-5 shadow-xl border border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Urgences 7j/7</p>
                      <p className="text-xs text-gray-400">D\u00e9pannage rapide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 sm:py-32 bg-[#1E293B]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-12 h-px bg-yellow-500 mx-auto mb-8" />
            <p className="text-yellow-500/80 text-sm tracking-[0.3em] uppercase mb-4">
              Notre expertise
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Nos Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Installation \u00e9lectrique",
                desc: "Installations neuves et r\u00e9novations compl\u00e8tes pour particuliers et entreprises. Conformit\u00e9 NIBT garantie.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
                  </svg>
                ),
                items: [
                  "Tableau \u00e9lectrique",
                  "C\u00e2blage complet",
                  "Prises & interrupteurs",
                  "\u00c9clairage int\u00e9rieur/ext\u00e9rieur",
                ],
              },
              {
                title: "D\u00e9pannage urgent",
                desc: "Intervention rapide en cas de panne, court-circuit ou probl\u00e8me \u00e9lectrique. Disponibilit\u00e9 7j/7 pour les urgences.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.1-5.1m0 0L3.75 12.63m2.57-2.56L3.75 7.5M11.42 8.83l5.1 5.1m0 0l2.57-2.56m-2.57 2.56l2.57 2.57" />
                  </svg>
                ),
                items: [
                  "Pannes \u00e9lectriques",
                  "Courts-circuits",
                  "Remplacement disjoncteur",
                  "Recherche de panne",
                ],
              },
              {
                title: "Domotique",
                desc: "Maison intelligente : automatisez \u00e9clairage, chauffage, volets et s\u00e9curit\u00e9 pour plus de confort et d\u2019\u00e9conomies.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                  </svg>
                ),
                items: [
                  "KNX / Loxone",
                  "Volets automatis\u00e9s",
                  "\u00c9clairage intelligent",
                  "Contr\u00f4le \u00e0 distance",
                ],
              },
              {
                title: "Panneaux solaires",
                desc: "Installation photovolta\u00efque cl\u00e9 en main. Produisez votre propre \u00e9lectricit\u00e9 et r\u00e9duisez vos factures \u00e9nerg\u00e9tiques.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                ),
                items: [
                  "\u00c9tude de faisabilit\u00e9",
                  "Installation compl\u00e8te",
                  "Batterie de stockage",
                  "Suivi de production",
                ],
              },
              {
                title: "Contr\u00f4le & S\u00e9curit\u00e9",
                desc: "Contr\u00f4les p\u00e9riodiques obligatoires (OIBT), mises aux normes et certifications pour votre s\u00e9curit\u00e9 \u00e9lectrique.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                items: [
                  "Contr\u00f4le OIBT",
                  "Mise aux normes NIBT",
                  "Rapport de s\u00e9curit\u00e9",
                  "Thermographie infrarouge",
                ],
              },
              {
                title: "Bornes de recharge",
                desc: "Installation de bornes de recharge pour v\u00e9hicules \u00e9lectriques. Solutions pour particuliers, copropri\u00e9t\u00e9s et entreprises.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
                items: [
                  "Borne domestique",
                  "Borne entreprise",
                  "Gestion intelligente",
                  "Maintenance",
                ],
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-[#0F172A] rounded-2xl p-8 hover:shadow-lg hover:shadow-yellow-500/5 transition-all duration-300 border border-gray-800 group hover:border-yellow-500/30"
              >
                <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-6 group-hover:bg-yellow-500/20 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <ul className="space-y-2.5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-yellow-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-24 sm:py-32 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-yellow-500 mx-auto mb-8" />
            <p className="text-yellow-500/80 text-sm tracking-[0.3em] uppercase mb-4">
              Gage de qualit\u00e9
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Certifications & Agr\u00e9ments
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "ESTI",
                desc: "Autorisation d\u2019installer agr\u00e9\u00e9e par l\u2019Inspection f\u00e9d\u00e9rale des installations \u00e0 courant fort",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ),
              },
              {
                title: "NIBT",
                desc: "Toutes nos installations respectent la Norme sur les installations \u00e0 basse tension",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                  </svg>
                ),
              },
              {
                title: "Pronovo",
                desc: "Installateur certifi\u00e9 pour les installations solaires photovolta\u00efques en Suisse",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                ),
              },
              {
                title: "SuisseEnergie",
                desc: "Partenaire du programme f\u00e9d\u00e9ral pour l\u2019efficacit\u00e9 \u00e9nerg\u00e9tique et les \u00e9nergies renouvelables",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.692-.8 1.258l.108.646c.032.188.013.38-.049.557l-.16.468m-5.127-7.04A11.96 11.96 0 013.75 12c0-.691.058-1.369.17-2.028" />
                  </svg>
                ),
              },
            ].map((cert) => (
              <div
                key={cert.title}
                className="bg-[#1E293B] rounded-xl p-6 border border-gray-800 text-center hover:border-yellow-500/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 mx-auto mb-4">
                  {cert.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* \u00c9quipe */}
      <section id="equipe" className="py-24 sm:py-32 bg-[#1E293B]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-12 h-px bg-yellow-500 mx-auto mb-8" />
            <p className="text-yellow-500/80 text-sm tracking-[0.3em] uppercase mb-4">
              Des professionnels qualifi\u00e9s
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Notre \u00c9quipe
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                name: "Jean-Marc Savoy",
                role: "Fondateur & Ma\u00eetre \u00e9lectricien",
                exp: "22 ans d\u2019exp\u00e9rience",
              },
              {
                name: "David Rochat",
                role: "\u00c9lectricien Chef de chantier",
                exp: "14 ans d\u2019exp\u00e9rience",
              },
              {
                name: "Thierry Bonvin",
                role: "Sp\u00e9cialiste Domotique",
                exp: "10 ans d\u2019exp\u00e9rience",
              },
              {
                name: "Amine Khadiri",
                role: "Technicien Solaire",
                exp: "6 ans d\u2019exp\u00e9rience",
              },
            ].map((member) => (
              <div key={member.name} className="text-center group">
                <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-gray-700 shadow-lg flex items-center justify-center mb-6 group-hover:shadow-xl group-hover:shadow-yellow-500/10 group-hover:border-yellow-500/30 group-hover:scale-105 transition-all duration-300">
                  <span className="text-3xl text-yellow-500 font-bold">
                    {member.name[0]}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-yellow-500 text-sm mt-1">{member.role}</p>
                <p className="text-gray-500 text-xs mt-2">{member.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avis Clients */}
      <section id="avis" className="py-24 sm:py-32 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-yellow-500 mx-auto mb-8" />
            <p className="text-yellow-500/80 text-sm tracking-[0.3em] uppercase mb-4">
              Ils nous font confiance
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Avis Clients
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Philippe T.",
                text: "R\u00e9novation \u00e9lectrique compl\u00e8te de notre villa. Travail impeccable, propre et dans les d\u00e9lais. Jean-Marc et son \u00e9quipe sont de vrais professionnels. Je recommande sans h\u00e9sitation.",
                stars: 5,
                date: "Mars 2026",
              },
              {
                name: "Christine W.",
                text: "Installation de panneaux solaires parfaitement r\u00e9alis\u00e9e. Amine nous a tout expliqu\u00e9 clairement. Apr\u00e8s 6 mois, nous produisons 80% de notre \u00e9lectricit\u00e9. Excellent investissement !",
                stars: 5,
                date: "F\u00e9vrier 2026",
              },
              {
                name: "R\u00e9gis M.",
                text: "Panne un dimanche soir, \u00c9lec-Pro est intervenu en moins de 2 heures. Probl\u00e8me r\u00e9solu rapidement et prix tr\u00e8s correct pour un d\u00e9pannage urgent. Merci pour votre r\u00e9activit\u00e9 !",
                stars: 5,
                date: "Janvier 2026",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-[#1E293B] rounded-2xl p-8 border border-gray-800 hover:border-yellow-500/20 hover:shadow-lg hover:shadow-yellow-500/5 transition-all duration-300"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed text-sm mb-8">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex justify-between items-end pt-6 border-t border-gray-700">
                  <p className="font-semibold text-white text-sm">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devis gratuit */}
      <section id="devis" className="py-24 sm:py-32 bg-yellow-500">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="w-12 h-px bg-[#0F172A]/30 mx-auto mb-8" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Demandez votre devis gratuit
          </h2>
          <p className="mt-5 text-lg text-[#0F172A]/70 max-w-xl mx-auto">
            D\u00e9crivez votre projet et recevez un devis d\u00e9taill\u00e9 sous 24h.
            Sans engagement.
          </p>
          <div className="mt-12 bg-[#0F172A]/10 backdrop-blur-sm border border-[#0F172A]/15 rounded-2xl p-8 sm:p-12">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#0F172A]/80 mb-2.5 text-left">
                  Nom complet
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3.5 rounded-xl bg-[#0F172A]/10 border border-[#0F172A]/15 text-[#0F172A] placeholder-[#0F172A]/30 focus:outline-none focus:border-[#0F172A]/40 transition-colors duration-300"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0F172A]/80 mb-2.5 text-left">
                  T\u00e9l\u00e9phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3.5 rounded-xl bg-[#0F172A]/10 border border-[#0F172A]/15 text-[#0F172A] placeholder-[#0F172A]/30 focus:outline-none focus:border-[#0F172A]/40 transition-colors duration-300"
                  placeholder="+41 24 000 00 00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0F172A]/80 mb-2.5 text-left">
                  Type de service
                </label>
                <select className="w-full px-4 py-3.5 rounded-xl bg-[#0F172A]/10 border border-[#0F172A]/15 text-[#0F172A] focus:outline-none focus:border-[#0F172A]/40 transition-colors duration-300">
                  <option value="">Choisir un service</option>
                  <option value="installation">Installation \u00e9lectrique</option>
                  <option value="depannage">D\u00e9pannage</option>
                  <option value="domotique">Domotique</option>
                  <option value="solaire">Panneaux solaires</option>
                  <option value="controle">Contr\u00f4le & S\u00e9curit\u00e9</option>
                  <option value="borne">Borne de recharge</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0F172A]/80 mb-2.5 text-left">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3.5 rounded-xl bg-[#0F172A]/10 border border-[#0F172A]/15 text-[#0F172A] placeholder-[#0F172A]/30 focus:outline-none focus:border-[#0F172A]/40 transition-colors duration-300"
                  placeholder="votre@email.ch"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-[#0F172A]/80 mb-2.5 text-left">
                  Description du projet
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#0F172A]/10 border border-[#0F172A]/15 text-[#0F172A] placeholder-[#0F172A]/30 focus:outline-none focus:border-[#0F172A]/40 transition-colors duration-300 resize-none"
                  placeholder="D\u00e9crivez votre projet ou probl\u00e8me \u00e9lectrique..."
                />
              </div>
            </div>
            <div className="mt-10">
              <button className="px-10 py-4 rounded-lg bg-[#0F172A] text-yellow-500 font-bold hover:bg-[#1E293B] transition-colors duration-300 shadow-lg">
                Envoyer ma demande de devis
              </button>
            </div>
          </div>
          <p className="mt-8 text-[#0F172A]/60 text-sm">
            Ou appelez-nous au{" "}
            <a
              href="tel:+41244251680"
              className="text-[#0F172A] font-bold hover:underline"
            >
              +41 24 425 16 80
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0F1E] text-gray-400">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-yellow-500 flex items-center justify-center text-[#0F172A]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">
                  \u00c9lec-Pro Savoy
                </span>
              </div>
              <p className="text-sm leading-relaxed max-w-md">
                Votre \u00e9lectricien agr\u00e9\u00e9 \u00e0 Yverdon-les-Bains. Installation,
                d\u00e9pannage, domotique et \u00e9nergie solaire pour particuliers et
                entreprises dans tout le Nord Vaudois.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">Disponibilit\u00e9</h4>
              <ul className="space-y-3 text-sm">
                <li>Lun-Ven : 7h00 \u2013 18h00</li>
                <li>Samedi : 8h00 \u2013 12h00</li>
                <li>Dimanche : Ferm\u00e9</li>
                <li className="text-yellow-500 font-semibold">Urgences : 7j/7</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li>Rue des Artisans 8, 1400 Yverdon-les-Bains</li>
                <li>+41 24 425 16 80</li>
                <li>info@elec-pro-savoy.ch</li>
              </ul>
              <div className="flex gap-3 mt-5">
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F172A] transition-colors duration-300"
                >
                  <span className="text-xs text-white">IN</span>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F172A] transition-colors duration-300"
                >
                  <span className="text-xs text-white">FB</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-16 pt-8 text-sm text-center text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} \u00c9lec-Pro Savoy &mdash; Tous droits
              r\u00e9serv\u00e9s.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
