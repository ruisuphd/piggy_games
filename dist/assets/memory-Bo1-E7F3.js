import{n as f,t as k,c as S,b as w,s as I,a as M}from"./index-Chvr_AIW.js";import{s as T}from"./victory-Ds4rta5I.js";const u=["🌸","🌊","🔥","🌙","⭐","🍀","💎","🦋"];function E(t){const o=sessionStorage.getItem("player");if(!o){f("");return}const p=k(),x=S(`memory-${p}`),d=w([...u,...u],x);let a=[],r=new Set,l=0,n=!1,i=null,v=null;t.innerHTML=`
    <div class="memory-game fade-in" style="display:flex;flex-direction:column;flex:1">
      <button class="back-btn" id="memback">← Hub</button>
      <div class="game-header"><span class="icon">🧠</span><h2>Memory Match</h2></div>
      <div class="memory-stats">
        <div>Moves: <span id="mem-moves">0</span></div>
        <div>Time: <span id="mem-time">0s</span></div>
      </div>
      <div class="memory-grid" id="mem-grid">
        ${d.map((s,e)=>`
          <div class="memory-card" data-idx="${e}">
            <div class="memory-card-inner">
              <div class="memory-face memory-back"></div>
              <div class="memory-face memory-front">${s}</div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `,t.querySelector("#memback").onclick=()=>f("hub");const h=t.querySelector("#mem-grid"),g=t.querySelector("#mem-moves"),y=t.querySelector("#mem-time");v=setInterval(()=>{i&&(y.textContent=((Date.now()-i)/1e3).toFixed(1)+"s")},100),h.addEventListener("click",s=>{const e=s.target.closest(".memory-card");if(!e||n||e.classList.contains("flipped")||e.classList.contains("matched"))return;i||(i=Date.now());const L=+e.dataset.idx;if(e.classList.add("flipped"),a.push({idx:L,card:e}),a.length===2){l++,g.textContent=l;const[m,c]=a;d[m.idx]===d[c.idx]?(m.card.classList.add("matched"),c.card.classList.add("matched"),r.add(m.idx),r.add(c.idx),a=[],r.size===d.length&&b()):(n=!0,setTimeout(()=>{m.card.classList.remove("flipped"),c.card.classList.remove("flipped"),a=[],n=!1},700))}});async function b(){clearInterval(v);const s=Date.now()-i;y.textContent=(s/1e3).toFixed(1)+"s",T(),await I(p,"memory",o,{player:o,moves:l,time_ms:s,completed:!0}),setTimeout(()=>f("results/memory"),1500)}M(()=>clearInterval(v))}export{E as render};
