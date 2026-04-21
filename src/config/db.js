const { Pool } = require('pg');

// Usamos la variable de entorno que ya configuraste en Dokploy
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on('connect', () => {
  console.log('✅ Conexión exitosa con PostgreSQL en Dokploy');
});

pool.on('error', (err) => {
  console.error('❌ Error inesperado en la base de datos', err);
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
