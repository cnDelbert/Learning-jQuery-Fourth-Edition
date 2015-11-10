$(document).ready(function() {
    $('#switcher-default').addClass('selected');
    $('#switcher button').click(function() {
        var bodyClass = this.id.split('-')[1];  // The id and css properties should be the same.
        $('body').removeClass().addClass(bodyClass);
        $('#switcher button').removeClass('selected');
        $(this).addClass('selected');
    });

    $('#switcher h3').click(function() {
        $('#switcher button').toggleClass('hidden');
    });

    //$("#switcher h3").hover(function(){
    //    $(this).addClass("hover");
    //},function(){
    //    $(this).removeClass("hover");
    //});

    $("#switcher").click(function(event){
        if(event.target == this){
            $("#switcher button").toggleClass("hidden");
        }
    });
});