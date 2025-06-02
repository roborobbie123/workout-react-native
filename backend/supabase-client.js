import { createClient } from "@supabase/supabase-js";

// need to hide this
export const supabase = createClient(
  "https://abwmvhavlluosrcarbgy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFid212aGF2bGx1b3NyY2FyYmd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4ODMxMTAsImV4cCI6MjA2NDQ1OTExMH0.g3BzankVPl4_vMVCoqiVmo4rcssrY3315ljN5aNpsJE"
);

