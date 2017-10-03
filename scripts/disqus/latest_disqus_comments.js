function latestDisqusComments (selector, forum, limit, apiKey) {
    
    $('head').append('<srcipt src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/locale/hu.js">');
    
    if(!selector || $(selector).length === 0){
        selector = $('.lastcomments');
    }
    $.get("https://disqus.com/api/3.0/forums/listPosts.json?forum="+forum+"&limit="+limit+"&related=thread&api_key="+apiKey, function(res, code) {
        if(res.code === 0) {
            var result = "";
            for(var i=0, len=res.response.length; i<len; i++) {
                var post = res.response[i];

                var template = `
                    <div class="latestcomments">
                        <span class="comment_nev">
                            <img class="comment_ikon" src="${post.author.avatar.small.permalink}">
                            <a href="${post.author.profileUrl}">${post.author.name}</a>
                        </span>
                        <a href="${post.thread.link}">
                            <span class="comment_text">
                                ${ post.raw_message.length > 100 ?
                    post.raw_message.substring(0,100) + '...' : post.raw_message }
                            </span>
                        </a>
                        <span class="comment_date postRef">${moment.utc(post.createdAt).locale("hu").fromNow()}</span>
                    </div>"   
                `;
                result += template;

            }
            selector.html(result);
        }
    });
}
