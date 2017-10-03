(function(){
    $(document).ready(function(){
        var smsSavAtmeretezes = function() {
            var smsSav = $('table.site:last');
            smsSav.removeAttr('style').css({
                'width': '98%',
                'margin': 'auto'

            });
            smsSav.find('hr').remove();
            $('.smsbackground').removeAttr('class').addClass('smsbackground2');
            $('div.gp-sms').removeAttr('class').addClass('gp-sms2');
            $('.sms_marquee marquee').removeAttr('width');
        }();
    });
})(jQuery);