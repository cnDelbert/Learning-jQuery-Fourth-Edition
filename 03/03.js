$(document).ready(function(){
    $("#switcher button").click(function(){
        $("body").removeClass();    // The method removeClass should be first executed.
        $("#switcher button").removeClass("selected");
        $(this).addClass("selected");   // It is necessary for the brackets around 'this'.
    });

	$('#switcher-large').click(function(){
		$('body').addClass('large');
	});

    $("#switcher-narrow").click(function(){
        $("body").addClass("narrow");
    });

    $("#switcher-default").addClass("selected");

});
