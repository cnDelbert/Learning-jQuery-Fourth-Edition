$(document).ready(function() {
    $('#switcher-default').addClass('selected');
    $('#switcher button').click(function(event) {
        var bodyClass = this.id.split('-')[1];  // The id and css properties should be the same.
        $('body').removeClass().addClass(bodyClass);
        $('#switcher button').removeClass('selected');
        $(this).addClass('selected');
        event.stopPropagation();
    });

    $('#switcher h3').click(function() {
        $('#switcher button').toggleClass('hidden');
    });

    // list 3-10
    //$("#switcher h3").hover(function(){
    //    $(this).addClass("hover");
    //},function(){
    //    $(this).removeClass("hover");
    //});

    //list 3-11
    //$("#switcher").click(function(event){
    //    if(event.target == this){
    //        $("#switcher button").toggleClass("hidden");
    //    }
    //});
});