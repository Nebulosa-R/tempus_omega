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
/*variables utilizadas para contadores*/
var count_click_random=0;
var count_click_repeat=0;
/* 
    Funcion que realiza el cambio de 
    texto del boton Mono/Stereo
*/
function functionMonoStereo() {
  var x = document.getElementById("mybtn");
  if (x.innerHTML === "Mono") {
    x.innerHTML = "Stereo";
  } else {
    x.innerHTML = "Mono";
  }
} 
/* 
    Funcion que reproduce musica 
    (por ahora solo muestra un msje de alerta)
*/
function play(){
	//Swal.fire('Boton Play!')
    var music = document.getElementById("music");
    music.play();
} 
/* 
    Funcion que pausa una cancion
    (por ahora solo muestra un msje de alerta)
*/
function pause(){
	Swal.fire('Boton Pause!')
} 
/* 
    Funcion que detiene musica: comienza del inicio de la lista de canciones 
    (por ahora solo muestra un msje de alerta)
*/
function stop(){
	Swal.fire('Boton Stop!')
} 
/* 
    Funcion que cambia a la siguiente cancion
    (por ahora solo muestra un msje de alerta)
*/
function forward(){
	Swal.fire('Boton Siguiente cancion!')
} 
/* 
    Funcion que vuelve a la cancion anterior
    (por ahora solo muestra un msje de alerta)
*/
function backward(){
	Swal.fire('Boton cancion anterior!')
} 
/* 
    Funcion que selecciona canciones aleatorias
    (por ahora solo muestra un msje de alerta)
*/
function random(){
	if (count_click_random == 0){
		count_click_random+=1;
		Swal.fire('Boton canciones random activado!')
	}
	else{
		Swal.fire('Boton canciones random desactivado!')
		count_click_random=0;
	}
} 
/* 
    Funcion que repite una cancion
    (por ahora solo muestra un msje de alerta)
*/
function repeat(){
	if (count_click_repeat == 0){
		count_click_repeat+=1;
		Swal.fire('Repetir cancion activado!')
	}
	else{
		Swal.fire('Repetir cancion desactivado!')
		count_click_repeat=0;
	}
} 