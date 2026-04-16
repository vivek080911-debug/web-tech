

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config(); 
const connectDB = require('./config/db'); 
const movieRoutes = require('./routes/movieRoutes');
const authRoutes = require('./routes/authRoutes');

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.use('/api/movies', movieRoutes);
app.use('/api/auth', authRoutes);

app.use('/movies', express.static(path.join(__dirname, 'movies')));


app.get('/stream/:filename', (req, res) => {
  const filePath = path.join(__dirname, 'movies', req.params.filename);

  if (!fs.existsSync(filePath)) {
    return res.status(404).send('Movie not found');
  }

  const stat = fs.statSync(filePath);
  const fileSize = stat.size;
  const range = req.headers.range;

  if (range) {
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    const chunksize = end - start + 1;
    const file = fs.createReadStream(filePath, { start, end });
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
    };

    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    };
    res.writeHead(200, head);
    fs.createReadStream(filePath).pipe(res);
  }
});

app.get('/', (req, res) => {
  res.send('🎬 Movie Backend Server (Express + MongoDB) is running!');
});

app.listen(PORT, () => {
  console.log(`✅ Server listening on port ${PORT}`);
});
