(function(){
    $(document).ready(function(){
        var changeIcons = function (){
            var title = $('img[src="image/note10.png"]').attr('title');
            $('img[src="image/note10.png"]').replaceWith( '<i class="fa fa-file-text-o" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="image/comment10.png"]').attr('title');
            $('img[src="image/comment10.png"]').replaceWith( '<i class="fa fa-comment-o" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="image/talk.png"]').attr('title');
            $('img[src="image/talk.png"]').replaceWith( '<i class="fa fa-comment-o" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="image/commentadd.png"]').attr('title');
            $('img[src="image/commentadd.png"]').replaceWith( '<i class="fa fa-plus-circle" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="image/commentsend.png"]').attr('title');
            $('img[src="image/commentsend.png"]').replaceWith( '<i class="fa fa-reply" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="image/controlprev.png"]').attr('title');
            $('img[src="image/controlprev.png"]').replaceWith( '<i class="fa fa-angle-left" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="image/controlnext.png"]').attr('title');
            $('img[src="image/controlnext.png"]').replaceWith( '<i class="fa fa-angle-right" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="image/controlfirst.png"]').attr('title');
            $('img[src="image/controlfirst.png"]').replaceWith( '<i class="fa fa-angle-double-left" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="image/controllast.png"]').attr('title');
            $('img[src="image/controllast.png"]').replaceWith( '<i class="fa fa-angle-double-right" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="image/refresh.png"]').attr('title');
            $('img[src="image/refresh.png"]').replaceWith( '<i class="fa fa-refresh" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="image/help.png"]').attr('title');
            $('img[src="./image/help.png"]').replaceWith( '<i class="fa fa-question-circle" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="./image/help.gif"]').attr('title');
            $('img[src="./image/help.gif"]').replaceWith( '<i class="fa fa-question-circle" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="image/comments.png"]').attr('title');
            $('img[src="image/comments.png"]').replaceWith( '<i class="fa fa-comments-o" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="image/folder10.png"]').attr('title');
            $('img[src="image/folder10.png"]').replaceWith( '<i class="fa fa-file-archive-o" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="image/pencil.gif"]').attr('title');
            $('img[src="image/pencil.gif"]').replaceWith( '<i class="fa fa-pencil" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="./image/pencil.png"]').attr('title');
            $('img[src="./image/pencil.png"]').replaceWith( '<i class="fa fa-pencil" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="image/pencil.png"]').attr('title');
            $('img[src="image/pencil.png"]').replaceWith( '<i class="fa fa-pencil" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="image/noteadd.png"]').attr('title');
            $('img[src="image/noteadd.png"]').replaceWith( '<i class="fa fa-plus-circle" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="image/flaggreen.png"]').attr('title');
            $('img[src="image/flaggreen.png"]').replaceWith( '<i class="fa fa-flag" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="image/pinned.png"]').attr('title');
            $('img[src="image/pinned.png"]').replaceWith( '<i class="fa fa-thumb-tack" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="image/delete.png"]').attr('title');
            $('img[src="image/delete.png"]').replaceWith( '<i class="fa fa-times" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="./image/delete.png"]').attr('title');
            $('img[src="./image/delete.png"]').replaceWith( '<i class="fa fa-times" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="image/work.gif"]').attr('title');
            $('img[src="image/work.gif"]').replaceWith( '<i class="fa fa-cogs" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="image/work.png"]').attr('title');
            $('img[src="image/work.png"]').replaceWith( '<i class="fa fa-cogs" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="image/forbidden.png"]').attr('title');
            $('img[src="image/forbidden.png"]').replaceWith( '<i class="fa fa-ban" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="./image/up.gif"]').attr('title');
            $('img[src="./image/up.gif"]').replaceWith( '<i class="fa fa-caret-up" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="./image/down.gif"]').attr('title');
            $('img[src="./image/down.gif"]').replaceWith( '<i class="fa fa-caret-down" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="image/link.gif"]').attr('title');
            var onclick = '';
            if($('img[src="image/link.gif"]').attr('onclick')){
                onclick = $('img[src="image/link.gif"]').attr('onclick');
            }
            $('img[src="image/link.gif"]').replaceWith( '<i class="fa fa-link" onclick="'+onclick+'" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="./image/greenarrow.gif"]').attr('title');
            $('img[src="./image/greenarrow.gif"]').replaceWith( '<i class="fa fa-external-link" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="image/ok.png"]').attr('title');
            $('img[src="image/ok.png"]').replaceWith( '<i class="fa fa-check" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="image/commentedit.png"]').attr('title');
            $('img[src="image/commentedit.png"]').replaceWith( '<i class="fa fa-pencil-square-o" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="image/commentcancel.png"]').attr('title');
            $('img[src="image/commentcancel.png"]').replaceWith( '<i class="fa fa-ban" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="/image/icons/facebook.png"]').attr('title');
            $('img[src="/image/icons/facebook.png"]').replaceWith( '<i class="fa fa-facebook" title="'+title+'" aria-hidden="true"></i>' );

            title = $('img[src="/image/icons/twitter.png"]').attr('title');
            $('img[src="/image/icons/twitter.png"]').replaceWith( '<i class="fa fa-twitter" title="'+title+'" aria-hidden="true"></i>' );
        };
        changeIcons();
    });
})(jQuery);