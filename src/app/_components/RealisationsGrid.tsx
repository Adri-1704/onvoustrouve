"use client";

import { useState, useEffect } from "react";

export interface Realisation {
  name: string;
  metier: string;
  href: string;
  gradient: string;
  emoji: string;
}

interface RealisationsGridProps {
  realisations: Realisation[];
}

export function RealisationsGrid({ realisations }: RealisationsGridProps) {
  const [selected, setSelected] = useState<Realisation | null>(null);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSelected(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {realisations.map((realisation) => (
          <button
            key={realisation.metier}
            onClick={() => setSelected(realisation)}
            type="button"
            className="realization-card group relative flex flex-col justify-end rounded-2xl overflow-hidden h-48 sm:h-56 shadow-md text-left cursor-pointer"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${realisation.gradient}`} />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            <div className="relative p-4 sm:p-5">
              <span className="text-2xl sm:text-3xl mb-2 block">{realisation.emoji}</span>
              <h3 className="text-white font-bold text-sm sm:text-base leading-tight">
                {realisation.name}
              </h3>
              <p className="text-white/80 text-xs sm:text-sm mt-1">{realisation.metier}</p>
              <span className="inline-flex items-center gap-1 text-white/70 text-xs mt-2 group-hover:text-white transition-colors">
                Aperçu rapide
                <svg
                  className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-2xl shrink-0">{selected.emoji}</span>
                <div className="min-w-0">
                  <p className="font-bold text-gray-900 truncate">{selected.name}</p>
                  <p className="text-xs text-gray-500">{selected.metier}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={selected.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                >
                  Ouvrir dans un onglet
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <button
                  onClick={() => setSelected(null)}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors"
                  aria-label="Fermer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <iframe
              src={selected.href}
              className="flex-1 w-full bg-white"
              title={`Aperçu site ${selected.name}`}
              loading="lazy"
            />
            <div className="px-5 py-3 border-t border-gray-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-sm text-gray-600 text-center sm:text-left">
                Ce design vous plaît ? On peut l&apos;adapter à votre activité.
              </p>
              <a
                href="#contact"
                onClick={() => setSelected(null)}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors"
              >
                Demander un site comme ça
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
