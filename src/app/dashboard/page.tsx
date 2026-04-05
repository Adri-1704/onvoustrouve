'use client';

import { useState, useEffect, useCallback } from 'react';

// ─── Types ──────────────────────────────────────────────────────────────────
interface Client {
  id: string;
  nom: string;
  email: string;
  slug: string;
  abonnement: 'starter' | 'pro' | 'premium';
  statut: 'actif' | 'inactif';
  telephone?: string;
  ville?: string;
  date_debut?: string;
  created_at?: string;
}

interface Facture {
  id: string;
  numero: string;
  client_id: string;
  client_nom?: string;
  type: 'mise_en_place' | 'abonnement';
  montant: number;
  statut: 'brouillon' | 'envoyee' | 'payee' | 'annulee';
  date_emission?: string;
  date_echeance?: string;
  created_at?: string;
}

type Tab = 'overview' | 'clients' | 'factures';

// ─── Constants ──────────────────────────────────────────────────────────────
const API_BASE = '/api/dashboard';

const ABONNEMENT_COLORS: Record<string, string> = {
  starter: 'bg-gray-100 text-gray-700',
  pro: 'bg-blue-100 text-blue-700',
  premium: 'bg-purple-100 text-purple-700',
};

const STATUT_FACTURE_COLORS: Record<string, string> = {
  brouillon: 'bg-gray-100 text-gray-700',
  envoyee: 'bg-yellow-100 text-yellow-700',
  payee: 'bg-green-100 text-green-700',
  annulee: 'bg-red-100 text-red-700',
};

const STATUT_CLIENT_COLORS: Record<string, string> = {
  actif: 'bg-green-100 text-green-700',
  inactif: 'bg-red-100 text-red-700',
};

const PRIX_ABONNEMENTS: Record<string, number> = {
  starter: 49,
  pro: 99,
  premium: 199,
};

// ─── Helpers ────────────────────────────────────────────────────────────────
function formatDate(d?: string) {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('fr-CH', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function formatCHF(n: number) {
  return `CHF ${n.toFixed(2)}`;
}

// ─── API helper ─────────────────────────────────────────────────────────────
async function api(path: string, token: string, options?: RequestInit) {
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      ...(options?.headers || {}),
    },
  });
  if (res.status === 401) {
    localStorage.removeItem('ovt_token');
    window.location.reload();
    throw new Error('Non autorise');
  }
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Erreur ${res.status}`);
  }
  return res.json();
}

// ═══════════════════════════════════════════════════════════════════════════
// LOGIN
// ═══════════════════════════════════════════════════════════════════════════
function LoginScreen({ onLogin }: { onLogin: (token: string) => void }) {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Mot de passe incorrect');
      localStorage.setItem('ovt_token', data.token);
      onLogin(data.token);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Erreur de connexion');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-1">OnVousTrouve.ch</h1>
        <p className="text-sm text-gray-500 text-center mb-8">Administration</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              placeholder="Entrez le mot de passe"
              autoFocus
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// BADGE
// ═══════════════════════════════════════════════════════════════════════════
function Badge({ text, colors }: { text: string; colors: string }) {
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${colors}`}>
      {text}
    </span>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// STAT CARD
// ═══════════════════════════════════════════════════════════════════════════
function StatCard({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
      {sub && <p className="text-xs text-gray-400 mt-1">{sub}</p>}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// MODAL
// ═══════════════════════════════════════════════════════════════════════════
function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto m-4" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl leading-none">&times;</button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// OVERVIEW TAB
// ═══════════════════════════════════════════════════════════════════════════
function OverviewTab({ clients, factures, token }: { clients: Client[]; factures: Facture[]; token: string }) {
  const [relancing, setRelancing] = useState<string | null>(null);
  const [relanceMsg, setRelanceMsg] = useState('');

  const actifs = clients.filter((c) => c.statut === 'actif').length;
  const revenusMensuels = clients
    .filter((c) => c.statut === 'actif')
    .reduce((sum, c) => sum + (PRIX_ABONNEMENTS[c.abonnement] || 0), 0);
  const impayees = factures.filter((f) => f.statut === 'envoyee').length;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const overdueFactures = factures.filter((f) => {
    if (f.statut === 'payee' || f.statut === 'annulee') return false;
    if (!f.date_echeance) return false;
    return new Date(f.date_echeance) < today;
  });

  const recentFactures = [...factures].sort((a, b) => new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime()).slice(0, 5);

  const sendRelance = async (f: Facture) => {
    const client = clients.find((c) => c.id === f.client_id);
    if (!client?.email) return;
    setRelancing(f.id);
    setRelanceMsg('');
    try {
      await api('/relance', token, {
        method: 'POST',
        body: JSON.stringify({
          facture_id: f.id,
          client_email: client.email,
          client_nom: client.nom,
          numero: f.numero || f.id.slice(0, 8),
          montant: f.montant,
          date_echeance: f.date_echeance,
        }),
      });
      setRelanceMsg(`Relance envoyee a ${client.email}`);
    } catch {
      setRelanceMsg('Erreur lors de l\'envoi de la relance');
    } finally {
      setRelancing(null);
      setTimeout(() => setRelanceMsg(''), 4000);
    }
  };

  return (
    <div className="space-y-8">
      {relanceMsg && (
        <div className={`p-3 rounded-lg text-sm font-medium ${relanceMsg.startsWith('Erreur') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
          {relanceMsg}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard label="Total clients" value={clients.length} />
        <StatCard label="Clients actifs" value={actifs} />
        <StatCard label="Revenus mensuels estimes" value={formatCHF(revenusMensuels)} sub="Base sur les abonnements actifs" />
        <StatCard label="Factures impayees" value={impayees} sub={impayees > 0 ? 'En attente de paiement' : 'Tout est en ordre'} />
        <div className="bg-white rounded-xl border-2 border-red-200 p-6">
          <p className="text-sm text-red-500 mb-1">Factures en retard</p>
          <p className="text-3xl font-bold text-red-600">{overdueFactures.length}</p>
          {overdueFactures.length > 0 && <p className="text-xs text-red-400 mt-1">Echeance depassee</p>}
        </div>
      </div>

      {overdueFactures.length > 0 && (
        <div className="bg-white rounded-xl border-2 border-red-200 p-6">
          <h3 className="text-base font-semibold text-red-700 mb-4">Factures en retard ({overdueFactures.length})</h3>
          <ul className="space-y-3">
            {overdueFactures.map((f) => {
              const client = clients.find((c) => c.id === f.client_id);
              return (
                <li key={f.id} className="flex items-center justify-between text-sm bg-red-50 rounded-lg px-4 py-3">
                  <div className="flex items-center gap-4">
                    <span className="font-medium text-gray-900">Facture {f.numero || f.id.slice(0, 8)}</span>
                    <span className="text-gray-500">{f.client_nom || client?.nom || 'Client'}</span>
                    <span className="font-medium">{formatCHF(f.montant)}</span>
                    <span className="text-red-600 text-xs">Echeance: {formatDate(f.date_echeance)}</span>
                  </div>
                  <button
                    onClick={() => sendRelance(f)}
                    disabled={relancing === f.id || !client?.email}
                    className="px-3 py-1.5 bg-orange-500 text-white text-xs font-medium rounded-lg hover:bg-orange-600 disabled:opacity-50 transition flex items-center gap-1.5"
                  >
                    {relancing === f.id ? '...' : 'Relancer'}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-base font-semibold text-gray-900 mb-4">Activite recente</h3>
        {recentFactures.length === 0 ? (
          <p className="text-sm text-gray-400">Aucune activite recente</p>
        ) : (
          <ul className="space-y-3">
            {recentFactures.map((f) => (
              <li key={f.id} className="flex items-center justify-between text-sm">
                <div>
                  <span className="font-medium text-gray-900">Facture {f.numero || f.id.slice(0, 8)}</span>
                  <span className="text-gray-500 ml-2">— {f.client_nom || 'Client'}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge text={f.statut} colors={STATUT_FACTURE_COLORS[f.statut] || ''} />
                  <span className="text-gray-400">{formatDate(f.created_at)}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// CLIENT FORM
// ═══════════════════════════════════════════════════════════════════════════
function ClientForm({ token, onDone, initial }: { token: string; onDone: () => void; initial?: Client }) {
  const [form, setForm] = useState({
    nom: initial?.nom || '',
    email: initial?.email || '',
    password: '',
    slug: initial?.slug || '',
    abonnement: initial?.abonnement || 'starter',
    telephone: initial?.telephone || '',
    ville: initial?.ville || '',
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const isEdit = !!initial;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      if (isEdit) {
        await api(`/clients/${initial.id}`, token, { method: 'PUT', body: JSON.stringify(form) });
      } else {
        await api('/clients', token, { method: 'POST', body: JSON.stringify(form) });
      }
      onDone();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Erreur');
    } finally {
      setSaving(false);
    }
  };

  const field = (label: string, key: string, type = 'text', required = true) => (
    <div key={key}>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        value={(form as Record<string, string>)[key]}
        onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
        required={required}
      />
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {field('Nom', 'nom')}
      {field('Email', 'email', 'email')}
      {!isEdit && field('Mot de passe', 'password', 'password')}
      {field('Slug', 'slug')}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Abonnement</label>
        <select
          value={form.abonnement}
          onChange={(e) => setForm((f) => ({ ...f, abonnement: e.target.value as 'starter' | 'pro' | 'premium' }))}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
        >
          <option value="starter">Starter</option>
          <option value="pro">Pro</option>
          <option value="premium">Premium</option>
        </select>
      </div>
      {field('Telephone', 'telephone', 'tel', false)}
      {field('Ville', 'ville', 'text', false)}
      {error && <p className="text-sm text-red-600">{error}</p>}
      <div className="flex justify-end gap-3 pt-2">
        <button type="submit" disabled={saving} className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 transition">
          {saving ? 'Enregistrement...' : isEdit ? 'Mettre a jour' : 'Creer le client'}
        </button>
      </div>
    </form>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// CLIENT DETAIL PANEL
// ═══════════════════════════════════════════════════════════════════════════
function ClientDetail({ client, token, factures, onClose, onRefresh }: { client: Client; token: string; factures: Facture[]; onClose: () => void; onRefresh: () => void }) {
  const [editing, setEditing] = useState(false);
  const [toggling, setToggling] = useState(false);
  const [generating, setGenerating] = useState('');

  const clientFactures = factures.filter((f) => f.client_id === client.id);

  const toggleStatut = async () => {
    if (client.statut === 'actif' && !confirm(`Voulez-vous vraiment désactiver le compte de ${client.nom} ?`)) return;
    setToggling(true);
    try {
      await api(`/clients/${client.id}`, token, {
        method: 'PUT',
        body: JSON.stringify({ is_active: client.statut !== 'actif' }),
      });
      onRefresh();
    } catch {
      /* ignore */
    } finally {
      setToggling(false);
    }
  };

  const genererFacture = async (type: 'mise_en_place' | 'abonnement') => {
    setGenerating(type);
    try {
      await api('/factures', token, {
        method: 'POST',
        body: JSON.stringify({ client_id: client.id, type }),
      });
      onRefresh();
    } catch {
      /* ignore */
    } finally {
      setGenerating('');
    }
  };

  if (editing) {
    return (
      <div>
        <button onClick={() => setEditing(false)} className="text-sm text-blue-600 hover:underline mb-4">&larr; Retour</button>
        <ClientForm token={token} initial={client} onDone={() => { setEditing(false); onRefresh(); }} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <button onClick={onClose} className="text-sm text-blue-600 hover:underline">&larr; Retour a la liste</button>
        <button onClick={() => setEditing(true)} className="text-sm text-blue-600 hover:underline">Modifier</button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{client.nom}</h3>
          <Badge text={client.statut} colors={STATUT_CLIENT_COLORS[client.statut] || ''} />
        </div>
        <p className="text-sm text-gray-500">{client.email}</p>
        <div className="flex gap-4 text-sm text-gray-500">
          {client.telephone && <span>Tel: {client.telephone}</span>}
          {client.ville && <span>Ville: {client.ville}</span>}
        </div>
        <div className="flex items-center gap-3">
          <Badge text={client.abonnement} colors={ABONNEMENT_COLORS[client.abonnement] || ''} />
          <span className="text-sm text-gray-400">depuis le {formatDate(client.date_debut || client.created_at)}</span>
        </div>
      </div>

      <div className="flex gap-3 flex-wrap">
        <button
          onClick={toggleStatut}
          disabled={toggling}
          className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition ${
            client.statut === 'actif'
              ? 'bg-red-600 text-white hover:bg-red-700'
              : 'bg-green-600 text-white hover:bg-green-700'
          } disabled:opacity-50`}
        >
          {toggling ? '...' : client.statut === 'actif' ? 'Desactiver le compte' : 'Reactiver le compte'}
        </button>
        <button
          onClick={() => genererFacture('mise_en_place')}
          disabled={!!generating}
          className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 disabled:opacity-50 transition"
        >
          {generating === 'mise_en_place' ? '...' : 'Generer facture mise en place'}
        </button>
        <button
          onClick={() => genererFacture('abonnement')}
          disabled={!!generating}
          className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 disabled:opacity-50 transition"
        >
          {generating === 'abonnement' ? '...' : 'Generer facture abonnement'}
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h4 className="text-sm font-semibold text-gray-900 mb-3">Factures ({clientFactures.length})</h4>
        {clientFactures.length === 0 ? (
          <p className="text-sm text-gray-400">Aucune facture</p>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b border-gray-100">
                <th className="pb-2 font-medium">N°</th>
                <th className="pb-2 font-medium">Type</th>
                <th className="pb-2 font-medium">Montant</th>
                <th className="pb-2 font-medium">Statut</th>
                <th className="pb-2 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {clientFactures.map((f) => (
                <tr key={f.id} className="border-b border-gray-50">
                  <td className="py-2">{f.numero || f.id.slice(0, 8)}</td>
                  <td className="py-2 capitalize">{f.type.replace('_', ' ')}</td>
                  <td className="py-2">{formatCHF(f.montant)}</td>
                  <td className="py-2"><Badge text={f.statut} colors={STATUT_FACTURE_COLORS[f.statut] || ''} /></td>
                  <td className="py-2">{formatDate(f.created_at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// CLIENTS TAB
// ═══════════════════════════════════════════════════════════════════════════
function ClientsTab({ clients, factures, token, onRefresh }: { clients: Client[]; factures: Facture[]; token: string; onRefresh: () => void }) {
  const [showForm, setShowForm] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  if (selectedClient) {
    const fresh = clients.find((c) => c.id === selectedClient.id) || selectedClient;
    return <ClientDetail client={fresh} token={token} factures={factures} onClose={() => setSelectedClient(null)} onRefresh={onRefresh} />;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Clients ({clients.length})</h2>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
        >
          + Ajouter un client
        </button>
      </div>

      <Modal open={showForm} onClose={() => setShowForm(false)} title="Nouveau client">
        <ClientForm token={token} onDone={() => { setShowForm(false); onRefresh(); }} />
      </Modal>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 bg-gray-50 border-b border-gray-200">
              <th className="px-4 py-3 font-medium">Nom</th>
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Abonnement</th>
              <th className="px-4 py-3 font-medium">Statut</th>
              <th className="px-4 py-3 font-medium">Date debut</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-gray-400">Aucun client</td>
              </tr>
            ) : (
              clients.map((c) => (
                <tr key={c.id} className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition" onClick={() => setSelectedClient(c)}>
                  <td className="px-4 py-3 font-medium text-gray-900">{c.nom}</td>
                  <td className="px-4 py-3 text-gray-500">{c.email}</td>
                  <td className="px-4 py-3"><Badge text={c.abonnement} colors={ABONNEMENT_COLORS[c.abonnement] || ''} /></td>
                  <td className="px-4 py-3"><Badge text={c.statut} colors={STATUT_CLIENT_COLORS[c.statut] || ''} /></td>
                  <td className="px-4 py-3 text-gray-500">{formatDate(c.date_debut || c.created_at)}</td>
                  <td className="px-4 py-3">
                    <button className="text-blue-600 hover:underline text-xs" onClick={(e) => { e.stopPropagation(); setSelectedClient(c); }}>
                      Voir
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// FACTURES TAB
// ═══════════════════════════════════════════════════════════════════════════
function FacturesTab({ factures, clients, token, onRefresh }: { factures: Facture[]; clients: Client[]; token: string; onRefresh: () => void }) {
  const [filter, setFilter] = useState<string>('all');
  const [selectedFacture, setSelectedFacture] = useState<Facture | null>(null);
  const [updatingStatut, setUpdatingStatut] = useState(false);
  const [relancing, setRelancing] = useState<string | null>(null);
  const [relanceMsg, setRelanceMsg] = useState('');

  const filtered = filter === 'all' ? factures : factures.filter((f) => f.statut === filter);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isOverdue = (f: Facture) => {
    if (f.statut === 'payee' || f.statut === 'annulee') return false;
    if (!f.date_echeance) return false;
    return new Date(f.date_echeance) < today;
  };

  const updateStatut = async (id: string, statut: string) => {
    setUpdatingStatut(true);
    try {
      await api(`/factures/${id}`, token, { method: 'PUT', body: JSON.stringify({ statut }) });
      onRefresh();
      setSelectedFacture(null);
    } catch {
      /* ignore */
    } finally {
      setUpdatingStatut(false);
    }
  };

  const sendRelance = async (f: Facture) => {
    const client = clients.find((c) => c.id === f.client_id);
    if (!client?.email) return;
    setRelancing(f.id);
    setRelanceMsg('');
    try {
      await api('/relance', token, {
        method: 'POST',
        body: JSON.stringify({
          facture_id: f.id,
          client_email: client.email,
          client_nom: client.nom,
          numero: f.numero || f.id.slice(0, 8),
          montant: f.montant,
          date_echeance: f.date_echeance,
        }),
      });
      setRelanceMsg(`Relance envoyee a ${client.email}`);
    } catch {
      setRelanceMsg('Erreur lors de l\'envoi de la relance');
    } finally {
      setRelancing(null);
      setTimeout(() => setRelanceMsg(''), 4000);
    }
  };

  return (
    <div className="space-y-4">
      {relanceMsg && (
        <div className={`p-3 rounded-lg text-sm font-medium ${relanceMsg.startsWith('Erreur') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
          {relanceMsg}
        </div>
      )}

      <div className="flex items-center justify-between flex-wrap gap-2">
        <h2 className="text-lg font-semibold text-gray-900">Factures ({filtered.length})</h2>
        <div className="flex gap-2 flex-wrap">
          {['all', 'brouillon', 'envoyee', 'payee', 'annulee'].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition ${
                filter === s ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {s === 'all' ? 'Toutes' : s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <Modal open={!!selectedFacture} onClose={() => setSelectedFacture(null)} title={`Facture ${selectedFacture?.numero || ''}`}>
        {selectedFacture && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><span className="text-gray-500">Client:</span> <span className="font-medium">{selectedFacture.client_nom || '—'}</span></div>
              <div><span className="text-gray-500">Type:</span> <span className="font-medium capitalize">{selectedFacture.type.replace('_', ' ')}</span></div>
              <div><span className="text-gray-500">Montant:</span> <span className="font-medium">{formatCHF(selectedFacture.montant)}</span></div>
              <div><span className="text-gray-500">Statut:</span> <Badge text={selectedFacture.statut} colors={STATUT_FACTURE_COLORS[selectedFacture.statut] || ''} /></div>
              <div><span className="text-gray-500">Date emission:</span> <span className="font-medium">{formatDate(selectedFacture.date_emission || selectedFacture.created_at)}</span></div>
              <div><span className="text-gray-500">Date echeance:</span> <span className="font-medium">{formatDate(selectedFacture.date_echeance)}</span></div>
            </div>

            {isOverdue(selectedFacture) && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700 font-medium">
                Cette facture est en retard de paiement
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Changer le statut</label>
              <div className="flex gap-2">
                {['brouillon', 'envoyee', 'payee', 'annulee'].map((s) => (
                  <button
                    key={s}
                    disabled={updatingStatut || s === selectedFacture.statut}
                    onClick={() => updateStatut(selectedFacture.id, s)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition disabled:opacity-30 ${STATUT_FACTURE_COLORS[s]} border-transparent hover:ring-2 hover:ring-offset-1 hover:ring-gray-300`}
                  >
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href={`/dashboard/facture/${selectedFacture.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition"
              >
                Voir / Imprimer
              </a>
              {(selectedFacture.statut === 'envoyee' || isOverdue(selectedFacture)) && (
                <button
                  onClick={() => sendRelance(selectedFacture)}
                  disabled={relancing === selectedFacture.id}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg hover:bg-orange-600 disabled:opacity-50 transition"
                >
                  {relancing === selectedFacture.id ? 'Envoi...' : 'Envoyer une relance'}
                </button>
              )}
            </div>
          </div>
        )}
      </Modal>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 bg-gray-50 border-b border-gray-200">
              <th className="px-4 py-3 font-medium">N° Facture</th>
              <th className="px-4 py-3 font-medium">Client</th>
              <th className="px-4 py-3 font-medium">Type</th>
              <th className="px-4 py-3 font-medium">Montant</th>
              <th className="px-4 py-3 font-medium">Statut</th>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-gray-400">Aucune facture</td>
              </tr>
            ) : (
              filtered.map((f) => (
                <tr key={f.id} className={`border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition ${isOverdue(f) ? 'bg-red-50/50' : ''}`} onClick={() => setSelectedFacture(f)}>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {f.numero || f.id.slice(0, 8)}
                    {isOverdue(f) && <span className="ml-1.5 inline-block w-2 h-2 rounded-full bg-red-500" title="En retard" />}
                  </td>
                  <td className="px-4 py-3 text-gray-500">{f.client_nom || '—'}</td>
                  <td className="px-4 py-3 capitalize">{f.type.replace('_', ' ')}</td>
                  <td className="px-4 py-3 font-medium">{formatCHF(f.montant)}</td>
                  <td className="px-4 py-3">
                    <Badge text={isOverdue(f) ? 'en retard' : f.statut} colors={isOverdue(f) ? 'bg-red-100 text-red-700' : STATUT_FACTURE_COLORS[f.statut] || ''} />
                  </td>
                  <td className="px-4 py-3 text-gray-500">{formatDate(f.date_emission || f.created_at)}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button className="text-blue-600 hover:underline text-xs" onClick={(e) => { e.stopPropagation(); setSelectedFacture(f); }}>
                        Detail
                      </button>
                      {(f.statut === 'envoyee' || isOverdue(f)) && (
                        <button
                          className="text-orange-600 hover:underline text-xs font-medium"
                          disabled={relancing === f.id}
                          onClick={(e) => { e.stopPropagation(); sendRelance(f); }}
                        >
                          {relancing === f.id ? '...' : 'Relancer'}
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// MAIN DASHBOARD
// ═══════════════════════════════════════════════════════════════════════════
export default function DashboardPage() {
  const [token, setToken] = useState<string | null>(null);
  const [tab, setTab] = useState<Tab>('overview');
  const [clients, setClients] = useState<Client[]>([]);
  const [factures, setFactures] = useState<Facture[]>([]);
  const [loading, setLoading] = useState(true);

  // Init token from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('ovt_token');
    if (saved) setToken(saved);
  }, []);

  const fetchData = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    try {
      const [clientsRes, facturesRes] = await Promise.all([
        api('/clients', token),
        api('/factures', token),
      ]);
      setClients(clientsRes.clients || clientsRes || []);
      setFactures(facturesRes.factures || facturesRes || []);
    } catch {
      /* handled by api() - will redirect on 401 */
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) fetchData();
  }, [token, fetchData]);

  // Not logged in
  if (!token) {
    return <LoginScreen onLogin={setToken} />;
  }

  const tabs: { key: Tab; label: string }[] = [
    { key: 'overview', label: 'Vue d\'ensemble' },
    { key: 'clients', label: 'Clients' },
    { key: 'factures', label: 'Factures' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold text-gray-900">OnVousTrouve.ch</h1>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">Admin</span>
            </div>
            <button
              onClick={() => { localStorage.removeItem('ovt_token'); setToken(null); }}
              className="text-sm text-gray-500 hover:text-gray-700 transition"
            >
              Deconnexion
            </button>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`py-3 text-sm font-medium border-b-2 transition ${
                  tab === t.key
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <>
            {tab === 'overview' && <OverviewTab clients={clients} factures={factures} token={token} />}
            {tab === 'clients' && <ClientsTab clients={clients} factures={factures} token={token} onRefresh={fetchData} />}
            {tab === 'factures' && <FacturesTab factures={factures} clients={clients} token={token} onRefresh={fetchData} />}
          </>
        )}
      </main>
    </div>
  );
}
