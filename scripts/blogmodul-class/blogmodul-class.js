function blogmodulClass(){
    if($('div[id^="post_"]').length > 0 && window.location.search.indexOf('postid') ===  -1 ){
        var table = $('div[id^="post_"]:first-of-type').closest('table.module');
        $(table).addClass('blogmodul');
    }
}