$(document).ready(function(){
	$(".items_contenedor img").css("-webkit-filter" , "grayscale(100%) brightness(50%)");
	$(".items_contenedor").hover( 
		function(e){
			let ele = e.target;
			$(ele).css("-webkit-filter" , "grayscale(0%) brightness(100%)");
			$(ele).css("-moz-filter" , "grayscale(0%) brightness(100%)");
		},
		function(e){
			let ele = e.target;
			$(ele).css("-webkit-filter" , "grayscale(100%) brightness(50%)");
			$(ele).css("-moz-filter" , "grayscale(100%) brightness(50%)");
		}
	); 

	// HACER APARECER LA VISTA PROYECTO 

	const proyectos = [
		{
			id : 0,
			tituloP : "Proyecto Helado",
			descripcionP : "Este es el proyecto helado",
			stackP : ["Diseño web", "Desarrollo web", "Diseño de base de datos"],
			colores : ["tomato", "green", "red"]
		},
		{
			id : 1,
			tituloP : "Proyecto Argenis",
			descripcionP : "Este es el proyecto Argenis",
			stackP : ["Diseño web", "Desarrollo web", "Diseño de base de datos"],
			colores : ["orange", "#000", "blue"]
		},
		{
			id : 2,
			tituloP : "Proyecto Wiwi",
			descripcionP : "Este es el proyecto Wiwi",
			stackP : ["Diseño web", "Desarrollo web", "Diseño de base de datos"],
			colores : ["red", "pink", "#fff"]
		}

	];

	$(".items_contenedor span").on("click", function(e){
		let ele = e.target;
		let ids = ele.getAttribute('id');
		let id = parseInt(ids);
		console.log(id);

		let elementosP = proyectos.map( ele => ele);
		let EleP = elementosP.map( eleP => eleP);
		let eleF = EleP[id].id; 
		console.log(eleF);


	});



});