'use strict';
const modelo_registrar = require('./padres_familia.model')

module.exports.registrar = (req, res) => {
    let nuevo_registrar = new modelo_registrar(
        {
            nombre: req.body.nombre,
            primer_apellido:req.body.primer_apellido,
            segundo_apellido:req.body.segundo_apellido,
            identificacion: req.body.identificacion,
            nacionalidad: req.body.nacionalidad,
            distrito: req.body.distrito,
            canton: req.body.canton,
            provincia: req.body.provincia,
            cantidad_de_hijos: req.body.cantidad_de_hijos,
            correo: req.body.correo

        }
    );
    nuevo_registrar.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar el padre, ocurrió el siguiente error ${error}`
                }
            );

        } else {
            res.json(
                {
                    success: true,
                    msg: `se realizó correctamente el registro`
                }
            );
        }
    })
};
module.exports.listar_todos = (req, res) => {
    modelo_registrar.find().then(
        function (padres) {
            if (padres.length > 0) {
                res.json( 
                    {
                        success: true,
                        padres: padres
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        comentarios: 'No se encontraron registros'
                    }
                )
            }
        }
    )
};
