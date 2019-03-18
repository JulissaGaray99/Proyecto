'use strict';

let registrar_rs = (pfacebook, pinstagram, ptwitter, pemail, pyoutube) =>{
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_redes_sociales",
    method: "POST",
    data: {
      facebook : pfacebook,
      instagram: pinstagram,
      twitter : ptwitter,
      email : pemail,
      youtube : pyoutube
     },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json"
    });

    request.done(function( msg ) {
      console.log(msg);
      swal.fire({
        type: 'success',
        title: 'Registro realizado satisfactoriamente',
        text: `Se han registrado las siguientes direcciones de corro ${pfacebook} ${pinstagram} ${ptwitter} ${pemail} ${pyoutube}`
      });
    });

    request.fail(function( jqXHR, textStatus ) {

    });
};
