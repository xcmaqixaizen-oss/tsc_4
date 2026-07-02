"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
const PORT = 3000;
// Data sederhana buat contoh
const daftarBuku = [
    { judul: "Laskar Pelangi", penulis: "Andrea Hirata" },
    { judul: "Bumi Manusia", penulis: "Pramoedya Ananta Toer" },
    { judul: "Negeri 5 Menara", penulis: "Ahmad Fuadi" },
];
function halamanUtama() {
    return `
    <html>
      <head>
        <title>Web Simpel TS</title>
        <style>
          body { font-family: Arial; background: #1e1e2f; color: white; text-align: center; padding-top: 50px; }
          a { color: #4dd0e1; text-decoration: none; font-size: 18px; }
          h1 { color: #ffca28; }
        </style>
      </head>
      <body>
        <h1>🚀 Selamat Datang di Web TypeScript!</h1>
        <p>Ini adalah web server sederhana buatan TypeScript + Node.js</p>
        <p><a href="/buku">📚 Lihat Daftar Buku</a></p>
        <p><a href="/waktu">🕒 Cek Waktu Sekarang</a></p>
      </body>
    </html>
  `;
}
function halamanBuku() {
    const daftarHtml = daftarBuku
        .map((b) => `<li>${b.judul} — <i>${b.penulis}</i></li>`)
        .join("");
    return `
    <html>
      <head>
        <title>Daftar Buku</title>
        <style>
          body { font-family: Arial; background: #1e1e2f; color: white; text-align: center; padding-top: 50px; }
          a { color: #4dd0e1; }
          li { text-align: left; display: inline-block; margin: 5px 0; }
        </style>
      </head>
      <body>
        <h1>📚 Daftar Buku</h1>
        <ul>${daftarHtml}</ul>
        <p><a href="/">⬅️ Kembali</a></p>
      </body>
    </html>
  `;
}
function halamanWaktu() {
    const sekarang = new Date().toLocaleString("id-ID");
    return `
    <html>
      <head>
        <title>Waktu Sekarang</title>
        <style>
          body { font-family: Arial; background: #1e1e2f; color: white; text-align: center; padding-top: 50px; }
          a { color: #4dd0e1; }
        </style>
      </head>
      <body>
        <h1>🕒 Waktu Sekarang</h1>
        <p style="font-size: 24px;">${sekarang}</p>
        <p><a href="/">⬅️ Kembali</a></p>
      </body>
    </html>
  `;
}
// Buat server
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    if (req.url === "/") {
        res.end(halamanUtama());
    }
    else if (req.url === "/buku") {
        res.end(halamanBuku());
    }
    else if (req.url === "/waktu") {
        res.end(halamanWaktu());
    }
    else {
        res.statusCode = 404;
        res.end("<h1>404 - Halaman tidak ditemukan</h1>");
    }
});
server.listen(PORT, () => {
    console.log(`✅ Server jalan di http://localhost:${PORT}`);
});
//# sourceMappingURL=script.js.map