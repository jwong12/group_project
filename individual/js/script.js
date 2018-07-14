/**
 * Author: James Wong
 * Date: June 26th, 2018
 *
 * First plugin:    Tooltipster plugin was added to the social media icons in the header section. Tooltipster is a flexible and extensible JQuery plugin for modern tooltips.
 *                  The default theme that came with the plugin was customized to the borderless theme, the animation was changed so that the textboxes will grow when the mouse is 
 *                  over themm, and lastly the speed in which they show up was changed to 0.4s.
 * 
 *                  source: http://iamceege.github.io/tooltipster/
 * 
 * Second plugin:   JQuery Zoom is a plugin to enlarge images on touch, click, or mouseover. JQuery was added to all the images in the content area. The default hover & zoom was 
 *                  changed to the grab option. In order to apply this, css code was added to the stylesheet, and <img> tags were wrapped in <span> tags. Hand icons were also added
 *                  and are displayed when the mouse is over an image, making the browsing experience more intuitive.
 *                  
 *                  source: http://www.jacklmoore.com/zoom/
 */
$(document).ready(function() {
    $('.tooltip').tooltipster({
        theme: 'tooltipster-borderless',
        animation: 'grow',
        delay: 400
    });

    $('.zoom').zoom({ on:'grab' });

    $('.img_content')
    .wrap('<span style="display:inline-block"></span>')
    .css('display', 'block')
    .parent()
    .zoom();
    
});

