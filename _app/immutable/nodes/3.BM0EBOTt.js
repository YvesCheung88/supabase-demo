import{a as h,t as y}from"../chunks/disclose-version.WHWcUVl3.js";import{i as P}from"../chunks/legacy.C6g9Bk9i.js";import{p as D,a as I,g as t,s as c,b as l,c as u,r as f,t as M,n as v,m as d}from"../chunks/runtime.CZFbW9sQ.js";import{e as W,s as j}from"../chunks/render.DZIWF9te.js";import{i as z}from"../chunks/preload-helper.CY_simQB.js";import{b as g,s as b,r as _,p as A}from"../chunks/supabase.EreMNcDn.js";import{g as w}from"../chunks/entry.BnpExyQl.js";var B=y('<p style="color: red;"> </p>'),C=y(`<main><h1>Se connecter</h1> <form><input type="email" placeholder="Email" required> <input type="password" placeholder="Mot de passe" required> <!> <button type="submit">Se connecter</button></form> <p>Pas encore de compte ? <a href="/auth/signup">S'inscrire</a></p></main>`);function Q(S,x){D(x,!1);let s=d(""),r=d(""),o=d("");(async()=>{const{data:{session:e}}=await b.auth.getSession();e&&w("/")})();const k=async()=>{const{data:e,error:a}=await b.auth.signInWithPassword({email:t(s),password:t(r)});a?c(o,a.message):w("/")};P();var i=C(),n=l(u(i),2),p=u(n);_(p);var m=l(p,2);_(m);var q=l(m,2);z(q,()=>t(o),e=>{var a=B(),E=u(a,!0);f(a),M(()=>j(E,t(o))),h(e,a)}),v(2),f(n),v(2),f(i),g(p,()=>t(s),e=>c(s,e)),g(m,()=>t(r),e=>c(r,e)),W("submit",n,A(k)),h(S,i),I()}export{Q as component};