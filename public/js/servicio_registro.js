'use strict'

let registrar_institucion = (pcedula, pnombre, pnombre_comercial, panio_funadacion, pgrado, pclase, pgenero,
    pespecialidad, prefencia_historica, pprovincia, pcanton, pdistrito,
    pdireccion, purl_map, ptelefono, pfax, pweb, pfacebook, ptwitter, pinstagram, purl_archivo) =>{

    

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_institucion",
        method: "POST",
        data: {
            cedula: pcedula,
            nombre: pnombre,
            nombre_comercial: pnombre_comercial,
            anio_funadacion: panio_funadacion,
            grado: pgrado,
            clase: pclase,
            genero: pgenero,
            especialidad: pespecialidad,
            refencia_historica: prefencia_historica,
            provincia: pprovincia,
            canton: pcanton,
            distrito: pdistrito,
            direccion: pdireccion,
            url_map: purl_map,
            telefono: ptelefono,
            fax: pfax,
            web: pweb,
            facebook: pfacebook,
            twitter: ptwitter,
            instagram: pinstagram,
            url_archivo: purl_archivo
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function (msg) {

        swal.fire({
            type: 'success',
            title: 'Solicitud enviada',
            text: 'se ha enviado una solicitud exitosamente'
        });
    });
};



