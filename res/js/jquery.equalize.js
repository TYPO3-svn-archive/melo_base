(function($)
{
	$.fn.equalize = function(options)
	{
		// Set the options.
		options = $.extend({}, $.fn.equalize.defaults, options);

		// Go through the matched elements and return the jQuery object.
		for(var i=0;i < 10; i++){
			this.each(function(){
				var h = 0;
				jQuery(this).children("*:not(.clear)").each(function(){
					var c = jQuery(this);
					if(h < c.height()){ h = c.height(); }
				}).css("min-height",h+"px");
			});
		}
		return this;
	};
	// Public defaults.
	$.fn.equalize.defaults = {};
})(jQuery);