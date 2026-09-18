#!/usr/bin/env bash
# ============================================================================
#  LAKON — perintah terbit untuk Cloudflare Pages
#
#  Tugasnya: menyalin HANYA berkas halaman gratis ke folder keluaran.
#  Dipasang di Cloudflare Pages sebagai: Build command = bash terbitkan.sh
#                                        Output directory = dist
#
#  Kalau ada yang tidak beres, skrip ini SENGAJA gagal dengan kode galat supaya
#  Cloudflare membatalkan penerbitan. Lebih baik situs tidak terbit daripada
#  isi berbayar tayang.
# ============================================================================
set -eu

KELUARAN="dist"

# Berkas halaman gratis. Daftar putih, disengaja eksplisit.
BERKAS="index.html beranda.css asesmen.css mesin-soal.css app.js styles.css
lakon_label.js lakon_content.js lakon_kelompok_gratis.js lakon_watak_gratis.js
lakon_paraga_gratis.js lakon_items_watak.js lakon_items_minat.js lakon_items_pick2.js
lakon_bank.js lakon_scoring.js lakon_assessment.js lakon_nuansa.js lakon_hexagon.js
lakon_report.js lakon_paraga_card_content.js lakon_paraga_card.js lakon_rating.js
lakon_tes.js lakon_hasil.js"

# Berkas yang TIDAK BOLEH ikut terbit, apa pun yang terjadi.
TERLARANG="analyst.html lakon_paraga_penuh.js lakon_peran_penuh.js lakon_kelompok_penuh.js
lakon_watak_penuh.js lakon_paraga.js lakon_jurusan.js lakon_jurusan_match.js lakon_industri.js
lakon_arah.js lakon_kelompok_content.js lakon_watak_content.js"

echo "== LAKON terbitkan situs =="
# pemicu build Cloudflare (16 Sep 2026)

rm -rf "$KELUARAN"
mkdir -p "$KELUARAN"

jumlah=0
for f in $BERKAS; do
  if [ ! -f "$f" ]; then
    echo "GAGAL: berkas wajib tidak ada di repo: $f"
    exit 1
  fi
  cp "$f" "$KELUARAN/"
  jumlah=$((jumlah + 1))
done

if [ -d images ]; then
  cp -r images "$KELUARAN/"
  echo "gambar: $(ls -1 images | wc -l) berkas"
fi
# Halaman tambahan (subfolder) — tes, privasi, syarat
for d in tes hasil privasi syarat; do
  if [ -f "$d/index.html" ]; then
    mkdir -p "$KELUARAN/$d"
    cp "$d/index.html" "$KELUARAN/$d/index.html"
    echo "halaman: /$d/"
  else
    echo "GAGAL: halaman tambahan hilang: $d/index.html"
    exit 1
  fi
done
cp images/lakon-favicon.png "$KELUARAN/favicon.ico"
touch "$KELUARAN/.nojekyll"

# Pemeriksa 1: berkas terlarang tidak boleh ada di keluaran
ketemu=""
for f in $TERLARANG; do
  if [ -e "$KELUARAN/$(basename "$f")" ]; then
    ketemu="$ketemu $f"
  fi
done
if [ -n "$ketemu" ]; then
  echo "GAGAL: berkas isi berbayar atau dasbor analis ikut terbit:$ketemu"
  exit 1
fi

# Pemeriksa 2: tidak boleh ada berkas berakhiran _penuh atau bernama analyst di keluaran
sisa=$(find "$KELUARAN" -maxdepth 1 \( -name "*_penuh*" -o -name "analyst.html" \) -print)
if [ -n "$sisa" ]; then
  echo "GAGAL: berkas terlarang ditemukan di keluaran:"
  echo "$sisa"
  exit 1
fi

# Pemeriksa 3: jumlah berkas keluaran harus sesuai harapan
nyata=$(find "$KELUARAN" -maxdepth 1 -type f | wc -l | tr -d ' ')
harap=$((jumlah + 2))
if [ "$nyata" -ne "$harap" ]; then
  echo "GAGAL: jumlah berkas keluaran $nyata, seharusnya $harap"
  find "$KELUARAN" -maxdepth 1 -type f | sort
  exit 1
fi

echo "== terbit: $jumlah berkas kode + gambar =="
find "$KELUARAN" -maxdepth 1 -type f | sort | sed 's|^|   |'
echo "== pemeriksa: bersih, tidak ada isi berbayar maupun analyst.html =="
