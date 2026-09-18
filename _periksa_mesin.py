"""Membaca antarmuka mesin Lakon: apa yang dibuka tiap berkas dan bentuk butirnya."""
import re
from pathlib import Path

akar = Path(r"D:\Hermes Work\_studi\lakon-kerja")

for f in ["lakon_scoring.js", "lakon_report.js", "lakon_assessment.js", "lakon_bank.js"]:
    t = (akar / f).read_text(encoding="utf-8", errors="ignore")
    i = t.rfind("return {")
    print("=" * 60)
    print(f, "->", " ".join(t[i:i + 320].split())[:300] if i > 0 else "(tidak ada return objek)")

for f in ["lakon_items_watak.js", "lakon_items_minat.js", "lakon_items_pick2.js"]:
    t = (akar / f).read_text(encoding="utf-8", errors="ignore")
    m = re.search(r"LAKON_ITEMS_\w+ *= *\[(.*?)\n\]", t, re.S)
    isi = " ".join(m.group(1).split())[:300] if m else "?"
    print("=" * 60)
    print(f, "contoh butir:", isi)

t = (akar / "lakon_assessment.js").read_text(encoding="utf-8", errors="ignore")
print("=" * 60)
print("LakonAssessment fungsi:", sorted(set(re.findall(r"function ([a-zA-Z_]+)", t)))[:26])
t2 = (akar / "lakon_report.js").read_text(encoding="utf-8", errors="ignore")
print("LakonReport fungsi:", sorted(set(re.findall(r"function ([a-zA-Z_]+)", t2)))[:24])
