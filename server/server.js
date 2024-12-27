const express = require('express');
const cors = require('cors');
const fs = require('fs');
const config = require('./config');
const uploadRoutes = require('./routes/upload');

const app = express();

// Create uploads directory if it doesn't exist
if (!fs.existsSync(config.uploadsDir)) {
  fs.mkdirSync(config.uploadsDir);
}

app.use(cors());
app.use(express.json());
app.use('/api/upload', uploadRoutes);
app.use('/uploads', express.static(config.uploadsDir));

app.listen(config.port, () => {
  console.log(`API Server running at http://localhost:${config.port}`);
});