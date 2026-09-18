/* Uji cepat mesin Lakon di Node: pastikan penilaian masih jalan setelah perubahan,
   dan lihat bentuk objek hasil (dipakai halaman /hasil/). */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const akar = path.join(__dirname);
const berkas = ['lakon_items_watak.js', 'lakon_items_minat.js', 'lakon_items_pick2.js',
  'lakon_bank.js', 'lakon_scoring.js'];
const konteks = { console, Math, JSON };
vm.createContext(konteks);
for (const b of berkas) {
  vm.runInContext(fs.readFileSync(path.join(akar, b), 'utf8'), konteks, { filename: b });
}
const { LakonBank, LakonScoring, LAKON_ITEMS_WATAK, LAKON_ITEMS_MINAT, LAKON_ITEMS_PICK2 } = konteks;
const bank = LakonBank.build();
console.log('bank:', 'watak', bank.watak.length, 'minat', bank.minat.length,
  'pick2', bank.pick2.length, 'validity', bank.validity.length);

const jawaban = { watak: {}, minat: {}, pick2: {}, validity: {}, meta: { durationSec: 700 } };
bank.watak.forEach((it, i) => { jawaban.watak[it.id] = it.flip ? 'b' : 'a'; });
bank.minat.forEach((it, i) => { jawaban.minat[it.id] = (it.reverse ? 2 : 5); });
bank.pick2.forEach((it, i) => { jawaban.pick2[it.id] = [it.opts[0].t, it.opts[1].t]; });
bank.validity.forEach((it) => { jawaban.validity[it.id] = it.expected; });

const hasil = LakonScoring.computeAll(bank, jawaban);
console.log('\nbentuk hasil (kunci tingkat atas):');
console.log(' ', Object.keys(hasil).join(', '));
console.log('\nnilai penting:');
for (const k of ['paragaId', 'paraga', 'nama', 'kelompok1', 'kelompok2', 'watak', 'tagline', 'total', 'zonа', 'zona', 'selisih', 'kualitas']) {
  if (typeof hasil[k] !== 'undefined') console.log('  ' + k + ' =', JSON.stringify(hasil[k]).slice(0, 120));
}
console.log('\ncontoh isi mentah (dipotong 700 huruf):');
console.log(JSON.stringify(hasil).slice(0, 700));
