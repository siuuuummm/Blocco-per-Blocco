/* Blocco per Blocco: lavoratore di servizio per usare l'app anche senza internet.
   La pagina arriva prima dalla rete (così si vede sempre l'ultima versione) e dalla copia salvata solo se sei offline;
   librerie, caratteri e icone arrivano dalla copia salvata, aggiornata in sottofondo. Non salva altro. */
const V='bpb-0.3';
const SHELL=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
const LIBS=['https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js','https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js',
  'https://cdn.jsdelivr.net/npm/peerjs@1.5.4/dist/peerjs.min.js','https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'];
const CDN=/^(cdnjs\.cloudflare\.com|cdn\.jsdelivr\.net|fonts\.googleapis\.com|fonts\.gstatic\.com)$/;
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL).then(()=>Promise.allSettled(LIBS.map(u=>c.add(u)))))
  .then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('bpb-')&&k!==V).map(k=>caches.delete(k))))
  .then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  const u=new URL(r.url);
  if(r.mode==='navigate'&&u.origin===location.origin){
    e.respondWith(fetch(r).then(res=>{if(res.ok){const c=res.clone();caches.open(V).then(ca=>ca.put('./index.html',c));}return res;})
      .catch(()=>caches.match('./index.html',{ignoreSearch:true})));return;}
  if(u.origin!==location.origin&&!CDN.test(u.hostname))return; // per esempio il servizio del telecomando: sempre dalla rete
  e.respondWith(caches.open(V).then(async ca=>{const hit=await ca.match(r,{ignoreVary:true});
    const net=fetch(r).then(res=>{if(res&&(res.ok||res.type==='opaque'))ca.put(r,res.clone());return res;}).catch(()=>hit);
    return hit||net;}));
});
