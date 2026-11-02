"""Baut das Kartenset „E-Commerce Kundenkommunikation“ (deck.js) und die App-Dateien.
Aufruf: python3 build_ec.py <app.html> <zielordner_server> <ziel_artifact.html>
"""
import json, sys, os, importlib
FAMILY = [{"label": "Geschäftsprozesse", "href": "/"}, {"label": "Kundenkommunikation", "href": "/kk/", "current": True}]
sys.path.insert(0, os.path.dirname(__file__))
parts = ["k1_vertrag", "k2_zahlung_retouren", "k3_kommunikation", "k4_kanaele", "k5_bindung_rechnen", "k6_bindung_beschwerde_plus"]
cards = []
for p in parts:
    for (cid, cat, term, q, short, long, src) in importlib.import_module(p).CARDS:
        cards.append({"id": cid, "cat": cat, "risk": None, "q": q, "term": term, "short": short,
                      "long": long, "links": [], "related": [], "src": src})
ids = [c["id"] for c in cards]
assert len(ids) == len(set(ids)), "doppelte IDs"

meta = {
    "id": "ec-kk",
    "title": "Kundenkommunikation",
    "subtitle": f"E-Commerce Prüfung · {len(cards)} Karten",
    "intro": "Lernkarten zum Prüfungsbereich Kundenkommunikation im E-Commerce (Teil 2 der Abschlussprüfung Kaufmann/Kauffrau im E-Commerce): Vertragsstörungen, Mahnwesen, Retouren, Beschwerdemanagement, Kommunikationsmodelle und Servicekanäle – ausgewertet aus den Prüfungen 2020 bis 2025, mit Rechenaufgaben. Prüfungsbezug „S24 2.1“ heißt: Sommer 2024, Aufgabe 2.1 (W = Winter).",
    "source": "",
    "sourceLabel": "Ausgewertet: IHK-Abschlussprüfungen 2020–2025, eigene Formulierungen",
    "srcLabel": "Prüfungsbezug",
    "publisher": "Learning Factory",
    "family": FAMILY,
    "categories": {
        "vertrag": "Kaufvertrag & Störungen", "zahlung": "Zahlung & Mahnwesen", "retouren": "Retourenmanagement",
        "beschwerde": "Beschwerdemanagement", "modelle": "Kommunikation & Gespräch", "kanaele": "Kanäle & Service-Tools",
        "bindung": "Kundenbindung & Analyse", "rechnen": "Rechenaufgaben",
    },
    "risks": {},
}
deck = {"meta": meta, "cards": cards}
deck_js = ("/* pocketlearn Lernkarten · Kartenset: E-Commerce Prüfung (Kundenkommunikation) · %d Karten\n"
           "   Schema: meta{…} · cards[{id,cat,q,term,short,long,src}] */\nwindow.DECK=%s;\n") % (len(cards), json.dumps(deck, ensure_ascii=False, indent=1))

tpl = open(sys.argv[1], encoding="utf8").read()
tpl = tpl.replace("<title>EU AI Act Lernkarten</title>", "<title>Kundenkommunikation – E-Commerce Prüfungskarten</title>")
tpl = tpl.replace('content="Lernkarten zum EU AI Act – Frage, Kurzantwort, Erklärung. pocketlearn · Learning Factory."',
                  'content="Lernkarten zur Abschlussprüfung Kaufmann/Kauffrau im E-Commerce – Kundenkommunikation. pocketlearn · Learning Factory."')
tpl = tpl.replace('<b id="deckTitle">EU AI Act</b>', '<b id="deckTitle">Kundenkommunikation</b>')

# Server-Fassung
out = sys.argv[2]; os.makedirs(out, exist_ok=True)
head = ('<!doctype html>\n<html lang="de">\n<head>\n<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n')
head_extra = ('<link rel="manifest" href="manifest.webmanifest">\n'
              '<meta name="theme-color" content="#f8f5ee" media="(prefers-color-scheme: light)">\n'
              '<meta name="theme-color" content="#0a1628" media="(prefers-color-scheme: dark)">\n'
              '<meta name="apple-mobile-web-app-capable" content="yes">\n'
              '<meta name="apple-mobile-web-app-title" content="EC-Kommunikation">\n'
              '<link rel="apple-touch-icon" href="icon-192.png">\n'
              '<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}[hidden]{display:none!important}</style>\n')
foot = '<script>if("serviceWorker" in navigator){navigator.serviceWorker.register("sw.js").catch(function(){});}</script>\n</body>\n</html>\n'
srv = head + tpl.replace("<!--HEADEXTRA-->", head_extra).replace('<header class="top">', '</head>\n<body>\n<header class="top">', 1) \
    .replace("<!--DECK-->", '<script src="deck.js?v=4"></script>').replace("<!--FOOTEXTRA-->", foot)
open(os.path.join(out, "index.html"), "w", encoding="utf8").write(srv)
open(os.path.join(out, "deck.js"), "w", encoding="utf8").write(deck_js)
json.dump({"name": "Kundenkommunikation – E-Commerce Prüfungskarten", "short_name": "EC-Kommunikation",
           "description": "Lernkarten zur Abschlussprüfung Kaufmann/Kauffrau im E-Commerce – Kundenkommunikation.",
           "start_url": "./index.html", "scope": "./", "display": "standalone", "background_color": "#f8f5ee",
           "theme_color": "#0a1628", "lang": "de", "categories": ["education"],
           "icons": [{"src": "icon-192.png", "sizes": "192x192", "type": "image/png"},
                     {"src": "icon-512.png", "sizes": "512x512", "type": "image/png"}]},
          open(os.path.join(out, "manifest.webmanifest"), "w", encoding="utf8"), ensure_ascii=False, indent=2)
open(os.path.join(out, "sw.js"), "w", encoding="utf8").write(
    'const C="ec-kk-v4";const F=["./","./index.html","./deck.js?v=4","./manifest.webmanifest","./icon-192.png","./icon-512.png"];\n'
    'self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)).then(()=>self.skipWaiting()))});\n'
    'self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C&&(x.indexOf(\"ec-kk\")===0)).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});\n'
    'self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request)))});\n')

# Artifact-Fassung (eine Datei)
art = tpl.replace("<!--HEADEXTRA-->", "").replace("<!--FOOTEXTRA-->", "") \
    .replace("<!--DECK-->", "<script>" + deck_js.replace("</script", "<\\/script") + "</script>")
open(sys.argv[3], "w", encoding="utf8").write(art)

from collections import Counter
print(len(cards), "Karten", dict(Counter(c["cat"] for c in cards)))
