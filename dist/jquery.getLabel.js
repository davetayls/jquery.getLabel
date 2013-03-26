/*! getLabel - v0.1.0 - 2013-03-26
* https://github.com/davetayls/jquery.getLabel
* Copyright (c) 2013 davetayls; Licensed MIT */
(function($){
  'use strict';

  var GetLabel = function(el, options){
    if (el || options){
      this.init(el, options);
    }
  };
  GetLabel.prototype = {
    defaults: {},
    init: function(el, options){
      this.$el = $(el);
      this.settings = $.extend({}, this.defaults, options);
      this.$labels = $('[for="'+ this.$el[0].id +'"]');

      return this;
    }
  };

  $.fn.getLabel = function(options) {
    var $labels = $();
    this.each(function(){
      var $this = $(this),
          data = $this.data('getLabel'); // check to see if it's cached
      if (!data){
        data = new GetLabel(this, options);
        $this.data('getLabel', data);
      }
      // add to labels object
      $labels = $labels.add(data.$labels);
    });
    return $labels.eq(0);
  };

}(window.jQuery));