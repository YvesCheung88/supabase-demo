import{a as h,t as x}from"../chunks/disclose-version.WHWcUVl3.js";import{i as L}from"../chunks/legacy.C6g9Bk9i.js";import{p as P,a as S,g as r,s as a,b as s,c as n,r as m,t as E,n as T,m as o}from"../chunks/runtime.CZFbW9sQ.js";import{e as j,s as I}from"../chunks/render.DZIWF9te.js";import{i as M}from"../chunks/preload-helper.CY_simQB.js";import{b as y,r as w,p as z,s as A}from"../chunks/supabase.EreMNcDn.js";import{g as B}from"../chunks/entry.BnpExyQl.js";var F=x('<p style="color: red;"> </p>'),G=x('<p style="color: green;"> </p>'),H=x(`<main><h1>Inscription</h1> <form><input type="email" placeholder="Email" required> <input type="password" placeholder="Mot de passe" required> <input type="password" placeholder="Confirmer le mot de passe" required> <!> <!> <button type="submit">S'inscrire</button></form></main>`);function W(U,k){P(k,!1);let l=o(""),i=o(""),u=o(""),p=o(""),d=o("");const C=async()=>{if(r(i)!==r(u)){a(p,"Les mots de passe ne correspondent pas.");return}const{error:e}=await A.auth.signUp({email:r(l),password:r(i)});e?a(p,e.message):(a(d,"Inscription réussie ! Un email de confirmation a été envoyé."),setTimeout(()=>{B("/auth/login")},2e3))};L();var c=H(),f=s(n(c),2),v=n(f);w(v);var _=s(v,2);w(_);var g=s(_,2);w(g);var q=s(g,2);M(q,()=>r(p),e=>{var t=F(),b=n(t,!0);m(t),E(()=>I(b,r(p))),h(e,t)});var D=s(q,2);M(D,()=>r(d),e=>{var t=G(),b=n(t,!0);m(t),E(()=>I(b,r(d))),h(e,t)}),T(2),m(f),m(c),y(v,()=>r(l),e=>a(l,e)),y(_,()=>r(i),e=>a(i,e)),y(g,()=>r(u),e=>a(u,e)),j("submit",f,z(C)),h(U,c),S()}export{W as component};
