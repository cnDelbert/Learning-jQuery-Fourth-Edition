$(document).ready(function(){
    $("div.chapter a[href*='wikipedia']").attr({
        rel: "external",
        title: function() {
            return "Learn more about " + $(this).text() + " at Wikipedia";
        },
        id: function(index, oldValue){
            return "wikilink-" + index;
        }
    });

    $("<a href='#top'>Back to top</a>").insertAfter("div.chapter p");

    $("<a id='top'></a>").prependTo("body");
    //list 5-10
    //$("span.footnote").insertBefore("#footer")
    //    .wrapAll("<ol id='notes'></ol>")
    //    .wrap("<li></li>");

    var $notes = $('<ol id="notes"></ol>').insertBefore("#footer"); // insertBefore and insertAfter perform the same.
    $("span.footnote").each(function(index){
        $(this).before((["<a href='#footnoot-",
            index + 1,
            "' id='context-",
            index + 1,
            "' class='context'><sup>",
            index + 1,
            "</sup></a>"]).join(''))
            .appendTo($notes)
            .append([
                '&nbsp;(<a href="#context-',
                index + 1,
                '">context</a>)'
            ].join(''))
            .wrap("<li id='footnoot-" + (index + 1) + "'></li>");
    });

    $('span.pull-quote').each(function(index) {
        var $parentParagraph = $(this).parent('p');
        $parentParagraph.css('position', 'relative');
    });
});