(function($){
    $(document).ready(function (){
        var sitecol = $('.site.sitemain').find('.sitecol');

    if(sitecol.length === 3){
        $(sitecol[0]).addClass('left-sidebar sidebar');
        $(sitecol[1]).addClass('main-content');
        $(sitecol[2]).addClass('right-sidebar sidebar');
    }else if(sitecol.length === 2){

        if($(sitecol[0]).find('.column_main').length > 0){
            // right sidebar
            $(sitecol[0]).addClass('main-content');
            $(sitecol[1]).addClass('right-sidebar sidebar');
        }else{
            // left sidebar
            $(sitecol[0]).addClass('left-sidebar sidebar');
            $(sitecol[1]).addClass('main-content');
        }
    }else{
        $(sitecol[0]).addClass('main-content');
    }
    });
})(jQuery)