"""Baut das Kartenset „E-Commerce Geschäftsprozesse“ (deck.js) und die App-Dateien.
Aufruf: python3 build_ec.py <app.html> <zielordner_server> <ziel_artifact.html>
"""
import json, sys, os, importlib
FAMILY = [{"label": "Geschäftsprozesse", "href": "/", "current": True}, {"label": "Kundenkommunikation", "href": "/kk/"}]
sys.path.insert(0, os.path.dirname(__file__))
parts = ["k1_vertrieb_recht_projekt", "k2_sortiment_kalkulation", "k3_marketing", "k4_controlling", "k5_rechnen"]
cards = []
for p in parts:
    for (cid, cat, term, q, short, long, src) in importlib.import_module(p).CARDS:
        cards.append({"id": cid, "cat": cat, "risk": None, "q": q, "term": term, "short": short,
                      "long": long, "links": [], "related": [], "src": src})
ids = [c["id"] for c in cards]
assert len(ids) == len(set(ids)), "doppelte IDs"

meta = {
    "id": "ec-gp",
    "title": "Geschäftsprozesse",
    "subtitle": f"E-Commerce Prüfung · {len(cards)} Karten",
    "intro": "Lernkarten zu Teil 2 der Abschlussprüfung Kaufmann/Kauffrau im E-Commerce: das Fachwissen, das in den Prüfungen 2020 bis 2025 immer wieder abgefragt wurde, dazu Rechenaufgaben mit Lösungsweg. Prüfungsbezug „S24 2.1“ heißt: Sommer 2024, Aufgabe 2.1 (W = Winter).",
    "source": "",
    "sourceLabel": "Ausgewertet: IHK-Abschlussprüfungen 2020–2025, eigene Formulierungen",
    "srcLabel": "Prüfungsbezug",
    "publisher": "Learning Factory",
    "family": FAMILY,
    "categories": {
        "vertrieb": "Vertriebskanäle", "recht": "Recht & Datenschutz", "projekt": "Projektmanagement",
        "sortiment": "Sortiment", "kalkulation": "Kalkulation & Preise", "marketing": "Online-Marketing",
        "controlling": "Steuerung & Kontrolle", "rechnen": "Rechenaufgaben",
    },
    "risks": {},
}
deck = {"meta": meta, "cards": cards}
deck_js = ("/* pocketlearn Lernkarten · Kartenset: E-Commerce Prüfung (Geschäftsprozesse) · %d Karten\n"
           "   Schema: meta{…} · cards[{id,cat,q,term,short,long,src}] */\nwindow.DECK=%s;\n") % (len(cards), json.dumps(deck, ensure_ascii=False, indent=1))

tpl = open(sys.argv[1], encoding="utf8").read()
tpl = tpl.replace("<title>EU AI Act Lernkarten</title>", "<title>E-Commerce Prüfungskarten</title>")
tpl = tpl.replace('content="Lernkarten zum EU AI Act – Frage, Kurzantwort, Erklärung. pocketlearn · Learning Factory."',
                  'content="Lernkarten zur Abschlussprüfung Kaufmann/Kauffrau im E-Commerce – Geschäftsprozesse. pocketlearn · Learning Factory."')
tpl = tpl.replace('<b id="deckTitle">EU AI Act</b>', '<b id="deckTitle">Geschäftsprozesse</b>')

# Server-Fassung
out = sys.argv[2]; os.makedirs(out, exist_ok=True)
head = ('<!doctype html>\n<html lang="de">\n<head>\n<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n')
head_extra = ('<link rel="manifest" href="manifest.webmanifest">\n'
              '<meta name="theme-color" content="#f8f5ee" media="(prefers-color-scheme: light)">\n'
              '<meta name="theme-color" content="#0a1628" media="(prefers-color-scheme: dark)">\n'
              '<meta name="apple-mobile-web-app-capable" content="yes">\n'
              '<meta name="apple-mobile-web-app-title" content="EC-Prüfung">\n'
              '<link rel="apple-touch-icon" href="icon-192.png">\n'
              '<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}[hidden]{display:none!important}</style>\n')
foot = '<script>if("serviceWorker" in navigator){navigator.serviceWorker.register("sw.js").catch(function(){});}</script>\n</body>\n</html>\n'
srv = head + tpl.replace("<!--HEADEXTRA-->", head_extra).replace('<header class="top">', '</head>\n<body>\n<header class="top">', 1) \
    .replace("<!--DECK-->", '<script src="deck.js?v=6"></script>').replace("<!--FOOTEXTRA-->", foot)
open(os.path.join(out, "index.html"), "w", encoding="utf8").write(srv)
open(os.path.join(out, "deck.js"), "w", encoding="utf8").write(deck_js)
json.dump({"name": "E-Commerce Prüfungskarten", "short_name": "EC-Prüfung",
           "description": "Lernkarten zur Abschlussprüfung Kaufmann/Kauffrau im E-Commerce – Geschäftsprozesse.",
           "start_url": "./index.html", "scope": "./", "display": "standalone", "background_color": "#f8f5ee",
           "theme_color": "#0a1628", "lang": "de", "categories": ["education"],
           "icons": [{"src": "icon-192.png", "sizes": "192x192", "type": "image/png"},
                     {"src": "icon-512.png", "sizes": "512x512", "type": "image/png"}]},
          open(os.path.join(out, "manifest.webmanifest"), "w", encoding="utf8"), ensure_ascii=False, indent=2)
open(os.path.join(out, "sw.js"), "w", encoding="utf8").write(
    'const C="ec-gp-v6";const F=["./","./index.html","./deck.js?v=6","./manifest.webmanifest","./icon-192.png","./icon-512.png"];\n'
    'self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)).then(()=>self.skipWaiting()))});\n'
    'self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C&&(x.indexOf(\"ec-gp\")===0||x===\"lernkarten-v1\")).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});\n'
    'self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request)))});\n')

# Artifact-Fassung (eine Datei)
art = tpl.replace("<!--HEADEXTRA-->", "").replace("<!--FOOTEXTRA-->", "") \
    .replace("<!--DECK-->", "<script>" + deck_js.replace("</script", "<\\/script") + "</script>")
open(sys.argv[3], "w", encoding="utf8").write(art)

from collections import Counter
print(len(cards), "Karten", dict(Counter(c["cat"] for c in cards)))
