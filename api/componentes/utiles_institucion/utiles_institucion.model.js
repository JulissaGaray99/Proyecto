'use strict';
const mongoose = require('mongoose');

let schema_util_institucion = new mongoose.Schema(
  {
    util : {type : String, required : true},
    descripcion : {type : String, required : true},
    cantidad : {type : Number, required : true},
    nivel : {type : String, required : true}
  }
);

module.exports = mongoose.model('util_institucion', schema_util_institucion);
