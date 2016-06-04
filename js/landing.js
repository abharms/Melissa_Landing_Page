//mobile menu
$(".hamburger").click(function(){

	if ($(".hamburger").css("display") === "inline-block" ){
		$("#mobileMenu").fadeToggle();
	} else {
		$("#mobileMenu").remove();
	}
	
});

//hover styles on bottom photos
$(".box").on('mouseenter mouseleave', function() {
    $(this).find('.bottomPhotosHover').fadeToggle(100);
})
