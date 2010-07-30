goog.require('demo');

var _demo;

Event.observe(window, 'load', function() {
  _demo = new demo($('canvas'));
});
