$(document).ready(function(){

	/*$('#cambio_texto').click(function() {
		valor =  $("#boton").attr("value");
	 	if ( valor.equals("Mostrar canciones") ) {
	    	//$(this).text( "Ocultar canciones" );
	    	 $("#boton").attr("value","Ocultar canciones");
	  	}else {
	    	$("#boton").attr("value","Mostrar canciones");
  		}
	}); 
*/
	$('#cambio_texto').click(function() {
		if ($(this).html() == "Mostrar canciones")
			$(this).html("Ocultar canciones");
		else
			$(this).html("Mostrar canciones")
	});
});