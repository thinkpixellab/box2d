goog.require('demo');
goog.require('goog.events');
goog.require('goog.events.EventType');
function load() {
  goog.events.listen(window, goog.events.EventType.LOAD, function() {
    new demo(document.getElementsByTagName('canvas')[0]);
  });
};
goog.exportSymbol('load', load);
