(function($){
    $(document).ready(function(){
        var posts = $('div[id^="post_"]');
        posts.each(function(){
            var div = $(this).children('div:not([attr_all])').find(function(div){
              return $(div).attr('style') === null && $(div).attr('class') === null;
            });
            console.log(div);
            $(div).addClass("post-content");
        });
    });
})(jQuery)
