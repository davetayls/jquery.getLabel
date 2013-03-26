/**
  jQuery.getLabel
  Dave Taylor http://the-taylors.org

  @license The MIT License (MIT)
  @preserve Copyright (c) 2012 Dave Taylor http://the-taylors.org
*/
(function($){
  'use strict';

  var GetLabel = function(el, options){
    if (el || options){
      this.init(el, options);
    }
  };
  GetLabel.prototype = {
    defaults: {
      context: ''
    },
    init: function(el, options){
      this.$el = $(el);
      this.settings = $.extend({}, this.defaults, options);
      this.setLabels();
      return this;
    },
    setLabels: function(){
      if (this.settings.context){
        this.$labels = this.$el
          .closest(this.settings.context)
          .find('[for="'+ this.$el[0].id +'"]')
        ;
      } else {
        this.$labels = $('[for="'+ this.$el[0].id +'"]');
      }
      return this.$labels;
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