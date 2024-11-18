<!-- src/routes/auth/signup.svelte -->
<script lang="ts">
    import { supabase } from '$lib/supabase';
    import { goto } from '$app/navigation';
  
    let email = '';
    let password = '';
    let confirmPassword = '';
    let error = '';
    let successMessage = '';
  
    const signup = async () => {
      if (password !== confirmPassword) {
        error = "Les mots de passe ne correspondent pas.";
        return;
      }
  
      const { error: signupError } = await supabase.auth.signUp({
        email,
        password,
      });
  
      if (signupError) {
        error = signupError.message;
      } else {
        successMessage = "Inscription réussie ! Un email de confirmation a été envoyé.";
        setTimeout(() => {
          goto('/auth/login');
        }, 2000);
      }
    };
  </script>
  
  <main>
    <h1>Inscription</h1>
    <form on:submit|preventDefault={signup}>
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
      <input
        type="password"
        bind:value={confirmPassword}
        placeholder="Confirmer le mot de passe"
        required
      />
      {#if error}
        <p style="color: red;">{error}</p>
      {/if}
      {#if successMessage}
        <p style="color: green;">{successMessage}</p>
      {/if}
      <button type="submit">S'inscrire</button>
    </form>
  </main>
  