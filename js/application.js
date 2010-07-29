goog.require('demo');

var _demo;

Event.observe(window, 'load', function() {
  _demo = new demo();

  ctx = $('canvas').getContext('2d');
  var canvasElm = $('canvas');

  canvasWidth = canvasElm.getLayout().get('width');
  canvasHeight = canvasElm.getLayout().get('height');

  Event.observe('canvas', 'click', function(e) {

    if (Math.random() < 0.5)
      demos.top.createBall(world, e.offsetX, e.offsetY);
    else
      createBox(world, e.offsetX, e.offsetY, 10, 10, false);
  });
  Event.observe('canvas', 'contextmenu', function(e) {
    if (e.preventDefault) e.preventDefault();
    setupPrevWorld();
    return false;
  });
  step();
});
