function disqus (forum){

    localStorage.setItem('disqusForumNeve', forum);
    
    if($("#commentContainer").length > 0){
        $( "#commentContainer" ).replaceWith( '<div id="disqus_thread"></div>' );
        var url = window.location.href;

        var id = '/gindex.php?pg='+getPageIdentifier('pg',url)+'&postid='+getPageIdentifier('postid',url);
        var disqus_config = function () {
            var titleSelector = '#'+id+' > h2';
            this.page.title = "'"+$(titleSelector).html()+"'";
            this.page.url = "'"+url+"'";
            this.page.identifier = "'"+id+"'";
        };
        (function() {
            var d = document, s = d.createElement('script');

            s.src = '//'+forum+'.disqus.com/embed.js';

            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        })();
    }

    changeCommentLink();

    var count = document.createElement('script');
    count.setAttribute('id', 'dsq-count-scr');
    count.setAttribute('src', '//'+forum+'.disqus.com/count.js');
    count.setAttribute('async','');
    document.body.appendChild(count);
}

function changeCommentLink(){
    $('.blogcommentcount > div > a').each(function(){
        var str = this.href;
        this.setAttribute('class','disqus-comment-count');
        if(str.indexOf("#commentList") == -1){
            var poz = str.indexOf("&cmd=inscomment");
            str = str.substring(0,poz) + "#disqus_thread";
        }
        else
            str = str.replace("#commentList", "#disqus_thread");

        this.setAttribute('data-disqus-url',str.substring(0, str.indexOf("#disqus_thread")));
        this.href = str;
    });
}

function getPageIdentifier( name, url ) {
    if (!url)
        url = location.href;
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&amp;]"+name+"=([^&amp;#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    return results == null ? null : results[1];
}
