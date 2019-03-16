'use strict';
const institucionModel = require('./instituciones.model');


module.exports.registrar = (req, res) => {

    let nuevaInstitucion = new institucionModel({
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        nombre_comercial: req.body.nombre_comercial, 
        anio_funadacion: req.body.anio_funadacion,
        grado: req.body.grado,
        clase: req.body.clase,
        genero: req.body.genero,
        especialidad: req.body.especialidad,
        refencia_historica: req.body.refencia_historica,
        provincia: req.body.provincia,
        canton: req.body.canton,
        distrito: req.body.distrito,
        direccion: req.body.direccion,
        url_map: req.body.url_map,
        telefono: req.body.telefono,
        fax: req.body.fax,
        web: req.body.web,
        facebook: req.body.facebook,
        twitter: req.body.twitter,
        instagram: req.body.instagram,
        url_archivo: req.body.url_archivo
    });

    nuevaInstitucion.save(function(error){

        if (error) {
            
            res.json({
                success : false,
                msj : 'La institucion no pudo ser registrada: '+error
            });
        }else{
            res.json({
                success: true,
                
                msj: 'La institucion ha sido registrada de forma exitosa'
            });
            console.log("no se pudo registrar");
        }
    });

};
