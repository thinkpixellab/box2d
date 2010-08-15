goog.require('demo');
goog.require('goog.events');
goog.require('goog.events.EventType');

$(window).load(function() {
  new demo(document.getElementsByTagName('canvas')[0]);
});
