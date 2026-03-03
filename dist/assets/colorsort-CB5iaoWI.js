import{n as d,t as D,c as q,b as B,s as F,a as I}from"./index-Chvr_AIW.js";import{s as M}from"./victory-Ds4rta5I.js";const c=4,g=5,$=2,L=["#FF6B6B","#4ECDC4","#FFD93D","#A29BFE","#6C5CE7"];function _(l){const o=sessionStorage.getItem("player");if(!o){d("");return}const h=D(),b=q(`colorsort-${h}`),v=[];for(let e=0;e<g;e++)for(let s=0;s<c;s++)v.push(e);const m=B(v,b),t=[];for(let e=0;e<g;e++)t.push(m.slice(e*c,(e+1)*c));for(let e=0;e<$;e++)t.push([]);let n=-1,r=0,p=Date.now(),i=null;l.innerHTML=`
    <div class="cs-game fade-in">
      <button class="back-btn" id="csback">← Hub</button>
      <div class="game-header"><span class="icon">🧪</span><h2>Color Sort</h2></div>
      <div class="cs-stats">
        <div>Moves: <span id="cs-moves">0</span></div>
        <div>Time: <span id="cs-time">0s</span></div>
      </div>
      <div class="cs-tubes" id="cs-tubes"></div>
      <p class="cs-hint">Tap a tube to select, then tap another to pour</p>
    </div>
  `,l.querySelector("#csback").onclick=()=>d("hub");const f=l.querySelector("#cs-tubes"),y=l.querySelector("#cs-moves"),C=l.querySelector("#cs-time");i=setInterval(()=>{C.textContent=((Date.now()-p)/1e3|0)+"s"},500);function a(){f.innerHTML=t.map((e,s)=>`
      <div class="cs-tube${s===n?" selected":""}" data-i="${s}">
        ${e.map(u=>`<div class="cs-segment" style="background:${L[u]}"></div>`).join("")}
      </div>
    `).join(""),f.querySelectorAll(".cs-tube").forEach(e=>{e.onclick=()=>S(+e.dataset.i)})}function S(e){if(n===-1){if(t[e].length===0)return;n=e,a();return}if(n===e){n=-1,a();return}T(n,e)?(E(n,e),r++,y.textContent=r,n=-1,a(),w()&&k()):(n=e,a())}function T(e,s){return t[e].length===0||t[s].length>=c?!1:t[s].length===0?!0:t[s][t[s].length-1]===t[e][t[e].length-1]}function E(e,s){const u=t[e][t[e].length-1];for(;t[e].length>0&&t[e][t[e].length-1]===u&&t[s].length<c;)t[s].push(t[e].pop())}function w(){return t.every(e=>e.length===0||e.length===c&&e.every(s=>s===e[0]))}async function k(){clearInterval(i);const e=Date.now()-p;M(),await F(h,"colorsort",o,{player:o,moves:r,time_ms:e,completed:!0}),setTimeout(()=>d("results/colorsort"),1500)}a(),I(()=>clearInterval(i))}export{_ as render};
