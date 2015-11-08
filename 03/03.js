$(document).ready(function(){
	$('#switcher-large').click(function(){
		$('body').removeClass().addClass('large');
	});

    $("#switcher-narrow").click(function(){
        $("body").removeClass().addClass("narrow");
    });

    $("#switcher-default")
        .addClass("selected")
        .click(function(){
        $("body").removeClass();
    });

    $("#switcher button").click(function(){
        $("#switcher button").removeClass("selected");
        $(this).addClass("selected");   // It is necessary for the brackets around 'this'.
    });
});
