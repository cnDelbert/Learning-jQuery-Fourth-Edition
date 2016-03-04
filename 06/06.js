// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
$(document).ready(function() {
    $('#letter-a a').click(function(event) {
        event.preventDefault();
        $("#dictionary").load("a.html");
        alert("loaded");
    });

    $('#letter-b a').click(function(event) {
        event.preventDefault();
        //$.getScript('c.js');
        $.get('d.xml', function (data) {
            $('#dictionary').empty();
            $(data).find('entry').each(function () {
                var $entry = $(this);
                var html = '<div class="entry">';
                html += '<h3 class="term">' + $entry.attr('term');
                html += '</h3>';
                html += '<div class="part">' + $entry.attr('part');
                html += '</div>';
                html += '<div class="definition">';
                html += $entry.find('definition').text();
                var $quote = $entry.find('quote');

                if ($quote.length) {
                    html += '<div class="quote">';
                    $quote.find('line').each(function () {
                        html += '<div class="quote-line">';
                        html += $(this).text() + '</div>';
                    });
             
                    if ($quote.attr('author')) {
                        html += '<div class="quote-author">';
                        html += $quote.attr('author') + '</div>';
                    }
                    html += '</div>';
                }
                // 不想动 啊啊啊 BeautifulSoup4       think PHP
                html += '</div>';
                html += '</div>';
                $('#dictionary').append($(html));
            });
        });
    });
});