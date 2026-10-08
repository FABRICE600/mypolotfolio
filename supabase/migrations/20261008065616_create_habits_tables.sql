/*
# Create habits and habit_completions tables (single-tenant, no auth)

1. New Tables
- `habits`
  - `id` (uuid, primary key)
  - `name` (text, not null) — the habit name
  - `color` (text, not null, default 'blue') — UI accent color for the habit card
  - `target_days` (int, default 7) — number of days per week the habit is targeted
  - `sort_order` (int, default 0) — display ordering
  - `archived` (boolean, default false) — soft-delete/archive flag
  - `created_at` (timestamptz, default now())
- `habit_completions`
  - `id` (uuid, primary key)
  - `habit_id` (uuid, foreign key to habits.id, cascade delete)
  - `completed_date` (date, not null) — the calendar day the habit was completed
  - `created_at` (timestamptz, default now())
  - Unique constraint on (habit_id, completed_date) so each habit can only be marked complete once per day

2. Security
- Enable RLS on both tables.
- Allow anon + authenticated CRUD because the data is intentionally shared/public (single-tenant app, no sign-in).

3. Indexes
- Index on habit_completions.habit_id for faster lookups
- Index on habit_completions.completed_date for date-range queries
*/

CREATE TABLE IF NOT EXISTS habits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  color text NOT NULL DEFAULT 'blue',
  target_days int NOT NULL DEFAULT 7,
  sort_order int NOT NULL DEFAULT 0,
  archived boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS habit_completions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  habit_id uuid NOT NULL REFERENCES habits(id) ON DELETE CASCADE,
  completed_date date NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(habit_id, completed_date)
);

CREATE INDEX IF NOT EXISTS idx_habit_completions_habit_id ON habit_completions(habit_id);
CREATE INDEX IF NOT EXISTS idx_habit_completions_date ON habit_completions(completed_date);

ALTER TABLE habits ENABLE ROW LEVEL SECURITY;
ALTER TABLE habit_completions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_habits" ON habits;
CREATE POLICY "anon_select_habits" ON habits FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_habits" ON habits;
CREATE POLICY "anon_insert_habits" ON habits FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_habits" ON habits;
CREATE POLICY "anon_update_habits" ON habits FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_habits" ON habits;
CREATE POLICY "anon_delete_habits" ON habits FOR DELETE
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_select_completions" ON habit_completions;
CREATE POLICY "anon_select_completions" ON habit_completions FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_completions" ON habit_completions;
CREATE POLICY "anon_insert_completions" ON habit_completions FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_completions" ON habit_completions;
CREATE POLICY "anon_delete_completions" ON habit_completions FOR DELETE
TO anon, authenticated USING (true);
