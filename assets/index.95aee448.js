import{a4 as ie,P,u as ue,a5 as q,Y as le,a6 as Y,a7 as fe,a8 as ce,a9 as pe,Q as j,l as D,aa as de}from"./app.d4d1573a.js";var T;const X=typeof window!="undefined",ve=e=>typeof e=="function",_e=e=>typeof e=="string",M=()=>{};X&&((T=window==null?void 0:window.navigator)==null?void 0:T.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function N(e){return typeof e=="function"?e():ue(e)}function Oe(e,t){function r(...n){e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})}return r}const Z=e=>e();function ye(e=Z){const t=P(!0);function r(){t.value=!1}function n(){t.value=!0}return{isActive:t,pause:r,resume:n,eventFilter:(...o)=>{t.value&&e(...o)}}}function ge(e){return e}function A(e){return ce()?(pe(e),!0):!1}function me(e,t=!0){q()?fe(e):t?e():Y(e)}function ee(e,t=!0){q()?le(e):t?e():Y(e)}function it(e=!1,t={}){const{truthyValue:r=!0,falsyValue:n=!1}=t,a=ie(e),o=P(e);function i(u){if(arguments.length)return o.value=u,o.value;{const l=N(r);return o.value=o.value===l?N(n):l,o.value}}return a?i:[o,i]}var Q=Object.getOwnPropertySymbols,we=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable,be=(e,t)=>{var r={};for(var n in e)we.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&Q)for(var n of Q(e))t.indexOf(n)<0&&he.call(e,n)&&(r[n]=e[n]);return r};function Pe(e,t,r={}){const n=r,{eventFilter:a=Z}=n,o=be(n,["eventFilter"]);return j(e,Oe(a,t),o)}var Se=Object.defineProperty,$e=Object.defineProperties,je=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable,k=(e,t,r)=>t in e?Se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ie=(e,t)=>{for(var r in t||(t={}))te.call(t,r)&&k(e,r,t[r]);if(C)for(var r of C(t))re.call(t,r)&&k(e,r,t[r]);return e},Ee=(e,t)=>$e(e,je(t)),Ne=(e,t)=>{var r={};for(var n in e)te.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&C)for(var n of C(e))t.indexOf(n)<0&&re.call(e,n)&&(r[n]=e[n]);return r};function Ce(e,t,r={}){const n=r,{eventFilter:a}=n,o=Ne(n,["eventFilter"]),{eventFilter:i,pause:u,resume:l,isActive:f}=ye(a);return{stop:Pe(e,t,Ee(Ie({},o),{eventFilter:i})),pause:u,resume:l,isActive:f}}function ne(e){var t;const r=N(e);return(t=r==null?void 0:r.$el)!=null?t:r}const h=X?window:void 0;function Me(...e){let t,r,n,a;if(_e(e[0])?([r,n,a]=e,t=h):[t,r,n,a]=e,!t)return M;let o=M;const i=j(()=>ne(t),l=>{o(),l&&(l.addEventListener(r,n,a),o=()=>{l.removeEventListener(r,n,a),o=M})},{immediate:!0,flush:"post"}),u=()=>{i(),o()};return A(u),u}function ae(e,t=!1){const r=P(),n=()=>r.value=Boolean(e());return n(),ee(n,t),r}function De(e,t={}){const{window:r=h}=t,n=ae(()=>r&&"matchMedia"in r&&typeof r.matchMedia=="function");let a;const o=P(!1),i=()=>{!n.value||(a||(a=r.matchMedia(e)),o.value=a.matches)};return me(()=>{i(),a&&("addEventListener"in a?a.addEventListener("change",i):a.addListener(i),A(()=>{"removeEventListener"in a?a.removeEventListener("change",i):a.removeListener(i)}))}),o}const F=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},L="__vueuse_ssr_handlers__";F[L]=F[L]||{};const Fe=F[L];function oe(e,t){return Fe[e]||t}function Le(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}var Ae=Object.defineProperty,R=Object.getOwnPropertySymbols,Te=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable,V=(e,t,r)=>t in e?Ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,W=(e,t)=>{for(var r in t||(t={}))Te.call(t,r)&&V(e,r,t[r]);if(R)for(var r of R(t))Qe.call(t,r)&&V(e,r,t[r]);return e};const ke={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Re(e,t,r,n={}){var a;const{flush:o="pre",deep:i=!0,listenToStorageChanges:u=!0,writeDefaults:l=!0,mergeDefaults:f=!1,shallow:v,window:y=h,eventFilter:S,onError:g=s=>{console.error(s)}}=n,p=(v?de:P)(t);if(!r)try{r=oe("getDefaultStorage",()=>{var s;return(s=h)==null?void 0:s.localStorage})()}catch(s){g(s)}if(!r)return p;const _=N(t),$=Le(_),O=(a=n.serializer)!=null?a:ke[$],{pause:c,resume:m}=Ce(p,()=>w(p.value),{flush:o,deep:i,eventFilter:S});return y&&u&&Me(y,"storage",I),I(),p;function w(s){try{s==null?r.removeItem(e):r.setItem(e,O.write(s))}catch(d){g(d)}}function b(s){if(!(s&&s.key!==e)){c();try{const d=s?s.newValue:r.getItem(e);if(d==null)return l&&_!==null&&r.setItem(e,O.write(_)),_;if(!s&&f){const E=O.read(d);return ve(f)?f(E,_):$==="object"&&!Array.isArray(E)?W(W({},_),E):E}else return typeof d!="string"?d:O.read(d)}catch(d){g(d)}finally{m()}}}function I(s){s&&s.key!==e||(p.value=b(s))}}function se(e){return De("(prefers-color-scheme: dark)",e)}var Ve=Object.defineProperty,x=Object.getOwnPropertySymbols,We=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable,B=(e,t,r)=>t in e?Ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Be=(e,t)=>{for(var r in t||(t={}))We.call(t,r)&&B(e,r,t[r]);if(x)for(var r of x(t))xe.call(t,r)&&B(e,r,t[r]);return e};function Je(e={}){const{selector:t="html",attribute:r="class",initialValue:n="auto",window:a=h,storage:o,storageKey:i="vueuse-color-scheme",listenToStorageChanges:u=!0,storageRef:l,emitAuto:f}=e,v=Be({auto:"",light:"light",dark:"dark"},e.modes||{}),y=se({window:a}),S=D(()=>y.value?"dark":"light"),g=l||(i==null?P(n):Re(i,n,o,{window:a,listenToStorageChanges:u})),p=D({get(){return g.value==="auto"&&!f?S.value:g.value},set(c){g.value=c}}),_=oe("updateHTMLAttrs",(c,m,w)=>{const b=a==null?void 0:a.document.querySelector(c);if(!!b)if(m==="class"){const I=w.split(/\s/g);Object.values(v).flatMap(s=>(s||"").split(/\s/g)).filter(Boolean).forEach(s=>{I.includes(s)?b.classList.add(s):b.classList.remove(s)})}else b.setAttribute(m,w)});function $(c){var m;const w=c==="auto"?S.value:c;_(t,r,(m=v[w])!=null?m:w)}function O(c){e.onChanged?e.onChanged(c,$):$(c)}return j(p,O,{flush:"post",immediate:!0}),f&&j(S,()=>O(p.value),{flush:"post"}),ee(()=>O(p.value)),p}var He=Object.defineProperty,ze=Object.defineProperties,Ue=Object.getOwnPropertyDescriptors,J=Object.getOwnPropertySymbols,Ge=Object.prototype.hasOwnProperty,Ke=Object.prototype.propertyIsEnumerable,H=(e,t,r)=>t in e?He(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,qe=(e,t)=>{for(var r in t||(t={}))Ge.call(t,r)&&H(e,r,t[r]);if(J)for(var r of J(t))Ke.call(t,r)&&H(e,r,t[r]);return e},Ye=(e,t)=>ze(e,Ue(t));function ut(e={}){const{valueDark:t="dark",valueLight:r="",window:n=h}=e,a=Je(Ye(qe({},e),{onChanged:(u,l)=>{var f;e.onChanged?(f=e.onChanged)==null||f.call(e,u==="dark"):l(u)},modes:{dark:t,light:r}})),o=se({window:n});return D({get(){return a.value==="dark"},set(u){u===o.value?a.value="auto":a.value=u?"dark":"light"}})}var z=Object.getOwnPropertySymbols,Xe=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable,et=(e,t)=>{var r={};for(var n in e)Xe.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&z)for(var n of z(e))t.indexOf(n)<0&&Ze.call(e,n)&&(r[n]=e[n]);return r};function lt(e,t,r={}){const n=r,{window:a=h}=n,o=et(n,["window"]);let i;const u=ae(()=>a&&"MutationObserver"in a),l=()=>{i&&(i.disconnect(),i=void 0)},f=j(()=>ne(e),y=>{l(),u.value&&a&&y&&(i=new MutationObserver(t),i.observe(y,o))},{immediate:!0}),v=()=>{l(),f()};return A(v),{isSupported:u,stop:v}}var U;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(U||(U={}));var tt=Object.defineProperty,G=Object.getOwnPropertySymbols,rt=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable,K=(e,t,r)=>t in e?tt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,at=(e,t)=>{for(var r in t||(t={}))rt.call(t,r)&&K(e,r,t[r]);if(G)for(var r of G(t))nt.call(t,r)&&K(e,r,t[r]);return e};const ot={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};at({linear:ge},ot);export{it as a,lt as b,ut as u};
