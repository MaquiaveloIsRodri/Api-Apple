require('dotenv').config();
class Session{
    constructor() {}

    validacion(correo,contraseña){
      const validacion = correo === "NestorWoll@gmail.com" && contraseña ===18091996 ? true : false;
      return validacion;
    } 
}
module.exports = Session;
