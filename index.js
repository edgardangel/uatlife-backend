const express = require('express');
const { Pool } = require('pg'); // Librería para conectar con Postgres
const app = express();
const port = process.env.PORT || 3000;

// Configuración de la conexión (Dokploy te da estos datos en la pestaña 'Environment')
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get('/', async (req, res) => {
  try {
    // Probamos una consulta simple a la tabla de paradas que creamos
    const result = await pool.query('SELECT * FROM paradas_autobus');
    res.json({
      message: "¡Bienvenido a la API de UATLife!",
      facultades_registradas: result.rows.length
    });
  } catch (err) {
    res.status(500).send("Error al conectar con la base de datos: " + err.message);
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});