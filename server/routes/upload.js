const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');

router.post('/', upload.single('pdf'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  
  res.json({ 
    message: 'File uploaded successfully',
    filename: req.file.filename
  });
});

module.exports = router;