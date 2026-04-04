import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FitPulse Coaching | Zurich - Démonstration OnVousTrouve.ch",
  description:
    "Démonstration d'un site vitrine pour un coach sportif à Zurich, créé par OnVousTrouve.ch",
};

export default function CoachPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      {/* Bandeau démo */}
      <div className="bg-blue-600 text-white text-center py-2 text-sm">
        Ceci est une démonstration{" "}
        <Link href="/" className="underline font-semibold hover:text-blue-200">
          OnVousTrouve.ch
        </Link>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-emerald-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-black font-black text-sm">
                FP
              </div>
              <span className="text-xl font-black tracking-tight">
                FIT<span className="text-emerald-400">PULSE</span>
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
              <a href="#programmes" className="hover:text-emerald-400 transition-colors">Programmes</a>
              <a href="#temoignages" className="hover:text-emerald-400 transition-colors">Résultats</a>
              <a href="#tarifs" className="hover:text-emerald-400 transition-colors">Tarifs</a>
              <a href="#reservation" className="hover:text-emerald-400 transition-colors">Réservation</a>
            </nav>
            <a href="#reservation" className="hidden sm:inline-flex items-center px-6 py-2.5 rounded-full bg-emerald-500 text-black text-sm font-bold hover:bg-emerald-400 transition-colors">
              Séance d&apos;essai gratuite
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/40 via-black to-black" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-6">
                Coach certifié Swiss Olympic
              </div>
              <h1 className="text-5xl sm:text-7xl font-black leading-[0.95] mb-6 tracking-tight">
                TRANSFORME<br />
                TON <span className="text-emerald-400">CORPS</span>,<br />
                TRANSFORME<br />
                TA <span className="text-emerald-400">VIE</span>.
              </h1>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
                Coaching sportif personnalisé à Zurich. Programmes sur mesure,
                suivi nutritionnel et motivation sans faille pour atteindre vos objectifs.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#reservation" className="inline-flex items-center px-8 py-4 rounded-full bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-colors text-lg">
                  Commencer maintenant
                </a>
                <a href="#programmes" className="inline-flex items-center px-8 py-4 rounded-full border-2 border-emerald-500/50 text-emerald-400 font-bold hover:bg-emerald-500/10 transition-colors text-lg">
                  Voir les programmes
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="w-full aspect-[3/4] bg-gradient-to-br from-emerald-900/50 to-black rounded-3xl flex items-center justify-center border border-emerald-800/30">
                  <div className="text-center">
                    <span className="text-8xl block mb-4">💪</span>
                    <p className="text-emerald-400 font-bold text-lg">Marco Steiner</p>
                    <p className="text-gray-500 text-sm">Fondateur FitPulse</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-emerald-500 text-black px-6 py-3 rounded-2xl font-bold text-sm">
                  +200 clients transformés
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section id="programmes" className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-emerald-400 uppercase tracking-[0.3em] text-sm mb-3 font-bold">Programmes</p>
            <h2 className="text-3xl sm:text-5xl font-black">Un programme pour chaque objectif</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🔥",
                title: "Perte de poids",
                desc: "Programme HIIT combiné à un plan nutritionnel personnalisé. Brûlez les graisses efficacement tout en préservant votre masse musculaire.",
                features: ["Entraînement HIIT 3x/semaine", "Plan nutritionnel sur mesure", "Suivi poids & mensurations", "Check-in hebdomadaire"],
                color: "from-orange-600 to-red-600",
              },
              {
                icon: "🏋️",
                title: "Musculation",
                desc: "Développez votre masse musculaire avec un programme de musculation progressif adapté à votre niveau et vos objectifs.",
                features: ["Programme musculation 4x/semaine", "Technique & posture", "Plan alimentaire protéiné", "Progression mensuelle"],
                color: "from-emerald-600 to-emerald-400",
              },
              {
                icon: "🧘",
                title: "Bien-être & Mobilité",
                desc: "Retrouvez énergie et souplesse. Idéal pour gérer le stress, améliorer votre posture et prévenir les douleurs.",
                features: ["Yoga & stretching", "Exercices de mobilité", "Gestion du stress", "Techniques de respiration"],
                color: "from-purple-600 to-blue-600",
              },
            ].map((prog) => (
              <div key={prog.title} className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all group">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${prog.color} flex items-center justify-center text-3xl mb-6`}>
                  {prog.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{prog.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{prog.desc}</p>
                <ul className="space-y-2">
                  {prog.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-emerald-400">&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages avant/après */}
      <section id="temoignages" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-emerald-400 uppercase tracking-[0.3em] text-sm mb-3 font-bold">Résultats</p>
            <h2 className="text-3xl sm:text-5xl font-black">Ils ont transformé leur corps</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", age: "34 ans", result: "-12 kg en 4 mois", quote: "Marco m'a redonné confiance en moi. Son programme perte de poids est intense mais les résultats parlent d'eux-mêmes !", programme: "Perte de poids" },
              { name: "Thomas K.", age: "28 ans", result: "+8 kg de muscle en 6 mois", quote: "Jamais je n'aurais cru pouvoir atteindre ce physique. Le suivi de Marco est exceptionnel, il s'adapte à chaque séance.", programme: "Musculation" },
              { name: "Elena B.", age: "45 ans", result: "Plus de douleurs dorsales", quote: "Après 2 mois de programme mobilité, mes douleurs chroniques au dos ont disparu. Je me sens revivre !", programme: "Bien-être" },
            ].map((t) => (
              <div key={t.name} className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
                <div className="grid grid-cols-2 gap-px bg-gray-800">
                  <div className="bg-gray-900 h-48 flex flex-col items-center justify-center">
                    <span className="text-4xl mb-2">😐</span>
                    <span className="text-xs text-gray-500 font-bold uppercase">Avant</span>
                  </div>
                  <div className="bg-gray-900 h-48 flex flex-col items-center justify-center">
                    <span className="text-4xl mb-2">😁</span>
                    <span className="text-xs text-emerald-500 font-bold uppercase">Après</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="inline-flex px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold mb-3">{t.programme}</div>
                  <p className="text-emerald-400 font-black text-lg mb-2">{t.result}</p>
                  <p className="text-gray-400 text-sm italic mb-4">&laquo; {t.quote} &raquo;</p>
                  <p className="text-gray-500 text-sm font-medium">{t.name}, {t.age}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section id="tarifs" className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-emerald-400 uppercase tracking-[0.3em] text-sm mb-3 font-bold">Tarifs</p>
            <h2 className="text-3xl sm:text-5xl font-black">Investissez en vous</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Découverte",
                price: "89",
                period: "/séance",
                features: ["1 séance de coaching", "Bilan forme initial", "Programme personnalisé", "Conseils nutrition de base"],
                highlight: false,
              },
              {
                name: "Transformation",
                price: "690",
                period: "/mois",
                features: ["3 séances/semaine", "Plan nutritionnel complet", "Suivi quotidien WhatsApp", "Mensurations mensuelles", "Accès app de suivi"],
                highlight: true,
              },
              {
                name: "Pack 10 séances",
                price: "790",
                period: "",
                features: ["10 séances de coaching", "Valable 3 mois", "Programme évolutif", "Suivi par email", "1 bilan mensuel"],
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 border ${
                  plan.highlight
                    ? "bg-emerald-500/10 border-emerald-500 scale-105"
                    : "bg-gray-900 border-gray-800"
                }`}
              >
                {plan.highlight && (
                  <div className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">Le plus populaire</div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black text-white">CHF {plan.price}</span>
                  <span className="text-gray-500 text-sm">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-emerald-400">&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#reservation"
                  className={`block text-center py-3 rounded-full font-bold transition-colors ${
                    plan.highlight
                      ? "bg-emerald-500 text-black hover:bg-emerald-400"
                      : "bg-gray-800 text-white hover:bg-gray-700"
                  }`}
                >
                  Choisir
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réservation */}
      <section id="reservation" className="py-20 bg-gradient-to-br from-emerald-900 to-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-black text-white">Réserve ta séance d&apos;essai</h2>
            <p className="text-emerald-300 mt-3">Première séance gratuite et sans engagement</p>
          </div>
          <div className="bg-black/50 rounded-2xl p-8 border border-emerald-800/50 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Prénom" className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <input type="text" placeholder="Nom" className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <input type="tel" placeholder="Téléphone" className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <select className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 md:col-span-2">
                <option>Quel est ton objectif ?</option>
                <option>Perte de poids</option>
                <option>Musculation</option>
                <option>Bien-être & Mobilité</option>
                <option>Préparation sportive</option>
                <option>Autre</option>
              </select>
              <textarea placeholder="Un message ? (optionnel)" rows={3} className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 md:col-span-2" />
            </div>
            <button className="mt-6 w-full py-4 rounded-xl bg-emerald-500 text-black font-bold text-lg hover:bg-emerald-400 transition-colors">
              Réserver ma séance gratuite
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-black font-black text-xs">FP</div>
                <span className="font-black text-white">FIT<span className="text-emerald-400">PULSE</span></span>
              </div>
              <p className="text-sm text-gray-500">Coaching sportif personnalisé à Zurich. Transforme ton corps, transforme ta vie.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm">Programmes</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#programmes" className="hover:text-emerald-400">Perte de poids</a></li>
                <li><a href="#programmes" className="hover:text-emerald-400">Musculation</a></li>
                <li><a href="#programmes" className="hover:text-emerald-400">Bien-être</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>+41 44 520 78 90</li>
                <li>info@fitpulse.ch</li>
                <li>Limmatstrasse 120</li>
                <li>8005 Zurich</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm">Suivez-moi</h4>
              <div className="flex gap-3">
                <span className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-emerald-400 cursor-pointer border border-gray-800 hover:border-emerald-500 transition-colors text-sm font-bold">IG</span>
                <span className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-emerald-400 cursor-pointer border border-gray-800 hover:border-emerald-500 transition-colors text-sm font-bold">YT</span>
                <span className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-emerald-400 cursor-pointer border border-gray-800 hover:border-emerald-500 transition-colors text-sm font-bold">TT</span>
              </div>
              <p className="text-gray-600 text-xs mt-4">@fitpulse_zurich</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-600">
            &copy; 2026 FitPulse Coaching. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
