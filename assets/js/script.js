$(document).ready(function() {                /*inicializa javascript*/
    $('[data-toggle="tooltip"]').tooltip()   /* implemta el tooltip en el footer*/
    

    $('.carousel').carousel({        /*funcion del carrusel */
        interval: true               /* se mueve automaticamente*/
    })

     

   

    $("p").dblclick(function(){     /*desaparece el contenido de las cartas con etiquetas de parrafo con un doble click*/ 

        $(this).hide(600,"linear");   /* funcion hide lento */
    })
})