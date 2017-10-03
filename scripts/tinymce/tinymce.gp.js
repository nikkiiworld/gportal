(function(){

    $(document).ready(function(){

        tinymce.PluginManager.load('fontawesome', 'fontawesome/plugin.min.js');
        var tinyInit = function(selector){
            tinymce.init({
                selector: selector,
                theme: 'modern',
                height: 350,
                plugins: 'code print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime lists textcolor wordcount imagetools contextmenu colorpicker textpattern help fontawesome noneditable',
                toolbar1: 'formatselect | bold italic strikethrough forecolor backcolor | link | image | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat | code fontawesome',
                image_advtab: true,
                content_css: [
                    '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
                    '//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
                ],
                noneditable_noneditable_class: 'fa',
                extended_valid_elements:'script[language|type|src|charset|title],span[*],i[*],style[*]',
                verify_html: false,
                init_instance_callback: function (editor) {

                    if($('script[src*="ckeditor_3.6"]').length > 0){
                        $('script[src*="ckeditor_3.6"]').remove();
                    }

                    if($('select[name="editortype"]').length > 0){
                        $('select[name="editortype"]').closest('.modbody').find("script:contains('CKEDITOR')").each(function(){
                            $(this).remove();
                        });
                    }

                    if(typeof CKEDITOR !== 'undefined' ){
                        $.each(CKEDITOR.instances, function(i, el){CKEDITOR.instances[i].destroy()});
                    }

                    $(selector).hide();
                    $('div.mce-tinymce').show();
                    $('head').append('<style>.mce-container input, .mce-container select{margin: 0 !important; padding: 0 !important;}</style>');

                }
            });
        }

        tinyInit('textarea[name="content"]');
        tinyInit('textarea[name="comment"]');
        tinyInit('textarea[name="posttext"]');
        tinyInit('textarea[name="postleader"]');

    });

})(jQuery);