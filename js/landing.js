//mobile menu
$(".hamburger").click(function(){

	if ($(".hamburger").css("display") === "inline-block" ){
		$("#mobileMenu").fadeToggle();
	} else {
		$("#mobileMenu").remove();
	}
	
});

