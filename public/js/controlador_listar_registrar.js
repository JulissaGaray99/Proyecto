'use strict';

const tabla = document.querySelector('#tbl_citas tbody');
let mostrar_datos = () => {
    let cita = listar_citas();
    for(let i =0; i<cita.length; i++){
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = cita[i]['nombre'];
   fila.insertCell().innerHTML = cita[i]['date'];
   fila.insertCell().innerHTML = cita[i]['time'];
   
};

};

mostrar_datos();