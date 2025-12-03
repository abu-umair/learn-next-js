# install next js
## 00:18:59 : Memulai Project Baru: Membuat project Next.js baru.
1. install next js
```bash
npx create-next-app@latest
``` 


# mengenal struktur folder
## 00:25:51 Penjelasan Project: Membahas struktur folder dan file project Next.js.
- folder `.next` (jangan diganggu)
- folder `app` : folder aplikasi kita
- folder `node_modules` : tempat packages
- folder `public` : untuk gambar / site static (penyimpanan static assets bisa di akses secara public)



# React Server Components
## 00:41:43 React Server Components: Konsep dasar dan implementasinya di Next.js.




# Routing Dasar
## 01:05:05 Routing Dasar: Membuat route (halaman) baru di Next.js.




# Nested Routes
## 01:07:57 Nested Routes: Membuat route bersarang.



# Praktik Terbaik Interleaving
## 01:09:13 Praktik Terbaik Interleaving




# Menggunakan layout untuk berbagi UI antar halaman
## 01:14:55 Layouts: Menggunakan layout untuk berbagi UI antar halaman.



# Nested Layout
## 01:22:16 Nested Layout: Membuat layout bersarang untuk kasus yang lebih kompleks.



# Navigasi Antar Halaman
## 01:31:19 Navigasi Antar Halaman: Menggunakan komponen `Link`.


# Dynamic Routes (dengan param url)
## 01:36:45 Dynamic Routes: Membuat route dinamis dengan parameter URL.


# Route Groups
## 01:46:48 Route Groups: Mengelompokkan route tanpa mempengaruhi URL.
1. http://localhost:3000/user : user dibungkus dengan 'DashboardLayout' (karena didalam group yang sama dengan admin yang memiliki layout)
2. http://localhost:3000/admin : admin dibungkus dengan 'DashboardLayout' juga 
3. http://localhost:3000 : tidak dibungkus dengan 'DashboardLayout' (karena tidak didalam group yang sama) 



# Pembahasan Colocation
## 01:53:05 Pembahasan Colocation
1. cuma pembahasan saja
2. ketika di layout wajib menambahkan tag html dan body, diluar itu tidak


# Perbedaan Layout & Import Komponen
## 02:06:54 Perbedaan Layout & Import Komponen


# Styling di Next.js
## 02:07:48 Styling di Next.js: Opsi styling (CSS Modules, Tailwind, dll.).
1. berada di glolas.css


# Tailwind CSS
## 02:15:55 Tailwind CSS
1. menggunakan radix dan shadcn
2. jika bootstrap ada dari bootstrap dan juga dari reactrap


# Menggunakan Google Fonts
## 02:19:37 Font: Menggunakan Google Fonts dengan Next.js.
mengatur font di tutorial pada tailwind.config, sedangkan project ini tidak ada tailwin.config, jadi mengaturnya di globals.css



# Mengoptimalkan gambar dengan komponen `Image`
## 02:28:54 Komponen Image: Mengoptimalkan gambar dengan komponen `Image`.
- untuk convert image menjadi kecil : https://www.base64-image.de/ (kali ini digunakan utk loading blur)


# Mengambil data di server components
## 02:57:25 Data Fetching: Mengambil data di server components.
1. menggunakan pakage untuk membuat json
```bash
https://www.npmjs.com/package/json-server
```
2. menjalankan
```bash
npx json-server database.json

atau

npx json-server database.json -p 3001
```
3. Library zod.dev library untuk Typescript (tetapi tidak dibahas)


# Mengambil data di server components
## 03:10:48 Halaman Detail Dinamis.

# Data Fetching Level Komponen
## 03:16:58 Data Fetching Level Komponen


# Memahami Extended Fetch API
## 03:20:52 Memahami Extended Fetch API
1. mesipun 2x di fetch, tetapi tetap 1x saja difetch (keunggulan next)

notes:
1. jika tidak bisa menggunakan data fetching di sisi client componen, bisa menggunakan useEffect, swr, react query (cara seperti ini masih bisa digunakan)
2. sangat disarankan semua data di server component, agar di stream (ketika di client component bisa ngebaca value dengan use)
