'use strict';

const input_nombre = document.querySelector('#txt_nombre');
const input_primer_apellido = document.querySelector('#txt_primer_apellido');
const input_segundo_apellido = document.querySelector('#txt_segundo_apellido');
const input_identificacion = document.querySelector('#txt_identificacion');
const input_nacionalidad = document.querySelector('#txt_nacionalidad');
const input_distrito = document.querySelector('#txt_distrito');
const input_canton= document.querySelector('#txt_canton');
const input_provincia = document.querySelector('#txt_provincia');
const input_cantidad_de_hijos = document.querySelector('#txt_cantidad_de_hijos');
const input_correo = document.querySelector('#txt_correo');
const boton_enviar = document.querySelector('#btn_registrar');

let validar=()=>{
    let error=false;
    
    if(input_nombre.value ==''){
        error = true;
        input_nombre.classList.add('error_input');
    }else{
        input_nombre.classList.remove('error_input');     
    }
    if(input_primer_apellido.value ==''){
        error = true;
        input_primer_apellido.classList.add('error_input');
    }else{
        input_primer_apellido.classList.remove('error_input');     
    }
    if(input_segundo_apellido.value ==''){
        error = true;
        input_segundo_apellido.classList.add('error_input');
    }else{
        input_segundo_apellido.classList.remove('error_input');     
    }
    if(input_identificacion.value ==''){
        error = true;
        input_identificacion.classList.add('error_input');
    }else{
        input_identificacion.classList.remove('error_input');     
    }
    if(input_nacionalidad.value ==''){
        error = true;
        input_nacionalidad.classList.add('error_input');
    }else{
        input_nacionalidad.classList.remove('error_input');     
    }
    if(input_distrito.value ==''){
        error = true;
        input_distrito.classList.add('error_input');
    }else{
        input_distrito.classList.remove('error_input');     
    }
    if(input_canton.value ==''){
        error = true;
        input_canton.classList.add('error_input');
    }else{
        input_canton.classList.remove('error_input');     
    }
    if(input_provincia.value ==''){
        error = true;
        input_provincia.classList.add('error_input');
    }else{
        input_provincia.classList.remove('error_input');     
    }
    if(input_cantidad_de_hijos.value ==''){
        error = true;
        input_cantidad_de_hijos.classList.add('error_input');
    }else{
        input_cantidad_de_hijos.classList.remove('error_input');     
    }
    if(input_correo.value ==''){
        error = true;
        input_correo.classList.add('error_input');
    }else{
        input_correo.classList.remove('error_input');     
    }

    return error;
};

let mostrar_datos=()=> {
    if (validar()==false) {
        let nombre = input_nombre.value;
        let primer_apellido=input_primer_apellido.value;
        let segundo_apellido=input_segundo_apellido.value;
        let identificacion = input_identificacion.value;
        let nacionalidad = input_nacionalidad.value;
        let distrito = input_distrito.value;
        let canton = input_canton.value;
        let provincia = input_provincia.value;
        let cantidad_de_hijos = input_cantidad_de_hijos.value;
        let correo = input_correo.value;
    
        obtenerDatos();

        swal.fire({
            type: 'success',
            title: 'El registro se correctamente',
            text: `El registro se hiso correctamente `
          });
    }else {
        swal.fire({
            type: 'warning',
            title: 'No se completo el registro',
            text: 'Por favor revise los campos resaltados'
        });  
    }
};

boton_enviar.addEventListener('click', mostrar_datos);
function obtenerDatos(){
    let nombre = input_nombre.value;
    let primer_apellido=input_primer_apellido.value;
    let segundo_apellido=input_segundo_apellido.value;
    let identificacion = Number (input_identificacion.value);
    let nacionalidad = input_nacionalidad.value;
    let distrito = input_distrito.value;
    let canton = input_canton.value;
    let provincia = input_provincia.value;
    let cantidad_de_hijos = Number(input_cantidad_de_hijos.value);
    let correo = input_correo.value;

    registrar_padres(nombre,primer_apellido,segundo_apellido,identificacion,nacionalidad,distrito,canton,provincia,cantidad_de_hijos,correo)
}