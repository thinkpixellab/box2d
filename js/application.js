goog.require('Demo');

$(window).load(function() {
  var demo = new Demo($('canvas')[0]);
  $('#previous').click(function(){
    demo.nextDemo(-1);
  });
  $('#reload').click(function(){
    demo.nextDemo(0);
  });
  $('#next').click(function(){
    demo.nextDemo(1);
  });


  // ensure the canvas isn't selectable
  // minimizes some weird focus flashing in chrome
  $('canvas').each(function () {
    this['onselectstart'] = function () {
      return false;
    };
    this.unselectable = "on";
    $(this).css('-moz-user-select', 'none');
    $(this).css('-webkit-user-select', 'none');
  });
});
