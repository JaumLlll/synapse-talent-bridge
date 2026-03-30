import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://inmqzsomeworqkxhyqsg.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_hPxVphqSwX8wcF9-p-Bc8w_PaHNxupu";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
