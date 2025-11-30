# KaryaKayu - Website Custom Furniture

**KaryaKayu** adalah sebuah proyek website front-end responsif untuk layanan pembuatan furniture custom. Website ini memungkinkan pengguna untuk melakukan simulasi desain furniture, melihat estimasi harga secara real-time, menjelajahi katalog produk, dan mensimulasikan pengelolaan data produk (CRUD).

![Preview Website](img/tampilan-beranda.PNG)
)

---

## Fitur Utama

### 1. Interaktif Customizer (Price Calculator)
Fitur unggulan yang menggunakan **DOM Manipulation** dan **Event Handling**.
- User dapat memilih tipe furniture (Kursi, Sofa, Meja).
- Memilih jenis kayu (Jati, Mahoni, Pinus) dengan harga berbeda.
- Memilih warna finishing.
- **Hasil:** Harga total akan berubah secara otomatis (*real-time*) tanpa reload halaman, dan gambar preview akan menyesuaikan pilihan.

### 2. Katalog Produk & Navigasi
- **Menu Kategori:** Tampilan 3 kolom *portrait* yang elegan untuk Kitchen Set, Ruang Tamu, dan Kamar Tidur.
- **Smooth Scroll:** Navigasi halus saat berpindah antar bagian halaman.
- **Detail Produk:** Grid layout yang menampilkan gambar, nama, dan harga produk.

### 3. Admin Panel (Simulasi CRUD)
Fitur manajemen data sederhana menggunakan JavaScript Array (Client-Side).
- **Create:** Menambahkan produk baru (Nama, Harga, Gambar) ke dalam list.
- **Read:** Menampilkan daftar produk secara dinamis.
- **Update:** Mengedit nama dan harga produk yang sudah ada.
- **Delete:** Menghapus produk dari daftar.

### 4. Desain Responsif
- Tampilan menyesuaikan ukuran layar (Desktop, Tablet, dan Mobile).
- Menggunakan CSS Flexbox dan Grid System.
- Menu navigasi mobile (Hamburger menu conceptual).

---

## Teknologi yang Digunakan

* **HTML5:** Struktur semantik halaman.
* **CSS3:** Styling, CSS Variables, Flexbox, Grid, dan Animasi.
* **JavaScript (Vanilla):** Logika kalkulasi harga, manipulasi DOM, dan event handling.

---

## Struktur Folder

Pastikan struktur folder Anda seperti berikut agar kode berjalan lancar:

```text
/WebFurniture
│
├── index.html        # File utama HTML
├── style.css         # File styling CSS
├── script.js         # Logika JavaScript (Kalkulator & CRUD)
├── README.md         # Dokumentasi proyek
│
└── img/              # Folder penyimpanan gambar (Disarankan)
    ├── hero-bg.jpg
    ├── sofa-jati.jpg
    └── ...
