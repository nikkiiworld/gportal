(function($){
    $(document).ready(function(){
        var posts = $('div[id^="post_"]');
        posts.each(function(){
            $(this).find('div:not([attr_all])')[0].class("post-content");
        });
    });
})(jQuery)