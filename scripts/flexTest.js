

$(document).ready(function(){
	//* Connect
	$(".hover2").hover(function(){
		
		var flexHover = "0.55 1 55%";
		$(this).css("flex", flexHover);
		$(this).css("height", "77vh");
		$(".work").css("flex", "0.45 1 45%");
		$(".work").css("height", "57vh");
		$(".about").css("flex", "0.25 1 25%");
		$(".about").css("height", "43vh");
		$(".about").css("top", "-20vh");
		$(".logo").css("flex", "0 1 20%")
		$(".logo").css("margin-right","30vw");
		$(".logo").css("height", "20vh");
		$(".logo").css("top", "-20vh");		
		$(".community").css("height", "23vh");
		$(".community").css("top", "-20vh");
		$(".community").css("flex", "0.75 1 75%");
				

	}, function(){

		var flexUnhover = "0.4 1 40%";
		$(this).css("flex", flexUnhover);
		$(this).css("height", "60vh");
		$(".work").css("flex", "0.60 1 60%");
		$(".work").css("height", "40vh");
		$(".about").css("flex", "0.40 1 40%");
		$(".about").css("height", "60vh");
		$(".community").css("height", "40vh");
		$(".community").css("top", "-20vh");
		$(".community").css("flex", "0.60 1 60%");
		$(".logo").css("margin-right","0vw");

	});
	//* Work

	$(".hover1").hover(function(){
		
		var flexHover = "0.75 1 75%";
		$(this).css("flex", flexHover);
		$(this).css("height", "55vh");
		$(".connect").css("flex", "0.25 1 25%");
		$(".connect").css("height", "75vh");
		$(".about").css("flex", "0.55 1 55%");
		$(".about").css("height", "45vh");
		$(".about").css("top", "-20vh");
		$(".logo").css("flex", "0 1 20%")
		$(".logo").css("margin-left","30vw");
		$(".logo").css("height", "20vh");
		$(".logo").css("top", "-20vh");
		$(".community").css("height", "25vh");
		$(".community").css("top", "-20vh");
		$(".community").css("flex", ".45 1 45%");

	}, function(){
		

		var flexUnhover = "0.6 1 60%";
		$(this).css("flex", flexUnhover);
		$(this).css("height", "40vh");
		$(".connect").css("flex", "0.40 1 40%");
		$(".connect").css("height", "60vh");
		$(".about").css("flex", "0.40 1 0");
		$(".about").css("height", "60vh");
		$(".community").css("height", "40vh");
		$(".community").css("top", "-20vh");
		$(".community").css("flex", "0.60 1 0");
		$(".logo").css("margin-left","0vw");

	});

	//* Community ("Skills")

	$(".hover5").hover(function(){

		var flexHover = ".65 1 65%";
		$(this).css("flex", flexHover);
		$(this).css("height", "46vh");
		$(this).css("top", "-20vh");
		$(".connect").css("flex", ".45 1 45%");
		$(".connect").css("height", "54vh");
		$(".connect").css("position", "static");
		$(".about").css("flex", ".35 1 35%");
		$(".about").css("height", "66vh");
		$(".about").css("top", "-20vh");
		$(".logo").css("flex", "0 1 20%");
		$(".logo").css("top", "-20vh");
		$(".work").css("height", "34vh");
		$(".work").css("flex", "0.55 1 55%");
		$(".logo").css("margin-right","10vw");
		$(".logo").css("height", "20vh");
		$(".about").css("top", "-20vh");
		$(".community").css("top", "-20vh");

	}, function(){

		var flexUnhover = "0.60 1 60%";
		$(this).css("flex", flexUnhover);
		$(this).css("height", "40vh");
		$(".connect").css("flex", "0.40 1 40%");
		$(".connect").css("height", "60vh");
		$(".about").css("flex", "0.40 1 40%");
		$(".about").css("height", "60vh");
		$(".community").css("top", "-20vh");
		$(".logo").css("top", "-20vh")
		$(".work").css("flex", "0.60 1 60%");
		$(".work").css("height", "40vh");
		$(".logo").css("margin-right","0vw");

	});


	//* ABOUT
	$(".hover4").hover(function(){

		var flexHover = "0.55 1 55%";
		$(this).css("flex", flexHover);
		$(this).css("height", "77vh");
		$(".work").css("flex", "0.75 1 75%");
		$(".work").css("height", "23vh");
		$(".connect").css("flex", "0.25 1 25%");
		$(".connect").css("height", "43vh");
		$(".connect").css("position", "static");
		$(".logo").css("flex", "0 1 20%");
		$(".logo").css("margin-left","30vw");
		$(".logo").css("height", "20vh");
		$(".logo").css("top", "-20vh");
		$(".community").css("height", "57vh");
		$(".community").css("flex", "0.45 1 45%");
		$(".community").css("top", "-20vh");
		$(".about").css("top", "-20vh");
		$(".community").css("top", "-20vh");

	}, function(){

		var flexUnhover = "0.4 1 0%";
		$(this).css("flex", flexUnhover);
		$(this).css("height", "60vh");
		$(".work").css("flex", "0.60 1 60%");
		$(".work").css("height", "40vh");
		$(".connect").css("flex", "0.40 1 40%");
		$(".connect").css("height", "60vh");
		$(".community").css("height", "40vh");
		$(".community").css("top", "-20vh");
		$(".community").css("flex", "0.60 1 0");
		$(".community").css("top", "-20vh");
		$(".logo").css("margin-left","0vw");

	});

	//* LOGO
	$(".hover3").hover(function(){
		/*$(".logo").css("visibility", "hidden");*/
		var flexHover = "0 1 40%";
		$(".logo").css("flex", flexHover);
		$(".logo").css("z-index", "99");
		$(".logo").css("order", "1");
		$(".logo").css("height", "40vh");
		$(this).css("top","-40vh");
		$(".work").css("flex", "0.70 1 70%");
		$(".work").css("height", "30vh");
		$(".connect").css("flex", "0.30 1 30%");
		$(".connect").css("height", "70vh");
		$(".connect").css("position", "relative");
		$(".about").css("flex", "0.3 1 30%");
		$(".about").css("height", "70vh");
		$(".about").css("top", "-60vh");
		//*$(".about").css("top","0vh");
		$(".community").css("flex", "0.7 0 70%");
		$(".community").css("height", "30vh");
		$(".community").css("top", "-60vh");

	
	}, function(){
	
	/*	var flexUnhover = "0.2 1 0%";	
		$(".hidden-box").css("display", "none");
		$(this).css("flex", flexUnhover)
		$(this).css("height", "20vh");
		$(this).css("top","-20vh");
		$(this).css("order", "0");
		$(this).css("z-index", "99");
		$(".work").css("flex", "0.60 1 60%");
		$(".work").css("height", "40vh");
		$(".connect").css("flex", "0.40 1 40%");
		$(".connect").css("height", "60vh");
		$(".connect").css("position", "static");
		$(".community").css("height", "40vh");
		$(".community").css("top", "-20vh");
		$(".community").css("flex", "0.60 1 60%");
		$(".about").css("flex", "0.40 1 40%");
		$(".about").css("height", "60vh");
*/
	});

	/*$(".hidden-logo").hover(function(){
	/*	$(".hidden-logo").css("width", "40%");
		$(".hidden-logo").css("height", "40%");
		$(".work").css("flex", "0.30 1 30%");
		$(".work").css("height", "70vh");
		$(".connect").css("flex", "0.70 1 70%");
		$(".connect").css("height", "30vh");
		$(".about").css("flex", "0 1 70%");
		$(".about").css("height", "30vh");
		$(".about").css("top","0vh");
		$(".community").css("flex", "0.3 0 0");
		$(".community").css("height", "70vh");
		$(".community").css("top", "-30vh");
	}, function(){
		var flexUnhover = "0.2 1 0%";
		$(".hidden-logo").css("width", "20%");
		$(".hidden-logo").css("height", "20%");
		$(".work").css("flex", "0.60 1 60%");
		$(".work").css("height", "40vh");
		$(".connect").css("flex", "0.40 1 40%");
		$(".connect").css("height", "60vh");
		$(".community").css("height", "40vh");
		$(".community").css("top", "-20vh");
		$(".community").css("flex", "0.60 1 0");
		$(".about").css("flex", "0.40 1 0");
		$(".about").css("height", "60vh");
		$(".about").css("order", "inherit");
		$(".about").css("top", "-20vh");

	});*/


});