-- Add google_review_url to sites table
ALTER TABLE sites ADD COLUMN IF NOT EXISTS google_review_url TEXT;

-- Track review request clicks
CREATE TABLE review_clicks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  site_id UUID REFERENCES sites(id) ON DELETE CASCADE,
  source TEXT DEFAULT 'qr', -- 'qr', 'link', 'email'
  clicked_at TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX review_clicks_site ON review_clicks(site_id, clicked_at DESC);
