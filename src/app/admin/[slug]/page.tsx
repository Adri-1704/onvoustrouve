'use client'

import { useState, useEffect, useCallback, use } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

// ============================================================
// Types
// ============================================================

interface ClientInfo {
  id: string
  email: string
  nom: string
  slug: string
}

interface SiteData {
  id?: string
  client_id?: string
  titre: string
  metier: string
  description: string
  telephone: string
  email_contact: string
  adresse: string
  ville: string
  hero_titre: string
  hero_sous_titre: string
  couleur_primaire: string
  couleur_secondaire: string
  logo_url: string
  hero_image_url: string
  facebook: string
  instagram: string
  linkedin: string
}

interface Service {
  id?: string
  site_id?: string
  nom: string
  description: string
  prix: string
  ordre: number
  _isNew?: boolean
}

interface Horaire {
  id?: string
  site_id?: string
  jour: string
  ouverture: string
  fermeture: string
  ferme: boolean
  ordre: number
}

interface Temoignage {
  id?: string
  site_id?: string
  nom: string
  texte: string
  note: number
  _isNew?: boolean
}

interface GalerieItem {
  id?: string
  site_id?: string
  image_url: string
  legende: string
  ordre: number
}

const JOURS_SEMAINE = [
  'Lundi',
  'Mardi',
  'Mercredi',
  'Jeudi',
  'Vendredi',
  'Samedi',
  'Dimanche',
]

const defaultSite: SiteData = {
  titre: '',
  metier: '',
  description: '',
  telephone: '',
  email_contact: '',
  adresse: '',
  ville: '',
  hero_titre: '',
  hero_sous_titre: '',
  couleur_primaire: '#1e40af',
  couleur_secondaire: '#dbeafe',
  logo_url: '',
  hero_image_url: '',
  facebook: '',
  instagram: '',
  linkedin: '',
}

// ============================================================
// Composant Login
// ============================================================

function LoginForm({
  slug,
  onLogin,
}: {
  slug: string
  onLogin: (client: ClientInfo, token: string) => void
}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Erreur de connexion')
        return
      }

      // Verifier que le slug correspond
      if (data.client.slug !== slug) {
        setError("Vous n'avez pas acces a ce site.")
        return
      }

      onLogin(data.client, data.token)
    } catch {
      setError('Erreur de connexion. Veuillez reessayer.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-2">
          Administration
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Connectez-vous pour gerer votre site
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="votre@email.ch"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Votre mot de passe"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>
      </div>
    </div>
  )
}

// ============================================================
// Composant Section (wrapper reutilisable)
// ============================================================

function Section({
  title,
  children,
  defaultOpen = true,
}: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
      >
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && <div className="p-5 pt-0 space-y-4">{children}</div>}
    </div>
  )
}

// ============================================================
// Composant Input reutilisable
// ============================================================

function Field({
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  textarea,
}: {
  label: string
  value: string
  onChange: (val: string) => void
  type?: string
  placeholder?: string
  textarea?: boolean
}) {
  const cls =
    'w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm'
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cls + ' min-h-[80px]'}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cls}
          placeholder={placeholder}
        />
      )}
    </div>
  )
}

// ============================================================
// Composant Dashboard
// ============================================================

function Dashboard({
  client,
  slug,
  onLogout,
}: {
  client: ClientInfo
  slug: string
  onLogout: () => void
}) {
  const [site, setSite] = useState<SiteData>(defaultSite)
  const [services, setServices] = useState<Service[]>([])
  const [horaires, setHoraires] = useState<Horaire[]>([])
  const [temoignages, setTemoignages] = useState<Temoignage[]>([])
  const [galerie, setGalerie] = useState<GalerieItem[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<{
    type: 'success' | 'error'
    text: string
  } | null>(null)

  // Charger les donnees
  const loadData = useCallback(async () => {
    setLoading(true)
    try {
      const [siteRes, servicesRes, horairesRes, temoignagesRes, galerieRes] =
        await Promise.all([
          supabase.from('sites').select('*').eq('client_id', client.id).single(),
          supabase
            .from('services')
            .select('*')
            .eq('site_id', client.id)
            .order('ordre'),
          supabase
            .from('horaires')
            .select('*')
            .eq('site_id', client.id)
            .order('ordre'),
          supabase.from('temoignages').select('*').eq('site_id', client.id),
          supabase
            .from('galerie')
            .select('*')
            .eq('site_id', client.id)
            .order('ordre'),
        ])

      if (siteRes.data) {
        setSite(siteRes.data as SiteData)
      }
      setServices((servicesRes.data || []) as Service[])
      setTemoignages((temoignagesRes.data || []) as Temoignage[])
      setGalerie((galerieRes.data || []) as GalerieItem[])

      // Initialiser les horaires si vides
      if (horairesRes.data && horairesRes.data.length > 0) {
        setHoraires(horairesRes.data as Horaire[])
      } else {
        setHoraires(
          JOURS_SEMAINE.map((jour, i) => ({
            site_id: client.id,
            jour,
            ouverture: '08:00',
            fermeture: '18:00',
            ferme: i >= 5, // samedi/dimanche ferme par defaut
            ordre: i,
          }))
        )
      }
    } catch {
      setMessage({ type: 'error', text: 'Erreur lors du chargement des donnees.' })
    }
    setLoading(false)
  }, [client.id])

  useEffect(() => {
    loadData()
  }, [loadData])

  // Sauvegarder tout
  const handleSave = async () => {
    setSaving(true)
    setMessage(null)

    try {
      // 1. Sauvegarder le site
      const sitePayload = { ...site, client_id: client.id }
      delete (sitePayload as Record<string, unknown>)['id']

      if (site.id) {
        await supabase.from('sites').update(sitePayload).eq('id', site.id)
      } else {
        const { data } = await supabase
          .from('sites')
          .upsert({ ...sitePayload, client_id: client.id })
          .select()
          .single()
        if (data) setSite(data as SiteData)
      }

      // 2. Sauvegarder les services
      // Supprimer les anciens et reinserter
      await supabase.from('services').delete().eq('site_id', client.id)
      if (services.length > 0) {
        const svcPayload = services.map((s, i) => ({
          site_id: client.id,
          nom: s.nom,
          description: s.description,
          prix: s.prix,
          ordre: i,
        }))
        await supabase.from('services').insert(svcPayload)
      }

      // 3. Sauvegarder les horaires
      await supabase.from('horaires').delete().eq('site_id', client.id)
      if (horaires.length > 0) {
        const horPayload = horaires.map((h, i) => ({
          site_id: client.id,
          jour: h.jour,
          ouverture: h.ouverture,
          fermeture: h.fermeture,
          ferme: h.ferme,
          ordre: i,
        }))
        await supabase.from('horaires').insert(horPayload)
      }

      // 4. Sauvegarder les temoignages
      await supabase.from('temoignages').delete().eq('site_id', client.id)
      if (temoignages.length > 0) {
        const temPayload = temoignages.map((t) => ({
          site_id: client.id,
          nom: t.nom,
          texte: t.texte,
          note: t.note,
        }))
        await supabase.from('temoignages').insert(temPayload)
      }

      setMessage({ type: 'success', text: 'Modifications enregistrees avec succes !' })
      // Recharger pour avoir les IDs a jour
      await loadData()
    } catch {
      setMessage({
        type: 'error',
        text: 'Erreur lors de la sauvegarde. Veuillez reessayer.',
      })
    }
    setSaving(false)
  }

  // Upload image galerie
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const ext = file.name.split('.').pop()
    const fileName = `${client.id}/${Date.now()}.${ext}`

    const { error } = await supabase.storage
      .from('galerie')
      .upload(fileName, file)

    if (error) {
      setMessage({ type: 'error', text: "Erreur lors de l'upload de l'image." })
      return
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from('galerie').getPublicUrl(fileName)

    // Inserer directement en base
    await supabase.from('galerie').insert({
      site_id: client.id,
      image_url: publicUrl,
      legende: '',
      ordre: galerie.length,
    })

    await loadData()
    setMessage({ type: 'success', text: 'Image ajoutee !' })
  }

  const handleDeleteImage = async (item: GalerieItem) => {
    if (item.id) {
      await supabase.from('galerie').delete().eq('id', item.id)
    }
    // Extraire le chemin du fichier dans le storage
    const path = item.image_url.split('/galerie/').pop()
    if (path) {
      await supabase.storage.from('galerie').remove([decodeURIComponent(path)])
    }
    await loadData()
    setMessage({ type: 'success', text: 'Image supprimee.' })
  }

  // Helpers services
  const updateService = (index: number, field: keyof Service, value: string) => {
    setServices((prev) =>
      prev.map((s, i) => (i === index ? { ...s, [field]: value } : s))
    )
  }
  const addService = () => {
    setServices((prev) => [
      ...prev,
      { nom: '', description: '', prix: '', ordre: prev.length, _isNew: true },
    ])
  }
  const removeService = (index: number) => {
    setServices((prev) => prev.filter((_, i) => i !== index))
  }

  // Helpers temoignages
  const updateTemoignage = (
    index: number,
    field: keyof Temoignage,
    value: string | number
  ) => {
    setTemoignages((prev) =>
      prev.map((t, i) => (i === index ? { ...t, [field]: value } : t))
    )
  }
  const addTemoignage = () => {
    setTemoignages((prev) => [
      ...prev,
      { nom: '', texte: '', note: 5, _isNew: true },
    ])
  }
  const removeTemoignage = (index: number) => {
    setTemoignages((prev) => prev.filter((_, i) => i !== index))
  }

  // Helpers horaires
  const updateHoraire = (
    index: number,
    field: keyof Horaire,
    value: string | boolean
  ) => {
    setHoraires((prev) =>
      prev.map((h, i) => (i === index ? { ...h, [field]: value } : h))
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-gray-500">Chargement...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header admin */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-gray-800">
              {site.titre || 'Mon site'}
            </h1>
            <p className="text-sm text-gray-500">
              Connecte : {client.email}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href={`/sites/${slug}`}
              target="_blank"
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              Voir mon site
            </Link>
            <button
              onClick={onLogout}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Deconnexion
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Message */}
        {message && (
          <div
            className={`p-4 rounded-lg text-sm font-medium ${
              message.type === 'success'
                ? 'bg-green-50 text-green-700 border border-green-200'
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Infos generales */}
        <Section title="Informations generales">
          <div className="grid md:grid-cols-2 gap-4">
            <Field
              label="Nom de l'entreprise"
              value={site.titre}
              onChange={(v) => setSite({ ...site, titre: v })}
              placeholder="Ex: Boulangerie du Village"
            />
            <Field
              label="Metier"
              value={site.metier}
              onChange={(v) => setSite({ ...site, metier: v })}
              placeholder="Ex: Boulangerie-Patisserie"
            />
          </div>
          <Field
            label="Description"
            value={site.description}
            onChange={(v) => setSite({ ...site, description: v })}
            textarea
            placeholder="Decrivez votre activite..."
          />
          <div className="grid md:grid-cols-2 gap-4">
            <Field
              label="Telephone"
              value={site.telephone}
              onChange={(v) => setSite({ ...site, telephone: v })}
              type="tel"
              placeholder="+41 XX XXX XX XX"
            />
            <Field
              label="Email de contact"
              value={site.email_contact}
              onChange={(v) => setSite({ ...site, email_contact: v })}
              type="email"
              placeholder="contact@exemple.ch"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Field
              label="Adresse"
              value={site.adresse}
              onChange={(v) => setSite({ ...site, adresse: v })}
              placeholder="Rue et numero"
            />
            <Field
              label="Ville"
              value={site.ville}
              onChange={(v) => setSite({ ...site, ville: v })}
              placeholder="Ex: Lausanne"
            />
          </div>
        </Section>

        {/* Hero & Apparence */}
        <Section title="Hero & Apparence">
          <div className="grid md:grid-cols-2 gap-4">
            <Field
              label="Titre hero"
              value={site.hero_titre}
              onChange={(v) => setSite({ ...site, hero_titre: v })}
              placeholder="Titre principal de votre site"
            />
            <Field
              label="Sous-titre hero"
              value={site.hero_sous_titre}
              onChange={(v) => setSite({ ...site, hero_sous_titre: v })}
              placeholder="Sous-titre accrocheur"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Couleur primaire
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={site.couleur_primaire}
                  onChange={(e) =>
                    setSite({ ...site, couleur_primaire: e.target.value })
                  }
                  className="w-10 h-10 rounded cursor-pointer border border-gray-300"
                />
                <input
                  type="text"
                  value={site.couleur_primaire}
                  onChange={(e) =>
                    setSite({ ...site, couleur_primaire: e.target.value })
                  }
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Couleur secondaire
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={site.couleur_secondaire}
                  onChange={(e) =>
                    setSite({ ...site, couleur_secondaire: e.target.value })
                  }
                  className="w-10 h-10 rounded cursor-pointer border border-gray-300"
                />
                <input
                  type="text"
                  value={site.couleur_secondaire}
                  onChange={(e) =>
                    setSite({ ...site, couleur_secondaire: e.target.value })
                  }
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Field
              label="URL du logo"
              value={site.logo_url}
              onChange={(v) => setSite({ ...site, logo_url: v })}
              placeholder="https://..."
            />
            <Field
              label="URL image hero"
              value={site.hero_image_url}
              onChange={(v) => setSite({ ...site, hero_image_url: v })}
              placeholder="https://..."
            />
          </div>
        </Section>

        {/* Reseaux sociaux */}
        <Section title="Reseaux sociaux" defaultOpen={false}>
          <Field
            label="Facebook"
            value={site.facebook}
            onChange={(v) => setSite({ ...site, facebook: v })}
            placeholder="https://facebook.com/..."
          />
          <Field
            label="Instagram"
            value={site.instagram}
            onChange={(v) => setSite({ ...site, instagram: v })}
            placeholder="https://instagram.com/..."
          />
          <Field
            label="LinkedIn"
            value={site.linkedin}
            onChange={(v) => setSite({ ...site, linkedin: v })}
            placeholder="https://linkedin.com/in/..."
          />
        </Section>

        {/* Services */}
        <Section title="Services">
          {services.map((service, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg p-4 space-y-3 relative"
            >
              <button
                onClick={() => removeService(i)}
                className="absolute top-2 right-2 text-red-400 hover:text-red-600 text-sm"
                title="Supprimer"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="grid md:grid-cols-2 gap-3">
                <Field
                  label="Nom du service"
                  value={service.nom}
                  onChange={(v) => updateService(i, 'nom', v)}
                  placeholder="Ex: Coupe homme"
                />
                <Field
                  label="Prix"
                  value={service.prix}
                  onChange={(v) => updateService(i, 'prix', v)}
                  placeholder="Ex: 35 CHF"
                />
              </div>
              <Field
                label="Description"
                value={service.description}
                onChange={(v) => updateService(i, 'description', v)}
                textarea
                placeholder="Description du service..."
              />
            </div>
          ))}
          <button
            onClick={addService}
            className="w-full py-2.5 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-400 hover:text-blue-600 transition-colors text-sm font-medium"
          >
            + Ajouter un service
          </button>
        </Section>

        {/* Horaires */}
        <Section title="Horaires d'ouverture">
          <div className="space-y-2">
            {horaires.map((h, i) => (
              <div
                key={i}
                className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-0"
              >
                <span className="w-24 text-sm font-medium text-gray-700">
                  {h.jour}
                </span>
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={h.ferme}
                    onChange={(e) => updateHoraire(i, 'ferme', e.target.checked)}
                    className="rounded border-gray-300"
                  />
                  Ferme
                </label>
                {!h.ferme && (
                  <>
                    <input
                      type="time"
                      value={h.ouverture}
                      onChange={(e) =>
                        updateHoraire(i, 'ouverture', e.target.value)
                      }
                      className="px-2 py-1 border border-gray-300 rounded text-sm"
                    />
                    <span className="text-gray-400">-</span>
                    <input
                      type="time"
                      value={h.fermeture}
                      onChange={(e) =>
                        updateHoraire(i, 'fermeture', e.target.value)
                      }
                      className="px-2 py-1 border border-gray-300 rounded text-sm"
                    />
                  </>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* Temoignages */}
        <Section title="Temoignages clients" defaultOpen={false}>
          {temoignages.map((t, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg p-4 space-y-3 relative"
            >
              <button
                onClick={() => removeTemoignage(i)}
                className="absolute top-2 right-2 text-red-400 hover:text-red-600"
                title="Supprimer"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="grid md:grid-cols-2 gap-3">
                <Field
                  label="Nom du client"
                  value={t.nom}
                  onChange={(v) => updateTemoignage(i, 'nom', v)}
                  placeholder="Jean D."
                />
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Note
                  </label>
                  <select
                    value={t.note}
                    onChange={(e) =>
                      updateTemoignage(i, 'note', parseInt(e.target.value))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  >
                    {[5, 4, 3, 2, 1].map((n) => (
                      <option key={n} value={n}>
                        {n} etoile{n > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <Field
                label="Temoignage"
                value={t.texte}
                onChange={(v) => updateTemoignage(i, 'texte', v)}
                textarea
                placeholder="Le temoignage du client..."
              />
            </div>
          ))}
          <button
            onClick={addTemoignage}
            className="w-full py-2.5 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-400 hover:text-blue-600 transition-colors text-sm font-medium"
          >
            + Ajouter un temoignage
          </button>
        </Section>

        {/* Galerie */}
        <Section title="Galerie photos" defaultOpen={false}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galerie.map((item) => (
              <div key={item.id} className="relative group">
                <img
                  src={item.image_url}
                  alt={item.legende || 'Photo'}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <button
                  onClick={() => handleDeleteImage(item)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  title="Supprimer"
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ajouter une image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
        </Section>

        {/* Bouton sauvegarder */}
        <div className="sticky bottom-4">
          <button
            onClick={handleSave}
            disabled={saving}
            className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50 shadow-lg"
          >
            {saving ? 'Enregistrement...' : 'Enregistrer les modifications'}
          </button>
        </div>
      </main>
    </div>
  )
}

// ============================================================
// Page principale
// ============================================================

export default function AdminPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const [client, setClient] = useState<ClientInfo | null>(null)
  const [checked, setChecked] = useState(false)

  // Verifier la session au chargement
  useEffect(() => {
    const stored = sessionStorage.getItem(`ovt_session_${slug}`)
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        if (parsed.client && parsed.token) {
          setClient(parsed.client)
        }
      } catch {
        // Session invalide
      }
    }
    setChecked(true)
  }, [slug])

  const handleLogin = (clientInfo: ClientInfo, token: string) => {
    setClient(clientInfo)
    sessionStorage.setItem(
      `ovt_session_${slug}`,
      JSON.stringify({ client: clientInfo, token })
    )
  }

  const handleLogout = () => {
    setClient(null)
    sessionStorage.removeItem(`ovt_session_${slug}`)
  }

  if (!checked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-gray-500">Chargement...</div>
      </div>
    )
  }

  if (!client) {
    return <LoginForm slug={slug} onLogin={handleLogin} />
  }

  return <Dashboard client={client} slug={slug} onLogout={handleLogout} />
}
