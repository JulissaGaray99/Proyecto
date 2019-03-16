'use strict';
const express= require('express');
const router = express.Router();
const api_padres_familia= require('./padres_familia.api');

router.route('/registrar_padres_familia')
.post(
 function(req,res){
     api_padres_familia.registrar(req,res);
 }
);
router.route('/listar_padres_familia')
.get(
    function(req,res){
       api_padres_familia.listar_todos(req,res); 
    }
);
module.exports = router;