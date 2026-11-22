# ASA Pro Website

Website resmi **ASA Pro** — Holding company yang menaungi dua unit bisnis:

- **ASA Studio** → Fotografi Profesional  
- **ASA SPC** → Service Laptop, Komputer, HP + Jual Komponen & Jasa

## Preview

Website ini adalah single-page modern dengan desain dark theme profesional.

### Fitur

- Responsive (mobile, tablet, desktop)
- Navbar sticky dengan efek blur saat scroll
- Section khusus untuk masing-masing unit bisnis
- Form kontak yang langsung terhubung ke WhatsApp
- Animasi smooth saat scroll
- Siap di-deploy ke GitHub Pages

## Struktur File

```
asa-pro-website/
├── index.html      # Halaman utama
├── style.css       # Styling modern
├── script.js       # Interaktivitas & form handler
└── README.md       # Dokumentasi
```

## Cara Menjalankan Lokal

1. Clone repository ini
2. Buka `index.html` di browser, atau gunakan Live Server

## Deploy ke GitHub Pages

1. Buka repository di GitHub
2. Masuk ke **Settings → Pages**
3. Source: Deploy from a branch → pilih `main` → folder `/ (root)`
4. Simpan. Website akan tersedia di:
   `https://adehakimf12.github.io/asa-pro-website/`

## Yang Perlu Diubah

Sebelum go-live, silakan update data berikut di `index.html` dan `script.js`:

| Item | Lokasi |
|------|--------|
| Nomor WhatsApp | `script.js` → variabel `waNumber` |
| Alamat lengkap | Section Contact |
| Email | Section Contact & Footer |
| Nomor telepon | Section Contact & Footer |

## Teknologi

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript
- Google Fonts (Inter + Playfair Display)

---

© 2026 ASA Pro. All rights reserved.