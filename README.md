# pocketlearn Lernkarten

Offline-fähige Lernkarten-App (PWA) von Learning Factory. Jede Karte hat **Frage**, **Kurzantwort** und **Erklärung**.

## Kartensets und Adressen

| Kartenset | Adresse | Ordner | Bauskript |
|---|---|---|---|
| **E-Commerce Prüfung – Geschäftsprozesse** (164 Karten) | https://karten.pocketlearn.online/ | Hauptordner (Kopie in `ec-gp/`) | `tools/ec-gp/build_ec.py` |
| **E-Commerce Prüfung – Kundenkommunikation** (134 Karten) | https://karten.pocketlearn.online/kk/ | `kk/` | `tools/kk/build_kk.py` |

Die beiden E-Commerce-Sets sind über den Umschalter „Prüfungsbereich“ verbunden (`meta.family` in `deck.js`); jedes Set hat einen eigenen Lernstand.
Ausgewertet wurden jeweils die IHK-Prüfungen Sommer 2020 bis Winter 2025; alle Texte sind eigene Formulierungen, Rechenaufgaben haben eigene Zahlen.

**Neu bauen (E-Commerce):**
```bash
python3 tools/ec-gp/build_ec.py tools/app.html ec-gp /tmp/ec.html   # danach ec-gp/* in den Hauptordner kopieren
python3 tools/kk/build_kk.py tools/app.html kk /tmp/kk.html
```
Vorher die Versionsnummern (`deck.js?v=…`, Cache-Name in `sw.js`) im jeweiligen Bauskript erhöhen.

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

## EU AI Act (nicht mehr veröffentlicht)

Das frühere Kartenset EU AI Act (380 Begriffe) ist nicht mehr auf der Seite. Die Bauskripte unten (`tools/build.js`, `source/`) sind noch vorhanden; der letzte veröffentlichte Stand liegt in der Git-Geschichte (Ordner `eu-ai-act/` vor seiner Entfernung).

## Neu bauen

```bash
cd tools
node extract.js terms.js de.json list.tsv     # terms.js vom Glossar herunterladen
# Fragen aus ../source/*.tsv werden in build.js über de_q.json eingemischt
node build.js
```

Nach einer Änderung an `deck.js` die Versionsnummer in `index.html` (`deck.js?v=…`) und in `sw.js` (`lernkarten-v…`) erhöhen, damit Browser die neue Fassung laden.
