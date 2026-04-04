import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cabinet Renaud & Associés | Avocats - Lausanne",
  description:
    "Cabinet d'avocats à Lausanne. Droit des affaires, droit de la famille, droit immobilier, droit pénal. Consultation sur rendez-vous.",
};

export default function AvocatDemo() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* Bandeau démo */}
      <div className="bg-gray-900 text-white text-center text-sm py-2 px-4">
        Ceci est une démonstration{" "}
        <Link href="/" className="underline font-semibold hover:text-blue-300">
          OnVousTrouve.ch
        </Link>{" "}
        — Ce site n&apos;est pas réel
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0B1A2E]/95 backdrop-blur-md border-b border-amber-800/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border border-amber-500/60 rounded flex items-center justify-center">
                <span className="text-amber-400 font-serif font-bold text-lg">R</span>
              </div>
              <div>
                <span className="text-lg font-serif font-bold text-white tracking-wide">
                  Renaud & Associés
                </span>
                <p className="text-[11px] text-amber-400/40 tracking-[0.25em] uppercase">
                  Avocats au Barreau de Vaud
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-10 text-sm text-gray-400">
              <a href="#domaines" className="hover:text-amber-400 transition-colors duration-300">
                Domaines
              </a>
              <a href="#equipe" className="hover:text-amber-400 transition-colors duration-300">
                L&apos;Équipe
              </a>
              <a href="#cabinet" className="hover:text-amber-400 transition-colors duration-300">
                Le Cabinet
              </a>
              <a href="#contact" className="hover:text-amber-400 transition-colors duration-300">
                Contact
              </a>
            </div>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center px-7 py-2.5 border border-amber-500/60 text-amber-400 text-sm font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300"
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B1A2E] min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
            alt="Bureau professionnel du Cabinet Renaud et Associes"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1A2E] via-[#0B1A2E]/95 to-[#0B1A2E]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A2E] via-transparent to-[#0B1A2E]/60" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="max-w-3xl">
            <div className="w-16 h-px bg-amber-500 mb-10" />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1]">
              Un cabinet
              <br />
              d&apos;avocats à votre
              <br />
              <span className="text-amber-400">écoute</span>
            </h1>
            <p className="mt-10 text-lg text-gray-400 max-w-2xl leading-relaxed">
              Depuis plus de 25 ans, le Cabinet Renaud & Associés accompagne les
              particuliers et les entreprises dans leurs démarches juridiques.
              Rigueur, discrétion et engagement sont nos valeurs fondamentales.
            </p>
            <div className="mt-12 flex flex-wrap gap-5">
              <a
                href="#contact"
                className="inline-flex items-center px-9 py-4 bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors duration-300"
              >
                Demander une consultation
              </a>
              <a
                href="#domaines"
                className="inline-flex items-center px-9 py-4 border border-gray-600 text-gray-300 font-semibold hover:border-amber-500 hover:text-amber-400 transition-all duration-300"
              >
                Nos domaines d&apos;expertise
              </a>
            </div>
            <div className="mt-24 flex items-center gap-12">
              {[
                { value: "25+", label: "Années d'expérience" },
                { value: "4", label: "Avocats associés" },
                { value: "2000+", label: "Dossiers traités" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-serif font-bold text-amber-400">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 mt-1.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              {
                title: "Rigueur",
                desc: "Chaque dossier est traité avec la plus grande attention aux détails et une analyse juridique approfondie.",
              },
              {
                title: "Discrétion",
                desc: "Le secret professionnel est au coeur de notre pratique. Vos informations sont traitées en toute confidentialité.",
              },
              {
                title: "Engagement",
                desc: "Nous nous investissons pleinement dans la défense de vos intérêts avec détermination et transparence.",
              },
            ].map((value) => (
              <div key={value.title}>
                <div className="w-12 h-px bg-amber-500 mx-auto mb-6" />
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domaines de compétence */}
      <section id="domaines" className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-12 h-px bg-amber-500 mx-auto mb-8" />
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              Domaines de compétence
            </h2>
            <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
              Notre cabinet couvre un large éventail du droit pour répondre à
              tous vos besoins juridiques.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Droit des Affaires",
                desc: "Création de sociétés, contrats commerciaux, fusions & acquisitions, droit des sociétés, gouvernance d'entreprise.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: "Droit de la Famille",
                desc: "Divorce, garde d'enfants, pension alimentaire, succession, testament, régimes matrimoniaux, médiation familiale.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                title: "Droit Immobilier",
                desc: "Acquisition & vente, baux à loyer, copropriété, droit de la construction, litiges immobiliers, servitudes.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
              },
              {
                title: "Droit Pénal",
                desc: "Défense pénale, infractions économiques, droit pénal des affaires, procédure pénale, assistance aux victimes.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                ),
              },
              {
                title: "Droit du Travail",
                desc: "Contrats de travail, licenciement, harcèlement, négociation, conventions collectives, protection des données.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
              {
                title: "Droit Fiscal",
                desc: "Optimisation fiscale, déclarations, contentieux fiscal, planification successorale, TVA, impôts directs et indirects.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
              },
            ].map((domain) => (
              <div
                key={domain.title}
                className="flex gap-6 p-7 bg-white rounded-lg border border-gray-100 hover:border-amber-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-lg bg-[#0B1A2E] flex items-center justify-center text-amber-400 shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                  {domain.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {domain.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {domain.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* L'Équipe */}
      <section id="equipe" className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="w-12 h-px bg-amber-500 mx-auto mb-8" />
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              L&apos;Équipe
            </h2>
            <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
              Des professionnels expérimentés à votre service.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                name: "Me Philippe Renaud",
                role: "Associé fondateur",
                specialty: "Droit des affaires, Droit fiscal",
                admission: "Barreau de Vaud, 1999",
              },
              {
                name: "Me Catherine Bonvin",
                role: "Associée",
                specialty: "Droit de la famille, Successions",
                admission: "Barreau de Vaud, 2004",
              },
              {
                name: "Me David Schneider",
                role: "Associé",
                specialty: "Droit immobilier, Construction",
                admission: "Barreau de Vaud, 2008",
              },
              {
                name: "Me Émilie Laurent",
                role: "Associée",
                specialty: "Droit pénal, Droit du travail",
                admission: "Barreau de Vaud, 2012",
              },
            ].map((member) => (
              <div key={member.name} className="text-center group">
                <div className="w-44 h-52 mx-auto bg-gradient-to-b from-[#0B1A2E] to-[#132B4A] rounded-lg flex items-center justify-center mb-6 border border-gray-200 group-hover:border-amber-300 transition-all duration-300 group-hover:shadow-lg">
                  <span className="text-4xl text-amber-400/20 font-serif">
                    {member.name.split(" ").pop()?.[0]}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-amber-600 text-sm font-medium mt-1">{member.role}</p>
                <p className="text-gray-400 text-xs mt-3">{member.specialty}</p>
                <p className="text-gray-300 text-xs mt-1">{member.admission}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Le Cabinet */}
      <section id="cabinet" className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="w-12 h-px bg-amber-500 mb-8" />
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-8">
                Le Cabinet
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Fondé en 1999 par Me Philippe Renaud, notre cabinet s&apos;est
                développé pour devenir l&apos;une des références juridiques de la
                région lausannoise. Installés au coeur de Lausanne, nous
                accueillons nos clients dans un cadre confidentiel et
                professionnel.
              </p>
              <p className="text-gray-500 leading-relaxed mb-10">
                Notre approche combine expertise juridique pointue et relation
                de confiance durable. Chaque dossier bénéficie d&apos;un suivi
                personnalisé et d&apos;une stratégie adaptée à vos objectifs.
              </p>
              <div className="space-y-5">
                {[
                  "Consultation initiale confidentielle",
                  "Honoraires transparents, devis avant intervention",
                  "Suivi régulier de l'avancement de votre dossier",
                  "Réseau de partenaires (notaires, fiduciaires, experts)",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-[28rem] rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Bureau professionnel du Cabinet Renaud et Associes"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 sm:py-32 bg-[#0B1A2E]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <div className="w-12 h-px bg-amber-500 mb-8" />
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-8">
                Prendre rendez-vous
              </h2>
              <p className="text-gray-400 leading-relaxed mb-12">
                Pour une première consultation, contactez notre secrétariat.
                Nous vous répondons dans les 24 heures ouvrées.
              </p>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/15 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Adresse</p>
                    <p className="text-gray-400 text-sm mt-1.5">
                      Place Saint-François 5<br />
                      1003 Lausanne
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/15 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Téléphone</p>
                    <p className="text-gray-400 text-sm mt-1.5">+41 21 312 56 78</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/15 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Email</p>
                    <p className="text-gray-400 text-sm mt-1.5">
                      secretariat@renaud-avocats.ch
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/15 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Horaires du secrétariat</p>
                    <p className="text-gray-400 text-sm mt-1.5">
                      Lun-Ven : 8h30 – 12h00 / 13h30 – 17h30
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white/[0.03] border border-amber-500/10 rounded-lg p-8 sm:p-10">
                <h3 className="text-lg font-semibold text-white mb-8">
                  Formulaire de contact
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2.5">
                      Nom et prénom
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3.5 bg-white/5 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 rounded transition-colors duration-300"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2.5">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3.5 bg-white/5 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 rounded transition-colors duration-300"
                        placeholder="+41 21 000 00 00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2.5">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3.5 bg-white/5 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 rounded transition-colors duration-300"
                        placeholder="votre@email.ch"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2.5">
                      Domaine juridique
                    </label>
                    <select className="w-full px-4 py-3.5 bg-white/5 border border-gray-700/50 text-white focus:outline-none focus:border-amber-500/50 rounded transition-colors duration-300">
                      <option value="">Sélectionner...</option>
                      <option value="affaires">Droit des affaires</option>
                      <option value="famille">Droit de la famille</option>
                      <option value="immobilier">Droit immobilier</option>
                      <option value="penal">Droit pénal</option>
                      <option value="travail">Droit du travail</option>
                      <option value="fiscal">Droit fiscal</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2.5">
                      Description de votre situation
                    </label>
                    <textarea
                      className="w-full px-4 py-3.5 bg-white/5 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 h-28 resize-none rounded transition-colors duration-300"
                      placeholder="Décrivez brièvement votre situation..."
                    />
                  </div>
                  <button className="w-full py-4 bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors duration-300 rounded">
                    Envoyer ma demande
                  </button>
                  <p className="text-xs text-gray-500 text-center">
                    Vos informations sont traitées de manière strictement
                    confidentielle conformément au secret professionnel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#070F1D] text-gray-500">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border border-amber-500/30 rounded flex items-center justify-center">
                <span className="text-amber-400/50 font-serif font-bold text-lg">R</span>
              </div>
              <div>
                <span className="text-sm font-serif font-bold text-gray-300">
                  Renaud & Associés
                </span>
                <p className="text-xs text-gray-600">
                  Avocats au Barreau de Vaud
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-600">
              <span>Place Saint-François 5, 1003 Lausanne</span>
              <span className="hidden md:inline">|</span>
              <span>+41 21 312 56 78</span>
              <span className="hidden md:inline">|</span>
              <span>secretariat@renaud-avocats.ch</span>
            </div>
          </div>
          <div className="border-t border-gray-800/50 mt-10 pt-8 text-xs text-center text-gray-600">
            <p>
              &copy; {new Date().getFullYear()} Cabinet Renaud & Associés — Tous
              droits réservés. Membre de la Fédération Suisse des Avocats (FSA).
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
