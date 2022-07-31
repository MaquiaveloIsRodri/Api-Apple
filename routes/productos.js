const express = require('express'); 
const router = express.Router(); 
const Productos =require('../services/productos.js');

const producto = new Productos();

router.get('/Productos', (req, res) => {
  res.send(producto.FindProductos());

}); 
module.exports = router;
