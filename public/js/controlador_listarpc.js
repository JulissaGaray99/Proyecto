'use strict';
const tabla = document.querySelector('#tbl_pcomercial tbody');

let mostrar_datos = () => {
  let pcomercial = listar_pcomercial();

  for(let i = 0; i < pcomercial.length; i++){
    let fila = tabla.insertRow();

    fila.insertCell().innerHTML = pcomercial[i]['pcomercial'];

  };
};

mostrar_datos();
