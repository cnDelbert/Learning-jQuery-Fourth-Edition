$(document).ready(function(){
    // 在switcher上启用悬停效果(Not only the <h3> tag)
    $("#switcher").hover(
        function(){
            $(this).addClass("hover");
        },
        function(){
            $(this).removeClass("hover");
        }
    );

    // 创建一个复用函数
    var toggleSwitcher = function(event){
        if(!$(event.target).is("button")){
            $("#switcher button").toggleClass("hidden");
        }
    };

    $("#switcher").on("click", toggleSwitcher);

    // 模拟一次单击事件,以便折叠switcher
    $("#switcher").click();

    var setBodyClass = function(className){
        $("body").removeClass().addClass(className);
        $("#switcher button").removeClass("selected");
        $("#switcher-" + className).addClass("selected");
        $("#switcher").off("click", toggleSwitcher);
        if(className == 'default'){
            $("#switcher").on("click", toggleSwitcher);
        }
    };

    $('#switcher-default').addClass('selected');

    $('#switcher').click(function(event) {
        if ($(event.target).is('button')) {
            var bodyClass = event.target.id.split('-')[1];
            setBodyClass(bodyClass);
        }
    });

    var triggers = {
        D: 'default',
        N: 'narrow',
        L: 'large'
    };

    $(document).keyup(function(event) {
        var key = String.fromCharCode(event.keyCode);
        if (key in triggers) {
            setBodyClass(triggers[key]);
        }
    });
});