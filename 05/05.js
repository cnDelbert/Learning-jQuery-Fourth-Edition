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

    var $notes = $('<ol id="notes"></ol>').insertBefore('#footer');

    $('span.footnote').each(function(index) {
        $(this).before(['<sup>', index + 1, '</sup>'].join(" "))
            .appendTo($notes).wrap('<li></li>');
    });

    $('span.pull-quote').each(function(index) {
        var $parentParagraph = $(this).parent('p');
        $parentParagraph.css('position', 'relative');
    });

    var $clonedCopy = $(this).clone();
    $clonedCopy.addClass('pulled')
        .prependTo($parentParagraph);

});