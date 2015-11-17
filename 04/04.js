$(document).ready(function(){
    var $firstPara = $('p').eq(1);
    var $speech = $("div.speech");
    var defaultSize = $speech.css("fontSize");

    $firstPara.hide();

    $("#switcher button").click(function(){
        var num = parseFloat($speech.css("fontSize"));
        switch(this.id){
            case "switcher-large":
                num *= 1.4;
                break;
            case "switcher-small":
                num /= 1.4;
                break;
            default:
                num = parseFloat(defaultSize);
        }
        $speech.css("fontSize", num + "px");
    });

    $("a.more").click(function(event){
        event.preventDefault();
        //$firstPara.slideToggle("slow");
        $firstPara.animate({height: 'toggle'}, 'slow');

        if($(this).text() == "read more"){
            $(this).text("read less");
        }else{
            $(this).text("read more");
        }
    });
});