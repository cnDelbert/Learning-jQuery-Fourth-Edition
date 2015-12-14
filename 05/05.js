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

    $("span.footnote").insertBefore("#footer")
        .wrapAll("<ol id='notes'></ol>")
        .wrap("<li></li>");
});