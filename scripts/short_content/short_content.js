function roviditettBejegyzesek (max = 250, readMoreText = "[..]", firstPost = false){
        
    if( window.location.search.indexOf('postid') ===  -1 ){
        //for infinity scroll
        if( $('.excerpt').length < $('div[id^="post_"]').length){

            window.addEventListener('infinityScrollEvent', function(){
                console.log("mi történik");
            }, false);

        }else{
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
}

