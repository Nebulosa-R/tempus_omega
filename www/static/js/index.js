$(document).ready(function(){
	$('#cambio_texto').click(function() {
		if ($(this).html() == "Mostrar canciones")
			$(this).html("Ocultar canciones");
		else
			$(this).html("Mostrar canciones")
	});
});