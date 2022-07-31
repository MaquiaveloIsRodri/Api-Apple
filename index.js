const { json } = require('express');
const express = require('express');
const app = express();
const cors = require('cors');
const routerApi = require('./routes');


app.use(json());
app.use(cors());
app.use(express.static('public'));

routerApi(app);
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
