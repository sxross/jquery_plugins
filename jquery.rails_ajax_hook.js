// rails_ajax_hook jQuery plugin
//
// Version 0.1
// Licensed under MIT license (the same license as Rails):
// http://www.opensource.org/licenses/mit-license.php
//
// Purpose: Make ajax call on link click. On success, the success
// function or callback is invoked with an argument containing the 
// json returned.
//
// Note that ajaxLinkBind relies on a wrapper element with
// child 'a' elements. These elements are used to get the URL
// for the Ajax call. If the user has javascript disabled, the
// links revert to normal GET links, and the Rails application
// can disambiguate using the respond_to method and render an
// appropriate view.
//
// Requires: Rails 2.0.2, with cool new protect against forgery
//
// More details and example code:
//
// http://calicowebdev.com

(function($) {
  jQuery.fn.ajaxLinkBind = function(options){
    this.bind('click', function(e){
      var form_data = '', element = $(this).find('a');
      if(!element) throw("container does not have an 'a' element");
      if($('form').length > 0) {
        form_data = $('form').serialize();
      }
      $.ajax($.extend({
        type: "POST",
        url:  element.attr('href'),
        data: form_data,
        dataType: 'json'
      }, options));
      return false;
    });
  }
}) (jQuery);
