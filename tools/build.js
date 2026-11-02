const fs=require('fs');
const d=JSON.parse(fs.readFileSync('de_q.json'));
const DECK={meta:{id:"eu-ai-act",title:"EU AI Act",subtitle:"Lernkarten · 380 Begriffe",
 intro:"Frage lesen, frei antworten, dann Kurzantwort und Erklärung prüfen. Der Wiederholungsplan zeigt jede Karte wieder, kurz bevor du sie vergisst.",
 source:"https://glossar.pocketlearn.online/",sourceLabel:"EU AI Act Glossar",publisher:"Learning Factory",
 categories:{"ai-act-core":"EU AI Act","governance":"Governance","ethics":"Ethik","security":"Sicherheit","ml":"ML-Grundlagen","dl":"Deep Learning","llm":"LLM / GenAI","nlp":"NLP","cv":"Vision"},
 risks:{prohibited:"Verboten",high:"Hochrisiko",limited:"Begrenzt",minimal:"Minimal",systemic:"Systemisch"}},
 cards:d.map(c=>({id:c.id,cat:c.category,risk:c.risk,q:c.question,term:c.term,short:c.short,long:c.long,links:c.links,related:c.related}))};
const deckJs="/* pocketlearn Lernkarten · Kartenset: "+DECK.meta.title+" · "+DECK.cards.length+" Karten\n   Schema: meta{id,title,…,categories,risks} · cards[{id,cat,risk,q,term,short,long,links[],related[]}] */\nwindow.DECK="+JSON.stringify(DECK,null,1)+";\n";
const tpl=fs.readFileSync('app.html','utf8');
fs.mkdirSync('artifact',{recursive:true});fs.mkdirSync('server',{recursive:true});
fs.writeFileSync('artifact/eu-ai-act-lernkarten.html',tpl.replace('<!--DECK-->','<script>'+deckJs.replace(/<\/script/gi,'<\\/script')+'</script>').replace('<!--HEADEXTRA-->','').replace('<!--FOOTEXTRA-->',''));
const head='<!doctype html>\n<html lang="de">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n';
const headExtra='<link rel="manifest" href="manifest.webmanifest">\n<meta name="theme-color" content="#f8f5ee" media="(prefers-color-scheme: light)">\n<meta name="theme-color" content="#0a1628" media="(prefers-color-scheme: dark)">\n<meta name="apple-mobile-web-app-capable" content="yes">\n<meta name="apple-mobile-web-app-title" content="Lernkarten">\n<link rel="apple-touch-icon" href="icon-192.png">\n<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}[hidden]{display:none!important}</style>\n';
const footExtra='<script>if("serviceWorker" in navigator){navigator.serviceWorker.register("sw.js").catch(function(){});}</script>\n</body>\n</html>\n';
let srv=head+tpl.replace('<!--HEADEXTRA-->',headExtra).replace('<header class="top">','</head>\n<body>\n<header class="top">').replace('<!--DECK-->','<script src="deck.js?v=1"></script>').replace('<!--FOOTEXTRA-->',footExtra);
fs.writeFileSync('server/index.html',srv);
fs.writeFileSync('server/deck.js',deckJs);
fs.writeFileSync('server/manifest.webmanifest',JSON.stringify({name:"EU AI Act Lernkarten",short_name:"Lernkarten",description:"Lernkarten zum EU AI Act – Frage, Kurzantwort, Erklärung.",start_url:"./index.html",scope:"./",display:"standalone",background_color:"#f8f5ee",theme_color:"#0a1628",lang:"de",categories:["education"],icons:[{src:"icon-192.png",sizes:"192x192",type:"image/png"},{src:"icon-512.png",sizes:"512x512",type:"image/png"}]},null,2));
fs.writeFileSync('server/sw.js',`const C="lernkarten-v1";const F=["./","./index.html","./deck.js?v=1","./manifest.webmanifest","./icon-192.png","./icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request)))});
`);
console.log('ok', (fs.statSync('artifact/eu-ai-act-lernkarten.html').size/1024|0)+'KB');
