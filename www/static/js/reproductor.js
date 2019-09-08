$(document).ready(function(){

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
/* 
    Funcion que realiza el cambio de 
    texto del boton Mono/Stereo
*/
$("#example-one").on("click", function() {
  var el = $(this);
  el.text() == el.data("text-swap") 
    ? el.text(el.data("text-original")) 
    : el.text(el.data("text-swap"));
});
