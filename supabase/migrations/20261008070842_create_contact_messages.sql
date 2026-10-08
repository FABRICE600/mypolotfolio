/*
# Create contact_messages table (single-tenant, no auth)

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's name
  - `email` (text, not null) — sender's email
  - `subject` (text, optional) — message subject
  - `message` (text, not null) — the message body
  - `read` (boolean, default false) — whether the message has been read
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on contact_messages.
- Allow anon + authenticated INSERT (anyone can submit the contact form).
- No SELECT/UPDATE/DELETE for anon (only authenticated/admin can read messages).
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  read boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_messages;
CREATE POLICY "anon_insert_contact" ON contact_messages FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_contact" ON contact_messages;
CREATE POLICY "auth_select_contact" ON contact_messages FOR SELECT
TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_contact" ON contact_messages;
CREATE POLICY "auth_update_contact" ON contact_messages FOR UPDATE
TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_contact" ON contact_messages;
CREATE POLICY "auth_delete_contact" ON contact_messages FOR DELETE
TO authenticated USING (true);
