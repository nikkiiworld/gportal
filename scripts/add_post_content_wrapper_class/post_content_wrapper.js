(function($){
    $(document).ready(function(){
        var posts = $('div[id^="post_"]');
        posts.each(function(){
            $(this).children('div:not([attr_all])').each(function(){
				if( $(this).attr('style') === undefined && $(this).attr('class') === undefined ){
					$(this).addClass('post-content');
				}
            });
        });
    });
})(jQuery)
