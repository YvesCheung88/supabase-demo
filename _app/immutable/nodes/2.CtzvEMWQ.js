import{a as u,t as d}from"../chunks/disclose-version.WHWcUVl3.js";import{i as C}from"../chunks/legacy.C6g9Bk9i.js";import{p as F,a as G,s as c,b as s,f as x,g as t,t as E,m,c as p,r as l,n as H}from"../chunks/runtime.CZFbW9sQ.js";import{e as S,s as O}from"../chunks/render.DZIWF9te.js";import{i as P}from"../chunks/preload-helper.CY_simQB.js";import{s as y,b as j,r as q,p as J}from"../chunks/supabase.EreMNcDn.js";import{g as w}from"../chunks/entry.BnpExyQl.js";const K=!0,ae=Object.freeze(Object.defineProperty({__proto__:null,prerender:K},Symbol.toStringTag,{value:"Module"}));var L=d("<h1> </h1> <button>Se déconnecter</button>",1),N=d('<p style="color: red;"> </p>'),Q=d(`<h1>Se connecter</h1> <form><input type="email" placeholder="Email" required> <input type="password" placeholder="Mot de passe" required> <!> <button type="submit">Se connecter</button></form> <p>Pas encore de compte ? <a href="/auth/signup">S'inscrire</a></p>`,1),R=d("<main><!></main>");function se(M,T){F(T,!1);let f=m(null),v=m(""),g=m(""),_=m("");(async()=>{const{data:{session:a},error:e}=await y.auth.getSession();e&&console.error("Erreur lors de la récupération de la session",e.message),a&&c(f,a.user)})();const $=async()=>{const{data:a,error:e}=await y.auth.signInWithPassword({email:t(v),password:t(g)});e?c(_,e.message):w("/")},z=async()=>{await y.auth.signOut(),w("/auth/login")},B=()=>{w("/auth/signup")};C();var h=R(),D=p(h);P(D,()=>t(f),a=>{var e=L(),r=x(e),o=p(r);l(r);var n=s(r,2);E(()=>O(o,`Bienvenue, ${t(f).email??""}!`)),S("click",n,z),u(a,e)},a=>{var e=Q(),r=s(x(e),2),o=p(r);q(o);var n=s(o,2);q(n);var I=s(n,2);P(I,()=>t(_),i=>{var b=N(),A=p(b,!0);l(b),E(()=>O(A,t(_))),u(i,b)}),H(2),l(r);var k=s(r,2),W=s(p(k));l(k),j(o,()=>t(v),i=>c(v,i)),j(n,()=>t(g),i=>c(g,i)),S("submit",r,J($)),S("click",W,B),u(a,e)}),l(h),u(M,h),G()}export{se as component,ae as universal};