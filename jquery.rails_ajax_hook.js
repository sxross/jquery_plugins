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
    var ajaxLinkBindOptions = $.extend({}, options);
    this.bind('click', function(e){
      element = $(this).find('a');
      $.ajax({
        type: "POST",
        url:  element.attr('href'),
        data: {
          'authenticity_token': $('input[name=authenticity_token]').val()
        },
        dataType: 'json',
        success: function(json){options['success'](json);},
        error:   function(json){options['error'](json);}
      });
      return false;
    });
  }
}) (jQuery);
