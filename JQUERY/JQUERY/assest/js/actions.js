// que es jquery? es una bibloteca de javaScripts, que nos permita interacturar con el DOM y HTML
// Quien utilizan jquery:
// Google, IBN Netflix, Microsoft y Duoc.cl

/*

    que nos permita realizar Jquery

    - Manipular el DOM/HTML
    - Manipular los estilos de CSS
    - Eventos de Html 
    - Efectos y animaciones
    - Ajax

*/

//$("Selector": etiquetas, *, ID, class, atributos).(eveto)

//probar si funciona

$(document).ready(function(){
    //alert("Funcion Jquery");

    //como esconder una seccion
    $("#parrafo1").hide();

    //Como agregar Css
    $("#parrafo2").css({"color":"tomato"});

    //Capturar evento
    $("#parrafo4").click(function(){
        alert("el clic funciona")
    });

    //doble click
    $("#parrafo5").dblclick(function(){
        alert("el clic funciona 2")
    });

    //mouseleave se activa el puntero al estar ensima
    $("#parrafo6").mouseleave(function(){
        alert("Compralo uuhhh")
    });

    $("#parrafo7").mousedown(function(){
        alert("Compralo uuhhh")
    });

    $("#parrafo8").mouseleave(function(){
        $(this).hide();
    });

    //Trabajar con Form

    $("#correo").focus(function(){
        $(this).css("background-color","silver")
    });

    //trabajer con blur
    $("#password").blur(function(){
        $(this).css("background-color","gold")
    });

});