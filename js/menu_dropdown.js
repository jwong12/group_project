/* Author: Bruno Meta
   Date: Jul 10, 2018 */
$(document).ready(function()
{
	$('.navbar-toggler').click(function(){
		$('#navbarSupportedContent').slideToggle();
	});
    var viewport = $(window).width();
    $(window).resize(function()
	{
		viewport = $(window).width();
        console.log(viewport);
    });
    if(viewport >= 974.5)
	{
		$('#dropdown1').hover(function(){
		$('#menu-dropdown1').slideToggle();
		});
    } 
	else 
	{
		$('#dropdown1').click(function(){
        $('#menu-dropdown1').slideToggle();
        });
    }
    window.onscroll = function(){fixNav()};

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
