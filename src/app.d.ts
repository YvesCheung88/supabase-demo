// src/types/custom.d.ts
declare global {
  namespace App {
    interface Locals {
      user: import("@supabase/supabase-js").User | null; // Déclare que `user` peut être un objet User ou `null`
    }
  }
}

export {}; // Nécessaire pour marquer ce fichier comme un module
