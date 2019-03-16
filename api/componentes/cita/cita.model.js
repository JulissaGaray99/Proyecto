'use strict'
const mongoose = require ('mongoose');

let schera_cita = new mongoose.Schema(
    {
        nombre : {type : String, required : true}, 
        date : {type : String, required : true}, 
        time : {type : String, required: true},
        
    }
);
module.exports = mongoose.model('cita', schera_cita); 