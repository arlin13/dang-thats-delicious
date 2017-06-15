const ex = require('express');
const rutas = ex.Router();

rutas.get('/', (req, res) => {
  res.send('Rutas de arlin');
});

module.exports = rutas;
