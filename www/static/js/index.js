$(document).ready(function(){
   /*
    $("#hide").on('click', function() {
            $("#element").hide();
            return false;
    });
 
    $("#show").on('click', function() {
        $("#element").show();
        return false;
    });

	$('#alternar').click(function(){
		$('#prueba').toggle(

			// Primer click
	        function(e){ 
	            $('#alternar').slideDown();
	            $(this).text('Ocultar respuesta');
	            e.preventDefault();
	        }, // Separamos las dos funciones con una coma
	      
	        // Segundo click
	        function(e){ 
	            $('#alternar').slideUp();
	            $(this).text('Ver respuesta');
	            e.preventDefault();
	        }

		);
	});
	*/

	 $('#alternar-panel-oculto').toggle( 
 
        /* 
            Primer click.
            Función que descubre un panel oculto
            y cambia el texto del botón.
        */
        function(e){ 
            $('#panel-oculto').slideDown();
            $(this).text('Cerrar el panel');
            e.preventDefault();
        }, // Separamos las dos funciones con una coma
     
        /* 
            Segundo click.
            Función que oculta el panel
            y vuelve a cambiar el texto del botón.
        */
        function(e){ 
            $('#panel-oculto').slideUp();
            $(this).text('Mostrar el panel oculto');
            e.preventDefault();
        }
 
    );


	 $('#alternar-panel-oculto').toggle( 
 
        /* 
            Primer click.
            Función que descubre un panel oculto
            y cambia el texto del botón.
        */
        function(e){ 
            $('#panel-oculto').slideDown();
            $(this).text('Cerrar el panel');
            e.preventDefault();
        }, // Separamos las dos funciones con una coma
     
        /* 
            Segundo click.
            Función que oculta el panel
            y vuelve a cambiar el texto del botón.
        */
        function(e){ 
            $('#panel-oculto').slideUp();
            $(this).text('Mostrar el panel oculto');
            e.preventDefault();
        }
 
    );

});