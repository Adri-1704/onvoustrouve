'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

// ─── Types ──────────────────────────────────────────────────────────────────
interface LigneFacture {
  description: string;
  quantite: number;
  prix_unitaire: number;
  total: number;
}

interface FactureDetail {
  id: string;
  numero: string;
  client_nom: string;
  client_email: string;
  client_adresse?: string;
  client_ville?: string;
  type: 'mise_en_place' | 'abonnement';
  montant: number;
  statut: string;
  date_emission: string;
  date_echeance: string;
  lignes?: LigneFacture[];
  created_at?: string;
}

// ─── Helpers ────────────────────────────────────────────────────────────────
function formatDate(d?: string) {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('fr-CH', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function formatCHF(n: number) {
  return `CHF ${n.toFixed(2)}`;
}

// ═══════════════════════════════════════════════════════════════════════════
// PRINTABLE INVOICE
// ═══════════════════════════════════════════════════════════════════════════
export default function FacturePage() {
  const params = useParams();
  const id = params.id as string;

  const [facture, setFacture] = useState<FactureDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('ovt_token');
    if (!token) {
      setError('Non connecte. Veuillez vous connecter depuis le dashboard.');
      setLoading(false);
      return;
    }

    fetch(`/api/dashboard/factures/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error('Facture introuvable');
        return res.json();
      })
      .then((data) => {
        setFacture(data.facture || data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !facture) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error || 'Facture introuvable'}</p>
          <a href="/dashboard" className="text-blue-600 hover:underline text-sm">Retour au dashboard</a>
        </div>
      </div>
    );
  }

  // Build line items from facture data or generate default
  const lignes: LigneFacture[] = facture.lignes && facture.lignes.length > 0
    ? facture.lignes
    : [
        {
          description: facture.type === 'mise_en_place'
            ? 'Mise en place du profil OnVousTrouve.ch'
            : 'Abonnement mensuel OnVousTrouve.ch',
          quantite: 1,
          prix_unitaire: facture.montant,
          total: facture.montant,
        },
      ];

  const sousTotal = lignes.reduce((sum, l) => sum + l.total, 0);
  // In Switzerland, TVA may or may not apply depending on the business setup
  const tva = 0;
  const total = sousTotal + tva;

  return (
    <>
      {/* Print styles */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .print-page { padding: 0 !important; max-width: 100% !important; box-shadow: none !important; }
        }
      `}</style>

      {/* Print button bar */}
      <div className="no-print bg-gray-100 border-b border-gray-200 py-3 px-6 flex items-center justify-between">
        <a href="/dashboard" className="text-sm text-blue-600 hover:underline">&larr; Retour au dashboard</a>
        <button
          onClick={() => window.print()}
          className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
        >
          Imprimer / PDF
        </button>
      </div>

      {/* Invoice */}
      <div className="print-page max-w-3xl mx-auto bg-white p-10 my-8 shadow-sm">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">OnVousTrouve.ch</h1>
            <p className="text-sm text-gray-500 mt-1">Adrien Haubrich</p>
            <p className="text-sm text-gray-500">Le Bouveret, Suisse</p>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">Facture</h2>
            <p className="text-sm text-gray-500 mt-1">N° {facture.numero || facture.id.slice(0, 8).toUpperCase()}</p>
          </div>
        </div>

        {/* Client & dates */}
        <div className="flex justify-between mb-10">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Facture a</p>
            <p className="font-semibold text-gray-900">{facture.client_nom}</p>
            {facture.client_adresse && <p className="text-sm text-gray-600">{facture.client_adresse}</p>}
            {facture.client_ville && <p className="text-sm text-gray-600">{facture.client_ville}</p>}
            {facture.client_email && <p className="text-sm text-gray-500">{facture.client_email}</p>}
          </div>
          <div className="text-right">
            <div className="mb-2">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Date d&apos;emission</p>
              <p className="text-sm font-medium text-gray-900">{formatDate(facture.date_emission || facture.created_at)}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Date d&apos;echeance</p>
              <p className="text-sm font-medium text-gray-900">{formatDate(facture.date_echeance)}</p>
            </div>
          </div>
        </div>

        {/* Line items table */}
        <table className="w-full mb-8">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="text-left py-3 text-sm font-semibold text-gray-900">Description</th>
              <th className="text-center py-3 text-sm font-semibold text-gray-900 w-20">Qte</th>
              <th className="text-right py-3 text-sm font-semibold text-gray-900 w-32">Prix unitaire</th>
              <th className="text-right py-3 text-sm font-semibold text-gray-900 w-32">Total</th>
            </tr>
          </thead>
          <tbody>
            {lignes.map((l, i) => (
              <tr key={i} className="border-b border-gray-200">
                <td className="py-3 text-sm text-gray-700">{l.description}</td>
                <td className="py-3 text-sm text-gray-700 text-center">{l.quantite}</td>
                <td className="py-3 text-sm text-gray-700 text-right">{formatCHF(l.prix_unitaire)}</td>
                <td className="py-3 text-sm font-medium text-gray-900 text-right">{formatCHF(l.total)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Totals */}
        <div className="flex justify-end mb-10">
          <div className="w-64 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Sous-total</span>
              <span className="text-gray-900">{formatCHF(sousTotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">TVA</span>
              <span className="text-gray-900">{tva > 0 ? formatCHF(tva) : 'Exonere'}</span>
            </div>
            <div className="flex justify-between text-base font-bold border-t-2 border-gray-900 pt-2">
              <span className="text-gray-900">Total</span>
              <span className="text-gray-900">{formatCHF(total)}</span>
            </div>
          </div>
        </div>

        {/* Payment info */}
        <div className="bg-gray-50 rounded-lg p-6 mb-10">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Informations de paiement</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">IBAN</p>
              <p className="font-medium text-gray-900 font-mono">CH__ ____ ____ ____ ____ _</p>
            </div>
            <div>
              <p className="text-gray-500">Titulaire</p>
              <p className="font-medium text-gray-900">Adrien Haubrich</p>
            </div>
            <div>
              <p className="text-gray-500">Reference</p>
              <p className="font-medium text-gray-900">{facture.numero || facture.id.slice(0, 8).toUpperCase()}</p>
            </div>
            <div>
              <p className="text-gray-500">Conditions de paiement</p>
              <p className="font-medium text-gray-900">30 jours net</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-xs text-gray-400">
            OnVousTrouve.ch — Adrien Haubrich — Le Bouveret, Suisse
          </p>
        </div>
      </div>
    </>
  );
}
