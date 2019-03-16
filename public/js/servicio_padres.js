let registrar_padres = (pnombre,pprimer_apellido,psegundo_apellido,pidentificacion,pnacionalidad,pdistrito,pcanton,pprovincia,pcantidad_de_hijos,pcorreo) =>{
    let request = $.ajax({
      url: "http://localhost:4000/api/registrar_padres_familia",
      method: "POST",
      data: {
        nombre:pnombre,
        primer_apellido:pprimer_apellido,
        segundo_apellido:psegundo_apellido,
        identificacion:pidentificacion,
        nacionalidad:pnacionalidad,
        distrito:pdistrito,
        canton:pcanton,
        provincia:pprovincia,
        cantidad_de_hijos:pcantidad_de_hijos,
        correo:pcorreo
  
       },
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: "json"
      });
  
      request.done(function( msg ) {
  
        
      });
  
      request.fail(function( jqXHR, textStatus ) {
  
      });
  };

  let listar_padres=()=>{
    let lista_padre=[];
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_padres_familia",
        method: "GET",
        data: {
    
         },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async:false
        });
    
        request.done(function(res) {
        lista_padre=res.padres;
          
        });
    
        request.fail(function( jqXHR, textStatus ) {
    
        });
        return lista_padre;
  }