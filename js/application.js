
goog.require('demo');



function loadDemo() {
  return new demo(document.getElementsByTagName('canvas')[0]);
}

goog.exportSymbol('loadDemo', loadDemo);
