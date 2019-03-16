'use stric';
let mongoose = require('mongoose');

let instucionesSchema = new mongoose.Schema({
    cedula: { type: String, unique: true, requerid: true },
    nombre: { type: String, requerid: true },
    nombre_comercial: { type: String, requerid: true },
    anio_funadacion: { type: String, requerid: false },//cambiar a tipo date 
    grado: { type: String, requerid: true },
    clase: { type: String, requerid: true },
    genero: { type: String, requerid: false },
    especialidad: { type: String, requerid: false },
    refencia_historica: { type: String, requerid: false },
    provincia: { type: String, requerid: true },
    canton: { type: String, requerid: true },
    distrito: { type: String, requerid: true },
    direccion: { type: String, requerid: true },
    url_map: { type: String, requerid: false },
    telefono: { type: String, requerid: true },
    fax: { type: String, requerid: false },
    web: { type: String, requerid: false },
    facebook: { type: String, requerid: false },
    twitter: { type: String, requerid: false },
    instagram: { type: String, requerid: false },
    url_archivo: { type: String, requerid: false }
});

module.exports = mongoose.model('Institucion', instucionesSchema);