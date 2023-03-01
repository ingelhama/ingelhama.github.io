
//Con click en boton1 muestra contenido

document.getElementById ("botonhobbies").onclick = function(){ 

    console.log("Capturamos el evento click en hobbies"); 

    document.getElementById("hobbies1").innerHTML="Leer"; 
    document.getElementById("hobbies2").innerHTML="Escuchar música";
    document.getElementById("hobbies3").innerHTML="Tocar la guitarra";
    document.getElementById("hobbies4").innerHTML="Conocer pueblos";
    document.getElementById("hobbies5").innerHTML="Aprender idiomas";


} 


//Con click en boton2 muestra contenido

document.getElementById ("botondeportes").onclick = function(){ 

    console.log("Capturamos el evento click en deportes"); 

    document.getElementById("deportes1").innerHTML="Natación"; 
    document.getElementById("deportes2").innerHTML="Trecking";
    document.getElementById("deportes3").innerHTML="Ciclismo";


} 


