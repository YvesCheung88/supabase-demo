// src/routes/auth/logout.ts
import { redirect } from "@sveltejs/kit";
import { supabase } from "$lib/supabase";

export const GET = async () => {
  await supabase.auth.signOut();

  throw redirect(303, "/auth/login");
};
