'use strict'
const input_paginacomercial = document.querySelector('#txt_paginac');
let validar = () => {
    let error = false;

    if (input_paginacomercial.value == '') {
        error = true;
        input_paginacomercial.classList.add('error_input');
    } else {
        input_paginacomercial.classList.remove('error_input');
    }
return error;
};
let obtener_datos = () => {

    if (validar() == false) {
        let pagina_comercial = input_paginacomercial.value;
        registrar_paginacomercial(pagina_comercial);


    } else {
        swal.fire({
            type: 'warning',
            title: 'La pagina comercial no fue registrada',
            text: 'Por favor revise los campos resaltados'
        });
    }

};
btn_guardar.addEventListener('click', obtener_datos);
