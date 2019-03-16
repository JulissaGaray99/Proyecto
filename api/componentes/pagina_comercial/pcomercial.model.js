'use strict';
const mongoose = require('mongoose');

let schema_pcomercial = new mongoose.Schema(
  {
    pcomercial : {type : String, required : true}

  }
);

module.exports = mongoose.model('pcomercial', schema_pcomercial);
