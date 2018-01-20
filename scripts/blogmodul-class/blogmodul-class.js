function blogmodulClass(){
    if($('div[id^="post_"]').length > 0 && window.location.search.indexOf('postid') ===  -1 ){
        $('div[id^="post_"]').closest('.modbody').addclass('blogmodul');
    }
}