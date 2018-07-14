/*
    Author: James Wong
    Date: July 10th, 2018
*/
$(document).ready(function(){
    /* Navigation dropdown script */
    $('.navbar-toggler').click(function(){
        $('#navbarSupportedContent').slideToggle();
    });

    var viewport = $(window).width();
    console.log(viewport);
    if(viewport >= 974.5){
        $('#dropdown1').hover(function(){
            $('#menu-dropdown1').slideToggle();
            viewport = $('body').width();
        });
    } else {
        
        $('#dropdown1').click(function(){
            $('#menu-dropdown1').slideToggle();
            viewport = $('body').width();
        });
    }

    if(viewport >= 974.5){
        $('#more-dropdown2').hover(function(){
            $('#menu-dropdown2').slideToggle();
            viewport = $('body').width();
        });
    } else {
        
        $('#more-dropdown2').click(function(){
            $('#menu-dropdown2').slideToggle();
            viewport = $('body').width();
        });
    }


    /* Heading toggle and bookmark script */
    $(".lecture_content").hide();
    
    $(".box1").click(function (event){
        $("#section_css h2").next().slideToggle();

        // window.scrollTo($("#section_css h2").position().left,$("#section_css h2").position().top);
        var element = document.getElementById("section_css");
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });

    $(".box2").click(function (event){
        $("#section_sprites h2").next().slideToggle();

        var element = document.getElementById("section_sprites");
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });

    $(".box3").click(function (event){
        $("#section_icons h2").next().slideToggle();

        var element = document.getElementById("section_icons");
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });

    $(".box4").click(function (event){
        $("#section_box_model h2").next().slideToggle();

        var element = document.getElementById("section_box_model");
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });

    $(".box5").click(function (event){
        $("#section_flex_box h2").next().slideToggle();

        var element = document.getElementById("section_flex_box");
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });

    $(".box6").click(function (event){
        $("#section_grid h2").next().slideToggle();

        var element = document.getElementById("section_grid");
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });
    
    $("section h2").click(function (event){
		$(this).next().slideToggle();
    });
})