# pocketlearn Lernkarten

Offline-fähige Lernkarten-App (PWA) von Learning Factory. Jede Karte hat **Frage**, **Kurzantwort** und **Erklärung**.
Erstes Kartenset: **EU AI Act** mit 380 Begriffen aus dem [EU AI Act Glossar](https://glossar.pocketlearn.online/).

Live: https://karten.pocketlearn.online/

## Funktionen

- Vorderseite umschaltbar: Frage oder nur Begriff
- Bewertung Nochmal / Schwer / Gut / Leicht mit Wiederholungsplan (vereinfachtes SM-2)
- Filter nach Themenbereich, Anzahl neuer Karten pro Runde, freies Üben
- Suche über alle Karten
- Lernstand im Browser (localStorage), per Kopieren/Einfügen auf andere Geräte übertragbar
- Offline nutzbar über Service Worker

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | Die App (Oberfläche und Logik) |
| `deck.js` | Das Kartenset – für ein anderes Thema nur diese Datei austauschen |
| `manifest.webmanifest`, `sw.js`, `icon-*.png` | PWA: Installation und Offline-Betrieb |
| `CNAME` | Eigene Domain für GitHub Pages |
| `tools/` | Bauskripte: `extract.js` liest `terms.js` des Glossars, `build.js` erzeugt `index.html` und `deck.js` aus `app.html` |
| `source/` | Die formulierten Fragen je Begriff (`id` Tab `Frage`) |

## Kartenformat (`deck.js`)

```js
window.DECK = {
  meta: { id, title, subtitle, intro, source, sourceLabel, publisher, categories: {key: "Name"}, risks: {key: "Name"} },
  cards: [ { id, cat, risk, q, term, short, long, links: [{label, url}], related: [id] } ]
};
```

Die `meta.id` trennt den Lernstand verschiedener Kartensets im Browser.

## Neu bauen

```bash
cd tools
node extract.js terms.js de.json list.tsv     # terms.js vom Glossar herunterladen
# Fragen aus ../source/*.tsv werden in build.js über de_q.json eingemischt
node build.js
```

Nach einer Änderung an `deck.js` die Versionsnummer in `index.html` (`deck.js?v=…`) und in `sw.js` (`lernkarten-v…`) erhöhen, damit Browser die neue Fassung laden.
