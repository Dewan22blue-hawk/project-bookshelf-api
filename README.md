# Bookshelf API

Bookshelf API adalah aplikasi backend sederhana untuk mengelola buku. Aplikasi ini memungkinkan pengguna untuk menambahkan, membaca, memperbarui, dan menghapus buku dalam koleksi. API ini dibangun menggunakan Node.js dengan framework Hapi dan menggunakan library `nanoid` untuk menghasilkan ID unik.

## Fitur

- Menambahkan buku ke dalam koleksi
- Mengambil daftar semua buku
- Mengambil detail buku berdasarkan ID
- Memperbarui informasi buku
- Menghapus buku dari koleksi

## Prasyarat

Sebelum menjalankan aplikasi ini, pastikan kamu sudah menginstal Node.js dan npm (Node Package Manager) di komputer kamu.

- [Node.js](https://nodejs.org/en/) (v20.2.0)
- [npm](https://www.npmjs.com/)

## Instalasi

1. Masuk ke Folder file source code-nya.

```bash
cd bookshelf-api
```

2. Install dependencies dengan npm:

```bash
npm install
```

3. Install nanoid versi 3 untuk menghasilkan ID unik.

```bash
npm install nanoid@3
```

## Menjalankan Aplikasi

Setelah semua dependencies terpasang, jalankan server aplikasi menggunakan perintah berikut:

```bash
npm run start
```

## Endpoint API

_Berikut adalah daftar endpoint yang tersedia di API ini:_

1. Menambahkan Buku

- URL: /books
- Method: POST
- Request Body:

```bash
{
  "name": "Buku A",
  "year": 2021,
  "author": "Penulis A",
  "summary": "Ringkasan buku A",
  "publisher": "Penerbit A",
  "pageCount": 250,
  "readPage": 200,
  "reading": true
}

```

- Response Berhasil:

```bash
{
  "status": "success",
  "message": "Buku berhasil ditambahkan",
  "data": {
    "bookId": "nanoid_generated_id"
  }
}

```

2. Mendapatkan Daftar Semua Buku

- URL: /books
- Method: GET
- Response (berhasil):

```bash
{
  "status": "success",
  "data": {
    "books": [
      {
        "id": "nanoid_generated_id",
        "name": "Buku A",
        "publisher": "Publisher A"
      },
      {
        "id": "nanoid_generated_id",
        "name": "Buku B",
        "publisher": "Publisher B"
      }
    ]
  }
}

```

3. Mendapatkan Detail Buku Berdasarkan ID

- URL: /books/{bookId}
- Method: GET
- Response (Jika ID ditemukan):

```bash
{
  "status": "success",
  "data": {
    "book": {
      "id": "nanoid_generated_id",
      "name": "Buku A",
      "year": 2021,
      "author": "Author A",
      "summary": "Summary A",
      "publisher": "Publisher A",
      "pageCount": 200,
      "readPage": 150,
      "reading": true,
      "finished": false,
      "insertedAt": "2024-10-23T07:12:23.895Z",
      "updatedAt": "2024-10-23T07:12:23.895Z"
    }
  }
}

```

4. Memperbarui Buku

- URL: /books/{bookId}
- Method: PUT
- Request Body: Sama seperti menambahkan buku
- Response:

```bash
{
  "status": "success",
  "message": "Buku berhasil diperbarui"
}

```

5. Menghapus Buku

- URL: /books/{bookId}
- Method: DELETE
- Response:

```bash
{
  "status": "success",
  "message": "Buku berhasil dihapus"
}
```

## Teknologi yang Digunakan

- Node.js: Platform backend untuk menjalankan JavaScript di server.
- Hapi: Framework untuk membangun API di Node.js.
- nanoid: Library untuk menghasilkan ID unik.

Lisensi

### Penjelasan:

- README ini memberikan gambaran umum tentang API, cara menginstal dependencies, serta contoh penggunaan endpoint.
- Jangan lupa sesuaikan URL repository dan instruksi lainnya sesuai dengan proyekmu.
