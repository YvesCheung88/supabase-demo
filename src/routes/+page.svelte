<script lang="ts">
  import { supabase } from '$lib/supabase';
  import { goto } from '$app/navigation';
  import type { User } from '@supabase/supabase-js';

  let user: User | null = null;
  let email = '';
  let password = '';
  let error = '';

  const checkSession = async () => {
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    if (sessionError) {
      console.error('Erreur lors de la récupération de la session', sessionError.message);
    }
    if (session) {
      user = session.user;
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
  const logout = async () => {
    await supabase.auth.signOut();
    goto('/auth/login');
  };

  const redirectToSignup = () => {
    goto('/auth/signup');
  };
</script>

<main>
  {#if user}
    <h1>Bienvenue, {user.email}!</h1>
    <button on:click={logout}>Se déconnecter</button>
  {:else}
    <h1>Se connecter</h1>
    <form on:submit|preventDefault={login}>
      <input type="email" bind:value={email} placeholder="Email" required />
      <input type="password" bind:value={password} placeholder="Mot de passe" required />
      {#if error}
        <p style="color: red;">{error}</p>
      {/if}
      <button type="submit">Se connecter</button>
    </form>
    <p>Pas encore de compte ? <a href="/auth/signup" on:click={redirectToSignup}>S'inscrire</a></p>
  {/if}
</main>
