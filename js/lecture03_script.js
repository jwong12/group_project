/*
    Author: James Wong
    Date: July 10th, 2018
*/
$(document).ready(function(){

    $(".lecture_content").hide();
    
    $("h2").click(function (event){
		$(this).next().slideToggle();
	});
})