/*

Name:         Core Logic
Description: 	Helps to make the magic happen
Author:		  	Sean O'Sullivan. 'Accordion' function derived from work by Julia Rietveld (https://codepen.io/MrsColombo)
Version:	  	2020-10-11

*/

// Functions to change the app icon depending upon light or dark mode

function updateIconLightMode() {
  chrome.browserAction.setIcon({
    path : {
      "32": "assets/appicons/32.png",
      "24": "assets/appicons/24.png",
      "16": "assets/appicons/16.png"
    }
  });    
  }
  
function updateIconDarkMode() {
  chrome.browserAction.setIcon({
    path : {
      "32": "assets/appicons/32-white.png",
      "24": "assets/appicons/24-white.png",
      "16": "assets/appicons/16-white.png"
    }
  });    
  }

// Accordion function, derived from work by MrsColombo (https://codepen.io/MrsColombo/pen/mEeQwy)

$(function() {
    var Accordion = function(el, multiple) {
      this.el = el || {};
      // more then one submenu open?
      this.multiple = multiple || false;
      
      var dropdownlink = this.el.find('.dropdownlink');
      dropdownlink.on('click',
                      { el: this.el, multiple: this.multiple },
                      this.dropdown);
    };
    
    Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el,
          $this = $(this),
          //this is the ul.submenuItems
          $next = $this.next();
      
      $next.slideToggle();
      $this.parent().toggleClass('open');
      
      if(!e.data.multiple) {
        //show only one menu at the same time
        $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
      }
    }
    
    var accordion = new Accordion($('.accordion-menu'), false);
  })
  
// Icon changing

if (window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // SET DARK MODE ICON
    updateIconDarkMode();
} else {
// SET LIGHT MODE ICON
    updateIconLightMode();

}
