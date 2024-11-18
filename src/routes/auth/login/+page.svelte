<script lang="ts">
  import { supabase } from '$lib/supabase';
  import { goto } from '$app/navigation';
  
  let email = '';
  let password = '';
  let error = '';
  
  const checkSession = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      goto('/');
    }
  };

  checkSession();

  const login = async () => {
    const { data, error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (loginError) {
      error = loginError.message;
    } else {
      goto('/');
    }
  };
</script>

<main>
  <h1>Se connecter</h1>
  
  <form on:submit|preventDefault={login}>
    <input
      type="email"
      bind:value={email}
      placeholder="Email"
      required
    />
    <input
      type="password"
      bind:value={password}
      placeholder="Mot de passe"
      required
    />
    {#if error}
      <p style="color: red;">{error}</p>
    {/if}
    <button type="submit">Se connecter</button>
  </form>

  <p>Pas encore de compte ? <a href="/auth/signup">S'inscrire</a></p>
</main>
