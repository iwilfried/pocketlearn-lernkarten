"""Gemeinsame Angaben für die E-Commerce-Kartensets (Umschalter „Prüfungsbereich“).
Zählt die Karten beider Bereiche, damit jede Seite auch die Zahl des anderen Bereichs kennt."""
import os, importlib.util

HERE = os.path.dirname(os.path.abspath(__file__))
SETS = [
    {"label": "Geschäftsprozesse", "href": "/", "id": "ec-gp", "dir": "ec-gp",
     "parts": ["k1_vertrieb_recht_projekt", "k2_sortiment_kalkulation", "k3_marketing", "k4_controlling", "k5_rechnen"]},
    {"label": "Kundenkommunikation", "href": "/kk/", "id": "ec-kk", "dir": "kk",
     "parts": ["k1_vertrag", "k2_zahlung_retouren", "k3_kommunikation", "k4_kanaele", "k5_bindung_rechnen", "k6_bindung_beschwerde_plus"]},
]

def _count(s):
    n = 0
    for p in s["parts"]:
        spec = importlib.util.spec_from_file_location(s["dir"] + "_" + p, os.path.join(HERE, s["dir"], p + ".py"))
        m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m)
        n += len(m.CARDS)
    return n

def family(current_id):
    return [{"label": s["label"], "href": s["href"], "id": s["id"], "n": _count(s), **({"current": True} if s["id"] == current_id else {})} for s in SETS]

def parts(set_id):
    return next(s["parts"] for s in SETS if s["id"] == set_id)
