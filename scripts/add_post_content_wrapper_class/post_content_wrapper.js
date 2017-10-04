(function($){
    $(document).ready(function(){
        var addPostContentClass = function (){
            $('div[id^="post_"]').each(function(){
                $(this).children('div:not([attr_all])').each(function(){
                    if( $(this).attr('style') === undefined && $(this).attr('class') === undefined ){
                        $(this).addClass('post-content');
                    }
                });
            });
        }();
    });
})(jQuery);
