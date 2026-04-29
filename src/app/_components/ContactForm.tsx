"use client";

import { useState } from "react";

interface ContactFormProps {
  defaultPlan?: string;
  onClose?: () => void;
}

export function ContactForm({ defaultPlan, onClose }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [plan, setPlan] = useState(defaultPlan || "");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setStatus("idle");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, plan, message }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur lors de l'envoi");
      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erreur inconnue");
    } finally {
      setSubmitting(false);
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Message envoyé !</h3>
        <p className="text-gray-600 text-sm mb-6">
          Adrien vous répondra dans les 24h ouvrées.
        </p>
        {onClose && (
          <button
            onClick={onClose}
            className="text-primary font-semibold text-sm hover:underline"
          >
            Fermer
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nom <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="Jean Dupont"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Téléphone
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="+41 79 ..."
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder="vous@exemple.ch"
        />
      </div>
      <div>
        <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-1">
          Offre qui m&apos;intéresse
        </label>
        <select
          id="plan"
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        >
          <option value="">Je ne sais pas encore</option>
          <option value="Starter">Starter — 49 CHF/mois</option>
          <option value="Pro">Pro — 69 CHF/mois</option>
          <option value="Premium">Premium — 99 CHF/mois</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Votre message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder="Décrivez votre activité et vos besoins..."
        />
      </div>
      {status === "error" && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
          {errorMsg || "Une erreur est survenue. Réessayez ou contactez-nous via WhatsApp."}
        </div>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary-dark disabled:opacity-60 transition-all"
      >
        {submitting ? "Envoi en cours..." : "Envoyer ma demande"}
      </button>
      <p className="text-xs text-gray-500 text-center">
        Réponse sous 24h ouvrées. Vos infos restent confidentielles.
      </p>
    </form>
  );
}
