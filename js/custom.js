$( document ).ready( function(){
	console.log("jQuery linked")

	$( "#click-close-sub").hide();
	$( "#click-close-ab").hide();

	$( "#click-submit")
	.click( function() {
		$("#submit-page")
		.animate( { bottom:"-3vh" }, 350,"linear");
		$("#click-close-sub").show();
	});

	$( "#click-close-sub")
	.click( function() {
		$("#submit-page")
		.animate( { bottom:"-80vh" }, 200,"linear");
		$( "#click-close-sub").hide();
	});

	$( "#click-about")
	.click( function() {
		$("#about-page")
		.animate( { bottom:"-3vh" }, 350,"linear");
		$("#click-close-ab").show();
	});

	$( "#click-close-ab")
	.click( function() {
		$("#about-page")
		.animate( { bottom:"-80vh" }, 200,"linear");
		$( "#click-close-ab").hide();
	});

	$('.dropdown-toggle').dropdown()

})
