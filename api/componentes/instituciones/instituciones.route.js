'use strict';
const express = require('express');
const router = express.Router();
const institucionesApi = require('./institucion.api');

router.route('/registrar_institucion')
    .post(
    function (req, res) {
        institucionesApi.registrar(req, res)
    });

module.exports = router; 