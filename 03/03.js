$(document).ready(function(){
	$('#switcher-large').click(function(){
		$('body').removeClass('narrow');
		$('body').addClass('large');
	});

    $("#switcher-narrow").click(function(){
        $("body").removeClass("large");
        $("body").addClass("narrow");
    });

    $("#switcher-default").click(function(){
        $("body").removeClass("large");
        $("body").removeClass("narrow");
    });
});
