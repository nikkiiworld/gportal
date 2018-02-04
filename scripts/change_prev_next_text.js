function changePrevNext(){
    $('.txtnormal').each(function(){

        var that = $(this);
        var txt = that.text();

        if($(this).has('a').length === 1){
            that = $(this).find('a');
            txt = that.text();
        }

        if( /^Következő (\d+) cikk$/.test(txt) === true ){
            txt = txt.replace(/Következő/gi, "Előző");
            $(that).text(txt);
        }else if( /^Előző (\d+) cikk$/.test(txt) === true ){
            txt = txt.replace(/Előző/gi, "Következő");
            $(that).text(txt);
        }

    });
}
