/*
DiagonalSlider.js
jQuery plugin to create diagonal slider
(c) Innvenio 2015 (@innvenio)
*/

function loadSlider(slider,default_text){
    var w;
    var width = 0;
    var image_width = slider.find('.gallery_item img').width();
    var image_height = slider.find('.gallery_item img').height();
    var out = true;
    var valor = 0;    
    var timeout;
    var length_gallery_item = slider.find('.gallery_item').length;

    valor = length_gallery_item * 25;
    if($(window).width() < 1060){
        valor = length_gallery_item * 40;
    }
    w = $(window).width() + ($(window).width() / length_gallery_item) + valor;
    width = w / 3;
    slider.width(w);
    slider.height($(window).height());
    slider.find('.gallery_item').width((w / length_gallery_item));
    slider.find('.gallery_item img').css('margin-left', ((image_width / 2) * -1) + (w / length_gallery_item));
    if($(window).height()<image_height){            
        slider.find('.gallery_item img').css('top', ((image_height-$(window).height())/2)*-1);
    }
    var i = 1;
    slider.find('.gallery_item').each(function(){
        $(this).attr('data-position', i);
        i++;
    });

    height_img = slider.find('.gallery_item img').height();

    if(height_img < slider.height()){
        slider.height(height_img);
    }

    $('.content_slider').find('.content_title').css('margin-top',slider.height() - 200); 

    slider.find('.gallery_item').unbind("hover");
    slider.find('.gallery_item').hover(function(){
        var item = $(this);
        if (out){
            out = false;
            if (timeout){
                clearTimeout(timeout);    
            }

            timeout = setTimeout(function(){
                zoomIn(item, function(){ }); 
            }, 10);
        }

    }, function(){
        zoomOut(function(){
            out = true; 
        });
    });

    function zoomOut(callback){
        slider.find('.gallery_item').each(function(){
            var x = w / length_gallery_item;
            $(this).css('width', x);
        });

        setTimeout(function(){
            if (out) {
                $('.content_slider').find('.content_title .text').html(default_text);    
            }
        }, 200);
        
        callback();
    }

    function zoomIn(item, callback){
        slider.find('.gallery_item').each(function(){
            var x = (w / length_gallery_item) - (width / length_gallery_item - 1);
            if ($(this).attr('data-position') != item.attr('data-position')){
                $(this).css('width', x);
            }
            else
            {
                item.css('width', ((w / length_gallery_item) + width) - ((width / length_gallery_item) * 1.5));
                var title = item.find('img').attr('data-title');
                $('.content_slider').find('.content_title .text').html(title);
            }
        });
        callback();
    }
}

(function($) {
    $.fn.createDiagonalSlider = function() {
        var slider = $(this);
        var doit;
        var default_text = $('.content_slider').find('.content_title').attr('data-default-text');

        setTimeout(function(){
            loadSlider(slider, default_text);
        }, 10);
        
        function resizedw(){
            loadSlider(slider, default_text);
        }

        window.onresize = function() {
            clearTimeout(doit);
            doit = setTimeout(function() {
                resizedw();
            }, 100);
        };

    }
}(jQuery));