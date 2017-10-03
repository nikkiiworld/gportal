function roviditettBejegyzesek (max = 250, readMoreText = "[..]", firstPost = false){
        
    if( window.location.search.indexOf('postid') ===  -1 ){

        if($('.post-content').length > 0){

           $('.post-content').each(function(i){
               if( firstPost === true && i === 0 ){
                   i++;
               }else{
                    var title = $(this).closest('h2');
                    if(title.parent().is('a')){
                       var readmore = '<a class="readmore" href="'+title.parent().attr('href')+'">'+readMoreText+'</a>';
                    }else{
                       var readmore = '<span class="readmore">'+readMoreText+'</span>';
                    }
                    $(this).html('<p>'+$('.post-content').text().substring(0,max) + readmore + '</p>');
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
                    $(this).html('<p>'+$('div:not([attr_all])').text().substring(0,max) + readmore + '</p>');
                }
           });

        }

    }
}
