goog.require('demo');

var _demo;

Event.observe(window, 'load', function() {
  _demo = new demo(document.getElementsByTagName('canvas')[0]);
});
