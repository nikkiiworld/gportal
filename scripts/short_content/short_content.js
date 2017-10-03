//(function($) {

        var roviditettBejegyzesek = function (max = 250, readMoreText = "[..]", firstPost = false){
        
            if( window.location.search.indexOf('postid') ===  -1 ){

                var readmore = '<a class="readmore" href="#">'+readMoreText+'</a>';
                if($('.post-content').length > 0){

                   $('.post-content').each(function(i){
                       if( firstPost === true && i === 0 ){
                           i++;
                       }else{
                            var title = $(this).closest('h2');
                            if(title.parent().is('a')){
                               readmore.attr('href',title.parent().attr('href'));
                            }else{
                               readmore.attr('href', '#');      
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
                               readmore.attr('href',title.parent().attr('href'));
                            }else{
                               readmore.attr('href', '#');      
                            }
                            $(this).html('<p>'+$('div:not([attr_all])').text().substring(0,max) + readmore + '</p>');
                        }
                   });

                }

            }

        }
        
//})(jQuery); 
