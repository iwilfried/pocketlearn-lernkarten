# pocketlearn Lernkarten

Offline-fähige Lernkarten-App (PWA) von Learning Factory. Jede Karte hat **Frage**, **Kurzantwort** und **Erklärung**.

## Kartensets und Adressen

| Kartenset | Adresse | Ordner |
|---|---|---|
| **E-Commerce Prüfung** (Teil 2 der Abschlussprüfung Kaufmann/Kauffrau im E-Commerce, Geschäftsprozesse, 164 Karten) | https://karten.pocketlearn.online/ | Hauptordner |
| dasselbe Set, alte Adresse | https://karten.pocketlearn.online/ec-gp/ | `ec-gp/` |
| **EU AI Act** (380 Begriffe aus dem [EU AI Act Glossar](https://glossar.pocketlearn.online/)) | https://karten.pocketlearn.online/eu-ai-act/ | `eu-ai-act/` |

E-Commerce: Ausgewertet wurden die IHK-Prüfungen 2020–2025; alle Texte sind eigene Formulierungen, die Rechenaufgaben haben eigene Zahlen. Bauskripte: `tools/ec-gp/`.
Nach einem Neubau mit `tools/ec-gp/build_ec.py` die erzeugten Dateien in `ec-gp/` **und** in den Hauptordner kopieren.

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
