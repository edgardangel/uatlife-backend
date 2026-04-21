const express = require('express');
const busRoutes = require('./src/routes/busRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para leer JSON
app.use(express.json());

// Vincular las rutas
app.use('/api/bus', busRoutes);

app.get('/', (req, res) => {
  res.send('API de UATLife corriendo... 🐆');
});

app.listen(port, () => {
  console.log(`🚀 Servidor listo en http://localhost:${port}`);
});
