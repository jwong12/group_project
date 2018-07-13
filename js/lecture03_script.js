/*
    Author: James Wong
    Date: July 10th, 2018
*/
$(document).ready(function(){

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
    
    $("section h2").click(function (event){
		$(this).next().slideToggle();
    });
})