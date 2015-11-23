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
        $speech.animate({fontSize: num + "px"}, "slow");
    });

    $("a.more").click(function(event){
        event.preventDefault();
        //$firstPara.slideToggle("slow");
        $firstPara.animate({
            height: 'toggle',
            opacity: "toggle"
        }, 'slow');

        if($(this).text() == "read more"){
            $(this).text("read less");
        }else{
            $(this).text("read more");
        }
    });

    $("div.label").click(function() {
        var paraWidth = $("div.speech p").outerWidth();
        var $switcher = $(this).parent();
        var switcherWidth = $switcher.outerWidth();
        $switcher
            .css({position: 'relative'})
            .fadeTo('fast', 0.5)
            .animate({left: paraWidth - switcherWidth}, {duration: 'slow', queue: false})
            .fadeTo('slow', 1.0)
            .slideUp('fast')
            .queue(function(next){
                $switcher.css({backgroundColor: '#f00'});
                next();
            })
            .slideDown("slow")
    });

    $('p').eq(2).css('border', '1px solid #333')
        .click(function(){
            var $clickedItem = $(this);
            $clickedItem.next().slideDown("slow", function(){
                $clickedItem.slideUp("slow");
            });
        });
    $('p').eq(3).css('backgroundColor', '#ccc').hide();
});