# Prompt aset untuk JP Corps scroll world

Semua prompt ditulis dalam bahasa Inggris karena model gambar lebih patuh dengan bahasa Inggris.
Setiap prompt bisa dipakai di **Gemini** maupun **ChatGPT**.

**Pembagian tool yang disarankan**

- **Gemini (Plus):** jatahnya lebih longgar, jadi pakai untuk aset yang butuh banyak percobaan (fasad dan 6 gambar proyek). Kalau akun lu punya fitur video (Veo), pakai juga untuk video hero.
- **ChatGPT (free tier):** jatah gambar per hari terbatas, jadi pakai hanya untuk 1–2 aset yang paling penting, misalnya langit panorama.

**Aturan untuk semua aset**

- Jangan ada teks, logo, atau watermark di gambar. Teks dan judul ditambahkan oleh kode.
- Palet brand: putih `#f3f3f4`, indigo `#2a1077`, merah `#e8463f`, lavender `#e9e5f7`.
- Simpan dengan nama file persis seperti di tabel. Kirim filenya ke Claude, dan Claude yang memasang, merapikan sambungan tekstur, serta mengisi `assets/gen/manifest.json`.

| No | Aset | Nama file | Rasio | Dipakai untuk |
|---|---|---|---|---|
| 1 | Fasad gedung A | `facade-a.jpg` | 1:1 | Kulit gedung batu |
| 2 | Fasad gedung B | `facade-b.jpg` | 1:1 | Kulit gedung batu |
| 3 | Fasad gedung C | `facade-c.jpg` | 1:1 | Kulit gedung batu |
| 4 | Langit panorama | `sky.jpg` | 2:1 | Langit di belakang kota |
| 5–10 | Gambar proyek | `project-1.jpg` … `project-6.jpg` | 1:1 | Piringan karya |
| 11 | Video hero (opsional) | `hero.mp4` | 16:9 | Layar bulat di awal |

---

## 1–3. Fasad gedung (Gemini)

Buat tiga variasi dengan mengganti bagian **[VARIASI]**.

```
Seamless tileable architectural facade texture, perfectly flat orthographic front view,
no perspective, no sky, no ground, edge to edge. A section of a modern office building
exactly 4 floors tall and 4 window bays wide, evenly spaced. [VARIASI].
Soft even daylight, no harsh shadows. Palette: warm white #f3f3f4 surfaces, deep indigo
#2a1077 tinted glass, a few windows glowing coral red #e8463f. Clean, minimal, premium
architecture photography look, high detail, sharp. No text, no logos, no people, no
watermark. Square 1:1, 2048x2048.
```

Isi **[VARIASI]** dengan:

- **A:** `White limestone panels with thin indigo window frames and slim horizontal floor bands`
- **B:** `Light grey precast concrete grid with deep-set square windows and vertical fins`
- **C:** `Pale lavender ceramic tiles with wide ribbon windows and slim metal mullions`

---

## 4. Langit panorama (ChatGPT)

```
Equirectangular 360 degree panorama of a calm, bright overcast sky, 2:1 aspect ratio,
seamless left and right edges. Very pale, almost white haze near the horizon (#f3f3f4),
fading to a soft lavender-white (#e9e5f7) higher up, with a few thin, delicate clouds and
a very faint warm coral (#e8463f) glow low on one side, like early morning. No ground, no
buildings, no sun disc, no birds, no text, no watermark. Smooth, clean, minimal, high
resolution 4096x2048.
```

Catatan: langitnya sengaja dibuat sangat pucat supaya menyatu dengan kabut putih di kejauhan.

---

## 5–10. Gambar proyek (Gemini)

Template umumnya:

```
Editorial architecture photograph for a B2B consulting portfolio. [SUBJEK].
Clean composition, generous negative space, subject centred so it still reads when cropped
into a circle. Bright soft daylight, muted palette of white, indigo #2a1077 and lavender
#e9e5f7 with one small coral red #e8463f accent. Premium, calm, realistic, 35mm lens,
shallow depth of field. No people's faces, no text, no logos, no watermark. Square 1:1,
2048x2048.
```

Isi **[SUBJEK]** sesuai proyek di halaman:

| File | Proyek | [SUBJEK] |
|---|---|---|
| `project-1.jpg` | Pusat distribusi regional | `A modern regional distribution warehouse with tall loading bays and neatly stacked pallets, seen from outside at a slight angle` |
| `project-2.jpg` | Jalur logistik antarpulau | `A cargo ship with containers crossing calm water between islands, seen from above` |
| `project-3.jpg` | Sistem antrean pelanggan | `A clean, bright customer service hall with a digital queue display and orderly waiting seats, empty, no screens showing readable text` |
| `project-4.jpg` | Restrukturisasi kantor cabang | `A minimal branch office interior being reorganised, open desks, glass partitions, morning light` |
| `project-5.jpg` | Pemantauan armada kota | `A fleet of white delivery vans parked in a tidy row in a city depot, seen from a high angle` |
| `project-6.jpg` | Migrasi pusat data | `A clean data centre aisle with server racks and indigo status lights, symmetrical perspective` |

Kalau nanti judul proyek diganti dengan proyek asli JP Corps, ganti juga **[SUBJEK]**-nya. Lebih bagus lagi kalau pakai foto asli dari proyeknya.

---

## 11. Video hero (opsional, Gemini dengan Veo)

Video hero yang sekarang menampilkan merek "by.U". Kalau mau diganti:

```
8 second seamless looping video, slow cinematic dolly forward through a calm, minimal
modern city at early morning, white and pale lavender buildings, a few indigo glass towers,
soft haze, gentle coral red sunrise glow. Smooth steady camera, no people, no cars moving
fast, no text, no logos, no watermark. 16:9, 1080p, muted.
```

---

## Setelah gambar jadi

1. Simpan dengan nama file di tabel.
2. Kirim semuanya ke Claude (upload di chat).
3. Claude akan:
   - membuat fasad benar-benar menyambung di semua sisi (AI sering tidak sempurna di sambungan),
   - mengecilkan ukuran file supaya halaman tetap cepat,
   - memasukkannya ke `assets/gen/`, mengisi `manifest.json`, lalu push.

Kode sudah siap: begitu file terdaftar di `manifest.json`, dunia 3D otomatis memakainya.
Kalau ada yang belum ada, dunia tetap pakai versi buatan kode.
