'use strict';
const express = require('express');
const router = express.Router();
const api_registrar_rs = require('./redes_sociales.api');

router.route('/registrar_redes_sociales')
  .post(
    function(req, res){
      api_registrar_rs.registrar(req,res)
    }
  );

  module.exports = router;
