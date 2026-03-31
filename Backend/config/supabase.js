const { createClient } = require('@supabase/supabase-js');

/**
 * Initialize Supabase client for file storage
 * Supabase provides scalable cloud storage with CDN delivery
 */
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not configured. File uploads will not work.');
  console.warn('Please set SUPABASE_URL and SUPABASE_ANON_KEY in your .env file');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

module.exports = supabase;
