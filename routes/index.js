const Productos = require('./productos.js');
const sesion = require('./sesion.js');
const checkout = require('./checkout.js');

function routerApi(app) {
  app.use('/api', Productos);
  app.use('/api', sesion);
  app.use('/api', checkout);
}

module.exports = routerApi;
