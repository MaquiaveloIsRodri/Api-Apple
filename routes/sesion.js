const express = require('express'); 
const router = express.Router(); 
const Session = require('../services/Sesion.js');
const SessionValidate = new Session();

router.post('/sesion',async(req,res) =>{
  const { correo,contraseña} =req.body
  const password = parseInt(contraseña)
  const validacion = SessionValidate.validacion(correo,password);
  console.log(validacion);
  res.json(validacion);
  
})

  

module.exports = router;
