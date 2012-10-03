(function($) {
  /* obscure content with blind */
  $.fn.blind_over = function() {
    this.each(function(i,el) {
      el = $(el);
      el.css({position:'relative'});
      var blind = $('<div class="blind"></div>');
      blind.css({
        height: el.height()+'px',
        width: el.width()+'px',
        background: '#999',
        position: 'absolute',
        top: 0,
        left: 0,
        'z-index': 10000,
        opacity: 0.5
      });
      el.prepend(blind);
    });
    return this;
  }
})(jQuery);