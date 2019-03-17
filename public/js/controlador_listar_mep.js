'use strict';

const tabla = document.querySelector('#tbl_utiles tbody');

let mostrar_utiles_mep = () =>{
  let utiles = listar_utiles_mep();

  for (let i = 0; i < utiles.length; i++) {
    let fila = tabla.insertRow();

    fila.insertCell().innerHTML = utiles[i]['util'];
    fila.insertCell().innerHTML = utiles[i]['descripcion'];
    fila.insertCell().innerHTML = utiles[i]['cantidad'];
    fila.insertCell().innerHTML = utiles[i]['nivel'];
  };
};

mostrar_utiles_mep();
