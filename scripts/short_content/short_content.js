function roviditettBejegyzesek (max = 250, readMoreText = "[..]", firstPost = false){

    localStorage.setItem('excerptsToBlogPosts', JSON.stringify({'max': max, 'readMoreText': readMoreText, 'firstPost': firstPost}));

    if( window.location.search.indexOf('postid') ===  -1 ){

        if($('.post-content').length > 0){

            $('.post-content').each(function(i){
                if( firstPost === true && i === 0 ){
                    i++;
                }else{
                    var link = $(this).parent().children('a');
                    if( link !== undefined ){
                        var readmore = '<a class="readmore" href="'+ link.attr('href')+'">'+readMoreText+'</a>';
                    }else{
                        var readmore = '<span class="readmore">'+readMoreText+'</span>';
                    }
                    $(this).html('<p class="excerpt">'+$(this).text().substring(0,max) + readmore + '</p>');
                }

            });
        }else{

            $('div[id^="post_"]').each(function(i){
                if(firstPost === true && i === 0){
                    i++;
                }else{
                    var title = $(this).find('h2');
                    if(title.parent().is('a')){
                        var readmore = '<a class="readmore" href="'+title.parent().attr('href')+'">'+readMoreText+'</a>';
                    }else{
                        var readmore = '<span class="readmore">'+readMoreText+'</span>';
                    }
                    var content = "";
                    $(this).children('div:not([attr_all])').each(function(){
                        if( $(this).attr('style') === undefined && $(this).attr('class') === undefined ){
                            content = $(this).text();
                            $(this).html('<p class="excerpt">'+content.substring(0,max) + readmore + '</p>');
                        }
                    });
                }
            });

        }
    }

}

function shorterForInfinityScroll(post){

    var data = JSON.parse(localStorage.getItem('excerptsToBlogPosts'));

    if( $(post).find('.post-content').length > 0){

        var _this = $(post).find('.post-content');

        var link = $(post).children('a');
        if( link !== undefined ){
            var readmore = '<a class="readmore" href="'+ link.attr('href')+'">'+data.readMoreText+'</a>';
        }else{
            var readmore = '<span class="readmore">'+data.readMoreText+'</span>';
        }
        $(_this).html('<p class="excerpt">'+$(_this).text().substring(0,data.max) + readmore + '</p>');

    }else{


        var title = $(post).find('h2');
        if(title.parent().is('a')){
            var readmore = '<a class="readmore" href="'+title.parent().attr('href')+'">'+data.readMoreText+'</a>';
        }else{
            var readmore = '<span class="readmore">'+data.readMoreText+'</span>';
        }
        var content = "";
        $(post).children('div:not([attr_all])').each(function(){
            if( $(this).attr('style') === undefined && $(post).attr('class') === undefined ){
                content = $(this).text();
                $(this).html('<p class="excerpt">'+content.substring(0,data.max) + readmore + '</p>');
            }
        });
    }

}