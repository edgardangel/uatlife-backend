const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Ruta para obtener las paradas de las facultades (FIT, FADU, etc)
router.get('/paradas', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM paradas_autobus ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener paradas: " + err.message });
  }
});

module.exports = router;
