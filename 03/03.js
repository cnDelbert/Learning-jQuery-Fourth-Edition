$(document).ready(function() {
    $('#switcher-default').addClass('selected');
    $('#switcher button').click(function() {
        var bodyClass = this.id.split('-')[1];  // The id and css properties should be the same.
        $('body').removeClass().addClass(bodyClass);
        $('#switcher button').removeClass('selected');
        $(this).addClass('selected');
    });
});