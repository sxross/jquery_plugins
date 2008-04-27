// focusFirstInput jQuery plugin
//
// Version 0.1
// Licensed under MIT license (the same license as Rails):
// http://www.opensource.org/licenses/mit-license.php
//
// Purpose: Set focus to first INPUT element on a page.
//
// Note that the definition of "focus" varies among browsers,
// and particularly among different INPUT elements. The main
// purpose of this is to focus the first text input on a page.
//
// If the first input is a SELECT or something, then the results
// may vary.
//
// More details and example code:
//
// http://calicowebdev.com

jQuery.fn.focusFirstInput = function(){
  // If there's a form on the page, then set focus to the first visible input element
  e = $('form input:visible')
  if(e && e.get(0)){e.get(0).focus();}  
}
