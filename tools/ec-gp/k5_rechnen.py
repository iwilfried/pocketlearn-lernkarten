# Rechenkarten: eigene Zahlen, nach dem Muster der Prüfungsaufgaben. Alle Ergebnisse werden hier berechnet.
import math

def eur(x, d=2):
    s = f"{x:,.{d}f}".replace(",", "X").replace(".", ",").replace("X", ".")
    return s + " €"

def num(x, d=2):
    return f"{x:,.{d}f}".replace(",", "X").replace(".", ",").replace("X", ".")

def pct(x, d=2):
    return num(x, d) + " %"

def r2(x):
    return math.floor(x * 100 + 0.5) / 100

CARDS = []
def add(id_, term, q, short, long, src):
    CARDS.append(("r-" + id_, "rechnen", term, q, short, long, src))

# 1 Angebotsvergleich Bezugspreis
def bezug(lp, rab, sko, bk_total, menge):
    zep = lp * (1 - rab); bep = zep * (1 - sko); bk = bk_total / menge
    return zep, bep, bk, bep + bk
a = bezug(240, .15, .02, 96, 20); b = bezug(260, .20, .03, 120, 20)
add("angebotsvergleich", "Rechnen: Angebotsvergleich",
 "Zwei Angebote für 20 Paar Steigeisen: A – Listenpreis 240,00 €/Paar, 15 % Rabatt, 2 % Skonto, Fracht 96,00 € gesamt. B – 260,00 €/Paar, 20 % Rabatt, 3 % Skonto, Fracht 120,00 € gesamt. Welcher Bezugspreis je Paar ergibt sich, und welches Angebot ist günstiger?",
 f"A: {eur(a[3])}, B: {eur(b[3])} je Paar – Angebot {'A' if a[3] < b[3] else 'B'} ist günstiger.",
 f"A: 240,00 − 15 % = {eur(a[0])} (Zieleinkaufspreis) − 2 % Skonto = {eur(a[1])} (Bareinkaufspreis) + 96,00 ÷ 20 = {eur(a[2])} Bezugskosten = {eur(a[3])}. "
 f"B: 260,00 − 20 % = {eur(b[0])} − 3 % = {eur(b[1])} + 120,00 ÷ 20 = {eur(b[2])} = {eur(b[3])}. "
 "Merke: Rabatt vom Listenpreis, Skonto vom Zieleinkaufspreis, Bezugskosten pauschal auf die Stückzahl verteilen. Danach den qualitativen Vergleich nicht vergessen.",
 "Aufgabentyp aus W24 2.1")

# 2 Vorwärtskalkulation
bp = 32.00; hk = .12; gw = .08; ra = .10; ust = .19
sk = bp * (1 + hk); bvp = sk * (1 + gw); lvp = bvp / (1 - ra); brutto = lvp * (1 + ust)
add("vorwaertskalkulation", "Rechnen: Bruttoverkaufspreis",
 "Bezugspreis einer Wanderhose 32,00 €, Handlungskosten 12 %, Gewinn 8 %, Kundenrabatt 10 %, Umsatzsteuer 19 %. Wie hoch ist der Bruttoverkaufspreis?",
 f"{eur(r2(brutto))}",
 f"Bezugspreis 32,00 € + 12 % Handlungskosten = {eur(sk)} Selbstkosten + 8 % Gewinn = {eur(bvp)} Barverkaufspreis (= Zielverkaufspreis, da kein Skonto). "
 f"Kundenrabatt im Hundert: {eur(bvp)} ÷ 0,90 = {eur(lvp)} Listenverkaufspreis netto + 19 % USt = {eur(brutto)} → gerundet {eur(r2(brutto))}.",
 "Aufgabentyp aus S20 5.2")

# 3 Kalkulationszuschlag
ep = 480; nvp = 672
kz = (nvp - ep) / ep * 100
add("kalkulationszuschlag", "Rechnen: Kalkulationszuschlag",
 "Einstandspreis 480,00 €, Nettoverkaufspreis 672,00 €. Wie hoch ist der Kalkulationszuschlag?",
 f"{pct(kz)}",
 f"(672,00 − 480,00) × 100 ÷ 480,00 = 192,00 × 100 ÷ 480,00 = {pct(kz)}. Der Zuschlag bezieht sich auf den Einstandspreis.",
 "Aufgabentyp aus W20 7, S25 2.6")

# 4 Kalkulationsfaktor
bpf = 412.50; lvpf = 948.75
add("kalkulationsfaktor", "Rechnen: Kalkulationsfaktor",
 "Bezugspreis 412,50 €, Listenverkaufspreis netto 948,75 €. Wie hoch ist der Kalkulationsfaktor?",
 f"{num(lvpf / bpf)}",
 f"948,75 ÷ 412,50 = {num(lvpf / bpf)}. Jeder Bezugspreis dieser Warengruppe × {num(lvpf / bpf)} ergibt den Nettoverkaufspreis. Das entspricht einem Kalkulationszuschlag von {pct((lvpf / bpf - 1) * 100, 0)}.",
 "Aufgabentyp aus W24 2.3, S23 2.3")

# 5 Handelsspanne
lvp5 = 3600; ep5 = 2340
hs = (lvp5 - ep5) / lvp5 * 100
add("handelsspanne", "Rechnen: Handelsspanne",
 "Ein Dachzelt hat einen Listenverkaufspreis von 3.600,00 € netto und einen Einstandspreis von 2.340,00 €. Wie hoch ist die Handelsspanne?",
 f"{pct(hs, 0)}",
 f"(3.600,00 − 2.340,00) × 100 ÷ 3.600,00 = 1.260,00 × 100 ÷ 3.600,00 = {pct(hs, 0)}. Die Handelsspanne bezieht sich auf den Verkaufspreis.",
 "Aufgabentyp aus S24 2.5, W24 2.6")

# 6 max Einstandspreis
brutto6 = 178.50; hs6 = .60
net6 = brutto6 / 1.19; maxep = net6 * (1 - hs6)
add("max-einstandspreis", "Rechnen: Einstandspreis aus Handelsspanne",
 "Ein neuer Laufschuh soll für 178,50 € brutto verkauft werden. Die Warengruppe arbeitet mit einer Handelsspanne von 60 %. Wie hoch darf der Einstandspreis höchstens sein?",
 f"{eur(maxep)}",
 f"Erst die Umsatzsteuer herausrechnen: 178,50 ÷ 1,19 = {eur(net6)} netto. Bei 60 % Handelsspanne bleiben 40 % für den Einstand: {eur(net6)} × 0,40 = {eur(maxep)}.",
 "Aufgabentyp aus S20 13.5")

# 7 Gewinn bei Nachbestellung (Differenzkalkulation)
brutto7 = 357.00; lep7 = 190; bk7 = 200; menge7 = 100; sko7 = .03; hk7 = .30
nvp7 = brutto7 / 1.19
bep7 = lep7 * (1 - sko7); bez7 = bep7 + bk7 / menge7; sk7 = bez7 * (1 + hk7); g7 = nvp7 - sk7
add("differenzkalkulation", "Rechnen: Gewinn bei Nachbestellung",
 "Ein Rucksack wird für 357,00 € brutto verkauft (19 % USt). Für 100 nachbestellte Stück gilt: Listeneinkaufspreis 190,00 €, kein Rabatt, 3 % Skonto, Bezugskosten 200,00 € gesamt, Handlungskosten 30 %. Wie hoch ist der Gewinn pro Stück in € und %?",
 f"{eur(r2(g7))} je Stück, das sind {pct(g7 / sk7 * 100)} der Selbstkosten.",
 f"Verkaufsseite: 357,00 ÷ 1,19 = {eur(nvp7)} netto. Einkaufsseite: 190,00 − 3 % = {eur(bep7)} + 2,00 Bezugskosten = {eur(bez7)} Bezugspreis + 30 % = {eur(sk7)} Selbstkosten. "
 f"Gewinn = {eur(nvp7)} − {eur(sk7)} = {eur(g7)}; in Prozent der Selbstkosten: {num(g7)} × 100 ÷ {num(sk7)} = {pct(g7 / sk7 * 100)}. "
 "Bei der Differenzkalkulation rechnet man von beiden Seiten zur Mitte; der Gewinn ist der Rest.",
 "Aufgabentyp aus W21 2.7, W22 2.4")

# 8 Gewinnzuschlag mit Kundenrabatt und Provision
lep8 = 1800; rab8 = .15; sko8 = .02; bk8 = 60; hk8 = .25; kr8 = .10; prov8 = .025; brutto8 = 2856.00
zep8 = lep8 * (1 - rab8); bep8 = zep8 * (1 - sko8); bez8 = bep8 + bk8; sk8 = bez8 * (1 + hk8)
lvp8 = brutto8 / 1.19; zvp8 = lvp8 * (1 - kr8); bvp8 = zvp8 * (1 - prov8); gz8 = bvp8 - sk8
add("gewinnzuschlag", "Rechnen: Gewinnzuschlag ermitteln",
 "Dachzelt: Listeneinkaufspreis 1.800,00 €, 15 % Rabatt, 2 % Skonto, Bezugskosten 60,00 €, Handlungskosten 25 %. Verkauf für 2.856,00 € brutto mit 10 % Kundenrabatt und 2,5 % Vertriebsprovision. Wie hoch ist der Gewinnzuschlag in € und %?",
 f"{eur(r2(gz8))} bzw. {pct(gz8 / sk8 * 100)}",
 f"Von unten: 1.800 − 15 % = {eur(zep8)} − 2 % = {eur(bep8)} + 60,00 = {eur(bez8)} + 25 % = {eur(sk8)} Selbstkosten. "
 f"Von oben: 2.856,00 ÷ 1,19 = {eur(lvp8)} − 10 % Kundenrabatt = {eur(zvp8)} − 2,5 % Provision = {eur(bvp8)} Barverkaufspreis. "
 f"Gewinn = {eur(bvp8)} − {eur(sk8)} = {eur(gz8)}; × 100 ÷ Selbstkosten = {pct(gz8 / sk8 * 100)}.",
 "Aufgabentyp aus S24 2.1")

# 9 Miete Amortisation
lvp9 = 760; satz9 = .025; tage9 = 5
tm9 = lvp9 * satz9; mon9 = lvp9 / (tm9 * tage9)
add("miete-amortisation", "Rechnen: Wann rechnet sich die Miete?",
 "Ein Zelt hat einen Nettoverkaufspreis von 760,00 €. Die Tagesmiete beträgt 2,5 % davon; es wird im Schnitt 5 Tage pro Monat vermietet. Nach wie vielen Monaten entsprechen die Mieteinnahmen dem Verkaufspreis?",
 f"Nach {num(mon9, 0)} Monaten.",
 f"Tagesmiete: 760,00 × 2,5 % = {eur(tm9)}; pro Monat: {eur(tm9)} × 5 = {eur(tm9 * 5)}. 760,00 ÷ {num(tm9 * 5)} = {num(mon9, 0)} Monate. "
 "Für einen Gewinnvergleich müsste man zusätzlich die variablen Kosten der Vermietung (Verschleiß, Wartung) abziehen.",
 "Aufgabentyp aus W24 2.4")

# 10 Marktplatz-Erlöse Betreiber
h10 = 250; mon10 = 6; ums10 = 1190000; prov10 = .10; fee10 = 24.90
net10 = ums10 / 1.19; p10 = net10 * prov10; f10 = h10 * mon10 * fee10
add("marktplatz-erloese", "Rechnen: Erlöse als Marktplatzbetreiber",
 "Auf dem eigenen Marktplatz sind 250 Händler im Mittel 6 Monate aktiv und erzielen 1.190.000,00 € Umsatz inkl. USt. Provision 10 % vom Nettoumsatz, Grundgebühr 24,90 € netto pro Händler und Monat. Wie hoch sind die Netto-Erlöse des Betreibers?",
 f"{eur(p10 + f10)}",
 f"Nettoumsatz: 1.190.000,00 ÷ 1,19 = {eur(net10)}; Provision 10 % = {eur(p10)}. Grundgebühren: 250 × 6 × 24,90 = {eur(f10)}. Summe: {eur(p10 + f10)}.",
 "Aufgabentyp aus W24 1.4")

# 11 Marktplatz kurzfristiger Erfolg (Schema)
ums11 = 238000.0; wk11 = 85.00; vk11 = 5.95; we11 = .45; prov11 = .15; mp11 = .10; log11 = 7.20
orders11 = ums11 / wk11; netto11 = ums11 / 1.19; versand11 = orders11 * vk11 / 1.19; nerl11 = netto11 + versand11
wein11 = netto11 * we11; pv11 = netto11 * prov11; mkt11 = ums11 * mp11; lg11 = orders11 * log11
erf11 = nerl11 - wein11 - pv11 - mkt11 - lg11
add("marktplatz-erfolg", "Rechnen: Kurzfristiger Erfolg auf dem Marktplatz",
 "Erwarteter Marktplatz-Umsatz nach Retouren 238.000,00 € brutto, mittlerer Warenkorb 85,00 € brutto, Versandkosten für Kunden 5,95 € brutto je Bestellung. Wareneinsatz 45 % und Provision 15 % jeweils vom Nettoumsatz, Marketing/Payment 10 % vom Bruttoumsatz, Logistik 7,20 € je Bestellung. Wie hoch ist der kurzfristige Erfolg?",
 f"{eur(erf11)}",
 f"Bestellungen: 238.000 ÷ 85 = {num(orders11, 0)}. Nettoumsatz: 238.000 ÷ 1,19 = {eur(netto11)}. Netto-Versanderlöse: {num(orders11, 0)} × 5,95 ÷ 1,19 = {eur(versand11)}. Nettoerlöse = {eur(nerl11)}. "
 f"Abzüge: Wareneinsatz {eur(wein11)}, Provision {eur(pv11)}, Marketing/Payment {eur(mkt11)}, Logistik {num(orders11, 0)} × 7,20 = {eur(lg11)}. Erfolg = {eur(erf11)}. "
 "Prüfen Sie in der Aufgabe genau, worauf sich jeder Prozentsatz bezieht (netto oder brutto).",
 "Aufgabentyp aus S25 1.4")

# 12 Make or Buy Grenzumsatz
ext_fix = 20000; ext_p = .04; int_dev = 12 * 450; int_run = 12 * (3 * 450 + 1000)
plan12 = 250000
ext12 = ext_fix + ext_p * plan12; int12 = int_dev + int_run
grenz12 = (int12 - ext_fix) / ext_p
add("make-or-buy", "Rechnen: Externe oder interne App-Entwicklung",
 "Extern: 20.000,00 € pauschal plus 4 % Provision auf den App-Umsatz. Intern: Entwicklung 12 Personentage à 450,00 € einmalig, Betrieb 3 Personentage à 450,00 € und 1.000,00 € IT-Kosten pro Monat. Was ist bei 250.000,00 € Jahresumsatz günstiger, und ab welchem Umsatz lohnt sich die interne Lösung?",
 f"Bei 250.000 €: extern {eur(ext12)}, intern {eur(int12)} → {'extern' if ext12 < int12 else 'intern'} günstiger. Ab {eur(grenz12)} Jahresumsatz ist die interne Lösung günstiger.",
 f"Extern: 20.000 + 4 % × 250.000 = {eur(ext12)}. Intern: 12 × 450 = {eur(int_dev)} + 12 Monate × (3 × 450 + 1.000) = {eur(int_run)} → {eur(int12)}. "
 f"Grenzumsatz: 20.000 + 0,04 × U = {num(int12)} → U = ({num(int12)} − 20.000) ÷ 0,04 = {eur(grenz12)}. Darüber wird die umsatzabhängige Provision teurer als die interne Lösung. Weiche Faktoren (Know-how, Abhängigkeit) gehören in die Begründung.",
 "Aufgabentyp aus S23 1.1–1.2")

# 13 Outsourcing Stunden
h13 = 120; satz13 = 55; pk13 = 4800; zu13 = .30
add("outsourcing", "Rechnen: Externer Dienstleister oder intern?",
 "Ein Dienstleister bietet 120 Stunden zu 55,00 € an. Intern fallen für die 120 Stunden 4.800,00 € Personalkosten plus 30 % Zuschläge/Gemeinkosten an. Welche Lösung ist günstiger?",
 f"Extern {eur(h13 * satz13)}, intern {eur(pk13 * (1 + zu13))} → {'extern' if h13 * satz13 < pk13 * (1 + zu13) else 'intern'} ist günstiger.",
 f"Extern: 120 × 55,00 = {eur(h13 * satz13)}. Intern: 4.800,00 × 1,30 = {eur(pk13 * (1 + zu13))}. Differenz: {eur(abs(h13 * satz13 - pk13 * (1 + zu13)))}.",
 "Aufgabentyp aus W23 1.7")

# 14 Conversion & mobile shift
sd, sm = 240000, 80000; kd, km = 2640, 480
crd = kd / sd * 100; crm = km / sm * 100
tot = sd + sm; neu_d = tot * .5 * crd / 100; neu_m = tot * .5 * crm / 100
add("conversion-shift", "Rechnen: Conversion-Rate und Mobile-Anteil",
 "Im Quartal: Desktop 240.000 Sitzungen und 2.640 Käufe, Mobile 80.000 Sitzungen und 480 Käufe. Wie hoch sind die Conversion-Rates? Was passiert mit der Zahl der Käufe, wenn Mobile bei gleicher Gesamtzahl der Sitzungen und gleichen Conversion-Rates auf 50 % steigt?",
 f"CR Desktop {pct(crd, 1)}, Mobile {pct(crm, 1)}. Käufe sinken von {num(kd + km, 0)} auf {num(neu_d + neu_m, 0)}.",
 f"Desktop: 2.640 × 100 ÷ 240.000 = {pct(crd, 1)}; Mobile: 480 × 100 ÷ 80.000 = {pct(crm, 1)}. Gesamt 320.000 Sitzungen, neu je 160.000: Desktop 160.000 × {pct(crd, 1)} = {num(neu_d, 0)}, Mobile 160.000 × {pct(crm, 1)} = {num(neu_m, 0)}, zusammen {num(neu_d + neu_m, 0)} statt {num(kd + km, 0)}. "
 "Folgerung: Der mobile Funnel muss verbessert werden (z. B. vereinfachter Checkout, Express-Zahlarten).",
 "Aufgabentyp aus W21 1.1–1.2")

# 15 Conversion Unique Visitors
oc = 312; uv = 1240
add("conversion-uv", "Rechnen: Conversion-Rate mit Unique Visitors",
 "Für Jacken wurden 312 Bestellungen bestätigt; es gab 1.480 Besuche von 1.240 eindeutigen Besuchern. Laut KPI-Handbuch wird die Conversion-Rate mit bestätigten Bestellungen und eindeutigen Besuchern berechnet. Wie hoch ist sie?",
 f"{pct(oc / uv * 100)}",
 f"312 × 100 ÷ 1.240 = {pct(oc / uv * 100)}. Mit allen Besuchen wäre sie niedriger ({pct(312 / 1480 * 100)}) – deshalb immer die vorgegebene Basis verwenden.",
 "Aufgabentyp aus S23 4.1")

# 16 Print-Mailing Kosten je Bestellung + Zielumsatz
soft16 = 300; stk16 = 250; porto16 = .85; quote16 = .04; kur16 = .15
kost16 = soft16 + stk16 * porto16; best16 = stk16 * quote16; kpb16 = kost16 / best16; ziel16 = kpb16 / kur16
add("mailing-kur", "Rechnen: Werbekosten je Bestellung und Zielumsatz",
 "Ein Print-Mailing an 250 Kunden kostet monatlich 300,00 € (Druck und Verarbeitung) plus 0,85 € Porto je Brief. Erwartete Bestellquote 4 %. Wie hoch sind die Werbekosten je Bestellung, und welchen Umsatz muss jede Bestellung bringen, damit die KUR 15 % nicht übersteigt?",
 f"{eur(kpb16)} je Bestellung; Zielumsatz je Bestellung {eur(ziel16)}.",
 f"Kosten: 300 + 250 × 0,85 = {eur(kost16)}. Bestellungen: 250 × 4 % = {num(best16, 0)}. Je Bestellung: {num(kost16)} ÷ {num(best16, 0)} = {eur(kpb16)}. "
 f"Zielumsatz: {num(kpb16)} ÷ 0,15 = {eur(ziel16)}. Liegt der durchschnittliche Warenkorb deutlich darunter, lohnt sich das Mailing nicht.",
 "Aufgabentyp aus S21 3.1")

# 17 Max Akquisekosten Kanal
bw17 = 64; kpj17 = 3; jahre17 = 2.5; kur17 = .12
ums17 = bw17 * kpj17 * jahre17
add("max-akquise", "Rechnen: Was darf ein Neukunde kosten?",
 "Kunden aus Social Media bestellen im Schnitt für 64,00 € pro Kauf, 3-mal pro Jahr, und werden nach 2,5 Jahren inaktiv. Die Werbekosten-Umsatz-Relation darf 12 % nicht übersteigen. Wie viel darf die Gewinnung eines Neukunden kosten?",
 f"Höchstens {eur(ums17 * kur17)}.",
 f"Umsatz über die Kundenbeziehung: 64,00 × 3 × 2,5 = {eur(ums17)}. Davon 12 %: {eur(ums17 * kur17)}.",
 "Aufgabentyp aus W20 9.2")

# 18 CLV
bw18 = 240; bpj18 = 4; mon18 = 30; db18 = .40; kur18 = .15
ums18 = bw18 * bpj18 * mon18 / 12; clv18 = ums18 * (db18 - kur18)
add("clv", "Rechnen: Customer Lifetime Value",
 "Bergsportkunden: durchschnittlicher Bestellwert 240,00 €, 4 Bestellungen pro Jahr, inaktiv nach 30 Monaten, Deckungsbeitrag 40 %, Werbekosten-Umsatz-Relation 15 %. Wie hoch ist der durchschnittliche CLV?",
 f"{eur(clv18)}",
 f"Umsatz: 240,00 × 4 × 2,5 Jahre = {eur(ums18)}. Nach Werbekosten bleibt ein DB-Satz von 40 % − 15 % = 25 %: {num(ums18)} × 0,25 = {eur(clv18)}. "
 "Achtung: Monate in Jahre umrechnen (30 Monate = 2,5 Jahre).",
 "Aufgabentyp aus S21 4.7, W23 4.7")

# 19 TKP
add("tkp", "Rechnen: Tausender-Kontakt-Preis",
 "Eine Werbeschaltung kostet 18.000,00 € im Monat; die Seite wird 1.500.000-mal aufgerufen. Wie hoch ist der TKP?",
 f"{eur(18000 / 1500000 * 1000)}",
 f"18.000,00 ÷ 1.500.000 × 1.000 = {eur(18000 / 1500000 * 1000)} pro 1.000 Kontakte.",
 "Aufgabentyp aus S22 3.8")

# 20 Budget CPM + CPO
reach20 = 150000; freq20 = 2; cpm20 = 5.20; ctr20 = .012; cr20 = .03
imp20 = reach20 * freq20; bud20 = imp20 / 1000 * cpm20; kl20 = imp20 * ctr20; ord20 = kl20 * cr20
add("cpm-cpo", "Rechnen: Kampagnenbudget und CPO",
 "Eine Zielgruppe von 150.000 Nutzern soll zweimal erreicht werden; CPM 5,20 €. Die Klickrate (CTR) liegt bei 1,2 %, die Conversion-Rate der Besucher bei 3 %. Wie hoch sind Budget und Cost per Order?",
 f"Budget {eur(bud20)}, CPO {eur(bud20 / ord20)}.",
 f"Impressions: 150.000 × 2 = {num(imp20, 0)}; Budget: {num(imp20, 0)} ÷ 1.000 × 5,20 = {eur(bud20)}. Klicks: {num(imp20, 0)} × 1,2 % = {num(kl20, 0)}; Bestellungen: {num(kl20, 0)} × 3 % = {num(ord20, 0)}. CPO: {num(bud20)} ÷ {num(ord20, 0)} = {eur(bud20 / ord20)}.",
 "Aufgabentyp aus S23 3.4")

# 21 ROAS
add("roas", "Rechnen: ROAS",
 "Ein Newsletter-Kanal kostet 4.000,00 €, ihm werden 26.000,00 € Mehrumsatz zugerechnet. Wie hoch ist der ROAS in Prozent, und was bedeutet er?",
 f"{pct(26000 / 4000 * 100, 0)}",
 f"26.000 ÷ 4.000 × 100 = {pct(26000 / 4000 * 100, 0)}: Jeder eingesetzte Euro bringt 6,50 € Umsatz. Ob das profitabel ist, hängt von der Marge ab – der ROAS misst Umsatz, nicht Gewinn.",
 "Aufgabentyp aus S24 1.4–1.5")

# 22 KUR
add("kur", "Rechnen: Kosten-Umsatz-Relation",
 "Eine SEA-Kampagne kostet 3.500,00 € und erzielt 14.000,00 € Umsatz. Wie hoch ist die KUR?",
 f"{pct(3500 / 14000 * 100, 0)}",
 f"3.500 × 100 ÷ 14.000 = {pct(3500 / 14000 * 100, 0)}. Die KUR ist der Kehrwert des ROAS (hier 400 %).",
 "Aufgabentyp aus W23 3.7")

# 23 CPL Affiliate
add("cpl", "Rechnen: Cost per Lead",
 "Mit einem Affiliate-Netzwerk ist ein CPL von 2,50 € vereinbart. Von 400 Besuchern über Affiliate-Links hinterlassen 25 % ihre E-Mail-Adresse. Wie viel muss gezahlt werden?",
 f"{eur(400 * .25 * 2.5)}",
 f"400 × 25 % = 100 Leads × 2,50 € = {eur(400 * .25 * 2.5)}. Bezahlt wird nur für Leads, nicht für Besucher.",
 "Aufgabentyp aus W21 3.6")

# 24 Attribution
add("attribution", "Rechnen: Positionsbasierte Attribution",
 "Conversion-Pfad: Social Network → Organische Suche → Social Network → Display. Positionsbasiertes Modell: erster und letzter Kontakt je 40 %, Rest gleichmäßig auf die mittleren Kontakte. Welchen Anteil erhalten die Social Networks?",
 "50 %",
 "Erster Kontakt (Social) 40 %, letzter (Display) 40 %. Die übrigen 20 % gehen auf zwei mittlere Kontakte, also je 10 %: Organische Suche 10 %, Social 10 %. Social insgesamt: 40 % + 10 % = 50 %.",
 "Aufgabentyp aus S20 9.2")

# 25 AOV
add("aov", "Rechnen: Average Order Value",
 "Der Kanal Social Media erzielt 28.600,00 € Umsatz aus 520 Bestellungen. Der kanalübergreifende Durchschnitt liegt bei 59,80 €. Wie hoch ist der AOV, und wie ist er zu bewerten?",
 f"{eur(28600 / 520)} – unter dem Durchschnitt.",
 f"28.600 ÷ 520 = {eur(28600 / 520)}. Social-Media-Kunden kaufen kleinere Warenkörbe ({eur(59.80 - 28600 / 520)} unter dem Schnitt), z. B. durch Impulskäufe einzelner Artikel. Maßnahme: Cross-Selling und Bundles in den Anzeigen.",
 "Aufgabentyp aus W24 3.4")

# 26 mehrstufige DB + Preis bei Zielgewinn
xa, kva, pa, fa = 500, 40, 85, 6000
xb, kvb, pb, fb = 300, 60, 130, 7500
uf = 18000
db1a = xa * (pa - kva); db1b = xb * (pb - kvb); db2a = db1a - fa; db2b = db1b - fb; be = db2a + db2b - uf
add("db-mehrstufig", "Rechnen: Mehrstufige Deckungsbeitragsrechnung",
 "Uhr A: 500 Stück, variable Stückkosten 40,00 €, Preis 85,00 €, erzeugnisfixe Kosten 6.000,00 €. Uhr B: 300 Stück, 60,00 €, 130,00 €, 7.500,00 €. Unternehmensfixe Kosten 18.000,00 €. Wie hoch sind DB I, DB II und das Betriebsergebnis?",
 f"DB I: A {eur(db1a)}, B {eur(db1b)}. DB II: A {eur(db2a)}, B {eur(db2b)}. Betriebsergebnis {eur(be)}.",
 f"DB I = Menge × (Preis − variable Stückkosten): A 500 × 45 = {eur(db1a)}, B 300 × 70 = {eur(db1b)}. DB II = DB I − erzeugnisfixe Kosten: A {eur(db2a)}, B {eur(db2b)}. "
 f"Betriebsergebnis = {num(db2a + db2b)} − 18.000 = {eur(be)}.",
 "Aufgabentyp aus W24 4.1.1")

ziel27 = 4000
pb_neu = (ziel27 + uf - db2a + fb) / xb + kvb
add("preis-zielgewinn", "Rechnen: Preis bei vorgegebenem Gewinn",
 f"Zahlen wie bei der mehrstufigen DB-Rechnung (Betriebsergebnis {eur(be)}). Der Gewinn soll vorübergehend auf 4.000,00 € gesenkt werden, indem nur der Preis von Uhr B sinkt. Zu welchem Preis kann Uhr B angeboten werden?",
 f"{eur(pb_neu)}",
 f"Die Gewinnsenkung um {eur(be - ziel27)} darf allein Uhr B tragen. Bei 300 Stück sinkt der Preis um {num(be - ziel27)} ÷ 300 = {eur((be - ziel27) / xb)}: 130,00 − {num((be - ziel27) / xb)} = {eur(pb_neu)}. "
 "Probe: neuer DB I von B = 300 × (" + num(pb_neu) + " − 60,00) = " + eur(xb * (pb_neu - kvb)) + ".",
 "Aufgabentyp aus W24 4.1.2")

# 28 Break-even
p28, kf28, kv28 = 120, 45000, 84
bep28 = math.ceil(kf28 / (p28 - kv28))
add("break-even", "Rechnen: Gewinnschwelle",
 "Ein Zelt als Eigenmarke: Verkaufspreis 120,00 €, Fixkosten 45.000,00 €, variable Stückkosten 84,00 €. Bei welcher Menge ist die Gewinnschwelle erreicht?",
 f"{num(bep28, 0)} Stück",
 f"Stückdeckungsbeitrag: 120 − 84 = 36,00 €. Gewinnschwelle: 45.000 ÷ 36 = {num(kf28 / (p28 - kv28), 0)} Stück. Ab dem nächsten verkauften Stück entsteht Gewinn; darunter Verlust.",
 "Aufgabentyp aus W21 4.6, W23 4.2")

# 29 langfristige PUG
mk29, fk29, kfix29, x29 = 148.60, 31.40, 55000, 2500
add("lpug", "Rechnen: Langfristige Preisuntergrenze",
 "Heimtrainer: Material 148,60 €, Fertigung 31,40 € je Stück, Fixkosten 55.000,00 € pro Jahr, geplanter Absatz 2.500 Stück. Bis zu welchem Preis kann langfristig gesenkt werden?",
 f"{eur(mk29 + fk29 + kfix29 / x29)}",
 f"Variable Stückkosten: 148,60 + 31,40 = 180,00 €. Fixkosten je Stück: 55.000 ÷ 2.500 = {eur(kfix29 / x29)}. Langfristige Preisuntergrenze = Selbstkosten je Stück = {eur(mk29 + fk29 + kfix29 / x29)}. Kurzfristig lägen sie bei 180,00 € (nur variable Kosten).",
 "Aufgabentyp aus W23 4.3")

# 30 Kostenfunktion + Erfolg nach Änderung
p30, kv30, kf30 = 36, 14, 900
kv30n = kv30 + 2.5 - 1; kf30n = kf30 - 100; x30 = 220
erf30 = x30 * (p30 - kv30n) - kf30n
add("kostenfunktion", "Rechnen: Kosten- und Erlösfunktion",
 "Wandersocken: Preis 36,00 € je Packung, variable Kosten 14,00 €, Fixkosten 900,00 €. Stellen Sie Kosten- und Erlösfunktion auf und berechnen Sie die Gewinnschwelle. Danach steigen die Materialkosten um 2,50 €, die Lohnkosten sinken um 1,00 € und die Fixkosten um 100,00 €. Wie hoch ist der Erfolg bei 220 Packungen?",
 f"K(x) = 900 + 14x, E(x) = 36x; Gewinnschwelle {math.ceil(900 / 22)} Packungen. Erfolg nach Änderung: {eur(erf30)}.",
 f"Gewinnschwelle: 900 ÷ (36 − 14) = {num(900 / 22)} → {math.ceil(900 / 22)} Packungen. Neue variable Kosten: 14 + 2,50 − 1,00 = {eur(kv30n)}; neue Fixkosten {eur(kf30n)}. "
 f"Erfolg: 220 × (36,00 − {num(kv30n)}) − {num(kf30n)} = {num(x30 * (p30 - kv30n))} − {num(kf30n)} = {eur(erf30)}.",
 "Aufgabentyp aus S25 4.2–4.7")

# 31 Rentabilitäten
g31, u31, gk31, fk31 = 196000, 3500000, 4200000, 1750000
ek31 = gk31 - fk31
add("rentabilitaet", "Rechnen: Umsatz- und Eigenkapitalrentabilität",
 "Gewinn 196.000,00 €, Umsatz 3.500.000,00 €, Gesamtkapital 4.200.000,00 €, Fremdkapital 1.750.000,00 €. Wie hoch sind Umsatz- und Eigenkapitalrentabilität?",
 f"Umsatzrentabilität {pct(g31 / u31 * 100)}, Eigenkapitalrentabilität {pct(g31 / ek31 * 100)}.",
 f"Umsatzrentabilität: 196.000 × 100 ÷ 3.500.000 = {pct(g31 / u31 * 100)}. Eigenkapital: 4.200.000 − 1.750.000 = {eur(ek31, 0)}; Eigenkapitalrentabilität: 196.000 × 100 ÷ {num(ek31, 0)} = {pct(g31 / ek31 * 100)}.",
 "Aufgabentyp aus W24 4.2, W22 4.1–4.2")

# 32 Liquidität
bank32, kasse32, ford32, verb32 = 52400, 6100, 138500, 245000
l1 = (bank32 + kasse32) / verb32 * 100; l2 = (bank32 + kasse32 + ford32) / verb32 * 100
add("liquiditaet", "Rechnen: Liquidität 1. und 2. Grades",
 "Bank 52.400,00 €, Kasse 6.100,00 €, Forderungen aus L+L 138.500,00 €, Verbindlichkeiten aus L+L 245.000,00 €. Wie hoch sind Liquidität 1. und 2. Grades, und wie sind sie zu beurteilen?",
 f"1. Grad {pct(l1)}, 2. Grad {pct(l2)} – unter 100 %, die kurzfristigen Schulden sind nicht gedeckt.",
 f"1. Grad: (52.400 + 6.100) × 100 ÷ 245.000 = {pct(l1)}. 2. Grad: (58.500 + 138.500) × 100 ÷ 245.000 = {pct(l2)}. "
 "Die Liquidität 2. Grades sollte mindestens 100 % erreichen. Hier droht ein Engpass: Maßnahmen z. B. Forderungen schneller eintreiben, Zahlungsziele verhandeln, Kontokorrentrahmen prüfen.",
 "Aufgabentyp aus W22 4.3–4.4")

# 33 Eigenkapital aus Bilanz
akt = {"Grundstücke": 420000, "BGA": 310000, "Fuhrpark": 160000, "Waren": 760000, "Forderungen": 190000, "Bank": 48000, "Kasse": 7000}
pas = {"Verb. Kreditinstitute": 880000, "Verb. L+L": 215000, "Umsatzsteuer": 35000}
sa, sp = sum(akt.values()), sum(pas.values())
add("eigenkapital", "Rechnen: Eigenkapital aus der Bilanz",
 "Grundstücke 420.000 €, Betriebs- und Geschäftsausstattung 310.000 €, Fuhrpark 160.000 €, Waren 760.000 €, Forderungen 190.000 €, Bank 48.000 €, Kasse 7.000 €; Verbindlichkeiten gegenüber Kreditinstituten 880.000 €, Verbindlichkeiten aus L+L 215.000 €, Umsatzsteuer 35.000 €. Wie hoch ist das Eigenkapital?",
 f"{eur(sa - sp, 0)}",
 f"Summe Vermögen: {eur(sa, 0)}. Summe Schulden: {eur(sp, 0)}. Eigenkapital = {num(sa, 0)} − {num(sp, 0)} = {eur(sa - sp, 0)}.",
 "Aufgabentyp aus W21 4.2.1")

# 34 Retouren/Storno
ein34, sto34, vers34, ret34 = 6200, 248, 5952, 1190
add("quoten", "Rechnen: Storno- und Retourenquote",
 "Im Monat: 6.200 Bestelleingänge, 248 Stornierungen, 5.952 versendete Bestellungen, 1.190 Rücksendungen. Wie hoch sind Storno- und Retourenquote?",
 f"Stornoquote {pct(sto34 / ein34 * 100)}, Retourenquote {pct(ret34 / vers34 * 100)}.",
 f"Storno: 248 × 100 ÷ 6.200 = {pct(sto34 / ein34 * 100)} (Basis: Bestelleingänge). Retouren: 1.190 × 100 ÷ 5.952 = {pct(ret34 / vers34 * 100)} (Basis: versendete Bestellungen).",
 "Aufgabentyp aus S21 4.1–4.2, W24 4.3")

# 35 BAB Schlüssel
add("bab-schluessel", "Rechnen: Gemeinkosten nach Schlüssel verteilen",
 "Die Shop-Präsentation kostet 21.000,00 € und wird im Verhältnis 2 : 1 : 4 auf drei Kostenstellen verteilt. Welchen Betrag erhält jede Kostenstelle?",
 "6.000,00 €, 3.000,00 € und 12.000,00 €.",
 "2 + 1 + 4 = 7 Teile; 21.000 ÷ 7 = 3.000,00 € je Teil. Kostenstelle 1: 2 × 3.000 = 6.000,00 €; Kostenstelle 2: 3.000,00 €; Kostenstelle 3: 4 × 3.000 = 12.000,00 €.",
 "Aufgabentyp aus S22 4.1–4.3")

# 36 DB aus Betriebsergebnis
add("db-aus-ergebnis", "Rechnen: Deckungsbeitrag aus Betriebsergebnis",
 "Eine Category erzielte im Quartal ein Betriebsergebnis von 48.200,00 € bei Fixkosten von 61.300,00 €. Wie hoch war der Deckungsbeitrag?",
 f"{eur(48200 + 61300)}",
 "Betriebsergebnis = Deckungsbeitrag − Fixkosten, also Deckungsbeitrag = Betriebsergebnis + Fixkosten = 48.200 + 61.300 = " + eur(48200 + 61300) + ".",
 "Aufgabentyp aus S23 2.4")

# 37 Netto-Umsatzanteil
st37, p37, ges37 = 320, 89.25, 95200
add("umsatzanteil", "Rechnen: Anteil am Netto-Umsatz",
 "Von einer Hose wurden 320 Stück zu 89,25 € brutto verkauft. Der Brutto-Umsatz der ganzen Produktgruppe betrug 95.200,00 €. Wie viel Prozent trugen die Hosen zum Netto-Umsatz bei?",
 f"{pct(st37 * p37 / ges37 * 100)}",
 f"Hosen netto: 320 × 89,25 ÷ 1,19 = {eur(st37 * p37 / 1.19)}. Gruppe netto: 95.200 ÷ 1,19 = {eur(ges37 / 1.19)}. Anteil: {pct(st37 * p37 / ges37 * 100)}. Da beide Werte denselben Steuersatz haben, ergibt der Anteil brutto dasselbe.",
 "Aufgabentyp aus S23 4.3")

# 38 Fulfillment Lagerkosten
l38, b38, h38, preis38, n38 = .60, .40, .25, .55, 50
vol38 = l38 * b38 * h38
add("lagerkosten", "Rechnen: Lagerkosten beim Fulfillment",
 "Ein Zelt ist verpackt 60 × 40 × 25 cm groß. Der Dienstleister berechnet 0,55 € pro Kubikmeter und Tag. Wie hoch sind die täglichen Lagerkosten für 50 Zelte?",
 f"{eur(r2(vol38 * n38 * preis38))}",
 f"Volumen je Zelt: 0,60 × 0,40 × 0,25 = {num(vol38, 3)} m³. 50 Zelte: {num(vol38 * n38, 2)} m³ × 0,55 € = {eur(vol38 * n38 * preis38)}. Zentimeter vorher in Meter umrechnen!",
 "Aufgabentyp aus W25 1.2")

# 39 Rohertrag + Stück-DB Marktplatz
br39, ep39, prov39, verp39, vers39, menge39, ads39 = 59.99, 24.10, .15, 1.60, 4.80, 150, 25 * 30
net39 = br39 / 1.19; roh39 = net39 - ep39; pv39 = br39 * prov39; mk39 = ads39 / menge39
sdb39 = net39 - ep39 - pv39 - verp39 - vers39 - mk39
add("marktplatz-db", "Rechnen: Stückdeckungsbeitrag auf dem Marktplatz",
 "Rucksack: 59,99 € brutto (19 % USt), Einstandspreis 24,10 € netto. Marktplatzprovision 15 % vom Zahlbetrag (brutto), Verpackung 1,60 €, Versand 4,80 € je Stück. Ads-Budget 25,00 € pro Tag (30 Tage), geplanter Absatz 150 Stück pro Monat. Wie hoch sind Warenrohertrag und Stückdeckungsbeitrag?",
 f"Rohertrag {eur(r2(roh39))} je Stück ({eur(r2(roh39) * menge39)} pro Monat); Stück-DB {eur(r2(sdb39))}.",
 f"Netto: 59,99 ÷ 1,19 = {eur(net39)}; Rohertrag: − 24,10 = {eur(roh39)}. Provision: 59,99 × 15 % = {eur(pv39)}. Marketing je Stück: 25 × 30 ÷ 150 = {eur(mk39)}. "
 f"Stück-DB: {num(net39)} − 24,10 − {num(pv39)} − 1,60 − 4,80 − {num(mk39)} = {eur(sdb39)}. "
 + ("Positiver DB: Der Kanal trägt zu den Fixkosten bei." if sdb39 > 0 else "Negativer DB: Jeder Verkauf erhöht den Verlust – Preis, Ads-Budget oder Konditionen müssen angepasst werden."),
 "Aufgabentyp aus W25 4.1")

# 40 B2B Mengenrabatt
br40, st40, r40 = 107.10, 8, .04
add("b2b-netto", "Rechnen: Nettobetrag mit Mengenrabatt",
 "Ein Gartenbaubetrieb bestellt 8 Funktionshosen; der Shop zeigt 107,10 € brutto je Stück. Ab 5 Stück gibt es 4 % Mengenrabatt. Wie hoch ist der Nettobetrag der Rechnung?",
 f"{eur(br40 / 1.19 * st40 * (1 - r40))}",
 f"Netto je Stück: 107,10 ÷ 1,19 = {eur(br40 / 1.19)}; × 8 = {eur(br40 / 1.19 * st40)}; − 4 % Rabatt = {eur(br40 / 1.19 * st40 * (1 - r40))}. Darauf kommen 19 % USt für den Rechnungsendbetrag.",
 "Aufgabentyp aus S22 2.6")
