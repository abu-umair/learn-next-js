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


# Membuat dan menggunakan server actions
## 03:38:48 Server Actions & Mutations: Membuat dan menggunakan server actions.
1. Server actions adl sebuah function JS asyncronuse nantinya funct tsb dieksekusi disisi server component, dan bisa dipanggil di client component maupun server component
2. bisa digunakan utk menghandle form selain itu juga bisa untk Event handler ke Onclick


# Form Validation 
## 03:51:01 Form Validation


# Penggunaan di Button 
## 03:57:53 Penggunaan di Button


# Passing Argumen
## 04:05:21 Passing Argumen


# Mengatur metadata (title, description, dll.) untuk SEO
## 04:08:05 Metadata: Mengatur metadata (title, description, dll.) untuk SEO.


# Favicon
## 04:16:58 Favicon


# Favicon
## 04:18:52 Loading UI & Streaming: Membuat loading state dan implementasi streaming.


# Membuat API endpoint di Next.js
## 04:30:07 Route Handlers: Membuat API endpoint di Next.js.
1. Bisa membuat endpoint di next js
ketika di buka endpoint : http://localhost:3000/api/user, maka menampilkan response seperti get api,

2. Bisa membuat POST endpoint di next js
test nya di postman dengan method POST

3. Bisa membuat Put dll endpoint di next js
test nya di postman dengan method PUT

4. mengambil data didalam table user
Enp: http://localhost:3000/api/user/1

5. mengambil data didalam table user menggunakan ID
Enp: http://localhost:3000/api/user/1
Enp: http://localhost:3000/api/user/2

6. mengambil dengan params
endp: http://localhost:3000/api/user?query=contoh

6. mengambil dengan params dengan POST
menjalankannya dipostman : pilih Body->raw-> isi:
{
    "name": "Rid",
    "username": "test"
}

endp: http://localhost:3000/api/user
hasilnya di terminal


# Middleware
## 04:42:55 Middleware
1. setiap url yang kita jalankan, ada console.log di terminal (artinya middleware dipanggil terus setiap url yang diakses)

2. menjalankan middleware hanya request /posts (http://localhost:3000/posts) saja (pattern matching)

3. metode patern yang sering digunakan (bagus juga untuk mengecek token, auth)
endp: http://localhost:3000/admin, baru muncul di terminal

4. middleware untuk redirect misal 404 dll


# Error Handling
## 04:54:36 Error Handling: Menangani error dengan `error.tsx` dan `not-found.tsx`.
1. membuat not found jika url yang diakses salah/tidak ada, misal:
http://localhost:3000/notasdds

2. jika diakses http://localhost:3000/posts/post-1, masih ada, tetapi jika: http://localhost:3000/posts/post-5 tidak ada, dan terlihat error

3. sengaja dibuat error, maka akan tampil errornya (menggunakan error handling), hanya pada http://localhost:3000/, sedangkan ditempat lain tidak

4. handling error untuk page post, menggunakan tekhnik 'https://nextjs.org/docs/app/getting-started/error-handling'

