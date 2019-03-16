'use strict';
const input_nombre = document.querySelector('#txt_nombre');
const input_date = document.querySelector('#txt_fecha');
const input_time = document.querySelector('#txt_hora');
const boton_insertar = document.querySelector('#btn_insertar');








let validar = () => {
    let error = false;
    
    
    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error_input');
    } else {
        input_nombre.classList.remove('error_input');
    }
    


   
    if(input_date <= new Date() || input_date=="Invalid Date"){
        error = true;
        input_date.classList.add('error_input');

    }else {
        input_date.classList.remove('error_input');
    }
    




    if (input_time == 'Invalid Entry') {
        error = true;
        input_time.classList.add('error_input');
    } else {
        input_time.classList.remove('error_input');
    }
    
    
   
    return error;

};
    
    
   


let obtener_datos = () => {
     
  
    
    if (validar() == false) {
        // Se ejecuta solo si la validación no da error
        let nombre = input_nombre.value;
        let date =  new Date();
        let time = input_time.value;
        
        registrar_citas(nombre,date, time);

    } else {
        swal.fire({
            type: 'warning',
            title: 'La cita no fué registrada',
            text: 'Por favor revise los campos resaltados'
        });
    }
};

boton_insertar.addEventListener('click', obtener_datos);