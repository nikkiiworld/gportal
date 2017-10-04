function infinityScrollWithButton (buttonText) {

    if(buttonText === undefined || buttonText === null || buttonText === ""){
        buttonText = "További bejegyzések betöltése";
    }

    var bloglistend = $('.bloglistend');
    if ($(bloglistend).length > 0) {
        $(bloglistend).parent().addClass('blogmodul');
    }


    $(window).on('scroll', function () {

        bloglistend = $('.bloglistend');

        var next = $('a.pager_next');
        if (bloglistend.length > 0 && next.length > 0) {

            $(bloglistend).html('<a id="loadMorePost" href="#" class="btn btn-default" data-url="' + $(next).attr('href') + '">'+buttonText+'</a> ');

        }
    });

    $(document).on('click', '#loadMorePost', function (e) {
        e.preventDefault();

        var $url = $(this).attr('data-url');

        var $div = $('<div class="spinner"></div>');
        $div.append('<div class="bounce1"></div>');
        $div.append('<div class="bounce2"></div>');
        $div.append('<div class="bounce3"></div>');

        $(bloglistend).html($div);
        $(bloglistend).find('.spinner').show();

        setTimeout(function () {
            $.get($url, function (data, status) {

                if (status === "success" || status === 200) {
                    var $responseBody = $($.parseHTML(data));
                    var $posts = $responseBody.find('div[id^="post"]');

                    $(bloglistend).remove();

                    if(localStorage.getItem('excerptsToBlogPosts') !== undefined && typeof shorterForInfinityScroll === 'function'){

                        for(var $i=0; $i<$posts.length; $i++){
                            var current = $posts[$i];
                            $('.blogmodul').append(current).fadeIn('500');
                            shorterForInfinityScroll(current);
                        }


                    }else{
                        for(var $i=0; $i<$posts.length; $i++){
                            $('.blogmodul').append($posts[$i]).fadeIn('500');
                        }
                    }


                    if(localStorage.getItem('postContentWrapper') && typeof addPostContentClass === 'function' ){
                        addPostContentClass();
                    }


                    if(localStorage.getItem('disqusForumNeve') && typeof changeCommentLink === 'function' ){
                        changeCommentLink();
                    }

                    if(localStorage.getItem('gpFontAwesomeIcons') && typeof changeIcons === 'function' ){
                        changeIcons();
                    }


                    if ($responseBody.find('a.pager_next').length > 0) {
                        $('.blogmodul').append($($responseBody).find('.bloglistend')).fadeIn('slow');
                    }
                    $('.spinner').html('');
                }

            });
        }, 3000);


    });

}
