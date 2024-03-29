'use strict';
const modelo_util_mep = require('./utiles_mep.model');

module.exports.registrar_utiles_mep = (req, res) =>{
  let nuevo_util_mep = new modelo_util_mep(
    {
      util : req.body.util,
      descripcion : req.body.descripcion,
      cantidad : req.body.cantidad,
      nivel : req.body.nivel
    }
  );
  nuevo_util_mep.save(function(error){
    if (error) {
      res.json(
        {
          success : false,
          msj : `No se pudo registrar el útil, ocurrió el siguiente error ${error}`
        }
      );
    } else {
      res.json(
        {
          success :true,
          msj : `Se ha registrado satisfactoriamente`
        }
      );
    }
  });
};

module.exports.listar_todos = (req, res) =>{
  modelo_util_mep.find().then(
    function(utiles){
      if (utiles.length > 0) {
        res.json(
          {
            success : true,
            utiles: utiles
          }
        )
      } else {
        res.json(
          {
            success : false,
            utiles: 'No se encontraron utiles'
          }
        )
      }
    }
  )
};
