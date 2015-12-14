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
        $("<sup>" + (index + 1) + "</sup>").insertBefore(this);
        $(this).appendTo($notes).wrap("<li></li>");
    })
});