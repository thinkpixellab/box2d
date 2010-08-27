goog.require('demo');
goog.require('goog.events');
goog.require('goog.events.EventType');

$(window).load(function() {
  new demo($('canvas')[0]);
});
