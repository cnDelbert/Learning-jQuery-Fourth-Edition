$(document).ready(function() {
    $('#switcher-default').addClass('selected');
    $('#switcher').on('click.collapse', function(event) {
        if (!$(event.target).is('button')) {
            $('#switcher button').toggleClass('hidden');
        }
    });
    $('#switcher-narrow, #switcher-large').click(function() {
        $('#switcher').off('click.collapse');
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
