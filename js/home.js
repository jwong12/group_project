/*
    Author: Bruno Lima
*/
$(window).ready(function(){
    // navbar toggling for smaller devices
    $('.navbar-toggler').click(function(){
        $('#navbarSupportedContent').slideToggle();
    });


    //codes for example 2 - Image and theme manipulation
    var resize = $('#resize');
    var img = $('#expand-image');
    var change = $('#change-theme');
    var caption = $('#caption');
    var figure = $('figure');
    var isSmall = true;
    var theme = 1;
    resize.click(function(){
        if (isSmall){
            img.css('max-width', '90%');
            img.css('max-height', '90%');
            isSmall = false;
        } else {
            img.css('max-width', '30%');
            img.css('max-height', '30%');
            isSmall = true;
        }
    });
    change.click(function(){
        if (theme == 1){
            figure.css('background-color', '#8edce6');
            caption.text('Theme 2');
            caption.css('background-color', '#0075A2');
            caption.css('color', '#dfdfdf');
            theme++;
        } else if (theme == 2){
            figure.css('background-color', '#7692ff');
            caption.text('Theme 3');
            caption.css('background-color', '#D6D6D6');
            caption.css('color', 'black');
            theme++;
        } else {
            figure.css('background-color', '#abd2fa');
            
            caption.css('background-color', 'transparent');
            caption.text('Theme 1');
            theme = 1;
        }
    });


    // Codes for example 3 - Manipulating a div's size and content
    var forfocus = true;
    var preview = $('#preview');
    var viewport = $(window).width();
    $('#res-slow').click(function(){
        if(viewport > 600){
            preview.animate({height: "25em"}, "slow");
            preview.animate({width: "30em"}, "slow");  
            preview.animate({height: "10em"}, "slow");
            preview.animate({width: "15em"}, "slow");
        } else{
            preview.animate({height: "25em"}, "slow");
            preview.animate({height: "10em"}, "slow");
            preview.animate({height: "25em"}, "slow");
            preview.animate({height: "10em"}, "slow");
        }
    });
    $('#res-fast').click(function(){
        for(i = 0; i <= 1; i++){
            if (viewport > 600){
                preview.animate({height: "25em"}, "fast");
                preview.animate({width: "30em"}, "fast");  
                preview.animate({height: "10em"}, "fast");
                preview.animate({width: "15em"}, "fast");
            } else{
                preview.animate({height: "25em"}, "fast"); 
                preview.animate({height: "10em"}, "fast");
            }
        }
    });
    $('#focus').click(function(){
        var text = $('#pv-text');
        if (forfocus){
            text.animate({fontSize: '3em'}, "slow");
            text.animate({borderBottomWidth: '.2em'}, "slow");
            
            forfocus = false;
        } else{
            text.animate({borderBottomWidth: '0'}, "slow");
            text.animate({fontSize: '2em'}, "slow");
            forfocus = true;
        }
    });


    // Code for navbar fixing and toggling
    var viewport = $(window).width();
    console.log('Viewport width: ' + viewport);

    window.onscroll = function(){
        fixNav();
        viewport = $(window).width();
    }

    var navbar = document.getElementById('nav-div');
    var sticky = navbar.offsetTop;
    function fixNav(){
        if(window.pageYOffset >= sticky) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    }
    
    
});

