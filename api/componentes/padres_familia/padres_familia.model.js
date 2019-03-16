'use strict';

//import { Mongoose } from "mongoose";

let mongoose = require('mongoose');

let schema_registrar = new mongoose.Schema(
    {
        nombre: { type: String, required: true },
        primer_apellido:{type:String,required:true},
        segundo_apellido:{type:String,required:true},
        identificacion: { type: Number, required: true },
        nacionalidad: { type: String, required: true },
        distrito: { type: String, required: true },
        canton: { type: String, required: true },
        provincia: { type: String, required: true },
        cantidad_de_hijos: { type: Number, required: true },
        correo: { type: String, required: true }
    }
);
module.exports = mongoose.model('registrar', schema_registrar);