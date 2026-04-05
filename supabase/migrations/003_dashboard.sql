-- Migration 003: Dashboard super-admin (factures + champs abonnement clients)

-- Types d'abonnement
CREATE TYPE type_abonnement AS ENUM ('starter', 'pro', 'premium');
CREATE TYPE statut_facture AS ENUM ('brouillon', 'envoyee', 'payee', 'annulee');

-- Ajout des champs abonnement/contact sur la table clients
ALTER TABLE clients ADD COLUMN IF NOT EXISTS abonnement type_abonnement DEFAULT 'starter';
ALTER TABLE clients ADD COLUMN IF NOT EXISTS date_debut DATE;
ALTER TABLE clients ADD COLUMN IF NOT EXISTS telephone TEXT;
ALTER TABLE clients ADD COLUMN IF NOT EXISTS adresse TEXT;
ALTER TABLE clients ADD COLUMN IF NOT EXISTS ville TEXT;
ALTER TABLE clients ADD COLUMN IF NOT EXISTS notes TEXT;

-- Table des factures
CREATE TABLE factures (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  numero TEXT NOT NULL UNIQUE,
  type TEXT NOT NULL, -- 'mise_en_place' ou 'abonnement'
  description TEXT NOT NULL,
  montant DECIMAL(10,2) NOT NULL,
  tva DECIMAL(10,2) DEFAULT 0,
  montant_total DECIMAL(10,2) NOT NULL,
  statut statut_facture DEFAULT 'brouillon',
  date_emission DATE DEFAULT CURRENT_DATE,
  date_echeance DATE,
  periode_debut DATE, -- pour les factures d'abonnement
  periode_fin DATE,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX factures_client ON factures(client_id, created_at DESC);
CREATE INDEX factures_statut ON factures(statut);
