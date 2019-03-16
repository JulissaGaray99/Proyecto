'use strict';
const modelo_util_institucino = require('./utiles_institucion.model');

module.exports.registrar = (req, res) =>{
  let nuevo_util_institucion = new modelo_util_institucino(
    {
      util : req.body.util,
      descripcion : req.body.descripcion,
      cantidad : req.body.cantidad,
      nivel : req.body.nivel
    }
  );
  nuevo_util_institucion.save(function(error){
    if (error) {
      res.json(
        {
          success : false,
          msj : `No se pudo registrar el útil, ocurriò el siguiente erro ${error}`
        }
      );
    } else {
      res.json(
        {
          success : true,
          msj : `Se registró  satisfactoriamente el útil`
        }
      );
    }
  });
};

module.exports.listar_todos = (req, res) =>{
  modelo_util_institucino.find().then(
    function(utiles){
      if(utiles.length > 0){
        res.json(
          {
            success: true,
            utiles: utiles
          }
        )
      }else{
        res.json(
          {
            success: false,
            utiles: 'No se encontraron utiles'
          }
        )
      }
    }
  )
};
