-- Create admins table
CREATE TABLE admins (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  branch TEXT NOT NULL CHECK (branch IN ('Saket, Delhi')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample admins
INSERT INTO admins (email, branch) VALUES
  ('delhi@gmail.com', 'Saket, Delhi');

-- Note: Create these users in Supabase Auth with password: AdminSecure2024!

-- Ensure enquiries table has branch column (if not already)
-- Assuming it's already created, but to be safe:
ALTER TABLE enquiries ADD COLUMN IF NOT EXISTS branch TEXT;

-- Enable RLS if needed
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;

-- Create policies (optional, since Edge Function handles auth)
-- For enquiries, allow authenticated users to read their branch's enquiries
CREATE POLICY "Admins can view their branch enquiries" ON enquiries
  FOR SELECT USING (
    auth.jwt() ->> 'email' IN (
      SELECT email FROM admins WHERE branch = enquiries.branch
    )
  );

-- For admins table, only allow reading own record
CREATE POLICY "Users can view own admin record" ON admins
  FOR SELECT USING (auth.jwt() ->> 'email' = email);