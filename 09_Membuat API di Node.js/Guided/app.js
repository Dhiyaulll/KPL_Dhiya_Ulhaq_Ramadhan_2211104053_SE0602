const express = require('express');
const app = express();
const port = 3000;
 
app.use(express.json());
 
// Simpan data mahasiswa di array static
let mahasiswa = [
  { nama: "Muhamad Taufiq Hidayat", nim: "21102206" },
  { nama: "Febrilia Ananda", nim: "220220106" },
  { nama: "LeBron James", nim: "1302000003" }
];
 
// GET semua mahasiswa
app.get('/api/mahasiswa', (req, res) => {
  res.json(mahasiswa);
});
 
// GET mahasiswa berdasarkan index
app.get('/api/mahasiswa/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < mahasiswa.length) {
    res.json(mahasiswa[index]);
  } else {
    res.status(404).json({ message: 'Data tidak ditemukan' });
  }
});
 
// POST mahasiswa baru
app.post('/api/mahasiswa', (req, res) => {
  const { nama, nim } = req.body;
  mahasiswa.push({ nama, nim });
  res.status(201).json({ message: 'Data berhasil ditambahkan' });
});
 
// DELETE mahasiswa berdasarkan index
app.delete('/api/mahasiswa/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < mahasiswa.length) {
    mahasiswa.splice(index, 1);
    res.json({ message: 'Data berhasil dihapus' });
  } else {
    res.status(404).json({ message: 'Data tidak ditemukan' });
  }
});
 
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});