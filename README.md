# Dua Kerajaan, Satu Takdir

Website storytelling bertema kerajaan romantis berdasarkan kisah Sang Pangeran dan Sang Putri.

## Struktur folder

```text
dua_kerajaan_satu_takdir/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── audio/
        └── lentera-dan-mahkota.wav
```

## Cara menjalankan di VS Code

1. Extract file ZIP.
2. Buka folder `dua_kerajaan_satu_takdir` di VS Code.
3. Pastikan extension **Live Server** sudah terpasang.
4. Klik kanan `index.html`.
5. Pilih **Open with Live Server**.

Website akan terbuka di browser.

## Fitur

- Halaman pembuka sinematik bertema kerajaan.
- Navigasi per bab.
- Progress membaca di bagian atas.
- Animasi muncul saat scroll.
- Efek parallax ringan.
- Musik ambient kerajaan orisinal.
- Shortcut tombol `M` untuk play/pause musik.
- Tampilan responsive untuk desktop dan HP.
- Cerita sudah dimasukkan langsung ke HTML.

## Mengganti judul

Cari pada `index.html`:

```html
<h1>
  <span>Dua Kerajaan,</span>
  <em>Satu Takdir</em>
</h1>
```

Lalu ganti sesuai judul yang diinginkan.

## Mengganti musik

Taruh file musik sendiri di folder:

```text
assets/audio/
```

Kemudian ganti:

```html
<source src="assets/audio/lentera-dan-mahkota.wav" type="audio/wav" />
```

Misalnya:

```html
<source src="assets/audio/musik-saya.mp3" type="audio/mpeg" />
```

## Catatan penting tentang autoplay

Browser seperti Chrome dan Edge biasanya melarang musik diputar otomatis sebelum pengguna melakukan interaksi. Karena itu musik diaktifkan melalui tombol **Musik Cerita** atau dengan tombol keyboard **M**.
