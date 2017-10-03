(function(){
    function roviditettBejegyzesek(max = 250, firstPost = false){

        if(Number.isInteger(max) && max > 0){
            var postsLength = $('div[id^="post_"]').length;
            if( postsLength > 1){
                var divs = {};

                if(firstPost === false){
                    divs = $('div[id^="post_"]:not(:first-of-type)').find('div:not([attr_all])');
                }else{
                    divs = $('div[id^="post_"]').find('div:not([attr_all])');
                }

                var i = firstPost === false ? 1 : 0;

                for(i; i<divs.length; i++){

                    if($(divs[i]).attr('class') === undefined && $(divs[i]).attr('id') === undefined && $(divs[i]).attr('style') === undefined){
                        var featimg = "";
                        if($(divs[i]).closest('div[id^="post_"]').find('.featured').length > 0){
                            featimg = $(divs[i]).closest('div[id^="post_"]').find('.featured')[0];
                        }
                        var txt = $(divs[i]).text();
                        var more = '';

                        if($(divs[i]).parent().find('.blogmorelink').length !== 0){
                            $(divs[i]).parent().find('.blogmorelink').hide();
                        }

                        if(txt.length > max){
                            more = '<p class="readmore"><a class="readmore-link" href="'+$(divs[i]).parent().find('h2').parent().attr('href')+'">Tovább olvas &rarr;</a></p>';
                        }
                        if(featimg !== null && featimg !== ""){
                            $(divs[i]).addClass('post-content').html('<p>'+txt.substr(0,max) + '..</p> <img class="featured" src="'+$(featimg).attr('src')+'">'+more);
                        }else{
                            $(divs[i]).addClass('post-content').html('<p>'+txt.substr(0,max) + '..</p>'+more);
                        }

                    }

                }
            }
        }
    }
})(jQuery);