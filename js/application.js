goog.require('demo');
goog.require('goog.events');
goog.require('goog.events.EventType');

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
});
