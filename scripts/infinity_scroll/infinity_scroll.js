(function($){

    var bloglistend = $('.bloglistend');
    if( bloglistend.length > 0){
        $(bloglistend).parent().addClass('blogmodul');
    }

    $(window).on('scroll', function(){

        bloglistend = $('.bloglistend');

        if( bloglistend.length > 0){

            if($(window).scrollTop() >= $(bloglistend).offset().top-600){

                var next = $('a.pager_next');
                if( next.length > 0){

                    var $url = $(next).attr('href');

                    var $div    = $('<div class="spinner"></div>');
                        $div.append('<div class="bounce1"></div>');
                        $div.append('<div class="bounce2"></div>');
                        $div.append('<div class="bounce3"></div>');

                    $(bloglistend).html($div);
                    $(bloglistend).find('.spinner').show();

                    setTimeout(function() {
                        $.get($url, function(data, status){

                            if(status === "success" || status === 200){
                                var $responseBody = $($.parseHTML(data));
                                var $posts =  $responseBody.find('div[id^="post"]');

                                $(bloglistend).remove();

                                for(var $i=0; $i<$posts.length; $i++){
                                    $('.blogmodul').append($posts[$i]).fadeIn('500');
                                }
                                if($responseBody.find('a.pager_next').length > 0){
                                    $('.blogmodul').append($($responseBody).find(bloglistend)).fadeIn('slow');
                                }
                                $('.spinner').html('');
                            }

                        });
                    }, 3000);
                }
            }
        }
    });

})(jQuery);