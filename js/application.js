goog.require('demo');
goog.require('goog.events');
goog.require('goog.events.EventType');

$(window).load(function() {
  var demo = new Demo($('canvas')[0]);
  $('button').click(function(){
    demo.nextDemo();
  });
});
