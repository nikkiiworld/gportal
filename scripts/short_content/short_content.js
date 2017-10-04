function roviditettBejegyzesek (max = 250, readMoreText = "[..]", firstPost = false){

    localStorage.setItem('excerptsToBlogPosts', JSON.stringify({'max': max, 'readMoreText': readMoreText, 'firstPost': firstPost}));

    console.log(JSON.parse(localStorage.getItem('excerptsToBlogPosts')));

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
                    var title = $(this).closest('h2');
                    if(title.parent().is('a')){
                        var readmore = '<a class="readmore" href="'+title.parent().attr('href')+'">'+readMoreText+'</a>';
                    }else{
                        var readmore = '<span class="readmore">'+readMoreText+'</span>';
                    }
                    var content = "";
                    $(this).children('div:not([attr_all])').each(function(){
                        if( $(this).attr('style') === undefined && $(this).attr('class') === undefined ){
                            content = $(this).text();
                        }
                    });

                    $(this).html('<p class="excerpt">'+content.substring(0,max) + readmore + '</p>');
                }
            });

        }
    }

}

function shorterForInfinityScroll(posts){

    if( window.location.search.indexOf('postid') ===  -1 ){

        var data = JSON.parse(localStorage.getItem('excerptsToBlogPosts'));

        if( $(posts).find('.post-content').length > 0){

            $(posts).find('.post-content').each(function(i){
                if( data.firstPost === true && i === 0 ){
                    i++;
                }else{
                    var link = $(this).parent().children('a');
                    if( link !== undefined ){
                        var readmore = '<a class="readmore" href="'+ link.attr('href')+'">'+data.readMoreText+'</a>';
                    }else{
                        var readmore = '<span class="readmore">'+data.readMoreText+'</span>';
                    }
                    $(this).html('<p class="excerpt">'+$(this).text().substring(0,data.max) + readmore + '</p>');
                }

            });
        }else{

            $(posts).each(function(i){
                if(data.firstPost === true && i === 0){
                    i++;
                }else{
                    var title = $(this).closest('h2');
                    if(title.parent().is('a')){
                        var readmore = '<a class="readmore" href="'+title.parent().attr('href')+'">'+data.readMoreText+'</a>';
                    }else{
                        var readmore = '<span class="readmore">'+data.readMoreText+'</span>';
                    }
                    var content = "";
                    $(this).children('div:not([attr_all])').each(function(){
                        if( $(this).attr('style') === undefined && $(this).attr('class') === undefined ){
                            content = $(this).text();
                        }
                    });

                    $(this).html('<p class="excerpt">'+content.substring(0,data.max) + readmore + '</p>');
                }
            });

        }
    }

}