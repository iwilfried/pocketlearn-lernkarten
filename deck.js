/* pocketlearn Lernkarten · Kartenset: EU AI Act · 380 Karten
   Schema: meta{id,title,…,categories,risks} · cards[{id,cat,risk,q,term,short,long,links[],related[]}] */
window.DECK={
 "meta": {
  "id": "eu-ai-act",
  "title": "EU AI Act",
  "subtitle": "Lernkarten · 380 Begriffe",
  "intro": "Frage lesen, frei antworten, dann Kurzantwort und Erklärung prüfen. Der Wiederholungsplan zeigt jede Karte wieder, kurz bevor du sie vergisst.",
  "source": "https://glossar.pocketlearn.online/",
  "sourceLabel": "EU AI Act Glossar",
  "publisher": "Learning Factory",
  "categories": {
   "ai-act-core": "EU AI Act",
   "governance": "Governance",
   "ethics": "Ethik",
   "security": "Sicherheit",
   "ml": "ML-Grundlagen",
   "dl": "Deep Learning",
   "llm": "LLM / GenAI",
   "nlp": "NLP",
   "cv": "Vision"
  },
  "risks": {
   "prohibited": "Verboten",
   "high": "Hochrisiko",
   "limited": "Begrenzt",
   "minimal": "Minimal",
   "systemic": "Systemisch"
  }
 },
 "cards": [
  {
   "id": "eu-ai-act",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was ist der EU AI Act, und nach welchem Grundprinzip regelt er KI?",
   "term": "EU AI Act / KI-Verordnung",
   "short": "Erste umfassende horizontale KI-Regulierung weltweit (VO (EU) 2024/1689). Risikobasierter Ansatz, gestaffelt anwendbar ab Februar 2025.",
   "long": "Die KI-Verordnung der EU schafft einheitliche Regeln für die Entwicklung, das Inverkehrbringen und die Nutzung von KI-Systemen im Binnenmarkt. Vier Risikostufen (verboten, hoch, begrenzt, minimal) plus Sonderkapitel für GPAI mit systemischem Risiko. Anwendbar auf Anbieter und Betreiber innerhalb wie außerhalb der EU, sofern Output in der EU verwendet wird (Marktortprinzip). Inkrafttreten 1.8.2024, gestaffelt: Verbote ab 2.2.2025, GPAI-Pflichten ab 2.8.2025, Hochrisiko-Großteil ab 2.8.2026, vollständig ab 2.8.2027.",
   "links": [
    {
     "label": "EUR-Lex Volltext",
     "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj"
    },
    {
     "label": "AI Act Explorer",
     "url": "https://artificialintelligenceact.eu/"
    }
   ],
   "related": [
    "ki-system",
    "hochrisiko-ki",
    "gpai",
    "fristen-anwendung",
    "extraterritorialitaet"
   ]
  },
  {
   "id": "ki-system",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Wie definiert der AI Act ein „KI-System“?",
   "term": "KI-System",
   "short": "Maschinengestütztes System mit Autonomiegraden, das aus Eingaben Ausgaben (Vorhersagen, Empfehlungen, Entscheidungen) ableitet, die Umgebungen beeinflussen können (Art. 3 Nr. 1).",
   "long": "Die Definition folgt der OECD-Definition (2023). Drei Merkmale: (1) maschinengestützt mit unterschiedlichen Autonomiegraden, (2) Adaptivität nach Bereitstellung möglich, (3) Inferenz aus Eingaben hin zu Ausgaben für explizite oder implizite Ziele. Klassische regelbasierte Software fällt nicht darunter, sofern keine Inferenz im engeren Sinne stattfindet. Leitlinien der Kommission (Februar 2025) konkretisieren den Begriff.",
   "links": [
    {
     "label": "Art. 3 AI Act",
     "url": "https://artificialintelligenceact.eu/article/3/"
    },
    {
     "label": "OECD AI Definition",
     "url": "https://oecd.ai/en/ai-principles"
    }
   ],
   "related": [
    "eu-ai-act",
    "ki",
    "gpai",
    "oecd-ki-definition"
   ]
  },
  {
   "id": "gpai",
   "cat": "ai-act-core",
   "risk": "systemic",
   "q": "Was ist ein KI-Modell mit allgemeinem Verwendungszweck (GPAI)?",
   "term": "KI-Modell mit allgemeinem Verwendungszweck (GPAI)",
   "short": "Modell, das eine breite Palette unterschiedlicher Aufgaben kompetent ausführen und in nachgelagerte Systeme integriert werden kann (Art. 3 Nr. 63).",
   "long": "GPAI-Modelle umfassen insbesondere große Sprach- und multimodale Modelle wie GPT-4o, Claude, Llama oder Gemini. Pflichten ab Art. 53 ff.: technische Dokumentation, Informationen für nachgelagerte Anbieter, Urheberrechts-Compliance, Trainingsdaten-Zusammenfassung. Bei Trainingsrechenleistung über 10^25 FLOP gelten Modelle als \"GPAI mit systemischem Risiko\" (Art. 51) mit verschärften Pflichten: Modellbewertung, adversariales Testing, Vorfallmeldung, Cybersicherheit.",
   "links": [
    {
     "label": "Kapitel V AI Act",
     "url": "https://artificialintelligenceact.eu/chapter/5/"
    },
    {
     "label": "GPAI Code of Practice",
     "url": "https://digital-strategy.ec.europa.eu/en/policies/ai-code-practice"
    }
   ],
   "related": [
    "foundation-model",
    "systemisches-risiko",
    "downstream-anbieter",
    "bussgeld-gpai",
    "eu-ai-act"
   ]
  },
  {
   "id": "anbieter",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Wer gilt im AI Act als „Anbieter“?",
   "term": "Anbieter",
   "short": "Person, die ein KI-System oder GPAI-Modell entwickelt oder entwickeln lässt und unter eigenem Namen in Verkehr bringt (Art. 3 Nr. 3).",
   "long": "Der Anbieter trägt die Hauptlast der Pflichten – insbesondere bei Hochrisiko-Systemen: Konformitätsbewertung, technische Dokumentation, Risikomanagement, CE-Kennzeichnung, Registrierung in der EU-Datenbank, Post-Market-Monitoring. Eine Rolle kann sich verschieben: Wer ein Hochrisiko-System wesentlich verändert oder unter eigenem Namen vertreibt, wird selbst zum Anbieter (Art. 25 – \"Provider Flip\").",
   "links": [
    {
     "label": "Art. 3 AI Act",
     "url": "https://artificialintelligenceact.eu/article/3/"
    },
    {
     "label": "Art. 25 AI Act",
     "url": "https://artificialintelligenceact.eu/article/25/"
    }
   ],
   "related": [
    "betreiber",
    "einfuehrer",
    "haendler",
    "provider-flip",
    "ki-kompetenz"
   ]
  },
  {
   "id": "betreiber",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Wer gilt im AI Act als „Betreiber“ eines KI-Systems?",
   "term": "Betreiber",
   "short": "Person, die ein KI-System in eigener Verantwortung verwendet, ausgenommen private nicht-berufliche Nutzung (Art. 3 Nr. 4).",
   "long": "Der Betreiber (\"deployer\", früher \"user\") setzt das KI-System im realen Einsatz ein. Pflichten: Verwendung gemäß Gebrauchsanweisung (Art. 26), menschliche Aufsicht, Überwachung im Betrieb, Information betroffener Personen, Mitwirkung bei Vorfällen. Bei Hochrisiko-KI im öffentlichen Sektor und in bestimmten privaten Bereichen: Pflicht zur Grundrechte-Folgenabschätzung (FRIA, Art. 27).",
   "links": [
    {
     "label": "Art. 26 AI Act",
     "url": "https://artificialintelligenceact.eu/article/26/"
    },
    {
     "label": "Art. 27 AI Act – FRIA",
     "url": "https://artificialintelligenceact.eu/article/27/"
    }
   ],
   "related": [
    "anbieter",
    "fria",
    "menschliche-aufsicht",
    "erklaerungsrecht",
    "ki-kompetenz"
   ]
  },
  {
   "id": "verbotene-praktiken",
   "cat": "ai-act-core",
   "risk": "prohibited",
   "q": "Welche KI-Praktiken verbietet Art. 5 des AI Act?",
   "term": "Verbotene KI-Praktiken",
   "short": "Verbotene KI-Praktiken der obersten Risikostufe (Art. 5): u. a. Social Scoring, subliminale Manipulation, Echtzeit-Gesichtserkennung im öffentlichen Raum; Kernverbote seit 2.2.2025, 2026 um ein Verbot erweitert.",
   "long": "Art. 5 AI Act listet die oberste Risikostufe: (a) unterschwellige Manipulation, (b) Ausnutzung von Vulnerabilität, (c) staatliches Social Scoring, (d) Predictive Policing rein profilbasiert, (e) ungezieltes Scraping von Gesichtsbildern, (f) Emotionserkennung am Arbeitsplatz/in Bildung (Ausnahmen: medizinisch, sicherheitsrelevant), (g) biometrische Kategorisierung sensibler Merkmale, (h) Echtzeit-Fernidentifikation im öffentlichen Raum für Strafverfolgung (eng begrenzte Ausnahmen mit richterlicher Genehmigung). Diese Kernverbote gelten seit 2.2.2025. Der Digital Omnibus ergänzte 2026 ein weiteres Verbot: KI-Systeme zur Erzeugung nicht einvernehmlicher intimer Bilddarstellungen (\"Nudifier\") und von Darstellungen sexuellen Kindesmissbrauchs, anwendbar ab 2.12.2026 (mit Schutzklausel für Systeme mit wirksamen Vorkehrungen). Verstöße: bis 35 Mio. € oder 7 % weltweiten Jahresumsatzes.",
   "links": [
    {
     "label": "Art. 5 AI Act",
     "url": "https://artificialintelligenceact.eu/article/5/"
    }
   ],
   "related": [
    "hochrisiko-ki",
    "gesichtserkennung",
    "anhang-ii",
    "biometrische-identifizierung",
    "biometrische-kategorisierung"
   ]
  },
  {
   "id": "hochrisiko-ki",
   "cat": "ai-act-core",
   "risk": "high",
   "q": "Wann gilt ein KI-System als Hochrisiko-KI-System?",
   "term": "Hochrisiko-KI-System",
   "short": "KI-System, das in Anhang III gelistet oder Sicherheitsbauteil eines regulierten Produkts ist (Art. 6). Strengste Pflichten unter dem AI Act außer Verbote.",
   "long": "Zwei Wege: (1) Sicherheitsbauteil oder Produkt unter Unionsharmonisierungsrechtsakten in Anhang I (Maschinen, Medizinprodukte, Spielzeug), (2) Use Case in Anhang III: Biometrie, kritische Infrastruktur, Bildung, Beschäftigung, wesentliche Dienste, Strafverfolgung, Migration, Justiz/Demokratie. Pflichten: Risikomanagement (Art. 9), Daten-Governance (Art. 10), technische Dokumentation (Art. 11), Aufzeichnungen (Art. 12), Transparenz (Art. 13), menschliche Aufsicht (Art. 14), Genauigkeit/Robustheit (Art. 15), Konformitätsbewertung, CE, Registrierung.",
   "links": [
    {
     "label": "Art. 6 AI Act",
     "url": "https://artificialintelligenceact.eu/article/6/"
    },
    {
     "label": "Anhang III",
     "url": "https://artificialintelligenceact.eu/annex/3/"
    }
   ],
   "related": [
    "anhang-iii",
    "konformitaetsbewertung",
    "risikomanagementsystem",
    "ce-kennzeichnung",
    "eu-ai-act"
   ]
  },
  {
   "id": "begrenztes-risiko",
   "cat": "ai-act-core",
   "risk": "limited",
   "q": "Was kennzeichnet die Risikostufe „begrenztes Risiko“?",
   "term": "Begrenztes Risiko",
   "short": "Risikostufe für Systeme mit Transparenzpflichten – Chatbots, Deepfakes, emotionserkennende und biometrisch kategorisierende Systeme (Art. 50).",
   "long": "Anbieter müssen sicherstellen, dass Personen erkennen, dass sie mit KI interagieren (Chatbot-Hinweis), und KI-generierte synthetische Inhalte (Bild, Audio, Video, Text) maschinenlesbar als solche kennzeichnen. Betreiber müssen Deepfakes als künstlich erzeugt offenlegen (außer künstlerisch/satirisch) und öffentlich-relevante Texte kennzeichnen. Verstöße: bis 15 Mio. € oder 3 % weltweiten Jahresumsatzes.",
   "links": [
    {
     "label": "Art. 50 AI Act",
     "url": "https://artificialintelligenceact.eu/article/50/"
    }
   ],
   "related": [
    "transparenzpflichten",
    "deepfake",
    "hochrisiko-ki",
    "minimales-risiko"
   ]
  },
  {
   "id": "minimales-risiko",
   "cat": "ai-act-core",
   "risk": "minimal",
   "q": "Welche KI-Systeme fallen unter „minimales Risiko“, und welche Pflichten gelten dafür?",
   "term": "Minimales Risiko",
   "short": "Standard-KI ohne spezifische Pflichten unter dem AI Act – Spam-Filter, Empfehlungssysteme, KI in Videospielen.",
   "long": "Die überwiegende Mehrheit der heute eingesetzten KI fällt in diese Kategorie. Keine direkten Pflichten aus dem AI Act, aber freiwillige Verhaltenskodizes (Art. 95) zur Förderung von Trustworthy-AI-Prinzipien. Bestehende Rechtsrahmen wie DSGVO, Verbraucherschutz, Wettbewerbsrecht bleiben uneingeschränkt anwendbar.",
   "links": [
    {
     "label": "Art. 95 AI Act",
     "url": "https://artificialintelligenceact.eu/article/95/"
    }
   ],
   "related": [
    "begrenztes-risiko",
    "hochrisiko-ki"
   ]
  },
  {
   "id": "systemisches-risiko",
   "cat": "ai-act-core",
   "risk": "systemic",
   "q": "Was versteht der AI Act unter „systemischem Risiko“?",
   "term": "Systemisches Risiko",
   "short": "Risiko mit erheblichen Auswirkungen auf den EU-Binnenmarkt durch GPAI-Modelle hoher Wirkung. Schwelle: Trainingsrechenleistung > 10^25 FLOP (Art. 3 Nr. 65).",
   "long": "Die Klassifizierung greift automatisch beim Überschreiten der FLOP-Schwelle, kann aber auch durch Kommission auf Basis weiterer Kriterien (Anhang XIII) erfolgen: Parameterzahl, Datensatzqualität, Reichweite, registrierte Endnutzer. Folge: Pflichten nach Art. 55 – Modellbewertung mit standardisierten Protokollen, adversariales Testing, Vorfallberichte, angemessene Cybersicherheit. Anbieter melden Erreichen der Schwelle binnen zwei Wochen an die Kommission.",
   "links": [
    {
     "label": "Art. 51 AI Act",
     "url": "https://artificialintelligenceact.eu/article/51/"
    },
    {
     "label": "Art. 55 AI Act",
     "url": "https://artificialintelligenceact.eu/article/55/"
    }
   ],
   "related": [
    "gpai",
    "ai-red-teaming",
    "bussgeld-gpai",
    "modellbewertung",
    "dual-use"
   ]
  },
  {
   "id": "konformitaetsbewertung",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was ist eine Konformitätsbewertung im Sinne des AI Act?",
   "term": "Konformitätsbewertung",
   "short": "Verfahren zur Feststellung, ob ein Hochrisiko-KI-System die Anforderungen der Kapitel III erfüllt (Art. 43).",
   "long": "Zwei Verfahren: (1) Interne Kontrolle (Anhang VI) – Selbstbewertung des Anbieters, Standardweg für Anhang-III-Systeme. (2) Bewertung mit notifizierter Stelle (Anhang VII) – obligatorisch bei biometrischer Fernidentifikation und für Sicherheitsbauteile in regulierten Produkten. Ergebnis: EU-Konformitätserklärung (Art. 47), CE-Kennzeichnung (Art. 48), Registrierung in EU-Datenbank (Art. 49). Wesentliche Änderungen erfordern erneute Bewertung.",
   "links": [
    {
     "label": "Art. 43 AI Act",
     "url": "https://artificialintelligenceact.eu/article/43/"
    }
   ],
   "related": [
    "ce-kennzeichnung",
    "notifizierte-stelle",
    "technische-dokumentation",
    "eu-konformitaetserklaerung",
    "hochrisiko-ki"
   ]
  },
  {
   "id": "ce-kennzeichnung",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Welche Funktion hat die CE-Kennzeichnung bei Hochrisiko-KI?",
   "term": "CE-Kennzeichnung",
   "short": "Sichtbarer Konformitätsnachweis auf Hochrisiko-KI-Systemen. Erklärt Übereinstimmung mit AI Act und ggf. weiteren Unionsrechtsakten (Art. 48).",
   "long": "Vor dem Inverkehrbringen muss der Anbieter die CE-Kennzeichnung anbringen – physisch oder digital bei reiner Software. Bei beteiligter notifizierter Stelle wird deren vierstellige Kennnummer hinzugefügt. Voraussetzung für freien Verkehr im EU-Binnenmarkt und Veröffentlichung in der EU-Datenbank für Hochrisiko-KI.",
   "links": [
    {
     "label": "Art. 48 AI Act",
     "url": "https://artificialintelligenceact.eu/article/48/"
    }
   ],
   "related": [
    "konformitaetsbewertung",
    "eu-konformitaetserklaerung",
    "hochrisiko-ki",
    "notifizierte-stelle",
    "inverkehrbringen"
   ]
  },
  {
   "id": "menschliche-aufsicht",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was verlangt der AI Act unter „menschlicher Aufsicht“?",
   "term": "Menschliche Aufsicht",
   "short": "Hochrisiko-KI muss so gestaltet sein, dass natürliche Personen sie wirksam überwachen können (Art. 14). Human in/on the loop oder in command.",
   "long": "Anbieter müssen geeignete Mensch-Maschine-Schnittstellen bauen; Betreiber müssen Aufsicht real durchführen. Aufsichtsführende Personen müssen: Fähigkeiten und Grenzen verstehen, Automatisierungsbias erkennen, Output korrekt interpretieren, eingreifen können (\"Stop\"-Funktion), KI-Empfehlungen ignorieren oder rückgängig machen können. Für Echtzeit-Fernidentifikation: Vier-Augen-Prinzip mit zwei unabhängigen Personen (Art. 14(5)).",
   "links": [
    {
     "label": "Art. 14 AI Act",
     "url": "https://artificialintelligenceact.eu/article/14/"
    }
   ],
   "related": [
    "betreiber",
    "hochrisiko-ki",
    "gebrauchsanweisung",
    "xai",
    "proctoring"
   ]
  },
  {
   "id": "ki-kompetenz",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was verlangt die Pflicht zur KI-Kompetenz (Art. 4) von Anbietern und Betreibern?",
   "term": "KI-Kompetenz",
   "short": "Pflicht für Anbieter und Betreiber, ein hinreichendes Niveau an KI-Kompetenz bei betroffenen Mitarbeitenden sicherzustellen (Art. 4) – seit 2.2.2025.",
   "long": "Eine der ersten anwendbaren Pflichten. Risikobasiert: Wer Hochrisiko-KI betreibt, braucht tiefgreifenderes Verständnis als Chatbot-Nutzer. Inhalte: Funktionsweise, Chancen, Risiken, mögliche Schäden, technische Kenntnisse, Erfahrung, Kontext der Nutzung. Schulung muss dokumentiert werden – die Kommission veröffentlicht Beispiele guter Praxis (\"Living Repository\" des AI Office).",
   "links": [
    {
     "label": "Art. 4 AI Act",
     "url": "https://artificialintelligenceact.eu/article/4/"
    },
    {
     "label": "AI Literacy Repository",
     "url": "https://digital-strategy.ec.europa.eu/en/library/living-repository-foster-learning-and-exchange-ai-literacy"
    }
   ],
   "related": [
    "anbieter",
    "betreiber",
    "ki-kompetenz-organisation",
    "rtr-ki-servicestelle"
   ]
  },
  {
   "id": "ai-office",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was ist das AI Office, und welche Aufgaben hat es?",
   "term": "Büro für künstliche Intelligenz (AI Office)",
   "short": "Zentrale EU-Einheit innerhalb der Kommission (DG CNECT) für GPAI-Aufsicht, Koordination, Standards und Code of Practice.",
   "long": "Eingerichtet im Februar 2024, operativ seit Mitte 2024. Aufgaben: Aufsicht und Durchsetzung gegenüber GPAI-Anbietern (insbesondere mit systemischem Risiko), Erarbeitung des GPAI Code of Practice, Unterstützung des AI Board, Förderung von Forschung, Reallaboren, Standards. Anders als beim Datenschutz mit nationalen Behörden ist die GPAI-Aufsicht zentralisiert auf EU-Ebene.",
   "links": [
    {
     "label": "European AI Office",
     "url": "https://digital-strategy.ec.europa.eu/en/policies/ai-office"
    }
   ],
   "related": [
    "bussgeld-gpai",
    "gpai",
    "marktueberwachung",
    "reallabor",
    "europaeischer-ki-ausschuss"
   ]
  },
  {
   "id": "fria",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was ist eine Grundrechte-Folgenabschätzung (FRIA), und wer muss sie durchführen?",
   "term": "Grundrechte-Folgenabschätzung (FRIA)",
   "short": "Pflicht-Folgenabschätzung für bestimmte Betreiber von Hochrisiko-KI: öffentliche Stellen, private Akteure bei Anhang-III-Use-Cases mit Bürger-Rechtsfolgen (Art. 27).",
   "long": "FRIA = Fundamental Rights Impact Assessment. Inhalt: Beschreibung der Prozesse mit KI, Zeitraum/Häufigkeit, Kategorien betroffener Personen, spezifische Grundrechtsrisiken, Maßnahmen menschlicher Aufsicht, Schadensbegrenzung. Ergebnisse werden der Marktüberwachungsbehörde gemeldet. Überschneidung mit DSGVO-DPIA: Wo bereits DPIA vorliegt, ergänzen – nicht ersetzen. Anbieter unterstützen Betreiber mit Informationen.",
   "links": [
    {
     "label": "Art. 27 AI Act",
     "url": "https://artificialintelligenceact.eu/article/27/"
    }
   ],
   "related": [
    "betreiber",
    "dsgvo-schnittstelle",
    "betroffene-person",
    "dsgvo",
    "arbeitsrecht-schnittstelle"
   ]
  },
  {
   "id": "reallabor",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was ist ein KI-Reallabor (Regulatory Sandbox)?",
   "term": "Reallabor (Regulatory Sandbox)",
   "short": "Kontrollierte Testumgebung unter behördlicher Aufsicht, in der innovative KI-Systeme vor Inverkehrbringen entwickelt und erprobt werden (Art. 57 ff.).",
   "long": "Jeder Mitgliedstaat muss bis 2.8.2027 mindestens ein nationales Reallabor einrichten (durch den Digital Omnibus von ursprünglich 2.8.2026 verschoben). Vorteile: priorisierter Zugang für KMU und Start-ups, kostenlose Teilnahme, juristische Begleitung, ggf. Nutzung personenbezogener Daten unter strikten Bedingungen für KI im öffentlichen Interesse (Art. 59). Vorbild: spanisches Pilot-Sandbox seit 2022.",
   "links": [
    {
     "label": "Art. 57 AI Act",
     "url": "https://artificialintelligenceact.eu/article/57/"
    }
   ],
   "related": [
    "kmu",
    "ai-office",
    "wissenschaftsausnahme",
    "test-realbedingungen",
    "sandbox-datenschutz"
   ]
  },
  {
   "id": "transparenzpflichten",
   "cat": "ai-act-core",
   "risk": "limited",
   "q": "Welche Transparenzpflichten sieht der AI Act vor?",
   "term": "Transparenzpflichten",
   "short": "Anbieter und Betreiber müssen offenlegen, dass KI im Einsatz ist, und Inhalte als KI-generiert kennzeichnen (Art. 13, Art. 50).",
   "long": "Zwei Ebenen: (1) Hochrisiko (Art. 13) – Gebrauchsanweisung mit Zweck, Genauigkeit, bekannten Limitationen, vorhersehbarer Fehlanwendung, Aufsichtsmaßnahmen, Eingriffsmöglichkeiten, Wartung. (2) Begrenztes Risiko (Art. 50) – Information bei Chatbots, maschinenlesbare Markierung synthetischer Inhalte, Deepfake-Offenlegung. Zwischen DSGVO-Transparenz (Art. 13/14) und AI-Act-Transparenz bestehen Überlappungen, aber unterschiedliche Schutzgüter.",
   "links": [
    {
     "label": "Art. 13 AI Act",
     "url": "https://artificialintelligenceact.eu/article/13/"
    },
    {
     "label": "Art. 50 AI Act",
     "url": "https://artificialintelligenceact.eu/article/50/"
    }
   ],
   "related": [
    "begrenztes-risiko",
    "deepfake",
    "image-generation",
    "eu-datenbank",
    "gebrauchsanweisung"
   ]
  },
  {
   "id": "ki",
   "cat": "ml",
   "risk": null,
   "q": "Was versteht man unter Künstlicher Intelligenz (KI)?",
   "term": "Künstliche Intelligenz (KI)",
   "short": "Sammelbegriff für Systeme, die Aufgaben lösen, die typischerweise menschliche Intelligenz erfordern – Wahrnehmen, Schlussfolgern, Lernen, Planen.",
   "long": "Begriff geprägt von John McCarthy (Dartmouth-Konferenz 1956). Klassische Unterteilung: Symbolische KI (Expertensysteme, Logik) vs. subsymbolische KI (Maschinelles Lernen, neuronale Netze). Aktuelle Renaissance seit ~2012 (Deep Learning) und 2017 (Transformer). Der AI Act nutzt eine engere, OECD-orientierte Definition (\"KI-System\"), um symbolische Software nicht pauschal zu erfassen.",
   "links": [
    {
     "label": "OECD AI Principles",
     "url": "https://oecd.ai/en/ai-principles"
    }
   ],
   "related": [
    "ki-system",
    "ml",
    "deep-learning",
    "oecd-ki-definition",
    "turing-test"
   ]
  },
  {
   "id": "ml",
   "cat": "ml",
   "risk": null,
   "q": "Was ist maschinelles Lernen?",
   "term": "Maschinelles Lernen",
   "short": "Teilgebiet der KI, in dem Algorithmen Muster aus Daten lernen, statt explizit programmiert zu werden (Tom Mitchell, 1997).",
   "long": "Drei Hauptparadigmen: überwachtes, unüberwachtes und bestärkendes Lernen. Klassische Verfahren: lineare/logistische Regression, Entscheidungsbäume, Random Forest, SVM, k-NN, Clustering. Modernere Verfahren: Gradient Boosting (XGBoost, LightGBM), Deep Learning. Der AI Act nennt ML als einen der drei methodischen Ansätze, die unter \"KI-System\" fallen können – neben logikbasierten und statistischen Ansätzen.",
   "links": [
    {
     "label": "Mitchell, Machine Learning (1997)",
     "url": "https://www.cs.cmu.edu/~tom/mlbook.html"
    }
   ],
   "related": [
    "ki",
    "ueberwacht",
    "unueberwacht",
    "rl",
    "overfitting"
   ]
  },
  {
   "id": "ueberwacht",
   "cat": "ml",
   "risk": null,
   "q": "Was ist überwachtes Lernen?",
   "term": "Überwachtes Lernen",
   "short": "Lernen aus gelabelten Daten (Eingabe → Ziel-Ausgabe). Klassische Aufgaben: Klassifikation und Regression.",
   "long": "Der Algorithmus erhält Trainingsbeispiele mit bekannten Antworten und sucht eine Funktion, die neue Beispiele möglichst korrekt abbildet. Beispiele: Spam-Klassifikation, Bildkategorisierung, Hauspreisvorhersage. Datenqualität ist entscheidend – Labels-Bias überträgt sich direkt ins Modell. Datensatz wird üblich aufgeteilt in Trainings-, Validierungs- und Testdaten (z. B. 70/15/15).",
   "links": [],
   "related": [
    "ml",
    "unueberwacht",
    "trainingsdaten",
    "klassifikation-regression",
    "active-learning"
   ]
  },
  {
   "id": "unueberwacht",
   "cat": "ml",
   "risk": null,
   "q": "Was ist unüberwachtes Lernen?",
   "term": "Unüberwachtes Lernen",
   "short": "Lernen aus ungelabelten Daten – Ziel: Strukturen entdecken, etwa Cluster, latente Faktoren oder Anomalien.",
   "long": "Aufgabentypen: Clustering (k-Means, DBSCAN, Hierarchical), Dimensionsreduktion (PCA, t-SNE, UMAP), Anomalie-Erkennung, Assoziationsregeln. Anwendungen: Kundensegmentierung, Datenexploration, Vorverarbeitung. Bewertung schwieriger als bei überwachtem Lernen, da keine Ground Truth vorliegt – Metriken wie Silhouette Score, Davies-Bouldin oder domänenspezifische Validierung.",
   "links": [],
   "related": [
    "ml",
    "ueberwacht",
    "clustering",
    "anomalieerkennung"
   ]
  },
  {
   "id": "rl",
   "cat": "ml",
   "risk": null,
   "q": "Wie funktioniert bestärkendes Lernen (Reinforcement Learning)?",
   "term": "Bestärkendes Lernen (RL)",
   "short": "Ein Agent lernt durch Versuch und Irrtum mit Belohnungssignalen aus einer Umgebung – formalisiert als Markov-Entscheidungsprozess.",
   "long": "Schlüsselkonzepte: Zustand, Aktion, Belohnung, Policy, Wert-Funktion. Klassische Algorithmen: Q-Learning, SARSA, Policy Gradients, Actor-Critic. Moderne Erfolge: AlphaGo (Deep RL + Monte-Carlo-Tree-Search), DQN für Atari, RLHF für Chat-Modelle. Herausforderungen: Sample-Effizienz, Exploration vs. Exploitation, Belohnungs-Hacking, Reward-Spezifikation – auch zentral in der Alignment-Forschung.",
   "links": [
    {
     "label": "Sutton & Barto, RL Book",
     "url": "http://incompleteideas.net/book/the-book.html"
    }
   ],
   "related": [
    "ml",
    "rlhf",
    "prozessoptimierung-ki",
    "belohnungsfunktion",
    "q-learning"
   ]
  },
  {
   "id": "trainingsdaten",
   "cat": "ml",
   "risk": null,
   "q": "Was sind Trainingsdaten, und warum ist ihre Qualität so wichtig?",
   "term": "Trainingsdaten",
   "short": "Datensatz, mit dem die Parameter eines ML-Modells gelernt werden. Qualität, Repräsentativität und Bias-Freiheit sind entscheidend.",
   "long": "Klassische Aufteilung: Training (Modellparameter lernen), Validierung (Hyperparameter wählen, Modell auswählen), Test (finale, unverfälschte Bewertung). Häufige Probleme: Stichprobenverzerrung, Label-Rauschen, Verteilungsdrift, Datenleckage zwischen den Splits. Der AI Act schreibt für Hochrisiko-KI in Art. 10 spezifische Qualitätsanforderungen vor.",
   "links": [
    {
     "label": "Art. 10 AI Act",
     "url": "https://artificialintelligenceact.eu/article/10/"
    }
   ],
   "related": [
    "daten-governance",
    "overfitting",
    "bias",
    "ueberwacht",
    "feature-engineering"
   ]
  },
  {
   "id": "overfitting",
   "cat": "ml",
   "risk": null,
   "q": "Was bedeutet Overfitting (Überanpassung)?",
   "term": "Overfitting (Überanpassung)",
   "short": "Das Modell lernt Trainingsdaten samt Rauschen auswendig und generalisiert schlecht auf neue Daten.",
   "long": "Symptome: deutlich höhere Trainings- als Testgenauigkeit. Ursachen: zu komplexes Modell, zu wenige Daten, zu langes Training. Gegenmittel: Regularisierung (L1/L2, Dropout), Early Stopping, Datenaugmentierung, mehr/diversere Daten, einfachere Architekturen, Cross-Validation. Pendant: Underfitting – Modell zu simpel, lernt selbst Trainingsdaten nicht.",
   "links": [],
   "related": [
    "trainingsdaten",
    "ml",
    "model-context-drift",
    "gradientenabstieg",
    "regularisierung"
   ]
  },
  {
   "id": "deep-learning",
   "cat": "dl",
   "risk": null,
   "q": "Was ist Deep Learning?",
   "term": "Deep Learning (Tiefes Lernen)",
   "short": "ML-Teilgebiet mit tiefen neuronalen Netzen (viele Schichten). Lernt hierarchische Repräsentationen direkt aus Rohdaten.",
   "long": "Durchbrüche seit 2012 (AlexNet auf ImageNet). Skaliert hervorragend mit Daten und Rechenleistung. Kernarchitekturen: CNN für Bilder, RNN/LSTM für Sequenzen, Transformer als universeller Standard seit 2017. Voraussetzungen: GPUs/TPUs, große Datenmengen, Frameworks wie PyTorch, TensorFlow, JAX. Trade-off: hohe Genauigkeit vs. Black-Box-Charakter, Datenhunger, Energiebedarf.",
   "links": [
    {
     "label": "Goodfellow et al., Deep Learning Book",
     "url": "https://www.deeplearningbook.org/"
    }
   ],
   "related": [
    "nn",
    "cnn",
    "transformer",
    "ki",
    "attention"
   ]
  },
  {
   "id": "nn",
   "cat": "dl",
   "risk": null,
   "q": "Was ist ein künstliches neuronales Netz?",
   "term": "Neuronales Netz",
   "short": "Aus künstlichen Neuronen aufgebautes Modell, lose inspiriert vom biologischen Gehirn. Schichten von Knoten transformieren Eingaben in Ausgaben.",
   "long": "Grundbaustein: künstliches Neuron mit gewichteten Eingaben, Bias, Aktivierungsfunktion (ReLU, Sigmoid, Tanh). Topologie: Eingabe-, Hidden-, Ausgabeschicht; bei \"deep\" mehrere Hidden Layer. Lernverfahren: Forward Pass, Loss-Berechnung, Backpropagation, Gewichtsaktualisierung per Gradient Descent. Universal Approximation Theorem: Schon ein Hidden Layer kann theoretisch beliebige stetige Funktionen approximieren – Tiefe verbessert Repräsentationskraft in der Praxis.",
   "links": [],
   "related": [
    "deep-learning",
    "cnn",
    "transformer",
    "backpropagation",
    "graph-neural-network"
   ]
  },
  {
   "id": "cnn",
   "cat": "dl",
   "risk": null,
   "q": "Was ist ein Faltungsnetzwerk (CNN), und wofür wird es eingesetzt?",
   "term": "Faltungsnetzwerk (CNN)",
   "short": "Convolutional Neural Network. Spezialisiert auf gitterartige Daten (Bilder, Audio-Spektrogramme) durch lokale Filter und räumliche Hierarchie.",
   "long": "Kernideen: lokale Konnektivität, Gewichts-Sharing, Translation-Invarianz. Schichttypen: Convolution, Pooling, vollständig verbundene Schichten. Meilensteine: LeNet (1998), AlexNet (2012), VGG, ResNet (Skip Connections), EfficientNet. Heute teils abgelöst durch Vision Transformers (ViT), aber für viele Praxis-Aufgaben weiterhin Standard wegen Effizienz und kleinerer Datenanforderungen.",
   "links": [],
   "related": [
    "deep-learning",
    "computer-vision",
    "nn",
    "radiologie-ki",
    "adas"
   ]
  },
  {
   "id": "transformer",
   "cat": "dl",
   "risk": null,
   "q": "Was ist die Transformer-Architektur?",
   "term": "Transformer",
   "short": "Architektur mit Self-Attention (Vaswani et al. 2017, \"Attention is All You Need\"). Heute dominant in NLP, Vision, Multimodal, Audio.",
   "long": "Verzichtet auf Rekurrenz, parallelisiert über Sequenzpositionen. Bausteine: Multi-Head Self-Attention, Feed-Forward-Netzwerke, Layer Normalization, Residual Connections, Positions-Encoding. Varianten: Encoder-only (BERT), Decoder-only (GPT), Encoder-Decoder (T5, BART). Skalierung mit Daten/Parametern führt zu emergenten Fähigkeiten – Grundlage moderner LLMs und Foundation Models.",
   "links": [
    {
     "label": "Attention Is All You Need",
     "url": "https://arxiv.org/abs/1706.03762"
    }
   ],
   "related": [
    "llm",
    "embedding",
    "deep-learning",
    "nn",
    "multimodalitaet"
   ]
  },
  {
   "id": "embedding",
   "cat": "dl",
   "risk": null,
   "q": "Was ist ein Embedding?",
   "term": "Embedding (Einbettung)",
   "short": "Dichte Vektor-Repräsentation diskreter Objekte (Wörter, Bilder, Nutzer) in einem semantischen Raum, in dem Ähnlichkeit messbar ist.",
   "long": "Pioniere im NLP: Word2Vec (2013), GloVe, FastText. Modern: kontextuelle Embeddings aus BERT, Sentence-Transformers, multimodale Embeddings (CLIP). Anwendungen: Suche, Empfehlungen, Clustering, RAG-Pipelines. Vektor-Datenbanken (Pinecone, Weaviate, Milvus, pgvector) speichern Embeddings für schnelle Nearest-Neighbor-Suche.",
   "links": [],
   "related": [
    "transformer",
    "rag",
    "nlp",
    "tokenization",
    "vektordatenbank"
   ]
  },
  {
   "id": "diffusion",
   "cat": "dl",
   "risk": null,
   "q": "Wie funktioniert ein Diffusionsmodell?",
   "term": "Diffusionsmodell",
   "short": "Generative Modellklasse, die schrittweise Rauschen in strukturierte Daten umkehrt – State of the Art für Bildgenerierung.",
   "long": "Forward-Prozess fügt iterativ Gauß-Rauschen hinzu, das Modell lernt den umgekehrten Denoising-Prozess. Bekannte Modelle: Stable Diffusion, Midjourney, DALL-E, Sora (Video). Konkurrenz zu GANs, oft trainingsstabiler und qualitativ überlegen. Latente Diffusion (auf VAE-Latents) reduziert Rechenkosten drastisch. Steuerung über Text-Embeddings (CLIP) und Conditioning (ControlNet, IP-Adapter).",
   "links": [],
   "related": [
    "image-generation",
    "generative-ai",
    "gan",
    "super-resolution"
   ]
  },
  {
   "id": "llm",
   "cat": "llm",
   "risk": null,
   "q": "Was ist ein großes Sprachmodell (LLM)?",
   "term": "Großes Sprachmodell (LLM)",
   "short": "Auf riesigen Textmengen trainiertes Transformer-basiertes Modell mit Milliarden Parametern, das Sprache versteht und generiert.",
   "long": "Beispiele: GPT-4o, Claude, Llama, Gemini, Mistral, Qwen. Training: Self-Supervised auf Web-Korpus (Pretraining), gefolgt von Fine-Tuning und RLHF/DPO. Fähigkeiten skalieren mit Parametern, Daten und Compute (Scaling Laws). Limitationen: Halluzinationen, fehlendes Echtzeit-Wissen, Kontextfenster. Unter dem AI Act in der Regel als GPAI-Modell eingestuft, ab 10^25 FLOP mit systemischem Risiko.",
   "links": [],
   "related": [
    "foundation-model",
    "gpai",
    "transformer",
    "prompt-engineering",
    "generative-ai"
   ]
  },
  {
   "id": "foundation-model",
   "cat": "llm",
   "risk": null,
   "q": "Was ist ein Foundation Model (Basismodell)?",
   "term": "Foundation Model (Basismodell)",
   "short": "Großes vortrainiertes Modell, das per Adaptation auf vielfältige Downstream-Aufgaben spezialisiert wird (Bommasani et al., Stanford 2021).",
   "long": "Begriff von Stanford CRFM geprägt. Charakteristika: Skala (Daten, Compute), Vielseitigkeit, Emergenz. Modalitäten: Text (LLMs), Bild (CLIP, SAM), Multimodal (GPT-4o, Gemini), Audio (Whisper), Code (Codex). Im AI Act überlappend mit GPAI-Definition – nicht jedes Foundation Model ist GPAI nach AI Act, aber alle GPAI-Modelle sind Foundation Models im weiten Sinne.",
   "links": [
    {
     "label": "Bommasani et al. (Stanford CRFM)",
     "url": "https://arxiv.org/abs/2108.07258"
    }
   ],
   "related": [
    "llm",
    "gpai",
    "generative-ai",
    "fine-tuning",
    "downstream-anbieter"
   ]
  },
  {
   "id": "generative-ai",
   "cat": "llm",
   "risk": null,
   "q": "Was ist generative KI?",
   "term": "Generative KI",
   "short": "KI-Systeme, die neue Inhalte erzeugen – Text, Bild, Audio, Video, Code – auf Basis erlernter Datenverteilungen.",
   "long": "Aktuelle Welle seit ChatGPT (Nov 2022). Schlüsseltechnologien: LLMs für Text/Code, Diffusion für Bild/Video, Flow-Matching/AR für Audio. Wirtschaftliche Disruption: Marketing, Software, Design, Bildung, Forschung. Rechtliche Brennpunkte: Urheberrecht der Trainingsdaten, Output-Schutzfähigkeit, Haftung, Transparenzpflichten (Art. 50 AI Act, AI-Generated-Label).",
   "links": [],
   "related": [
    "llm",
    "diffusion",
    "deepfake",
    "image-generation",
    "foundation-model"
   ]
  },
  {
   "id": "prompt-engineering",
   "cat": "llm",
   "risk": null,
   "q": "Was ist Prompt Engineering?",
   "term": "Prompt Engineering",
   "short": "Disziplin, Eingaben (Prompts) so zu formulieren, dass ein Modell zuverlässig die gewünschten Antworten liefert.",
   "long": "Techniken: klare Anweisungen, Beispielpaare (Few-Shot), Rollen-Prompts, Chain-of-Thought (\"Denk Schritt für Schritt\"), strukturierte Ausgaben (JSON, XML), ReAct, Tool-Calling. Grenzen: Robustheit gegen Prompt Injection, Distribution-Shift, Halluzinationen bleiben unabhängig vom Prompt-Design Risiken. Standard-Skill für moderne KI-Anwender, aber kein Ersatz für Fine-Tuning bei tieferer Anpassung.",
   "links": [
    {
     "label": "Anthropic Prompting Docs",
     "url": "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview"
    }
   ],
   "related": [
    "llm",
    "prompt-injection",
    "rag",
    "chain-of-thought",
    "temperatur"
   ]
  },
  {
   "id": "rag",
   "cat": "llm",
   "risk": null,
   "q": "Was ist RAG (Retrieval-Augmented Generation)?",
   "term": "RAG (Retrieval-Augmented Generation)",
   "short": "Architekturmuster: LLM holt zur Antwortzeit relevante Dokumente aus einer Wissensquelle und nutzt sie als Kontext.",
   "long": "Pipeline: Ingestion (Chunking, Embedding, Indexierung in Vektor-DB) → Retrieval (Query-Embedding, Top-K-Suche, optional Re-Ranker) → Augmentation (Kontext-Injection in Prompt) → Generation. Vorteile: aktuelle Daten ohne Re-Training, Quellenangabe möglich, weniger Halluzinationen. Erweiterungen: HyDE, Multi-Query, GraphRAG, Agentic RAG. Standard-Architektur für Unternehmens-Chatbots und Wissensmanagement.",
   "links": [
    {
     "label": "Original RAG Paper",
     "url": "https://arxiv.org/abs/2005.11401"
    }
   ],
   "related": [
    "embedding",
    "llm",
    "halluzination",
    "prompt-engineering",
    "kontextfenster"
   ]
  },
  {
   "id": "fine-tuning",
   "cat": "llm",
   "risk": null,
   "q": "Was ist Fine-Tuning?",
   "term": "Fine-Tuning (Feinabstimmung)",
   "short": "Weitertraining eines vortrainierten Modells auf domänenspezifischen Daten für bessere Performance bei spezifischen Aufgaben.",
   "long": "Varianten: Full Fine-Tuning (alle Gewichte), Parameter-Efficient Fine-Tuning (PEFT) wie LoRA, QLoRA, Adapter (nur kleine Zusatzmatrizen). Spezialformen: Instruction-Tuning (Befehlsbefolgung), DPO (Direct Preference Optimization), RLHF. AI-Act-Implikationen: Wer ein GPAI-Modell wesentlich fine-tunet und unter eigenem Namen vermarktet, kann selbst zum Anbieter werden – Schwelle laut Erwägungsgrund 109: > 1/3 der ursprünglichen Trainings-FLOP.",
   "links": [
    {
     "label": "LoRA paper",
     "url": "https://arxiv.org/abs/2106.09685"
    }
   ],
   "related": [
    "llm",
    "rlhf",
    "foundation-model",
    "instruction-tuning",
    "transfer-learning"
   ]
  },
  {
   "id": "rlhf",
   "cat": "llm",
   "risk": null,
   "q": "Was ist RLHF, und wozu dient es?",
   "term": "RLHF (Reinforcement Learning from Human Feedback)",
   "short": "Methode, ein Sprachmodell mittels menschlicher Präferenzen an Hilfsbereitschaft, Wahrhaftigkeit und Schadlosigkeit auszurichten.",
   "long": "Klassische Pipeline: (1) Supervised Fine-Tuning auf Demonstrationen, (2) Belohnungsmodell aus paarweisen Präferenzen trainieren, (3) Policy-Optimierung per PPO. Ohne RLHF wirken LLMs oft hilflos oder toxisch. Modernere Alternativen: Direct Preference Optimization (DPO), KTO, Constitutional AI (Anthropic). Verbunden mit Risiken: Reward Hacking, Sycophancy, eingeschränkte Diversität – aktive Forschungsfront im Alignment.",
   "links": [
    {
     "label": "InstructGPT paper",
     "url": "https://arxiv.org/abs/2203.02155"
    }
   ],
   "related": [
    "fine-tuning",
    "rl",
    "llm",
    "instruction-tuning",
    "alignment"
   ]
  },
  {
   "id": "halluzination",
   "cat": "llm",
   "risk": null,
   "q": "Was ist eine Halluzination bei KI-Modellen?",
   "term": "Halluzination",
   "short": "Plausible, aber sachlich falsche oder erfundene Aussagen eines KI-Modells – ein Kernrisiko generativer KI.",
   "long": "Ursachen: Modelle sind Wahrscheinlichkeits-, keine Wahrheits-Optimierer; Trainingsdatenlücken; Distribution-Shift bei der Anfrage; Nutzerdruck (Sycophancy). Klassen: faktische Halluzinationen, Quellenfälschung, mathematische Fehler, halluzinierte Tool-Aufrufe. Gegenmaßnahmen: RAG mit Quellenangabe, Tool-Use, Confidence-Scores, externe Verifikation, RLHF, Output-Constraints. Gefährlich in juristischen, medizinischen, finanziellen Anwendungen – Anwaltskanzleien wurden bereits sanktioniert.",
   "links": [],
   "related": [
    "rag",
    "llm",
    "temperatur",
    "legaltech",
    "textzusammenfassung"
   ]
  },
  {
   "id": "nlp",
   "cat": "nlp",
   "risk": null,
   "q": "Was ist NLP (Verarbeitung natürlicher Sprache)?",
   "term": "Verarbeitung natürlicher Sprache (NLP)",
   "short": "Teilgebiet der KI für das Verstehen, Erzeugen und Übersetzen menschlicher Sprache durch Maschinen.",
   "long": "Klassische Aufgaben: Tokenisierung, POS-Tagging, Parsing, Named Entity Recognition, Sentiment-Analyse, Maschinelle Übersetzung, Frage-Antwort, Zusammenfassung. Paradigmenwechsel: regelbasiert → statistisch (HMM, CRF) → neuronal (Word2Vec, LSTM) → Transformer (BERT, GPT). Heutiger Standard: vortrainierte Sprachmodelle, die meiste Aufgaben per Prompt oder leichtem Fine-Tuning lösen.",
   "links": [],
   "related": [
    "tokenization",
    "embedding",
    "llm",
    "sentiment-analyse",
    "content-moderation"
   ]
  },
  {
   "id": "tokenization",
   "cat": "nlp",
   "risk": null,
   "q": "Was bedeutet Tokenisierung?",
   "term": "Tokenisierung",
   "short": "Aufspaltung von Text in kleinere Einheiten (Tokens), die ein Modell verarbeitet – Wörter, Subwörter oder Zeichen.",
   "long": "Moderne LLMs nutzen Subword-Tokenisierung (Byte-Pair Encoding, WordPiece, SentencePiece). Vorteile: Wortschatz-Effizienz, Umgang mit unbekannten Wörtern, sprachübergreifend. Wichtig: Modelle \"sehen\" Tokens, nicht Wörter – \"strawberry\" wird oft in mehrere Tokens zerlegt, was Buchstaben-Aufgaben erschwert. Tokenizer-Bias kann Sprachen mit kleineren Korpora benachteiligen (mehr Tokens pro Wort = teurer).",
   "links": [
    {
     "label": "OpenAI Tokenizer",
     "url": "https://platform.openai.com/tokenizer"
    }
   ],
   "related": [
    "nlp",
    "embedding",
    "llm",
    "kontextfenster",
    "stemming-lemmatisierung"
   ]
  },
  {
   "id": "computer-vision",
   "cat": "cv",
   "risk": null,
   "q": "Was ist Computer Vision?",
   "term": "Computer Vision (Maschinelles Sehen)",
   "short": "Teilgebiet der KI, das Maschinen ermöglicht, visuelle Inhalte zu interpretieren – Bilder, Video, 3D.",
   "long": "Klassische Aufgaben: Bildklassifikation, Objekterkennung, Segmentierung, Tracking, Pose Estimation, OCR. Architekturen: CNNs (jahrzehntelang Standard), Vision Transformers (ViT, seit 2020), multimodal (CLIP, SAM). Anwendungen: autonomes Fahren, Medizin (Radiologie), Industrie (Qualitätskontrolle), Landwirtschaft. Brennpunkte unter dem AI Act: biometrische Identifizierung, Gesichtserkennung, Emotionserkennung.",
   "links": [],
   "related": [
    "cnn",
    "gesichtserkennung",
    "image-generation",
    "multimodalitaet",
    "radiologie-ki"
   ]
  },
  {
   "id": "gesichtserkennung",
   "cat": "cv",
   "risk": "prohibited",
   "q": "Was ist Gesichtserkennung, und wie behandelt der AI Act sie?",
   "term": "Gesichtserkennung",
   "short": "Biometrische Identifikation oder Verifikation von Personen anhand ihres Gesichts. Im AI Act je nach Modus stark reguliert oder verboten.",
   "long": "Drei Anwendungsmodi: (1) Echtzeit-Fernidentifikation im öffentlichen Raum für Strafverfolgung – grundsätzlich verboten (Art. 5(1)(h)), eng begrenzte Ausnahmen mit richterlicher Genehmigung. (2) Nachträgliche Identifikation – Hochrisiko-System nach Anhang III Nr. 1, mit zusätzlichen Schutzmaßnahmen. (3) Verifikation (1:1, Smartphone-Entsperrung) – meist Hochrisiko, je nach Kontext. Untargeted Scraping zum Aufbau von Gesichtsdatenbanken (Clearview AI) ist ebenfalls verboten.",
   "links": [],
   "related": [
    "verbotene-praktiken",
    "computer-vision",
    "anhang-iii",
    "anhang-ii",
    "biometrische-identifizierung"
   ]
  },
  {
   "id": "image-generation",
   "cat": "cv",
   "risk": "limited",
   "q": "Was ist Bildgenerierung durch KI?",
   "term": "Bildgenerierung",
   "short": "Erzeugung neuer Bilder durch generative Modelle, vorwiegend Diffusion. Unterliegt Transparenzpflichten und Urheberrechtsfragen.",
   "long": "Verfahren: Diffusion (Stable Diffusion, FLUX, Imagen), GANs (StyleGAN), VAE-basiert. Steuerung: Text-Prompts, ControlNet, IP-Adapter, Inpainting, Outpainting, LoRA-Stile. Ethische und rechtliche Fragen: Trainingsdaten-Lizenzen (Getty vs. Stability), Stilkopie lebender Künstler, Urheberrecht erzeugter Bilder, Deepfakes. AI-Act-Pflicht: maschinenlesbare Kennzeichnung KI-generierter Inhalte (Art. 50(2)).",
   "links": [],
   "related": [
    "diffusion",
    "generative-ai",
    "transparenzpflichten",
    "computer-vision",
    "super-resolution"
   ]
  },
  {
   "id": "bias",
   "cat": "ethics",
   "risk": null,
   "q": "Was ist algorithmischer Bias?",
   "term": "Algorithmischer Bias",
   "short": "Systematische Verzerrung in Vorhersagen oder Entscheidungen eines KI-Systems, die bestimmte Gruppen unverhältnismäßig benachteiligt.",
   "long": "Quellen: historischer Bias (Daten spiegeln Diskriminierung wider), Repräsentationsbias (Untergruppen unterrepräsentiert), Messbias (fehlerhafte Labels), Aggregationsbias, Auswertungsbias, Deployment-Bias. Berühmte Fälle: COMPAS (Strafvollzug), Amazon-Recruiting (Frauenbenachteiligung), Apple Card (Geschlechter-Kreditlimits). Gegenmaßnahmen: diverse Datensätze, Reweighting, adversariales Debiasing, Fairness-Constraints, Audits, Monitoring im Einsatz.",
   "links": [],
   "related": [
    "fairness",
    "daten-governance",
    "trainingsdaten",
    "cv-screening",
    "versicherung-scoring"
   ]
  },
  {
   "id": "fairness",
   "cat": "ethics",
   "risk": null,
   "q": "Was bedeutet Fairness bei KI-Systemen?",
   "term": "Fairness",
   "short": "Eigenschaft eines KI-Systems, Entscheidungen ohne ungerechtfertigte Diskriminierung zu treffen. Mehrere mathematisch unverträgliche Definitionen.",
   "long": "Drei Hauptkriterien: Demographic Parity (gleiche positive Rate über Gruppen), Equalized Odds (gleiche TPR/FPR), Predictive Parity (gleiche Präzision). Impossibility-Theorem (Chouldechova, Kleinberg): bei unterschiedlichen Basisraten können nicht alle drei gleichzeitig gelten – Wahl ist normativ. Werkzeuge: AIF360 (IBM), Fairlearn (Microsoft), What-If Tool. Rechtlicher Rahmen: AGG, AI Act Art. 10, GG Art. 3, EU-Charta Art. 21.",
   "links": [
    {
     "label": "Fairlearn",
     "url": "https://fairlearn.org/"
    }
   ],
   "related": [
    "bias",
    "xai",
    "cv-screening",
    "trustworthy-ai",
    "insurtech"
   ]
  },
  {
   "id": "xai",
   "cat": "ethics",
   "risk": null,
   "q": "Was ist erklärbare KI (XAI)?",
   "term": "Erklärbare KI (XAI)",
   "short": "Methoden, Entscheidungen von KI-Modellen für Menschen nachvollziehbar zu machen.",
   "long": "Zwei Ansätze: (1) interpretierbare Modelle (lineare Regression, Entscheidungsbäume) – Erklärung intrinsisch; (2) Post-hoc-Erklärungen für Black-Box-Modelle: SHAP (Shapley-Werte), LIME, Counterfactuals, Saliency Maps, Integrated Gradients. AI Act fordert Transparenz und Nachvollziehbarkeit für Hochrisiko-KI (Art. 13). DSGVO Art. 22 verlangt \"aussagekräftige Informationen über die Logik\" automatisierter Entscheidungen.",
   "links": [],
   "related": [
    "fairness",
    "menschliche-aufsicht",
    "chain-of-thought",
    "kreditrisikomodell",
    "shap-lime"
   ]
  },
  {
   "id": "deepfake",
   "cat": "ethics",
   "risk": "limited",
   "q": "Was ist ein Deepfake?",
   "term": "Deepfake",
   "short": "Synthetisches Bild-, Audio- oder Video-Material, das real wirkt, aber mittels generativer Modelle (GAN, Diffusion) erzeugt oder manipuliert wurde.",
   "long": "Anwendungen: Film (Verjüngung, Synchronisation), Satire, Bildung – aber auch Desinformation, Wahlbeeinflussung, nicht-einvernehmliche Pornografie, Identitätsbetrug. AI Act Art. 50(4): Betreiber müssen Deepfakes als künstlich erzeugt offenlegen, mit Ausnahme künstlerisch-satirischer Werke (Kennzeichnung dann angepasst, ohne kreatives Erlebnis zu zerstören). Erkennung: forensische Analyse, Wasserzeichen (C2PA, SynthID). Strafrechtlich: §§ 22, 33 KunstUrhG, § 201a StGB.",
   "links": [
    {
     "label": "C2PA Standard",
     "url": "https://c2pa.org/"
    }
   ],
   "related": [
    "generative-ai",
    "transparenzpflichten",
    "begrenztes-risiko",
    "dsa-schnittstelle",
    "ki-wahlen"
   ]
  },
  {
   "id": "dsgvo",
   "cat": "governance",
   "risk": null,
   "q": "Was ist die DSGVO?",
   "term": "DSGVO (GDPR)",
   "short": "Datenschutz-Grundverordnung (VO (EU) 2016/679). Zentrales EU-Recht für die Verarbeitung personenbezogener Daten – auch im KI-Kontext.",
   "long": "Schnittpunkte mit dem AI Act: (1) Art. 22 DSGVO – Recht auf Nicht-Unterwerfung unter rein automatisierte Entscheidungen mit Rechtswirkung; (2) Datenschutz-Folgenabschätzung (DPIA, Art. 35) ergänzt FRIA; (3) Rechtsgrundlagen für Trainingsdatenverarbeitung (Art. 6); (4) Privacy by Design (Art. 25); (5) Rechte Betroffener (Auskunft, Löschung, Widerspruch). Datenschutzbehörden gehen aktiv gegen LLM-Anbieter vor (Italien vs. ChatGPT 2023, Garante).",
   "links": [
    {
     "label": "EUR-Lex DSGVO",
     "url": "https://eur-lex.europa.eu/eli/reg/2016/679/oj"
    }
   ],
   "related": [
    "dsgvo-schnittstelle",
    "fria",
    "erklaerungsrecht"
   ]
  },
  {
   "id": "iso-42001",
   "cat": "governance",
   "risk": null,
   "q": "Was regelt die Norm ISO/IEC 42001?",
   "term": "ISO/IEC 42001",
   "short": "Internationale Norm für KI-Managementsysteme (AIMS), veröffentlicht Dezember 2023. Gegenstück zu ISO 9001 / 27001 für KI.",
   "long": "Definiert Anforderungen an Aufbau, Implementierung, Aufrechterhaltung und kontinuierliche Verbesserung eines KI-Managementsystems. Zertifizierbar. Inhalte: Kontext der Organisation, Führung, Planung, Unterstützung, Betrieb, Bewertung, Verbesserung. Voraussichtliche Grundlage harmonisierter Normen unter dem AI Act (Standardisierungsanfrage CEN/CENELEC JTC 21). Praktischer Pfad zu nachweisbarer AI-Act-Compliance.",
   "links": [
    {
     "label": "ISO/IEC 42001",
     "url": "https://www.iso.org/standard/81230.html"
    }
   ],
   "related": [
    "harmonisierte-normen",
    "konformitaetsbewertung",
    "risikomanagementsystem",
    "verhaltenskodex",
    "ai-governance"
   ]
  },
  {
   "id": "prompt-injection",
   "cat": "security",
   "risk": null,
   "q": "Was ist eine Prompt Injection?",
   "term": "Prompt Injection",
   "short": "Angriff, bei dem manipulative Anweisungen in Eingaben oder externen Daten ein LLM dazu bringen, ursprüngliche Vorgaben zu ignorieren.",
   "long": "Zwei Hauptklassen: (1) Direct Injection – Nutzer schickt bösartigen Prompt; (2) Indirect Injection – Anweisungen versteckt in vom Modell gelesenen Daten (Webseite, E-Mail, PDF). Folgen: Datenexfiltration, unautorisierte Tool-Nutzung, Reputationsschaden. Top-Risiko in OWASP LLM Top 10. Gegenmaßnahmen: Privilegientrennung, Output-Filterung, Tool-Allowlists, Bestätigungsdialoge, robustes System-Prompt-Design – aber kein vollständiger Schutz.",
   "links": [
    {
     "label": "OWASP LLM Top 10",
     "url": "https://genai.owasp.org/"
    }
   ],
   "related": [
    "prompt-engineering",
    "adversarial",
    "ai-red-teaming",
    "tool-use",
    "guardrails"
   ]
  },
  {
   "id": "adversarial",
   "cat": "security",
   "risk": null,
   "q": "Was sind adversariale Angriffe?",
   "term": "Adversariale Angriffe",
   "short": "Gezielt manipulierte Eingaben, die ein ML-Modell zu falschen Ausgaben verleiten – oft für Menschen unsichtbar.",
   "long": "Klassen: Evasion (Inferenz-Zeit, FGSM, PGD), Poisoning (Trainings-Zeit), Model Extraction, Membership Inference, Model Inversion. Beispiel: minimal verändertes Stoppschild wird als Geschwindigkeitsbegrenzung klassifiziert. Verteidigung: Adversarial Training, Input-Vorverarbeitung, zertifizierte Robustheit, Ensembles. AI Act Art. 15 verlangt für Hochrisiko-KI angemessene Robustheit gegenüber solchen Angriffen.",
   "links": [],
   "related": [
    "prompt-injection",
    "ai-red-teaming",
    "genauigkeit-robustheit",
    "data-poisoning",
    "evasion-attack"
   ]
  },
  {
   "id": "ai-red-teaming",
   "cat": "security",
   "risk": null,
   "q": "Was ist AI Red Teaming?",
   "term": "AI Red Teaming",
   "short": "Strukturiertes adversariales Testen von KI-Systemen, um Schwachstellen, Missbrauchspotenzial und Sicherheitsprobleme aufzudecken.",
   "long": "Stammt aus der Cybersicherheit, übertragen auf KI-Modelle. Methoden: manuelles Probing, automatisiertes Jailbreaking, Multi-Turn-Angriffe, Datenextraktions-Tests, Capability Evaluations. Pflicht für GPAI mit systemischem Risiko (Art. 55 AI Act). Etabliert bei OpenAI, Anthropic, Google DeepMind, Meta. Externe Red Teams (z. B. NIST, ARC, Apollo Research) ergänzen interne Tests.",
   "links": [],
   "related": [
    "systemisches-risiko",
    "adversarial",
    "prompt-injection",
    "modellbewertung",
    "guardrails"
   ]
  },
  {
   "id": "einfuehrer",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Wer ist im AI Act ein „Einführer“?",
   "term": "Einführer",
   "short": "In der EU niedergelassene Person, die ein KI-System auf den Markt bringt, das den Namen oder das Zeichen einer außerhalb der EU niedergelassenen Person trägt (Art. 3 Nr. 6).",
   "long": "Der Einführer (\"importer\") prüft vor dem Inverkehrbringen, ob der Drittland-Anbieter die Konformitätsbewertung durchgeführt hat, ob technische Dokumentation und CE-Kennzeichnung vorliegen und ob ein Bevollmächtigter benannt wurde. Pflichten in Art. 23: Aufbewahrung von Unterlagen 10 Jahre, Identifizierung am System, Kooperation mit Marktüberwachungsbehörden. Bei Zweifeln an der Konformität darf das System nicht in Verkehr gebracht werden – schwerwiegende Risiken sind zu melden.",
   "links": [
    {
     "label": "Art. 23 AI Act",
     "url": "https://artificialintelligenceact.eu/article/23/"
    }
   ],
   "related": [
    "haendler",
    "bevollmaechtigter",
    "anbieter"
   ]
  },
  {
   "id": "haendler",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Wer ist im AI Act ein „Händler“?",
   "term": "Händler",
   "short": "Natürliche oder juristische Person in der Lieferkette (außer Anbieter und Einführer), die ein KI-System auf dem EU-Markt bereitstellt (Art. 3 Nr. 7).",
   "long": "Händler müssen vor Bereitstellung prüfen, ob CE-Kennzeichnung, EU-Konformitätserklärung und Gebrauchsanweisung vorhanden sind und ob Anbieter und ggf. Einführer ihre Pflichten erfüllt haben (Art. 24). Bei Konformitätsverdacht: Bereitstellung aussetzen, Anbieter/Einführer und Behörden informieren. Wer ein Hochrisiko-System wesentlich verändert oder unter eigenem Namen vertreibt, wird selbst zum Anbieter (Art. 25 – \"Provider Flip\").",
   "links": [
    {
     "label": "Art. 24 AI Act",
     "url": "https://artificialintelligenceact.eu/article/24/"
    }
   ],
   "related": [
    "einfuehrer",
    "anbieter",
    "provider-flip"
   ]
  },
  {
   "id": "bevollmaechtigter",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Wer ist im AI Act ein „Bevollmächtigter“?",
   "term": "Bevollmächtigter",
   "short": "In der EU niedergelassene Person, die von einem Drittland-Anbieter schriftlich beauftragt wird, dessen Pflichten aus dem AI Act wahrzunehmen (Art. 3 Nr. 5, Art. 22).",
   "long": "Ein Bevollmächtigter (\"authorised representative\") muss von Anbietern außerhalb der EU vor dem Inverkehrbringen benannt werden. Aufgaben: Überprüfung der EU-Konformitätserklärung und technischen Dokumentation, Aufbewahrung 10 Jahre, Zusammenarbeit mit Behörden, Kündigung bei Verdacht auf Nichtkonformität. Vergleichbar mit dem Art. 27 DSGVO-Vertreter, jedoch mit erweiterten Kontroll- und Meldepflichten.",
   "links": [
    {
     "label": "Art. 22 AI Act",
     "url": "https://artificialintelligenceact.eu/article/22/"
    }
   ],
   "related": [
    "einfuehrer",
    "anbieter",
    "extraterritorialitaet"
   ]
  },
  {
   "id": "provider-flip",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was bedeutet „Provider Flip“ im AI Act?",
   "term": "Provider Flip (Rollenwechsel)",
   "short": "Ein Akteur wird selbst zum Anbieter, wenn er ein Hochrisiko-KI-System wesentlich verändert, unter eigenem Namen vertreibt oder zweckentfremdet nutzt (Art. 25).",
   "long": "Drei Auslöser: (a) Vermarktung unter eigenem Namen oder Marke; (b) wesentliche Änderung eines bereits in Verkehr gebrachten Hochrisiko-Systems; (c) Änderung des vorgesehenen Zwecks eines Systems, sodass es zum Hochrisiko-System wird. Folge: alle Anbieter-Pflichten treffen den neuen Anbieter. Der ursprüngliche Anbieter muss kooperieren und relevante Informationen bereitstellen (Art. 25 Abs. 4). Zentraler Compliance-Punkt für Downstream-Entwickler und Systemintegratoren.",
   "links": [
    {
     "label": "Art. 25 AI Act",
     "url": "https://artificialintelligenceact.eu/article/25/"
    }
   ],
   "related": [
    "wesentliche-aenderung",
    "anbieter",
    "downstream-anbieter",
    "haendler",
    "verwendungszweck"
   ]
  },
  {
   "id": "wesentliche-aenderung",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was ist eine „wesentliche Änderung“ eines KI-Systems?",
   "term": "Wesentliche Änderung",
   "short": "Änderung eines KI-Systems nach dem Inverkehrbringen, die die Konformität mit den Anforderungen des AI Act beeinträchtigen oder den Zweck verändern kann (Art. 3 Nr. 23).",
   "long": "Nicht als wesentlich gelten vorab geplante und dokumentierte Änderungen, insbesondere solche im Rahmen des kontinuierlichen Lernens (Erwägungsgrund 128). Wesentliche Änderungen erfordern eine neue Konformitätsbewertung (Art. 43 Abs. 4) und können einen Provider Flip auslösen (Art. 25). Beispiele: Änderung des Trainingsdatensatzes über den ursprünglich vorgesehenen Rahmen hinaus, funktionale Ergänzung um neue Anwendungsfälle, Ausweitung des Zwecks. Konkretisierung durch Leitlinien der Kommission und harmonisierte Normen erwartet.",
   "links": [
    {
     "label": "Art. 3 AI Act",
     "url": "https://artificialintelligenceact.eu/article/3/"
    }
   ],
   "related": [
    "provider-flip",
    "konformitaetsbewertung"
   ]
  },
  {
   "id": "downstream-anbieter",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Wer ist ein nachgelagerter Anbieter (Downstream-Anbieter)?",
   "term": "Nachgelagerter Anbieter (Downstream-Anbieter)",
   "short": "Anbieter, der ein KI-System auf Basis eines GPAI-Modells eines anderen Anbieters entwickelt und in Verkehr bringt (Art. 3 Nr. 68).",
   "long": "Downstream-Anbieter (\"downstream provider\") sind auf technische Informationen des GPAI-Anbieters angewiesen. Art. 53 Abs. 1 lit. b verpflichtet GPAI-Anbieter, Downstream-Anbietern Informationen und Dokumentation nach Anhang XII bereitzustellen: technische Fähigkeiten, Grenzen, akzeptable Nutzungsbedingungen, Trainingsdaten-Zusammenfassung. Bei GPAI mit systemischem Risiko ergänzt um Modellbewertung und Risikominderungsstrategien. Vertragliche Weitergabe von Compliance-Verantwortung ist üblich, entbindet aber nicht von eigenen Anbieter-Pflichten.",
   "links": [
    {
     "label": "Art. 53 AI Act",
     "url": "https://artificialintelligenceact.eu/article/53/"
    }
   ],
   "related": [
    "gpai",
    "provider-flip",
    "foundation-model"
   ]
  },
  {
   "id": "betroffene-person",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Wer ist im AI Act eine „betroffene Person“?",
   "term": "Betroffene Person",
   "short": "Natürliche Person, deren Rechte und Freiheiten durch ein KI-System berührt sind (\"affected person\"). Adressat von Auskunfts- und Beschwerderechten.",
   "long": "Der AI Act erkennt betroffene Personen als eigene Kategorie an, wenn auch nicht mit vollem Rechteumfang wie unter der DSGVO. Zentrale Rechte: Beschwerde bei der Marktüberwachungsbehörde (Art. 85), Recht auf Erklärung bei automatisierten Einzelentscheidungen aus Hochrisiko-Systemen mit Rechtswirkung (Art. 86), Information über Einsatz bestimmter Systeme (Art. 26 Abs. 11 – Emotionserkennung, biometrische Kategorisierung, Deepfakes). Rechte gelten unbeschadet der DSGVO.",
   "links": [
    {
     "label": "Art. 85 AI Act",
     "url": "https://artificialintelligenceact.eu/article/85/"
    },
    {
     "label": "Art. 86 AI Act",
     "url": "https://artificialintelligenceact.eu/article/86/"
    }
   ],
   "related": [
    "beschwerderecht",
    "erklaerungsrecht",
    "fria",
    "ki-haftung"
   ]
  },
  {
   "id": "kmu",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Welche Sonderregeln sieht der AI Act für KMU und Start-ups vor?",
   "term": "KMU und Start-ups",
   "short": "Kleine und mittlere Unternehmen sowie Kleinstunternehmen und Start-ups, für die der AI Act besondere Erleichterungen und Förderung vorsieht (Art. 62 f.).",
   "long": "Definition folgt der Kommissionsempfehlung 2003/361/EG (< 250 Mitarbeitende, < 50 Mio. € Umsatz). Erleichterungen: vereinfachte technische Dokumentation (Art. 11 Abs. 1), vorrangiger Zugang zu Reallaboren (Art. 62 Abs. 2 lit. a), reduzierte Gebühren notifizierter Stellen bei Konformitätsbewertung (Art. 62 Abs. 2 lit. c), spezifische Kommunikationskanäle zum AI Office. Bußgelder werden verhältnismäßig festgesetzt: für KMU gilt der jeweils niedrigere Wert aus absolutem Betrag oder Prozentsatz des Umsatzes (Art. 99 Abs. 6).",
   "links": [
    {
     "label": "Art. 62 AI Act",
     "url": "https://artificialintelligenceact.eu/article/62/"
    }
   ],
   "related": [
    "reallabor",
    "bussgeld-art99"
   ]
  },
  {
   "id": "marktueberwachung",
   "cat": "governance",
   "risk": null,
   "q": "Was ist eine Marktüberwachungsbehörde im AI Act?",
   "term": "Marktüberwachungsbehörde",
   "short": "Nationale Behörde, die die Konformität von KI-Systemen mit dem AI Act überwacht und durchsetzt (Art. 3 Nr. 26, Art. 70).",
   "long": "Jeder Mitgliedstaat benennt mindestens eine Marktüberwachungsbehörde und mindestens eine notifizierende Behörde (Art. 70). Anwendbar ist der Rahmen der VO (EU) 2019/1020 (Marktüberwachungs-VO). Befugnisse: Prüfung technischer Dokumentation, Zugang zu Trainingsdaten, Test des Systems, Rückruf, Marktrücknahme, Bußgelder. Bei GPAI-Modellen liegt die Aufsicht zentral beim AI Office (Art. 88), nicht bei den nationalen Behörden. Deutschland: BNetzA als koordinierende Behörde (Stand 2025).",
   "links": [
    {
     "label": "Art. 70 AI Act",
     "url": "https://artificialintelligenceact.eu/article/70/"
    }
   ],
   "related": [
    "notifizierende-behoerde",
    "ai-office",
    "schwerwiegender-vorfall",
    "whistleblower",
    "deutschland-ki-aufsicht"
   ]
  },
  {
   "id": "notifizierende-behoerde",
   "cat": "governance",
   "risk": null,
   "q": "Was ist eine notifizierende Behörde?",
   "term": "Notifizierende Behörde",
   "short": "Nationale Behörde, die notifizierte Stellen benennt, überwacht und der Kommission notifiziert (Art. 3 Nr. 19, Art. 28).",
   "long": "Zuständig für die Prüfung, ob eine Konformitätsbewertungsstelle die Anforderungen des AI Act erfüllt (Unabhängigkeit, Fachkompetenz, Verfahren – Art. 31), für ihre Benennung und laufende Überwachung. Trennung zwischen notifizierender Behörde und Marktüberwachungsbehörde ist möglich, aber nicht zwingend – in kleineren Mitgliedstaaten oft in einer Stelle vereint. Die Kommission unterhält die NANDO-Datenbank aller notifizierten Stellen.",
   "links": [
    {
     "label": "Art. 28 AI Act",
     "url": "https://artificialintelligenceact.eu/article/28/"
    }
   ],
   "related": [
    "notifizierte-stelle",
    "marktueberwachung",
    "deutschland-ki-aufsicht"
   ]
  },
  {
   "id": "notifizierte-stelle",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was ist eine notifizierte Stelle?",
   "term": "Notifizierte Stelle",
   "short": "Unabhängige Konformitätsbewertungsstelle, die von einer notifizierenden Behörde benannt und der Kommission gemeldet wurde (Art. 3 Nr. 22, Art. 29 ff.).",
   "long": "Für Hochrisiko-Systeme, deren Konformitätsbewertung eine Beteiligung Dritter erfordert (v.a. biometrische Fernidentifikation nach Anhang VII), muss eine notifizierte Stelle einbezogen werden. Anforderungen: rechtliche Selbstständigkeit, Unabhängigkeit, technische Kompetenz für KI, Berufshaftpflicht, Vertraulichkeitspflichten (Art. 31). Zertifikate haben Höchstlaufzeit von fünf Jahren mit Möglichkeit der Verlängerung (Art. 44). Bei Nichtkonformität kann die Kommission Zertifikate aussetzen oder entziehen.",
   "links": [
    {
     "label": "Art. 29 AI Act",
     "url": "https://artificialintelligenceact.eu/article/29/"
    }
   ],
   "related": [
    "konformitaetsbewertung",
    "notifizierende-behoerde",
    "ce-kennzeichnung",
    "konformitaetsbewertungsverfahren"
   ]
  },
  {
   "id": "eu-datenbank",
   "cat": "governance",
   "risk": null,
   "q": "Was ist die EU-Datenbank für Hochrisiko-KI-Systeme?",
   "term": "EU-Datenbank für Hochrisiko-KI-Systeme",
   "short": "Von der Kommission verwaltete öffentliche Datenbank, in der Anbieter Hochrisiko-Systeme vor Inverkehrbringen registrieren müssen (Art. 71, Anhang VIII).",
   "long": "Registrierungspflichten treffen Anbieter für alle Hochrisiko-Systeme aus Anhang III (Ausnahme: kritische Infrastruktur – nicht öffentlich) sowie Betreiber im öffentlichen Sektor. Inhalt der Registrierung (Anhang VIII): Angaben zum Anbieter/Betreiber, Systembezeichnung, Zweck, Zusammenfassung wesentlicher Elemente. Zweck: Transparenz für betroffene Personen, Zivilgesellschaft, Behörden. Öffentlich einsehbar unter Wahrung der Geschäftsgeheimnisse. Zentraler Baustein europäischer KI-Governance.",
   "links": [
    {
     "label": "Art. 71 AI Act",
     "url": "https://artificialintelligenceact.eu/article/71/"
    }
   ],
   "related": [
    "hochrisiko-ki",
    "transparenzpflichten"
   ]
  },
  {
   "id": "anhang-i",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was enthält Anhang I des AI Act?",
   "term": "Anhang I (Unionsharmonisierungsrechtsakte)",
   "short": "Liste von 20 EU-Produktrechtsakten, deren Sicherheitsbauteile bei KI-Einsatz automatisch als Hochrisiko-Systeme gelten (Art. 6 Abs. 1).",
   "long": "Anhang I umfasst zwei Abschnitte: Abschnitt A (12 Rechtsakte im New Legislative Framework) – u.a. Maschinen-VO, Spielzeug-Richtlinie, Sportboote, Aufzüge, ATEX, Funkanlagen, Druckgeräte, Seilbahnen, PSA, Gasgeräte, Medizinprodukte-VO und IVD-VO. Abschnitt B (8 Rechtsakte im \"Old Approach\") – Luftfahrt, Kfz, Landmaschinen, Schiffsausrüstung, Eisenbahn, Kraftfahrzeuge Typgenehmigung, zivile Luftfahrt EASA. Ist ein KI-System Sicherheitsbauteil eines dieser Produkte, greift der AI Act ergänzend zum Sektorrecht.",
   "links": [
    {
     "label": "Anhang I",
     "url": "https://artificialintelligenceact.eu/annex/1/"
    }
   ],
   "related": [
    "hochrisiko-ki",
    "mdr-schnittstelle",
    "anhang-iii",
    "sicherheitsbauteil",
    "cobot"
   ]
  },
  {
   "id": "anhang-iii",
   "cat": "ai-act-core",
   "risk": "high",
   "q": "Was enthält Anhang III des AI Act?",
   "term": "Anhang III (Hochrisiko-Use-Cases)",
   "short": "Katalog von acht Anwendungsbereichen, in denen KI-Systeme als Hochrisiko gelten (Art. 6 Abs. 2). Erweiterbar durch delegierte Rechtsakte der Kommission (Art. 7).",
   "long": "Die acht Bereiche: (1) Biometrie – Fernidentifikation, Kategorisierung, Emotionserkennung; (2) kritische Infrastruktur – Verkehr, Wasser, Gas, Strom, digitale Infrastruktur; (3) allgemeine und berufliche Bildung – Zugang, Bewertung, Prüfungsüberwachung; (4) Beschäftigung, Personalmanagement – Personalauswahl, Beförderung, Zuweisung, Leistungsbewertung; (5) Zugang zu wesentlichen privaten und öffentlichen Diensten – Kreditwürdigkeit (Ausnahme: Betrugserkennung), Sozialleistungen, Notfallversorgung, Lebens- und Krankenversicherung; (6) Strafverfolgung; (7) Migration, Asyl, Grenzkontrolle; (8) Justizverwaltung und demokratische Prozesse. Ausnahme in Art. 6 Abs. 3: kein Hochrisiko, wenn System nur eng definierte Verfahrensaufgaben durchführt.",
   "links": [
    {
     "label": "Anhang III",
     "url": "https://artificialintelligenceact.eu/annex/3/"
    }
   ],
   "related": [
    "hochrisiko-ki",
    "anhang-i",
    "arbeitsrecht-schnittstelle",
    "gesichtserkennung",
    "delegierte-rechtsakte"
   ]
  },
  {
   "id": "anhang-iv",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was regelt Anhang IV des AI Act?",
   "term": "Anhang IV (Technische Dokumentation)",
   "short": "Mindestinhalt der technischen Dokumentation für Hochrisiko-Systeme (Art. 11). Umfasst neun Themenblöcke.",
   "long": "Anhang IV strukturiert die Pflichtdokumentation: (1) allgemeine Beschreibung des KI-Systems, (2) detaillierte Beschreibung der Elemente und Entwicklungsphasen einschließlich Datensätze, Trainings-, Validierungs- und Testverfahren, (3) Informationen zu Überwachung, Funktionsweise und Kontrolle, (4) Beschreibung von Zweckeignung, Genauigkeit, Robustheit, Cybersicherheit, (5) Risikomanagementsystem, (6) beabsichtigte wesentliche Änderungen, (7) Liste angewandter harmonisierter Normen, (8) EU-Konformitätserklärung, (9) Beschreibung des Systems zur Bewertung der Leistung im Betrieb (Post-Market-Monitoring). KMU dürfen vereinfachte Form nach Kommissionsvorlage nutzen.",
   "links": [
    {
     "label": "Anhang IV",
     "url": "https://artificialintelligenceact.eu/annex/4/"
    }
   ],
   "related": [
    "technische-dokumentation",
    "konformitaetsbewertung"
   ]
  },
  {
   "id": "anhang-ii",
   "cat": "ai-act-core",
   "risk": "prohibited",
   "q": "Was enthält Anhang II des AI Act?",
   "term": "Anhang II (Straftaten für Ausnahmen von Verboten)",
   "short": "Katalog von 16 schweren Straftaten, für die eng begrenzte Ausnahmen vom Verbot der Echtzeit-Fernidentifikation im öffentlichen Raum gelten können (Art. 5 Abs. 1 lit. h).",
   "long": "Ausnahmen sind nur bei richterlicher Genehmigung, Notwendigkeit und Verhältnismäßigkeit zulässig. Die 16 Straftatbestände orientieren sich am EU-Rahmenbeschluss zum Europäischen Haftbefehl und umfassen u.a. Terrorismus, Menschenhandel, sexuelle Ausbeutung von Kindern, illegaler Handel mit Drogen, Waffen, Munition, Sprengstoff, Mord, schwere Körperverletzung, illegaler Handel mit menschlichen Organen, Entführung, Rassismus und Fremdenfeindlichkeit, organisierte oder bewaffnete Straftaten, Umweltkriminalität, Straftaten gegen das Finanzinteresse der Union, Vergewaltigung, Straftaten im Zuständigkeitsbereich des Internationalen Strafgerichtshofs, Flugzeug- und Schiffsentführung, Sabotage.",
   "links": [
    {
     "label": "Anhang II",
     "url": "https://artificialintelligenceact.eu/annex/2/"
    }
   ],
   "related": [
    "verbotene-praktiken",
    "gesichtserkennung"
   ]
  },
  {
   "id": "risikomanagementsystem",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was verlangt der AI Act beim Risikomanagementsystem?",
   "term": "Risikomanagementsystem",
   "short": "Fortlaufender iterativer Prozess über den gesamten Lebenszyklus eines Hochrisiko-Systems zur Identifizierung, Bewertung und Minderung von Risiken (Art. 9).",
   "long": "Pflicht in fünf Schritten: (a) Identifizierung bekannter und vernünftigerweise vorhersehbarer Risiken für Gesundheit, Sicherheit, Grundrechte; (b) Bewertung der Risiken bei bestimmungsgemäßem Gebrauch und vorhersehbarem Fehlgebrauch; (c) Bewertung anderer Risiken aus Post-Market-Monitoring; (d) Ergreifen geeigneter, gezielter Minderungsmaßnahmen. Besondere Berücksichtigung von Kindern und vulnerablen Gruppen (Art. 9 Abs. 9). Der harmonisierte Normenentwurf zu Art. 9 orientiert sich an ISO/IEC 23894 (KI-Risikomanagement) und ISO 31000.",
   "links": [
    {
     "label": "Art. 9 AI Act",
     "url": "https://artificialintelligenceact.eu/article/9/"
    }
   ],
   "related": [
    "hochrisiko-ki",
    "iso-42001",
    "daten-governance",
    "post-market-monitoring",
    "conformity-by-design"
   ]
  },
  {
   "id": "daten-governance",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Welche Anforderungen stellt der AI Act an Daten-Governance und Datenqualität?",
   "term": "Daten-Governance und Datenqualität",
   "short": "Anforderungen an Trainings-, Validierungs- und Testdaten von Hochrisiko-Systemen (Art. 10). Zentrale Norm für datengetriebene KI.",
   "long": "Daten müssen relevant, repräsentativ, frei von Fehlern und vollständig sein (Art. 10 Abs. 3). Datenverwaltungsverfahren müssen abdecken: relevante Designentscheidungen, Datenerfassung, Datenaufbereitung, Prüfung auf Bias und mögliche diskriminierende Wirkungen, Erkennung von Datenlücken. Eine explizite Ausnahme erlaubt die Verarbeitung besonderer Kategorien personenbezogener Daten (Art. 9 DSGVO) zur Bias-Erkennung – unter strengen Schutzmaßnahmen wie Pseudonymisierung, Zugangsbeschränkungen und Löschpflichten (Art. 10 Abs. 5). Praxisrelevant für Fairness-Audits.",
   "links": [
    {
     "label": "Art. 10 AI Act",
     "url": "https://artificialintelligenceact.eu/article/10/"
    }
   ],
   "related": [
    "trainingsdaten",
    "bias",
    "dsgvo-schnittstelle",
    "risikomanagementsystem",
    "datenverordnung-schnittstelle"
   ]
  },
  {
   "id": "technische-dokumentation",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was verlangt der AI Act zur technischen Dokumentation?",
   "term": "Technische Dokumentation",
   "short": "Anbieter müssen vor Inverkehrbringen eines Hochrisiko-Systems die technische Dokumentation nach Anhang IV erstellen und aktuell halten (Art. 11).",
   "long": "Die Dokumentation belegt gegenüber Behörden die Konformität. Aufbewahrung 10 Jahre nach Inverkehrbringen (Art. 18). KMU dürfen vereinfachte Fassung nach Kommissionsvorlage nutzen (Art. 11 Abs. 1 UAbs. 3). Bei Sicherheitsbauteilen unter Anhang I Abschnitt A kann die Dokumentation in die vorhandene Sektor-Dokumentation integriert werden (Art. 11 Abs. 2). Die Dokumentation ist bei jeder wesentlichen Änderung zu aktualisieren.",
   "links": [
    {
     "label": "Art. 11 AI Act",
     "url": "https://artificialintelligenceact.eu/article/11/"
    }
   ],
   "related": [
    "anhang-iv",
    "konformitaetsbewertung",
    "eu-konformitaetserklaerung",
    "model-card"
   ]
  },
  {
   "id": "aufzeichnungspflicht",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was bedeutet die Aufzeichnungspflicht (Logging) für Hochrisiko-KI?",
   "term": "Aufzeichnungspflicht (Logging)",
   "short": "Hochrisiko-Systeme müssen technisch so gestaltet sein, dass Ereignisse während des Betriebs automatisch protokolliert werden (Art. 12).",
   "long": "Zweck: Rückverfolgbarkeit des Systemverhaltens, Erkennung von Risiken, Post-Market-Monitoring, behördliche Untersuchungen. Mindestinhalt: Zeitraum jeder Nutzung (Datum, Start-/Endzeit), Referenzdatenbank gegen die geprüft wurde, Eingabedaten die zu Übereinstimmung führten, Identität der natürlichen Personen bei menschlicher Überprüfung (Art. 12 Abs. 3). Für biometrische Fernidentifikation Sonderregeln in Art. 26 Abs. 6: Aufbewahrung mindestens 6 Monate. Betreiber-Pflichten zu Aufzeichnungen ergänzen in Art. 26 Abs. 6, 27.",
   "links": [
    {
     "label": "Art. 12 AI Act",
     "url": "https://artificialintelligenceact.eu/article/12/"
    }
   ],
   "related": [
    "hochrisiko-ki",
    "post-market-monitoring",
    "audit-trail"
   ]
  },
  {
   "id": "genauigkeit-robustheit",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was verlangt der AI Act zu Genauigkeit, Robustheit und Cybersicherheit?",
   "term": "Genauigkeit, Robustheit und Cybersicherheit",
   "short": "Hochrisiko-Systeme müssen angemessene Genauigkeit, Robustheit und Cybersicherheit über den gesamten Lebenszyklus aufweisen (Art. 15).",
   "long": "Anbieter müssen Genauigkeitsmetriken (z.B. Accuracy, Precision, Recall, F1) im Gebrauchsanweisungstext angeben (Art. 15 Abs. 3). Robustheit bezieht sich auf Widerstandsfähigkeit gegen Fehler, Umgebungsveränderungen, Störungen; bei lernenden Systemen müssen Rückkopplungsschleifen (Feedback Loops) beherrscht werden. Cybersicherheit erfasst Widerstand gegen Manipulationen wie Data Poisoning, Model Poisoning, Model Evasion, Modell-Extraktion, Adversarial Examples. Die Kommission unterstützt die Entwicklung von Benchmarks; das Cyber Resilience Act (CRA) greift ergänzend.",
   "links": [
    {
     "label": "Art. 15 AI Act",
     "url": "https://artificialintelligenceact.eu/article/15/"
    }
   ],
   "related": [
    "adversarial",
    "cra-schnittstelle",
    "nis2-schnittstelle",
    "produkthaftung-schnittstelle",
    "model-context-drift"
   ]
  },
  {
   "id": "gebrauchsanweisung",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was muss die Gebrauchsanweisung eines Hochrisiko-KI-Systems leisten?",
   "term": "Gebrauchsanweisung",
   "short": "Anbieter müssen Hochrisiko-Systemen eine digitale oder gedruckte Gebrauchsanweisung beifügen, die Betreibern klare, umfassende und zugängliche Informationen liefert (Art. 13).",
   "long": "Mindestinhalt: Identität und Kontaktdaten des Anbieters, Merkmale, Fähigkeiten und Leistungsgrenzen des Systems (Zweck, Genauigkeit, Robustheit, bekannte Umstände die zu Risiken führen), Änderungen die vom Anbieter vorgesehen sind, technische Maßnahmen der menschlichen Aufsicht, erforderliche Rechenressourcen, ggf. erforderliche Wartung, Beschreibung der Logging-Mechanismen. Sprache: Mitgliedstaat kann Landessprache vorschreiben. Voraussetzung für ordnungsgemäßen Betrieb durch den Betreiber (Art. 26 Abs. 1).",
   "links": [
    {
     "label": "Art. 13 AI Act",
     "url": "https://artificialintelligenceact.eu/article/13/"
    }
   ],
   "related": [
    "menschliche-aufsicht",
    "betreiber",
    "transparenzpflichten",
    "verwendungszweck",
    "model-card"
   ]
  },
  {
   "id": "post-market-monitoring",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was ist Post-Market-Monitoring?",
   "term": "Post-Market-Monitoring",
   "short": "Anbieter müssen ein System einrichten und dokumentieren, das die Leistung von Hochrisiko-Systemen im Betrieb systematisch überwacht (Art. 72).",
   "long": "Der Monitoring-Plan (Art. 72 Abs. 3) beschreibt Erhebung, Analyse und Auswertung relevanter Daten während der gesamten Nutzungsdauer. Zweck: fortlaufende Bewertung, ob das System die Anforderungen der Kapitel III weiter erfüllt, und Erkennung von Trends oder Vorfällen. Findings fließen zurück ins Risikomanagementsystem (Art. 9). Ergänzt wird das Monitoring durch die Pflicht zur Meldung schwerwiegender Vorfälle nach Art. 73 (Melde­fristen 15 Tage, in kritischen Fällen 2 Tage bzw. sofort). Kommissions-Durchführungsrechtsakte konkretisieren Format und Inhalt des Monitoring-Plans.",
   "links": [
    {
     "label": "Art. 72 AI Act",
     "url": "https://artificialintelligenceact.eu/article/72/"
    }
   ],
   "related": [
    "schwerwiegender-vorfall",
    "risikomanagementsystem",
    "aufzeichnungspflicht",
    "model-context-drift",
    "mlops"
   ]
  },
  {
   "id": "schwerwiegender-vorfall",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was ist ein „schwerwiegender Vorfall“ im AI Act?",
   "term": "Schwerwiegender Vorfall",
   "short": "Fehlfunktion oder Fehlgebrauch eines Hochrisiko-Systems, der direkt oder indirekt zu Tod, schwerer Gesundheitsschädigung, Grundrechtsverletzung oder Beeinträchtigung kritischer Infrastruktur führt (Art. 3 Nr. 49, Art. 73).",
   "long": "Anbieter müssen jeden schwerwiegenden Vorfall an die zuständige Marktüberwachungsbehörde melden. Regelfrist: 15 Tage nach Kenntnisnahme. Bei Vorfällen mit Todesfolge oder Beeinträchtigung kritischer Infrastruktur: unverzüglich, spätestens 2 Tage; bei weitreichender Verletzung der Grundrechte: sofort, spätestens 15 Tage. Nach Meldung: Untersuchung, Risikobewertung, Korrekturmaßnahmen. Ergänzend zur Vorfallmeldung für GPAI mit systemischem Risiko nach Art. 55 Abs. 1 lit. c.",
   "links": [
    {
     "label": "Art. 73 AI Act",
     "url": "https://artificialintelligenceact.eu/article/73/"
    }
   ],
   "related": [
    "post-market-monitoring",
    "marktueberwachung"
   ]
  },
  {
   "id": "harmonisierte-normen",
   "cat": "governance",
   "risk": null,
   "q": "Was sind harmonisierte Normen, und welche Wirkung haben sie?",
   "term": "Harmonisierte Normen",
   "short": "Europäische Normen, deren Anwendung die Vermutung der Konformität mit Anforderungen des AI Act begründet (Art. 40).",
   "long": "Die Kommission hat CEN und CENELEC im Mai 2023 mit Standardisierungsanfrage M/593 beauftragt. Zuständig: gemeinsames Technisches Komitee CEN/CENELEC JTC 21 \"Artificial Intelligence\". Arbeitsprogramm umfasst zehn Bereiche: Risikomanagement, Governance und Datenqualität, Aufzeichnung, Transparenz, menschliche Aufsicht, Genauigkeit-Robustheit-Cybersicherheit, Qualitätsmanagement, Konformitätsbewertung, KI-Managementsystem (auf ISO/IEC 42001 basierend). Erscheinen im Amtsblatt der EU löst Konformitätsvermutung aus. Alternative: gemeinsame Spezifikationen der Kommission (Art. 41) für den Fall, dass harmonisierte Normen nicht rechtzeitig oder unzureichend vorliegen.",
   "links": [
    {
     "label": "Art. 40 AI Act",
     "url": "https://artificialintelligenceact.eu/article/40/"
    },
    {
     "label": "CEN/CENELEC JTC 21",
     "url": "https://www.cencenelec.eu/areas-of-work/cen-cenelec-topics/artificial-intelligence/"
    }
   ],
   "related": [
    "gemeinsame-spezifikationen",
    "iso-42001",
    "konformitaetsbewertung",
    "leitlinien-kommission"
   ]
  },
  {
   "id": "bussgeld-art99",
   "cat": "governance",
   "risk": null,
   "q": "Wie ist das Bußgeldsystem des AI Act (Art. 99) aufgebaut?",
   "term": "Bußgeldsystem (Art. 99)",
   "short": "Dreistufiges Sanktionssystem des AI Act mit Bußgeldern bis zu 35 Mio. € oder 7 % des weltweiten Jahresumsatzes – je nachdem, welcher Betrag höher ist.",
   "long": "Die drei Stufen: (1) Verstöße gegen Verbote nach Art. 5 – bis zu 35 Mio. € oder 7 % Jahresumsatz; (2) Verstöße gegen andere Anbieter- oder Betreiberpflichten (Hochrisiko, Transparenz, GPAI etc.) – bis zu 15 Mio. € oder 3 %; (3) unrichtige, unvollständige oder irreführende Angaben gegenüber Behörden – bis zu 7,5 Mio. € oder 1 %. Für KMU und Start-ups gilt jeweils der niedrigere Betrag (Art. 99 Abs. 6). Die Bemessung erfolgt anhand eines Kriterienkatalogs (Art. 99 Abs. 7): Art, Schwere und Dauer des Verstoßes, Zahl betroffener Personen, Vorsatz oder Fahrlässigkeit, frühere Verstöße, ergriffene Abhilfemaßnahmen.",
   "links": [
    {
     "label": "Art. 99 AI Act",
     "url": "https://artificialintelligenceact.eu/article/99/"
    }
   ],
   "related": [
    "sanktionsbemessung",
    "bussgeld-gpai",
    "bussgeld-behoerden",
    "kmu"
   ]
  },
  {
   "id": "bussgeld-gpai",
   "cat": "governance",
   "risk": null,
   "q": "Welche Bußgelder drohen GPAI-Anbietern (Art. 101)?",
   "term": "Bußgelder gegen GPAI-Anbieter (Art. 101)",
   "short": "Spezielles Sanktionsregime für Anbieter von GPAI-Modellen: Bußgelder bis 15 Mio. € oder 3 % des weltweiten Jahresumsatzes, verhängt zentral durch die Kommission.",
   "long": "Anders als die allgemeinen Bußgelder (nationale Behörden) werden GPAI-Bußgelder zentral vom AI Office auf Ebene der Kommission verhängt (Art. 101). Auslöser: vorsätzliche oder fahrlässige Verstöße gegen GPAI-Pflichten (Art. 53 ff.), Nichtbefolgung von Anfragen oder Zugangsverweigerung, Nichtdurchführung angeordneter Maßnahmen. Vor Verhängung: Mitteilung der Vorwürfe, rechtliches Gehör, Akteneinsicht. Kommission kann bis Ende 2025 keine Bußgelder verhängen (Art. 113 lit. a Übergang für GPAI: Anwendung ab 2.8.2025). Gerichtliche Überprüfung durch EuG/EuGH.",
   "links": [
    {
     "label": "Art. 101 AI Act",
     "url": "https://artificialintelligenceact.eu/article/101/"
    }
   ],
   "related": [
    "gpai",
    "ai-office",
    "bussgeld-art99",
    "systemisches-risiko"
   ]
  },
  {
   "id": "bussgeld-behoerden",
   "cat": "governance",
   "risk": null,
   "q": "Können nach dem AI Act Bußgelder gegen Behörden verhängt werden?",
   "term": "Bußgelder gegen Behörden (Art. 99 Abs. 8)",
   "short": "Mitgliedstaaten können vorsehen, ob und in welchem Umfang Bußgelder auch gegen Behörden und öffentliche Einrichtungen verhängt werden können.",
   "long": "Der AI Act überlässt den Mitgliedstaaten die Ausgestaltung: manche Rechtsordnungen (z.B. Deutschland) tun sich schwer damit, Behörden mit Bußgeldern zu belegen, andere sehen dies vor. Alternative Sanktionen: Weisungen, Ministerentscheidungen, disziplinarrechtliche Konsequenzen, öffentliche Anerkennung des Verstoßes. Praktisch relevant, weil ein großer Teil der Hochrisiko-KI im öffentlichen Sektor eingesetzt wird (Sozialleistungen, Migration, Strafverfolgung, Justiz) und Grundrechte-Folgenabschätzungen (FRIA) dort verpflichtend sind.",
   "links": [
    {
     "label": "Art. 99 AI Act",
     "url": "https://artificialintelligenceact.eu/article/99/"
    }
   ],
   "related": [
    "bussgeld-art99",
    "sanktionsbemessung"
   ]
  },
  {
   "id": "sanktionsbemessung",
   "cat": "governance",
   "risk": null,
   "q": "Nach welchen Kriterien wird eine Sanktion im AI Act bemessen?",
   "term": "Sanktionsbemessung",
   "short": "Kriterienkatalog aus Art. 99 Abs. 7 zur Ermittlung von Höhe und Angemessenheit einer Sanktion – wirksam, verhältnismäßig, abschreckend.",
   "long": "Zwölf Kriterien: Art, Schwere, Dauer und Konsequenzen des Verstoßes; Größe und Marktanteil des Wirtschaftsakteurs; ob der Verstoß vorsätzlich oder fahrlässig war; Maßnahmen zur Schadensminderung; Grad der Zusammenarbeit mit Behörden; frühere Verstöße; Art und Weise der Kenntnisnahme durch die Behörde; ob und in welchem Umfang finanzielle Vorteile erlangt oder Verluste vermieden wurden; Vulnerabilität der betroffenen Personen; ggf. andere erschwerende oder mildernde Umstände. Zusätzlich strukturiert durch nationale Ordnungswidrigkeitengesetze (in Deutschland: OWiG).",
   "links": [
    {
     "label": "Art. 99 AI Act",
     "url": "https://artificialintelligenceact.eu/article/99/"
    }
   ],
   "related": [
    "bussgeld-art99",
    "bussgeld-behoerden"
   ]
  },
  {
   "id": "beschwerderecht",
   "cat": "governance",
   "risk": null,
   "q": "Was regelt das Beschwerderecht nach Art. 85?",
   "term": "Beschwerderecht (Art. 85)",
   "short": "Jede natürliche oder juristische Person kann bei einer Marktüberwachungsbehörde Beschwerde einlegen, wenn sie einen Verstoß gegen den AI Act vermutet.",
   "long": "Ein niedrigschwelliger Zugang zur Durchsetzung. Der Beschwerdeführer muss keine unmittelbare Betroffenheit nachweisen – auch NGOs, Journalisten und Wettbewerber können Beschwerde einreichen. Die Behörde entscheidet nach eigenem Ermessen über Untersuchung, informiert den Beschwerdeführer nach mitgliedstaatlichem Verfahrensrecht. Beschwerden ergänzen das Recht auf Erklärung individueller Entscheidungen (Art. 86) und weitere Rechtsbehelfe unter der DSGVO, dem UWG oder dem AGG. Für GPAI: Beschwerden an das AI Office.",
   "links": [
    {
     "label": "Art. 85 AI Act",
     "url": "https://artificialintelligenceact.eu/article/85/"
    }
   ],
   "related": [
    "betroffene-person",
    "erklaerungsrecht",
    "whistleblower"
   ]
  },
  {
   "id": "erklaerungsrecht",
   "cat": "governance",
   "risk": null,
   "q": "Was beinhaltet das Recht auf Erklärung nach Art. 86?",
   "term": "Recht auf Erklärung (Art. 86)",
   "short": "Betroffene Personen haben Anspruch auf eine klare und aussagekräftige Erklärung, wenn eine Hochrisiko-KI eine sie betreffende Einzelentscheidung mit rechtlicher oder ähnlich erheblicher Wirkung trifft.",
   "long": "Der Anspruch richtet sich gegen den Betreiber (nicht den Anbieter) und ergänzt Art. 22 DSGVO. Umfasst: Rolle des KI-Systems im Entscheidungsprozess und wesentliche Elemente der Entscheidung. Nicht betroffen: Entscheidungen ohne rechtliche oder ähnliche Wirkung; Systeme aus Anhang III Nr. 2 (kritische Infrastruktur); Ausnahmen aus mitgliedstaatlichem Recht möglich. Praxisrelevanz: Zusammenspiel mit DSGVO (Art. 13, 14, 22), Verbraucherschutz und Antidiskriminierungsrecht.",
   "links": [
    {
     "label": "Art. 86 AI Act",
     "url": "https://artificialintelligenceact.eu/article/86/"
    }
   ],
   "related": [
    "betroffene-person",
    "beschwerderecht",
    "dsgvo-schnittstelle",
    "betreiber",
    "dsgvo"
   ]
  },
  {
   "id": "whistleblower",
   "cat": "governance",
   "risk": null,
   "q": "Wie schützt der AI Act Hinweisgeber (Art. 87)?",
   "term": "Hinweisgeberschutz (Art. 87)",
   "short": "Verstöße gegen den AI Act fallen in den Anwendungsbereich der EU-Hinweisgeber-Richtlinie 2019/1937 – Whistleblower werden vor Vergeltung geschützt.",
   "long": "Beschäftigte, Auftragnehmer, Bewerber und weitere Personenkreise können intern oder extern Verstöße melden, ohne arbeits-, straf- oder zivilrechtliche Nachteile befürchten zu müssen. Unternehmen ab 50 Mitarbeitenden müssen interne Meldekanäle einrichten, Behörden externe Kanäle. In Deutschland umgesetzt durch das Hinweisgeberschutzgesetz (HinSchG, in Kraft seit 2023). Praxisrelevanz: technische Verstöße gegen KI-Compliance-Pflichten sind oft nur für Insider erkennbar.",
   "links": [
    {
     "label": "Art. 87 AI Act",
     "url": "https://artificialintelligenceact.eu/article/87/"
    },
    {
     "label": "RL 2019/1937",
     "url": "https://eur-lex.europa.eu/eli/dir/2019/1937/oj"
    }
   ],
   "related": [
    "beschwerderecht",
    "marktueberwachung"
   ]
  },
  {
   "id": "fristen-anwendung",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Nach welchem Zeitplan wird der AI Act anwendbar?",
   "term": "Zeitplan der Anwendung (Art. 113)",
   "short": "Gestaffelte Anwendbarkeit des AI Act zwischen 2.2.2025 und 2.8.2028; der Digital Omnibus (2026) verschob zentrale Hochrisiko-Fristen nach hinten.",
   "long": "Meilensteine: (1) 1.8.2024 – Inkrafttreten der VO (EU) 2024/1689; (2) 2.2.2025 – Verbote nach Art. 5 und KI-Kompetenzpflicht nach Art. 4 anwendbar; (3) 2.8.2025 – GPAI-Pflichten (Art. 53, 55), Governance-Kapitel und Sanktionen (mit Ausnahmen); (4) 2.8.2026 – Transparenzpflichten nach Art. 50. Der Digital Omnibus (politische Einigung Mai 2026, Annahme Juni 2026) verschob die Hochrisiko-Fristen deutlich: eigenständige Anhang-III-Systeme gelten nun ab 2.12.2027, in Produkte eingebettete Anhang-I-Systeme ab 2.8.2028. Die Kennzeichnungspflicht für generative Alt-Systeme (Art. 50 Abs. 2) und ein neues Verbot (Art. 5) von Nudifier-/Missbrauchsmaterial greifen ab 2.12.2026; die Frist für nationale Reallabore rückte auf 2.8.2027. GPAI-Modelle vor 2.8.2025 haben bis 2.8.2027 zur Anpassung.",
   "links": [
    {
     "label": "Art. 113 AI Act",
     "url": "https://artificialintelligenceact.eu/article/113/"
    }
   ],
   "related": [
    "uebergangsvorschriften",
    "eu-ai-act",
    "digital-omnibus"
   ]
  },
  {
   "id": "uebergangsvorschriften",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was regeln die Übergangsvorschriften des AI Act (Art. 111)?",
   "term": "Übergangsvorschriften (Art. 111)",
   "short": "Bestandsschutz für KI-Systeme und GPAI-Modelle, die vor den jeweiligen Anwendungsstichtagen in Verkehr gebracht wurden – mit Grenzen und Anpassungsfristen.",
   "long": "Grundprinzip: Systeme, die vor der Anwendbarkeit bestimmter Pflichten in Verkehr gebracht wurden, sind nicht rückwirkend erfasst. Ausnahmen: (1) wesentliche Änderungen nach dem Stichtag lösen volle Anwendbarkeit aus; (2) Hochrisiko-Systeme im öffentlichen Sektor müssen bis 2.8.2030 angepasst werden; (3) GPAI-Modelle, die vor 2.8.2025 in Verkehr gebracht wurden, müssen bis 2.8.2027 vollständige Compliance nachweisen; (4) IT-Großsysteme im Freiheits-, Sicherheits- und Justizraum (SIS, VIS, Eurodac etc.) müssen bis 31.12.2030 angepasst werden. Für Anbieter und Betreiber: Bestandssysteme früher als nötig anpassen kann Wettbewerbsvorteil und Vertrauenssignal sein.",
   "links": [
    {
     "label": "Art. 111 AI Act",
     "url": "https://artificialintelligenceact.eu/article/111/"
    }
   ],
   "related": [
    "fristen-anwendung",
    "gpai"
   ]
  },
  {
   "id": "leitlinien-kommission",
   "cat": "governance",
   "risk": null,
   "q": "Welche Rolle spielen die Leitlinien der Kommission (Art. 96)?",
   "term": "Leitlinien der Kommission (Art. 96)",
   "short": "Die Kommission veröffentlicht laufend Leitlinien zur einheitlichen Auslegung und Anwendung des AI Act – rechtlich nicht bindend, praktisch prägend.",
   "long": "Bereits veröffentlicht bzw. angekündigt: Leitlinien zur Definition des KI-Systems (Feb 2025), Leitlinien zu verbotenen Praktiken nach Art. 5 (Feb 2025), Vorlage zur Trainingsdaten-Zusammenfassung für GPAI (Sommer 2025), Leitlinien zur praktischen Umsetzung von Art. 6 (Hochrisiko-Klassifizierung), Vorlage für den Post-Market-Monitoring-Plan, Leitlinien zum Verhältnis zwischen AI Act und Unionsharmonisierungsrecht. Rechtsnatur: Soft Law – nicht bindend, aber Behörden und Gerichte orientieren sich in der Regel daran. Erarbeitung mit Beteiligung des AI Board und Stakeholdern.",
   "links": [
    {
     "label": "Art. 96 AI Act",
     "url": "https://artificialintelligenceact.eu/article/96/"
    }
   ],
   "related": [
    "delegierte-rechtsakte",
    "harmonisierte-normen"
   ]
  },
  {
   "id": "delegierte-rechtsakte",
   "cat": "governance",
   "risk": null,
   "q": "Was darf die Kommission über delegierte Rechtsakte (Art. 97) regeln?",
   "term": "Delegierte Rechtsakte (Art. 97)",
   "short": "Die Kommission darf bestimmte technische oder ergänzende Aspekte des AI Act durch delegierte Rechtsakte anpassen – unter Widerspruchsrecht von Rat und Parlament.",
   "long": "Betroffene Bereiche: Anpassung der GPAI-Schwelle für systemisches Risiko (Art. 51 Abs. 3), Aktualisierung der Anhänge III und IV, Kriterien für Anhang XI (technische Doku für GPAI), Kriterien für Anhang XII (Info für Downstream-Anbieter), Kriterien für Anhang XIII (Kriterien für Systemisches Risiko). Rat und Parlament können delegierte Rechtsakte binnen drei Monaten mit qualifizierter Mehrheit ablehnen. Der Mechanismus ermöglicht schnelle Anpassung an technische Entwicklung ohne Gesetzgebungsverfahren.",
   "links": [
    {
     "label": "Art. 97 AI Act",
     "url": "https://artificialintelligenceact.eu/article/97/"
    }
   ],
   "related": [
    "leitlinien-kommission",
    "anhang-iii"
   ]
  },
  {
   "id": "dsgvo-schnittstelle",
   "cat": "governance",
   "risk": null,
   "q": "Wie verhalten sich AI Act und DSGVO zueinander?",
   "term": "Schnittstelle AI Act ↔ DSGVO",
   "short": "AI Act und DSGVO gelten parallel – der AI Act regelt KI-Systeme als Produkte, die DSGVO regelt die Verarbeitung personenbezogener Daten.",
   "long": "Zentrale Überschneidungen: (1) Rechtsgrundlagen der Trainingsdatenverarbeitung (Art. 6 DSGVO, Art. 10 AI Act – besondere Ausnahme für Bias-Erkennung); (2) automatisierte Einzelentscheidungen: Art. 22 DSGVO vs. Art. 86 AI Act; (3) Folgenabschätzungen: DPIA (Art. 35 DSGVO) und FRIA (Art. 27 AI Act) können kombiniert werden; (4) Zuständigkeiten: Datenschutzbehörden bleiben für DSGVO zuständig, Marktüberwachungsbehörden für AI Act; enge Koordination vorgesehen (Art. 74 AI Act). Der EDSA hat mehrere Stellungnahmen zu KI-Datenschutzfragen veröffentlicht (Web-Scraping, LLMs).",
   "links": [
    {
     "label": "EDSA Opinion 28/2024",
     "url": "https://www.edpb.europa.eu/our-work-tools/our-documents/opinion-board-art-64/opinion-282024-certain-data-protection-aspects_en"
    }
   ],
   "related": [
    "dsgvo",
    "fria",
    "erklaerungsrecht",
    "daten-governance",
    "produkthaftung-schnittstelle"
   ]
  },
  {
   "id": "dsa-schnittstelle",
   "cat": "governance",
   "risk": null,
   "q": "Wie verhalten sich AI Act und Digital Services Act (DSA) zueinander?",
   "term": "Schnittstelle AI Act ↔ Digital Services Act (DSA)",
   "short": "AI Act und DSA regulieren unterschiedliche Objekte – KI-Systeme vs. Vermittlungsdienste – überschneiden sich aber bei algorithmischen Empfehlungssystemen, Deepfakes und generativer KI.",
   "long": "Überschneidungen: (1) Empfehlungssysteme großer Plattformen unterliegen DSA-Transparenzpflichten (Art. 27 DSA); zugleich potenziell Hochrisiko-KI nach Anhang III AI Act; (2) Systemische Risiken sehr großer Online-Plattformen (VLOPs) nach Art. 34 DSA umfassen KI-generierte Desinformation; (3) Deepfake-Kennzeichnung: Art. 50 AI Act auf Ebene der KI-Systeme, DSA-Verhaltenskodex zur Desinformation auf Plattformebene; (4) Zuständigkeiten: Digital Services Coordinators vs. Marktüberwachungsbehörden – Koordination erforderlich. Beide Akte teilen die Philosophie risikobasierter, proportionaler Regulierung.",
   "links": [
    {
     "label": "DSA (VO 2022/2065)",
     "url": "https://eur-lex.europa.eu/eli/reg/2022/2065/oj"
    }
   ],
   "related": [
    "dma-schnittstelle",
    "deepfake",
    "transparenzpflichten",
    "verbraucherschutz-schnittstelle",
    "ki-wahlen"
   ]
  },
  {
   "id": "dma-schnittstelle",
   "cat": "governance",
   "risk": null,
   "q": "Wo berühren sich AI Act und Digital Markets Act (DMA)?",
   "term": "Schnittstelle AI Act ↔ Digital Markets Act (DMA)",
   "short": "Der DMA reguliert Gatekeeper-Plattformen, die vielfach KI-Systeme einsetzen – dabei entstehen Wechselwirkungen mit AI-Act-Pflichten.",
   "long": "Berührungspunkte: (1) Verbot der Selbstbevorzugung (Art. 6 DMA) betrifft KI-Ranking- und Empfehlungssysteme; (2) Interoperabilitätspflichten (Art. 7 DMA) können den Einsatz proprietärer KI erschweren; (3) Datenzugangsrechte (Art. 6 DMA) berühren Trainingsdatenverwendung; (4) Verbot der Datenkombination ohne Einwilligung wirkt auf KI-Trainings-Pipelines; (5) Zuständigkeit: Kommission (DG COMP) für DMA, AI Office/nationale Behörden für AI Act. Ausdrückliche gegenseitige Unberührtheitsklauseln in beiden Verordnungen.",
   "links": [
    {
     "label": "DMA (VO 2022/1925)",
     "url": "https://eur-lex.europa.eu/eli/reg/2022/1925/oj"
    }
   ],
   "related": [
    "dsa-schnittstelle",
    "wettbewerbsrecht-schnittstelle"
   ]
  },
  {
   "id": "mdr-schnittstelle",
   "cat": "governance",
   "risk": "high",
   "q": "Wie greifen AI Act und Medizinprodukte-Verordnung (MDR/IVDR) ineinander?",
   "term": "Schnittstelle AI Act ↔ Medizinprodukte-VO (MDR/IVDR)",
   "short": "KI-basierte Medizinprodukte unterliegen sowohl der MDR/IVDR als auch dem AI Act – die Konformitätsbewertung wird integriert durchgeführt.",
   "long": "Die MDR (VO 2017/745) und IVDR (VO 2017/746) sind in Anhang I Abschnitt A des AI Act gelistet; KI-Sicherheitsbauteile sind damit automatisch Hochrisiko-KI. Praktische Folgen: (1) integrierte Konformitätsbewertung nach MDR/IVDR-Modulen (in der Regel Klasse IIa und höher: notifizierte Stelle); (2) Anforderungen aus Kapitel III AI Act (Risikomanagement, Datenqualität, Aufsicht) müssen zusätzlich erfüllt werden – oft im vorhandenen QMS integrierbar; (3) benannte Stellen benötigen KI-spezifische Kompetenz; (4) klinische Bewertung nach MDR umfasst KI-spezifische Aspekte wie Genauigkeit, Robustheit, Bias. Übergang bis 2.8.2027 (Art. 111 Abs. 2).",
   "links": [
    {
     "label": "MDR (VO 2017/745)",
     "url": "https://eur-lex.europa.eu/eli/reg/2017/745/oj"
    }
   ],
   "related": [
    "anhang-i",
    "konformitaetsbewertung",
    "hochrisiko-ki",
    "notruf-triage",
    "sicherheitsbauteil"
   ]
  },
  {
   "id": "nis2-schnittstelle",
   "cat": "security",
   "risk": null,
   "q": "Wie ergänzen sich AI Act und NIS-2-Richtlinie?",
   "term": "Schnittstelle AI Act ↔ NIS-2-Richtlinie",
   "short": "Die NIS-2-Richtlinie zur Cybersicherheit ergänzt die AI-Act-Anforderungen an Genauigkeit, Robustheit und Cybersicherheit bei Hochrisiko-KI in kritischer Infrastruktur.",
   "long": "NIS-2 (Richtlinie 2022/2555) verpflichtet Betreiber wesentlicher und wichtiger Einrichtungen zu Cybersecurity-Maßnahmen. Überschneidung mit AI Act v.a. bei: (1) Hochrisiko-KI in kritischer Infrastruktur (Anhang III Nr. 2); (2) Meldung von Cybersecurity-Vorfällen: NIS-2 verlangt Frühwarnung binnen 24 h, Erstbericht binnen 72 h – ergänzend zur AI-Act-Vorfallmeldung nach Art. 73; (3) Risikomanagementmaßnahmen: NIS-2 Art. 21 überschneidet sich mit AI-Act Art. 15. Umsetzung in Deutschland durch NIS2UmsuCG (2025). Empfehlung: integriertes Managementsystem statt paralleler Silos.",
   "links": [
    {
     "label": "NIS-2 (RL 2022/2555)",
     "url": "https://eur-lex.europa.eu/eli/dir/2022/2555/oj"
    }
   ],
   "related": [
    "cra-schnittstelle",
    "genauigkeit-robustheit",
    "kritische-infrastruktur",
    "dora",
    "energie-ki"
   ]
  },
  {
   "id": "cra-schnittstelle",
   "cat": "security",
   "risk": null,
   "q": "Wie verhalten sich AI Act und Cyber Resilience Act (CRA) zueinander?",
   "term": "Schnittstelle AI Act ↔ Cyber Resilience Act (CRA)",
   "short": "Der Cyber Resilience Act (VO 2024/2847) legt horizontale Cybersicherheitsanforderungen an Produkte mit digitalen Elementen fest – einschließlich vieler KI-Systeme.",
   "long": "Anwendbar auf Produkte mit digitalen Elementen ab Ende 2027, einschließlich Software (embedded und stand-alone). KI-Systeme können sowohl unter AI Act (als KI) als auch unter CRA (als Software-Produkt) fallen. Um Doppel-Compliance zu vermeiden, ordnet Art. 12 Abs. 3 CRA an: für KI-Systeme, die AI-Act-Anforderungen an Cybersicherheit (Art. 15) erfüllen, gelten diese als Erfüllung der einschlägigen CRA-Anforderungen. Praxis: harmonisierte Standards werden abgestimmt entwickelt. CRA bringt zusätzlich: Meldepflicht ausgenutzter Schwachstellen an ENISA, verpflichtender Support-Zeitraum, Sicherheit \"by design and by default\".",
   "links": [
    {
     "label": "CRA (VO 2024/2847)",
     "url": "https://eur-lex.europa.eu/eli/reg/2024/2847/oj"
    }
   ],
   "related": [
    "nis2-schnittstelle",
    "genauigkeit-robustheit",
    "dora",
    "un-r155",
    "supply-chain-security-ki"
   ]
  },
  {
   "id": "produkthaftung-schnittstelle",
   "cat": "governance",
   "risk": null,
   "q": "Was bedeutet die neue Produkthaftungsrichtlinie für KI-Systeme?",
   "term": "Schnittstelle AI Act ↔ Produkthaftungsrichtlinie (PLD)",
   "short": "Die neue Produkthaftungsrichtlinie (RL 2024/2853) erfasst ausdrücklich KI-Systeme und Software als Produkte – ergänzend zur öffentlich-rechtlichen AI-Act-Regulierung.",
   "long": "Die Neufassung (in Kraft seit Dezember 2024, Umsetzung bis Dezember 2026) modernisiert das seit 1985 geltende PLD-Regime für die digitale Ära. Wesentliche Neuerungen: (1) KI-Systeme und Software sind Produkte im Sinne der Richtlinie; (2) Fehlerbegriff umfasst auch Fehler aus Selbstlernen, Datenqualität, Cybersicherheit; (3) Beweiserleichterungen für Geschädigte, insbesondere bei komplexen KI-Systemen (Offenlegungspflichten, Vermutungsregeln); (4) Haftung des Herstellers auch für nachträgliche Software-Updates; (5) Verlängerte Verjährungsfristen. Verhältnis zum AI Act: Compliance mit Anbieterpflichten (v.a. Art. 9, 10, 15) senkt Haftungsrisiko, entbindet aber nicht davon.",
   "links": [
    {
     "label": "PLD (RL 2024/2853)",
     "url": "https://eur-lex.europa.eu/eli/dir/2024/2853/oj"
    }
   ],
   "related": [
    "dsgvo-schnittstelle",
    "genauigkeit-robustheit",
    "ki-haftung"
   ]
  },
  {
   "id": "urheberrecht-schnittstelle",
   "cat": "governance",
   "risk": null,
   "q": "Welche Urheberrechtspflichten legt der AI Act GPAI-Anbietern auf?",
   "term": "Schnittstelle AI Act ↔ Urheberrecht",
   "short": "Der AI Act verpflichtet GPAI-Anbieter zur Urheberrechts-Compliance (Art. 53 Abs. 1 lit. c) und zur öffentlichen Zusammenfassung der Trainingsdaten (Art. 53 Abs. 1 lit. d).",
   "long": "Zentrale Bezugspunkte: (1) Text- und Data-Mining-Ausnahme (TDM) aus Art. 3, 4 DSM-Richtlinie 2019/790 – kommerzielle Nutzung nur zulässig, wenn Rechteinhaber keinen maschinenlesbaren Vorbehalt (opt-out) erklärt haben (\"robots.txt\", \"noai\"); (2) Trainingsdaten-Zusammenfassung (Anhang XI) muss ausreichend detailliert sein, damit Rechteinhaber ihre Rechte wahrnehmen können; Vorlage der Kommission steht aus; (3) GPAI-Anbieter müssen Compliance-Strategie einschließlich Berücksichtigung von opt-outs implementieren. Rechtsstreitigkeiten in DE (LAION-Urteil des LG Hamburg 2024) und international zeigen erhebliche Rechtsunsicherheit.",
   "links": [
    {
     "label": "DSM-RL (RL 2019/790)",
     "url": "https://eur-lex.europa.eu/eli/dir/2019/790/oj"
    }
   ],
   "related": [
    "gpai",
    "generative-ai",
    "trainingsdaten-zusammenfassung",
    "model-extraction"
   ]
  },
  {
   "id": "verbraucherschutz-schnittstelle",
   "cat": "governance",
   "risk": null,
   "q": "Wie ergänzen sich AI Act und Verbraucherschutzrecht?",
   "term": "Schnittstelle AI Act ↔ Verbraucherschutz",
   "short": "AI Act und Verbraucherschutzrecht ergänzen sich – insbesondere bei generativer KI, personalisierter Werbung und Manipulation.",
   "long": "Zentrale Berührungspunkte: (1) unlautere Geschäftspraktiken (UGP-RL 2005/29/EG): irreführende oder aggressive KI-Nutzung kann untersagt werden; (2) Preistransparenz bei Personalisierung (RL 2019/2161 – Omnibus): dynamische KI-Preise müssen offengelegt werden; (3) Verbandsklage-RL 2020/1828 ermöglicht Verbraucherverbänden kollektive Klagen bei AI-Act-Verstößen; (4) Digital Fairness Act (angekündigt für 2025) wird Dark Patterns, Personalisierung und Manipulation adressieren; (5) Modernisierung der UGP-RL diskutiert Ergänzung um KI-Deepfakes. Zuständigkeiten: Verbraucherschutzbehörden vs. AI-Act-Marktüberwachungsbehörden – Koordination durch CPC-Netzwerk.",
   "links": [
    {
     "label": "UGP-RL 2005/29/EG",
     "url": "https://eur-lex.europa.eu/eli/dir/2005/29/oj"
    }
   ],
   "related": [
    "dsa-schnittstelle",
    "transparenzpflichten",
    "robo-advisor"
   ]
  },
  {
   "id": "arbeitsrecht-schnittstelle",
   "cat": "governance",
   "risk": "high",
   "q": "Wo überschneiden sich AI Act und Arbeitsrecht?",
   "term": "Schnittstelle AI Act ↔ Arbeitsrecht",
   "short": "KI im Beschäftigungskontext ist nach Anhang III Nr. 4 grundsätzlich hochrisikorelevant und wird durch nationale und europäische Arbeitsrechtsregelungen ergänzt.",
   "long": "Relevante Rechtsakte: (1) DSGVO – Verarbeitung von Beschäftigtendaten, Art. 88 DSGVO und § 26 BDSG-neu (Deutschland); (2) Plattformarbeits-RL (RL 2024/2831) – Transparenz und menschliche Aufsicht bei algorithmischem Management; (3) Betriebsverfassungsrecht: § 87 BetrVG (Mitbestimmung bei technischen Einrichtungen zur Überwachung), § 90 (Beratung bei Personalplanung mit KI); (4) Antidiskriminierungsrecht (AGG, RL 2000/78/EG); (5) Arbeitsschutz-Rahmenrichtlinie 89/391/EWG erweitert um psychische Belastung durch algorithmisches Management. Praxis: Betriebsvereinbarung zu KI-Einsatz oft zwingend, FRIA nach Art. 27 AI Act empfohlen.",
   "links": [
    {
     "label": "Plattformarbeits-RL",
     "url": "https://eur-lex.europa.eu/eli/dir/2024/2831/oj"
    }
   ],
   "related": [
    "anhang-iii",
    "dsgvo-schnittstelle",
    "fria",
    "emotionserkennung",
    "ki-beschaeftigung"
   ]
  },
  {
   "id": "wettbewerbsrecht-schnittstelle",
   "cat": "governance",
   "risk": null,
   "q": "Wie verhält sich der AI Act zum Wettbewerbsrecht?",
   "term": "Schnittstelle AI Act ↔ Wettbewerbsrecht",
   "short": "Der AI Act ersetzt nicht das Kartell- und Fusionskontrollrecht – KI-Marktkonzentration und algorithmische Absprachen bleiben wettbewerbsrechtlich relevant.",
   "long": "Berührungspunkte: (1) Marktdefinition und -macht: welche Rolle spielen Foundation Models, Rechenkapazität, Trainingsdaten? Kommissionsuntersuchungen zu OpenAI/Microsoft und Google/Anthropic seit 2024; (2) Zugang zu wesentlichen Ressourcen (\"essential facilities\") – etwa Cloud-Infrastruktur, große Datensätze; (3) algorithmische Kollusion – autonome Preisabsprache durch selbstlernende Systeme; (4) DMA-Gatekeeper-Regeln (siehe eigener Eintrag); (5) Fusionskontrolle bei KI-Startup-Übernahmen. Kommissionspolicy-Papier zu wettbewerbspolitischen Aspekten generativer KI (2024) skizziert Handlungsfelder.",
   "links": [
    {
     "label": "Commission Policy Brief on GenAI",
     "url": "https://competition-policy.ec.europa.eu/document/download/f6ed1a1b-4326-45fe-a44a-5230b1b5d5ec_en"
    }
   ],
   "related": [
    "dma-schnittstelle",
    "gpai"
   ]
  },
  {
   "id": "datenverordnung-schnittstelle",
   "cat": "governance",
   "risk": null,
   "q": "Welche Bedeutung hat die Datenverordnung (Data Act) für KI?",
   "term": "Schnittstelle AI Act ↔ Datenverordnung (Data Act)",
   "short": "Die Datenverordnung (VO 2023/2854) regelt Zugang zu und Nutzung von Daten – wichtig für Trainingsdatenverfügbarkeit und B2B-Datenteilung im KI-Kontext.",
   "long": "Anwendbar seit 12. September 2025. Kernelemente mit KI-Bezug: (1) Zugangsrechte zu vernetzten Produkten (IoT) und deren Daten – potenzielle Trainingsdatenquelle; (2) faire Vertragsbedingungen für Datenteilung zwischen Unternehmen; (3) Datenverfügbarkeit für öffentliche Stellen in Ausnahmesituationen; (4) Interoperabilitätsanforderungen für Datenaustauschdienste. Für KI-Anbieter relevant: Zugang zu Daten aus vernetzten Produkten (Autos, Maschinen, Sensoren) kann Trainingsgrundlage werden. Ergänzt Datenraum-Initiativen der EU (Gesundheitsdatenraum, Mobilitätsdatenraum etc.). Data Governance Act (VO 2022/868) regelt vertrauenswürdige Datenvermittlung.",
   "links": [
    {
     "label": "Data Act (VO 2023/2854)",
     "url": "https://eur-lex.europa.eu/eli/reg/2023/2854/oj"
    }
   ],
   "related": [
    "daten-governance",
    "dsgvo-schnittstelle",
    "v2x",
    "supply-chain-ki"
   ]
  },
  {
   "id": "eu-konformitaetserklaerung",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was ist eine EU-Konformitätserklärung?",
   "term": "EU-Konformitätserklärung",
   "short": "Formelle Erklärung des Anbieters, dass ein Hochrisiko-System die Anforderungen des AI Act erfüllt (Art. 47, Anhang V).",
   "long": "Die EU-Konformitätserklärung ist Voraussetzung für die CE-Kennzeichnung und das Inverkehrbringen. Anhang V listet Mindestangaben: Name und Kontaktdaten des Anbieters oder Bevollmächtigten, KI-System-Identifikation, Erklärung der alleinigen Verantwortung, Angabe zur Konformität mit AI Act und weiteren Unionsrechtsakten, Verweis auf angewandte harmonisierte Normen oder gemeinsame Spezifikationen, ggf. Name und Kennnummer der notifizierten Stelle, Datum und Ort der Ausstellung, Unterschrift. Aufbewahrung: 10 Jahre. Bei mehreren einschlägigen Rechtsakten: eine einzige Erklärung mit Verweisen auf alle Akte zulässig (Art. 47 Abs. 3).",
   "links": [
    {
     "label": "Art. 47 AI Act",
     "url": "https://artificialintelligenceact.eu/article/47/"
    }
   ],
   "related": [
    "ce-kennzeichnung",
    "konformitaetsbewertung",
    "technische-dokumentation",
    "konformitaetsbewertungsverfahren"
   ]
  },
  {
   "id": "gemeinsame-spezifikationen",
   "cat": "governance",
   "risk": null,
   "q": "Was sind gemeinsame Spezifikationen im AI Act?",
   "term": "Gemeinsame Spezifikationen",
   "short": "Von der Kommission per Durchführungsrechtsakt erlassene technische Spezifikationen als Alternative zu harmonisierten Normen (Art. 41).",
   "long": "Auslöser: Wenn harmonisierte Normen für den AI Act nicht rechtzeitig, nicht angemessen oder nicht ausreichend sind, kann die Kommission gemeinsame Spezifikationen erlassen. Vorher: Konsultation des AI Board, betroffene Mitgliedstaaten, Stakeholder. Rechtsfolge: Anbieter, die den Spezifikationen entsprechen, genießen ebenfalls Konformitätsvermutung. Zurücknahme durch die Kommission möglich, sobald harmonisierte Normen vorliegen. Praxisrelevanz: Rückversicherung für den Fall, dass CEN/CENELEC JTC 21 nicht rechtzeitig liefert – Erstanwendung ab 2.8.2026 (Hochrisiko-Regeln) im Blick.",
   "links": [
    {
     "label": "Art. 41 AI Act",
     "url": "https://artificialintelligenceact.eu/article/41/"
    }
   ],
   "related": [
    "harmonisierte-normen",
    "konformitaetsbewertung"
   ]
  },
  {
   "id": "biometrische-identifizierung",
   "cat": "cv",
   "risk": "high",
   "q": "Was ist biometrische Fernidentifizierung?",
   "term": "Biometrische Fernidentifizierung",
   "short": "Automatisierte Erkennung natürlicher Personen anhand biometrischer Merkmale auf Distanz, ohne aktive Mitwirkung – Hochrisiko nach Anhang III Nr. 1 lit. a.",
   "long": "Unterschieden wird zwischen Echtzeit-Fernidentifizierung (Erfassung, Abgleich und Identifizierung ohne wesentliche Verzögerung, teils sofort) und nachträglicher Fernidentifizierung (zeitlich versetzt). Echtzeit-Nutzung im öffentlichen Raum für Strafverfolgung ist grundsätzlich verboten (Art. 5 Abs. 1 lit. h), mit eng begrenzten Ausnahmen. Nachträgliche Fernidentifizierung gilt als Hochrisiko-System und erfordert richterliche oder behördliche Genehmigung. Abzugrenzen von biometrischer Verifizierung (1:1-Abgleich, z. B. Entsperren eines Geräts), die nicht als Fernidentifizierung gilt.",
   "links": [
    {
     "label": "Anhang III",
     "url": "https://artificialintelligenceact.eu/annex/3/"
    }
   ],
   "related": [
    "gesichtserkennung",
    "biometrische-verifizierung",
    "verbotene-praktiken",
    "anhang-iii",
    "biometrische-kategorisierung"
   ]
  },
  {
   "id": "biometrische-kategorisierung",
   "cat": "cv",
   "risk": "high",
   "q": "Was ist biometrische Kategorisierung, und wann ist sie verboten?",
   "term": "Biometrische Kategorisierung",
   "short": "Zuordnung natürlicher Personen zu Kategorien anhand biometrischer Daten (z. B. Alter, Geschlecht) – teils Hochrisiko, teils verboten.",
   "long": "Hochrisiko nach Anhang III Nr. 1 lit. b, sofern nicht ohnehin verboten. Verboten (Art. 5 Abs. 1 lit. g) ist die Kategorisierung, die sensible Merkmale ableitet oder erschließt: Rasse, politische Meinung, Gewerkschaftszugehörigkeit, religiöse/weltanschauliche Überzeugung, Sexualleben oder sexuelle Orientierung. Ausnahme: rechtmäßig erworbene Datensätze im Strafverfolgungskontext. Nicht erfasst: rein technische Kategorisierung zur Bildbearbeitung. Zusätzlich greift die DSGVO (Art. 9 – besondere Kategorien personenbezogener Daten).",
   "links": [
    {
     "label": "Art. 5 AI Act",
     "url": "https://artificialintelligenceact.eu/article/5/"
    }
   ],
   "related": [
    "biometrische-identifizierung",
    "verbotene-praktiken",
    "emotionserkennung"
   ]
  },
  {
   "id": "emotionserkennung",
   "cat": "cv",
   "risk": "high",
   "q": "Was ist ein Emotionserkennungssystem, und wo ist es verboten?",
   "term": "Emotionserkennungssystem",
   "short": "KI-System zur Erkennung oder Ableitung von Emotionen oder Absichten natürlicher Personen anhand biometrischer Daten (Art. 3 Nr. 39).",
   "long": "Am Arbeitsplatz und in Bildungseinrichtungen grundsätzlich verboten (Art. 5 Abs. 1 lit. f), außer aus medizinischen oder sicherheitsbezogenen Gründen (z. B. Müdigkeitserkennung bei Piloten). In anderen Kontexten Hochrisiko nach Anhang III Nr. 1 lit. c mit Transparenzpflicht nach Art. 50 Abs. 3. Wissenschaftlich umstritten: Die Ableitung innerer Zustände aus Mimik, Stimme oder Körperhaltung gilt als methodisch unzuverlässig. Nicht erfasst: reine Erkennung offensichtlicher Ausdrücke wie Lächeln ohne Ableitung emotionaler Zustände.",
   "links": [
    {
     "label": "Art. 5 AI Act",
     "url": "https://artificialintelligenceact.eu/article/5/"
    }
   ],
   "related": [
    "biometrische-kategorisierung",
    "verbotene-praktiken",
    "arbeitsrecht-schnittstelle",
    "ki-bildung",
    "proctoring"
   ]
  },
  {
   "id": "biometrische-verifizierung",
   "cat": "cv",
   "risk": null,
   "q": "Was ist biometrische Verifizierung, und wie unterscheidet sie sich von Identifizierung?",
   "term": "Biometrische Verifizierung",
   "short": "Abgleich der biometrischen Daten einer Person mit einem einzelnen gespeicherten Referenzdatensatz zur Bestätigung der Identität (1:1-Abgleich).",
   "long": "Anders als die Fernidentifizierung (1:n-Abgleich gegen eine Datenbank) ist die Verifizierung typischerweise kein Hochrisiko-System, da sie aktive Mitwirkung und Einwilligung voraussetzt. Beispiele: Entsperren des Smartphones per Gesicht oder Fingerabdruck, Zugangskontrolle mit bewusster Vorlage. Der AI Act nimmt die reine Verifizierung ausdrücklich vom Hochrisiko-Bereich aus (Erwägungsgrund 15/54). DSGVO bleibt anwendbar: biometrische Daten sind besondere Kategorien (Art. 9).",
   "links": [
    {
     "label": "Anhang III",
     "url": "https://artificialintelligenceact.eu/annex/3/"
    }
   ],
   "related": [
    "biometrische-identifizierung",
    "gesichtserkennung"
   ]
  },
  {
   "id": "kritische-infrastruktur",
   "cat": "ai-act-core",
   "risk": "high",
   "q": "Wann ist KI in kritischer Infrastruktur hochriskant?",
   "term": "KI in kritischer Infrastruktur",
   "short": "Sicherheitskomponenten von KI-Systemen im Management und Betrieb kritischer Infrastruktur – Hochrisiko nach Anhang III Nr. 2.",
   "long": "Erfasst sind Sicherheitsbauteile in der Verwaltung und im Betrieb kritischer digitaler Infrastruktur, des Straßenverkehrs sowie der Versorgung mit Wasser, Gas, Wärme und Strom. Zweck: Ausfälle oder Fehlfunktionen können Leben und Gesundheit vieler Menschen gefährden. Abgrenzung: reine Verwaltungs-KI ohne Sicherheitsrelevanz fällt nicht darunter. Enger Bezug zur NIS-2-Richtlinie (Cybersicherheit kritischer Einrichtungen) und zur CER-Richtlinie (Resilienz kritischer Einrichtungen). Sonderregel für das Erklärungsrecht: bei Anhang III Nr. 2 kein individueller Erklärungsanspruch (Art. 86 Abs. 3).",
   "links": [
    {
     "label": "Anhang III",
     "url": "https://artificialintelligenceact.eu/annex/3/"
    }
   ],
   "related": [
    "anhang-iii",
    "nis2-schnittstelle",
    "sicherheitsbauteil",
    "notruf-triage",
    "verkehrsmanagement-ki"
   ]
  },
  {
   "id": "ki-bildung",
   "cat": "ai-act-core",
   "risk": "high",
   "q": "Welche KI-Systeme in der Bildung gelten als Hochrisiko?",
   "term": "KI in allgemeiner und beruflicher Bildung",
   "short": "KI-Systeme für Zugang, Bewertung und Steuerung in Bildungseinrichtungen – Hochrisiko nach Anhang III Nr. 3.",
   "long": "Vier erfasste Anwendungsfälle: (a) Entscheidung über Zugang oder Zuweisung zu Bildungseinrichtungen; (b) Bewertung von Lernergebnissen, auch zur Steuerung des Lernprozesses; (c) Bewertung des angemessenen Bildungsniveaus einer Person; (d) Überwachung und Erkennung unzulässigen Verhaltens bei Prüfungen (Proctoring). Begründung: Bildungsentscheidungen prägen Lebenswege und Zugangschancen. Häufig Überschneidung mit DSGVO (Minderjährigenschutz) und Emotionserkennungsverbot (Art. 5). FRIA für öffentliche Bildungseinrichtungen verpflichtend (Art. 27).",
   "links": [
    {
     "label": "Anhang III",
     "url": "https://artificialintelligenceact.eu/annex/3/"
    }
   ],
   "related": [
    "proctoring",
    "anhang-iii",
    "emotionserkennung",
    "vulnerable-gruppen"
   ]
  },
  {
   "id": "proctoring",
   "cat": "ai-act-core",
   "risk": "high",
   "q": "Was ist Proctoring, und wie stuft der AI Act es ein?",
   "term": "Prüfungsüberwachung (Proctoring)",
   "short": "KI-gestützte Überwachung von Prüfungen zur Erkennung von Täuschungsversuchen – Hochrisiko nach Anhang III Nr. 3 lit. d.",
   "long": "Proctoring-Systeme analysieren Video, Audio, Blickrichtung, Tastatureingaben und Umgebung, um unzulässiges Verhalten zu erkennen. Rechtlich heikel: Kombination aus Überwachung, oft biometrischer Analyse und potenzieller Emotionserkennung (verboten in Bildung nach Art. 5). Datenschutzrechtlich problematisch (Videoüberwachung im Privatraum der Prüflinge), diskriminierungsanfällig (Fehlerkennung bei dunkler Haut, neurodivergentem Verhalten). Mehrere europäische Gerichte haben Proctoring-Einsatz eingeschränkt. Menschliche Aufsicht (Art. 14) und FRIA besonders relevant.",
   "links": [
    {
     "label": "Anhang III",
     "url": "https://artificialintelligenceact.eu/annex/3/"
    }
   ],
   "related": [
    "ki-bildung",
    "emotionserkennung",
    "menschliche-aufsicht"
   ]
  },
  {
   "id": "ki-beschaeftigung",
   "cat": "ai-act-core",
   "risk": "high",
   "q": "Welche KI-Systeme im Personalbereich gelten als Hochrisiko?",
   "term": "KI in Beschäftigung und Personalmanagement",
   "short": "KI-Systeme für Personalauswahl und Personalführung – Hochrisiko nach Anhang III Nr. 4.",
   "long": "Zwei erfasste Kategorien: (a) Einstellung und Auswahl – gezielte Stellenanzeigen, Analyse und Filterung von Bewerbungen, Bewertung von Bewerbern; (b) Entscheidungen über Arbeitsbedingungen, Beförderung, Kündigung, Aufgabenzuweisung anhand von Verhalten oder persönlichen Eigenschaften, sowie Leistungs- und Verhaltensüberwachung. Begründung: erhebliche Auswirkungen auf Berufschancen und Existenzgrundlage. Enge Verzahnung mit Arbeitsrecht, Mitbestimmung (§ 87 BetrVG), Antidiskriminierungsrecht (AGG) und Plattformarbeits-Richtlinie. FRIA für viele Betreiber verpflichtend.",
   "links": [
    {
     "label": "Anhang III",
     "url": "https://artificialintelligenceact.eu/annex/3/"
    }
   ],
   "related": [
    "cv-screening",
    "algorithmisches-management",
    "arbeitsrecht-schnittstelle",
    "anhang-iii",
    "people-analytics"
   ]
  },
  {
   "id": "cv-screening",
   "cat": "ai-act-core",
   "risk": "high",
   "q": "Was ist automatisiertes Bewerber-Screening, und wie ist es eingestuft?",
   "term": "Automatisiertes Bewerber-Screening",
   "short": "KI-gestützte Analyse, Filterung und Rangordnung von Bewerbungen – Hochrisiko nach Anhang III Nr. 4 lit. a.",
   "long": "Systeme scannen Lebensläufe, extrahieren Merkmale, gleichen sie mit Anforderungsprofilen ab und erstellen Ranglisten. Berühmtes Negativbeispiel: Amazons Recruiting-KI benachteiligte Frauen, weil sie aus historischen Einstellungsdaten lernte. Zentrale Risiken: Proxy-Diskriminierung (scheinbar neutrale Merkmale korrelieren mit geschützten Eigenschaften), fehlende Nachvollziehbarkeit, Automatisierungsbias der Recruiter. Pflichten: Daten-Governance (Art. 10), Bias-Prüfung, menschliche Aufsicht (Art. 14), Transparenz gegenüber Bewerbern, FRIA.",
   "links": [
    {
     "label": "Anhang III",
     "url": "https://artificialintelligenceact.eu/annex/3/"
    }
   ],
   "related": [
    "ki-beschaeftigung",
    "bias",
    "fairness",
    "skills-matching"
   ]
  },
  {
   "id": "algorithmisches-management",
   "cat": "ai-act-core",
   "risk": "high",
   "q": "Was ist algorithmisches Management?",
   "term": "Algorithmisches Management",
   "short": "Steuerung, Bewertung und Überwachung von Beschäftigten durch KI-Systeme, insbesondere in der Plattformarbeit – Hochrisiko nach Anhang III Nr. 4 lit. b.",
   "long": "Umfasst automatisierte Aufgabenzuweisung, Leistungsbewertung in Echtzeit, dynamische Bezahlung, Kündigungsentscheidungen und Verhaltensüberwachung. Typisch bei Liefer- und Fahrdiensten (Gig Economy). Ergänzend zur AI-Act-Einstufung greift die Plattformarbeits-Richtlinie (RL 2024/2831): Transparenzpflichten über eingesetzte Systeme, Recht auf menschliche Überprüfung wichtiger Entscheidungen, Verbot der Verarbeitung bestimmter Daten (emotionaler Zustand, private Gespräche). Menschliche Aufsicht und Mitbestimmung sind zentrale Compliance-Hebel.",
   "links": [
    {
     "label": "Plattformarbeits-RL",
     "url": "https://eur-lex.europa.eu/eli/dir/2024/2831/oj"
    }
   ],
   "related": [
    "ki-beschaeftigung",
    "arbeitsrecht-schnittstelle",
    "workforce-planning"
   ]
  },
  {
   "id": "kreditwuerdigkeit",
   "cat": "ai-act-core",
   "risk": "high",
   "q": "Wie stuft der AI Act KI zur Kreditwürdigkeitsprüfung ein?",
   "term": "Kreditwürdigkeitsprüfung (Credit Scoring)",
   "short": "KI-Systeme zur Bewertung der Kreditwürdigkeit oder Bonität natürlicher Personen – Hochrisiko nach Anhang III Nr. 5 lit. b.",
   "long": "Erfasst die Bewertung der Kreditwürdigkeit und die Erstellung von Bonitäts-Scores, mit Ausnahme der Betrugserkennung bei Finanzdienstleistungen. Betrifft Banken, Kreditvermittler, teils Telekommunikations- und Versorgungsunternehmen. Berühmte Fälle diskriminierender Scores (Apple Card, SCHUFA-Verfahren vor dem EuGH 2023). Enge Verzahnung mit DSGVO Art. 22 (automatisierte Einzelentscheidung), Verbraucherkreditrichtlinie und Antidiskriminierungsrecht. Betroffene haben Anspruch auf Erklärung (Art. 86). Daten-Governance und Bias-Prüfung besonders kritisch.",
   "links": [
    {
     "label": "Anhang III",
     "url": "https://artificialintelligenceact.eu/annex/3/"
    }
   ],
   "related": [
    "versicherung-scoring",
    "sozialleistungen",
    "erklaerungsrecht",
    "anhang-iii",
    "profiling"
   ]
  },
  {
   "id": "versicherung-scoring",
   "cat": "ai-act-core",
   "risk": "high",
   "q": "Welche KI-Risikobewertung in Versicherungen gilt als Hochrisiko?",
   "term": "Risikobewertung in der Versicherung",
   "short": "KI-Systeme für Risikobewertung und Preisgestaltung in der Lebens- und Krankenversicherung – Hochrisiko nach Anhang III Nr. 5 lit. c.",
   "long": "Ausdrücklich erfasst sind Lebens- und Krankenversicherung, weil fehlerhafte oder diskriminierende Bewertungen den Zugang zu existenziell wichtigem Schutz verwehren können. Risiken: Nutzung sensibler Gesundheits- oder Verhaltensdaten, Proxy-Diskriminierung, Entsolidarisierung durch hochgranulare Individualtarife. Verzahnung mit DSGVO (Gesundheitsdaten, Art. 9), Versicherungsvertragsrecht, Antidiskriminierungsrecht (Verbot der Geschlechtsdifferenzierung nach EuGH Test-Achats). Andere Versicherungssparten (Kfz, Haftpflicht) sind nicht per se hochrisikorelevant.",
   "links": [
    {
     "label": "Anhang III",
     "url": "https://artificialintelligenceact.eu/annex/3/"
    }
   ],
   "related": [
    "kreditwuerdigkeit",
    "bias",
    "insurtech"
   ]
  },
  {
   "id": "sozialleistungen",
   "cat": "ai-act-core",
   "risk": "high",
   "q": "Wie behandelt der AI Act KI bei öffentlichen Sozialleistungen?",
   "term": "KI bei öffentlichen Sozialleistungen",
   "short": "KI-Systeme für Bewilligung, Kürzung oder Rückforderung wesentlicher öffentlicher Unterstützungsleistungen – Hochrisiko nach Anhang III Nr. 5 lit. a.",
   "long": "Erfasst Entscheidungen über Anspruch, Gewährung, Reduzierung, Widerruf oder Rückforderung von Sozialleistungen und -diensten, einschließlich Gesundheitsdiensten. Warnendes Beispiel: der niederländische SyRI-Skandal und die Kindergeld-Affäre (toeslagenaffaire), bei der ein Betrugserkennungssystem Tausende Familien zu Unrecht ruinierte. Betrifft Behörden im öffentlichen Sektor mit verpflichtender FRIA (Art. 27). Grundrechtssensibel: Zugang zu existenzsichernden Leistungen. Erklärungsrecht (Art. 86) und Beschwerderecht (Art. 85) besonders relevant.",
   "links": [
    {
     "label": "Anhang III",
     "url": "https://artificialintelligenceact.eu/annex/3/"
    }
   ],
   "related": [
    "kreditwuerdigkeit",
    "fria",
    "erklaerungsrecht"
   ]
  },
  {
   "id": "notruf-triage",
   "cat": "ai-act-core",
   "risk": "high",
   "q": "Wie stuft der AI Act KI in Notdiensten und Triage ein?",
   "term": "KI in Notdiensten und Triage",
   "short": "KI-Systeme zur Disposition von Notdiensten und zur Priorisierung von Hilfeleistungen – Hochrisiko nach Anhang III Nr. 5 lit. d.",
   "long": "Erfasst sind KI-Systeme, die den Einsatz von Notfall- und Rettungsdiensten steuern oder bei der Priorisierung von Notrufen (Triage) eingesetzt werden – Feuerwehr, Rettungsdienst, medizinische Erstversorgung. Fehlfunktionen können unmittelbar lebensbedrohlich sein. Besondere Anforderungen an Genauigkeit, Robustheit (Art. 15) und menschliche Aufsicht. Häufig Überschneidung mit Medizinprodukterecht (MDR), wenn die KI als Medizinprodukt eingestuft wird. Zusätzliche Sensibilität durch Priorisierungsentscheidungen über Menschenleben.",
   "links": [
    {
     "label": "Anhang III",
     "url": "https://artificialintelligenceact.eu/annex/3/"
    }
   ],
   "related": [
    "kritische-infrastruktur",
    "mdr-schnittstelle"
   ]
  },
  {
   "id": "ki-strafverfolgung",
   "cat": "ai-act-core",
   "risk": "high",
   "q": "Welche Regeln gelten für KI in der Strafverfolgung?",
   "term": "KI in der Strafverfolgung",
   "short": "KI-Systeme, die von Strafverfolgungsbehörden zur Risikobewertung, Beweisauswertung und Profilerstellung eingesetzt werden – Hochrisiko nach Anhang III Nr. 6.",
   "long": "Erfasst sind u. a.: Risikobewertung natürlicher Personen als potenzielle Opfer oder Täter, Lügendetektoren, Beweismittelbewertung, Bewertung der Zuverlässigkeit von Beweisen, Rückfallprognosen und Profiling im Rahmen von Aufklärung und Verfolgung. Grundrechtssensibelster Bereich neben Biometrie. Zusätzliche Schutzmaßnahmen und teils eingeschränkte Registrierungspflichten (nicht-öffentlicher Teil der EU-Datenbank). Enge Grenzen durch die Grundrechtecharta, EMRK und die Datenschutz-Richtlinie für Justiz und Inneres (RL 2016/680, JI-Richtlinie).",
   "links": [
    {
     "label": "Anhang III",
     "url": "https://artificialintelligenceact.eu/annex/3/"
    }
   ],
   "related": [
    "predictive-policing",
    "biometrische-identifizierung",
    "anhang-iii",
    "profiling",
    "ki-migration"
   ]
  },
  {
   "id": "predictive-policing",
   "cat": "ai-act-core",
   "risk": "prohibited",
   "q": "Was ist Predictive Policing, und wann ist es verboten?",
   "term": "Predictive Policing (vorhersagende Polizeiarbeit)",
   "short": "Vorhersage von Straftaten – rein profilbasiert gegenüber Einzelpersonen verboten (Art. 5 Abs. 1 lit. d), ortsbezogen teils als Hochrisiko zulässig.",
   "long": "Verboten ist die Risikobewertung natürlicher Personen ausschließlich auf Basis von Profiling oder Persönlichkeitsmerkmalen, um die Wahrscheinlichkeit einer Straftat vorherzusagen (Art. 5 Abs. 1 lit. d). Ausnahme: Systeme, die menschliche Bewertungen auf Basis objektiver, überprüfbarer und mit der Straftat zusammenhängender Fakten unterstützen. Ortsbezogene Vorhersage (Hotspot-Mapping) ist nicht per se verboten, kann aber als Hochrisiko-System der Strafverfolgung gelten. Kritik: Rückkopplungseffekte verstärken bestehende Diskriminierung in Polizeidaten (over-policing).",
   "links": [
    {
     "label": "Art. 5 AI Act",
     "url": "https://artificialintelligenceact.eu/article/5/"
    }
   ],
   "related": [
    "ki-strafverfolgung",
    "verbotene-praktiken",
    "profiling"
   ]
  },
  {
   "id": "ki-migration",
   "cat": "ai-act-core",
   "risk": "high",
   "q": "Wie behandelt der AI Act KI in Migration, Asyl und Grenzkontrolle?",
   "term": "KI in Migration, Asyl und Grenzkontrolle",
   "short": "KI-Systeme in der Migrations-, Asyl- und Grenzverwaltung – Hochrisiko nach Anhang III Nr. 7.",
   "long": "Erfasst sind u. a.: Lügendetektoren und ähnliche Werkzeuge, Risikobewertung von Personen, die einreisen wollen, Prüfung von Anträgen auf Asyl, Visum und Aufenthaltstitel einschließlich Bewertung der Beweismittel, Erkennung und Identifizierung im Migrationskontext. Grundrechtssensibel wegen vulnerabler Betroffener und existenzieller Folgen. Umstritten: Einsatz an EU-Außengrenzen (z. B. das iBorderCtrl-Pilotprojekt). Enge Grenzen durch Asyl- und Migrationsrecht, Grundrechtecharta und Non-Refoulement-Prinzip. Teils reduzierte Registrierungspflichten.",
   "links": [
    {
     "label": "Anhang III",
     "url": "https://artificialintelligenceact.eu/annex/3/"
    }
   ],
   "related": [
    "ki-strafverfolgung",
    "anhang-iii",
    "biometrische-identifizierung"
   ]
  },
  {
   "id": "ki-justiz",
   "cat": "ai-act-core",
   "risk": "high",
   "q": "Wie stuft der AI Act KI in der Rechtspflege ein?",
   "term": "KI in der Rechtspflege",
   "short": "KI-Systeme, die Justizbehörden bei der Auslegung von Fakten und Recht unterstützen – Hochrisiko nach Anhang III Nr. 8 lit. a.",
   "long": "Erfasst sind Systeme, die eine Justizbehörde bei der Recherche, Auslegung von Sachverhalten und Rechtsnormen sowie der Anwendung des Rechts auf konkrete Sachverhalte unterstützen, sowie vergleichbarer Einsatz in der alternativen Streitbeilegung. Ziel: Schutz der richterlichen Unabhängigkeit und des Anspruchs auf ein faires Verfahren (Art. 47 GRC). Nicht erfasst: rein administrative Hilfstätigkeiten wie Anonymisierung oder Aktenverwaltung. Warnendes Beispiel: das COMPAS-System in den USA (rassistische Verzerrung bei Rückfallprognosen). Menschliche Letztentscheidung bleibt zwingend.",
   "links": [
    {
     "label": "Anhang III",
     "url": "https://artificialintelligenceact.eu/annex/3/"
    }
   ],
   "related": [
    "ki-strafverfolgung",
    "menschliche-aufsicht",
    "anhang-iii",
    "legaltech"
   ]
  },
  {
   "id": "ki-wahlen",
   "cat": "ai-act-core",
   "risk": "high",
   "q": "Wie behandelt der AI Act KI zur Beeinflussung von Wahlen?",
   "term": "KI zur Wahlbeeinflussung",
   "short": "KI-Systeme, die das Wahlverhalten oder den Ausgang von Wahlen und Referenden beeinflussen können – Hochrisiko nach Anhang III Nr. 8 lit. b.",
   "long": "Erfasst sind Systeme, die eingesetzt werden, um das Ergebnis einer Wahl oder eines Referendums oder das Wahlverhalten natürlicher Personen zu beeinflussen. Ausnahme: Systeme, deren Output natürliche Personen nicht direkt ausgesetzt sind (z. B. reine Kampagnen-Organisationstools). Hintergrund: Cambridge-Analytica-Skandal, Mikrotargeting, KI-generierte Desinformation und Deepfakes im Wahlkampf. Verzahnung mit DSA (systemische Risiken von Plattformen), der Verordnung über politische Werbung und dem Verbot manipulativer Praktiken (Art. 5).",
   "links": [
    {
     "label": "Anhang III",
     "url": "https://artificialintelligenceact.eu/annex/3/"
    }
   ],
   "related": [
    "deepfake",
    "dsa-schnittstelle",
    "manipulative-praktiken"
   ]
  },
  {
   "id": "hochrisiko-ausnahme",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Wann ist ein System aus Anhang III ausnahmsweise kein Hochrisiko-System?",
   "term": "Ausnahme von der Hochrisiko-Einstufung (Art. 6 Abs. 3)",
   "short": "Ein System aus Anhang III gilt nicht als hochrisikorelevant, wenn es kein erhebliches Risiko für Gesundheit, Sicherheit oder Grundrechte darstellt.",
   "long": "Vier Fallgruppen, in denen die Hochrisiko-Vermutung entfällt: (a) das System führt nur eine eng begrenzte Verfahrensaufgabe aus; (b) es verbessert lediglich das Ergebnis einer zuvor abgeschlossenen menschlichen Tätigkeit; (c) es erkennt Entscheidungsmuster oder Abweichungen, ohne die menschliche Bewertung ohne angemessene Überprüfung zu ersetzen; (d) es bereitet eine Bewertung nur vor. Wichtig: Profiling natürlicher Personen gilt immer als Hochrisiko. Wer die Ausnahme nutzt, muss dies dokumentieren und registrieren – die Behörde kann widersprechen. Kommissionsleitlinien konkretisieren die Anwendung.",
   "links": [
    {
     "label": "Art. 6 AI Act",
     "url": "https://artificialintelligenceact.eu/article/6/"
    }
   ],
   "related": [
    "hochrisiko-ki",
    "profiling",
    "anhang-iii"
   ]
  },
  {
   "id": "profiling",
   "cat": "ai-act-core",
   "risk": "high",
   "q": "Was ist Profiling, und welche Folge hat es für die Hochrisiko-Einstufung?",
   "term": "Profiling",
   "short": "Automatisierte Verarbeitung personenbezogener Daten zur Bewertung persönlicher Aspekte einer natürlichen Person – stets hochrisikorelevant im Anhang-III-Kontext.",
   "long": "Der Begriff folgt Art. 4 Nr. 4 DSGVO: automatisierte Auswertung, um Aspekte wie Arbeitsleistung, wirtschaftliche Lage, Gesundheit, Vorlieben, Verhalten, Aufenthaltsort oder Bewegungen zu analysieren oder vorherzusagen. Im AI Act zentral: Führt ein Anhang-III-System Profiling durch, kann es die Hochrisiko-Ausnahme nach Art. 6 Abs. 3 nicht in Anspruch nehmen – es bleibt immer hochrisikorelevant. Enge Verzahnung mit DSGVO Art. 22 (automatisierte Einzelentscheidung) und dem Erklärungsrecht (Art. 86 AI Act).",
   "links": [
    {
     "label": "Art. 6 AI Act",
     "url": "https://artificialintelligenceact.eu/article/6/"
    }
   ],
   "related": [
    "hochrisiko-ausnahme",
    "kreditwuerdigkeit",
    "dsgvo-schnittstelle",
    "ki-strafverfolgung",
    "predictive-policing"
   ]
  },
  {
   "id": "sicherheitsbauteil",
   "cat": "ai-act-core",
   "risk": "high",
   "q": "Was ist ein Sicherheitsbauteil im Sinne des AI Act?",
   "term": "Sicherheitsbauteil",
   "short": "Bestandteil eines Produkts oder Systems, dessen Ausfall die Gesundheit oder Sicherheit von Personen gefährdet (Art. 3 Nr. 14).",
   "long": "Ist ein KI-System ein Sicherheitsbauteil eines Produkts, das unter die Unionsharmonisierungsrechtsakte in Anhang I fällt (z. B. Maschine, Medizinprodukt, Aufzug), oder ist es selbst ein solches Produkt, gilt es als Hochrisiko-System (Art. 6 Abs. 1). Beispiele: KI-Bremsassistent im Fahrzeug, KI-Steuerung eines Operationsroboters, KI-Kollisionsschutz einer Maschine. Die Konformitätsbewertung erfolgt integriert nach dem jeweiligen Sektorrecht. Abgrenzung: rein komfort- oder effizienzorientierte KI ohne Sicherheitsrelevanz ist kein Sicherheitsbauteil.",
   "links": [
    {
     "label": "Art. 6 AI Act",
     "url": "https://artificialintelligenceact.eu/article/6/"
    }
   ],
   "related": [
    "anhang-i",
    "mdr-schnittstelle",
    "hochrisiko-ki",
    "kritische-infrastruktur",
    "samd"
   ]
  },
  {
   "id": "verwendungszweck",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was bedeutet „Zweckbestimmung“ (Intended Purpose)?",
   "term": "Zweckbestimmung (Intended Purpose)",
   "short": "Die vom Anbieter festgelegte bestimmungsgemäße Verwendung eines KI-Systems, einschließlich Kontext und Bedingungen (Art. 3 Nr. 12).",
   "long": "Die Zweckbestimmung ist Angelpunkt der Risikoklassifizierung: Ob ein System hochrisikorelevant ist, hängt maßgeblich vom vorgesehenen Verwendungszweck ab. Der Anbieter legt ihn in der Gebrauchsanweisung fest. Ändert ein Betreiber den Zweck so, dass daraus ein Hochrisiko-System wird, wird er selbst zum Anbieter (Provider Flip, Art. 25). Abzugrenzen von der vernünftigerweise vorhersehbaren Fehlanwendung (Art. 3 Nr. 13), die im Risikomanagement (Art. 9) ebenfalls berücksichtigt werden muss.",
   "links": [
    {
     "label": "Art. 3 AI Act",
     "url": "https://artificialintelligenceact.eu/article/3/"
    }
   ],
   "related": [
    "provider-flip",
    "gebrauchsanweisung",
    "hochrisiko-ki"
   ]
  },
  {
   "id": "vulnerable-gruppen",
   "cat": "ethics",
   "risk": null,
   "q": "Wie schützt der AI Act vulnerable Gruppen?",
   "term": "Schutz vulnerabler Gruppen",
   "short": "Der AI Act schützt besonders schutzbedürftige Personen vor Ausnutzung durch KI-Systeme – Kinder, ältere Menschen, Menschen mit Behinderung, wirtschaftlich Schwache.",
   "long": "Verboten ist die Ausnutzung der Vulnerabilität aufgrund von Alter, Behinderung oder sozialer/wirtschaftlicher Lage, um das Verhalten so zu beeinflussen, dass erheblicher Schaden entsteht (Art. 5 Abs. 1 lit. b). Ergänzend: Das Risikomanagement für Hochrisiko-KI muss besonders die Auswirkungen auf Kinder und vulnerable Gruppen berücksichtigen (Art. 9 Abs. 9), und die Datenqualität (Art. 10) muss gruppenspezifische Verzerrungen adressieren. Verzahnung mit der Barrierefreiheitsrichtlinie (European Accessibility Act) und Minderjährigenschutz in der DSGVO.",
   "links": [
    {
     "label": "Art. 5 AI Act",
     "url": "https://artificialintelligenceact.eu/article/5/"
    }
   ],
   "related": [
    "manipulative-praktiken",
    "verbotene-praktiken",
    "ki-bildung"
   ]
  },
  {
   "id": "manipulative-praktiken",
   "cat": "ai-act-core",
   "risk": "prohibited",
   "q": "Wann sind manipulative und täuschende KI-Techniken verboten?",
   "term": "Manipulative und täuschende Techniken",
   "short": "KI-Systeme, die unterschwellige, manipulative oder täuschende Techniken einsetzen, um das Verhalten erheblich zu verzerren – verboten nach Art. 5 Abs. 1 lit. a.",
   "long": "Verboten ist der Einsatz von Techniken, die außerhalb des Bewusstseins wirken oder gezielt manipulieren oder täuschen, mit dem Ergebnis oder dem Ziel, das Verhalten wesentlich zu beeinflussen und dadurch erheblichen Schaden zu verursachen. Umfasst z. B. subliminale Reize oder KI-gestützte Dark Patterns, die informierte Entscheidungen untergraben. Abgrenzung: übliche, rechtmäßige Werbung und Überzeugung bleiben zulässig. Verzahnung mit Verbraucherschutzrecht (UGP-Richtlinie), DSA und dem geplanten Digital Fairness Act.",
   "links": [
    {
     "label": "Art. 5 AI Act",
     "url": "https://artificialintelligenceact.eu/article/5/"
    }
   ],
   "related": [
    "verbotene-praktiken",
    "vulnerable-gruppen",
    "ki-wahlen",
    "digital-omnibus"
   ]
  },
  {
   "id": "scraping-gesichtsbilder",
   "cat": "cv",
   "risk": "prohibited",
   "q": "Was regelt der AI Act zum ungezielten Auslesen von Gesichtsbildern?",
   "term": "Ungezieltes Auslesen von Gesichtsbildern",
   "short": "Aufbau oder Erweiterung von Gesichtserkennungsdatenbanken durch ungezieltes Auslesen von Bildern aus dem Internet oder Videoüberwachung – verboten nach Art. 5 Abs. 1 lit. e.",
   "long": "Das Verbot zielt direkt auf Praktiken wie die von Clearview AI, das Milliarden Gesichtsbilder ohne Einwilligung aus sozialen Netzwerken und dem Web gesammelt hat. Untersagt ist das ungezielte (\"untargeted\") Scraping zur Erstellung oder Erweiterung von Gesichtserkennungsdatenbanken. Mehrere europäische Datenschutzbehörden hatten Clearview bereits mit Millionenbußgeldern belegt (Italien, Griechenland, Frankreich, Niederlande). Ergänzt das DSGVO-Verbot und stärkt es durch eine ausdrückliche KI-spezifische Regel.",
   "links": [
    {
     "label": "Art. 5 AI Act",
     "url": "https://artificialintelligenceact.eu/article/5/"
    }
   ],
   "related": [
    "gesichtserkennung",
    "verbotene-praktiken",
    "biometrische-identifizierung"
   ]
  },
  {
   "id": "trainingsdaten-zusammenfassung",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was müssen GPAI-Anbieter zu ihren Trainingsdaten veröffentlichen?",
   "term": "Trainingsdaten-Zusammenfassung",
   "short": "GPAI-Anbieter müssen eine hinreichend detaillierte öffentliche Zusammenfassung der für das Training verwendeten Inhalte bereitstellen (Art. 53 Abs. 1 lit. d).",
   "long": "Ziel: Rechteinhabern und der Öffentlichkeit Transparenz über die Datengrundlage großer Modelle geben und die Wahrnehmung von Rechten (insbesondere Urheberrecht) ermöglichen. Das AI Office stellt eine verbindliche Vorlage bereit. Die Zusammenfassung soll den Umfang der Daten beschreiben (wichtige Datensammlungen, große Datenbanken, allgemeine Beschreibung sonstiger Quellen) – ohne Geschäftsgeheimnisse vollständig offenzulegen. Umstritten ist der geforderte Detailgrad. Zentraler Baustein der Urheberrechts-Compliance nach Art. 53 Abs. 1 lit. c.",
   "links": [
    {
     "label": "Art. 53 AI Act",
     "url": "https://artificialintelligenceact.eu/article/53/"
    }
   ],
   "related": [
    "gpai",
    "urheberrecht-schnittstelle",
    "daten-governance",
    "datasheet"
   ]
  },
  {
   "id": "modellbewertung",
   "cat": "ai-act-core",
   "risk": "systemic",
   "q": "Was umfasst eine Modellbewertung (Model Evaluation)?",
   "term": "Modellbewertung (Model Evaluation)",
   "short": "Anbieter von GPAI mit systemischem Risiko müssen ihre Modelle mit standardisierten Protokollen bewerten, einschließlich adversarialer Tests (Art. 55 Abs. 1 lit. a).",
   "long": "Pflicht zur systematischen Evaluierung, um systemische Risiken zu identifizieren und zu mindern. Umfasst standardisierte Benchmarks und adversariales Testing (AI Red Teaming), um gefährliche Fähigkeiten aufzudecken – etwa in den Bereichen Cyberangriffe, chemische/biologische Risiken, Verlust menschlicher Kontrolle, Manipulation. Ergebnisse fließen in Risikominderung, Dokumentation und ggf. Vorfallmeldungen ein. Der GPAI Code of Practice konkretisiert Methodik und Berichtsformate. Verzahnung mit AI-Red-Teaming und Vorfallmeldung.",
   "links": [
    {
     "label": "Art. 55 AI Act",
     "url": "https://artificialintelligenceact.eu/article/55/"
    }
   ],
   "related": [
    "systemisches-risiko",
    "ai-red-teaming",
    "gpai",
    "benchmark",
    "dual-use"
   ]
  },
  {
   "id": "inverkehrbringen",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was bedeuten „Inverkehrbringen“ und „Inbetriebnahme“ im AI Act?",
   "term": "Inverkehrbringen und Inbetriebnahme",
   "short": "Zwei zentrale Anknüpfungspunkte des AI Act: die erstmalige Bereitstellung auf dem Unionsmarkt bzw. die erstmalige Nutzung für den bestimmungsgemäßen Zweck (Art. 3 Nr. 9–11).",
   "long": "Inverkehrbringen (\"placing on the market\") bezeichnet die erstmalige Bereitstellung eines KI-Systems auf dem Unionsmarkt. Bereitstellung auf dem Markt ist jede Lieferung zum Vertrieb oder zur Nutzung im Rahmen einer Geschäftstätigkeit. Inbetriebnahme (\"putting into service\") ist die erstmalige Nutzung durch den Betreiber für den bestimmungsgemäßen Zweck. An diese Zeitpunkte knüpfen die meisten Pflichten an – insbesondere die Konformitätsbewertung, die vor dem Inverkehrbringen abgeschlossen sein muss. Maßgeblich auch für die zeitliche Anwendbarkeit und die Übergangsvorschriften.",
   "links": [
    {
     "label": "Art. 3 AI Act",
     "url": "https://artificialintelligenceact.eu/article/3/"
    }
   ],
   "related": [
    "konformitaetsbewertung",
    "ce-kennzeichnung",
    "extraterritorialitaet"
   ]
  },
  {
   "id": "extraterritorialitaet",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Wann gilt der AI Act auch für Unternehmen außerhalb der EU (Marktortprinzip)?",
   "term": "Räumlicher Anwendungsbereich (Marktortprinzip)",
   "short": "Der AI Act gilt auch für Akteure außerhalb der EU, sofern das KI-System in der Union in Verkehr gebracht wird oder sein Output in der EU verwendet wird (Art. 2).",
   "long": "Erfasst werden: Anbieter, die in der EU KI-Systeme in Verkehr bringen (unabhängig vom Sitz); Betreiber mit Sitz in der EU; sowie – besonders weitreichend – Anbieter und Betreiber aus Drittländern, wenn der vom KI-System erzeugte Output in der Union verwendet wird. Damit wirkt der AI Act ähnlich extraterritorial wie die DSGVO. Drittland-Anbieter müssen einen Bevollmächtigten in der EU benennen. Ausnahmen: militärische/verteidigungsbezogene Zwecke, reine Forschung und Entwicklung, persönliche nicht-berufliche Nutzung.",
   "links": [
    {
     "label": "Art. 2 AI Act",
     "url": "https://artificialintelligenceact.eu/article/2/"
    }
   ],
   "related": [
    "inverkehrbringen",
    "bevollmaechtigter",
    "eu-ai-act",
    "bruessel-effekt"
   ]
  },
  {
   "id": "open-source-ausnahme",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Welche Ausnahmen gelten für Open-Source-KI?",
   "term": "Open-Source-Ausnahme",
   "short": "Unter freien und quelloffenen Lizenzen bereitgestellte KI-Systeme und -Modelle sind teilweise von den Pflichten des AI Act ausgenommen (Art. 2, Art. 53).",
   "long": "Der AI Act privilegiert Open-Source-KI, um Innovation und Forschung nicht zu behindern. Ausgenommen sind KI-Systeme unter freier und quelloffener Lizenz – jedoch nicht, wenn sie als Hochrisiko-System, verbotene Praktik oder unter Transparenzpflichten (Art. 50) in Verkehr gebracht werden. Für GPAI-Modelle gilt: Open-Source-Modelle sind von einigen Dokumentationspflichten befreit (Art. 53 Abs. 2), nicht aber von der Urheberrechts-Compliance und der Trainingsdaten-Zusammenfassung. Keine Privilegierung bei GPAI mit systemischem Risiko. Die Abgrenzung, was als echte Open-Source-Lizenz gilt, ist umstritten.",
   "links": [
    {
     "label": "Art. 2 AI Act",
     "url": "https://artificialintelligenceact.eu/article/2/"
    }
   ],
   "related": [
    "gpai",
    "wissenschaftsausnahme",
    "foundation-model",
    "supply-chain-security-ki",
    "ki-souveraenitaet"
   ]
  },
  {
   "id": "wissenschaftsausnahme",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was regelt die Forschungs- und Entwicklungsausnahme?",
   "term": "Forschungs- und Entwicklungsausnahme",
   "short": "KI-Systeme und -Modelle, die ausschließlich zu Forschungs-, Test- und Entwicklungszwecken entwickelt werden, sind vom AI Act ausgenommen (Art. 2 Abs. 6, 8).",
   "long": "Die Ausnahme gilt für Forschungs-, Test- und Entwicklungstätigkeiten vor dem Inverkehrbringen oder der Inbetriebnahme. Sobald ein System diese Phase verlässt und auf den Markt gebracht oder real eingesetzt wird, greifen die Pflichten. Tests unter Realbedingungen (Art. 60) sind gesondert geregelt und nicht generell ausgenommen. Ziel: Innovation und Grundlagenforschung nicht behindern. Die DSGVO und andere Rechtsakte bleiben auch in der Forschungsphase anwendbar. Abzugrenzen vom Reallabor (Art. 57), das ein strukturiertes behördliches Testumfeld bietet.",
   "links": [
    {
     "label": "Art. 2 AI Act",
     "url": "https://artificialintelligenceact.eu/article/2/"
    }
   ],
   "related": [
    "open-source-ausnahme",
    "reallabor",
    "test-realbedingungen",
    "arzneimittelforschung-ki",
    "sandbox-datenschutz"
   ]
  },
  {
   "id": "wasserzeichen",
   "cat": "ai-act-core",
   "risk": "limited",
   "q": "Wie müssen KI-generierte Inhalte gekennzeichnet werden?",
   "term": "Kennzeichnung KI-generierter Inhalte (Watermarking)",
   "short": "Anbieter generativer KI müssen synthetische Inhalte maschinenlesbar als künstlich erzeugt kennzeichnen (Art. 50 Abs. 2).",
   "long": "Die Kennzeichnung muss maschinenlesbar und robust sein, sodass Inhalte als KI-generiert oder -manipuliert erkennbar bleiben. Technische Ansätze: unsichtbare Wasserzeichen (Google SynthID), Herkunfts-Metadaten nach dem C2PA-Standard (Content Credentials), kryptografische Signaturen. Ergänzend müssen Betreiber Deepfakes offenlegen (Art. 50 Abs. 4). Herausforderungen: Wasserzeichen lassen sich teils entfernen, Interoperabilität der Standards ist noch unvollständig. Das AI Office fördert harmonisierte technische Lösungen. Verzahnung mit DSA-Maßnahmen gegen Desinformation.",
   "links": [
    {
     "label": "Art. 50 AI Act",
     "url": "https://artificialintelligenceact.eu/article/50/"
    },
    {
     "label": "C2PA",
     "url": "https://c2pa.org/"
    }
   ],
   "related": [
    "deepfake",
    "transparenzpflichten",
    "generative-ai",
    "text-to-speech",
    "china-kennzeichnung"
   ]
  },
  {
   "id": "test-realbedingungen",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Unter welchen Bedingungen dürfen KI-Systeme unter Realbedingungen getestet werden?",
   "term": "Tests unter Realbedingungen",
   "short": "Erprobung von Hochrisiko-KI außerhalb eines Reallabors unter realen Bedingungen vor dem Inverkehrbringen – unter strengen Auflagen zulässig (Art. 60).",
   "long": "Anbieter dürfen Hochrisiko-Systeme unter Realbedingungen testen, sofern sie einen genehmigten Testplan haben, sich bei der Marktüberwachungsbehörde registrieren und strenge Schutzvorkehrungen einhalten. Kernvoraussetzung: informierte Einwilligung der Testteilnehmer (Art. 61), Widerrufsrecht, zeitliche Begrenzung (grundsätzlich sechs Monate, verlängerbar), menschliche Aufsicht, Rückgängigmachung von Entscheidungen. Betroffene behalten alle Rechte aus DSGVO und AI Act. Abzugrenzen vom Reallabor (Art. 57), das ein behördlich begleitetes, geschlossenes Umfeld bietet.",
   "links": [
    {
     "label": "Art. 60 AI Act",
     "url": "https://artificialintelligenceact.eu/article/60/"
    }
   ],
   "related": [
    "reallabor",
    "wissenschaftsausnahme"
   ]
  },
  {
   "id": "trustworthy-ai",
   "cat": "ethics",
   "risk": null,
   "q": "Was versteht man unter vertrauenswürdiger KI (Trustworthy AI)?",
   "term": "Vertrauenswürdige KI (Trustworthy AI)",
   "short": "Leitkonzept hinter dem AI Act: KI soll rechtmäßig, ethisch und robust sein. Zurückgehend auf die Ethik-Leitlinien der EU-Expertengruppe (HLEG, 2019).",
   "long": "Die von der High-Level Expert Group on AI 2019 formulierten sieben Anforderungen bilden das ethische Fundament des AI Act: (1) menschliches Handeln und Aufsicht, (2) technische Robustheit und Sicherheit, (3) Privatsphäre und Datenqualität, (4) Transparenz, (5) Vielfalt, Nichtdiskriminierung und Fairness, (6) gesellschaftliches und ökologisches Wohlergehen, (7) Rechenschaftspflicht. Der AI Act überführt viele dieser Prinzipien in verbindliche Pflichten für Hochrisiko-KI. Freiwillige Verhaltenskodizes (Art. 95) sollen die Prinzipien auch für Nicht-Hochrisiko-Systeme fördern.",
   "links": [
    {
     "label": "Ethics Guidelines for Trustworthy AI",
     "url": "https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai"
    }
   ],
   "related": [
    "fairness",
    "menschliche-aufsicht",
    "verhaltenskodex",
    "alignment",
    "constitutional-ai"
   ]
  },
  {
   "id": "verhaltenskodex",
   "cat": "governance",
   "risk": null,
   "q": "Was sind freiwillige Verhaltenskodizes nach Art. 95?",
   "term": "Freiwillige Verhaltenskodizes (Art. 95)",
   "short": "Der AI Act fördert freiwillige Verhaltenskodizes, mit denen auch Nicht-Hochrisiko-Systeme Anforderungen der vertrauenswürdigen KI übernehmen können.",
   "long": "Die Kommission und das AI Board unterstützen die Ausarbeitung von Kodizes, die Betreibern und Anbietern die freiwillige Anwendung von Hochrisiko-Anforderungen oder weitergehender Ziele ermöglichen: Umweltverträglichkeit, Barrierefreiheit, Beteiligung von Stakeholdern, Diversität der Entwicklungsteams. Abzugrenzen vom GPAI Code of Practice (Art. 56), der spezifisch die GPAI-Pflichten konkretisiert. Verhaltenskodizes sind ein Instrument der Ko-Regulierung und können Reputations- und Vertrauensvorteile schaffen, ohne rechtlich verpflichtend zu sein.",
   "links": [
    {
     "label": "Art. 95 AI Act",
     "url": "https://artificialintelligenceact.eu/article/95/"
    }
   ],
   "related": [
    "trustworthy-ai",
    "iso-42001",
    "ki-nachhaltigkeit",
    "g7-hiroshima",
    "kanada-aida"
   ]
  },
  {
   "id": "ki-agent",
   "cat": "llm",
   "risk": null,
   "q": "Was ist ein KI-Agent (Agentic AI)?",
   "term": "KI-Agent (Agentic AI)",
   "short": "KI-System, das eigenständig Ziele verfolgt, indem es plant, Werkzeuge nutzt und mehrschrittige Aufgaben mit begrenzter menschlicher Aufsicht ausführt.",
   "long": "Anders als ein einfacher Chatbot, der nur auf einzelne Anfragen antwortet, zerlegt ein Agent ein Ziel in Teilschritte, ruft Werkzeuge auf (Suche, Code-Ausführung, APIs), bewertet Zwischenergebnisse und passt seinen Plan an. Typische Bausteine: ein LLM als Steuerungseinheit, Werkzeug-Anbindung (Tool-Use), Gedächtnis und eine Schleife aus Planen-Handeln-Beobachten. Agentische Systeme werfen im AI-Act-Kontext besondere Fragen zu menschlicher Aufsicht (Art. 14), Nachvollziehbarkeit und Haftung auf, da sie Handlungen mit realen Folgen auslösen können.",
   "links": [
    {
     "label": "OECD AI Principles",
     "url": "https://oecd.ai/en/ai-principles"
    }
   ],
   "related": [
    "tool-use",
    "function-calling",
    "mcp",
    "reasoning-modell",
    "llm"
   ]
  },
  {
   "id": "tool-use",
   "cat": "llm",
   "risk": null,
   "q": "Was bedeutet Werkzeugnutzung (Tool-Use) bei KI-Modellen?",
   "term": "Werkzeugnutzung (Tool-Use)",
   "short": "Fähigkeit eines LLM, externe Werkzeuge wie Suchmaschinen, Rechner, Datenbanken oder APIs aufzurufen, um Aufgaben zu lösen, die es allein nicht bewältigt.",
   "long": "Das Modell erkennt, wann ein Werkzeug nötig ist, formuliert den Aufruf strukturiert (oft als JSON), erhält das Ergebnis zurück und verarbeitet es weiter. Tool-Use überwindet zentrale Grenzen reiner Sprachmodelle: fehlender Echtzeit-Zugriff, unzuverlässige Arithmetik, veraltetes Wissen. Technisch eng verwandt mit Function Calling. Grundlage moderner KI-Agenten. Sicherheitsrelevant, weil Werkzeuge reale Aktionen auslösen können – ein Einfallstor für Prompt-Injection-Angriffe.",
   "links": [
    {
     "label": "Anthropic Tool Use",
     "url": "https://docs.anthropic.com/en/docs/build-with-claude/tool-use"
    }
   ],
   "related": [
    "function-calling",
    "ki-agent",
    "mcp",
    "prompt-injection"
   ]
  },
  {
   "id": "function-calling",
   "cat": "llm",
   "risk": null,
   "q": "Was ist Function Calling?",
   "term": "Function Calling",
   "short": "Mechanismus, mit dem ein LLM strukturierte Funktionsaufrufe erzeugt, die von einer umgebenden Anwendung ausgeführt werden.",
   "long": "Der Entwickler beschreibt verfügbare Funktionen mit Name, Zweck und Parametern (als Schema). Das Modell entscheidet, ob und welche Funktion mit welchen Argumenten aufgerufen werden soll, und gibt dies maschinenlesbar zurück. Die Anwendung führt die Funktion aus und liefert das Ergebnis zurück ins Gespräch. Function Calling ist die technische Grundlage für Tool-Use und Agenten und ermöglicht die zuverlässige Erzeugung strukturierter Ausgaben (structured output).",
   "links": [
    {
     "label": "Anthropic Tool Use",
     "url": "https://docs.anthropic.com/en/docs/build-with-claude/tool-use"
    }
   ],
   "related": [
    "tool-use",
    "ki-agent",
    "mcp"
   ]
  },
  {
   "id": "mcp",
   "cat": "llm",
   "risk": null,
   "q": "Was ist das Model Context Protocol (MCP)?",
   "term": "Model Context Protocol (MCP)",
   "short": "Offener Standard, der KI-Anwendungen eine einheitliche Schnittstelle bietet, um Werkzeuge, Datenquellen und Dienste anzubinden.",
   "long": "MCP wurde 2024 von Anthropic vorgestellt und als offener Standard veröffentlicht. Ziel: die Vielzahl individueller Integrationen zwischen KI-Modellen und externen Systemen durch ein einheitliches Protokoll ersetzen – vergleichbar mit einem \"USB-C für KI-Werkzeuge\". Ein MCP-Server stellt Ressourcen und Werkzeuge bereit, ein MCP-Client (die KI-Anwendung) nutzt sie. Der Standard hat sich schnell verbreitet und wird von mehreren Anbietern unterstützt. Relevant für Interoperabilität und die Architektur agentischer Systeme.",
   "links": [
    {
     "label": "MCP Specification",
     "url": "https://modelcontextprotocol.io/"
    }
   ],
   "related": [
    "tool-use",
    "ki-agent",
    "function-calling"
   ]
  },
  {
   "id": "multimodalitaet",
   "cat": "llm",
   "risk": null,
   "q": "Was bedeutet Multimodalität bei KI-Modellen?",
   "term": "Multimodalität",
   "short": "Fähigkeit eines KI-Modells, mehrere Datentypen – Text, Bild, Audio, Video – gemeinsam zu verarbeiten und zu erzeugen.",
   "long": "Multimodale Modelle bilden verschiedene Eingabetypen in einem gemeinsamen Repräsentationsraum ab und können so z. B. ein Bild beschreiben, aus Text ein Bild erzeugen oder gesprochene Sprache verstehen. Technisch werden Modalitäten meist über spezialisierte Encoder in Embeddings überführt, die ein gemeinsames Transformer-Rückgrat verarbeitet. Beispiele: Bildbeschreibung, Dokumentenanalyse, Sprachassistenten. Im AI-Act-Kontext relevant, weil multimodale Systeme neue Transparenz- und Kennzeichnungsfragen aufwerfen (z. B. bei generierten Bildern und Deepfakes).",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "transformer",
    "computer-vision",
    "generative-ai",
    "spracherkennung-asr",
    "vision-language-model"
   ]
  },
  {
   "id": "kontextfenster",
   "cat": "llm",
   "risk": null,
   "q": "Was ist das Kontextfenster eines Sprachmodells?",
   "term": "Kontextfenster (Context Window)",
   "short": "Die maximale Menge an Text (gemessen in Token), die ein Sprachmodell in einer Anfrage gleichzeitig berücksichtigen kann.",
   "long": "Das Kontextfenster umfasst sowohl die Eingabe (Prompt, Dokumente, Gesprächsverlauf) als auch die erzeugte Ausgabe. Frühe Modelle hatten wenige tausend Token, moderne Modelle reichen bis zu Hunderttausenden oder Millionen. Ein größeres Fenster erlaubt die Verarbeitung ganzer Bücher oder Codebasen, erhöht aber Rechenaufwand und Kosten und kann zu Qualitätsverlust in der Mitte langer Kontexte führen (\"lost in the middle\"). Relevant für RAG-Architekturen und die Verarbeitung umfangreicher Dokumente.",
   "links": [
    {
     "label": "Anthropic Docs",
     "url": "https://docs.anthropic.com/"
    }
   ],
   "related": [
    "tokenization",
    "rag",
    "llm",
    "vektordatenbank"
   ]
  },
  {
   "id": "reasoning-modell",
   "cat": "llm",
   "risk": null,
   "q": "Was ist ein Reasoning-Modell?",
   "term": "Reasoning-Modell",
   "short": "Sprachmodell, das vor der Antwort explizit mehrschrittige Denkprozesse durchläuft, um komplexe Aufgaben zuverlässiger zu lösen.",
   "long": "Reasoning-Modelle erzeugen vor der finalen Antwort eine oft verborgene Kette von Zwischenschritten (Chain-of-Thought) und investieren dafür zusätzliche Rechenzeit zur Laufzeit (\"test-time compute\"). Dadurch erreichen sie bei Mathematik, Logik, Programmierung und Planung deutlich bessere Ergebnisse als klassische Modelle. Der Ansatz verschiebt Leistung von reiner Modellgröße hin zu mehr Rechenzeit pro Anfrage. Trade-off: höhere Latenz und Kosten. Beispiele solcher Modellfamilien erschienen ab 2024/2025.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "chain-of-thought",
    "inferenz",
    "llm",
    "ki-agent",
    "emergente-faehigkeiten"
   ]
  },
  {
   "id": "chain-of-thought",
   "cat": "llm",
   "risk": null,
   "q": "Was ist Chain-of-Thought?",
   "term": "Chain-of-Thought (Gedankenkette)",
   "short": "Technik, bei der ein Sprachmodell seine Zwischenschritte explizit ausformuliert, statt direkt zur Antwort zu springen.",
   "long": "Durch Aufforderungen wie \"Denke Schritt für Schritt\" oder durch entsprechendes Training gibt das Modell seinen Lösungsweg aus. Das verbessert die Genauigkeit bei mehrschrittigen Aufgaben deutlich, weil Teilergebnisse als Zwischenspeicher dienen und Fehler sichtbar werden. Chain-of-Thought ist die Grundlage moderner Reasoning-Modelle. Für Erklärbarkeit (XAI) nur bedingt geeignet: Die ausgegebene Kette muss nicht dem tatsächlichen internen Rechenweg entsprechen (\"faithfulness\"-Problem).",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "reasoning-modell",
    "prompt-engineering",
    "xai"
   ]
  },
  {
   "id": "mixture-of-experts",
   "cat": "dl",
   "risk": null,
   "q": "Was ist Mixture of Experts (MoE)?",
   "term": "Mixture of Experts (MoE)",
   "short": "Modellarchitektur, bei der pro Eingabe nur ein Teil des Netzwerks (\"Experten\") aktiviert wird, statt das gesamte Modell zu nutzen.",
   "long": "Ein MoE-Modell besteht aus vielen spezialisierten Teilnetzen und einem Router, der für jedes Token die passenden Experten auswählt. Nur diese werden berechnet – so lässt sich die Gesamtzahl der Parameter stark erhöhen, ohne den Rechenaufwand pro Anfrage im gleichen Maße zu steigern. Vorteil: mehr Kapazität bei vergleichbarer Inferenzgeschwindigkeit. Herausforderungen: Lastverteilung zwischen Experten, Trainingsstabilität, Speicherbedarf. Viele große Modelle nutzen MoE-Varianten.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "transformer",
    "parameter",
    "foundation-model"
   ]
  },
  {
   "id": "pretraining",
   "cat": "dl",
   "risk": null,
   "q": "Was passiert beim Vortraining (Pretraining)?",
   "term": "Vortraining (Pretraining)",
   "short": "Erste, rechenintensive Trainingsphase, in der ein Modell aus großen unmarkierten Datenmengen allgemeine Muster der Sprache oder Wahrnehmung lernt.",
   "long": "Beim Vortraining großer Sprachmodelle wird das Modell darauf trainiert, das jeweils nächste Token vorherzusagen (selbstüberwachtes Lernen) – ohne dass menschlich markierte Daten nötig sind. Dabei entsteht ein breites Grundwissen über Sprache, Fakten und Zusammenhänge. Diese Phase verschlingt den Großteil der Rechenressourcen und Kosten. Das Ergebnis ist ein Foundation Model, das anschließend durch Fine-Tuning und Alignment für konkrete Aufgaben verfeinert wird.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "foundation-model",
    "instruction-tuning",
    "transfer-learning",
    "self-supervised-learning",
    "skalierungsgesetze"
   ]
  },
  {
   "id": "instruction-tuning",
   "cat": "dl",
   "risk": null,
   "q": "Was ist Instruction Tuning?",
   "term": "Instruction Tuning",
   "short": "Trainingsphase, in der ein vortrainiertes Modell lernt, Anweisungen zu befolgen und hilfreiche Antworten zu geben.",
   "long": "Nach dem Vortraining kann ein Modell Sprache fortsetzen, aber noch nicht zuverlässig Aufgaben lösen oder Anweisungen folgen. Beim Instruction Tuning (auch überwachtes Fine-Tuning, SFT) wird es mit Beispielen aus Anweisung und gewünschter Antwort weitertrainiert. So lernt es das Format hilfreicher Assistenz. Häufig gefolgt von einer Alignment-Phase mit RLHF oder DPO, die das Verhalten weiter an menschliche Präferenzen anpasst. Zentraler Schritt, um aus einem Foundation Model einen nutzbaren Assistenten zu machen.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "pretraining",
    "fine-tuning",
    "rlhf",
    "dpo",
    "few-shot-learning"
   ]
  },
  {
   "id": "alignment",
   "cat": "ethics",
   "risk": null,
   "q": "Was bedeutet Alignment bei KI?",
   "term": "Alignment (Ausrichtung)",
   "short": "Bestreben, das Verhalten von KI-Systemen an menschlichen Absichten, Werten und Sicherheitsanforderungen auszurichten.",
   "long": "Alignment umfasst technische Verfahren (RLHF, DPO, Constitutional AI) und konzeptionelle Fragen: Wessen Werte? Wie werden widersprüchliche Ziele abgewogen? Man unterscheidet zwischen dem Ausrichten auf die unmittelbar formulierte Aufgabe und auf die dahinterliegenden Absichten. Fehlausrichtung (Misalignment) kann von harmlosen Fehlern bis zu sicherheitskritischem Verhalten reichen, besonders bei mächtigen oder agentischen Systemen. Alignment ist ein Kernthema der KI-Sicherheitsforschung und Hintergrund vieler Anforderungen des AI Act an Hochrisiko-KI.",
   "links": [
    {
     "label": "OECD AI Principles",
     "url": "https://oecd.ai/en/ai-principles"
    }
   ],
   "related": [
    "rlhf",
    "dpo",
    "constitutional-ai",
    "trustworthy-ai",
    "guardrails"
   ]
  },
  {
   "id": "dpo",
   "cat": "dl",
   "risk": null,
   "q": "Was ist Direct Preference Optimization (DPO)?",
   "term": "Direct Preference Optimization (DPO)",
   "short": "Alignment-Verfahren, das ein Modell direkt aus Präferenzdaten optimiert, ohne den Umweg über ein separates Belohnungsmodell wie bei RLHF.",
   "long": "Bei RLHF wird zunächst ein Belohnungsmodell aus menschlichen Vergleichen trainiert und dann per Reinforcement Learning optimiert – aufwändig und instabil. DPO vereinfacht dies: Aus Paaren von bevorzugten und abgelehnten Antworten wird das Sprachmodell direkt so angepasst, dass es bevorzugte Antworten wahrscheinlicher macht. Vorteile: einfacher, stabiler, ressourcenschonender. DPO und verwandte Verfahren haben sich seit 2023 als beliebte Alternative oder Ergänzung zu RLHF etabliert.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "rlhf",
    "alignment",
    "instruction-tuning"
   ]
  },
  {
   "id": "constitutional-ai",
   "cat": "ethics",
   "risk": null,
   "q": "Was ist Constitutional AI?",
   "term": "Constitutional AI",
   "short": "Alignment-Ansatz, bei dem ein Modell sein Verhalten anhand einer expliziten Liste von Prinzipien (\"Verfassung\") selbst kritisiert und verbessert.",
   "long": "Von Anthropic entwickelt. Statt sich allein auf menschliche Bewertungen zu stützen, nutzt das Modell eine schriftliche Menge von Prinzipien, um eigene Antworten zu kritisieren und zu überarbeiten. Ein Teil des Alignments wird so vom Modell selbst übernommen (RLAIF – Reinforcement Learning from AI Feedback), was menschlichen Bewertungsaufwand reduziert und die zugrunde liegenden Werte transparenter und überprüfbarer macht. Die \"Verfassung\" kann sich an Quellen wie Menschenrechtserklärungen orientieren. Beispiel für werteorientiertes, nachvollziehbares Alignment.",
   "links": [
    {
     "label": "Anthropic: Constitutional AI",
     "url": "https://www.anthropic.com/news/claudes-constitution"
    }
   ],
   "related": [
    "alignment",
    "rlhf",
    "trustworthy-ai"
   ]
  },
  {
   "id": "quantisierung",
   "cat": "dl",
   "risk": null,
   "q": "Was ist Quantisierung bei KI-Modellen?",
   "term": "Quantisierung (Quantization)",
   "short": "Technik zur Verkleinerung eines Modells, indem die Zahlengenauigkeit der Gewichte reduziert wird – etwa von 16 auf 4 Bit.",
   "long": "Modellgewichte werden üblicherweise als Gleitkommazahlen gespeichert. Bei der Quantisierung werden sie in Formate geringerer Präzision überführt (z. B. 8-Bit- oder 4-Bit-Ganzzahlen). Das verringert Speicherbedarf und beschleunigt die Inferenz erheblich, oft mit nur geringem Qualitätsverlust. Dadurch werden große Modelle auf schwächerer Hardware oder sogar lokal auf Endgeräten lauffähig. Zentrale Technik für effiziente Bereitstellung und Edge-KI. Verwandt mit Distillation und Pruning als Kompressionsverfahren.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "distillation",
    "inferenz",
    "edge-ai",
    "ki-nachhaltigkeit"
   ]
  },
  {
   "id": "distillation",
   "cat": "dl",
   "risk": null,
   "q": "Was ist Wissensdestillation (Distillation)?",
   "term": "Wissensdestillation (Distillation)",
   "short": "Verfahren, bei dem ein kleineres \"Schüler\"-Modell lernt, das Verhalten eines größeren \"Lehrer\"-Modells nachzuahmen.",
   "long": "Das große Lehrer-Modell erzeugt Ausgaben (oder Wahrscheinlichkeitsverteilungen), an denen das kleinere Schüler-Modell trainiert wird. Ziel: einen Großteil der Leistung des großen Modells in einem deutlich kompakteren Modell bewahren, das schneller und günstiger läuft. Distillation ermöglicht leistungsfähige kleine Modelle für den produktiven Einsatz und Edge-Geräte. Rechtlich und wettbewerblich relevant: Das Destillieren aus fremden Modellen berührt Nutzungsbedingungen und Fragen des geistigen Eigentums.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "quantisierung",
    "transfer-learning",
    "edge-ai",
    "model-extraction",
    "ki-nachhaltigkeit"
   ]
  },
  {
   "id": "benchmark",
   "cat": "ml",
   "risk": null,
   "q": "Was ist ein Benchmark in der KI?",
   "term": "Benchmark",
   "short": "Standardisierter Test-Datensatz mit definierten Aufgaben und Metriken, um die Leistung von KI-Modellen vergleichbar zu messen.",
   "long": "Benchmarks bündeln Aufgaben (z. B. Wissensfragen, Programmierung, mathematisches Schließen) und eine Bewertungsmethode, um Modelle objektiv zu vergleichen. Bekannte Beispiele messen Allgemeinwissen, Reasoning oder Coding. Grenzen: Benchmarks können durch versehentliche Aufnahme der Testdaten ins Training verfälscht werden (\"Kontamination\"), und hohe Werte bedeuten nicht automatisch echten Praxisnutzen. Für Hochrisiko-KI verlangt der AI Act eigene Genauigkeitsmetriken (Art. 15); die Kommission fördert die Entwicklung geeigneter Benchmarks.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "modellbewertung",
    "confusion-matrix",
    "cross-validation"
   ]
  },
  {
   "id": "guardrails",
   "cat": "security",
   "risk": null,
   "q": "Was sind Guardrails bei KI-Systemen?",
   "term": "Guardrails (Leitplanken)",
   "short": "Technische Schutzmechanismen, die Ein- und Ausgaben eines KI-Systems überwachen, um schädliches oder unerwünschtes Verhalten zu verhindern.",
   "long": "Guardrails wirken zusätzlich zum Alignment des Modells als äußere Sicherheitsschicht. Sie können Eingaben filtern (z. B. Prompt-Injection oder verbotene Anfragen erkennen), Ausgaben prüfen (z. B. auf toxische Inhalte, Datenlecks, unerlaubte Ratschläge) und Themen oder Werkzeuge begrenzen. Umgesetzt durch Regeln, Klassifikatoren oder separate Prüfmodelle. Zentraler Baustein für den sicheren Produktivbetrieb, besonders bei agentischen Systemen mit Werkzeugzugriff. Trägt zur Erfüllung von Robustheits- und Sicherheitsanforderungen (Art. 15) bei.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "prompt-injection",
    "ai-red-teaming",
    "alignment",
    "jailbreak",
    "red-teaming-vs-blue"
   ]
  },
  {
   "id": "inferenz",
   "cat": "ml",
   "risk": null,
   "q": "Was bedeutet Inferenz bei KI-Modellen?",
   "term": "Inferenz (Inference)",
   "short": "Die Nutzung eines trainierten Modells zur Erzeugung von Ausgaben – im Gegensatz zur Trainingsphase.",
   "long": "Nach dem Training wird ein Modell in Betrieb genommen; jede Anfrage, die es beantwortet, ist ein Inferenzvorgang. Anders als das einmalige, teure Training fällt Inferenz laufend an und bestimmt maßgeblich die Betriebskosten und die Latenz (Antwortzeit). Optimierungen wie Quantisierung, Batching und spezialisierte Hardware (GPUs, TPUs, KI-Beschleuniger) zielen auf effiziente Inferenz. Bei Reasoning-Modellen steigt der Inferenzaufwand bewusst, um bessere Ergebnisse zu erzielen (test-time compute).",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "reasoning-modell",
    "quantisierung",
    "edge-ai"
   ]
  },
  {
   "id": "vektordatenbank",
   "cat": "ml",
   "risk": null,
   "q": "Was ist eine Vektordatenbank?",
   "term": "Vektordatenbank",
   "short": "Datenbank, die Informationen als Embeddings (Zahlenvektoren) speichert und nach semantischer Ähnlichkeit durchsuchbar macht.",
   "long": "Texte, Bilder oder andere Inhalte werden in Embeddings umgewandelt und in der Vektordatenbank abgelegt. Bei einer Suche wird die Anfrage ebenfalls in einen Vektor überführt und die inhaltlich ähnlichsten Einträge werden über Nächste-Nachbar-Suche gefunden – unabhängig von exakten Stichworten. Vektordatenbanken sind das Rückgrat von RAG-Systemen, die Sprachmodelle mit externem, aktuellem Wissen versorgen. Relevant für den Umgang mit Unternehmenswissen und die Reduktion von Halluzinationen.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "rag",
    "embedding",
    "kontextfenster",
    "kollaboratives-filtern",
    "knn"
   ]
  },
  {
   "id": "temperatur",
   "cat": "llm",
   "risk": null,
   "q": "Was bewirkt der Parameter „Temperatur“ bei Sprachmodellen?",
   "term": "Temperatur (Temperature)",
   "short": "Parameter, der steuert, wie zufällig oder deterministisch die Ausgaben eines Sprachmodells ausfallen.",
   "long": "Bei der Erzeugung wählt das Modell das nächste Token aus einer Wahrscheinlichkeitsverteilung. Eine niedrige Temperatur (nahe 0) macht die Ausgabe deterministischer und fokussierter – gut für Fakten und Code. Eine höhere Temperatur erhöht die Vielfalt und Kreativität, aber auch das Risiko von Abschweifungen oder Fehlern. Verwandte Sampling-Parameter sind Top-k und Top-p (Nucleus Sampling). Praktisch wichtig für die Balance zwischen Verlässlichkeit und Kreativität einer KI-Anwendung.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "llm",
    "prompt-engineering",
    "halluzination"
   ]
  },
  {
   "id": "model-context-drift",
   "cat": "ml",
   "risk": null,
   "q": "Was sind Modell- und Datendrift?",
   "term": "Modell- und Datendrift",
   "short": "Nachlassende Modellleistung im Betrieb, weil sich die realen Daten von den Trainingsdaten entfernen.",
   "long": "Man unterscheidet Datendrift (die Verteilung der Eingaben verändert sich) und Konzeptdrift (der Zusammenhang zwischen Eingabe und korrekter Ausgabe verändert sich). Beispiele: verändertes Nutzerverhalten, neue Betrugsmuster, gesellschaftlicher Wandel. Drift führt zu schleichendem Qualitätsverlust und erfordert kontinuierliche Überwachung und ggf. Nachtraining. Direkt relevant für die Post-Market-Monitoring-Pflicht des AI Act (Art. 72) und für die dauerhafte Einhaltung der Genauigkeitsanforderungen (Art. 15).",
   "links": [
    {
     "label": "Art. 72 AI Act",
     "url": "https://artificialintelligenceact.eu/article/72/"
    }
   ],
   "related": [
    "post-market-monitoring",
    "genauigkeit-robustheit",
    "overfitting",
    "mlops",
    "concept-drift-detection"
   ]
  },
  {
   "id": "attention",
   "cat": "dl",
   "risk": null,
   "q": "Was ist der Attention-Mechanismus?",
   "term": "Attention-Mechanismus",
   "short": "Kernbaustein der Transformer-Architektur, der es einem Modell erlaubt, für jedes Element die relevanten anderen Elemente zu gewichten.",
   "long": "Der Attention-Mechanismus (\"Aufmerksamkeit\") berechnet, wie stark jedes Token bei der Verarbeitung auf jedes andere Token achten soll. So kann das Modell Bezüge über weite Distanzen im Text erfassen – etwa ein Pronomen mit seinem Bezugswort verbinden. Die Selbstaufmerksamkeit (self-attention) ist das Herzstück der 2017 vorgestellten Transformer-Architektur (\"Attention Is All You Need\") und Grundlage nahezu aller modernen Sprachmodelle. Rechenaufwand wächst mit der Kontextlänge, was Effizienzforschung antreibt.",
   "links": [
    {
     "label": "Attention Is All You Need",
     "url": "https://arxiv.org/abs/1706.03762"
    }
   ],
   "related": [
    "transformer",
    "deep-learning",
    "parameter",
    "vision-transformer"
   ]
  },
  {
   "id": "parameter",
   "cat": "dl",
   "risk": null,
   "q": "Was sind die Parameter (Gewichte) eines Modells?",
   "term": "Parameter (Gewichte)",
   "short": "Die während des Trainings angepassten Zahlenwerte eines neuronalen Netzes, die sein Verhalten bestimmen.",
   "long": "Parameter (Gewichte und Biases) sind die einstellbaren Größen eines Modells; ihre Werte werden im Training so justiert, dass das Modell die Trainingsdaten möglichst gut abbildet. Die Anzahl der Parameter (von Millionen bis zu Billionen) ist ein grobes Maß für die Kapazität eines Modells, aber nicht allein entscheidend für die Qualität. Bei der GPAI-Klassifizierung des AI Act spielt die für das Training aufgewendete Rechenleistung eine Rolle (Schwelle für systemisches Risiko), nicht allein die Parameterzahl.",
   "links": [
    {
     "label": "Art. 51 AI Act",
     "url": "https://artificialintelligenceact.eu/article/51/"
    }
   ],
   "related": [
    "attention",
    "mixture-of-experts",
    "gpai",
    "skalierungsgesetze"
   ]
  },
  {
   "id": "gradientenabstieg",
   "cat": "ml",
   "risk": null,
   "q": "Was ist Gradientenabstieg?",
   "term": "Gradientenabstieg (Gradient Descent)",
   "short": "Grundlegendes Optimierungsverfahren, das die Parameter eines Modells schrittweise anpasst, um den Vorhersagefehler zu minimieren.",
   "long": "Beim Training wird für die aktuellen Vorhersagen ein Fehler (Loss) berechnet. Der Gradientenabstieg ermittelt, in welche Richtung jeder Parameter verändert werden muss, um den Fehler zu verringern, und passt ihn in kleinen Schritten an (Lernrate). Über viele Iterationen nähert sich das Modell einer guten Lösung. Die Berechnung der Gradienten erfolgt effizient per Backpropagation. Grundlage praktisch aller Deep-Learning-Trainings. Varianten wie Stochastic Gradient Descent und Adam beschleunigen und stabilisieren den Prozess.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "backpropagation",
    "overfitting",
    "regularisierung",
    "verlustfunktion",
    "lernrate"
   ]
  },
  {
   "id": "backpropagation",
   "cat": "dl",
   "risk": null,
   "q": "Was ist Backpropagation?",
   "term": "Backpropagation",
   "short": "Effizienter Algorithmus, der berechnet, wie stark jeder Parameter eines neuronalen Netzes zum Gesamtfehler beiträgt.",
   "long": "Backpropagation (\"Fehlerrückführung\") wendet die Kettenregel der Differentialrechnung an, um den Fehler von der Ausgabeschicht rückwärts durch das Netz zu propagieren. So erhält jeder Parameter einen Gradienten, der angibt, wie er zur Fehlerreduktion angepasst werden sollte. Erst dieser Algorithmus macht das Training tiefer neuronaler Netze praktikabel. Zusammen mit dem Gradientenabstieg bildet Backpropagation das Fundament des modernen Deep Learning seit den 1980er-Jahren.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "gradientenabstieg",
    "nn",
    "deep-learning",
    "vanishing-gradient"
   ]
  },
  {
   "id": "gan",
   "cat": "dl",
   "risk": null,
   "q": "Was ist ein Generative Adversarial Network (GAN)?",
   "term": "Generative Adversarial Network (GAN)",
   "short": "Architektur aus zwei konkurrierenden Netzen – einem Generator und einem Diskriminator –, die sich gegenseitig verbessern.",
   "long": "Der Generator erzeugt künstliche Daten (z. B. Bilder), der Diskriminator versucht, echt von künstlich zu unterscheiden. Beide werden gemeinsam trainiert: Der Generator lernt, immer überzeugendere Fälschungen zu erzeugen, der Diskriminator, sie besser zu enttarnen. GANs prägten ab 2014 die Bildsynthese und stehen historisch hinter vielen frühen Deepfakes. In jüngerer Zeit wurden sie in der Bildgenerierung teils von Diffusionsmodellen abgelöst. Relevant für Transparenzpflichten und Deepfake-Kennzeichnung (Art. 50).",
   "links": [
    {
     "label": "Art. 50 AI Act",
     "url": "https://artificialintelligenceact.eu/article/50/"
    }
   ],
   "related": [
    "generative-ai",
    "diffusion",
    "deepfake",
    "super-resolution"
   ]
  },
  {
   "id": "regularisierung",
   "cat": "ml",
   "risk": null,
   "q": "Was ist Regularisierung?",
   "term": "Regularisierung",
   "short": "Sammelbegriff für Techniken, die Overfitting verhindern und die Generalisierungsfähigkeit eines Modells verbessern.",
   "long": "Ein Modell, das die Trainingsdaten zu genau lernt, versagt bei neuen Daten (Overfitting). Regularisierung wirkt dem entgegen, indem sie das Modell zu Einfachheit zwingt: etwa durch Strafterme für große Gewichte (L1/L2), durch zufälliges Deaktivieren von Neuronen im Training (Dropout), durch frühzeitiges Beenden (Early Stopping) oder durch Datenaugmentation. Ziel ist ein Modell, das die zugrunde liegenden Muster erfasst statt Rauschen auswendig zu lernen. Grundlegend für robuste, verlässliche Modelle – auch im Sinne der Genauigkeitsanforderungen des AI Act.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "overfitting",
    "cross-validation",
    "gradientenabstieg",
    "datenaugmentation",
    "batch-normalization"
   ]
  },
  {
   "id": "cross-validation",
   "cat": "ml",
   "risk": null,
   "q": "Was ist Kreuzvalidierung?",
   "term": "Kreuzvalidierung (Cross-Validation)",
   "short": "Verfahren zur zuverlässigen Bewertung eines Modells, bei dem die Daten mehrfach in Trainings- und Testteile aufgeteilt werden.",
   "long": "Bei der k-fachen Kreuzvalidierung werden die Daten in k gleich große Teile zerlegt. Das Modell wird k-mal trainiert, jeweils mit einem anderen Teil als Testmenge und den restlichen als Training. Der Durchschnitt der Ergebnisse liefert eine belastbarere Leistungsschätzung als eine einzelne Aufteilung und nutzt die Daten effizienter. Wichtig, um Overfitting zu erkennen und Modelle fair zu vergleichen. Standardwerkzeug im klassischen maschinellen Lernen und in der Modellauswahl.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "regularisierung",
    "overfitting",
    "benchmark",
    "ensemble",
    "hyperparameter"
   ]
  },
  {
   "id": "feature-engineering",
   "cat": "ml",
   "risk": null,
   "q": "Was ist Feature Engineering?",
   "term": "Feature Engineering",
   "short": "Die Kunst, aus Rohdaten aussagekräftige Merkmale (Features) zu gewinnen, mit denen ein Modell besser lernt.",
   "long": "Bevor Daten in ein klassisches Modell fließen, werden sie aufbereitet: relevante Größen ausgewählt, kombiniert, transformiert oder normalisiert. Gutes Feature Engineering kann die Leistung stärker verbessern als ein komplexeres Modell. Beispiele: aus einem Datum den Wochentag ableiten, Beträge logarithmieren, Kategorien kodieren. Im Deep Learning wird ein Teil dieser Arbeit vom Modell selbst übernommen (Representation Learning), doch bei strukturierten Daten bleibt Feature Engineering zentral. Berührt Daten-Governance und Bias, weil die Merkmalswahl Verzerrungen einführen kann.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "trainingsdaten",
    "bias",
    "klassifikation-regression",
    "dimensionsreduktion",
    "korrelation-kausalitaet"
   ]
  },
  {
   "id": "ensemble",
   "cat": "ml",
   "risk": null,
   "q": "Was sind Ensemble-Methoden?",
   "term": "Ensemble-Methoden",
   "short": "Verfahren, die mehrere Modelle kombinieren, um bessere und stabilere Vorhersagen zu erzielen als ein Einzelmodell.",
   "long": "Die Grundidee: Viele schwächere Modelle ergeben zusammen ein starkes. Beim Bagging (z. B. Random Forest) werden viele Modelle unabhängig auf Datenstichproben trainiert und ihre Ergebnisse gemittelt. Beim Boosting (z. B. Gradient Boosting) werden Modelle nacheinander trainiert, wobei jedes die Fehler des vorigen ausgleicht. Ensembles zählen bei strukturierten, tabellarischen Daten oft zu den leistungsstärksten Verfahren und schlagen dort mitunter neuronale Netze. Trade-off: geringere Nachvollziehbarkeit als ein einzelnes einfaches Modell.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "klassifikation-regression",
    "ml",
    "cross-validation",
    "entscheidungsbaum"
   ]
  },
  {
   "id": "klassifikation-regression",
   "cat": "ml",
   "risk": null,
   "q": "Was unterscheidet Klassifikation von Regression?",
   "term": "Klassifikation und Regression",
   "short": "Die zwei Grundaufgaben des überwachten Lernens: Kategorien vorhersagen (Klassifikation) oder Zahlenwerte vorhersagen (Regression).",
   "long": "Bei der Klassifikation ordnet ein Modell Eingaben diskreten Klassen zu – z. B. Spam/kein Spam, Diagnosekategorien, Risikostufen. Bei der Regression sagt es kontinuierliche Werte voraus – z. B. Preise, Temperaturen, Wahrscheinlichkeiten. Beide gehören zum überwachten Lernen und werden mit markierten Beispieldaten trainiert. Die Wahl der Aufgabe bestimmt Modelltyp, Fehlermaße und Bewertungsmetriken (z. B. Genauigkeit und F1 bei Klassifikation, mittlerer Fehler bei Regression). Grundvokabular für das Verständnis fast aller praktischen ML-Anwendungen.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "ueberwacht",
    "confusion-matrix",
    "ensemble",
    "feature-engineering",
    "textklassifikation"
   ]
  },
  {
   "id": "clustering",
   "cat": "ml",
   "risk": null,
   "q": "Was ist Clustering?",
   "term": "Clustering",
   "short": "Unüberwachtes Verfahren, das Datenpunkte anhand ihrer Ähnlichkeit ohne vorgegebene Kategorien in Gruppen einteilt.",
   "long": "Anders als bei der Klassifikation gibt es beim Clustering keine vorab bekannten Labels – das Verfahren entdeckt Strukturen selbst. Bekannte Methoden: k-Means (teilt Daten in k Gruppen), hierarchisches Clustering, DBSCAN (dichtebasiert). Anwendungen: Kundensegmentierung, Anomalieerkennung, Themenfindung in Texten, Bildkompression. Herausforderungen: die passende Zahl der Cluster wählen und Ergebnisse interpretieren. Gehört wie die Dimensionsreduktion zum Kern des unüberwachten Lernens und ergänzt die überwachten Verfahren.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "unueberwacht",
    "ml",
    "topic-modeling",
    "dimensionsreduktion",
    "knn"
   ]
  },
  {
   "id": "confusion-matrix",
   "cat": "ml",
   "risk": null,
   "q": "Was ist eine Wahrheitsmatrix (Confusion Matrix)?",
   "term": "Wahrheitsmatrix (Confusion Matrix)",
   "short": "Tabelle, die die Vorhersagen eines Klassifikationsmodells den tatsächlichen Werten gegenüberstellt und so Fehlertypen sichtbar macht.",
   "long": "Die Matrix zeigt vier Felder: richtig Positive, richtig Negative, falsch Positive (Fehlalarm) und falsch Negative (Übersehen). Aus ihr werden zentrale Metriken abgeleitet: Genauigkeit (Accuracy), Präzision (Precision), Trefferquote (Recall) und der F1-Wert. Wichtig, weil ein einzelner Genauigkeitswert täuschen kann – etwa bei unausgewogenen Daten. In sicherheits- oder grundrechtssensiblen Anwendungen ist entscheidend, welche Fehlerart gravierender ist (z. B. ein übersehener Tumor vs. ein Fehlalarm). Grundlage der Genauigkeitsangaben nach Art. 15 AI Act.",
   "links": [
    {
     "label": "Art. 15 AI Act",
     "url": "https://artificialintelligenceact.eu/article/15/"
    }
   ],
   "related": [
    "benchmark",
    "klassifikation-regression",
    "genauigkeit-robustheit",
    "bayessche-statistik",
    "imbalanced-data"
   ]
  },
  {
   "id": "transfer-learning",
   "cat": "dl",
   "risk": null,
   "q": "Was ist Transfer Learning?",
   "term": "Transfer Learning",
   "short": "Ansatz, bei dem ein für eine Aufgabe trainiertes Modell als Ausgangspunkt für eine verwandte Aufgabe wiederverwendet wird.",
   "long": "Statt ein Modell für jede neue Aufgabe von Grund auf zu trainieren, nutzt man ein bereits vortrainiertes Modell und passt es an. Das spart Daten, Rechenzeit und Kosten erheblich, weil das allgemeine Wissen aus dem Vortraining erhalten bleibt. Transfer Learning ist das Grundprinzip hinter Foundation Models: ein einmal teuer vortrainiertes Modell wird durch Fine-Tuning für viele spezifische Anwendungen angepasst. Ermöglicht leistungsfähige KI auch dort, wo nur wenige aufgabenspezifische Daten vorliegen.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "pretraining",
    "fine-tuning",
    "foundation-model",
    "distillation",
    "few-shot-learning"
   ]
  },
  {
   "id": "synthetische-daten",
   "cat": "ml",
   "risk": null,
   "q": "Was sind synthetische Daten?",
   "term": "Synthetische Daten",
   "short": "Künstlich erzeugte Daten, die die statistischen Eigenschaften echter Daten nachbilden, ohne reale Einzelpersonen abzubilden.",
   "long": "Synthetische Daten werden von Modellen oder Simulationen erzeugt und dienen dazu, echte, oft knappe oder sensible Daten zu ergänzen oder zu ersetzen. Vorteile: Datenschutz (keine realen Personendaten), Ausgleich seltener Fälle, Reduktion von Bias durch gezielte Ergänzung unterrepräsentierter Gruppen. Risiken: Wenn Modelle zu stark auf ihren eigenen Ausgaben trainiert werden, kann die Qualität kollabieren (\"model collapse\"). Relevant für Daten-Governance (Art. 10) und datenschutzfreundliches Training; auch in Reallaboren ein Thema.",
   "links": [
    {
     "label": "Art. 10 AI Act",
     "url": "https://artificialintelligenceact.eu/article/10/"
    }
   ],
   "related": [
    "daten-governance",
    "trainingsdaten",
    "bias",
    "digitaler-zwilling",
    "datenaugmentation"
   ]
  },
  {
   "id": "edge-ai",
   "cat": "ml",
   "risk": null,
   "q": "Was ist Edge-KI (On-Device AI)?",
   "term": "Edge-KI (On-Device AI)",
   "short": "KI, die direkt auf dem Endgerät läuft, statt Anfragen an entfernte Rechenzentren zu senden.",
   "long": "Bei Edge-KI findet die Inferenz lokal statt – auf Smartphone, Sensor, Fahrzeug oder Industriemaschine. Vorteile: geringe Latenz, Funktion ohne Internetverbindung, Datenschutz (Daten verlassen das Gerät nicht) und geringere laufende Kosten. Möglich wird dies durch Modellkompression (Quantisierung, Distillation) und spezialisierte Hardware. Grenzen: begrenzte Rechenleistung und Speicher. Relevant für datenschutzfreundliche Architekturen und für sicherheitskritische Echtzeitanwendungen, etwa in Fahrzeugen oder Medizingeräten.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "quantisierung",
    "distillation",
    "inferenz",
    "federated-learning",
    "neuromorphes-computing"
   ]
  },
  {
   "id": "ki-diagnostik",
   "cat": "ai-act-core",
   "risk": "high",
   "q": "Was ist KI-gestützte Diagnostik?",
   "term": "KI-gestützte Diagnostik",
   "short": "KI-Systeme, die medizinische Daten auswerten, um Krankheiten zu erkennen oder Befunde zu unterstützen – meist Hochrisiko über die Medizinprodukte-Schiene.",
   "long": "Diagnostische KI analysiert Bilder (Röntgen, MRT, Pathologie), Signale (EKG) oder strukturierte Patientendaten. Rechtlich läuft die Einstufung meist über Anhang I des AI Act (Medizinprodukte-VO MDR/IVDR): Ist die KI ein Medizinprodukt oder dessen Sicherheitsbauteil, gilt sie als Hochrisiko-System mit integrierter Konformitätsbewertung. Zentrale Anforderungen: klinische Validierung, Genauigkeit und Robustheit (Art. 15), menschliche Aufsicht, Bias-Kontrolle über Bevölkerungsgruppen. Verzahnung mit MDR, DSGVO (Gesundheitsdaten) und künftig dem Europäischen Gesundheitsdatenraum.",
   "links": [
    {
     "label": "MDR (VO 2017/745)",
     "url": "https://eur-lex.europa.eu/eli/reg/2017/745/oj"
    }
   ],
   "related": [
    "samd",
    "radiologie-ki",
    "klinische-entscheidungsunterstuetzung",
    "mdr-schnittstelle",
    "arzneimittelforschung-ki"
   ]
  },
  {
   "id": "samd",
   "cat": "ai-act-core",
   "risk": "high",
   "q": "Was ist Software als Medizinprodukt (SaMD)?",
   "term": "Software als Medizinprodukt (SaMD)",
   "short": "Software, die für medizinische Zwecke bestimmt ist und für sich allein ein Medizinprodukt darstellt – ohne Teil eines Geräts zu sein.",
   "long": "SaMD (\"Software as a Medical Device\") umfasst eigenständige Programme zu Diagnose, Überwachung, Vorhersage oder Therapieunterstützung – etwa eine App zur Hautkrebs-Erkennung. Die Risikoklassifizierung nach MDR (Regel 11) entscheidet über die Konformitätsbewertung; ab Klasse IIa ist eine benannte Stelle nötig. Enthält die SaMD KI, greift zusätzlich der AI Act (Hochrisiko über Anhang I). Praktisch bedeutet das eine integrierte Bewertung, die MDR- und AI-Act-Anforderungen zusammenführt. Abzugrenzen von reinen Wellness-Apps ohne medizinische Zweckbestimmung.",
   "links": [
    {
     "label": "MDR (VO 2017/745)",
     "url": "https://eur-lex.europa.eu/eli/reg/2017/745/oj"
    }
   ],
   "related": [
    "ki-diagnostik",
    "mdr-schnittstelle",
    "sicherheitsbauteil"
   ]
  },
  {
   "id": "klinische-entscheidungsunterstuetzung",
   "cat": "ai-act-core",
   "risk": "high",
   "q": "Was ist klinische Entscheidungsunterstützung (CDSS)?",
   "term": "Klinische Entscheidungsunterstützung (CDSS)",
   "short": "KI-Systeme, die medizinisches Personal bei Diagnose- und Therapieentscheidungen unterstützen, ohne die ärztliche Letztverantwortung zu ersetzen.",
   "long": "Ein Clinical Decision Support System (CDSS) liefert Empfehlungen, Warnungen oder Priorisierungen – etwa Medikamenteninteraktionen, Sepsis-Frühwarnung oder Behandlungsvorschläge. Der Mensch-in-der-Schleife-Ansatz ist hier zentral: Die menschliche Aufsicht (Art. 14) und das Recht der Patienten auf Erklärung (Art. 86) sind besonders bedeutsam. Risiko des Automatisierungsbias – dass Ärzte Empfehlungen unkritisch folgen. Gute CDSS erklären ihre Vorschläge nachvollziehbar (XAI). Verzahnung mit MDR, ärztlichem Berufsrecht und Haftungsfragen.",
   "links": [
    {
     "label": "Art. 14 AI Act",
     "url": "https://artificialintelligenceact.eu/article/14/"
    }
   ],
   "related": [
    "ki-diagnostik",
    "menschliche-aufsicht",
    "erklaerungsrecht",
    "automation-bias"
   ]
  },
  {
   "id": "radiologie-ki",
   "cat": "cv",
   "risk": "high",
   "q": "Wie wird KI in der Radiologie eingesetzt?",
   "term": "KI in der Radiologie",
   "short": "Bildanalyse-KI zur Erkennung und Vermessung von Auffälligkeiten in radiologischen Aufnahmen – der am weitesten verbreitete klinische KI-Einsatz.",
   "long": "Radiologie-KI erkennt z. B. Lungenknoten, Tumore, Frakturen oder Blutungen in CT, MRT, Röntgen und Mammographie. Sie priorisiert dringende Fälle, misst Strukturen und reduziert das Übersehen von Befunden. Technisch beruht sie meist auf Convolutional Neural Networks (CNN). Als Medizinprodukt Hochrisiko-KI: klinische Validierung, Genauigkeit über verschiedene Geräte und Patientengruppen, kontinuierliches Monitoring gegen Drift. Bekannte Herausforderung: Generalisierung auf Bilder anderer Kliniken/Geräte als im Training. Menschliche Befundung bleibt die Regel.",
   "links": [
    {
     "label": "MDR (VO 2017/745)",
     "url": "https://eur-lex.europa.eu/eli/reg/2017/745/oj"
    }
   ],
   "related": [
    "ki-diagnostik",
    "computer-vision",
    "cnn",
    "medizinische-bildsegmentierung"
   ]
  },
  {
   "id": "arzneimittelforschung-ki",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Wie wird KI in der Arzneimittelforschung eingesetzt?",
   "term": "KI in der Arzneimittelforschung",
   "short": "Einsatz von KI zur Entdeckung, zum Design und zur Optimierung von Wirkstoffen sowie zur Planung klinischer Studien.",
   "long": "KI beschleunigt die Wirkstoffforschung, indem sie Molekülstrukturen vorhersagt (z. B. Proteinfaltung), vielversprechende Kandidaten identifiziert, Nebenwirkungen modelliert und Studienpopulationen optimiert. Meist fällt reine Forschung unter die Forschungsausnahme des AI Act (Art. 2). Sobald jedoch ein diagnostisches oder therapeutisches Produkt entsteht, greifen MDR und AI Act. Berührungspunkte: Arzneimittelrecht (EMA-Zulassung), Datenschutz bei Patientendaten, Fragen des geistigen Eigentums an KI-generierten Molekülen. Hoher wirtschaftlicher und gesellschaftlicher Nutzen erwartet.",
   "links": [
    {
     "label": "Art. 2 AI Act",
     "url": "https://artificialintelligenceact.eu/article/2/"
    }
   ],
   "related": [
    "ki-diagnostik",
    "wissenschaftsausnahme",
    "ehds"
   ]
  },
  {
   "id": "ehds",
   "cat": "governance",
   "risk": null,
   "q": "Was ist der Europäische Gesundheitsdatenraum (EHDS)?",
   "term": "Europäischer Gesundheitsdatenraum (EHDS)",
   "short": "EU-Verordnung, die den Austausch und die Nutzung von Gesundheitsdaten für Versorgung und Forschung europaweit regelt.",
   "long": "Der European Health Data Space (VO (EU) 2025/327) schafft zwei Nutzungsstränge: die Primärnutzung (Zugriff von Patienten und Behandelnden auf elektronische Gesundheitsdaten grenzüberschreitend) und die Sekundärnutzung (Bereitstellung pseudonymisierter Daten für Forschung, Innovation, Politik und – ausdrücklich – das Training von KI). Für KI-Entwickler eine wichtige, regulierte Datenquelle. Enge Verzahnung mit DSGVO, AI Act (Daten-Governance, Art. 10) und MDR. Nationale Zugangsstellen (Health Data Access Bodies) steuern den Zugang. Stufenweise Anwendung ab 2027/2029.",
   "links": [
    {
     "label": "EHDS (VO 2025/327)",
     "url": "https://eur-lex.europa.eu/eli/reg/2025/327/oj"
    }
   ],
   "related": [
    "daten-governance",
    "dsgvo-schnittstelle",
    "arzneimittelforschung-ki"
   ]
  },
  {
   "id": "algorithmischer-handel",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was ist algorithmischer Handel?",
   "term": "Algorithmischer Handel",
   "short": "Computergestützter Wertpapierhandel, bei dem Algorithmen – zunehmend KI-basiert – Orders eigenständig platzieren und steuern.",
   "long": "Algorithmischer Handel reicht von einfachen regelbasierten Systemen bis zum Hochfrequenzhandel (HFT) im Mikrosekundenbereich. KI-Verfahren erkennen Muster, prognostizieren Kurse und optimieren Ausführung. Reguliert primär durch das Finanzmarktrecht (MiFID II, MAR – Marktmissbrauchsverordnung), nicht durchgängig als Hochrisiko im AI Act eingestuft. Risiken: Flash Crashes, algorithmische Kollusion, Marktmanipulation. Aufsicht durch BaFin und ESMA. Der AI Act greift ergänzend v. a. bei Transparenz und Governance; Kreditwürdigkeit und Betrugserkennung sind gesondert geregelt.",
   "links": [
    {
     "label": "ESMA",
     "url": "https://www.esma.europa.eu/"
    }
   ],
   "related": [
    "robo-advisor",
    "betrugserkennung",
    "dora"
   ]
  },
  {
   "id": "robo-advisor",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was ist ein Robo-Advisor?",
   "term": "Robo-Advisor",
   "short": "Automatisierte, algorithmengestützte Anlageberatung und Vermögensverwaltung mit minimalem menschlichem Eingriff.",
   "long": "Robo-Advisor ermitteln über Fragebögen Risikoprofil und Ziele der Kunden und schlagen automatisiert Portfolios vor, die sie laufend anpassen (Rebalancing). Reguliert durch Finanzmarktrecht (MiFID II: Geeignetheitsprüfung, Kosteninformation). Der AI Act ist nicht automatisch einschlägig, kann aber bei bestimmten Ausgestaltungen greifen (Transparenz, Verbraucherschutz). Risiken: unpassende Empfehlungen bei fehlerhafter Profilierung, Herdenverhalten durch gleichartige Algorithmen, mangelnde Erklärbarkeit. Verzahnung mit Verbraucherschutz und dem Recht auf menschlichen Ansprechpartner.",
   "links": [
    {
     "label": "ESMA",
     "url": "https://www.esma.europa.eu/"
    }
   ],
   "related": [
    "algorithmischer-handel",
    "verbraucherschutz-schnittstelle",
    "kreditrisikomodell"
   ]
  },
  {
   "id": "geldwaescheerkennung",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Wie hilft KI bei der Geldwäscheerkennung (AML)?",
   "term": "KI in der Geldwäscheerkennung (AML)",
   "short": "KI-Systeme, die Finanztransaktionen überwachen, um Geldwäsche und Terrorismusfinanzierung zu erkennen (Anti-Money-Laundering).",
   "long": "AML-KI analysiert Transaktionsmuster, erkennt Anomalien und generiert Verdachtsmeldungen. Reguliert primär durch das Geldwäscherecht (EU-Geldwäscherichtlinien, künftig die AML-Verordnung und die neue Behörde AMLA). Nicht per se Hochrisiko im AI Act, da Betrugs- und Geldwäscheerkennung bei Finanzdienstleistungen teils ausgenommen ist. Herausforderungen: hohe Rate an Fehlalarmen (false positives), Bias-Risiken bei der Kundenauswahl, Datenschutz. Verzahnung mit DSGVO und der Aufsicht durch BaFin/AMLA. Menschliche Prüfung der Verdachtsfälle bleibt zentral.",
   "links": [
    {
     "label": "AMLA",
     "url": "https://finance.ec.europa.eu/financial-crime/anti-money-laundering-and-countering-financing-terrorism_en"
    }
   ],
   "related": [
    "betrugserkennung",
    "dora",
    "profiling"
   ]
  },
  {
   "id": "betrugserkennung",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Wie funktioniert KI-Betrugserkennung?",
   "term": "KI-Betrugserkennung",
   "short": "KI-Systeme zur Echtzeit-Erkennung betrügerischer Transaktionen – im AI Act ausdrücklich von der Hochrisiko-Kreditwürdigkeit ausgenommen.",
   "long": "Betrugserkennung überwacht Zahlungen und erkennt ungewöhnliche Muster (etwa gestohlene Kreditkarten) meist über Anomalieerkennung und überwachtes Lernen. Der AI Act nimmt die Betrugserkennung bei Finanzdienstleistungen ausdrücklich von der Hochrisiko-Einstufung der Kreditwürdigkeitsprüfung aus (Anhang III Nr. 5 lit. b). Gleichwohl gelten DSGVO und Verbraucherschutz. Herausforderungen: Balance zwischen Sicherheit und Kundenfreundlichkeit (blockierte legitime Zahlungen), Bias, Erklärbarkeit gegenüber Betroffenen. Abzugrenzen von der hochrisikorelevanten Bonitätsbewertung.",
   "links": [
    {
     "label": "Anhang III",
     "url": "https://artificialintelligenceact.eu/annex/3/"
    }
   ],
   "related": [
    "geldwaescheerkennung",
    "kreditwuerdigkeit",
    "algorithmischer-handel",
    "insurtech",
    "anomalieerkennung"
   ]
  },
  {
   "id": "dora",
   "cat": "security",
   "risk": null,
   "q": "Was regelt DORA (Digital Operational Resilience Act)?",
   "term": "DORA (Digital Operational Resilience Act)",
   "short": "EU-Verordnung zur digitalen operationalen Resilienz des Finanzsektors, die auch KI-gestützte IKT-Systeme erfasst.",
   "long": "DORA (VO (EU) 2022/2554, anwendbar seit Januar 2025) verpflichtet Banken, Versicherer und weitere Finanzunternehmen zu robustem IKT-Risikomanagement, Vorfallmeldung, Resilienztests und der Überwachung kritischer Drittdienstleister (etwa Cloud- und KI-Anbieter). Für KI im Finanzsektor relevant, weil deren Ausfall oder Manipulation die operationale Stabilität gefährden kann. Überschneidung mit dem AI Act (Robustheit, Cybersicherheit nach Art. 15) und NIS-2. Aufsicht durch die europäischen Finanzaufsichtsbehörden. Ein Baustein integrierter Compliance im Finanzsektor.",
   "links": [
    {
     "label": "DORA (VO 2022/2554)",
     "url": "https://eur-lex.europa.eu/eli/reg/2022/2554/oj"
    }
   ],
   "related": [
    "nis2-schnittstelle",
    "cra-schnittstelle",
    "algorithmischer-handel",
    "geldwaescheerkennung",
    "bafin-ki"
   ]
  },
  {
   "id": "kreditrisikomodell",
   "cat": "ai-act-core",
   "risk": "high",
   "q": "Was ist ein Kreditrisikomodell?",
   "term": "Kreditrisikomodell",
   "short": "Statistisches oder KI-Modell, das die Ausfallwahrscheinlichkeit von Kreditnehmern schätzt – eng verknüpft mit der Hochrisiko-Kreditwürdigkeitsprüfung.",
   "long": "Kreditrisikomodelle bewerten, wie wahrscheinlich ein Kreditnehmer ausfällt (Probability of Default), und fließen in Kreditentscheidung und Bepreisung ein. Bankaufsichtsrechtlich reguliert (CRR/Basel, interne Ratings müssen von der Aufsicht abgenommen werden). Soweit sie die Kreditwürdigkeit natürlicher Personen bewerten, sind sie Hochrisiko-KI (Anhang III Nr. 5 lit. b). Spannungsfeld: aufsichtsrechtliche Nachvollziehbarkeit vs. Komplexität moderner ML-Modelle. Anforderungen an Erklärbarkeit (XAI), Bias-Kontrolle und Daten-Governance treffen hier zusammen.",
   "links": [
    {
     "label": "Anhang III",
     "url": "https://artificialintelligenceact.eu/annex/3/"
    }
   ],
   "related": [
    "kreditwuerdigkeit",
    "xai",
    "robo-advisor",
    "bafin-ki"
   ]
  },
  {
   "id": "autonomes-fahren",
   "cat": "ai-act-core",
   "risk": "high",
   "q": "Was ist autonomes Fahren, und wie wird es reguliert?",
   "term": "Autonomes Fahren",
   "short": "KI-gesteuerte Fahrzeugführung, klassifiziert in sechs Automatisierungsstufen (SAE Level 0–5) von Assistenz bis Vollautonomie.",
   "long": "Die SAE-Level reichen von 0 (keine Automatisierung) über 2 (teilautomatisiert, Fahrer überwacht) und 3 (bedingt automatisiert, System fährt in Grenzen selbst) bis 5 (vollautonom, kein Fahrer nötig). Rechtlich läuft die Einstufung über die Fahrzeug-Typgenehmigung (Anhang I AI Act, UN-Regelungen); KI-Fahrfunktionen sind Sicherheitsbauteile und damit Hochrisiko. Zentrale Anforderungen: funktionale Sicherheit, Robustheit gegen Edge Cases, Cybersicherheit (UN-R155), Nachvollziehbarkeit von Fahrentscheidungen. Haftungs- und ethische Fragen (Dilemma-Situationen) sind ungelöst.",
   "links": [
    {
     "label": "Anhang I",
     "url": "https://artificialintelligenceact.eu/annex/1/"
    }
   ],
   "related": [
    "adas",
    "un-r155",
    "v2x",
    "sicherheitsbauteil",
    "tiefenschaetzung"
   ]
  },
  {
   "id": "adas",
   "cat": "cv",
   "risk": "high",
   "q": "Was sind Fahrerassistenzsysteme (ADAS)?",
   "term": "Fahrerassistenzsysteme (ADAS)",
   "short": "KI-gestützte Systeme, die den Fahrer unterstützen – etwa Notbremsassistent, Spurhalteassistent oder adaptive Geschwindigkeitsregelung.",
   "long": "Advanced Driver Assistance Systems (ADAS) entsprechen meist SAE-Level 1–2. Sie nutzen Kameras, Radar und Lidar mit KI-Bildverarbeitung (oft CNN), um Objekte, Spuren und Gefahren zu erkennen. Als Sicherheitsbauteile fallen sie unter die Fahrzeug-Typgenehmigung und damit als Hochrisiko unter den AI Act (Anhang I). In der EU sind bestimmte ADAS seit 2024 für Neufahrzeuge verpflichtend (General Safety Regulation). Anforderungen: Zuverlässigkeit bei schlechten Sicht- und Wetterbedingungen, Vermeidung von Fehlauslösungen, Zusammenspiel mit dem Fahrer.",
   "links": [
    {
     "label": "Anhang I",
     "url": "https://artificialintelligenceact.eu/annex/1/"
    }
   ],
   "related": [
    "autonomes-fahren",
    "computer-vision",
    "cnn",
    "objekterkennung"
   ]
  },
  {
   "id": "v2x",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was ist Vehicle-to-Everything (V2X)?",
   "term": "Vehicle-to-Everything (V2X)",
   "short": "Vernetzte Kommunikation zwischen Fahrzeugen und ihrer Umgebung (andere Fahrzeuge, Infrastruktur, Fußgänger) zur Erhöhung von Sicherheit und Effizienz.",
   "long": "V2X umfasst Fahrzeug-zu-Fahrzeug (V2V), Fahrzeug-zu-Infrastruktur (V2I) und weitere Varianten. KI wertet die ausgetauschten Daten aus, um Gefahren früher zu erkennen, Verkehrsflüsse zu optimieren und kooperatives Fahren zu ermöglichen. Berührungspunkte: Cybersicherheit (manipulierte Nachrichten könnten Unfälle auslösen), Datenschutz (Bewegungsprofile), kritische Infrastruktur. Verzahnung mit NIS-2, dem Data Act (Fahrzeugdaten) und – bei sicherheitsrelevanten Funktionen – dem AI Act. Grundlage für intelligente Verkehrssysteme und künftige Mobilitätsdatenräume.",
   "links": [
    {
     "label": "Data Act (VO 2023/2854)",
     "url": "https://eur-lex.europa.eu/eli/reg/2023/2854/oj"
    }
   ],
   "related": [
    "autonomes-fahren",
    "verkehrsmanagement-ki",
    "datenverordnung-schnittstelle"
   ]
  },
  {
   "id": "verkehrsmanagement-ki",
   "cat": "ai-act-core",
   "risk": "high",
   "q": "Wie wird KI im Verkehrsmanagement eingesetzt?",
   "term": "KI im Verkehrsmanagement",
   "short": "KI-Systeme zur Steuerung und Optimierung des Verkehrsflusses – als Sicherheitsbauteil kritischer Verkehrsinfrastruktur oft Hochrisiko.",
   "long": "Intelligente Verkehrssysteme steuern Ampeln, Verkehrsleitsysteme, Mautsysteme und den öffentlichen Nahverkehr. Sie prognostizieren Verkehrsaufkommen, optimieren Signalschaltungen und reagieren auf Störungen. Soweit sie Sicherheitsbauteile im Management des Straßenverkehrs sind, gelten sie als Hochrisiko-KI (Anhang III Nr. 2 – kritische Infrastruktur). Anforderungen: Robustheit, Ausfallsicherheit, Cybersicherheit (NIS-2). Fehlfunktionen können Staus, Unfälle oder den Zusammenbruch der Verkehrssteuerung verursachen. Datenschutz relevant bei kamerabasierter Erfassung.",
   "links": [
    {
     "label": "Anhang III",
     "url": "https://artificialintelligenceact.eu/annex/3/"
    }
   ],
   "related": [
    "kritische-infrastruktur",
    "v2x",
    "energie-ki"
   ]
  },
  {
   "id": "un-r155",
   "cat": "security",
   "risk": null,
   "q": "Was regeln UN-R155 und UN-R156?",
   "term": "UN-R155 / UN-R156 (Automotive-Cybersecurity)",
   "short": "UN-Regelungen zur Cybersicherheit und zum Software-Update-Management vernetzter Fahrzeuge.",
   "long": "UN-R155 verlangt ein Cybersecurity-Managementsystem (CSMS) über den gesamten Fahrzeuglebenszyklus; UN-R156 regelt sichere Software-Updates (SUMS). Beide sind für die Typgenehmigung neuer Fahrzeuge in der EU verbindlich. Für KI-Fahrfunktionen relevant, weil Manipulation (etwa von Sensordaten oder Steuerlogik) unmittelbar sicherheitskritisch ist. Verzahnung mit dem AI Act (Cybersicherheit nach Art. 15), dem Cyber Resilience Act und der Produkthaftung. Beispiel für sektorspezifische Sicherheitsregulierung, die neben dem horizontalen AI Act greift.",
   "links": [
    {
     "label": "UNECE",
     "url": "https://unece.org/transport/vehicle-regulations"
    }
   ],
   "related": [
    "autonomes-fahren",
    "cra-schnittstelle",
    "genauigkeit-robustheit"
   ]
  },
  {
   "id": "people-analytics",
   "cat": "ai-act-core",
   "risk": "high",
   "q": "Was ist People Analytics?",
   "term": "People Analytics",
   "short": "Datengestützte Analyse von Beschäftigtendaten zur Unterstützung von Personalentscheidungen – im Beschäftigungskontext meist Hochrisiko.",
   "long": "People Analytics wertet Daten zu Leistung, Fluktuation, Engagement oder Zusammenarbeit aus, um Muster zu erkennen und Personalentscheidungen zu stützen. Soweit dabei über Auswahl, Beförderung, Zuweisung oder Kündigung mitentschieden wird, greift die Hochrisiko-Einstufung (Anhang III Nr. 4). Verzahnung mit Beschäftigtendatenschutz (Art. 88 DSGVO, § 26 BDSG), Mitbestimmung (§ 87 BetrVG) und Antidiskriminierungsrecht. Zentrale Risiken: Profiling, Bias, Überwachungsdruck. FRIA und menschliche Aufsicht sind hier besonders bedeutsam. Abzugrenzen von rein aggregierten, anonymen Auswertungen.",
   "links": [
    {
     "label": "Anhang III",
     "url": "https://artificialintelligenceact.eu/annex/3/"
    }
   ],
   "related": [
    "ki-beschaeftigung",
    "skills-matching",
    "profiling",
    "workforce-planning"
   ]
  },
  {
   "id": "skills-matching",
   "cat": "ai-act-core",
   "risk": "high",
   "q": "Was ist Skills-Matching?",
   "term": "Skills-Matching",
   "short": "KI-gestützter Abgleich von Kompetenzen mit Anforderungen – für Stellenbesetzung, interne Mobilität oder Weiterbildung.",
   "long": "Skills-Matching-Systeme analysieren Fähigkeiten von Bewerbern oder Beschäftigten und gleichen sie mit Rollenanforderungen ab, um passende Kandidaten, interne Wechsel oder Lernpfade vorzuschlagen. Im Rekrutierungs- und Personalkontext meist Hochrisiko (Anhang III Nr. 4). Risiken: Bias durch historische Daten, Benachteiligung nicht-linearer Lebensläufe, Intransparenz der Kriterien. Chancen: objektivere, kompetenzbasierte statt abschlussfixierte Auswahl, wenn sorgfältig gestaltet. Anforderungen an Daten-Governance, Fairness und Erklärbarkeit gegenüber Betroffenen.",
   "links": [
    {
     "label": "Anhang III",
     "url": "https://artificialintelligenceact.eu/annex/3/"
    }
   ],
   "related": [
    "cv-screening",
    "people-analytics",
    "ki-beschaeftigung"
   ]
  },
  {
   "id": "workforce-planning",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was ist KI-gestützte Personalplanung?",
   "term": "KI-gestützte Personalplanung",
   "short": "Prognose und Optimierung des Personalbedarfs mithilfe von KI – von Schichtplanung bis strategischer Kapazitätsplanung.",
   "long": "Workforce Planning nutzt KI, um künftigen Personalbedarf zu prognostizieren, Schichten und Einsätze zu optimieren und Engpässe frühzeitig zu erkennen. Ob Hochrisiko, hängt von der konkreten Wirkung ab: Reine aggregierte Kapazitätsplanung ist meist unkritisch; sobald jedoch individuelle Zuweisungen, Arbeitsbedingungen oder Bewertungen betroffen sind, kann die Hochrisiko-Einstufung (Anhang III Nr. 4) greifen. Verzahnung mit Arbeitszeitrecht, Mitbestimmung und – bei Plattformarbeit – der Plattformarbeits-Richtlinie. Grenze zum algorithmischen Management ist fließend.",
   "links": [
    {
     "label": "Anhang III",
     "url": "https://artificialintelligenceact.eu/annex/3/"
    }
   ],
   "related": [
    "algorithmisches-management",
    "people-analytics",
    "ki-beschaeftigung"
   ]
  },
  {
   "id": "sentiment-analyse",
   "cat": "nlp",
   "risk": null,
   "q": "Was ist Sentiment-Analyse?",
   "term": "Sentiment-Analyse",
   "short": "NLP-Verfahren, das die emotionale Tönung oder Meinung in Texten erkennt – von Produktbewertungen bis Mitarbeiterbefragungen.",
   "long": "Sentiment-Analyse (Stimmungsanalyse) klassifiziert Texte nach positiver, negativer oder neutraler Tönung, teils feiner nach Emotionen oder Aspekten. Anwendungen: Marktforschung, Kundenservice, Social-Media-Monitoring, Auswertung von Mitarbeiterfeedback. Wichtige Abgrenzung: Reine Text-Sentiment-Analyse ist nicht dasselbe wie die im Arbeits- und Bildungskontext verbotene biometrische Emotionserkennung (Art. 5), die auf biometrischen Daten wie Mimik oder Stimme beruht. Im HR-Einsatz gleichwohl sensibel: Datenschutz, Mitbestimmung, mögliche Fehlinterpretation von Ironie und Kontext.",
   "links": [
    {
     "label": "Art. 5 AI Act",
     "url": "https://artificialintelligenceact.eu/article/5/"
    }
   ],
   "related": [
    "nlp",
    "emotionserkennung",
    "content-moderation",
    "topic-modeling",
    "textklassifikation"
   ]
  },
  {
   "id": "chatbot-kundenservice",
   "cat": "nlp",
   "risk": "limited",
   "q": "Was gilt für Kundenservice-Chatbots?",
   "term": "Kundenservice-Chatbot",
   "short": "KI-Systeme im direkten Dialog mit Menschen, die einer Transparenzpflicht unterliegen: Nutzer müssen wissen, dass sie mit einer KI sprechen (Art. 50).",
   "long": "Chatbots und virtuelle Assistenten im Kundenservice beantworten Anfragen, lösen Probleme oder leiten weiter. Sie fallen unter die Transparenzpflichten des AI Act (Art. 50 Abs. 1): Interagiert eine Person mit einem KI-System, muss dies offengelegt werden, sofern es nicht offensichtlich ist. Moderne Chatbots basieren zunehmend auf LLMs mit RAG-Anbindung an Unternehmenswissen. Risiken: Halluzinationen, fehlerhafte Auskünfte mit Rechtsfolgen, Barrierefreiheit. Verzahnung mit Verbraucherschutz. Meist begrenztes Risiko, nicht Hochrisiko – sofern keine hochrisikorelevante Entscheidung getroffen wird.",
   "links": [
    {
     "label": "Art. 50 AI Act",
     "url": "https://artificialintelligenceact.eu/article/50/"
    }
   ],
   "related": [
    "transparenzpflichten",
    "llm",
    "rag",
    "question-answering"
   ]
  },
  {
   "id": "predictive-maintenance",
   "cat": "ml",
   "risk": null,
   "q": "Was ist vorausschauende Wartung (Predictive Maintenance)?",
   "term": "Vorausschauende Wartung (Predictive Maintenance)",
   "short": "KI, die aus Sensordaten den Ausfall von Maschinen vorhersagt, um Wartung rechtzeitig und bedarfsgerecht zu planen.",
   "long": "Predictive Maintenance wertet Sensordaten (Vibration, Temperatur, Druck, Akustik) aus, um Verschleiß und drohende Ausfälle frühzeitig zu erkennen. Ziel: ungeplante Stillstände vermeiden, Wartung optimieren, Kosten senken. Technisch beruht sie auf Anomalieerkennung, Zeitreihenanalyse und teils Deep Learning. Meist nicht hochrisikorelevant im Sinne des AI Act – es sei denn, sie ist Sicherheitsbauteil einer Maschine (Maschinen-VO, Anhang I) und ihr Versagen gefährdet Personen. Verzahnung mit Industrial IoT, digitalen Zwillingen und dem Data Act (Maschinendaten).",
   "links": [
    {
     "label": "Anhang I",
     "url": "https://artificialintelligenceact.eu/annex/1/"
    }
   ],
   "related": [
    "digitaler-zwilling",
    "machine-vision-qc",
    "prozessoptimierung-ki",
    "anomalieerkennung",
    "zeitreihenanalyse"
   ]
  },
  {
   "id": "machine-vision-qc",
   "cat": "cv",
   "risk": null,
   "q": "Wie funktioniert Qualitätskontrolle mit Machine Vision?",
   "term": "Qualitätskontrolle mit Machine Vision",
   "short": "Kamerabasierte KI-Bildverarbeitung, die Produkte automatisiert auf Fehler und Abweichungen prüft.",
   "long": "Machine-Vision-Systeme erfassen Bauteile per Kamera und erkennen mit KI-Bildverarbeitung (meist CNN) Kratzer, Risse, Maßabweichungen oder fehlende Komponenten – schneller und konstanter als menschliche Prüfung. Meist nicht hochrisikorelevant, da keine Auswirkung auf Personen; wird die Prüfung jedoch sicherheitsrelevant (z. B. Prüfung von Sicherheitsbauteilen), kann der AI Act über die Maschinen- oder Produktsicherheit greifen. Vorteile: gleichbleibende Qualität, Rückverfolgbarkeit, Ausschussreduktion. Herausforderung: Generalisierung auf neue Fehlerbilder und Produktvarianten.",
   "links": [
    {
     "label": "Anhang I",
     "url": "https://artificialintelligenceact.eu/annex/1/"
    }
   ],
   "related": [
    "computer-vision",
    "predictive-maintenance",
    "cnn",
    "cobot"
   ]
  },
  {
   "id": "digitaler-zwilling",
   "cat": "ml",
   "risk": null,
   "q": "Was ist ein digitaler Zwilling?",
   "term": "Digitaler Zwilling (Digital Twin)",
   "short": "Virtuelles, datengespeistes Abbild eines realen Objekts oder Systems, das dessen Verhalten simuliert und vorhersagt.",
   "long": "Ein digitaler Zwilling verbindet ein reales Objekt (Maschine, Fabrik, Gebäude, sogar Organ) über Sensordaten in Echtzeit mit seinem virtuellen Modell. KI wertet die Daten aus, simuliert Szenarien und optimiert Betrieb, Wartung und Entwurf. Anwendungen: Fertigung, Energie, Stadtplanung, Medizin. Meist kein eigenständiges Hochrisiko-System im AI Act, aber relevant als Werkzeug für Test und Entwicklung, für vorausschauende Wartung und für die Simulation vor Realeinsatz. Berührt Data Act (Datenzugang), Datenschutz (bei personenbezogenen Zwillingen) und geistiges Eigentum.",
   "links": [
    {
     "label": "Data Act (VO 2023/2854)",
     "url": "https://eur-lex.europa.eu/eli/reg/2023/2854/oj"
    }
   ],
   "related": [
    "predictive-maintenance",
    "synthetische-daten",
    "prozessoptimierung-ki"
   ]
  },
  {
   "id": "cobot",
   "cat": "ai-act-core",
   "risk": "high",
   "q": "Was ist ein kollaborativer Roboter (Cobot)?",
   "term": "Kollaborativer Roboter (Cobot)",
   "short": "Roboter, die direkt und ohne trennende Schutzzäune mit Menschen zusammenarbeiten – als Maschinen-Sicherheitsbauteil oft Hochrisiko.",
   "long": "Cobots (Collaborative Robots) teilen sich den Arbeitsraum mit Menschen und passen ihr Verhalten über Sensorik und KI an deren Anwesenheit an – etwa durch Kraftbegrenzung oder Ausweichbewegungen. Sicherheit hat höchste Priorität: Als Maschine bzw. deren Sicherheitsbauteil fallen KI-gesteuerte Sicherheitsfunktionen unter die Maschinen-Verordnung (Anhang I) und damit als Hochrisiko unter den AI Act. Anforderungen: funktionale Sicherheit, robuste Personenerkennung, Ausfallsicherheit. Verzahnung mit Arbeitsschutzrecht. Die neue EU-Maschinenverordnung adressiert KI in Maschinen ausdrücklich.",
   "links": [
    {
     "label": "Anhang I",
     "url": "https://artificialintelligenceact.eu/annex/1/"
    }
   ],
   "related": [
    "sicherheitsbauteil",
    "anhang-i",
    "machine-vision-qc",
    "verkoerperte-ki"
   ]
  },
  {
   "id": "prozessoptimierung-ki",
   "cat": "ml",
   "risk": null,
   "q": "Was leistet KI in der Prozessoptimierung?",
   "term": "KI-Prozessoptimierung",
   "short": "Einsatz von KI zur Optimierung industrieller Abläufe – von Produktionsplanung über Energieverbrauch bis Lieferketten.",
   "long": "KI-Prozessoptimierung analysiert Betriebsdaten, um Durchsatz zu erhöhen, Energie und Material zu sparen, Ausschuss zu senken und Lieferketten zu steuern. Methoden reichen von klassischer Optimierung über Reinforcement Learning bis zu Vorhersagemodellen. Meist nicht hochrisikorelevant im AI Act, da kein direkter Personenbezug – Ausnahmen bei sicherheitskritischer Steuerung oder Energie-/Versorgungsinfrastruktur (dann Anhang III Nr. 2). Wirtschaftlich einer der größten KI-Nutzenhebel im industriellen Umfeld. Verzahnung mit Nachhaltigkeitszielen und Energieeffizienz.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "predictive-maintenance",
    "supply-chain-ki",
    "rl",
    "digitaler-zwilling",
    "agrar-ki"
   ]
  },
  {
   "id": "supply-chain-ki",
   "cat": "ml",
   "risk": null,
   "q": "Wie wird KI im Lieferkettenmanagement eingesetzt?",
   "term": "KI im Lieferkettenmanagement",
   "short": "KI zur Nachfrageprognose, Bestandsoptimierung und Risikofrüherkennung in Liefer- und Wertschöpfungsketten.",
   "long": "KI im Supply Chain Management prognostiziert Nachfrage, optimiert Lagerbestände und Routen, erkennt Lieferrisiken (Ausfälle, Verzögerungen) frühzeitig und unterstützt die Beschaffung. Methoden: Zeitreihenprognose, Optimierung, teils generative Szenarien. Meist nicht hochrisikorelevant, aber wirtschaftlich bedeutsam und resilienzfördernd. Berührungspunkte: Lieferkettensorgfaltspflichten (LkSG, EU-CSDDD), Data Act (Datenaustausch zwischen Unternehmen), Wettbewerbsrecht bei gemeinsamen Datenpools. Zunehmend mit Nachhaltigkeits- und ESG-Anforderungen verknüpft.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "prozessoptimierung-ki",
    "datenverordnung-schnittstelle"
   ]
  },
  {
   "id": "agrar-ki",
   "cat": "ml",
   "risk": null,
   "q": "Wie wird KI in der Landwirtschaft (Precision Farming) genutzt?",
   "term": "KI in der Landwirtschaft (Precision Farming)",
   "short": "Datengestützte Präzisionslandwirtschaft, die Aussaat, Düngung, Bewässerung und Ernte mithilfe von KI optimiert.",
   "long": "Precision Farming nutzt Satelliten- und Drohnenbilder, Bodensensoren und Wetterdaten, um Felder kleinräumig zu bewirtschaften: gezielte Düngung, Unkrautbekämpfung per Bilderkennung, Ertragsprognosen, autonome Landmaschinen. Meist nicht hochrisikorelevant im AI Act; autonome Landmaschinen können jedoch als Maschinen-Sicherheitsbauteil (Anhang I) erfasst sein. Nutzen: Ressourcenschonung, höhere Erträge, Nachhaltigkeit. Berührungspunkte: Data Act (Maschinen- und Felddaten), Umweltrecht, Förderprogramme der Gemeinsamen Agrarpolitik.",
   "links": [
    {
     "label": "Anhang I",
     "url": "https://artificialintelligenceact.eu/annex/1/"
    }
   ],
   "related": [
    "computer-vision",
    "prozessoptimierung-ki",
    "anhang-i"
   ]
  },
  {
   "id": "energie-ki",
   "cat": "ai-act-core",
   "risk": "high",
   "q": "Wie wird KI im Energiesektor (Smart Grid) eingesetzt?",
   "term": "KI im Energiesektor (Smart Grid)",
   "short": "KI zur Steuerung von Stromnetzen, Erzeugung und Verbrauch – als Sicherheitsbauteil kritischer Energieinfrastruktur oft Hochrisiko.",
   "long": "KI in intelligenten Stromnetzen (Smart Grids) prognostiziert Erzeugung aus erneuerbaren Quellen, balanciert Angebot und Nachfrage, steuert Speicher und erkennt Störungen. Soweit sie Sicherheitsbauteil im Betrieb der Energieversorgung ist, gilt sie als Hochrisiko-KI (Anhang III Nr. 2 – kritische Infrastruktur). Anforderungen: Robustheit, Ausfallsicherheit, Cybersicherheit (NIS-2, kritische Einrichtungen). Ausfälle können großflächige Stromausfälle verursachen. Zentrale Rolle für die Energiewende und Netzstabilität bei wachsendem Anteil volatiler Erneuerbarer.",
   "links": [
    {
     "label": "Anhang III",
     "url": "https://artificialintelligenceact.eu/annex/3/"
    }
   ],
   "related": [
    "kritische-infrastruktur",
    "verkehrsmanagement-ki",
    "nis2-schnittstelle"
   ]
  },
  {
   "id": "content-moderation",
   "cat": "nlp",
   "risk": null,
   "q": "Was ist KI-Content-Moderation?",
   "term": "KI-Content-Moderation",
   "short": "Automatisierte Erkennung und Filterung problematischer Inhalte auf Plattformen – eng verzahnt mit dem Digital Services Act.",
   "long": "Content-Moderation-KI erkennt Hassrede, Gewalt, Desinformation, Spam oder illegale Inhalte in Text, Bild und Video. Reguliert primär durch den Digital Services Act (DSA), der Transparenz über Moderationssysteme, Beschwerdemechanismen und – bei sehr großen Plattformen – Risikobewertungen verlangt. Der AI Act greift ergänzend (etwa Transparenz). Herausforderungen: Kontextverständnis, Fehlerkennungen (Overblocking legitimer Inhalte vs. Übersehen schädlicher), sprachliche und kulturelle Verzerrungen, Meinungsfreiheit. Menschliche Überprüfung strittiger Fälle bleibt wichtig.",
   "links": [
    {
     "label": "DSA (VO 2022/2065)",
     "url": "https://eur-lex.europa.eu/eli/reg/2022/2065/oj"
    }
   ],
   "related": [
    "dsa-schnittstelle",
    "sentiment-analyse",
    "nlp",
    "hate-speech-detection"
   ]
  },
  {
   "id": "insurtech",
   "cat": "ai-act-core",
   "risk": "high",
   "q": "Was ist InsurTech?",
   "term": "KI in der Versicherung (InsurTech)",
   "short": "KI-Anwendungen in der Versicherungswirtschaft – von der Antragsprüfung über die Schadenregulierung bis zur Betrugserkennung.",
   "long": "InsurTech-KI unterstützt Antragsbearbeitung, Risikobewertung, dynamische Bepreisung, automatisierte Schadenregulierung und Betrugserkennung. Die Risikobewertung und Preisbildung in Lebens- und Krankenversicherung ist ausdrücklich Hochrisiko (Anhang III Nr. 5 lit. c); andere Sparten und Prozesse sind es nicht per se. Verzahnung mit Versicherungsaufsichtsrecht (Solvency II, IDD), DSGVO (Gesundheits- und Verhaltensdaten) und Antidiskriminierungsrecht. Zentrale Themen: Fairness, Transparenz der Tarifierung, Entsolidarisierung durch Individualtarife, Erklärbarkeit von Ablehnungen.",
   "links": [
    {
     "label": "Anhang III",
     "url": "https://artificialintelligenceact.eu/annex/3/"
    }
   ],
   "related": [
    "versicherung-scoring",
    "betrugserkennung",
    "fairness"
   ]
  },
  {
   "id": "legaltech",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was ist LegalTech?",
   "term": "KI im Rechtsbereich (LegalTech)",
   "short": "KI-Anwendungen für juristische Arbeit – Vertragsanalyse, Recherche, Dokumentenerstellung – abzugrenzen von der Hochrisiko-Justiz-KI.",
   "long": "LegalTech-KI unterstützt bei Vertragsanalyse und -erstellung, Rechtsrecherche, Dokumenten-Review (E-Discovery) und Prognosen zu Prozessaussichten. Im privatwirtschaftlichen Einsatz (Kanzleien, Rechtsabteilungen) meist nicht hochrisikorelevant. Streng abzugrenzen von KI, die Justizbehörden bei der Rechtsauslegung unterstützt – diese ist Hochrisiko (Anhang III Nr. 8). Herausforderungen: Halluzinationen mit gravierenden Folgen (erfundene Präzedenzfälle), Vertraulichkeit, Berufsrecht, Haftung. Der Mensch – die Anwältin, der Richter – trägt weiterhin die Verantwortung. LLMs mit RAG auf verlässliche Rechtsquellen sind hier verbreitet.",
   "links": [
    {
     "label": "Anhang III",
     "url": "https://artificialintelligenceact.eu/annex/3/"
    }
   ],
   "related": [
    "ki-justiz",
    "rag",
    "halluzination"
   ]
  },
  {
   "id": "data-poisoning",
   "cat": "security",
   "risk": null,
   "q": "Was ist Data Poisoning?",
   "term": "Data Poisoning",
   "short": "Angriff, bei dem Trainingsdaten gezielt manipuliert werden, um das Verhalten eines Modells zu verfälschen.",
   "long": "Beim Data Poisoning schleusen Angreifer manipulierte oder bösartige Beispiele in die Trainingsdaten ein. Ziel kann eine allgemeine Verschlechterung der Genauigkeit sein oder ein gezielter, versteckter Fehler (Backdoor), der nur bei bestimmten Auslösern auftritt. Besonders gefährlich bei Modellen, die aus offenen Web-Daten oder Nutzerbeiträgen lernen. Gegenmaßnahmen: Datenprüfung, Herkunftsnachweis, robuste Trainingsverfahren, Anomalieerkennung in Datensätzen. Der AI Act adressiert dies über Cybersicherheitsanforderungen (Art. 15) und Daten-Governance (Art. 10).",
   "links": [
    {
     "label": "Art. 15 AI Act",
     "url": "https://artificialintelligenceact.eu/article/15/"
    }
   ],
   "related": [
    "backdoor-attacke",
    "adversarial",
    "daten-governance",
    "supply-chain-security-ki",
    "evasion-attack"
   ]
  },
  {
   "id": "backdoor-attacke",
   "cat": "security",
   "risk": null,
   "q": "Was ist ein Backdoor-Angriff auf ein KI-Modell?",
   "term": "Backdoor-Angriff",
   "short": "Versteckte Manipulation eines Modells, die nur bei einem bestimmten geheimen Auslöser (Trigger) schädliches Verhalten zeigt.",
   "long": "Bei einem Backdoor-Angriff wird ein Modell – meist über Data Poisoning oder manipuliertes Training – so präpariert, dass es im Normalbetrieb unauffällig funktioniert, aber bei einem bestimmten Muster (z. B. einem unscheinbaren Pixelmuster oder einer Zeichenfolge) eine vom Angreifer gewünschte Ausgabe liefert. Das macht Backdoors schwer zu entdecken. Relevant besonders bei zugekauften oder heruntergeladenen Modellen unklarer Herkunft. Gegenmaßnahmen: Herkunftsnachweise, Modellprüfung, Fine-Tuning aus vertrauenswürdigen Quellen. Berührt Lieferkettensicherheit von KI.",
   "links": [
    {
     "label": "Art. 15 AI Act",
     "url": "https://artificialintelligenceact.eu/article/15/"
    }
   ],
   "related": [
    "data-poisoning",
    "supply-chain-security-ki",
    "model-extraction"
   ]
  },
  {
   "id": "model-inversion",
   "cat": "security",
   "risk": null,
   "q": "Was ist ein Model-Inversion-Angriff?",
   "term": "Model-Inversion-Angriff",
   "short": "Angriff, der aus den Ausgaben eines Modells sensible Merkmale der Trainingsdaten rekonstruiert.",
   "long": "Bei der Model Inversion versucht ein Angreifer, aus dem Zugriff auf ein Modell Rückschlüsse auf die zugrunde liegenden Trainingsdaten zu ziehen – etwa das Gesicht einer Person aus einem Gesichtserkennungsmodell zu rekonstruieren. Das gefährdet die Vertraulichkeit personenbezogener Trainingsdaten und berührt damit unmittelbar die DSGVO. Gegenmaßnahmen: Differential Privacy, Ausgabebeschränkung, Zugriffsbegrenzung. Ein zentrales Beispiel dafür, dass ein Modell selbst zum Datenschutzrisiko werden kann, auch wenn die Rohdaten geschützt sind.",
   "links": [
    {
     "label": "EDSA Opinion 28/2024",
     "url": "https://www.edpb.europa.eu/our-work-tools/our-documents/opinion-board-art-64/opinion-282024-certain-data-protection-aspects_en"
    }
   ],
   "related": [
    "membership-inference",
    "differential-privacy",
    "dsgvo-schnittstelle"
   ]
  },
  {
   "id": "membership-inference",
   "cat": "security",
   "risk": null,
   "q": "Was ist ein Membership-Inference-Angriff?",
   "term": "Membership-Inference-Angriff",
   "short": "Angriff, der feststellt, ob ein bestimmter Datensatz Teil der Trainingsdaten eines Modells war.",
   "long": "Bei der Membership Inference will ein Angreifer herausfinden, ob die Daten einer konkreten Person zum Training verwendet wurden. Schon diese Information kann sensibel sein – etwa wenn ein Modell auf Daten von Patienten einer bestimmten Klinik trainiert wurde und die Mitgliedschaft eine Erkrankung verrät. Datenschutzrechtlich bedeutsam (DSGVO). Modelle, die überanpassen (Overfitting), sind besonders anfällig. Gegenmaßnahmen: Differential Privacy, Regularisierung, Begrenzung des Overfittings. Wichtiges Konzept für die Bewertung von Datenschutzrisiken trainierter Modelle.",
   "links": [
    {
     "label": "EDSA Opinion 28/2024",
     "url": "https://www.edpb.europa.eu/our-work-tools/our-documents/opinion-board-art-64/opinion-282024-certain-data-protection-aspects_en"
    }
   ],
   "related": [
    "model-inversion",
    "differential-privacy",
    "overfitting"
   ]
  },
  {
   "id": "model-extraction",
   "cat": "security",
   "risk": null,
   "q": "Was ist ein Model-Extraction-Angriff?",
   "term": "Model-Extraction-Angriff",
   "short": "Angriff, der durch systematische Anfragen ein funktionales Abbild eines fremden Modells nachbaut (\"Modelldiebstahl\").",
   "long": "Bei der Model Extraction stellt ein Angreifer einem Modell viele Anfragen und nutzt die Antworten, um ein eigenes Modell zu trainieren, das dessen Verhalten nachahmt. So lassen sich teuer entwickelte Modelle kopieren, ohne die Trainingsdaten oder Gewichte zu besitzen. Das berührt Geschäftsgeheimnisse und geistiges Eigentum und ist eng verwandt mit der Wissensdestillation – nur ohne Erlaubnis. Gegenmaßnahmen: Abfrage-Ratenbegrenzung, Ausgabeverrauschen, Nutzungsbedingungen, Wasserzeichen in Modellen. Relevant für den Schutz von KI als Wirtschaftsgut.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "distillation",
    "backdoor-attacke",
    "urheberrecht-schnittstelle"
   ]
  },
  {
   "id": "jailbreak",
   "cat": "security",
   "risk": null,
   "q": "Was ist ein Jailbreak bei Sprachmodellen?",
   "term": "Jailbreak",
   "short": "Umgehung der Sicherheitsvorkehrungen eines Sprachmodells durch geschickt formulierte Eingaben, um verbotene Ausgaben zu erzwingen.",
   "long": "Ein Jailbreak überlistet das Alignment und die Guardrails eines Modells, sodass es Inhalte liefert, die es eigentlich verweigern sollte (etwa Anleitungen zu Schadsoftware). Techniken reichen von Rollenspiel-Prompts über Verschachtelung und Kodierung bis zu automatisiert gesuchten Angriffsmustern. Eng verwandt mit Prompt Injection, aber auf das Aushebeln von Sicherheitsregeln fokussiert. Gegenmaßnahmen: robustes Alignment, mehrschichtige Guardrails, adversariales Testen (AI Red Teaming). Dauerhaftes Wettrüsten zwischen Angreifern und Betreibern.",
   "links": [
    {
     "label": "Art. 15 AI Act",
     "url": "https://artificialintelligenceact.eu/article/15/"
    }
   ],
   "related": [
    "prompt-injection",
    "guardrails",
    "ai-red-teaming",
    "red-teaming-vs-blue"
   ]
  },
  {
   "id": "evasion-attack",
   "cat": "security",
   "risk": null,
   "q": "Was ist ein Evasion-Angriff?",
   "term": "Evasion-Angriff",
   "short": "Manipulation der Eingabe zur Laufzeit, um ein Modell zu einer falschen Ausgabe zu verleiten – ohne das Modell selbst zu verändern.",
   "long": "Beim Evasion-Angriff wird eine Eingabe so verändert, dass sie für Menschen unauffällig bleibt, das Modell aber täuscht – etwa ein leicht verändertes Verkehrsschild, das ein Bilderkennungssystem falsch klassifiziert. Anders als beim Data Poisoning (Angriff auf das Training) zielt Evasion auf die Inferenzphase. Eng verbunden mit dem Konzept der Adversarial Examples. Sicherheitskritisch bei autonomem Fahren, Gesichtserkennung, Malware-Erkennung. Gegenmaßnahmen: adversariales Training, robuste Architekturen, Eingabeprüfung. Ausdrücklich in den Cybersicherheitsanforderungen des AI Act (Art. 15) genannt.",
   "links": [
    {
     "label": "Art. 15 AI Act",
     "url": "https://artificialintelligenceact.eu/article/15/"
    }
   ],
   "related": [
    "adversarial",
    "data-poisoning",
    "genauigkeit-robustheit"
   ]
  },
  {
   "id": "supply-chain-security-ki",
   "cat": "security",
   "risk": null,
   "q": "Was bedeutet KI-Lieferkettensicherheit?",
   "term": "KI-Lieferkettensicherheit",
   "short": "Absicherung der gesamten Herkunfts- und Bezugskette von Modellen, Daten und Komponenten gegen Manipulation.",
   "long": "Moderne KI-Systeme setzen sich aus vielen Bausteinen zusammen: vortrainierte Modelle, Datensätze, Bibliotheken, Werkzeuge. Jede Stufe kann kompromittiert sein (manipulierte Modelle, vergiftete Daten, unsichere Abhängigkeiten). KI-Lieferkettensicherheit umfasst Herkunftsnachweise, Integritätsprüfungen, Software-Stücklisten (SBOM/AI-BOM), signierte Modelle und die Bewertung von Drittanbietern. Verzahnung mit dem Cyber Resilience Act, NIS-2 und den Cybersicherheitsanforderungen des AI Act (Art. 15). Besonders relevant bei Nutzung von Open-Source- oder zugekauften Modellen.",
   "links": [
    {
     "label": "CRA (VO 2024/2847)",
     "url": "https://eur-lex.europa.eu/eli/reg/2024/2847/oj"
    }
   ],
   "related": [
    "cra-schnittstelle",
    "backdoor-attacke",
    "open-source-ausnahme",
    "data-poisoning"
   ]
  },
  {
   "id": "differential-privacy",
   "cat": "security",
   "risk": null,
   "q": "Was ist Differential Privacy?",
   "term": "Differential Privacy",
   "short": "Mathematisch fundiertes Verfahren, das statistische Auswertungen ermöglicht, ohne Rückschlüsse auf einzelne Personen zuzulassen.",
   "long": "Differential Privacy fügt Daten oder Ergebnissen kontrolliertes Rauschen hinzu, sodass die Anwesenheit oder Abwesenheit einer einzelnen Person das Ergebnis kaum verändert. Ein Parameter (Epsilon) steuert den Kompromiss zwischen Datenschutz und Genauigkeit. Vorteil: eine beweisbare, quantifizierbare Datenschutzgarantie – stärker als bloße Anonymisierung. Eingesetzt bei Statistiken, im Modelltraining und von großen Tech-Anbietern. Schützt gegen Membership Inference und Model Inversion. Eine der wichtigsten Privacy-Enhancing Technologies (PET) für datenschutzfreundliche KI.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "federated-learning",
    "model-inversion",
    "anonymisierung",
    "membership-inference",
    "homomorphe-verschluesselung"
   ]
  },
  {
   "id": "federated-learning",
   "cat": "security",
   "risk": null,
   "q": "Was ist föderiertes Lernen (Federated Learning)?",
   "term": "Föderiertes Lernen (Federated Learning)",
   "short": "Trainingsverfahren, bei dem ein Modell dezentral über viele Geräte lernt, ohne dass die Rohdaten diese Geräte verlassen.",
   "long": "Beim föderierten Lernen wird das Modell an die Daten gebracht statt umgekehrt: Jedes Gerät (z. B. Smartphone, Klinik-Server) trainiert lokal mit seinen eigenen Daten, und nur die Modell-Aktualisierungen – nicht die Daten selbst – werden zusammengeführt. Vorteil: sensible Daten bleiben lokal, was Datenschutz und Datensouveränität stärkt. Anwendungen: Medizin, Mobilgeräte, Banken. Herausforderungen: Kommunikationsaufwand, uneinheitliche Daten, verbleibende Angriffsflächen (die Updates können Informationen preisgeben – daher oft mit Differential Privacy kombiniert).",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "differential-privacy",
    "datenminimierung",
    "edge-ai",
    "homomorphe-verschluesselung"
   ]
  },
  {
   "id": "homomorphe-verschluesselung",
   "cat": "security",
   "risk": null,
   "q": "Was ist homomorphe Verschlüsselung?",
   "term": "Homomorphe Verschlüsselung",
   "short": "Verschlüsselungsverfahren, das Berechnungen direkt auf verschlüsselten Daten erlaubt, ohne sie zu entschlüsseln.",
   "long": "Mit homomorpher Verschlüsselung kann ein Dienstleister Daten verarbeiten, ohne sie je im Klartext zu sehen – das Ergebnis der Berechnung ist ebenfalls verschlüsselt und nur vom Dateninhaber lesbar. Für KI bedeutet das: Ein Modell könnte auf verschlüsselten Eingaben rechnen, ohne die sensiblen Daten offenzulegen. Höchstes Datenschutzniveau, aber noch sehr rechenintensiv und daher in der Praxis begrenzt. Eine der Privacy-Enhancing Technologies. Relevant für hochsensible Bereiche wie Medizin und Finanzen sowie für datenschutzkonforme Cloud-Verarbeitung.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "differential-privacy",
    "federated-learning"
   ]
  },
  {
   "id": "anonymisierung",
   "cat": "security",
   "risk": null,
   "q": "Was unterscheidet Anonymisierung von Pseudonymisierung?",
   "term": "Anonymisierung und Pseudonymisierung",
   "short": "Verfahren, die den Personenbezug von Daten entfernen (Anonymisierung) oder durch ein Kennzeichen ersetzen (Pseudonymisierung).",
   "long": "Bei der Anonymisierung werden Daten so verändert, dass keine Person mehr identifizierbar ist – solche Daten fallen nicht mehr unter die DSGVO. Bei der Pseudonymisierung werden identifizierende Merkmale durch ein Pseudonym ersetzt, die Zuordnung bleibt aber mit einem separat gespeicherten Schlüssel möglich – pseudonyme Daten bleiben personenbezogen. Für KI-Training zentral, aber tückisch: Vermeintlich anonyme Daten lassen sich oft re-identifizieren (etwa durch Kombination von Merkmalen). Der AI Act erlaubt unter Auflagen die Verarbeitung besonderer Datenkategorien zur Bias-Erkennung (Art. 10) mit Pseudonymisierung als Schutzmaßnahme.",
   "links": [
    {
     "label": "Art. 10 AI Act",
     "url": "https://artificialintelligenceact.eu/article/10/"
    }
   ],
   "related": [
    "datenminimierung",
    "differential-privacy",
    "daten-governance",
    "named-entity-recognition"
   ]
  },
  {
   "id": "privacy-by-design",
   "cat": "ethics",
   "risk": null,
   "q": "Was bedeutet Privacy by Design?",
   "term": "Privacy by Design",
   "short": "Grundsatz, Datenschutz von Anfang an in Technik und Prozesse einzubauen, statt ihn nachträglich aufzusetzen.",
   "long": "Privacy by Design und Privacy by Default sind in Art. 25 DSGVO verankert: Datenschutz muss durch Technikgestaltung und datenschutzfreundliche Voreinstellungen von Beginn an mitgedacht werden. Für KI bedeutet das: Datenminimierung, frühe Wahl datenschutzfreundlicher Architekturen (etwa föderiertes Lernen, Differential Privacy), Zweckbindung und eingebaute Löschkonzepte. Ergänzt die AI-Act-Anforderungen an Daten-Governance (Art. 10) und schafft Synergien zwischen Datenschutz- und KI-Compliance. Ein Kernprinzip verantwortungsvoller KI-Entwicklung.",
   "links": [
    {
     "label": "Art. 25 DSGVO",
     "url": "https://eur-lex.europa.eu/eli/reg/2016/679/oj"
    }
   ],
   "related": [
    "datenminimierung",
    "conformity-by-design",
    "dsgvo-schnittstelle"
   ]
  },
  {
   "id": "datenminimierung",
   "cat": "ethics",
   "risk": null,
   "q": "Was bedeutet Datenminimierung?",
   "term": "Datenminimierung",
   "short": "Grundsatz, nur so viele personenbezogene Daten zu verarbeiten, wie für den jeweiligen Zweck erforderlich sind.",
   "long": "Die Datenminimierung (Art. 5 Abs. 1 lit. c DSGVO) steht in einem Spannungsverhältnis zum Datenhunger moderner KI, die oft von großen Datenmengen profitiert. Sie verlangt, den Umfang, die Speicherdauer und die Zugänglichkeit von Daten auf das Notwendige zu begrenzen. Lösungsansätze im KI-Kontext: synthetische Daten, föderiertes Lernen, aggregierte statt individueller Daten, frühzeitige Anonymisierung. Ein zentrales Abwägungsfeld zwischen Modellqualität und Datenschutz – und ein wiederkehrender Streitpunkt bei der Bewertung großer Trainingsdatensätze.",
   "links": [
    {
     "label": "DSGVO",
     "url": "https://eur-lex.europa.eu/eli/reg/2016/679/oj"
    }
   ],
   "related": [
    "privacy-by-design",
    "anonymisierung",
    "daten-governance",
    "federated-learning"
   ]
  },
  {
   "id": "mlops",
   "cat": "governance",
   "risk": null,
   "q": "Was ist MLOps?",
   "term": "MLOps",
   "short": "Praktiken und Werkzeuge, um KI-Modelle zuverlässig zu entwickeln, bereitzustellen, zu überwachen und zu pflegen (Machine Learning Operations).",
   "long": "MLOps überträgt Prinzipien von DevOps auf das maschinelle Lernen: Versionierung von Daten und Modellen, automatisierte Trainings- und Bereitstellungspipelines, kontinuierliche Überwachung im Betrieb (etwa auf Drift), reproduzierbare Experimente und geregeltes Nachtraining. Gut umgesetztes MLOps ist die praktische Grundlage, um viele AI-Act-Pflichten zu erfüllen – etwa Aufzeichnung (Art. 12), Post-Market-Monitoring (Art. 72) und Qualitätsmanagement. Bindeglied zwischen technischer KI-Entwicklung und regulatorischer Compliance im laufenden Betrieb.",
   "links": [
    {
     "label": "Art. 72 AI Act",
     "url": "https://artificialintelligenceact.eu/article/72/"
    }
   ],
   "related": [
    "model-context-drift",
    "audit-trail",
    "post-market-monitoring",
    "concept-drift-detection",
    "ki-lebenszyklus"
   ]
  },
  {
   "id": "model-card",
   "cat": "governance",
   "risk": null,
   "q": "Was ist eine Model Card?",
   "term": "Model Card (Modellsteckbrief)",
   "short": "Standardisiertes Kurzdokument, das Zweck, Fähigkeiten, Grenzen und Leistungswerte eines KI-Modells transparent beschreibt.",
   "long": "Model Cards fassen wesentliche Informationen über ein Modell knapp zusammen: vorgesehener Verwendungszweck, Trainingsdaten, Leistungsmetriken (auch aufgeschlüsselt nach Gruppen zur Bias-Erkennung), bekannte Grenzen und ethische Erwägungen. Ziel: informierte Nutzung und Nachvollziehbarkeit. Das Konzept unterstützt die Erfüllung von Dokumentations- und Transparenzpflichten des AI Act (Art. 11, 13) und ähnelt inhaltlich der geforderten technischen Dokumentation und Gebrauchsanweisung. Verwandt mit Datasheets für Datensätze. Verbreitetes Instrument verantwortungsvoller KI-Dokumentation.",
   "links": [
    {
     "label": "Art. 13 AI Act",
     "url": "https://artificialintelligenceact.eu/article/13/"
    }
   ],
   "related": [
    "datasheet",
    "technische-dokumentation",
    "gebrauchsanweisung"
   ]
  },
  {
   "id": "datasheet",
   "cat": "governance",
   "risk": null,
   "q": "Was ist ein Datasheet für Datensätze?",
   "term": "Datasheet für Datensätze",
   "short": "Standardisierte Dokumentation, die Herkunft, Zusammensetzung, Sammlung und Grenzen eines Datensatzes beschreibt.",
   "long": "Nach dem Vorbild technischer Datenblätter für Bauteile dokumentiert ein Datasheet (Datasheets for Datasets) systematisch, wie und warum ein Datensatz entstand: Motivation, Erhebungsmethode, enthaltene und fehlende Gruppen, Vorverarbeitung, empfohlene und ungeeignete Verwendungen, rechtliche und ethische Aspekte. Ziel: Transparenz über die Datengrundlage und bewusste Vermeidung von Bias. Unterstützt die Daten-Governance-Anforderungen des AI Act (Art. 10) und ergänzt Model Cards auf der Datenseite. Zentraler Baustein nachvollziehbarer, verantwortungsvoller Datenpraxis.",
   "links": [
    {
     "label": "Art. 10 AI Act",
     "url": "https://artificialintelligenceact.eu/article/10/"
    }
   ],
   "related": [
    "model-card",
    "daten-governance",
    "trainingsdaten-zusammenfassung"
   ]
  },
  {
   "id": "human-in-the-loop",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was bedeutet Human-in-the-Loop?",
   "term": "Human-in-the-Loop",
   "short": "Gestaltungsprinzip, bei dem ein Mensch in Entscheidungen eines KI-Systems eingebunden bleibt und eingreifen kann.",
   "long": "Man unterscheidet Abstufungen: Human-in-the-Loop (der Mensch bestätigt oder trifft jede Entscheidung mit), Human-on-the-Loop (der Mensch überwacht und kann eingreifen) und Human-in-Command (übergeordnete Kontrolle über den Einsatz). Diese Konzepte konkretisieren die im AI Act geforderte menschliche Aufsicht (Art. 14) für Hochrisiko-KI. Ziel: Automatisierungsbias vermeiden, Fehler abfangen, Verantwortung beim Menschen halten. Wirksame Aufsicht setzt voraus, dass der Mensch die nötige Kompetenz, Zeit und tatsächliche Eingriffsmöglichkeit hat – bloße Alibi-Kontrolle genügt nicht.",
   "links": [
    {
     "label": "Art. 14 AI Act",
     "url": "https://artificialintelligenceact.eu/article/14/"
    }
   ],
   "related": [
    "menschliche-aufsicht",
    "automation-bias",
    "conformity-by-design"
   ]
  },
  {
   "id": "shap-lime",
   "cat": "ethics",
   "risk": null,
   "q": "Was sind SHAP und LIME?",
   "term": "SHAP und LIME (Erklärungsmethoden)",
   "short": "Verfahren, die nachvollziehbar machen, welche Eingabemerkmale wie stark zu einer einzelnen KI-Entscheidung beigetragen haben.",
   "long": "SHAP und LIME sind zwei verbreitete Methoden der erklärbaren KI (XAI). Sie erklären einzelne Vorhersagen \"von außen\" (modellagnostisch), indem sie den Einfluss jedes Merkmals abschätzen – etwa welche Faktoren zu einer Kreditablehnung führten. SHAP beruht auf einem spieltheoretischen Konzept (Shapley-Werte) und liefert konsistente Beiträge; LIME nähert das Modell lokal durch ein einfaches, verständliches Modell an. Sie unterstützen die Erklärbarkeit, die für menschliche Aufsicht (Art. 14) und das Erklärungsrecht (Art. 86) nötig ist. Grenzen: Erklärungen sind Näherungen und können in die Irre führen.",
   "links": [
    {
     "label": "Art. 86 AI Act",
     "url": "https://artificialintelligenceact.eu/article/86/"
    }
   ],
   "related": [
    "xai",
    "explainability-vs-performance",
    "erklaerungsrecht"
   ]
  },
  {
   "id": "audit-trail",
   "cat": "governance",
   "risk": null,
   "q": "Was ist ein Audit-Trail?",
   "term": "Audit-Trail (Prüfpfad)",
   "short": "Lückenlose, manipulationssichere Aufzeichnung von Ereignissen und Entscheidungen, die eine spätere Überprüfung ermöglicht.",
   "long": "Ein Audit-Trail protokolliert nachvollziehbar, wer wann was mit einem System getan hat und welche Entscheidungen das System getroffen hat. Für Hochrisiko-KI konkretisiert der AI Act dies in der Aufzeichnungspflicht (Art. 12): automatische Protokollierung über den Lebenszyklus, um Rückverfolgbarkeit, Fehleranalyse und behördliche Prüfung zu ermöglichen. Anforderungen: Integrität (fälschungssicher), ausreichende Aufbewahrung, Auswertbarkeit. Praktische Grundlage für Post-Market-Monitoring, Vorfalluntersuchung und den Nachweis von Compliance gegenüber Marktüberwachungsbehörden.",
   "links": [
    {
     "label": "Art. 12 AI Act",
     "url": "https://artificialintelligenceact.eu/article/12/"
    }
   ],
   "related": [
    "aufzeichnungspflicht",
    "mlops",
    "accountability"
   ]
  },
  {
   "id": "ai-governance",
   "cat": "governance",
   "risk": null,
   "q": "Was ist KI-Governance im Unternehmen?",
   "term": "KI-Governance (im Unternehmen)",
   "short": "Organisatorischer Rahmen aus Rollen, Prozessen und Richtlinien, mit dem eine Organisation den verantwortungsvollen KI-Einsatz steuert.",
   "long": "Unternehmens-KI-Governance legt fest, wer für KI-Systeme verantwortlich ist, wie Risiken bewertet werden, welche Richtlinien gelten und wie Compliance sichergestellt wird. Elemente: KI-Inventar, Rollen (etwa KI-Verantwortliche, Ethikgremien), Freigabeprozesse, Schulungen (KI-Kompetenz nach Art. 4), Lieferantenmanagement. Ein Managementsystem nach ISO/IEC 42001 bietet dafür einen zertifizierbaren Rahmen. Gute Governance macht die vielen Einzelpflichten des AI Act praktisch beherrschbar und schafft Vertrauen bei Kunden und Aufsicht. Bindeglied zwischen Recht, Technik und Organisation.",
   "links": [
    {
     "label": "ISO/IEC 42001",
     "url": "https://www.iso.org/standard/81230.html"
    }
   ],
   "related": [
    "iso-42001",
    "conformity-by-design",
    "ki-kompetenz-organisation",
    "accountability",
    "nist-ai-rmf"
   ]
  },
  {
   "id": "conformity-by-design",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was bedeutet Compliance by Design?",
   "term": "Compliance by Design",
   "short": "Ansatz, regulatorische Anforderungen von Beginn der Entwicklung an in ein KI-System einzubauen, statt sie nachträglich nachzurüsten.",
   "long": "Analog zu Privacy by Design bedeutet Compliance by Design, die Pflichten des AI Act – Risikomanagement, Daten-Governance, Aufzeichnung, Transparenz, menschliche Aufsicht – bereits in Architektur und Entwicklungsprozess zu verankern. Das ist wirtschaftlicher und wirksamer als nachträgliche Anpassung eines fertigen Systems, die oft teuer oder unmöglich ist. Praktisch umgesetzt über Anforderungsdefinition, MLOps, Model Cards und ein KI-Managementsystem. Zunehmend erwartet von Kunden, Investoren und Aufsicht als Zeichen professioneller, zukunftssicherer KI-Entwicklung.",
   "links": [
    {
     "label": "Art. 9 AI Act",
     "url": "https://artificialintelligenceact.eu/article/9/"
    }
   ],
   "related": [
    "privacy-by-design",
    "ai-governance",
    "risikomanagementsystem",
    "human-in-the-loop",
    "iso-42001"
   ]
  },
  {
   "id": "diskriminierung-ki",
   "cat": "ethics",
   "risk": null,
   "q": "Was ist algorithmische Diskriminierung?",
   "term": "Algorithmische Diskriminierung",
   "short": "Benachteiligung von Personen oder Gruppen durch KI-Entscheidungen aufgrund geschützter Merkmale – oft unbeabsichtigt.",
   "long": "Man unterscheidet direkte Diskriminierung (ein geschütztes Merkmal wie Geschlecht wird direkt genutzt) und indirekte oder Proxy-Diskriminierung (scheinbar neutrale Merkmale wie die Postleitzahl korrelieren mit geschützten Merkmalen). KI kann bestehende gesellschaftliche Verzerrungen aus den Trainingsdaten übernehmen und verstärken. Rechtlich erfasst durch Antidiskriminierungsrecht (AGG, EU-Gleichbehandlungsrichtlinien) und die Grundrechtecharta; der AI Act adressiert es über Daten-Governance (Art. 10), Bias-Prüfung und die FRIA. Zentrales Motiv vieler Hochrisiko-Einstufungen.",
   "links": [
    {
     "label": "Art. 10 AI Act",
     "url": "https://artificialintelligenceact.eu/article/10/"
    }
   ],
   "related": [
    "bias",
    "fairness-metriken",
    "fria",
    "grundrechtebehoerden"
   ]
  },
  {
   "id": "fairness-metriken",
   "cat": "ethics",
   "risk": null,
   "q": "Was sind Fairness-Metriken?",
   "term": "Fairness-Metriken",
   "short": "Quantitative Maße, um zu prüfen, ob ein KI-System verschiedene Gruppen gleich behandelt – mit teils unvereinbaren Definitionen.",
   "long": "Es gibt viele mathematische Fairness-Definitionen: gleiche Fehlerraten über Gruppen (equalized odds), gleiche Trefferwahrscheinlichkeit (demographic parity), gleiche Kalibrierung u. a. Ein wichtiges Ergebnis: Mehrere dieser Kriterien lassen sich meist nicht gleichzeitig erfüllen (Unmöglichkeitssätze). Welche Fairness angemessen ist, ist daher keine rein technische, sondern eine wertende Entscheidung, die vom Kontext abhängt. Praktisch relevant für die Bias-Prüfung nach Art. 10 und die Bewertung von Hochrisiko-Systemen. Fairness-Metriken machen Diskriminierung messbar, ersetzen aber nicht die rechtliche und ethische Abwägung.",
   "links": [
    {
     "label": "Art. 10 AI Act",
     "url": "https://artificialintelligenceact.eu/article/10/"
    }
   ],
   "related": [
    "fairness",
    "diskriminierung-ki",
    "bias",
    "wertekonflikte-ki"
   ]
  },
  {
   "id": "ki-nachhaltigkeit",
   "cat": "ethics",
   "risk": null,
   "q": "Was bedeutet Nachhaltigkeit von KI (Green AI)?",
   "term": "Nachhaltigkeit von KI (Green AI)",
   "short": "Betrachtung des Energie-, Wasser- und Ressourcenverbrauchs von KI-Systemen über ihren gesamten Lebenszyklus.",
   "long": "Das Training und der Betrieb großer Modelle verbrauchen erhebliche Mengen an Strom und Kühlwasser und verursachen CO2-Emissionen. Green AI zielt darauf, Effizienz zu steigern (durch Quantisierung, Distillation, effiziente Architekturen) und Transparenz über den Fußabdruck zu schaffen. Der AI Act greift dies auf: GPAI-Anbieter mit systemischem Risiko sollen Energieverbrauch dokumentieren, und Verhaltenskodizes (Art. 95) fördern Umweltverträglichkeit. Spannungsfeld zwischen wachsender Modellgröße und Klimazielen. Zunehmend Teil von ESG-Berichterstattung und Beschaffungskriterien.",
   "links": [
    {
     "label": "Art. 95 AI Act",
     "url": "https://artificialintelligenceact.eu/article/95/"
    }
   ],
   "related": [
    "quantisierung",
    "distillation",
    "verhaltenskodex",
    "neuromorphes-computing"
   ]
  },
  {
   "id": "dual-use",
   "cat": "ethics",
   "risk": null,
   "q": "Was bedeutet Dual Use bei KI?",
   "term": "Dual Use (doppelter Verwendungszweck)",
   "short": "Eigenschaft von KI-Technologien, sowohl für nützliche als auch für schädliche Zwecke einsetzbar zu sein.",
   "long": "Viele KI-Fähigkeiten sind wertneutral und je nach Anwendung nützlich oder gefährlich: Ein Modell zur Wirkstoffsuche könnte auch Giftstoffe entwerfen; Bildgeneratoren erschaffen Kunst oder Deepfakes; Sprachmodelle helfen beim Programmieren oder beim Schreiben von Schadcode. Der Dual-Use-Charakter erschwert Regulierung, weil ein Verbot der Fähigkeit auch die guten Anwendungen träfe. Der AI Act setzt daher am Kontext und am Risiko an. Berührt Exportkontrollrecht, die Bewertung systemischer Risiken von GPAI (Art. 55) und die Sicherheitsforschung. Kernthema der KI-Sicherheitsdebatte.",
   "links": [
    {
     "label": "Art. 55 AI Act",
     "url": "https://artificialintelligenceact.eu/article/55/"
    }
   ],
   "related": [
    "systemisches-risiko",
    "modellbewertung",
    "generative-ai"
   ]
  },
  {
   "id": "wertekonflikte-ki",
   "cat": "ethics",
   "risk": null,
   "q": "Welche Wertekonflikte entstehen bei KI?",
   "term": "Wertekonflikte in der KI",
   "short": "Situationen, in denen legitime Ziele wie Genauigkeit, Fairness, Datenschutz und Transparenz miteinander in Spannung geraten.",
   "long": "Verantwortungsvolle KI muss mehrere Werte zugleich bedienen, die sich nicht immer vereinbaren lassen: Mehr Datenschutz (etwa durch weniger Daten) kann die Genauigkeit senken; höhere Transparenz kann Geschäftsgeheimnisse oder Sicherheit gefährden; verschiedene Fairness-Definitionen widersprechen sich. Solche Zielkonflikte lassen sich nicht rein technisch auflösen, sondern erfordern begründete Abwägungen im konkreten Kontext – idealerweise transparent dokumentiert. Der AI Act, die DSGVO und ethische Rahmenwerke geben Leitplanken, nehmen die Abwägung aber nicht ab. Ein Kernthema angewandter KI-Ethik.",
   "links": [
    {
     "label": "Ethics Guidelines for Trustworthy AI",
     "url": "https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai"
    }
   ],
   "related": [
    "explainability-vs-performance",
    "trustworthy-ai",
    "fairness-metriken"
   ]
  },
  {
   "id": "automation-bias",
   "cat": "ethics",
   "risk": null,
   "q": "Was ist Automatisierungsbias (Automation Bias)?",
   "term": "Automatisierungsbias (Automation Bias)",
   "short": "Die menschliche Neigung, den Empfehlungen automatisierter Systeme zu sehr zu vertrauen und eigene Urteile zurückzustellen.",
   "long": "Automation Bias führt dazu, dass Menschen Vorschläge einer KI unkritisch übernehmen (Commission-Fehler) oder eigene Beobachtungen übergehen, weil das System schweigt (Omission-Fehler). Das untergräbt gerade die menschliche Aufsicht (Art. 14), die als Schutzmechanismus für Hochrisiko-KI gedacht ist: Formal ist ein Mensch eingebunden, faktisch folgt er dem System blind. Gegenmaßnahmen: Schulung, gute Erklärbarkeit, bewusste Reibung im Ablauf, Anzeige von Unsicherheit. Ein wichtiger psychologischer Grund, warum wirksame Aufsicht mehr erfordert als das bloße Vorhandensein eines Menschen.",
   "links": [
    {
     "label": "Art. 14 AI Act",
     "url": "https://artificialintelligenceact.eu/article/14/"
    }
   ],
   "related": [
    "human-in-the-loop",
    "menschliche-aufsicht",
    "klinische-entscheidungsunterstuetzung"
   ]
  },
  {
   "id": "accountability",
   "cat": "governance",
   "risk": null,
   "q": "Was bedeutet Rechenschaftspflicht (Accountability) bei KI?",
   "term": "Rechenschaftspflicht (Accountability)",
   "short": "Grundsatz, dass eine verantwortliche Stelle die Einhaltung der Regeln nicht nur gewährleisten, sondern auch nachweisen können muss.",
   "long": "Accountability verlangt, dass Organisationen Verantwortung für ihre KI-Systeme übernehmen und dies belegen können – durch Dokumentation, Prozesse und klare Zuständigkeiten. Das Prinzip ist aus der DSGVO (Art. 5 Abs. 2) bekannt und durchzieht auch den AI Act: technische Dokumentation, Aufzeichnung, Konformitätsbewertung und Konformitätserklärung dienen dem Nachweis. Kernfrage bei komplexen KI-Wertschöpfungsketten: Wer haftet wofür (Anbieter, Betreiber, nachgelagerte Anbieter)? Eng verknüpft mit Haftungsrecht, KI-Governance und dem Recht Betroffener auf Erklärung und Beschwerde.",
   "links": [
    {
     "label": "Art. 16 AI Act",
     "url": "https://artificialintelligenceact.eu/article/16/"
    }
   ],
   "related": [
    "audit-trail",
    "ki-haftung",
    "ai-governance"
   ]
  },
  {
   "id": "explainability-vs-performance",
   "cat": "ethics",
   "risk": null,
   "q": "Was ist das Spannungsfeld zwischen Erklärbarkeit und Leistung (Black-Box-Problem)?",
   "term": "Erklärbarkeit vs. Leistung (Black-Box-Problem)",
   "short": "Spannungsverhältnis zwischen der Nachvollziehbarkeit einfacher Modelle und der oft höheren Genauigkeit komplexer, undurchschaubarer Modelle.",
   "long": "Einfache Modelle (etwa Entscheidungsbäume, lineare Modelle) sind gut nachvollziehbar, aber oft weniger leistungsfähig. Komplexe Modelle wie tiefe neuronale Netze erreichen häufig höhere Genauigkeit, sind aber intransparente \"Black Boxes\". In grundrechtssensiblen Anwendungen (Kredit, Justiz, Medizin) verlangen Aufsicht und Betroffene jedoch Nachvollziehbarkeit. Lösungsansätze: von vornherein interpretierbare Modelle wählen oder nachträgliche Erklärungsmethoden (SHAP, LIME) einsetzen. Der AI Act adressiert dies über menschliche Aufsicht (Art. 14) und das Erklärungsrecht (Art. 86), ohne bestimmte Modelltypen vorzuschreiben.",
   "links": [
    {
     "label": "Art. 86 AI Act",
     "url": "https://artificialintelligenceact.eu/article/86/"
    }
   ],
   "related": [
    "xai",
    "shap-lime",
    "wertekonflikte-ki",
    "explainable-boosting"
   ]
  },
  {
   "id": "ki-kompetenz-organisation",
   "cat": "governance",
   "risk": null,
   "q": "Wie baut eine Organisation KI-Kompetenz auf?",
   "term": "KI-Kompetenz in der Organisation",
   "short": "Verpflichtung von Anbietern und Betreibern, ein ausreichendes Maß an KI-Kompetenz ihres Personals sicherzustellen (Art. 4).",
   "long": "Seit dem 2. Februar 2025 verlangt Art. 4 AI Act, dass Anbieter und Betreiber Maßnahmen ergreifen, damit ihr mit KI befasstes Personal über ausreichende KI-Kompetenz verfügt – gemessen an Vorwissen, Kontext und den betroffenen Personen. Ziel: fundierte, verantwortungsvolle Nutzung und wirksame menschliche Aufsicht. Praktisch umgesetzt durch Schulungen, Richtlinien und Rollen. Die Pflicht gilt unabhängig von der Risikoklasse und ist eine der ersten anwendbaren Anforderungen des AI Act. Grundlage dafür, dass menschliche Aufsicht (Art. 14) und Governance überhaupt wirksam sein können.",
   "links": [
    {
     "label": "Art. 4 AI Act",
     "url": "https://artificialintelligenceact.eu/article/4/"
    }
   ],
   "related": [
    "ki-kompetenz",
    "ai-governance",
    "menschliche-aufsicht"
   ]
  },
  {
   "id": "red-teaming-vs-blue",
   "cat": "security",
   "risk": null,
   "q": "Was unterscheidet Red Teaming von Blue Teaming?",
   "term": "Red Teaming und Blue Teaming",
   "short": "Gegensätzliche Sicherheitsrollen: Das Red Team greift ein KI-System an, das Blue Team verteidigt es.",
   "long": "Beim Red Teaming versuchen Fachleute, ein System gezielt zu überlisten, um Schwachstellen aufzudecken – etwa durch Jailbreaks, Prompt Injection oder das Provozieren schädlicher Ausgaben. Das Blue Team entwickelt und betreibt die Verteidigung: Guardrails, Monitoring, Härtung. Das Zusammenspiel (teils als \"Purple Teaming\" bezeichnet) verbessert die Sicherheit fortlaufend. Für GPAI mit systemischem Risiko schreibt der AI Act adversariale Tests vor (Art. 55). Etablierte Praxis aus der klassischen IT-Sicherheit, angepasst an die besonderen Angriffsflächen von KI-Systemen.",
   "links": [
    {
     "label": "Art. 55 AI Act",
     "url": "https://artificialintelligenceact.eu/article/55/"
    }
   ],
   "related": [
    "ai-red-teaming",
    "jailbreak",
    "guardrails",
    "frontier-ai-commitments"
   ]
  },
  {
   "id": "sandbox-datenschutz",
   "cat": "governance",
   "risk": null,
   "q": "Welche Datenschutzregeln gelten für Datenverarbeitung im Reallabor?",
   "term": "Datenverarbeitung im Reallabor",
   "short": "Sonderregel, die unter engen Voraussetzungen die Weiterverarbeitung rechtmäßig erhobener Daten zu KI-Entwicklung im öffentlichen Interesse erlaubt (Art. 59).",
   "long": "Innerhalb eines KI-Reallabors (Art. 57) erlaubt Art. 59 AI Act unter strengen Bedingungen, rechtmäßig für andere Zwecke erhobene personenbezogene Daten für die Entwicklung bestimmter KI-Systeme im öffentlichen Interesse weiterzuverarbeiten – etwa für Gesundheit, Umwelt oder öffentliche Sicherheit. Voraussetzungen: wirksame Überwachung, Schutzmaßnahmen, Zweckbindung, Löschung nach Abschluss. Die Regelung schafft einen kontrollierten Freiraum für Innovation, ohne die DSGVO auszuhebeln. Zusammenspiel von Datenschutzbehörden und der für das Reallabor zuständigen Stelle. Instrument, um Innovation und Grundrechtsschutz zu verbinden.",
   "links": [
    {
     "label": "Art. 59 AI Act",
     "url": "https://artificialintelligenceact.eu/article/59/"
    }
   ],
   "related": [
    "reallabor",
    "dsgvo-schnittstelle",
    "wissenschaftsausnahme"
   ]
  },
  {
   "id": "ki-haftung",
   "cat": "governance",
   "risk": null,
   "q": "Wer haftet für Schäden durch KI?",
   "term": "KI-Haftung",
   "short": "Frage, wer für Schäden einsteht, die durch ein KI-System verursacht werden – ein rechtlich noch in Entwicklung befindliches Feld.",
   "long": "Der AI Act ist öffentliches Aufsichtsrecht und regelt selbst keine zivilrechtlichen Schadenersatzansprüche. Diese ergeben sich aus anderen Regelwerken: der neuen Produkthaftungsrichtlinie (die Software und KI ausdrücklich erfasst und Beweiserleichterungen bringt) sowie dem allgemeinen Haftungsrecht. Eine eigene KI-Haftungsrichtlinie war geplant, wurde 2025 jedoch von der Kommission zurückgezogen. Zentrale Schwierigkeiten: Nachweis von Fehler und Kausalität bei komplexen, lernenden Systemen; Verteilung der Verantwortung entlang der Wertschöpfungskette. Für Betreiber und Anbieter ein wichtiges Risiko, das AI-Act-Compliance zwar mindert, aber nicht beseitigt.",
   "links": [
    {
     "label": "PLD (RL 2024/2853)",
     "url": "https://eur-lex.europa.eu/eli/dir/2024/2853/oj"
    }
   ],
   "related": [
    "produkthaftung-schnittstelle",
    "accountability",
    "betroffene-person"
   ]
  },
  {
   "id": "stemming-lemmatisierung",
   "cat": "nlp",
   "risk": null,
   "q": "Was unterscheidet Stemming von Lemmatisierung?",
   "term": "Stemming und Lemmatisierung",
   "short": "Verfahren, die Wörter auf eine Grundform zurückführen, um Varianten desselben Begriffs zusammenzufassen.",
   "long": "Beim Stemming werden Wörter grob durch Abschneiden von Endungen auf einen Wortstamm reduziert (\"laufen\", \"läuft\" → \"lauf\") – schnell, aber ungenau. Die Lemmatisierung führt Wörter linguistisch fundiert auf ihre Grundform (das Lemma) zurück (\"besser\" → \"gut\"), unter Berücksichtigung von Wortart und Kontext. Beide sind klassische Schritte der Textvorverarbeitung, die die Datenmenge reduzieren und die Erkennung inhaltlich gleicher Begriffe verbessern. In modernen, auf Tokenisierung und Embeddings beruhenden Sprachmodellen spielen sie eine kleinere, aber weiterhin nützliche Rolle bei Suche und klassischer Textanalyse.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "tokenization",
    "pos-tagging",
    "nlp"
   ]
  },
  {
   "id": "pos-tagging",
   "cat": "nlp",
   "risk": null,
   "q": "Was ist POS-Tagging?",
   "term": "Wortarten-Erkennung (POS-Tagging)",
   "short": "Automatische Zuordnung der grammatikalischen Wortart (Substantiv, Verb, Adjektiv …) zu jedem Wort eines Satzes.",
   "long": "Part-of-Speech-Tagging (POS-Tagging) bestimmt für jedes Token seine Wortart im Satzkontext – wichtig, weil viele Wörter je nach Kontext unterschiedliche Wortarten annehmen (\"das Lernen\" vs. \"wir lernen\"). Es ist ein grundlegender Baustein der Sprachanalyse und Vorstufe für Aufgaben wie Named Entity Recognition, Parsing oder Informationsextraktion. Klassisch mit statistischen Modellen gelöst, heute meist mit neuronalen Netzen. Grundlagenwissen zum Verständnis, wie Maschinen Sprache strukturell erfassen.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "named-entity-recognition",
    "stemming-lemmatisierung",
    "nlp"
   ]
  },
  {
   "id": "named-entity-recognition",
   "cat": "nlp",
   "risk": null,
   "q": "Was ist Eigennamenerkennung (NER)?",
   "term": "Eigennamenerkennung (NER)",
   "short": "Automatisches Erkennen und Klassifizieren von Eigennamen in Texten – etwa Personen, Orte, Organisationen, Daten.",
   "long": "Named Entity Recognition (NER) findet in unstrukturiertem Text benannte Entitäten und ordnet sie Kategorien zu (Person, Ort, Firma, Datum, Betrag). Grundlage vieler Anwendungen: Informationsextraktion, Dokumentenanalyse, Suche, Anonymisierung (Erkennen personenbezogener Angaben). Datenschutzrelevant, weil NER auch zur automatischen Schwärzung sensibler Daten dient – oder umgekehrt zur unerwünschten Profilbildung. Klassisch regel- oder statistikbasiert, heute meist mit vortrainierten Sprachmodellen. Wichtiger Baustein, um aus Text strukturierte Information zu gewinnen.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "pos-tagging",
    "textklassifikation",
    "anonymisierung",
    "ocr",
    "knowledge-graph"
   ]
  },
  {
   "id": "word-embeddings",
   "cat": "nlp",
   "risk": null,
   "q": "Was sind Wort-Einbettungen wie Word2Vec oder GloVe?",
   "term": "Wort-Einbettungen (Word2Vec, GloVe)",
   "short": "Verfahren, die Wörter als Zahlenvektoren so darstellen, dass ähnliche Bedeutungen räumlich nah beieinander liegen.",
   "long": "Word2Vec (2013) und GloVe waren wegweisende Methoden, um Wörter in dichte Vektoren zu überführen, die semantische Beziehungen abbilden – berühmt das Beispiel \"König − Mann + Frau ≈ Königin\". Solche Einbettungen lernen Bedeutung aus dem Kontext, in dem Wörter vorkommen. Sie bilden die begriffliche Grundlage moderner Embeddings, sind aber statisch (ein Wort hat immer denselben Vektor). Kontextuelle Modelle wie BERT lösten sie darin ab. Wichtig für das Verständnis, wie Bedeutung überhaupt maschinell repräsentiert wird. Können erlernte gesellschaftliche Verzerrungen (Bias) enthalten.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "embedding",
    "bert"
   ]
  },
  {
   "id": "bert",
   "cat": "nlp",
   "risk": null,
   "q": "Was ist BERT?",
   "term": "BERT (kontextuelles Sprachmodell)",
   "short": "Wegweisendes Transformer-Modell (2018), das Wörter im vollen Satzkontext von beiden Seiten versteht.",
   "long": "BERT (Bidirectional Encoder Representations from Transformers) verarbeitet einen Satz in beide Richtungen zugleich und erzeugt so kontextabhängige Wortrepräsentationen – dasselbe Wort erhält je nach Kontext unterschiedliche Vektoren. Trainiert wird es, indem maskierte Wörter im Text vorhergesagt werden. BERT prägte eine ganze Generation von NLP-Systemen und eignet sich besonders für Verstehensaufgaben (Klassifikation, NER, Frage-Antwort). Im Unterschied zu generativen Modellen (wie der GPT-Familie) ist BERT ein Encoder-Modell, das Text primär analysiert statt erzeugt. Meilenstein auf dem Weg zu heutigen Sprachmodellen.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "transformer",
    "word-embeddings",
    "nlp"
   ]
  },
  {
   "id": "sprachmodell-ngram",
   "cat": "nlp",
   "risk": null,
   "q": "Was ist ein statistisches n-Gramm-Sprachmodell?",
   "term": "Statistisches Sprachmodell (n-Gramm)",
   "short": "Klassisches Modell, das die Wahrscheinlichkeit des nächsten Wortes aus den unmittelbar vorangehenden Wörtern schätzt.",
   "long": "Ein n-Gramm-Modell betrachtet Folgen von n aufeinanderfolgenden Wörtern und schätzt, wie wahrscheinlich ein Wort auf die vorangegangenen folgt – etwa auf Basis von Häufigkeiten in einem großen Textkorpus. Diese Modelle waren lange die Grundlage von Rechtschreibkorrektur, Spracherkennung und Übersetzung. Ihre Schwäche: Sie erfassen nur kurze Zusammenhänge und keine tiefere Bedeutung. Neuronale Sprachmodelle und Transformer lösten sie ab. Wichtig als konzeptioneller Ausgangspunkt: Auch moderne Sprachmodelle sagen im Kern das nächste Token vorher – nur ungleich mächtiger.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "nlp",
    "tokenization",
    "llm"
   ]
  },
  {
   "id": "maschinelle-uebersetzung",
   "cat": "nlp",
   "risk": null,
   "q": "Wie funktioniert maschinelle Übersetzung?",
   "term": "Maschinelle Übersetzung",
   "short": "Automatische Übersetzung von Text oder Sprache zwischen natürlichen Sprachen durch KI.",
   "long": "Die maschinelle Übersetzung entwickelte sich von regelbasierten über statistische Ansätze hin zur neuronalen maschinellen Übersetzung (NMT), die ganze Sätze im Kontext überträgt und deutlich flüssigere Ergebnisse liefert. Moderne Systeme beruhen auf der Transformer-Architektur. Anwendungen: Kommunikation, Lokalisierung, Barrierefreiheit, Recht. Grenzen: Fachsprache, Mehrdeutigkeit, kulturelle Nuancen, seltene Sprachen. Im rechtlichen Kontext relevant, wenn übersetzte KI-Ausgaben Grundlage von Entscheidungen werden – dann greifen Genauigkeits- und Transparenzanforderungen. Ein Paradebeispiel für nützliche, alltägliche generative KI.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "nlp",
    "transformer",
    "textzusammenfassung"
   ]
  },
  {
   "id": "textzusammenfassung",
   "cat": "nlp",
   "risk": null,
   "q": "Was ist automatische Textzusammenfassung?",
   "term": "Automatische Textzusammenfassung",
   "short": "Verdichtung längerer Texte auf ihre wesentlichen Inhalte durch KI.",
   "long": "Man unterscheidet die extraktive Zusammenfassung (wichtige Originalsätze werden ausgewählt) von der abstraktiven Zusammenfassung (der Inhalt wird in neuen, eigenen Worten formuliert – wie es moderne Sprachmodelle tun). Anwendungen: Nachrichten, juristische und medizinische Dokumente, Meetings, Recherche. Risiken: Auslassen wichtiger Details, Verzerrung, Halluzinationen (erfundene Inhalte in abstraktiven Zusammenfassungen). Im professionellen Einsatz ist menschliche Prüfung wichtig, besonders bei rechtlich oder medizinisch relevanten Texten. Eine der meistgenutzten praktischen Fähigkeiten großer Sprachmodelle.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "question-answering",
    "llm",
    "halluzination",
    "maschinelle-uebersetzung"
   ]
  },
  {
   "id": "question-answering",
   "cat": "nlp",
   "risk": null,
   "q": "Was sind Frage-Antwort-Systeme (Question Answering)?",
   "term": "Frage-Antwort-Systeme (Question Answering)",
   "short": "Systeme, die auf natürlichsprachige Fragen präzise Antworten liefern – aus einem Text, einer Wissensbasis oder dem Modellwissen.",
   "long": "Question Answering (QA) reicht von der Beantwortung aus einem gegebenen Textabschnitt (extraktiv) bis zur offenen Beantwortung aus großem Wissen (generativ). Moderne QA-Systeme verbinden Sprachmodelle oft mit einer Wissensquelle über Retrieval-Augmented Generation (RAG), um Aktualität und Belegbarkeit zu erhöhen und Halluzinationen zu reduzieren. Anwendungen: Suche, Kundenservice, Recherche, Fachassistenz. Qualitätskritisch: Verlässlichkeit der Quellen, Umgang mit unbeantwortbaren Fragen, Nachvollziehbarkeit der Antwort. Grundfunktion vieler KI-Assistenten.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "rag",
    "textzusammenfassung",
    "chatbot-kundenservice"
   ]
  },
  {
   "id": "spracherkennung-asr",
   "cat": "nlp",
   "risk": null,
   "q": "Was ist Spracherkennung (ASR)?",
   "term": "Spracherkennung (ASR / Speech-to-Text)",
   "short": "Automatische Umwandlung gesprochener Sprache in geschriebenen Text.",
   "long": "Automatic Speech Recognition (ASR) wandelt Audiosignale in Text um – Grundlage von Sprachassistenten, Diktier- und Untertitelungssystemen. Moderne Systeme nutzen tiefe neuronale Netze und arbeiten sprecher- und sprachübergreifend. Herausforderungen: Dialekte, Hintergrundgeräusche, Fachvokabular, faire Leistung über Akzente und Sprechergruppen hinweg (Bias-Risiko). Datenschutzrelevant, da Sprachaufnahmen biometrische und inhaltliche Informationen enthalten. Wichtig für Barrierefreiheit (Untertitel, Vorlesefunktionen). Häufig kombiniert mit nachgelagerter Sprachverarbeitung wie Übersetzung oder Zusammenfassung.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "text-to-speech",
    "nlp",
    "multimodalitaet"
   ]
  },
  {
   "id": "text-to-speech",
   "cat": "nlp",
   "risk": "limited",
   "q": "Was ist Sprachsynthese (Text-to-Speech)?",
   "term": "Sprachsynthese (Text-to-Speech)",
   "short": "Automatische Erzeugung natürlich klingender gesprochener Sprache aus Text.",
   "long": "Text-to-Speech (TTS) wandelt geschriebenen Text in Audio um. Moderne neuronale Verfahren erzeugen sehr natürliche Stimmen und können Stimmen sogar klonen (Voice Cloning) – aus wenigen Sekunden Beispielmaterial. Anwendungen: Vorlesefunktionen, Barrierefreiheit, Assistenten, Synchronisation. Risiken: Stimm-Deepfakes für Betrug (etwa der \"Enkeltrick\" mit geklonter Stimme) und Desinformation. Der AI Act verlangt Transparenz für KI-erzeugte Audioinhalte (Art. 50) und Kennzeichnung. Beispiel für eine nützliche Technologie mit erheblichem Missbrauchspotenzial (Dual Use).",
   "links": [
    {
     "label": "Art. 50 AI Act",
     "url": "https://artificialintelligenceact.eu/article/50/"
    }
   ],
   "related": [
    "spracherkennung-asr",
    "deepfake",
    "wasserzeichen"
   ]
  },
  {
   "id": "topic-modeling",
   "cat": "nlp",
   "risk": null,
   "q": "Was ist Themenmodellierung (Topic Modeling)?",
   "term": "Themenmodellierung (Topic Modeling)",
   "short": "Unüberwachtes Verfahren, das in großen Textsammlungen automatisch wiederkehrende Themen entdeckt.",
   "long": "Topic Modeling gruppiert Dokumente und Wörter nach latenten Themen, ohne dass diese vorab bekannt sind – ein klassisches Verfahren ist LDA (Latent Dirichlet Allocation). Anwendungen: Analyse großer Dokumentbestände, Trendbeobachtung, Sichtung von Kundenfeedback, Forschung. Verwandt mit dem Clustering, aber speziell auf Texte zugeschnitten. Moderne Ansätze nutzen Embeddings für feinere Ergebnisse. Nützlich, um unstrukturierte Textmengen überschaubar zu machen, ohne sie vorab zu kategorisieren. Ergebnisse erfordern menschliche Interpretation der gefundenen Themen.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "clustering",
    "textklassifikation",
    "sentiment-analyse"
   ]
  },
  {
   "id": "textklassifikation",
   "cat": "nlp",
   "risk": null,
   "q": "Was ist Textklassifikation?",
   "term": "Textklassifikation",
   "short": "Automatische Zuordnung von Texten zu vordefinierten Kategorien – etwa Spam-Erkennung oder Themen-Sortierung.",
   "long": "Textklassifikation ordnet ganze Texte oder Textabschnitte festen Klassen zu: Spam vs. kein Spam, Beschwerde vs. Lob, Themengebiet, Dringlichkeit. Sie ist eine der häufigsten praktischen NLP-Aufgaben und Grundlage vieler Automatisierungen im Kundenservice, in der Dokumentenverwaltung und in der Moderation. Technisch von klassischen Verfahren (etwa Naive Bayes) bis zu feinabgestimmten Sprachmodellen. Qualitätskritisch: Bias in Trainingsdaten, Umgang mit mehrdeutigen Fällen, Erklärbarkeit. Bei folgenreichen Einstufungen (z. B. im HR- oder Rechtskontext) können AI-Act-Anforderungen greifen.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "named-entity-recognition",
    "sentiment-analyse",
    "klassifikation-regression",
    "topic-modeling",
    "hate-speech-detection"
   ]
  },
  {
   "id": "vision-language-model",
   "cat": "nlp",
   "risk": null,
   "q": "Was ist ein Vision-Language-Modell (VLM)?",
   "term": "Vision-Language-Modell (VLM)",
   "short": "Multimodales Modell, das Bild und Text gemeinsam verarbeitet – etwa um Bilder zu beschreiben oder Fragen zu Bildern zu beantworten.",
   "long": "Vision-Language-Modelle verbinden Bildverständnis und Sprache in einem gemeinsamen Modell. Sie leisten Bildbeschreibung (Image Captioning), visuelle Frage-Antwort (\"Was ist auf dem Foto?\"), Dokumentenanalyse und mehr. Technisch werden Bilder über einen Bild-Encoder in denselben Repräsentationsraum wie Text gebracht und von einem Sprachmodell verarbeitet. VLMs sind eine Schlüsseltechnologie multimodaler KI-Assistenten. Anwendungen: Barrierefreiheit (Bildbeschreibung für Sehbehinderte), Dokumentenverarbeitung, medizinische Bildbefundung. Berühren Transparenz- und Datenschutzfragen, besonders bei Personenbildern.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "multimodalitaet",
    "image-captioning",
    "computer-vision",
    "ocr"
   ]
  },
  {
   "id": "hate-speech-detection",
   "cat": "nlp",
   "risk": null,
   "q": "Wie funktioniert Hassrede-Erkennung?",
   "term": "Hassrede-Erkennung",
   "short": "KI-gestützte Erkennung von hetzerischen, beleidigenden oder aufstachelnden Inhalten in Texten.",
   "long": "Hassrede-Erkennung ist eine spezialisierte Textklassifikation, die in der Content-Moderation großer Plattformen eingesetzt wird. Sie steht im Spannungsfeld zwischen dem Schutz vor Hetze und der Meinungsfreiheit. Herausforderungen: Kontext, Ironie, sich wandelnde Codes und Slang, sprachliche und kulturelle Unterschiede, Bias gegen bestimmte Gruppen oder Dialekte. Reguliert vor allem über den Digital Services Act (DSA), der Transparenz und Beschwerdewege verlangt. Menschliche Überprüfung strittiger Fälle bleibt wichtig, da Fehlentscheidungen Grundrechte berühren – in beide Richtungen.",
   "links": [
    {
     "label": "DSA (VO 2022/2065)",
     "url": "https://eur-lex.europa.eu/eli/reg/2022/2065/oj"
    }
   ],
   "related": [
    "content-moderation",
    "textklassifikation",
    "sentiment-analyse"
   ]
  },
  {
   "id": "bildklassifikation",
   "cat": "cv",
   "risk": null,
   "q": "Was ist Bildklassifikation?",
   "term": "Bildklassifikation",
   "short": "Zuordnung eines ganzen Bildes zu einer Kategorie – die grundlegendste Aufgabe der Computer Vision.",
   "long": "Bei der Bildklassifikation ordnet ein Modell einem Bild ein Label zu (\"Katze\", \"Auto\", \"Tumor\"). Sie war die Aufgabe, an der tiefe neuronale Netze ab 2012 (ImageNet) ihren Durchbruch feierten, meist mit Convolutional Neural Networks (CNN), zunehmend auch mit Vision Transformern. Grundlage vieler Anwendungen von der Qualitätskontrolle bis zur medizinischen Diagnostik. Qualitätskritisch: Generalisierung auf neue Bedingungen, Bias über Gruppen (etwa bei Hauttönen), Robustheit gegen Störungen und Adversarial Examples. Konzeptioneller Ausgangspunkt für komplexere Aufgaben wie Objekterkennung und Segmentierung.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "cnn",
    "objekterkennung",
    "vision-transformer"
   ]
  },
  {
   "id": "objekterkennung",
   "cat": "cv",
   "risk": null,
   "q": "Was ist Objekterkennung (Object Detection)?",
   "term": "Objekterkennung (Object Detection)",
   "short": "Erkennen und Lokalisieren mehrerer Objekte in einem Bild samt Angabe ihrer Position (Begrenzungsrahmen).",
   "long": "Anders als die Bildklassifikation (ein Label pro Bild) findet die Objekterkennung mehrere Objekte, bestimmt ihre Klasse und markiert ihre Position mit einem Begrenzungsrahmen (Bounding Box). Verbreitete Ansätze: einstufige Detektoren (YOLO – schnell, echtzeitfähig) und zweistufige (R-CNN-Familie – oft genauer). Anwendungen: autonomes Fahren, Videoüberwachung, Robotik, Qualitätskontrolle, medizinische Bildgebung. Sicherheits- und grundrechtssensibel, etwa bei der Personenerkennung im öffentlichen Raum. Kernbaustein praktisch aller anspruchsvollen Bildverarbeitungssysteme.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "bildklassifikation",
    "bildsegmentierung",
    "adas",
    "gesichtsdetektion",
    "optical-flow"
   ]
  },
  {
   "id": "bildsegmentierung",
   "cat": "cv",
   "risk": null,
   "q": "Was ist Bildsegmentierung?",
   "term": "Bildsegmentierung",
   "short": "Pixelgenaue Einteilung eines Bildes in Bereiche – etwa um Objektgrenzen exakt zu bestimmen.",
   "long": "Die Segmentierung klassifiziert jedes einzelne Pixel eines Bildes. Bei der semantischen Segmentierung erhält jedes Pixel eine Klasse (Straße, Auto, Person), ohne einzelne Objekte zu trennen; die Instanzsegmentierung unterscheidet zusätzlich einzelne Objekte derselben Klasse (Auto 1, Auto 2). Sie liefert präzisere Information als ein bloßer Begrenzungsrahmen. Anwendungen: autonomes Fahren (Fahrbahn und Hindernisse), medizinische Bildgebung (Organ- und Tumorgrenzen), Satellitenbildauswertung, Bildbearbeitung. Rechnerisch aufwendiger als Objekterkennung, aber unverzichtbar, wo exakte Grenzen zählen.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "objekterkennung",
    "medizinische-bildsegmentierung",
    "computer-vision"
   ]
  },
  {
   "id": "vision-transformer",
   "cat": "cv",
   "risk": null,
   "q": "Was ist ein Vision Transformer (ViT)?",
   "term": "Vision Transformer (ViT)",
   "short": "Anwendung der Transformer-Architektur auf Bilder – eine Alternative zu den lange dominierenden Convolutional Neural Networks.",
   "long": "Der Vision Transformer (2020) zerlegt ein Bild in kleine Kacheln (Patches), behandelt diese ähnlich wie Wörter in einem Satz und verarbeitet sie mit dem Attention-Mechanismus. Bei ausreichend großen Datenmengen erreicht er die Leistung von CNN oder übertrifft sie und vereinheitlicht die Architektur über Text und Bild hinweg (wichtig für multimodale Modelle). Vorteile: bessere Erfassung globaler Bildzusammenhänge; Nachteile: hoher Datenbedarf. Meilenstein, der zeigte, dass die Transformer-Architektur nicht nur für Sprache, sondern universell einsetzbar ist.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "transformer",
    "bildklassifikation",
    "attention"
   ]
  },
  {
   "id": "datenaugmentation",
   "cat": "cv",
   "risk": null,
   "q": "Was ist Datenaugmentation?",
   "term": "Datenaugmentation",
   "short": "Künstliche Vergrößerung eines Trainingsdatensatzes durch Variationen vorhandener Beispiele – etwa Drehen, Spiegeln, Zuschneiden von Bildern.",
   "long": "Bei der Datenaugmentation werden aus vorhandenen Daten neue Trainingsbeispiele erzeugt, indem man sie leicht verändert (Bilder drehen, spiegeln, aufhellen, beschneiden; Texte umformulieren). Ziel: mehr Vielfalt im Training, bessere Generalisierung und geringeres Overfitting – ohne neue Daten sammeln zu müssen. Besonders in der Bildverarbeitung Standard. Auch ein Werkzeug gegen Bias, indem unterrepräsentierte Fälle gezielt ergänzt werden. Verwandt mit synthetischen Daten. Trägt zur Robustheit bei, die der AI Act für Hochrisiko-Systeme verlangt (Art. 15), und schont knappe, teure Trainingsdaten.",
   "links": [
    {
     "label": "Art. 15 AI Act",
     "url": "https://artificialintelligenceact.eu/article/15/"
    }
   ],
   "related": [
    "synthetische-daten",
    "regularisierung",
    "overfitting"
   ]
  },
  {
   "id": "ocr",
   "cat": "cv",
   "risk": null,
   "q": "Was ist Texterkennung (OCR)?",
   "term": "Texterkennung (OCR)",
   "short": "Automatische Umwandlung von Text in Bildern oder Scans in maschinenlesbaren, durchsuchbaren Text.",
   "long": "Optical Character Recognition (OCR) erkennt gedruckten oder handgeschriebenen Text in Bildern, Scans und Fotos und wandelt ihn in bearbeitbaren Text um. Grundlage der Digitalisierung von Dokumenten, der Automatisierung von Rechnungs- und Formularverarbeitung und der Barrierefreiheit. Moderne OCR nutzt tiefe neuronale Netze und bewältigt auch schwierige Layouts, Handschrift und mehrere Sprachen. Häufig Vorstufe weiterer Verarbeitung (etwa NER oder Klassifikation). Qualitätskritisch bei schlechter Bildqualität, ungewöhnlichen Schriften und in rechtlich relevanten Kontexten, wo Erkennungsfehler Folgen haben.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "computer-vision",
    "named-entity-recognition",
    "vision-language-model"
   ]
  },
  {
   "id": "pose-estimation",
   "cat": "cv",
   "risk": null,
   "q": "Was ist Pose Estimation?",
   "term": "Körperhaltungserkennung (Pose Estimation)",
   "short": "Erkennen der Position und Haltung von Körpern anhand von Gelenkpunkten in Bildern oder Videos.",
   "long": "Pose Estimation bestimmt die Lage von Körperschlüsselpunkten (Gelenke, Gesichtszüge) und rekonstruiert so Haltung und Bewegung. Anwendungen: Sportanalyse, Physiotherapie, Mensch-Maschine-Interaktion, Gestensteuerung, Animation, Sturzerkennung in der Pflege. Abzugrenzen von der biometrischen Identifizierung: Pose Estimation erkennt Haltung, nicht zwingend Identität – kann aber in Kombination mit anderen Verfahren zur Überwachung beitragen. Datenschutz- und grundrechtssensibel bei Einsatz zur Verhaltensbeobachtung, etwa am Arbeitsplatz. Technisch eng verwandt mit Objekterkennung und Segmentierung.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "keypoint-detection",
    "gestenerkennung",
    "computer-vision"
   ]
  },
  {
   "id": "tiefenschaetzung",
   "cat": "cv",
   "risk": null,
   "q": "Was sind Tiefenschätzung und 3D-Vision?",
   "term": "Tiefenschätzung und 3D-Vision",
   "short": "Rekonstruktion räumlicher Tiefe aus Bildern – wie weit Objekte entfernt sind – für ein dreidimensionales Szenenverständnis.",
   "long": "Tiefenschätzung ermittelt für jeden Bildpunkt die Entfernung zur Kamera, entweder aus zwei Kameras (Stereo) oder aus einem einzelnen Bild mittels gelernter Modelle (monokular). Zusammen mit weiteren Verfahren ermöglicht sie 3D-Szenenverständnis. Anwendungen: autonomes Fahren (Abstand zu Hindernissen), Robotik (Greifen), Augmented Reality, 3D-Kartierung. Sicherheitskritisch, wenn Fehleinschätzungen der Entfernung zu Kollisionen führen. Oft kombiniert mit Sensordaten (Lidar, Radar) zur Absicherung. Grundlage dafür, dass Maschinen die räumliche Welt erfassen und in ihr handeln können.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "autonomes-fahren",
    "computer-vision",
    "keypoint-detection"
   ]
  },
  {
   "id": "gesichtsdetektion",
   "cat": "cv",
   "risk": null,
   "q": "Was unterscheidet Gesichtsdetektion von Gesichtserkennung?",
   "term": "Gesichtsdetektion (vs. Gesichtserkennung)",
   "short": "Das bloße Auffinden von Gesichtern in einem Bild – zu unterscheiden von der Gesichts-Identifizierung.",
   "long": "Die Gesichtsdetektion stellt nur fest, dass und wo sich ein Gesicht im Bild befindet, ohne die Identität zu bestimmen – etwa für den Autofokus einer Kamera oder das Zählen von Personen. Davon streng zu trennen ist die Gesichtserkennung/-identifizierung, die ein Gesicht einer konkreten Person zuordnet und biometrische Daten verarbeitet. Diese Unterscheidung ist rechtlich zentral: Reine Detektion ist meist unkritisch, während biometrische Identifizierung im öffentlichen Raum stark reguliert oder verboten ist (Art. 5, Anhang III). Ein häufig verwechseltes Begriffspaar mit sehr unterschiedlichen Rechtsfolgen.",
   "links": [
    {
     "label": "Art. 5 AI Act",
     "url": "https://artificialintelligenceact.eu/article/5/"
    }
   ],
   "related": [
    "gesichtserkennung",
    "biometrische-identifizierung",
    "objekterkennung"
   ]
  },
  {
   "id": "anomalieerkennung",
   "cat": "ml",
   "risk": null,
   "q": "Was ist Anomalieerkennung?",
   "term": "Anomalieerkennung",
   "short": "Automatisches Aufspüren ungewöhnlicher Muster, die vom Normalzustand abweichen – etwa Fehler, Betrug oder Störungen.",
   "long": "Anomalieerkennung identifiziert seltene, auffällige Datenpunkte, die sich vom erwarteten Muster unterscheiden. Da Anomalien selten und vielfältig sind, wird oft unüberwacht gelernt, was \"normal\" ist, um Abweichungen zu markieren. Anwendungen: Betrugs- und Geldwäscheerkennung, Netzwerksicherheit (Intrusion Detection), industrielle Fehlererkennung und vorausschauende Wartung, medizinische Auffälligkeiten. Herausforderungen: Balance zwischen Fehlalarmen und übersehenen Fällen, sich änderndes Normalverhalten (Drift). Ein Querschnittsverfahren, das viele der sektorspezifischen Anwendungen technisch unterlegt.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "betrugserkennung",
    "predictive-maintenance",
    "unueberwacht",
    "autoencoder"
   ]
  },
  {
   "id": "image-captioning",
   "cat": "cv",
   "risk": null,
   "q": "Was ist Image Captioning?",
   "term": "Bildbeschreibung (Image Captioning)",
   "short": "Automatisches Erzeugen einer textlichen Beschreibung des Inhalts eines Bildes.",
   "long": "Image Captioning verbindet Bildverständnis und Sprachgenerierung: Das System erkennt, was auf einem Bild zu sehen ist, und formuliert dazu einen beschreibenden Satz. Technisch beruht es heute meist auf Vision-Language-Modellen. Wichtigste Anwendung: Barrierefreiheit – Bildbeschreibungen (Alternativtexte) machen visuelle Inhalte für blinde und sehbehinderte Menschen zugänglich und unterstützen so die Anforderungen des European Accessibility Act. Weitere Nutzung: Bildsuche, Katalogisierung, Content-Moderation. Grenzen: Fehlbeschreibungen, fehlender Kontext, mögliche Verzerrungen. Beispiel für gesellschaftlich wertvolle multimodale KI.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "vision-language-model",
    "multimodalitaet",
    "computer-vision"
   ]
  },
  {
   "id": "super-resolution",
   "cat": "cv",
   "risk": null,
   "q": "Was ist Super-Resolution?",
   "term": "Bildhochskalierung (Super-Resolution)",
   "short": "KI-gestützte Erhöhung der Auflösung und Detailschärfe von Bildern über die ursprüngliche Qualität hinaus.",
   "long": "Super-Resolution erzeugt aus einem niedrig aufgelösten Bild eine höher aufgelöste, detailreichere Version, indem ein Modell plausible Details ergänzt. Anwendungen: Bildrestaurierung, Medizin- und Satellitenbildgebung, Video-Upscaling, Fotografie. Wichtiger Hinweis: Die ergänzten Details sind vom Modell erzeugt und nicht zwingend real – in forensischen oder medizinischen Kontexten ist das kritisch, da \"geschärfte\" Bilder Informationen suggerieren können, die nicht im Original enthalten waren. Beispiel dafür, dass generative Verbesserung und wahrheitsgetreue Abbildung auseinanderfallen können.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "image-generation",
    "gan",
    "diffusion"
   ]
  },
  {
   "id": "optical-flow",
   "cat": "cv",
   "risk": null,
   "q": "Was ist optischer Fluss (Optical Flow)?",
   "term": "Optischer Fluss (Optical Flow)",
   "short": "Schätzung der Bewegung von Bildpunkten zwischen aufeinanderfolgenden Videobildern.",
   "long": "Der optische Fluss beschreibt, wie sich Pixel von einem Videobild zum nächsten bewegen, und macht so Bewegungsrichtung und -geschwindigkeit im Bild sichtbar. Anwendungen: Videoanalyse, Bewegungserkennung, Videokompression, Stabilisierung, autonomes Fahren (Bewegung anderer Verkehrsteilnehmer), Sportanalyse. Grundlage für das Verständnis dynamischer Szenen, in denen nicht nur der Inhalt eines einzelnen Bildes, sondern dessen zeitliche Veränderung zählt. Technisch anspruchsvoll bei schnellen Bewegungen, Verdeckungen und schlechten Lichtverhältnissen. Baustein der Videoverarbeitung, ergänzend zur bildweisen Objekterkennung.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "objekterkennung",
    "autonomes-fahren",
    "computer-vision"
   ]
  },
  {
   "id": "keypoint-detection",
   "cat": "cv",
   "risk": null,
   "q": "Was ist Keypoint Detection?",
   "term": "Merkmalspunkt-Erkennung (Keypoint Detection)",
   "short": "Auffinden markanter, wiedererkennbarer Punkte in Bildern – Grundlage für Zuordnung, Verfolgung und Rekonstruktion.",
   "long": "Keypoint Detection findet charakteristische Bildpunkte (Ecken, Kanten, markante Strukturen), die sich über verschiedene Bilder hinweg zuverlässig wiedererkennen lassen. Solche Merkmalspunkte sind die Grundlage, um Bilder aneinander auszurichten (Registrierung), Objekte über Videobilder zu verfolgen, Panoramen zusammenzusetzen oder 3D-Strukturen aus mehreren Ansichten zu rekonstruieren. Klassische Verfahren (etwa SIFT) wurden durch gelernte Ansätze ergänzt. Ein grundlegendes Werkzeug der Bildverarbeitung, das vielen höheren Aufgaben – von der Panoramafotografie bis zur Roboternavigation – zugrunde liegt.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "pose-estimation",
    "tiefenschaetzung",
    "computer-vision",
    "gestenerkennung"
   ]
  },
  {
   "id": "gestenerkennung",
   "cat": "cv",
   "risk": null,
   "q": "Was ist Gestenerkennung?",
   "term": "Gestenerkennung",
   "short": "Erkennen von Hand- und Körpergesten zur berührungslosen Steuerung von Geräten und Systemen.",
   "long": "Gestenerkennung interpretiert Bewegungen von Händen, Fingern oder Körper als Befehle – etwa zum Steuern von Geräten, in Virtual und Augmented Reality, in der Fahrzeugbedienung oder in der Gebärdenspracherkennung. Technisch baut sie auf Objekt- und Körperpunkterkennung (Pose Estimation) auf. Anwendungen reichen von Unterhaltungselektronik bis zu Barrierefreiheit (etwa Übersetzung von Gebärdensprache). Datenschutzaspekte entstehen, wenn kontinuierlich Kamerabilder von Personen verarbeitet werden. Beispiel für natürliche, berührungslose Mensch-Maschine-Interaktion, die mehrere CV-Grundtechniken zusammenführt.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "pose-estimation",
    "keypoint-detection",
    "computer-vision"
   ]
  },
  {
   "id": "medizinische-bildsegmentierung",
   "cat": "cv",
   "risk": "high",
   "q": "Was ist medizinische Bildsegmentierung?",
   "term": "Medizinische Bildsegmentierung",
   "short": "Pixelgenaue Abgrenzung anatomischer Strukturen oder Auffälligkeiten in medizinischen Bildern – etwa Tumor- oder Organgrenzen.",
   "long": "Die medizinische Bildsegmentierung markiert in CT, MRT oder Mikroskopie exakt die Umrisse von Organen, Gewebe oder Läsionen – wichtig für Diagnose, Bestrahlungsplanung, Operationsvorbereitung und Verlaufskontrolle. Als Teil diagnostischer oder therapeutischer Medizinprodukte fällt sie meist unter MDR und AI Act (Hochrisiko). Hohe Anforderungen an Genauigkeit, Validierung über Geräte und Patientengruppen hinweg und menschliche Kontrolle durch Fachpersonal. Fehler können unmittelbar behandlungsrelevant sein. Ein anschauliches Beispiel dafür, wie eine technische CV-Grundaufgabe im medizinischen Kontext zur streng regulierten Hochrisiko-Anwendung wird.",
   "links": [
    {
     "label": "MDR (VO 2017/745)",
     "url": "https://eur-lex.europa.eu/eli/reg/2017/745/oj"
    }
   ],
   "related": [
    "bildsegmentierung",
    "radiologie-ki",
    "ki-diagnostik"
   ]
  },
  {
   "id": "zeitreihenanalyse",
   "cat": "ml",
   "risk": null,
   "q": "Was ist Zeitreihenanalyse?",
   "term": "Zeitreihenanalyse",
   "short": "Analyse und Vorhersage von Daten, die in zeitlicher Reihenfolge erhoben werden – etwa Kurse, Verbräuche oder Messwerte.",
   "long": "Zeitreihendaten haben eine zeitliche Ordnung, in der die Reihenfolge Bedeutung trägt. Die Analyse zerlegt sie oft in Trend, Saisonalität und Rauschen und nutzt sie zur Prognose (Forecasting). Klassische Verfahren wie ARIMA stehen neben modernen neuronalen Ansätzen (rekurrente Netze, Transformer). Anwendungen: Nachfrageprognose, Finanzmärkte, Energiebedarf, vorausschauende Wartung, Medizin. Besonderheit: Testdaten müssen zeitlich nach den Trainingsdaten liegen, sonst droht Datenleckage. Grundlage vieler sektorspezifischer Prognosesysteme im Glossar.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "rnn",
    "lstm",
    "predictive-maintenance"
   ]
  },
  {
   "id": "rnn",
   "cat": "dl",
   "risk": null,
   "q": "Was ist ein rekurrentes neuronales Netz (RNN)?",
   "term": "Rekurrentes neuronales Netz (RNN)",
   "short": "Netzarchitektur für sequenzielle Daten, die über einen internen Zustand Informationen aus vorherigen Schritten mitführt.",
   "long": "Rekurrente neuronale Netze verarbeiten Sequenzen Schritt für Schritt und geben dabei einen verborgenen Zustand weiter, der als Kurzzeitgedächtnis dient. So eigneten sie sich lange für Sprache, Zeitreihen und Audio. Ihr Problem: Bei langen Sequenzen verlieren sie über die Zeit den Zusammenhang (verschwindende Gradienten). Verbesserte Varianten wie LSTM und GRU milderten dies. Seit Einführung der Transformer-Architektur, die Sequenzen parallel statt schrittweise verarbeitet, wurden RNN in vielen Bereichen abgelöst, bleiben aber konzeptionell und für ressourcenarme Anwendungen relevant.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "lstm",
    "transformer",
    "zeitreihenanalyse"
   ]
  },
  {
   "id": "lstm",
   "cat": "dl",
   "risk": null,
   "q": "Was ist ein LSTM, und welches Problem löst es?",
   "term": "Long Short-Term Memory (LSTM)",
   "short": "Weiterentwicklung des rekurrenten Netzes, die über Torschaltungen längere Zusammenhänge zuverlässig speichern kann.",
   "long": "LSTM-Netze führen spezielle Speicherzellen mit steuerbaren \"Toren\" (Gates) ein, die entscheiden, welche Informationen behalten, überschrieben oder ausgegeben werden. Damit lösen sie das Problem klassischer RNN, den Bezug über lange Sequenzen zu verlieren, und dominierten vor der Transformer-Ära die Sequenzverarbeitung – etwa maschinelle Übersetzung, Spracherkennung und Zeitreihenprognose. Auch heute sind sie bei kleineren Datenmengen und ressourcenbeschränkten Umgebungen eine praktikable Alternative zu Transformern. Wichtiger Meilenstein im Verständnis, wie neuronale Netze Gedächtnis realisieren.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "rnn",
    "vanishing-gradient",
    "transformer",
    "zeitreihenanalyse"
   ]
  },
  {
   "id": "autoencoder",
   "cat": "dl",
   "risk": null,
   "q": "Was ist ein Autoencoder?",
   "term": "Autoencoder",
   "short": "Neuronales Netz, das lernt, seine Eingabe komprimiert darzustellen und daraus wieder zu rekonstruieren.",
   "long": "Ein Autoencoder besteht aus einem Encoder, der die Eingabe in eine kompakte Darstellung (Latenzraum) verdichtet, und einem Decoder, der daraus das Original möglichst genau wiederherstellt. Durch diesen Engpass lernt das Netz die wesentlichen Merkmale der Daten – ohne Labels (selbstüberwacht). Anwendungen: Dimensionsreduktion, Entrauschen, Anomalieerkennung (schlecht rekonstruierbare Fälle sind auffällig) und Merkmalslernen. Die Variante des variational autoencoder (VAE) ist zudem generativ. Grundlegendes Konzept des Repräsentationslernens, verwandt mit generativen Modellen.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "dimensionsreduktion",
    "anomalieerkennung",
    "self-supervised-learning"
   ]
  },
  {
   "id": "dimensionsreduktion",
   "cat": "ml",
   "risk": null,
   "q": "Was ist Dimensionsreduktion?",
   "term": "Dimensionsreduktion",
   "short": "Verfahren, die hochdimensionale Daten auf wenige aussagekräftige Dimensionen verdichten – für Analyse und Visualisierung.",
   "long": "Viele Datensätze haben sehr viele Merkmale (Dimensionen), was Analyse, Rechenaufwand und Visualisierung erschwert (\"Fluch der Dimensionalität\"). Dimensionsreduktion überführt die Daten in einen kleineren Raum, der die wesentliche Struktur erhält. Lineare Verfahren wie PCA (Hauptkomponentenanalyse) finden Richtungen größter Varianz; nichtlineare wie t-SNE oder UMAP eignen sich für die Visualisierung komplexer Strukturen. Anwendungen: Vorverarbeitung, Mustererkennung, Datenexploration, Kompression. Gehört zum unüberwachten Lernen und ergänzt Clustering bei der Erkundung unbekannter Daten.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "autoencoder",
    "clustering",
    "feature-engineering"
   ]
  },
  {
   "id": "graph-neural-network",
   "cat": "dl",
   "risk": null,
   "q": "Was ist ein Graph Neural Network (GNN)?",
   "term": "Graph Neural Network (GNN)",
   "short": "Netzarchitektur für Daten, die als Graph aus Knoten und Kanten vorliegen – etwa soziale Netze, Moleküle oder Verkehrsnetze.",
   "long": "Viele reale Daten sind Beziehungsgeflechte: Personen und ihre Kontakte, Atome und Bindungen, Orte und Verbindungen. Graph Neural Networks verarbeiten solche Strukturen, indem jeder Knoten Informationen von seinen Nachbarn sammelt und aggregiert (Message Passing). So lernen sie aus der Netzstruktur selbst. Anwendungen: Wirkstoffforschung (Molekülgraphen), Empfehlungssysteme, Betrugserkennung, Verkehrsprognose, soziale Netzwerkanalyse. Eine eigenständige Architekturfamilie neben CNN (Gitter/Bilder) und Transformern (Sequenzen), spezialisiert auf vernetzte, unregelmäßige Daten.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "knowledge-graph",
    "empfehlungssystem",
    "nn"
   ]
  },
  {
   "id": "empfehlungssystem",
   "cat": "ml",
   "risk": "limited",
   "q": "Was ist ein Empfehlungssystem?",
   "term": "Empfehlungssystem (Recommender System)",
   "short": "System, das Nutzern personalisierte Vorschläge macht – Produkte, Inhalte, Kontakte – auf Basis ihres Verhaltens und ihrer Merkmale.",
   "long": "Empfehlungssysteme prägen weite Teile des digitalen Alltags: Produktvorschläge, Streaming-Empfehlungen, Nachrichtenfeeds, Kontaktvorschläge. Zwei Grundansätze: kollaboratives Filtern (Nutzer mit ähnlichem Verhalten mögen Ähnliches) und inhaltsbasiertes Filtern (ähnliche Objekte). Wirtschaftlich enorm bedeutsam, aber gesellschaftlich sensibel: Filterblasen, Suchtmechaniken, Verstärkung von Verzerrungen, Intransparenz. Der Digital Services Act verlangt für sehr große Plattformen Transparenz über Empfehlungssysteme und teils eine nicht personalisierte Option. Berührt Verbraucherschutz und Datenschutz (Profiling).",
   "links": [
    {
     "label": "DSA (VO 2022/2065)",
     "url": "https://eur-lex.europa.eu/eli/reg/2022/2065/oj"
    }
   ],
   "related": [
    "kollaboratives-filtern",
    "profiling",
    "graph-neural-network",
    "china-algorithmus-registrierung"
   ]
  },
  {
   "id": "kollaboratives-filtern",
   "cat": "ml",
   "risk": null,
   "q": "Was ist kollaboratives Filtern?",
   "term": "Kollaboratives Filtern",
   "short": "Empfehlungsmethode, die Vorschläge aus dem Verhalten vieler ähnlicher Nutzer ableitet – ohne die Objekte selbst zu kennen.",
   "long": "Kollaboratives Filtern beruht auf der Idee: Wer in der Vergangenheit ähnlich gehandelt hat, wird auch künftig Ähnliches mögen. Aus einer großen Nutzer-Objekt-Matrix (wer hat was bewertet/gekauft) werden Muster gelernt, oft über Matrixfaktorisierung, die verborgene Merkmale von Nutzern und Objekten aufdeckt. Stärke: Es braucht kein inhaltliches Wissen über die Objekte. Schwäche: das Kaltstartproblem – für neue Nutzer oder Objekte ohne Historie fehlen Daten. Grundtechnik vieler Empfehlungssysteme, häufig mit inhaltsbasierten Verfahren zu hybriden Systemen kombiniert.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "empfehlungssystem",
    "vektordatenbank"
   ]
  },
  {
   "id": "knowledge-graph",
   "cat": "ml",
   "risk": null,
   "q": "Was ist ein Wissensgraph (Knowledge Graph)?",
   "term": "Wissensgraph (Knowledge Graph)",
   "short": "Strukturierte Wissensbasis, die Entitäten und ihre Beziehungen als Netz aus Knoten und Kanten abbildet.",
   "long": "Ein Wissensgraph speichert Fakten als Beziehungen zwischen Entitäten (\"Berlin – ist Hauptstadt von – Deutschland\") und macht Wissen so maschinell verarbeitbar und logisch verknüpfbar. Anwendungen: Suchmaschinen, Frage-Antwort-Systeme, Datenintegration, Empfehlungen. Zunehmend werden Wissensgraphen mit Sprachmodellen kombiniert, um deren Faktenwissen zu verankern und Halluzinationen zu reduzieren (eine Form strukturierter Wissensanbindung, verwandt mit RAG). Bindeglied zwischen symbolischer, regelbasierter KI und statistischem maschinellem Lernen. Grundlage vieler Anwendungen, die verlässliches, überprüfbares Wissen brauchen.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "graph-neural-network",
    "rag",
    "named-entity-recognition"
   ]
  },
  {
   "id": "verlustfunktion",
   "cat": "ml",
   "risk": null,
   "q": "Was ist eine Verlustfunktion?",
   "term": "Verlustfunktion (Loss Function)",
   "short": "Maß dafür, wie stark die Vorhersagen eines Modells von den gewünschten Werten abweichen – die Zielgröße, die das Training minimiert.",
   "long": "Die Verlustfunktion übersetzt den Fehler eines Modells in eine einzige Zahl, die das Training zu minimieren versucht. Ihre Wahl bestimmt, worauf das Modell optimiert wird: mittlerer quadratischer Fehler bei Regression, Kreuzentropie bei Klassifikation, spezielle Verluste für andere Aufgaben. Wichtig: Die Verlustfunktion kodiert implizit, welche Fehler als schlimmer gelten – hier können unbeabsichtigt Verzerrungen oder Fehlanreize entstehen. Zusammen mit dem Gradientenabstieg das Herzstück des Lernprozesses. Ihre bewusste Gestaltung ist ein zentraler Hebel für Genauigkeit, Fairness und gewünschtes Verhalten.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "gradientenabstieg",
    "belohnungsfunktion",
    "hyperparameter"
   ]
  },
  {
   "id": "hyperparameter",
   "cat": "ml",
   "risk": null,
   "q": "Was sind Hyperparameter?",
   "term": "Hyperparameter",
   "short": "Einstellgrößen eines Lernverfahrens, die vor dem Training festgelegt werden – im Unterschied zu den im Training gelernten Parametern.",
   "long": "Hyperparameter steuern den Lernprozess selbst: Lernrate, Anzahl der Schichten, Größe der Datenpakete (Batch Size), Stärke der Regularisierung u. a. Anders als die Modellparameter (Gewichte) werden sie nicht gelernt, sondern vom Entwickler gesetzt und beeinflussen Qualität und Trainingsverhalten stark. Ihre Optimierung (Hyperparameter-Tuning) erfolgt systematisch – etwa per Rastersuche, Zufallssuche oder klügeren Verfahren. Ein oft unterschätzter, aber entscheidender Teil der Modellentwicklung. Gute Reproduzierbarkeit (Teil von MLOps) verlangt, die verwendeten Hyperparameter zu dokumentieren.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "lernrate",
    "cross-validation",
    "batch-epoch",
    "verlustfunktion"
   ]
  },
  {
   "id": "lernrate",
   "cat": "dl",
   "risk": null,
   "q": "Was ist die Lernrate?",
   "term": "Lernrate (Learning Rate)",
   "short": "Wichtigster Hyperparameter, der bestimmt, wie große Schritte ein Modell beim Anpassen seiner Parameter macht.",
   "long": "Die Lernrate steuert, wie stark die Parameter bei jedem Schritt des Gradientenabstiegs verändert werden. Ist sie zu hoch, springt das Training über gute Lösungen hinweg und wird instabil; ist sie zu niedrig, dauert das Lernen sehr lange oder bleibt in schlechten Zwischenlösungen stecken. Oft wird die Lernrate im Trainingsverlauf angepasst (Learning Rate Scheduling), etwa anfangs größer und später kleiner. Sie gilt als der einflussreichste einzelne Hyperparameter im Deep Learning. Anschauliches Beispiel dafür, wie sensibel Trainingsergebnisse von scheinbar technischen Einstellungen abhängen.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "hyperparameter",
    "gradientenabstieg",
    "batch-epoch"
   ]
  },
  {
   "id": "batch-epoch",
   "cat": "ml",
   "risk": null,
   "q": "Was bedeuten Batch und Epoche beim Training?",
   "term": "Batch und Epoche",
   "short": "Grundbegriffe des Trainingsablaufs: ein Batch ist eine Datenportion pro Lernschritt, eine Epoche ein vollständiger Durchlauf durch alle Trainingsdaten.",
   "long": "Beim Training werden die Daten nicht auf einmal, sondern in Portionen (Batches) verarbeitet; nach jedem Batch werden die Parameter aktualisiert. Ein vollständiger Durchlauf durch den gesamten Trainingsdatensatz heißt Epoche; typischerweise werden viele Epochen durchlaufen. Die Batch-Größe beeinflusst Trainingsstabilität, Geschwindigkeit und Speicherbedarf; die Zahl der Epochen bestimmt mit, ob ein Modell ausreichend lernt oder zu overfitten beginnt. Grundvokabular, um Trainingskonfigurationen und Rechenaufwand zu verstehen – wichtig auch für die Reproduzierbarkeit im Sinne von MLOps.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "lernrate",
    "hyperparameter",
    "gradientenabstieg"
   ]
  },
  {
   "id": "vanishing-gradient",
   "cat": "dl",
   "risk": null,
   "q": "Was sind verschwindende und explodierende Gradienten?",
   "term": "Verschwindende und explodierende Gradienten",
   "short": "Trainingsprobleme tiefer Netze, bei denen die Lernsignale in frühen Schichten zu klein oder zu groß werden.",
   "long": "Beim Training über Backpropagation werden Fehlersignale (Gradienten) durch viele Schichten zurückgeführt. In sehr tiefen Netzen können sie dabei exponentiell schrumpfen (verschwindende Gradienten – frühe Schichten lernen kaum) oder anwachsen (explodierende Gradienten – Training wird instabil). Diese Probleme bremsten lange das Training tiefer Netze. Lösungen: geeignete Aktivierungsfunktionen (etwa ReLU), Normalisierungstechniken, Residualverbindungen (Skip Connections) und sorgfältige Initialisierung. Ihr Verständnis erklärt, warum bestimmte Architekturbausteine moderner Netze überhaupt notwendig wurden.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "backpropagation",
    "lstm",
    "batch-normalization",
    "aktivierungsfunktion"
   ]
  },
  {
   "id": "aktivierungsfunktion",
   "cat": "dl",
   "risk": null,
   "q": "Was ist eine Aktivierungsfunktion?",
   "term": "Aktivierungsfunktion",
   "short": "Funktion, die einem neuronalen Netz Nichtlinearität verleiht und so das Lernen komplexer Zusammenhänge ermöglicht.",
   "long": "Jedes künstliche Neuron wendet auf seine gewichtete Summe eine Aktivierungsfunktion an. Ohne diese Nichtlinearität wäre ein noch so tiefes Netz nur eine lineare Abbildung und könnte keine komplexen Muster lernen. Verbreitete Funktionen: ReLU (heute Standard, einfach und effektiv), Sigmoid und Tanh (historisch, in bestimmten Rollen weiterhin genutzt), Softmax (für Wahrscheinlichkeitsausgaben). Die Wahl beeinflusst Trainingsverhalten und Gradientenfluss. Ein kleines, aber fundamentales Bauteil, dessen Verständnis erklärt, warum neuronale Netze überhaupt mächtig sind.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "nn",
    "vanishing-gradient",
    "deep-learning"
   ]
  },
  {
   "id": "batch-normalization",
   "cat": "dl",
   "risk": null,
   "q": "Was bewirken Batch- und Layer-Normalisierung?",
   "term": "Normalisierung (Batch/Layer Normalization)",
   "short": "Techniken, die Zwischenwerte in einem neuronalen Netz stabilisieren und so Training beschleunigen und robuster machen.",
   "long": "Normalisierungsschichten skalieren und zentrieren die Aktivierungen innerhalb eines Netzes, damit ihre Verteilung über das Training hinweg stabil bleibt. Batch Normalization tut dies über die Beispiele eines Batches, Layer Normalization über die Merkmale einer einzelnen Eingabe (wichtig in Transformern). Nutzen: schnelleres, stabileres Training, geringere Empfindlichkeit gegenüber der Initialisierung und ein gewisser regularisierender Effekt. Heute Standardbestandteil praktisch aller tiefen Netze. Ein technischer, aber entscheidender Baustein, der das zuverlässige Training sehr tiefer Modelle erst praktikabel machte.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "vanishing-gradient",
    "regularisierung",
    "deep-learning"
   ]
  },
  {
   "id": "few-shot-learning",
   "cat": "llm",
   "risk": null,
   "q": "Was sind Few-Shot- und Zero-Shot-Lernen?",
   "term": "Few-Shot- und Zero-Shot-Lernen",
   "short": "Fähigkeit eines Modells, eine Aufgabe aus wenigen Beispielen (few-shot) oder ganz ohne Beispiele (zero-shot) zu lösen.",
   "long": "Klassisches maschinelles Lernen braucht viele markierte Beispiele pro Aufgabe. Große Sprachmodelle können Aufgaben dagegen oft schon aus wenigen Beispielen im Prompt (few-shot) oder allein aus einer Anweisung ohne Beispiel (zero-shot) bewältigen – das Wissen dafür stammt aus dem Vortraining. Diese \"In-Context\"-Fähigkeit macht sie außergewöhnlich flexibel, ohne erneutes Training. Grundlage vieler praktischer Anwendungen und eng mit Prompt Engineering verbunden. Grenzen: Verlässlichkeit schwankt, und komplexe oder ungewöhnliche Aufgaben profitieren weiterhin von Feinabstimmung oder mehr Beispielen.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "prompt-engineering",
    "transfer-learning",
    "instruction-tuning"
   ]
  },
  {
   "id": "belohnungsfunktion",
   "cat": "ml",
   "risk": null,
   "q": "Was ist eine Belohnungsfunktion (Reward Function)?",
   "term": "Belohnungsfunktion (Reward Function)",
   "short": "Im bestärkenden Lernen die Vorschrift, die das Verhalten eines Agenten bewertet und so seine Ziele definiert.",
   "long": "Beim Reinforcement Learning lernt ein Agent durch Versuch und Rückmeldung: Die Belohnungsfunktion gibt für jede Handlung oder jeden Zustand eine Belohnung, und der Agent lernt, die kumulierte Belohnung zu maximieren. Ihre Gestaltung ist heikel und entscheidend: Eine schlecht formulierte Belohnung führt zu \"Reward Hacking\", bei dem der Agent die Belohnung auf unerwünschte Weise maximiert, ohne das eigentliche Ziel zu erreichen. Das ist ein Kernproblem des Alignments. Die richtige Belohnung zu definieren, ist oft schwerer als das Lernen selbst und verbindet Technik mit Wertefragen.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "rl",
    "q-learning",
    "alignment",
    "verlustfunktion"
   ]
  },
  {
   "id": "q-learning",
   "cat": "ml",
   "risk": null,
   "q": "Was ist Q-Learning?",
   "term": "Q-Learning",
   "short": "Grundlegendes Reinforcement-Learning-Verfahren, das den erwarteten langfristigen Nutzen von Aktionen in Zuständen schätzt.",
   "long": "Q-Learning lernt eine Funktion, die für jede Kombination aus Zustand und Aktion angibt, welchen langfristigen Gesamtnutzen sie verspricht (den \"Q-Wert\"). Der Agent wählt bevorzugt Aktionen mit hohem Q-Wert, erkundet aber gelegentlich auch Alternativen (Exploration vs. Exploitation). Klassisch als Tabelle umgesetzt, für große Zustandsräume mit neuronalen Netzen als Deep Q-Network (DQN). Es war ein Meilenstein, mit dem Agenten etwa lernten, Videospiele allein aus Bildschirmpixeln zu meistern. Grundlegendes Konzept, um zu verstehen, wie Agenten aus Erfahrung strategisches Verhalten entwickeln.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "rl",
    "policy-gradient",
    "exploration-exploitation",
    "belohnungsfunktion"
   ]
  },
  {
   "id": "policy-gradient",
   "cat": "ml",
   "risk": null,
   "q": "Was sind Policy-Gradient-Verfahren?",
   "term": "Policy-Gradient-Verfahren",
   "short": "Reinforcement-Learning-Ansatz, der die Handlungsstrategie eines Agenten direkt optimiert, statt den Umweg über Wertfunktionen zu nehmen.",
   "long": "Während Q-Learning den Nutzen von Aktionen schätzt, optimieren Policy-Gradient-Verfahren unmittelbar die Strategie (Policy) – die Vorschrift, die Zustände auf Aktionen abbildet. Das eignet sich besonders für kontinuierliche Handlungsräume (etwa Robotersteuerung). Bekannte Weiterentwicklungen wie PPO (Proximal Policy Optimization) machen das Training stabiler und sind heute weit verbreitet – unter anderem als Baustein des RLHF, mit dem Sprachmodelle an menschliche Präferenzen angepasst werden. Damit schlägt dieses eher technische Verfahren eine direkte Brücke zum Alignment moderner KI.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "q-learning",
    "rlhf",
    "rl"
   ]
  },
  {
   "id": "exploration-exploitation",
   "cat": "ml",
   "risk": null,
   "q": "Was bedeutet das Dilemma „Exploration vs. Exploitation“?",
   "term": "Exploration vs. Exploitation",
   "short": "Grundlegender Zielkonflikt im bestärkenden Lernen: Bekanntes ausnutzen oder Neues erkunden.",
   "long": "Ein lernender Agent steht ständig vor der Wahl: die bislang beste bekannte Aktion nutzen (Exploitation) oder unbekannte Aktionen ausprobieren, die vielleicht noch besser sind (Exploration). Zu viel Ausnutzung verpasst bessere Lösungen; zu viel Erkundung verschwendet Chancen auf Belohnung. Die richtige Balance ist entscheidend für erfolgreiches Lernen und wird über verschiedene Strategien gesteuert. Das Dilemma tritt weit über die KI hinaus auf – überall, wo unter Unsicherheit zwischen Sicherheit und Chance abgewogen wird (etwa in A/B-Tests oder bei Investitionsentscheidungen). Anschauliches Grundprinzip lernender Systeme.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "rl",
    "q-learning",
    "simulationsumgebung"
   ]
  },
  {
   "id": "simulationsumgebung",
   "cat": "ml",
   "risk": null,
   "q": "Welche Rolle spielen Simulationsumgebungen beim bestärkenden Lernen?",
   "term": "Simulationsumgebung (für RL)",
   "short": "Virtuelle Umgebung, in der ein Agent gefahrlos und beschleunigt durch Millionen von Versuchen lernen kann.",
   "long": "Bestärkendes Lernen braucht sehr viele Versuche – in der realen Welt oft zu langsam, zu teuer oder zu gefährlich. Simulationsumgebungen bilden die Aufgabe virtuell nach, sodass der Agent risikofrei und millionenfach beschleunigt üben kann, etwa Robotersteuerung oder autonomes Fahren. Zentrale Herausforderung ist die \"Sim-to-Real\"-Lücke: In der Simulation Gelerntes überträgt sich nicht immer sauber auf die Realität. Gegenmaßnahmen: realistischere Simulation, gezielte Variation der Bedingungen. Wichtiges Werkzeug, das auch in KI-Reallaboren und beim sicheren Test vor dem Realeinsatz eine Rolle spielt.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "rl",
    "synthetische-daten",
    "autonomes-fahren",
    "exploration-exploitation"
   ]
  },
  {
   "id": "entscheidungsbaum",
   "cat": "ml",
   "risk": null,
   "q": "Was ist ein Entscheidungsbaum?",
   "term": "Entscheidungsbaum",
   "short": "Modell, das Entscheidungen als Folge einfacher Ja/Nein-Fragen abbildet – gut nachvollziehbar und leicht zu erklären.",
   "long": "Ein Entscheidungsbaum trifft Vorhersagen, indem er die Daten anhand einfacher Bedingungen schrittweise aufteilt (\"Alter > 40?\", \"Einkommen > X?\"), bis er zu einer Entscheidung gelangt. Seine große Stärke ist die Interpretierbarkeit: Der Entscheidungsweg lässt sich direkt ablesen und erklären – wertvoll in grundrechtssensiblen Bereichen. Einzelne Bäume neigen zum Overfitting; kombiniert man viele (Random Forest, Gradient Boosting), steigt die Genauigkeit auf Kosten der Nachvollziehbarkeit. Anschauliches Gegenbeispiel zur \"Black Box\" und ein Grundbaustein vieler leistungsstarker Ensemble-Verfahren.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "ensemble",
    "explainable-boosting",
    "klassifikation-regression"
   ]
  },
  {
   "id": "svm",
   "cat": "ml",
   "risk": null,
   "q": "Was ist eine Support Vector Machine (SVM)?",
   "term": "Support Vector Machine (SVM)",
   "short": "Klassisches, mathematisch fundiertes Verfahren, das Datenklassen durch eine optimale Trennlinie mit größtmöglichem Abstand teilt.",
   "long": "Eine Support Vector Machine sucht die Trennfläche, die zwei Klassen mit dem größten Sicherheitsabstand (Margin) voneinander trennt – bestimmt durch die grenznahen Datenpunkte, die Stützvektoren. Über den \"Kernel-Trick\" kann sie auch nichtlinear trennbare Daten in höheren Räumen bewältigen. SVM waren vor dem Aufstieg des Deep Learning eines der leistungsstärksten Verfahren, besonders bei kleineren, gut strukturierten Datensätzen. Sie sind weiterhin nützlich, wenn Daten knapp sind. Wichtiger Teil des klassischen ML-Werkzeugkastens und der Ideengeschichte des maschinellen Lernens.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "klassifikation-regression",
    "naive-bayes",
    "knn"
   ]
  },
  {
   "id": "naive-bayes",
   "cat": "ml",
   "risk": null,
   "q": "Was ist Naive Bayes?",
   "term": "Naive Bayes",
   "short": "Einfacher, schneller Wahrscheinlichkeitsklassifikator, der auf dem Satz von Bayes beruht – klassisch etwa in der Spam-Filterung.",
   "long": "Der Naive-Bayes-Klassifikator berechnet, wie wahrscheinlich ein Beispiel zu einer Klasse gehört, indem er die Beiträge einzelner Merkmale kombiniert. \"Naiv\" heißt er, weil er vereinfachend annimmt, dass die Merkmale voneinander unabhängig sind – selten exakt zutreffend, in der Praxis aber oft erstaunlich wirksam. Vorteile: sehr schnell, wenig Datenbedarf, gut interpretierbar. Klassische Anwendung: Textklassifikation und Spam-Erkennung. Ein lehrreiches Beispiel dafür, dass ein einfaches, transparentes Modell in vielen Fällen völlig ausreicht und einem komplexen überlegen sein kann.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "textklassifikation",
    "svm",
    "bayessche-statistik"
   ]
  },
  {
   "id": "knn",
   "cat": "ml",
   "risk": null,
   "q": "Wie funktioniert k-nächste-Nachbarn (k-NN)?",
   "term": "k-nächste-Nachbarn (k-NN)",
   "short": "Intuitives Verfahren, das ein neues Beispiel anhand der ihm ähnlichsten bekannten Beispiele einordnet.",
   "long": "Bei k-nächste-Nachbarn wird ein neuer Datenpunkt klassifiziert, indem man die k ähnlichsten bekannten Punkte betrachtet und deren Mehrheitsklasse übernimmt (bzw. bei Regression deren Durchschnitt). Das Verfahren speichert einfach alle Trainingsdaten und rechnet erst bei der Abfrage – daher \"faules Lernen\". Vorteile: sehr einfach, keine Trainingsphase, gut nachvollziehbar. Nachteile: langsam und speicherhungrig bei großen Datenmengen, empfindlich gegenüber irrelevanten Merkmalen und der Wahl des Abstandsmaßes. Konzeptionell verwandt mit der Ähnlichkeitssuche in Vektordatenbanken. Ein anschaulicher Einstieg ins maschinelle Lernen.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "vektordatenbank",
    "svm",
    "clustering"
   ]
  },
  {
   "id": "bayessche-statistik",
   "cat": "ml",
   "risk": null,
   "q": "Was ist bayessche Statistik?",
   "term": "Bayessche Statistik",
   "short": "Denkweise, die Wahrscheinlichkeiten als Grad der Überzeugung behandelt und Wissen mit neuen Daten fortlaufend aktualisiert.",
   "long": "Die bayessche Statistik startet mit einer Vorannahme (Prior), aktualisiert diese mit beobachteten Daten und gelangt zu einer aktualisierten Überzeugung (Posterior). Ihr großer Vorteil: Sie liefert nicht nur Vorhersagen, sondern quantifiziert auch deren Unsicherheit – in vielen Anwendungen entscheidend, etwa in Medizin, Risikobewertung oder bei knappen Daten. Sie steht dem \"frequentistischen\" Ansatz klassischer Statistik gegenüber und beeinflusst moderne Verfahren zur Unsicherheitsschätzung in der KI. Wichtig, weil kalibrierte Unsicherheit für vertrauenswürdige, sicherheitskritische Systeme oft ebenso zählt wie die Vorhersage selbst.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "korrelation-kausalitaet",
    "naive-bayes",
    "confusion-matrix"
   ]
  },
  {
   "id": "korrelation-kausalitaet",
   "cat": "ml",
   "risk": null,
   "q": "Was unterscheidet Korrelation von Kausalität?",
   "term": "Korrelation vs. Kausalität",
   "short": "Der grundlegende Unterschied zwischen bloßem statistischem Zusammenhang und echter Ursache-Wirkungs-Beziehung.",
   "long": "Maschinelles Lernen findet Korrelationen – Merkmale, die gemeinsam auftreten. Daraus folgt aber nicht, dass das eine das andere verursacht: Ein Modell kann etwa lernen, dass Regenschirme und nasse Straßen zusammen auftreten, ohne zu verstehen, dass der Regen beides verursacht. Diese Verwechslung führt zu Fehlschlüssen und unfairen Modellen, die auf Scheinzusammenhängen oder Stellvertretermerkmalen beruhen. Die Kausalitätsforschung entwickelt Methoden, um echte Ursachen zu identifizieren. Entscheidend für verlässliche Entscheidungen (\"Was passiert, wenn ich eingreife?\") und für die Vermeidung diskriminierender Proxy-Effekte. Ein Kernthema seriöser Datenanalyse.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "bias",
    "bayessche-statistik",
    "feature-engineering"
   ]
  },
  {
   "id": "imbalanced-data",
   "cat": "ml",
   "risk": null,
   "q": "Was sind unausgewogene Daten (Class Imbalance)?",
   "term": "Unausgewogene Daten (Class Imbalance)",
   "short": "Problem, wenn eine Klasse in den Trainingsdaten stark unterrepräsentiert ist – etwa seltene Krankheiten oder Betrugsfälle.",
   "long": "Bei stark unausgewogenen Daten überwiegt eine Klasse (etwa 99 % gesunde, 1 % kranke Fälle). Ein Modell kann dann eine hohe Genauigkeit erreichen, indem es einfach immer die häufige Klasse vorhersagt – und dabei genau die seltenen, oft wichtigen Fälle übersieht. Deshalb sind bei unausgewogenen Daten Metriken wie Präzision, Trefferquote und F1 aussagekräftiger als reine Genauigkeit. Gegenmaßnahmen: Über- oder Unterabtastung, synthetische Beispiele, angepasste Verlustfunktionen. Praktisch bedeutsam in Medizin, Betrugs- und Anomalieerkennung – und ein häufiger, unterschätzter Grund für scheinbar gute, real aber unbrauchbare Modelle.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "confusion-matrix",
    "data-leakage",
    "synthetische-daten"
   ]
  },
  {
   "id": "data-leakage",
   "cat": "ml",
   "risk": null,
   "q": "Was ist Datenleckage (Data Leakage)?",
   "term": "Datenleckage (Data Leakage)",
   "short": "Häufiger, schwer erkennbarer Fehler, bei dem ein Modell im Training unbeabsichtigt Informationen nutzt, die es später nicht haben dürfte.",
   "long": "Datenleckage entsteht, wenn Informationen aus den Testdaten oder aus der Zukunft ins Training gelangen – etwa wenn dieselben Personen in Trainings- und Testmenge auftauchen oder ein Merkmal heimlich das Ergebnis verrät. Die Folge: Das Modell zeigt in der Erprobung glänzende Werte, versagt aber im echten Einsatz. Leckage ist tückisch, weil sie erfolgreich aussieht. Gegenmaßnahmen: saubere Trennung der Daten, bei Zeitreihen zeitlich korrekte Aufteilung, kritische Prüfung verdächtig guter Ergebnisse. Ein zentrales Qualitäts- und Seriositätsthema – und eine häufige Ursache dafür, dass KI-Systeme im Realbetrieb enttäuschen.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "cross-validation",
    "imbalanced-data",
    "overfitting"
   ]
  },
  {
   "id": "explainable-boosting",
   "cat": "ml",
   "risk": null,
   "q": "Was sind interpretierbare Glass-Box-Modelle?",
   "term": "Interpretierbare Modelle (Glass-Box)",
   "short": "Modelle, die von sich aus nachvollziehbar sind, statt erst nachträglich erklärt werden zu müssen – der Gegenentwurf zur Black Box.",
   "long": "Statt ein undurchsichtiges Modell nachträglich mit Methoden wie SHAP zu erklären, setzen \"Glass-Box\"-Ansätze auf Modelle, die von Grund auf verständlich sind: lineare Modelle, Entscheidungsbäume oder moderne interpretierbare Verfahren, die Genauigkeit und Nachvollziehbarkeit verbinden. Der Vorteil: Die Erklärung ist das Modell selbst und damit exakt, nicht nur eine Näherung. In grundrechtssensiblen Bereichen (Kredit, Justiz, Medizin) ein starkes Argument, wo immer die Leistung ausreicht. Verkörpert die Position, das Black-Box-Problem möglichst zu vermeiden, statt es nur nachträglich zu lindern.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "xai",
    "entscheidungsbaum",
    "explainability-vs-performance"
   ]
  },
  {
   "id": "ground-truth",
   "cat": "ml",
   "risk": null,
   "q": "Was ist Ground Truth?",
   "term": "Grundwahrheit (Ground Truth)",
   "short": "Die als korrekt angenommene Referenz, gegen die die Vorhersagen eines Modells gemessen und an der es trainiert wird.",
   "long": "Die Ground Truth ist die \"richtige Antwort\", mit der Trainings- und Testdaten versehen werden – etwa die von Ärzten bestätigte Diagnose oder das von Menschen vergebene Label. Die Qualität eines Modells kann nie besser sein als die Qualität dieser Referenz: Sind die Labels fehlerhaft, verzerrt oder uneinheitlich, lernt und wird das Modell entsprechend falsch bewertet. In vielen Bereichen ist die \"wahre\" Antwort selbst strittig oder subjektiv (etwa bei Moderationsentscheidungen). Ein kritischer, oft unterschätzter Punkt der Daten-Governance: Wer definiert nach welchen Kriterien die Wahrheit, an der die KI gemessen wird?",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "trainingsdaten",
    "daten-governance",
    "bias",
    "active-learning"
   ]
  },
  {
   "id": "concept-drift-detection",
   "cat": "ml",
   "risk": null,
   "q": "Wie funktioniert Drifterkennung?",
   "term": "Drifterkennung (Drift Detection)",
   "short": "Verfahren, die im laufenden Betrieb erkennen, wann ein Modell wegen veränderter Daten an Zuverlässigkeit verliert.",
   "long": "Da sich die reale Welt verändert, veralten Modelle (siehe Modell- und Datendrift). Drifterkennung überwacht kontinuierlich Eingaben und Vorhersagen und schlägt Alarm, wenn sich Verteilungen oder Leistung auffällig verschieben. So lässt sich rechtzeitig gegensteuern – durch Nachtraining, Anpassung oder Abschaltung. Technisch über statistische Tests, Überwachung von Fehlerraten oder Verteilungsvergleiche umgesetzt. Ein praktischer Baustein von MLOps und die technische Grundlage, um die Post-Market-Monitoring-Pflicht des AI Act (Art. 72) und die dauerhafte Genauigkeit (Art. 15) im Betrieb tatsächlich einzuhalten.",
   "links": [
    {
     "label": "Art. 72 AI Act",
     "url": "https://artificialintelligenceact.eu/article/72/"
    }
   ],
   "related": [
    "model-context-drift",
    "mlops",
    "post-market-monitoring"
   ]
  },
  {
   "id": "active-learning",
   "cat": "ml",
   "risk": null,
   "q": "Was ist aktives Lernen (Active Learning)?",
   "term": "Aktives Lernen (Active Learning)",
   "short": "Strategie, bei der das Modell selbst auswählt, welche Daten am wertvollsten zu beschriften sind, um mit weniger Aufwand mehr zu lernen.",
   "long": "Das Beschriften von Daten (Labeling) ist oft teuer und zeitaufwendig. Beim aktiven Lernen wählt das Modell gezielt die Beispiele aus, bei denen es am unsichersten ist oder aus denen es am meisten lernen würde, und lässt nur diese von Menschen beschriften. So erreicht man mit deutlich weniger markierten Daten eine vergleichbare oder bessere Leistung. Nützlich überall, wo Fachwissen für die Beschriftung nötig ist (etwa in der Medizin). Verbindet menschliche Expertise effizient mit maschinellem Lernen und ist ein praktischer Hebel, um Datenkosten und Bias-Risiken zugleich zu senken.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "trainingsdaten",
    "ground-truth",
    "ueberwacht"
   ]
  },
  {
   "id": "self-supervised-learning",
   "cat": "dl",
   "risk": null,
   "q": "Was ist selbstüberwachtes Lernen?",
   "term": "Selbstüberwachtes Lernen",
   "short": "Lernparadigma, bei dem ein Modell aus unmarkierten Daten lernt, indem es sich seine Trainingsaufgabe selbst erzeugt.",
   "long": "Selbstüberwachtes Lernen erzeugt die Lernsignale aus den Daten selbst, ohne menschliche Labels: Ein Sprachmodell sagt das nächste oder ein verdecktes Wort vorher, ein Bildmodell rekonstruiert ausgeblendete Bildteile. So lassen sich riesige Mengen frei verfügbarer, unmarkierter Daten nutzen. Dieses Paradigma ist der Schlüssel hinter modernen Foundation Models und Sprachmodellen und überwindet den Engpass teurer manueller Beschriftung. Es liegt zwischen überwachtem und unüberwachtem Lernen und hat den jüngsten Fortschritt der KI maßgeblich ermöglicht. Grundlegend für das Verständnis, wie heutige große Modelle überhaupt trainiert werden.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "pretraining",
    "autoencoder",
    "foundation-model"
   ]
  },
  {
   "id": "oecd-ki-prinzipien",
   "cat": "governance",
   "risk": null,
   "q": "Was sind die OECD-KI-Prinzipien?",
   "term": "OECD-KI-Prinzipien",
   "short": "Erste zwischenstaatlich vereinbarte Leitlinien für vertrauenswürdige KI (2019, überarbeitet 2024), die viele nationale Strategien geprägt haben.",
   "long": "Die 2019 verabschiedeten und 2024 aktualisierten OECD-Empfehlungen zur KI formulieren wertebasierte Grundsätze: inklusives Wachstum, menschenzentrierte Werte, Transparenz, Robustheit und Rechenschaft. Sie sind rechtlich nicht bindend, wurden aber von zahlreichen Staaten übernommen und dienten als gemeinsame Referenz für spätere Regelwerke, darunter den EU AI Act. Die Aktualisierung 2024 reagierte auf generative KI (Informationsintegrität, geistiges Eigentum, Sicherheit). Grundlage vieler internationaler Abstimmungen und Ausgangspunkt für die Idee interoperabler, global anschlussfähiger KI-Governance.",
   "links": [
    {
     "label": "OECD AI Principles",
     "url": "https://oecd.ai/en/ai-principles"
    }
   ],
   "related": [
    "oecd-ki-definition",
    "g7-hiroshima",
    "trustworthy-ai",
    "global-partnership-ai",
    "interoperabilitaet-regulierung"
   ]
  },
  {
   "id": "oecd-ki-definition",
   "cat": "governance",
   "risk": null,
   "q": "Wie definiert die OECD ein KI-System?",
   "term": "OECD-Definition eines KI-Systems",
   "short": "International einflussreiche Begriffsbestimmung, die maßgeblich auch die Definition im EU AI Act geprägt hat.",
   "long": "Die OECD definiert ein KI-System als maschinengestütztes System, das aus Eingaben Ausgaben wie Vorhersagen, Inhalte, Empfehlungen oder Entscheidungen ableitet und dabei mit unterschiedlichem Grad an Autonomie und Anpassungsfähigkeit arbeitet. Diese Formulierung wurde bewusst technologieneutral gehalten und diente als Vorlage für die Definition in Art. 3 des EU AI Act. Die Angleichung der Definitionen ist ein wichtiger Baustein internationaler Interoperabilität: Wenn verschiedene Rechtsordnungen denselben Systembegriff verwenden, sinkt der Aufwand für grenzüberschreitend tätige Unternehmen.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "oecd-ki-prinzipien",
    "ki-system",
    "ki"
   ]
  },
  {
   "id": "g7-hiroshima",
   "cat": "governance",
   "risk": null,
   "q": "Was ist der G7-Hiroshima-KI-Prozess?",
   "term": "G7-Hiroshima-KI-Prozess",
   "short": "2023 gestarteter G7-Prozess mit internationalen Leitprinzipien und einem freiwilligen Verhaltenskodex für fortgeschrittene KI-Systeme.",
   "long": "Der unter japanischer G7-Präsidentschaft 2023 initiierte Hiroshima-Prozess brachte ein Rahmenwerk mit zwei Kernbausteinen hervor: die \"Internationalen Leitprinzipien für alle KI-Akteure\" und einen \"Internationalen Verhaltenskodex für Organisationen, die fortgeschrittene KI-Systeme entwickeln\". Die Umsetzung, darunter ein Berichtsrahmen (Reporting Framework), wird über die OECD organisiert und über die G7 hinaus verbreitet (\"Friends Group\"). Freiwillig und nicht bindend, aber einflussreich als gemeinsamer Standard führender Industriestaaten. Beispiel für soft-law-basierte internationale Koordination parallel zu verbindlichen Regelwerken wie dem EU AI Act.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "oecd-ki-prinzipien",
    "verhaltenskodex",
    "frontier-ai-commitments"
   ]
  },
  {
   "id": "un-ki-resolution",
   "cat": "governance",
   "risk": null,
   "q": "Was beinhalten die UN-Resolutionen zu KI?",
   "term": "UN-Resolutionen zu KI",
   "short": "Erste Resolutionen der UN-Generalversammlung, die weltweite Grundsätze für sichere, vertrauenswürdige KI und Kapazitätsaufbau festhalten.",
   "long": "Am 21. März 2024 verabschiedete die UN-Generalversammlung im Konsens ihre erste Resolution zu \"sicheren, geschützten und vertrauenswürdigen KI-Systemen für nachhaltige Entwicklung\" (über 120 Mitantragsteller). Am 1. Juli 2024 folgte eine von China eingebrachte Resolution zum internationalen Kapazitätsaufbau. Beide sind nicht bindend, markieren aber die Verankerung des Themas auf höchster multilateraler Ebene und betonen die Teilhabe des Globalen Südens. Ergänzt durch weitere UN-Prozesse (Global Digital Compact, wissenschaftlicher Beirat). Ausdruck des Bemühens um eine wirklich globale, nicht nur westlich geprägte KI-Governance.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "global-digital-compact",
    "unesco-ki-ethik",
    "global-partnership-ai",
    "digitale-kluft"
   ]
  },
  {
   "id": "global-digital-compact",
   "cat": "governance",
   "risk": null,
   "q": "Was ist der Global Digital Compact?",
   "term": "Global Digital Compact (GDC)",
   "short": "2024 von den UN-Mitgliedstaaten angenommener Rahmen für die digitale Zusammenarbeit, der auch KI-Governance adressiert.",
   "long": "Der Global Digital Compact wurde im September 2024 als Anhang zum \"Pakt für die Zukunft\" auf dem UN-Zukunftsgipfel angenommen. Er formuliert gemeinsame Ziele für eine offene, sichere und inklusive digitale Zukunft – darunter die Überbrückung digitaler Gräben, Datenschutz, Menschenrechte im digitalen Raum und die Governance neuer Technologien einschließlich KI. Aus ihm gehen konkrete Folgeschritte hervor, etwa ein internationaler wissenschaftlicher Beirat zu KI und ein globaler Dialog zur KI-Governance im UN-Rahmen. Wichtiger Bezugspunkt für die multilaterale, entwicklungsorientierte Perspektive auf KI.",
   "links": [
    {
     "label": "UN GDC",
     "url": "https://www.un.org/global-digital-compact"
    }
   ],
   "related": [
    "un-ki-resolution",
    "unesco-ki-ethik"
   ]
  },
  {
   "id": "unesco-ki-ethik",
   "cat": "ethics",
   "risk": null,
   "q": "Was ist die UNESCO-Empfehlung zur Ethik der KI?",
   "term": "UNESCO-Empfehlung zur Ethik der KI",
   "short": "2021 angenommener globaler Ethikrahmen für KI – das erste weltweit von nahezu allen Staaten getragene Instrument dieser Art.",
   "long": "Die UNESCO-Empfehlung zur Ethik der Künstlichen Intelligenz (2021) wurde von den Mitgliedstaaten angenommen und bündelt Werte und Grundsätze wie Menschenwürde, Menschenrechte, Umweltverträglichkeit, Diversität, Transparenz und menschliche Aufsicht. Sie enthält konkrete Politikempfehlungen und Instrumente zur Selbstbewertung (Readiness Assessment). Als nahezu universell getragenes Instrument hat sie besonderes Gewicht für Länder ohne eigene umfassende KI-Gesetzgebung und für den globalen Wertekonsens. Ergänzt regionale und nationale Regelwerke um eine kulturell breit abgestützte ethische Grundlage.",
   "links": [
    {
     "label": "UNESCO AI Ethics",
     "url": "https://www.unesco.org/en/artificial-intelligence/recommendation-ethics"
    }
   ],
   "related": [
    "un-ki-resolution",
    "europarat-ki-konvention",
    "trustworthy-ai",
    "global-digital-compact"
   ]
  },
  {
   "id": "europarat-ki-konvention",
   "cat": "governance",
   "risk": null,
   "q": "Was ist die KI-Konvention des Europarats?",
   "term": "Europarat-KI-Konvention",
   "short": "Erste völkerrechtlich verbindliche internationale Konvention zu KI (2024), ausgerichtet auf Menschenrechte, Demokratie und Rechtsstaatlichkeit.",
   "long": "Die Rahmenkonvention des Europarats über Künstliche Intelligenz und Menschenrechte, Demokratie und Rechtsstaatlichkeit (2024) ist der erste rechtlich bindende internationale Vertrag zu KI. Anders als der EU AI Act, der ein Produktsicherheits- und Marktzugangsregime ist, setzt die Konvention beim Schutz von Grundwerten an und steht auch Nicht-Europaratsstaaten offen (u. a. beteiligten sich USA, Kanada und weitere an der Aushandlung). Sie verpflichtet die Vertragsstaaten, den gesamten KI-Lebenszyklus mit Menschenrechten und demokratischen Prinzipien in Einklang zu bringen. Ihre Wirkung hängt von Ratifizierung und nationaler Umsetzung ab. Wichtige Ergänzung zum eher technischen EU-Ansatz.",
   "links": [
    {
     "label": "Council of Europe",
     "url": "https://www.coe.int/en/web/artificial-intelligence"
    }
   ],
   "related": [
    "unesco-ki-ethik",
    "digital-omnibus",
    "bruessel-effekt"
   ]
  },
  {
   "id": "global-partnership-ai",
   "cat": "governance",
   "risk": null,
   "q": "Was ist die Global Partnership on AI (GPAI)?",
   "term": "Global Partnership on AI (GPAI)",
   "short": "Internationale Multi-Stakeholder-Initiative, die Regierungen, Wissenschaft, Zivilgesellschaft und Industrie zur verantwortungsvollen KI zusammenbringt.",
   "long": "Die 2020 gegründete Global Partnership on Artificial Intelligence (GPAI) fördert die praxisnahe, projektbasierte Zusammenarbeit zu verantwortungsvoller KI über Arbeitsgruppen zu Themen wie verantwortungsvolle KI, Daten-Governance, Zukunft der Arbeit und Innovation. Sie ist eng mit der OECD verzahnt, die die Prinzipienarbeit trägt. GPAI verbindet politische Grundsatzarbeit mit konkreten Anwendungsprojekten und bindet Fachleute jenseits der Regierungen ein. Nicht zu verwechseln mit \"GPAI\" im Sinne des EU AI Act (dort: General-Purpose-AI-Modelle). Baustein des vielschichtigen internationalen Governance-Geflechts.",
   "links": [
    {
     "label": "GPAI",
     "url": "https://gpai.ai/"
    }
   ],
   "related": [
    "oecd-ki-prinzipien",
    "un-ki-resolution",
    "gpai",
    "digitale-kluft"
   ]
  },
  {
   "id": "ai-safety-summits",
   "cat": "governance",
   "risk": null,
   "q": "Was ist die Reihe der KI-Sicherheitsgipfel?",
   "term": "KI-Sicherheitsgipfel (Summit-Reihe)",
   "short": "Reihe internationaler Regierungsgipfel zur KI-Sicherheit, begonnen 2023 in Bletchley Park.",
   "long": "Die Gipfelreihe begann im November 2023 mit dem AI Safety Summit in Bletchley Park (UK), gefolgt von Seoul (Mai 2024), dem \"AI Action Summit\" in Paris (Februar 2025, Frankreich/Indien) und dem \"AI Impact Summit\" in Neu-Delhi (Februar 2026); ein weiterer Gipfel in Genf ist für 2027 angekündigt. Der Fokus verschob sich von reiner Sicherheit (Bletchley) hin zu Handlung, Anwendung und Inklusion. Die Gipfel brachten gemeinsame Erklärungen und freiwillige Selbstverpflichtungen hervor und etablierten KI-Governance als Thema der Staats- und Regierungschefs. Zentrale Bühne für die Abstimmung zwischen Staaten, Unternehmen und Wissenschaft.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "bletchley-erklaerung",
    "frontier-ai-commitments",
    "netzwerk-safety-institutes",
    "existenzielles-risiko"
   ]
  },
  {
   "id": "bletchley-erklaerung",
   "cat": "governance",
   "risk": null,
   "q": "Was ist die Bletchley-Erklärung?",
   "term": "Bletchley-Erklärung",
   "short": "Erste internationale Regierungserklärung zu den Risiken fortgeschrittener KI (2023), getragen von rund 28 Staaten und der EU.",
   "long": "Die auf dem AI Safety Summit in Bletchley Park im November 2023 verabschiedete Erklärung wurde von rund 28 Staaten und der EU unterzeichnet – bemerkenswerterweise auch von China und den USA. Sie benennt gemeinsame Anliegen wie Menschenrechte, Transparenz, Fairness, Rechenschaft und menschliche Aufsicht sowie die Risiken besonders leistungsfähiger \"Frontier\"-Modelle und ruft zu international koordiniertem Handeln auf. Nicht bindend, aber symbolisch bedeutsam als erster breiter Konsens auch über geopolitische Gräben hinweg. Ausgangspunkt der Summit-Reihe und der internationalen KI-Sicherheitskooperation.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "ai-safety-summits",
    "frontier-ai-commitments",
    "systemisches-risiko"
   ]
  },
  {
   "id": "frontier-ai-commitments",
   "cat": "governance",
   "risk": null,
   "q": "Was sind die Frontier AI Safety Commitments?",
   "term": "Frontier AI Safety Commitments",
   "short": "Freiwillige Selbstverpflichtungen führender KI-Unternehmen (Seoul 2024), Sicherheitsrahmen und Risikoschwellen offenzulegen.",
   "long": "Auf dem Seouler Gipfel 2024 verpflichteten sich 16 führende KI-Unternehmen erstmals gemeinsam dazu, Sicherheitsrahmen (Safety Frameworks) zu veröffentlichen, Schwellen für \"nicht tolerierbare\" Risiken zu definieren, vor der Bereitstellung Sicherheitsevaluierungen samt Red-Teaming durchzuführen und Modelle oberhalb ihrer Risikoschwellen nicht einzusetzen. Bemerkenswert war die Bandbreite der Unterzeichner über westliche Firmen hinaus. Freiwillig und ohne Sanktionsmechanismus, aber ein wichtiger Schritt hin zu vergleichbaren, überprüfbaren Sicherheitszusagen der Industrie. Ergänzt staatliche Regulierung um Selbstregulierung der Entwickler.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "ai-safety-summits",
    "bletchley-erklaerung",
    "red-teaming-vs-blue",
    "g7-hiroshima"
   ]
  },
  {
   "id": "netzwerk-safety-institutes",
   "cat": "governance",
   "risk": null,
   "q": "Was ist das Netzwerk der KI-Sicherheitsinstitute?",
   "term": "Netzwerk der KI-Sicherheitsinstitute",
   "short": "Internationaler Verbund staatlicher Institute, die die Fähigkeiten und Risiken fortgeschrittener KI-Modelle wissenschaftlich bewerten.",
   "long": "Seit 2023 richteten mehrere Staaten eigene KI-Sicherheits- bzw. -Sicherheitsinstitute ein (etwa im Vereinigten Königreich und in den USA), die fortgeschrittene Modelle testen und bewerten. Ende 2024 schlossen sie sich zu einem internationalen Netzwerk zusammen, um Methoden, Erkenntnisse und Evaluierungsstandards abzustimmen. Ziel: eine gemeinsame wissenschaftliche Grundlage für die Bewertung von Modellfähigkeiten und -risiken schaffen, die nationale Regulierung informiert. Beispiel für technisch-institutionelle statt rein rechtlicher internationaler Zusammenarbeit. Ergänzt Gipfelerklärungen um konkrete, überprüfbare Prüfkapazität.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "ai-security-institute",
    "ai-safety-summits",
    "modellbewertung",
    "wissenschaftliches-gremium"
   ]
  },
  {
   "id": "usa-ki-regulierung",
   "cat": "governance",
   "risk": null,
   "q": "Wie wird KI in den USA reguliert?",
   "term": "KI-Regulierung in den USA",
   "short": "Dezentraler, sektor- und bundesstaatengetriebener Ansatz ohne umfassendes bundesweites KI-Gesetz.",
   "long": "Die USA verfügen über kein umfassendes bundesweites KI-Gesetz nach EU-Vorbild. Stattdessen greifen bestehende Sektorgesetze, Vorgaben einzelner Behörden (etwa der Handelsaufsicht) sowie präsidiale Anordnungen (Executive Orders), deren Ausrichtung sich mit der Regierung ändert. Zusätzlich entsteht ein Flickenteppich an Gesetzen einzelner Bundesstaaten. Die Bundesebene betont zuletzt Innovationsförderung und wendet sich gegen als übermäßig empfundene Regulierung; zugleich rücken nationale Sicherheitsaspekte fortgeschrittener Modelle stärker in den Blick. Prägend für die transatlantische Debatte über den richtigen Grad an KI-Regulierung.",
   "links": [
    {
     "label": "NIST AI",
     "url": "https://www.nist.gov/artificial-intelligence"
    }
   ],
   "related": [
    "us-executive-orders-ki",
    "nist-ai-rmf",
    "us-bundesstaaten-ki",
    "federal-preemption-ki",
    "uk-ki-regulierung"
   ]
  },
  {
   "id": "us-executive-orders-ki",
   "cat": "governance",
   "risk": null,
   "q": "Welche Rolle spielen US-Executive-Orders zu KI?",
   "term": "US-Executive-Orders zu KI",
   "short": "Präsidiale Anordnungen, die die KI-Politik der US-Bundesebene steuern und sich mit dem Regierungswechsel deutlich verschoben haben.",
   "long": "Executive Orders sind Anordnungen des US-Präsidenten an die Bundesverwaltung. Eine umfassende Anordnung der Vorgängerregierung (2023) zu Sicherheit und Aufsicht wurde nach dem Regierungswechsel aufgehoben und durch eine innovationsorientierte Linie ersetzt. Nachfolgende Anordnungen zielten unter anderem darauf, bundesstaatliche KI-Gesetze zurückzudrängen (Frage der bundesrechtlichen Vorrangwirkung) und – in einer Anordnung von 2026 – auf Cybersicherheit und die freiwillige staatliche Prüfung besonders leistungsfähiger \"Frontier\"-Modelle vor deren Freigabe. Anschauliches Beispiel dafür, wie stark KI-Politik ohne festes Gesetz von der jeweiligen Regierung abhängt.",
   "links": [
    {
     "label": "NIST AI",
     "url": "https://www.nist.gov/artificial-intelligence"
    }
   ],
   "related": [
    "usa-ki-regulierung",
    "federal-preemption-ki",
    "compute-governance",
    "us-bundesstaaten-ki"
   ]
  },
  {
   "id": "nist-ai-rmf",
   "cat": "governance",
   "risk": null,
   "q": "Was ist das NIST AI Risk Management Framework?",
   "term": "NIST AI Risk Management Framework",
   "short": "Freiwilliges US-Rahmenwerk zum Umgang mit KI-Risiken, international breit als Referenz genutzt.",
   "long": "Das vom US-Normungsinstitut NIST 2023 veröffentlichte AI Risk Management Framework (AI RMF) bietet einen strukturierten, freiwilligen Ansatz, um KI-Risiken zu erkennen, zu bewerten und zu steuern. Es gliedert sich in vier Kernfunktionen (Govern, Map, Measure, Manage) und wurde um Leitlinien für generative KI ergänzt. Obwohl nicht verbindlich, dient es vielen Organisationen weltweit – auch außerhalb der USA – als praktisches Werkzeug und ist teils mit dem EU-Ansatz und ISO-Normen (etwa ISO/IEC 42001) anschlussfähig. Beispiel dafür, wie freiwillige Standards faktisch prägende Wirkung entfalten können.",
   "links": [
    {
     "label": "NIST AI RMF",
     "url": "https://www.nist.gov/itl/ai-risk-management-framework"
    }
   ],
   "related": [
    "usa-ki-regulierung",
    "ai-governance",
    "risikomanagementsystem"
   ]
  },
  {
   "id": "us-bundesstaaten-ki",
   "cat": "governance",
   "risk": null,
   "q": "Welche KI-Gesetze gibt es in den US-Bundesstaaten?",
   "term": "KI-Gesetze der US-Bundesstaaten",
   "short": "Wachsender Flickenteppich einzelstaatlicher KI-Regeln, da auf Bundesebene ein umfassendes Gesetz fehlt.",
   "long": "Mangels eines umfassenden Bundesgesetzes regeln zunehmend einzelne US-Bundesstaaten KI selbst. Beispiele betreffen automatisierte Entscheidungen und Diskriminierung, Transparenz und Kennzeichnung generierter Inhalte oder Anforderungen an sehr große Anbieter. Dieser \"Flickenteppich\" erschwert die Compliance für landesweit tätige Unternehmen und ist Gegenstand politischer Auseinandersetzung: Die Bundesebene versucht, uneinheitliche oder als übermäßig empfundene Landesgesetze zurückzudrängen (Vorrangwirkung), während Bundesstaaten auf ihre Zuständigkeit verweisen. Kontrast zum einheitlichen, horizontalen Ansatz des EU AI Act.",
   "links": [
    {
     "label": "NIST AI",
     "url": "https://www.nist.gov/artificial-intelligence"
    }
   ],
   "related": [
    "usa-ki-regulierung",
    "federal-preemption-ki",
    "us-executive-orders-ki"
   ]
  },
  {
   "id": "federal-preemption-ki",
   "cat": "governance",
   "risk": null,
   "q": "Was bedeutet bundesrechtliche Vorrangwirkung (Preemption) bei KI in den USA?",
   "term": "Bundesrechtliche Vorrangwirkung (Preemption)",
   "short": "US-Debatte, ob und wie bundesweite Vorgaben widersprechende KI-Gesetze einzelner Bundesstaaten verdrängen können.",
   "long": "Preemption bezeichnet im US-Verfassungsrecht den Vorrang von Bundesrecht vor entgegenstehendem Landesrecht. In der KI-Politik ist umstritten, ob die Bundesebene die wachsende Zahl einzelstaatlicher KI-Gesetze zugunsten eines einheitlichen nationalen Rahmens zurückdrängen darf – etwa über Anordnungen, Förderbedingungen oder ein künftiges Bundesgesetz. Befürworter betonen Rechtssicherheit und Wettbewerbsfähigkeit, Kritiker den Verlust bundesstaatlicher Schutzstandards (etwa beim Kinderschutz). Der Ausgang wird voraussichtlich durch langwierige Gerichtsverfahren geklärt. Ein prägendes Strukturmerkmal der US-Debatte ohne Entsprechung im EU-System.",
   "links": [
    {
     "label": "NIST AI",
     "url": "https://www.nist.gov/artificial-intelligence"
    }
   ],
   "related": [
    "us-bundesstaaten-ki",
    "us-executive-orders-ki",
    "usa-ki-regulierung"
   ]
  },
  {
   "id": "china-ki-regulierung",
   "cat": "governance",
   "risk": null,
   "q": "Wie reguliert China KI?",
   "term": "KI-Regulierung in China",
   "short": "Regelung durch viele gezielte, aufeinanderfolgende Einzelvorschriften statt eines einzigen umfassenden Gesetzes.",
   "long": "China reguliert KI über eine Vielzahl gezielter, rasch erlassener Einzelregelungen, die jeweils ein konkretes Problem adressieren (Empfehlungsalgorithmen, Deep Synthesis, generative KI, Kennzeichnung). Federführend ist die Cyberspace-Verwaltung (CAC). Dieser iterative Ansatz erlaubt schnelles Nachsteuern, verlangt Anbietern aber, ein bewegliches Geflecht vieler Vorschriften zu verfolgen. Kennzeichnend sind Registrierungs- und Sicherheitsprüfpflichten, Inhaltskontrolle mit Bindung an staatlich gesetzte Werte sowie ein strategisches Ziel der KI-Führerschaft. Ein umfassendes nationales KI-Gesetz war Mitte 2026 noch ein Entwurf. Kontrastmodell zum horizontalen, grundrechtszentrierten EU-Ansatz.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "cac",
    "china-genai-massnahmen",
    "china-kennzeichnung",
    "china-algorithmus-registrierung"
   ]
  },
  {
   "id": "cac",
   "cat": "governance",
   "risk": null,
   "q": "Was ist die Cyberspace Administration of China (CAC)?",
   "term": "Cyberspace Administration of China (CAC)",
   "short": "Zentrale chinesische Aufsichtsbehörde für Internet, Daten und KI und Motor der meisten KI-Vorschriften.",
   "long": "Die Cyberspace Administration of China (CAC) ist die maßgebliche Regulierungs- und Aufsichtsbehörde für den digitalen Raum in China. Sie ist federführend bei nahezu allen zentralen KI-Regelungen – von den Vorschriften zu Empfehlungsalgorithmen über Deep Synthesis bis zu den Kennzeichnungspflichten für generierte Inhalte – und führt Registrierungen von Algorithmen und Diensten sowie Sicherheitsprüfungen durch. Mehrere weitere Ministerien wirken mit, doch die CAC ist der Dreh- und Angelpunkt. Funktional in etwa vergleichbar mit einer Kombination aus Datenschutz-, Medien- und Digitalaufsicht, mit weitreichenden Befugnissen zur Inhaltskontrolle.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "china-ki-regulierung",
    "china-algorithmus-registrierung",
    "china-deep-synthesis",
    "china-genai-massnahmen"
   ]
  },
  {
   "id": "china-genai-massnahmen",
   "cat": "governance",
   "risk": null,
   "q": "Welche Regeln gelten in China für generative KI?",
   "term": "Chinas Regeln für generative KI",
   "short": "Weltweit eine der ersten spezifischen Regelungen für generative KI-Dienste (in Kraft seit August 2023).",
   "long": "Die \"Interim-Maßnahmen für die Verwaltung generativer KI-Dienste\" traten im August 2023 in Kraft und waren eine der ersten spezifischen Regelungen weltweit für generative KI. Sie verpflichten Anbieter unter anderem dazu, Trainingsdaten und Modelle aus rechtmäßigen Quellen zu beziehen, geistiges Eigentum und Personendaten zu achten, Inhalte zu moderieren und rechtswidrige Inhalte rasch zu entfernen. Zudem müssen bestimmte Dienste mit Wirkung auf die öffentliche Meinung Sicherheitsprüfungen durchlaufen und sich registrieren. Anbieter gelten als \"Inhalteproduzenten\" und tragen entsprechende Verantwortung. Prägend für den chinesischen Regulierungsstil aus Innovation und Kontrolle.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "china-ki-regulierung",
    "china-deep-synthesis",
    "cac"
   ]
  },
  {
   "id": "china-deep-synthesis",
   "cat": "governance",
   "risk": null,
   "q": "Was regeln Chinas Deep-Synthesis-Vorschriften?",
   "term": "Deep-Synthesis-Vorschriften (China)",
   "short": "Chinesische Regeln (in Kraft seit 2023) für synthetische Medien wie Deepfakes, mit Kennzeichnungs- und Einwilligungspflichten.",
   "long": "Die Vorschriften zur Verwaltung von \"Deep Synthesis\"-Diensten regeln die Erzeugung und Bearbeitung synthetischer Inhalte – Gesichtstausch, Stimmklonen, generierte Bilder, Audio und Video. Kernpflichten: Registrierung der Anbieter, dauerhafte Kennzeichnung synthetischer Inhalte (Wasserzeichen und Metadaten), Echtnamen-Verifizierung der Erstellenden, Einwilligung der abgebildeten Personen sowie Verbot rechtswidriger Inhalte. China regulierte damit Deepfakes früher und strenger als viele westliche Staaten. Sachlich verwandt mit den Transparenzpflichten des EU AI Act (Art. 50), jedoch stärker auf Identifizierbarkeit und staatliche Kontrolle ausgerichtet.",
   "links": [
    {
     "label": "Art. 50 AI Act",
     "url": "https://artificialintelligenceact.eu/article/50/"
    }
   ],
   "related": [
    "china-kennzeichnung",
    "deepfake",
    "china-genai-massnahmen",
    "cac"
   ]
  },
  {
   "id": "china-kennzeichnung",
   "cat": "governance",
   "risk": null,
   "q": "Welche Kennzeichnungsregeln gelten in China für KI-Inhalte?",
   "term": "Chinas Kennzeichnungsregeln für KI-Inhalte",
   "short": "Seit September 2025 verbindliche Pflicht, KI-generierte Inhalte sichtbar und maschinenlesbar zu kennzeichnen.",
   "long": "Die \"Maßnahmen zur Kennzeichnung KI-generierter/synthetischer Inhalte\" traten am 1. September 2025 in Kraft, gestützt auf einen verbindlichen nationalen Standard. Sie verlangen zwei Arten von Kennzeichen: explizite (für Menschen sichtbare oder hörbare Hinweise) und implizite (in Metadaten eingebettete, maschinenlesbare Markierungen). Verbreitungsplattformen müssen KI-Inhalte erkennen, als bestätigt, möglich oder vermutet einstufen und entsprechend kennzeichnen. China zählt damit zu den Vorreitern verpflichtender Herkunftskennzeichnung. Inhaltlich vergleichbar mit den ab 2026 greifenden Transparenz- und Kennzeichnungspflichten des EU AI Act, im Detail jedoch strenger und stärker durchsetzungsorientiert.",
   "links": [
    {
     "label": "Art. 50 AI Act",
     "url": "https://artificialintelligenceact.eu/article/50/"
    }
   ],
   "related": [
    "china-deep-synthesis",
    "wasserzeichen",
    "transparenzpflichten",
    "china-ki-regulierung"
   ]
  },
  {
   "id": "china-algorithmus-registrierung",
   "cat": "governance",
   "risk": null,
   "q": "Was ist die Algorithmus-Registrierung in China?",
   "term": "Algorithmus-Registrierung (China)",
   "short": "Pflicht, bestimmte Algorithmen – etwa Empfehlungssysteme – bei der Behörde zu registrieren und offenzulegen.",
   "long": "Bereits die Vorschriften zu Empfehlungsalgorithmen (in Kraft seit 2022) führten eine Registrierungspflicht für Algorithmen ein, die das Informationsumfeld prägen. Anbieter müssen ihre Algorithmen bei der CAC anmelden (Filing), Grundangaben offenlegen und Nutzern gewisse Kontrollmöglichkeiten einräumen – etwa das Abschalten personalisierter Empfehlungen. Die Behörde führt ein Register angemeldeter Algorithmen und Dienste. Dieses Instrument verschafft dem Staat Einblick in und Einfluss auf zentrale Meinungs- und Marktmechanismen. Ein im internationalen Vergleich ungewöhnlich weitreichender, vorab ansetzender Kontrollansatz, der über die eher ergebnisorientierte EU-Regulierung hinausgeht.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "cac",
    "empfehlungssystem",
    "china-ki-regulierung"
   ]
  },
  {
   "id": "uk-ki-regulierung",
   "cat": "governance",
   "risk": null,
   "q": "Wie reguliert das Vereinigte Königreich KI?",
   "term": "KI-Regulierung im Vereinigten Königreich",
   "short": "Innovationsfreundlicher Ansatz ohne eigenes KI-Gesetz, der auf bestehende Sektorregulierer und Grundsätze setzt.",
   "long": "Das Vereinigte Königreich hat bewusst kein umfassendes KI-Gesetz nach EU-Vorbild erlassen. Ein Weißbuch von 2023 setzte auf einen \"pro-innovation\"-Ansatz: fünf sektorübergreifende Grundsätze (Sicherheit, Transparenz, Fairness, Rechenschaft, Anfechtbarkeit), die von bestehenden Regulierern in ihren jeweiligen Bereichen angewandt werden (Datenschutz-, Finanz-, Medien-, Medizinprodukteaufsicht). Eine koordinierende Regierungsstelle gibt die Richtung vor, ohne selbst zu vollstrecken. Ein eigenes KI-Gesetz für besonders leistungsfähige Modelle wurde erwogen, war aber Mitte 2026 nicht verabschiedet. Bewusster Gegenentwurf zum umfassenden EU-Regime.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "ai-security-institute",
    "duaa",
    "usa-ki-regulierung"
   ]
  },
  {
   "id": "ai-security-institute",
   "cat": "governance",
   "risk": null,
   "q": "Was ist das AI Security Institute (UK)?",
   "term": "AI Security Institute (UK)",
   "short": "Staatliches britisches Institut zur Bewertung der Fähigkeiten und Risiken fortgeschrittener KI-Modelle.",
   "long": "Das 2023 als \"AI Safety Institute\" gegründete und Anfang 2025 in \"AI Security Institute\" umbenannte Institut evaluiert besonders leistungsfähige Modelle auf sicherheitsrelevante Fähigkeiten und Risiken. Die Umbenennung signalisierte eine Akzentverschiebung von \"Sicherheit im Sinne von Safety\" hin zu Sicherheitsaspekten und Wachstum. Das Institut führt eigene Modellevaluierungen durch, informiert die Politik und wirkt im internationalen Netzwerk der Sicherheitsinstitute mit. Es verkörpert den britischen Ansatz, KI zunächst über Fachexpertise und Evaluierung statt über ein umfassendes Gesetz zu steuern. Vorbild für ähnliche Institute in anderen Staaten.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "uk-ki-regulierung",
    "netzwerk-safety-institutes",
    "modellbewertung"
   ]
  },
  {
   "id": "duaa",
   "cat": "governance",
   "risk": null,
   "q": "Was regelt der Data (Use and Access) Act 2025 (UK)?",
   "term": "Data (Use and Access) Act 2025 (UK)",
   "short": "Britisches Datenrecht, das unter anderem die Regeln für automatisierte Entscheidungen neu fasst.",
   "long": "Der Data (Use and Access) Act 2025 (DUAA) reformierte das britische Datenschutzrecht nach dem Brexit. Für KI besonders relevant: Er ersetzte die bisherige Vorschrift zu automatisierten Einzelentscheidungen durch ein neues Regelwerk, das solche Entscheidungen unter erweiterten Bedingungen erlaubt, zugleich aber Schutzmaßnahmen verlangt (etwa wirksame menschliche Überprüfung und Transparenz). Er bildet damit im UK das Gegenstück zu den KI-relevanten Teilen der DSGVO. Für Unternehmen mit Bezug zu EU und UK bedeutet dies zwei parallel zu beachtende Datenschutzregime. Beispiel dafür, dass KI-Governance oft über das allgemeine Datenrecht statt über spezielle KI-Gesetze wirkt.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "uk-ki-regulierung",
    "dsgvo-schnittstelle"
   ]
  },
  {
   "id": "kanada-aida",
   "cat": "governance",
   "risk": null,
   "q": "Was ist AIDA in Kanada?",
   "term": "Kanada: AIDA",
   "short": "Kanadischer Gesetzesvorschlag für einen risikobasierten KI-Rahmen, dessen Weg sich als schwierig erwies.",
   "long": "Der Artificial Intelligence and Data Act (AIDA) war als Teil eines größeren Digitalgesetzes Kanadas geplant und verfolgte einen risikobasierten Ansatz mit besonderem Blick auf \"Systeme mit hoher Wirkung\" (high-impact systems). Das Vorhaben kam jedoch nicht wie ursprünglich vorgesehen zum Abschluss und musste den parlamentarischen Prozess erneut durchlaufen, sodass Kanada zwischenzeitlich auf einen freiwilligen Verhaltenskodex für generative KI setzte. AIDA illustriert die Schwierigkeiten, umfassende KI-Gesetzgebung zu verabschieden, und den weltweiten Trend, verbindliche Regeln mit freiwilligen Übergangsinstrumenten zu überbrücken. Beispiel für die Dynamik jenseits von EU, USA und China.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "suedkorea-ki-gesetz",
    "brasilien-ki-gesetz",
    "verhaltenskodex"
   ]
  },
  {
   "id": "suedkorea-ki-gesetz",
   "cat": "governance",
   "risk": null,
   "q": "Was regelt das KI-Grundgesetz Südkoreas?",
   "term": "Südkorea: KI-Grundgesetz",
   "short": "Umfassendes südkoreanisches KI-Rahmengesetz, eines der ersten seiner Art in Asien.",
   "long": "Südkorea verabschiedete ein umfassendes KI-Rahmengesetz (oft als \"AI Basic Act\" bezeichnet), das Innovation fördern und zugleich Grundregeln für vertrauenswürdige KI setzen soll. Es adressiert unter anderem Transparenz für KI-generierte Inhalte, besondere Sorgfalt bei wirkungsstarken (\"high-impact\") Systemen und den Aufbau staatlicher Förder- und Aufsichtsstrukturen. Damit gehört Südkorea zu den ersten Staaten Asiens mit einem eigenständigen, horizontalen KI-Gesetz und positioniert sich zwischen dem umfassenden EU-Ansatz und leichteren Modellen. Beispiel für die zunehmende Zahl nationaler Rahmengesetze weltweit.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "kanada-aida",
    "brasilien-ki-gesetz"
   ]
  },
  {
   "id": "brasilien-ki-gesetz",
   "cat": "governance",
   "risk": null,
   "q": "Wie steht es um die KI-Gesetzgebung in Brasilien?",
   "term": "Brasilien: KI-Gesetzgebung",
   "short": "Brasilianischer, an europäischen Vorbildern orientierter Gesetzgebungsprozess für einen risikobasierten KI-Rahmen.",
   "long": "Brasilien arbeitet an einem umfassenden, risikobasierten KI-Rechtsrahmen, der in Teilen dem europäischen Modell ähnelt: Risikoklassen, besondere Pflichten für hochriskante Anwendungen, Betroffenenrechte und eine Aufsichtsstruktur. Der Prozess durchlief mehrere Entwürfe und parlamentarische Stufen. Als größte Volkswirtschaft Lateinamerikas hat Brasilien Signalwirkung für die Region und den Globalen Süden und bringt sich zugleich aktiv in multilaterale Foren ein. Beispiel dafür, wie der \"Brüssel-Effekt\" – die Ausstrahlung des EU-Regelwerks – auch außerhalb Europas Gesetzgebung prägt, ohne sie eins zu eins zu kopieren.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "bruessel-effekt",
    "suedkorea-ki-gesetz",
    "kanada-aida"
   ]
  },
  {
   "id": "digital-omnibus",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Was ist der Digital Omnibus zur KI?",
   "term": "Digital Omnibus (KI)",
   "short": "EU-Gesetzespaket von 2025/2026, das den AI Act gezielt vereinfacht und wichtige Fristen verschiebt.",
   "long": "Der von der Kommission im November 2025 vorgeschlagene \"Digital Omnibus\" bündelt Vereinfachungen mehrerer Digitalgesetze. Für den AI Act brachte die politische Einigung von Mai 2026 vor allem eine Verschiebung der Hochrisiko-Pflichten: für eigenständige Anhang-III-Systeme auf den 2. Dezember 2027, für in Produkte eingebettete Anhang-I-Systeme auf den 2. August 2028. Zugleich wurde eine neue verbotene Praxis ergänzt (KI zur Erzeugung nicht einvernehmlicher intimer Bilddarstellungen und von Missbrauchsmaterial), die Kennzeichnungspflicht für Alt-Systeme angepasst und die Rolle des AI Office gestärkt. Die Grundarchitektur des AI Act – Risikoklassen, GPAI-Regeln, Transparenzpflichten – blieb unverändert. Wichtigste Aktualisierung des AI Act seit seinem Inkrafttreten.",
   "links": [
    {
     "label": "AI Act (EU)",
     "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
    }
   ],
   "related": [
    "europarat-ki-konvention",
    "hochrisiko-ki",
    "manipulative-praktiken",
    "fristen-anwendung",
    "verbotene-praktiken"
   ]
  },
  {
   "id": "bruessel-effekt",
   "cat": "governance",
   "risk": null,
   "q": "Was ist der Brüssel-Effekt?",
   "term": "Brüssel-Effekt",
   "short": "Die Tendenz, dass EU-Regeln faktisch zum weltweiten Standard werden, weil Unternehmen sie global einheitlich anwenden.",
   "long": "Der \"Brüssel-Effekt\" beschreibt, wie die EU über ihren großen Binnenmarkt regulatorische Standards setzt, die weit über Europa hinaus wirken: Unternehmen richten Produkte und Prozesse oft weltweit an den strengsten (EU-)Anforderungen aus, weil getrennte Standards teuer sind. Beim Datenschutz zeigte sich dies mit der DSGVO; beim AI Act wird ein ähnlicher Effekt erwartet, da viele Anbieter globaler KI-Systeme die EU-Vorgaben als Referenz übernehmen. Zugleich gibt es Gegenbewegungen (etwa Deregulierungsimpulse andernorts) und die Kritik, überstrenge Regeln könnten Innovation und Wettbewerbsfähigkeit bremsen. Zentraler Begriff, um die globale Ausstrahlung des EU-Ansatzes zu verstehen.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "brasilien-ki-gesetz",
    "extraterritorialitaet",
    "interoperabilitaet-regulierung",
    "europarat-ki-konvention"
   ]
  },
  {
   "id": "ki-souveraenitaet",
   "cat": "governance",
   "risk": null,
   "q": "Was bedeutet KI-Souveränität?",
   "term": "KI-Souveränität",
   "short": "Das Bestreben von Staaten, eigene Kontrolle über KI-Technologien, -Infrastruktur und -Daten zu behalten.",
   "long": "KI-Souveränität (oft im Rahmen \"digitaler Souveränität\") bezeichnet das Ziel, kritische Fähigkeiten – Rechenleistung, Modelle, Chips, Daten und Fachkräfte – nicht vollständig von anderen Staaten oder wenigen Konzernen abhängig zu machen. Motive: strategische Autonomie, Sicherheit, wirtschaftliche Teilhabe und die Durchsetzung eigener Werte und Sprachen. Ausprägungen reichen von europäischen Bestrebungen um eigene Modelle und Recheninfrastruktur bis zu Datenlokalisierung in anderen Ländern. Spannungsfeld zwischen Offenheit und Kontrolle sowie zwischen internationaler Zusammenarbeit und nationalem Wettbewerb. Zunehmend prägend für Industrie-, Förder- und Regulierungspolitik weltweit.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "compute-governance",
    "interoperabilitaet-regulierung",
    "open-source-ausnahme",
    "digitale-kluft"
   ]
  },
  {
   "id": "compute-governance",
   "cat": "governance",
   "risk": null,
   "q": "Was sind Compute-Governance und Exportkontrollen bei KI?",
   "term": "Compute-Governance und Exportkontrollen",
   "short": "Steuerung des Zugangs zu Hochleistungsrechenchips als Hebel der KI-Politik und internationalen Sicherheit.",
   "long": "Da das Training fortgeschrittener Modelle enorme Rechenleistung erfordert, rückt die Kontrolle über spezialisierte KI-Chips und Rechenzentren ins Zentrum strategischer Politik. \"Compute Governance\" umfasst Exportkontrollen für Hochleistungschips, Meldeschwellen anhand der für ein Training aufgewendeten Rechenleistung (ein Kriterium auch bei der Einstufung systemischer GPAI-Risiken im EU AI Act) und Überlegungen, den Zugang zu Rechenleistung als Steuerungspunkt zu nutzen. Exportbeschränkungen sind zugleich Instrument geopolitischer Rivalität. Ein technisch-wirtschaftlicher Hebel, der Regulierung, nationale Sicherheit und internationalen Handel miteinander verknüpft.",
   "links": [
    {
     "label": "Art. 51 AI Act",
     "url": "https://artificialintelligenceact.eu/article/51/"
    }
   ],
   "related": [
    "ki-souveraenitaet",
    "systemisches-risiko",
    "us-executive-orders-ki",
    "skalierungsgesetze"
   ]
  },
  {
   "id": "interoperabilitaet-regulierung",
   "cat": "governance",
   "risk": null,
   "q": "Was bedeuten regulatorische Interoperabilität und Divergenz bei KI?",
   "term": "Regulatorische Interoperabilität und Divergenz",
   "short": "Die Frage, wie gut unterschiedliche nationale KI-Regelwerke zusammenpassen – und was ihre Unterschiede für Unternehmen bedeuten.",
   "long": "Weltweit entstehen KI-Regeln mit unterschiedlicher Philosophie: umfassend-horizontal (EU), sektoral-innovationsoffen (UK), einzelvorschriftlich-kontrollorientiert (China), föderal-fragmentiert (USA). Regulatorische Interoperabilität meint das Bemühen, diese Ansätze über gemeinsame Definitionen, Standards und Prinzipien (etwa via OECD, G7, ISO) anschlussfähig zu halten. Fehlende Abstimmung führt zu Divergenz: Unternehmen müssen mehrere, teils widersprüchliche Regime zugleich erfüllen, was Kosten und Rechtsunsicherheit erhöht. Ein zentrales Zukunftsthema – zwischen dem Wunsch nach globaler Harmonisierung und dem Beharren auf nationaler Eigenständigkeit und Wettbewerb.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "bruessel-effekt",
    "oecd-ki-prinzipien",
    "ki-souveraenitaet"
   ]
  },
  {
   "id": "deutschland-ki-aufsicht",
   "cat": "governance",
   "risk": null,
   "q": "Wie ist die KI-Aufsicht in Deutschland organisiert?",
   "term": "KI-Aufsicht in Deutschland (KI-MIG)",
   "short": "Deutschlands Durchführungsgesetz zum AI Act, das die nationalen Zuständigkeiten, Bußgelder und Innovationsförderung regelt.",
   "long": "Das KI-Marktüberwachungs- und Innovationsförderungsgesetz (KI-MIG) ist das nationale Durchführungsgesetz zum EU AI Act. Es schafft keine neuen materiellen Pflichten – diese ergeben sich unmittelbar aus der Verordnung –, sondern ordnet die Aufsicht: zuständige Behörden, Bußgeldverfahren und die Einrichtung von Reallaboren. Der Regierungsentwurf wurde Anfang 2026 vom Kabinett beschlossen und durchlief das parlamentarische Verfahren; eine Verabschiedung vor dem Stichtag 2.8.2026 wurde angestrebt. Deutschland setzt auf einen hybriden Ansatz: eine zentrale Koordinierung bei der Bundesnetzagentur, ergänzt durch fortbestehende sektorale Fachaufsichten. Wichtig für die betriebliche Praxis, weil es die deutschen Ansprechpartner und Verfahrenswege festlegt.",
   "links": [
    {
     "label": "BMDS",
     "url": "https://bmds.bund.de/service/gesetzgebungsverfahren/gesetz-zur-durchfuehrung-der-ki-verordnung"
    }
   ],
   "related": [
    "bundesnetzagentur-ki",
    "kokivo",
    "marktueberwachung",
    "notifizierende-behoerde",
    "landesmedienanstalten-ki"
   ]
  },
  {
   "id": "bundesnetzagentur-ki",
   "cat": "governance",
   "risk": null,
   "q": "Welche Rolle hat die Bundesnetzagentur bei der KI-Aufsicht?",
   "term": "Bundesnetzagentur (als KI-Aufsicht)",
   "short": "In Deutschland vorgesehene zentrale Marktüberwachungs- und Koordinierungsbehörde für den AI Act.",
   "long": "Nach dem Durchführungsgesetz (KI-MIG) soll die Bundesnetzagentur (BNetzA) die zentrale Marktüberwachungsbehörde für die KI-Verordnung werden – zuständig überall dort, wo keine spezialgesetzliche Fachaufsicht greift. Sie übernimmt zudem die Rolle der notifizierenden Behörde und der zentralen Anlauf- und Beschwerdestelle. Für regulierte Bereiche bleiben bestehende Behörden zuständig (etwa die BaFin im Finanzsektor). Die BNetzA bringt Erfahrung aus der Regulierung von Netzen und Digitalmärkten mit. Kritisiert wurde die zunächst knappe Personalausstattung angesichts der breiten Aufgabe. Zentraler Baustein der deutschen KI-Aufsichtsarchitektur.",
   "links": [
    {
     "label": "Bundesnetzagentur",
     "url": "https://www.bundesnetzagentur.de/"
    }
   ],
   "related": [
    "deutschland-ki-aufsicht",
    "kokivo",
    "bafin-ki",
    "nationale-kontaktstelle"
   ]
  },
  {
   "id": "kokivo",
   "cat": "governance",
   "risk": null,
   "q": "Was ist KoKIVO?",
   "term": "KoKIVO",
   "short": "Bei der Bundesnetzagentur angesiedeltes Koordinierungs- und Kompetenzzentrum für die KI-Verordnung.",
   "long": "Das Koordinierungs- und Kompetenzzentrum für die KI-Verordnung (KoKIVO) wird durch das Durchführungsgesetz bei der Bundesnetzagentur eingerichtet. Seine Aufgaben: die Zusammenarbeit aller in Deutschland zuständigen KI-Behörden koordinieren, eine einheitliche Rechtsauslegung bei übergreifenden Fragen sicherstellen und über einen \"KI-Service-Desk\" als erste Anlaufstelle für Unternehmen dienen. Das KoKIVO bündelt KI-Expertise zentral und stellt sie den übrigen Behörden ressourcenschonend zur Verfügung. Es ist das Herzstück des deutschen \"hybriden\" Modells, das zentrale Koordination mit dezentraler Fachaufsicht verbindet, und Ansprechpartner gegenüber den EU-Institutionen.",
   "links": [
    {
     "label": "Bundesnetzagentur",
     "url": "https://www.bundesnetzagentur.de/"
    }
   ],
   "related": [
    "bundesnetzagentur-ki",
    "deutschland-ki-aufsicht",
    "nationale-kontaktstelle"
   ]
  },
  {
   "id": "bafin-ki",
   "cat": "governance",
   "risk": null,
   "q": "Welche Rolle spielt die BaFin bei KI im Finanzsektor?",
   "term": "BaFin (KI im Finanzsektor)",
   "short": "Zuständige deutsche Fachaufsicht für KI-Systeme im Finanzdienstleistungsbereich.",
   "long": "Die Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin) bleibt im deutschen \"hybriden\" Aufsichtsmodell für KI in Banken, Versicherungen und Finanzdienstleistungen zuständig – die Marktüberwachung wandert also nicht zur Bundesnetzagentur, sondern verbleibt bei der etablierten Sektoraufsicht. Das betrifft etwa Kreditwürdigkeitsprüfung, algorithmischen Handel, Betrugserkennung und – als Hochrisiko – Risikobewertung und Preisbildung in Lebens- und Krankenversicherung. Vorteil: Unternehmen behalten ihre bekannten Ansprechpartner, und vorhandene Finanzmarkt-Expertise wird genutzt. Die BaFin stimmt sich mit dem KoKIVO ab. Beispiel dafür, wie der AI Act in bestehende Fachaufsichtsstrukturen eingebettet wird.",
   "links": [
    {
     "label": "BaFin",
     "url": "https://www.bafin.de/"
    }
   ],
   "related": [
    "bundesnetzagentur-ki",
    "dora",
    "kreditrisikomodell"
   ]
  },
  {
   "id": "landesmedienanstalten-ki",
   "cat": "governance",
   "risk": null,
   "q": "Welche Rolle spielen die Landesmedienanstalten bei KI in Medien?",
   "term": "Landesmedienanstalten (KI in Medien)",
   "short": "Für KI-Anwendungen in Presse und Rundfunk zuständige deutsche Aufsicht – getrennt von der Bundesnetzagentur.",
   "long": "Die Aufsicht über KI im Presse- und Rundfunkbereich – etwa die Kennzeichnung von Deepfakes und KI-generierten Nachrichtentexten – liegt in Deutschland nicht bei der Bundesnetzagentur, sondern bei den Landesmedienanstalten. Grund ist der verfassungsrechtliche Grundsatz der Staatsferne der Medien: Medienaufsicht soll unabhängig von der unmittelbaren Bundesverwaltung erfolgen. So unterliegen KI in Nachrichtenredaktionen, automatisierte Inhaltemoderation und synthetische Medienerkennung der bewährten, föderal organisierten Medienaufsicht. Eine deutsche Besonderheit, die zeigt, wie die föderale Kompetenzordnung die Umsetzung des AI Act prägt und die Meinungs- und Medienfreiheit schützt.",
   "links": [
    {
     "label": "die medienanstalten",
     "url": "https://www.die-medienanstalten.de/"
    }
   ],
   "related": [
    "deutschland-ki-aufsicht",
    "arcom-ki",
    "kommaustria-ki",
    "deepfake"
   ]
  },
  {
   "id": "oesterreich-ki-aufsicht",
   "cat": "governance",
   "risk": null,
   "q": "Wie ist die KI-Aufsicht in Österreich organisiert?",
   "term": "KI-Aufsicht in Österreich",
   "short": "Österreichs im Aufbau befindliche Aufsichtsstruktur für den AI Act, koordiniert vom Bundeskanzleramt.",
   "long": "Österreich benötigt als EU-Mitglied keine Umsetzung der unmittelbar geltenden KI-Verordnung, muss aber zuständige Behörden benennen. Die nationale Umsetzung koordiniert das Bundeskanzleramt (BKA). Eine zentrale KI-Servicestelle wurde bereits 2024 bei der Regulierungsbehörde RTR eingerichtet (Beratung und Information), die aber nicht zwangsläufig die vollziehende Aufsicht ist. Als Marktüberwachungsbehörden gelten die Datenschutzbehörde (für grundrechtssensible Anhang-III-Bereiche wie Personalauswahl, Bildung, Bonität) sowie sektorale Aufsichten (etwa die Finanzmarktaufsicht FMA) und die Medien-/Kommunikationsbehörde als wahrscheinlich. Stand Mitte 2026 war die vollständige Designation noch nicht abgeschlossen.",
   "links": [
    {
     "label": "Digital Austria",
     "url": "https://www.digitalaustria.gv.at/themen/kuenstliche-intelligenz/ai-act.html"
    }
   ],
   "related": [
    "rtr-ki-servicestelle",
    "dsb-oesterreich",
    "kommaustria-ki"
   ]
  },
  {
   "id": "rtr-ki-servicestelle",
   "cat": "governance",
   "risk": null,
   "q": "Was ist die KI-Servicestelle der RTR in Österreich?",
   "term": "KI-Servicestelle (RTR, Österreich)",
   "short": "Zentrale österreichische Informations- und Beratungsstelle zum AI Act, angesiedelt bei der RTR.",
   "long": "Die 2024 bei der Rundfunk und Telekom Regulierungs-GmbH (RTR) eingerichtete KI-Servicestelle ist die zentrale Anlauf-, Informations- und Beratungsstelle rund um den AI Act in Österreich. Sie bündelt Übersichten zu Akteuren, Pflichten, Risikostufen und Sanktionen, veröffentlicht Praxisleitfäden und betreibt sogar einen quelloffenen \"AI Act Chatbot\" als niedrigschwelliges Auskunftswerkzeug. Sie leistet Aufklärung und Orientierung, ist aber nicht zwingend die vollziehende Marktüberwachungsbehörde. Ein Beispiel für einen serviceorientierten, informierenden Zugang zur KI-Governance, der Unternehmen und Öffentlichkeit den Einstieg in die komplexe Materie erleichtert.",
   "links": [
    {
     "label": "KI-Servicestelle RTR",
     "url": "https://www.rtr.at/rtr/service/ki-servicestelle/ki-servicestelle.de.html"
    }
   ],
   "related": [
    "oesterreich-ki-aufsicht",
    "dsb-oesterreich",
    "ki-kompetenz"
   ]
  },
  {
   "id": "dsb-oesterreich",
   "cat": "governance",
   "risk": null,
   "q": "Welche Rolle hat die österreichische Datenschutzbehörde bei KI?",
   "term": "Datenschutzbehörde (Österreich, KI)",
   "short": "Wahrscheinliche österreichische Marktüberwachungsbehörde für grundrechtssensible Hochrisiko-KI.",
   "long": "Die österreichische Datenschutzbehörde (DSB) gilt als wahrscheinlichste zuständige Marktüberwachungsbehörde für jene Anhang-III-Hochrisikobereiche, in denen der Personenbezug dominiert – etwa KI in der Personalauswahl, im Bildungswesen oder bei der Bonitätsbewertung. Grund ist ihre bestehende operative Praxis an der Schnittstelle von DSGVO und KI. Damit spiegelt Österreich einen Ansatz wider, den auch Frankreich verfolgt: Datenschutzbehörden übernehmen einen Großteil der KI-Aufsicht, um Kohärenz zwischen Datenschutz- und KI-Recht zu sichern. Die formale Benennung stand Mitte 2026 noch aus; Unternehmen wurde empfohlen, frühzeitig Kontakt zu DSB und KI-Servicestelle aufzunehmen.",
   "links": [
    {
     "label": "Datenschutzbehörde",
     "url": "https://www.dsb.gv.at/"
    }
   ],
   "related": [
    "oesterreich-ki-aufsicht",
    "cnil-ki",
    "dsgvo-schnittstelle",
    "rtr-ki-servicestelle"
   ]
  },
  {
   "id": "kommaustria-ki",
   "cat": "governance",
   "risk": null,
   "q": "Welche Rolle hat die KommAustria bei KI in Medien?",
   "term": "KommAustria (KI in Medien)",
   "short": "Voraussichtlich zuständige österreichische Behörde für KI in Medien, Plattformen und Kommunikation.",
   "long": "Die Kommunikationsbehörde Austria (KommAustria) gilt als wahrscheinlich zuständig für KI-Systeme im Medien-, Plattform- und Telekommunikationsbereich. Sie ist bereits mit Medienaufsicht befasst und hat aus der Umsetzung des Digital Services Act Erfahrung mit der Aufsicht über Algorithmen gesammelt. Damit ergänzt sie in Österreich die Datenschutzbehörde und die sektoralen Aufsichten in einem \"aufgeteilten\" Modell, das die Zuständigkeit nach Anwendungsfeld verteilt. Ähnlich wie in Deutschland (Landesmedienanstalten) und Frankreich (ARCOM) zeigt sich hier, dass Medien-KI aus Gründen der Staats- und Meinungsfreiheit oft einer eigenen, medienspezifischen Aufsicht unterliegt.",
   "links": [
    {
     "label": "KommAustria / RTR",
     "url": "https://www.rtr.at/"
    }
   ],
   "related": [
    "oesterreich-ki-aufsicht",
    "landesmedienanstalten-ki",
    "arcom-ki"
   ]
  },
  {
   "id": "frankreich-ki-aufsicht",
   "cat": "governance",
   "risk": null,
   "q": "Wie ist die KI-Aufsicht in Frankreich organisiert?",
   "term": "KI-Aufsicht in Frankreich",
   "short": "Dezentrales französisches Modell, das die Marktüberwachung nach Anwendungsfeld auf mehrere Behörden verteilt.",
   "long": "Frankreich hat sich für eine dezentrale \"Governance nach Typ\" entschieden: Statt einer einzigen Superbehörde teilen zahlreiche sektorale Regulierer die Marktüberwachung nach Anwendungsfeldern auf – rund siebzehn Behörden waren im Gespräch. Drei tragen die Hauptlast: die Datenschutzbehörde CNIL (grundrechtssensible Hochrisiko-KI und verbotene Praktiken), die DGCCRF (Verbraucherschutz, Transparenz, Anhang-I-Koordination) und die Medienbehörde ARCOM. Die strategische Koordinierung liegt beim Wirtschaftsministerium (DGE) als einzige Kontaktstelle. Die formale Designation verzögerte sich (Streichung aus einem Anpassungsgesetz Ende 2025), faktisch übernimmt die CNIL aber eine Führungsrolle. Kontrast zum stärker zentralisierten deutschen Modell.",
   "links": [
    {
     "label": "DGE",
     "url": "https://www.entreprises.gouv.fr/"
    }
   ],
   "related": [
    "cnil-ki",
    "arcom-ki",
    "dgccrf-ki"
   ]
  },
  {
   "id": "cnil-ki",
   "cat": "governance",
   "risk": null,
   "q": "Welche Rolle hat die CNIL bei der KI-Aufsicht in Frankreich?",
   "term": "CNIL (KI-Aufsicht Frankreich)",
   "short": "Französische Datenschutzbehörde mit zentraler Rolle bei der KI-Aufsicht, besonders für grundrechtssensible Systeme.",
   "long": "Die Commission Nationale de l'Informatique et des Libertés (CNIL) ist die französische Datenschutzbehörde und übernimmt eine zentrale Rolle bei der Durchsetzung des AI Act. Sie ist zuständig für mehrere verbotene Praktiken (Art. 5, etwa Social Scoring, ungezieltes Gesichts-Scraping, biometrische Kategorisierung) und für einen Großteil der Anhang-III-Hochrisikobereiche: Biometrie, Beschäftigung, Bildung, Strafverfolgung, Migration, Justiz. Frankreich bündelt damit Datenschutz- und KI-Aufsicht unter einem Dach, um Kohärenz zwischen DSGVO und KI-Recht zu sichern. Die CNIL bringt weitreichende Untersuchungs- und Sanktionsbefugnisse aus der DSGVO-Praxis mit. Vorbild für den datenschutzzentrierten Aufsichtsansatz mehrerer EU-Staaten.",
   "links": [
    {
     "label": "CNIL",
     "url": "https://www.cnil.fr/"
    }
   ],
   "related": [
    "frankreich-ki-aufsicht",
    "dsb-oesterreich",
    "verbotene-praktiken",
    "dsgvo-schnittstelle",
    "dgccrf-ki"
   ]
  },
  {
   "id": "arcom-ki",
   "cat": "governance",
   "risk": null,
   "q": "Welche Rolle hat ARCOM bei KI in Medien in Frankreich?",
   "term": "ARCOM (KI in Medien, Frankreich)",
   "short": "Französische Medien- und Digitalaufsicht, zuständig für KI in audiovisuellen Inhalten und demokratischen Prozessen.",
   "long": "Die Autorité de Régulation de la Communication Audiovisuelle et Numérique (ARCOM) ist die französische Regulierungsbehörde für audiovisuelle und digitale Kommunikation. Im Rahmen des AI Act ist sie – oft gemeinsam mit der DGCCRF – für Transparenzpflichten bei direkt mit Menschen interagierenden Systemen und bei generierten Audio-, Bild-, Video- und Textinhalten zuständig sowie, mit der CNIL, für KI in demokratischen Prozessen (Anhang III). Wie die deutschen Landesmedienanstalten und die österreichische KommAustria verkörpert die ARCOM die medienspezifische Säule der KI-Aufsicht, die Meinungsvielfalt und Informationsintegrität schützt. Sie bringt Erfahrung aus der Plattform- und Inhalteregulierung mit.",
   "links": [
    {
     "label": "ARCOM",
     "url": "https://www.arcom.fr/"
    }
   ],
   "related": [
    "frankreich-ki-aufsicht",
    "landesmedienanstalten-ki",
    "kommaustria-ki",
    "wasserzeichen"
   ]
  },
  {
   "id": "dgccrf-ki",
   "cat": "governance",
   "risk": null,
   "q": "Welche Rolle hat die DGCCRF bei KI in Frankreich?",
   "term": "DGCCRF (KI, Frankreich)",
   "short": "Französische Wettbewerbs- und Verbraucherschutzbehörde mit breiter KI-Marktüberwachungszuständigkeit.",
   "long": "Die Direction Générale de la Concurrence, de la Consommation et de la Répression des Fraudes (DGCCRF) ist Frankreichs Behörde für Wettbewerb, Verbraucherschutz und Betrugsbekämpfung. Im AI Act deckt sie zahlreiche Anwendungsfälle ab: bestimmte verbotene Praktiken (mit der CNIL), Transparenzpflichten nach Art. 50 (mit der ARCOM) und die Koordinierung der Marktüberwachung für in Produkte eingebettete Anhang-I-KI, indem sie bestehende Produktsicherheits-Zuständigkeiten bündelt. Sie teilt viele Fälle mit weiteren Behörden. Als klassische Marktüberwachungs- und Verbraucherschutzinstanz überträgt sie ihr Instrumentarium – Kontrollen, Rückrufe, Sanktionen – auf KI-Produkte und -Dienste.",
   "links": [
    {
     "label": "DGCCRF",
     "url": "https://www.economie.gouv.fr/dgccrf"
    }
   ],
   "related": [
    "frankreich-ki-aufsicht",
    "cnil-ki",
    "marktueberwachung"
   ]
  },
  {
   "id": "europaeischer-ki-ausschuss",
   "cat": "governance",
   "risk": null,
   "q": "Was ist der Europäische Ausschuss für KI (AI Board)?",
   "term": "Europäischer Ausschuss für KI (AI Board)",
   "short": "Gremium der Mitgliedstaaten, das die einheitliche Anwendung des AI Act koordiniert und die Kommission berät.",
   "long": "Der Europäische Ausschuss für Künstliche Intelligenz (AI Board) setzt sich aus Vertretern der Mitgliedstaaten zusammen und wird vom AI Office unterstützt. Seine Aufgaben: die kohärente und einheitliche Anwendung des AI Act in der gesamten EU fördern, Empfehlungen und Stellungnahmen abgeben, den Erfahrungsaustausch zwischen den nationalen Behörden koordinieren und die Kommission beraten. Er ist Teil der mehrstufigen Governance des AI Act, die EU-Ebene (Kommission, AI Office, wissenschaftliches Gremium, Beratungsforum) und nationale Ebene verbindet. Vergleichbar mit dem Europäischen Datenschutzausschuss unter der DSGVO. Wichtig, um eine Fragmentierung der Aufsicht zwischen den Mitgliedstaaten zu vermeiden.",
   "links": [
    {
     "label": "AI Act (EU)",
     "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
    }
   ],
   "related": [
    "ai-office",
    "wissenschaftliches-gremium",
    "nationale-kontaktstelle"
   ]
  },
  {
   "id": "wissenschaftliches-gremium",
   "cat": "governance",
   "risk": null,
   "q": "Was ist das wissenschaftliche Gremium (Scientific Panel)?",
   "term": "Wissenschaftliches Gremium (Scientific Panel)",
   "short": "Panel unabhängiger Fachleute, das die Durchsetzung des AI Act mit technischer Expertise unterstützt – besonders bei GPAI.",
   "long": "Das wissenschaftliche Gremium unabhängiger Sachverständiger unterstützt vor allem das AI Office bei der Aufsicht über KI-Modelle mit allgemeinem Verwendungszweck (GPAI). Aufgaben: die Bewertung von Fähigkeiten und systemischen Risiken großer Modelle, Warnungen vor möglichen systemischen Gefahren, methodische Beiträge und die Unterstützung der Marktüberwachung. Die Mitglieder werden nach fachlicher Exzellenz und Unabhängigkeit ausgewählt. Das Gremium bringt aktuelle wissenschaftliche Erkenntnisse in die Regulierung ein und hilft, mit der schnellen technischen Entwicklung Schritt zu halten. Bindeglied zwischen KI-Forschung und Aufsichtspraxis, verwandt mit der Rolle staatlicher KI-Sicherheitsinstitute.",
   "links": [
    {
     "label": "AI Act (EU)",
     "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
    }
   ],
   "related": [
    "ai-office",
    "europaeischer-ki-ausschuss",
    "systemisches-risiko",
    "netzwerk-safety-institutes"
   ]
  },
  {
   "id": "grundrechtebehoerden",
   "cat": "governance",
   "risk": null,
   "q": "Welche Befugnisse haben Grundrechtebehörden nach Art. 77?",
   "term": "Grundrechtebehörden (Art. 77)",
   "short": "Nationale Stellen zum Schutz der Grundrechte, die für Hochrisiko-KI besondere Auskunfts- und Einsichtsrechte erhalten.",
   "long": "Nach Art. 77 AI Act benennen die Mitgliedstaaten jene nationalen Behörden oder Stellen, die den Schutz der Grundrechte überwachen (etwa Gleichbehandlungs-, Datenschutz- oder Antidiskriminierungsstellen). Sie erhalten das Recht, von Anbietern und Betreibern von Hochrisiko-KI Unterlagen anzufordern und Zugang zu erhalten, wenn dies zur Wahrnehmung ihres Mandats erforderlich ist. Ziel ist es, die grundrechtliche Dimension der KI-Aufsicht institutionell zu verankern und bestehende Grundrechtsakteure einzubinden. Die Mitgliedstaaten mussten diese Stellen benennen und veröffentlichen. Ergänzt die Marktüberwachung um eine ausdrücklich grundrechtsorientierte Kontrollebene.",
   "links": [
    {
     "label": "Art. 77 AI Act",
     "url": "https://artificialintelligenceact.eu/article/77/"
    }
   ],
   "related": [
    "fria",
    "marktueberwachung",
    "diskriminierung-ki"
   ]
  },
  {
   "id": "nationale-kontaktstelle",
   "cat": "governance",
   "risk": null,
   "q": "Was ist die einzige nationale Kontaktstelle im AI Act?",
   "term": "Einzige nationale Kontaktstelle",
   "short": "Pro Mitgliedstaat benannte zentrale Anlaufstelle, die die Kommunikation zwischen nationalen Behörden und EU-Ebene bündelt.",
   "long": "Benennt ein Mitgliedstaat – wie Deutschland, Österreich oder Frankreich – mehrere zuständige Behörden, muss eine von ihnen die Rolle der einzigen nationalen Kontaktstelle (single point of contact) übernehmen. Sie bündelt den Austausch mit der Europäischen Kommission, dem AI Office und den Behörden anderer Mitgliedstaaten und dient auch der Öffentlichkeit als klarer Ansprechpunkt. So bleibt trotz verteilter Zuständigkeiten die grenzüberschreitende Zusammenarbeit handhabbar und kohärent. In Deutschland ist dies faktisch bei der Bundesnetzagentur/dem KoKIVO angesiedelt, in Frankreich beim Wirtschaftsministerium. Praktisch wichtig, um Unternehmen und Behörden Orientierung im mehrstufigen Governance-System zu geben.",
   "links": [
    {
     "label": "AI Act (EU)",
     "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
    }
   ],
   "related": [
    "europaeischer-ki-ausschuss",
    "bundesnetzagentur-ki",
    "marktueberwachung",
    "kokivo"
   ]
  },
  {
   "id": "konformitaetsbewertungsverfahren",
   "cat": "ai-act-core",
   "risk": null,
   "q": "Welche Konformitätsbewertungsverfahren gibt es für Hochrisiko-KI?",
   "term": "Konformitätsbewertungsverfahren",
   "short": "Verfahren, mit dem vor dem Inverkehrbringen geprüft wird, ob ein Hochrisiko-KI-System die Anforderungen des AI Act erfüllt.",
   "long": "Bevor ein Hochrisiko-KI-System auf den Markt kommt, muss ein Konformitätsbewertungsverfahren durchlaufen werden (Art. 43). Je nach Systemtyp geschieht dies über eine interne Kontrolle durch den Anbieter selbst (Anhang VI) oder unter Beteiligung einer unabhängigen benannten Stelle (Anhang VII) – Letzteres vor allem bei bestimmten biometrischen Systemen. Geprüft wird, ob Risikomanagement, Daten-Governance, technische Dokumentation, Transparenz, menschliche Aufsicht sowie Genauigkeit und Robustheit den Vorgaben entsprechen. Erfolgreich abgeschlossen, mündet es in die EU-Konformitätserklärung und die CE-Kennzeichnung. Bei wesentlichen Änderungen ist es zu wiederholen. Kernmechanismus der Hochrisiko-Regulierung.",
   "links": [
    {
     "label": "Art. 43 AI Act",
     "url": "https://artificialintelligenceact.eu/article/43/"
    }
   ],
   "related": [
    "ce-kennzeichnung",
    "eu-konformitaetserklaerung",
    "notifizierte-stelle",
    "hochrisiko-ki",
    "ki-lebenszyklus"
   ]
  },
  {
   "id": "turing-test",
   "cat": "ml",
   "risk": null,
   "q": "Was ist der Turing-Test?",
   "term": "Turing-Test",
   "short": "1950 von Alan Turing vorgeschlagener Test, ob eine Maschine im Gespräch von einem Menschen ununterscheidbar antworten kann.",
   "long": "Alan Turing schlug 1950 das \"Imitationsspiel\" vor: Kann ein menschlicher Prüfer im textbasierten Dialog nicht zuverlässig unterscheiden, ob er mit einer Maschine oder einem Menschen spricht, gilt die Maschine als \"intelligent\". Der Test verschob die Frage \"Kann eine Maschine denken?\" auf beobachtbares Verhalten. Moderne Sprachmodelle bestehen viele Varianten des Tests mühelos, was seine Grenzen offenlegt: Sprachliche Überzeugungskraft ist nicht dasselbe wie Verstehen, Bewusstsein oder Zuverlässigkeit. Historisch prägend und bis heute ein kultureller Bezugspunkt, aber als Maß echter Intelligenz überholt. Wichtig, um die Begriffsgeschichte der KI einzuordnen.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "agi",
    "symbolische-ki",
    "ki",
    "ki-bewusstsein"
   ]
  },
  {
   "id": "agi",
   "cat": "ml",
   "risk": null,
   "q": "Was ist künstliche allgemeine Intelligenz (AGI)?",
   "term": "Künstliche allgemeine Intelligenz (AGI)",
   "short": "Hypothetische KI, die menschenähnlich vielseitig denkt und beliebige geistige Aufgaben mindestens so gut wie Menschen bewältigt.",
   "long": "AGI (Artificial General Intelligence) bezeichnet eine bislang hypothetische KI, die – anders als heutige spezialisierte (\"schwache\") Systeme – flexibel über viele Domänen hinweg lernt und Probleme löst, vergleichbar mit menschlicher Allgemeinintelligenz. Ob, wann und wie AGI erreichbar ist, ist wissenschaftlich hoch umstritten; Definitionen und Messkriterien sind uneinheitlich. Die Debatte reicht von naher Erwartung bis zu grundsätzlicher Skepsis. AGI ist zentral für Diskussionen über langfristige Chancen und Risiken, über Sicherheit und Kontrolle sowie über die gesellschaftlichen Folgen sehr leistungsfähiger Systeme. Abzugrenzen von der \"schwachen\" KI, die nur eng umgrenzte Aufgaben beherrscht.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "turing-test",
    "superintelligenz",
    "emergente-faehigkeiten",
    "ki",
    "ki-winter"
   ]
  },
  {
   "id": "symbolische-ki",
   "cat": "ml",
   "risk": null,
   "q": "Was ist symbolische KI (GOFAI)?",
   "term": "Symbolische KI (GOFAI)",
   "short": "Klassischer KI-Ansatz, der Intelligenz durch explizite Regeln, Logik und Symbolmanipulation nachzubilden versucht.",
   "long": "Die symbolische KI – rückblickend oft \"GOFAI\" (Good Old-Fashioned AI) genannt – prägte die KI von den 1950ern bis in die 1980er. Sie modelliert Wissen explizit in Symbolen, Regeln und logischen Schlüssen; der Mensch programmiert das Wissen weitgehend von Hand. Stärken: Nachvollziehbarkeit, exaktes logisches Schließen. Schwächen: schlechte Skalierung, Sprödigkeit bei Unschärfe und Ausnahmen. Ihr Gegenpol ist die datengetriebene, subsymbolische KI (neuronale Netze), die heute dominiert. Aktuelle Forschung verbindet beide Ansätze (\"neuro-symbolische KI\"), um Lernfähigkeit mit Logik und Erklärbarkeit zu vereinen. Wichtig für das Verständnis der Ideengeschichte der KI.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "expertensysteme",
    "turing-test",
    "ki-winter"
   ]
  },
  {
   "id": "expertensysteme",
   "cat": "ml",
   "risk": null,
   "q": "Was sind Expertensysteme?",
   "term": "Expertensysteme",
   "short": "Regelbasierte Programme, die das Fachwissen menschlicher Experten in einem eng umgrenzten Gebiet nachbilden.",
   "long": "Expertensysteme waren in den 1970er und 1980er Jahren der kommerziell erfolgreichste Zweig der symbolischen KI. Sie bestehen aus einer Wissensbasis (von Fachleuten formulierte \"Wenn-Dann\"-Regeln) und einer Inferenzmaschine, die daraus Schlussfolgerungen zieht – etwa zur medizinischen Diagnose oder technischen Fehlersuche. Vorteil: nachvollziehbare, begründbare Entscheidungen. Nachteil: hoher Aufwand für die Wissenserfassung (\"Wissensakquise-Engpass\") und schlechte Anpassung an neue Fälle. Ihr Niedergang trug zu einem \"KI-Winter\" bei. Konzeptionell leben Ideen der Expertensysteme in heutigen regelbasierten Systemen, Guardrails und neuro-symbolischen Ansätzen weiter.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "symbolische-ki",
    "ki-winter",
    "ki"
   ]
  },
  {
   "id": "ki-winter",
   "cat": "ml",
   "risk": null,
   "q": "Was ist ein „KI-Winter“?",
   "term": "KI-Winter",
   "short": "Historische Phasen, in denen überzogene Erwartungen an KI enttäuscht wurden und Förderung wie Interesse einbrachen.",
   "long": "Als \"KI-Winter\" werden Perioden bezeichnet, in denen auf übertriebenen Optimismus (\"KI-Sommer\") Ernüchterung folgte: Versprechen wurden nicht eingelöst, Fördergelder und Investitionen versiegten, das Feld stagnierte. Bekannte Einbrüche gab es in den 1970er und späten 1980er Jahren, unter anderem nach den Grenzen früher neuronaler Netze und dem Niedergang der Expertensysteme. Die Lehre: KI-Entwicklung verläuft in Zyklen aus Hype und Korrektur. Der Begriff mahnt zur nüchternen Einordnung aktueller Erwartungen an generative KI und AGI – zwischen realem Fortschritt und überzogenen Heilsversprechen. Wichtig für ein historisch informiertes, ausgewogenes Urteil.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "symbolische-ki",
    "expertensysteme",
    "agi"
   ]
  },
  {
   "id": "skalierungsgesetze",
   "cat": "dl",
   "risk": null,
   "q": "Was sind Skalierungsgesetze (Scaling Laws)?",
   "term": "Skalierungsgesetze (Scaling Laws)",
   "short": "Empirische Beobachtung, dass die Leistung von Modellen mit mehr Daten, Parametern und Rechenleistung vorhersagbar steigt.",
   "long": "Skalierungsgesetze beschreiben, dass die Leistung großer Modelle sich erstaunlich regelmäßig verbessert, wenn man Modellgröße (Parameter), Datenmenge und Rechenaufwand gemeinsam erhöht – oft nach glatten mathematischen Beziehungen. Diese Erkenntnis trieb den Trend zu immer größeren Modellen an und machte Investitionen planbarer. Grenzen und offene Fragen: Skalierung ist teuer und ressourcenintensiv, stößt an Daten- und Energiegrenzen, und ob sie zu qualitativ neuen Fähigkeiten (bis hin zu AGI) führt, ist umstritten. Verwandt mit emergenten Fähigkeiten und der Debatte um Compute-Governance. Zentral, um die jüngste Dynamik der KI-Entwicklung zu verstehen.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "emergente-faehigkeiten",
    "parameter",
    "compute-governance",
    "pretraining"
   ]
  },
  {
   "id": "emergente-faehigkeiten",
   "cat": "dl",
   "risk": null,
   "q": "Was sind emergente Fähigkeiten von KI-Modellen?",
   "term": "Emergente Fähigkeiten",
   "short": "Fähigkeiten, die bei großen Modellen scheinbar sprunghaft auftauchen und in kleineren Modellen nicht vorhanden waren.",
   "long": "Als emergent gelten Fähigkeiten großer Sprachmodelle, die erst ab einer bestimmten Größe oder Trainingsmenge auftreten und aus kleineren Modellen nicht erkennbar waren – etwa mehrschrittiges Schließen oder das Befolgen komplexer Anweisungen. Sie befeuerten die Erwartung, dass weiteres Skalieren neue Fähigkeiten \"freischaltet\". Die Deutung ist jedoch umstritten: Manche Forschende argumentieren, die scheinbaren Sprünge seien teils ein Artefakt der gewählten Messgrößen und in Wahrheit gradueller. Wichtiges, aber vorsichtig zu interpretierendes Konzept an der Schnittstelle von Empirie und Hype. Verwandt mit Skalierungsgesetzen und der Debatte über die Grenzen aktueller KI.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "skalierungsgesetze",
    "agi",
    "reasoning-modell",
    "weltmodell",
    "stochastischer-papagei"
   ]
  },
  {
   "id": "technologische-singularitaet",
   "cat": "ethics",
   "risk": null,
   "q": "Was ist die technologische Singularität?",
   "term": "Technologische Singularität",
   "short": "Hypothetischer Zukunftspunkt, an dem sich KI so schnell selbst verbessert, dass die Entwicklung für Menschen unüberschaubar wird.",
   "long": "Die Idee der technologischen Singularität besagt, dass eine hinreichend fortgeschrittene KI sich selbst verbessern könnte, was zu einer sich beschleunigenden \"Intelligenzexplosion\" mit unvorhersehbaren Folgen führe. Populär gemacht wurde sie unter anderem von Autoren wie Vernor Vinge und Ray Kurzweil. Die These ist hochspekulativ und in der Fachwelt umstritten: Kritiker verweisen auf physikalische, ökonomische und methodische Grenzen und warnen vor unbegründetem Futurismus. Der Begriff dient als Rahmen für Debatten über langfristige Chancen und Risiken sehr leistungsfähiger KI. Klar von belegbarer, gegenwärtiger Technik zu trennen und mit epistemischer Vorsicht zu behandeln.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "superintelligenz",
    "existenzielles-risiko",
    "agi"
   ]
  },
  {
   "id": "superintelligenz",
   "cat": "ethics",
   "risk": null,
   "q": "Was ist Superintelligenz?",
   "term": "Superintelligenz",
   "short": "Hypothetische Intelligenz, die die besten menschlichen Fähigkeiten in praktisch allen Bereichen weit übertrifft.",
   "long": "Superintelligenz bezeichnet eine gedachte KI, die dem Menschen in nahezu jeder relevanten Hinsicht – wissenschaftlich, strategisch, sozial – deutlich überlegen wäre. Der Begriff, unter anderem durch den Philosophen Nick Bostrom geprägt, steht im Zentrum von Debatten über KI-Sicherheit: Wie ließe sich eine solche Intelligenz kontrollieren und an menschlichen Werten ausrichten (Alignment), bevor sie entsteht? Befürworter dieser Sorge fordern frühzeitige Sicherheitsforschung; Kritiker halten das Szenario für spekulativ und warnen davor, gegenwärtige reale Risiken zu vernachlässigen. Eng verknüpft mit existenziellem Risiko und der technologischen Singularität. Als Zukunftsszenario, nicht als heutige Technik zu verstehen.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "technologische-singularitaet",
    "existenzielles-risiko",
    "alignment",
    "agi"
   ]
  },
  {
   "id": "existenzielles-risiko",
   "cat": "ethics",
   "risk": null,
   "q": "Was versteht man unter existenziellem Risiko durch KI?",
   "term": "Existenzielles Risiko durch KI",
   "short": "Die umstrittene These, sehr fortgeschrittene KI könnte katastrophale, bis hin zu die Menschheit bedrohende Folgen haben.",
   "long": "Unter existenziellem Risiko (\"x-risk\") versteht man die Sorge, dass hochentwickelte, fehlausgerichtete oder missbrauchte KI katastrophale, potenziell irreversible Schäden für die Menschheit verursachen könnte. Vertreter fordern vorsorgliche Sicherheitsforschung, Alignment und internationale Koordination. Kritiker halten solche Szenarien für spekulativ und mahnen, dass die Fokussierung auf ferne Risiken von realen gegenwärtigen Schäden (Diskriminierung, Desinformation, Machtkonzentration) ablenke. Die Debatte prägt Positionen führender Forschender, Unternehmen und Regierungen und beeinflusst Sicherheitsgipfel und Regulierung. Ein Feld, das sachlich und ausgewogen darzustellen ist, ohne eine der Seiten als gesichert zu behandeln.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "superintelligenz",
    "technologische-singularitaet",
    "ai-safety-summits"
   ]
  },
  {
   "id": "anthropomorphismus",
   "cat": "ethics",
   "risk": null,
   "q": "Was ist Anthropomorphismus bei KI?",
   "term": "Anthropomorphismus (bei KI)",
   "short": "Die menschliche Neigung, KI-Systemen fälschlich Verständnis, Absichten oder Gefühle zuzuschreiben.",
   "long": "Anthropomorphismus bezeichnet die Tendenz, technischen Systemen menschliche Eigenschaften zuzuschreiben. Bei flüssig formulierenden Sprachmodellen ist der Effekt besonders stark: Nutzer nehmen leicht Verstehen, Empathie oder eigene Absichten an, wo tatsächlich statistische Textvorhersage stattfindet. Das kann zu übermäßigem Vertrauen, emotionaler Bindung, Fehlgebrauch und falschen Erwartungen führen – besonders bei vulnerablen Personen. Verantwortungsvolle Gestaltung wirkt dem entgegen (Transparenz über die KI-Natur, Vermeidung täuschender Vermenschlichung). Der AI Act adressiert dies über Transparenzpflichten (Art. 50). Wichtiges Konzept für Ethik, Nutzerschutz und die realistische Einordnung dessen, was heutige KI ist und nicht ist.",
   "links": [
    {
     "label": "Art. 50 AI Act",
     "url": "https://artificialintelligenceact.eu/article/50/"
    }
   ],
   "related": [
    "ki-bewusstsein",
    "stochastischer-papagei",
    "transparenzpflichten"
   ]
  },
  {
   "id": "digitale-kluft",
   "cat": "ethics",
   "risk": null,
   "q": "Was ist die digitale Kluft bei KI?",
   "term": "Digitale Kluft (bei KI)",
   "short": "Ungleicher Zugang zu KI-Technologien und ihren Vorteilen zwischen Ländern, Regionen und gesellschaftlichen Gruppen.",
   "long": "Die digitale Kluft beschreibt Ungleichheiten im Zugang zu und im Nutzen von digitaler Technik. Bei KI verschärft sie sich, weil Rechenleistung, Daten, Fachkräfte und Kapital stark konzentriert sind: Wenige Länder und Konzerne dominieren die leistungsfähigsten Modelle, während andere Regionen abgehängt zu werden drohen (\"KI-Kluft\"). Folgen: wirtschaftliche und wissenschaftliche Abhängigkeit, Unterrepräsentation von Sprachen und Kulturen in Trainingsdaten, ungleiche Teilhabe an Produktivitätsgewinnen. Gegenmaßnahmen betreffen Kapazitätsaufbau, offene Modelle und internationale Kooperation – zentrale Anliegen von UN und Globalem Süden. Verbindet Technikentwicklung mit Fragen globaler Gerechtigkeit.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "global-partnership-ai",
    "un-ki-resolution",
    "ki-souveraenitaet"
   ]
  },
  {
   "id": "weltmodell",
   "cat": "dl",
   "risk": null,
   "q": "Was ist ein Weltmodell (World Model)?",
   "term": "Weltmodell (World Model)",
   "short": "Interne Repräsentation, mit der ein KI-System die Struktur und Dynamik seiner Umwelt abbildet, um vorauszuplanen.",
   "long": "Ein Weltmodell ist eine gelernte innere Darstellung davon, wie die Umwelt aufgebaut ist und sich verändert – gewissermaßen eine \"Simulation im Kopf\" des Systems. Damit kann ein Agent Folgen möglicher Handlungen vorhersagen und planen, statt nur zu reagieren. Weltmodelle sind ein aktives Forschungsfeld, besonders in Robotik, Reinforcement Learning und bei multimodalen Systemen. Offen ist, in welchem Maße große Sprachmodelle bereits implizite Weltmodelle bilden oder nur Oberflächenstatistik lernen – eine Kernfrage der Debatte über echtes \"Verstehen\". Konzept an der Grenze zwischen aktueller Forschung und den Zukunftsfragen leistungsfähigerer, planender KI.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "emergente-faehigkeiten",
    "verkoerperte-ki",
    "reasoning-modell"
   ]
  },
  {
   "id": "verkoerperte-ki",
   "cat": "ml",
   "risk": null,
   "q": "Was ist verkörperte KI (Embodied AI)?",
   "term": "Verkörperte KI (Embodied AI)",
   "short": "KI, die über einen physischen Körper – etwa einen Roboter – mit der realen Welt wahrnimmt und handelt.",
   "long": "Verkörperte KI verbindet Wahrnehmung, Entscheidung und Handlung in einem physischen System, das in der realen Welt agiert – vom Industrieroboter über autonome Fahrzeuge bis zu humanoiden Robotern. Anders als rein softwarebasierte Systeme muss sie mit Sensordaten, physikalischen Gesetzen, Unsicherheit und Echtzeitanforderungen umgehen. Der Ansatz beruht auf der These, dass echte Intelligenz teils aus der Interaktion mit einer physischen Umwelt erwächst (\"embodiment\"). Zunehmend werden große Modelle mit Robotik gekoppelt, um allgemeinere Fähigkeiten zu erreichen. Sicherheits-, Haftungs- und Aufsichtsfragen sind hier besonders greifbar, da Fehler physische Folgen haben. Verbindet KI-Forschung mit Robotik und den Hochrisiko-Regeln für Maschinen.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "autonomes-fahren",
    "cobot",
    "weltmodell"
   ]
  },
  {
   "id": "neuromorphes-computing",
   "cat": "dl",
   "risk": null,
   "q": "Was ist neuromorphes Computing?",
   "term": "Neuromorphes Computing",
   "short": "Rechnerarchitekturen, die die Funktionsweise biologischer Gehirne nachahmen, um KI energieeffizienter auszuführen.",
   "long": "Neuromorphe Chips orientieren sich an der Arbeitsweise des Gehirns: Sie verarbeiten Informationen über ereignisgesteuerte \"Spikes\", verbinden Speicher und Rechenwerk eng und arbeiten stark parallel. Ziel ist eine drastisch höhere Energieeffizienz als bei klassischen Prozessoren – wichtig angesichts des wachsenden Stromverbrauchs von KI und für Edge-Anwendungen mit knappem Energiebudget. Die Technik ist noch überwiegend Forschung, mit ersten spezialisierten Chips. Sie ist verwandt mit \"spiking neural networks\". Ein Ansatz, der die Nachhaltigkeitsfrage der KI (Green AI) auf der Hardware-Ebene adressiert und langfristig neue Fähigkeiten ermöglichen könnte. Noch nicht im Massenmarkt angekommen.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "ki-nachhaltigkeit",
    "edge-ai",
    "quanten-maschinelles-lernen"
   ]
  },
  {
   "id": "quanten-maschinelles-lernen",
   "cat": "ml",
   "risk": null,
   "q": "Was ist quanten-maschinelles Lernen?",
   "term": "Quanten-maschinelles Lernen",
   "short": "Forschungsfeld an der Schnittstelle von Quantencomputing und maschinellem Lernen.",
   "long": "Quanten-maschinelles Lernen (QML) untersucht, ob und wie Quantencomputer bestimmte ML-Aufgaben beschleunigen oder verbessern könnten – etwa Optimierung, Simulation von Molekülen oder das Verarbeiten hochdimensionaler Daten. Quantencomputer nutzen Phänomene wie Superposition und Verschränkung. Der Bereich ist überwiegend theoretisch und experimentell: Heutige Quantenhardware ist noch klein und fehleranfällig, ein praktischer Vorteil gegenüber klassischen Methoden ist bislang nicht allgemein belegt. Langfristig könnten sich in Nischen Vorteile ergeben, verbunden mit erheblichen Fragen (etwa für die Kryptografie). Beispiel für eine spekulative, aber ernsthaft erforschte Zukunftsrichtung. Klar von einsatzreifer Technik zu unterscheiden.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "neuromorphes-computing",
    "ki"
   ]
  },
  {
   "id": "ki-bewusstsein",
   "cat": "ethics",
   "risk": null,
   "q": "Worum geht es in der Debatte über maschinelles Bewusstsein?",
   "term": "Maschinelles Bewusstsein (Debatte)",
   "short": "Die offene philosophische und wissenschaftliche Frage, ob KI-Systeme je Bewusstsein oder subjektives Erleben haben könnten.",
   "long": "Ob eine Maschine Bewusstsein, Empfindungen oder subjektives Erleben haben kann, ist eine ungelöste Frage an der Grenze von Philosophie, Kognitionswissenschaft und KI. Heutige Systeme – auch sehr überzeugende Sprachmodelle – gelten nach breitem Fachkonsens nicht als bewusst; ihre menschenähnlichen Ausgaben beruhen auf statistischer Mustererzeugung, nicht auf innerem Erleben. Der starke Eindruck des Gegenteils ist ein Fall von Anthropomorphismus. Zugleich fehlt eine allgemein akzeptierte Theorie und ein Test für Bewusstsein, weshalb die Frage seriös offengehalten wird. Sie berührt künftige ethische Fragen (etwa nach einem möglichen moralischen Status). Sachlich, ohne Sensationslust und ohne vorschnelle Festlegung darzustellen.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "anthropomorphismus",
    "turing-test",
    "stochastischer-papagei"
   ]
  },
  {
   "id": "stochastischer-papagei",
   "cat": "ethics",
   "risk": null,
   "q": "Was meint der Begriff „stochastischer Papagei“?",
   "term": "Stochastischer Papagei",
   "short": "Kritische Metapher, wonach große Sprachmodelle Sprache statistisch nachplappern, ohne deren Bedeutung zu verstehen.",
   "long": "Der Begriff \"stochastischer Papagei\" wurde 2021 in einer einflussreichen kritischen Arbeit geprägt. Er beschreibt große Sprachmodelle als Systeme, die auf Basis von Wahrscheinlichkeiten überzeugend klingende Wortfolgen erzeugen, ohne Bedeutung, Absicht oder ein Verständnis der Welt zu besitzen. Die Kritik warnt vor Risiken wie Verzerrungen in den Trainingsdaten, Umwelt- und Ressourcenkosten sowie der Täuschung von Menschen durch scheinbar sinnhafte Ausgaben. Gegenpositionen verweisen auf emergente Fähigkeiten und mögliche implizite Weltmodelle. Der Begriff ist ein zentraler Bezugspunkt der Debatte über die Grenzen heutiger KI und verwandt mit Anthropomorphismus und der Bewusstseinsfrage.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "anthropomorphismus",
    "ki-bewusstsein",
    "halluzination",
    "emergente-faehigkeiten"
   ]
  },
  {
   "id": "ki-lebenszyklus",
   "cat": "governance",
   "risk": null,
   "q": "Welche Phasen umfasst der KI-Lebenszyklus?",
   "term": "KI-Lebenszyklus",
   "short": "Die Phasen eines KI-Systems von der Idee über Entwicklung und Betrieb bis zur Außerbetriebnahme.",
   "long": "Der KI-Lebenszyklus gliedert ein KI-System in aufeinanderfolgende Phasen: Zielsetzung und Datenerhebung, Entwicklung und Training, Validierung und Konformitätsbewertung, Bereitstellung, laufender Betrieb mit Überwachung sowie schließlich Aktualisierung oder Außerbetriebnahme. Dieses Denken in Phasen ist zentral für Governance und Compliance: Der AI Act knüpft viele Pflichten (Risikomanagement, Daten-Governance, Protokollierung, Nachmarktbeobachtung) ausdrücklich an den gesamten Lebenszyklus, nicht nur an den Zeitpunkt des Inverkehrbringens. Auch internationale Definitionen (OECD) und Managementnormen (ISO/IEC 42001) sowie MLOps-Praktiken orientieren sich daran. Bindeglied zwischen technischer Praxis und regulatorischen Anforderungen über die gesamte Nutzungsdauer.",
   "links": [
    {
     "label": "OECD AI",
     "url": "https://oecd.ai/"
    }
   ],
   "related": [
    "mlops",
    "ai-governance",
    "iso-42001",
    "konformitaetsbewertungsverfahren"
   ]
  }
 ]
};
