'use strict';
const modelo_rs = require('./redes_sociales.model');

module.exports.registrar = (req, res) =>{
  let nuevas_rs = new modelo_rs(
    {
      facebook : req.body.facebook,
      instagram : req.body.instagram,
      twitter: req.body.twitter,
      email : req.body.email,
      youtube : req.body.youtube
    }
  );
  nuevas_rs.save(function(error){
    if (error) {
      res.json(
        {
          success : false,
          msj : `No se han podido registrar las redes sociales, ha ocurrido el siguiente error ${error}`
        }
      );
    } else {
      res.json(
        {
          success : true,
          msj : `Se ha completado el registro de manera exitosa`
        }
      );
    }
  });
};
