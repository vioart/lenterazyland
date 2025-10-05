const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use('/files', express.static(path.join(__dirname, 'assets')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

// app.get('/berita', (req, res) => {
//   res.render('berita')
// })

app.get('/program', (req, res) => {
  res.render('program')
})

app.get('/download', (req, res) => {
  res.render('download')
})

app.get('/tentang', (req, res) => {
  res.render('tentang');
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
