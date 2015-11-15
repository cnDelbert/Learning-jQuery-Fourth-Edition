$(document).ready(function(){
    $("q").eq(1).hide();
    var $speech = $("div.speech");
    var defaultSize = $speech.css("fontSize");
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
        event.preventDefault();     // This line to prevent the change of URL
        $("q").eq(1).show();
        $(this).hide();
    });
});