function blogmodulClass(){
    if($('div[id^="post_"]').length > 0 && window.location.search.indexOf('postid') ===  -1 ){
        $('div[id^="post_"]:first-of-type').closest('.modbody').addClass('blogmodul');
    }
}