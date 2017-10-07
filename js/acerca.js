$(document).ready(function(){

	$(".abrir_menu").click(function(){
		$(".menu").addClass("checked");
	});
	$(".cerrar_menu").click(function(){
		$(".menu").toggleClass("checked");
	});

	function verificarTamano(){
        if ($(window).width() >= 1001) {
            let altura_menu = $(".menu").outerHeight(true);
            $(window).on("scroll", function(){
                if( $(window).scrollTop() > altura_menu ) {

                    $(".logotipo").css('top', '10px');
                    $(".logotipo").css('width', '200px');
                    $(".logotipo").css('position', 'fixed');

                    $(".menu").css('background', '#01579b');
                    $(".menu").css('paddingTop', '0px');
                }       
                else {

                    $(".logotipo").css('top', '25px');
                    $(".logotipo").css('width', '250px');
                    $(".logotipo").css('position', 'absolute');

                    $(".menu").css('background', 'transparent');    
                    $(".menu").css('paddingTop', '20px');   

                }   
            });
        }
    }

    verificarTamano();

    $(window).resize(function() {
        verificarTamano();
    });

// EFECTOS PARA LOS SKILL
let trigger = true;
$(window).on("scroll", function(){
	if(($(window).scrollTop() >= 780) && (trigger)){
		trigger = false;
		let rangos = document.getElementsByClassName('rangos');
		for(let rango of rangos){ 
				let elRango = rango;
				let idRango = rango.getAttribute('id');
				conteo(elRango, idRango);
		}
		function conteo(el, num) {
			var cont = 0;
			var id = setInterval(function(){
				el.innerHTML = cont + ' %';
				cont++;
				if(cont > num) {
					clearInterval(id);
				}
			}, 70);
		}
	}
});


});
