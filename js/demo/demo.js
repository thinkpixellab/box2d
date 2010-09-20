goog.provide('Demo');
goog.provide('Demo.FrameEvent');

goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.math.Vec2');
goog.require('goog.events.EventTarget');

goog.require('box2d.AABB');
goog.require('box2d.World');
goog.require('box2d.BodyDef');
goog.require('box2d.BoxDef');
goog.require('box2d.CircleDef');

goog.require('pixelLab.FpsLogger');

goog.require('demoDraw');

goog.require('demos.stack');
goog.require('demos.pendulum');
goog.require('demos.top');
goog.require('demos.crank');
goog.require('demos.compound');

/**
 @constructor
 @extends {goog.events.EventTarget}
 */
Demo = function(canvas) {
  this.m_initId = 0;
  this.m_demos = [];
  this.m_demos.push(demos.compound);
  this.m_demos.push(demos.crank);
  this.m_demos.push(demos.stack);
  this.m_demos.push(demos.pendulum);
  this.m_demos.push(demos.top);

  this.m_canvasWidth = canvas.width;
  this.m_canvasHeight = canvas.height;

  this.m_translate = new goog.math.Vec2(this.m_canvasWidth / 2 - 250, this.m_canvasHeight / 2 - 185);

  this.m_canvasContext = canvas.getContext('2d');
  this.m_canvasContext.fillStyle = '#ffffff';
  this.m_canvasContext.translate(this.m_translate.x, this.m_translate.y);

  goog.events.listen(canvas, goog.events.EventType.CLICK, function(e) {
    var offset = new goog.math.Vec2(e.offsetX, e.offsetY);
    offset.subtract(this.m_translate);
    if (Math.random() < 0.5) {
      Demo.createBall(this.m_world, offset.x, offset.y, 10);
    } else {
      Demo.createBox(this.m_world, offset.x, offset.y, 10, 10, false);
    }
  },
  false, this);

  this.m_fpsLogger = new pixelLab.FpsLogger();
  this.m_fps = 0;

  this.m_initId = Math.floor(Math.random() * this.m_demos.length);
  this._setupWorld();
  this._step();
};
goog.inherits(Demo, goog.events.EventTarget);

Demo.prototype.nextDemo = function(delta) {
  if (this.m_demos.length == 0) {
    throw "No demos to load";
  }
  this.m_initId += delta;
  while (this.m_initId < 0) {
    this.m_initId += this.m_demos.length;
  }
  this.m_initId %= this.m_demos.length;
  this._setupWorld();
};

/**
 @private
 */
Demo.prototype._setupWorld = function() {
  this.m_world = Demo.createWorld();
  this.m_demos[this.m_initId](this.m_world);
};

/**
 @private
 */
Demo.prototype._step = function() {
  goog.global.setTimeout(goog.bind(this._step, this));
  this.m_world.Step(Demo._secondsPerFrame, 1);
  if (!this.m_world.sleeping) {
    this.m_canvasContext.clearRect(-this.m_translate.x, -this.m_translate.y, this.m_canvasWidth, this.m_canvasHeight);
    demoDraw.drawWorld(this.m_world, this.m_canvasContext);
  }
  var fps = Math.round(this.m_fpsLogger.AddInterval());
  this.dispatchEvent(new Demo.FrameEvent(fps, this.m_world.sleeping));
};

Demo.createWorld = function() {
  var worldAABB = new box2d.AABB();
  worldAABB.minVertex.Set(-1000, -1000);
  worldAABB.maxVertex.Set(1000, 1000);
  var gravity = new box2d.Vec2(0, 300);
  var doSleep = true;
  var world = new box2d.World(worldAABB, gravity, doSleep);
  Demo.createBox(world, 250, 305, 250, 5, true, true);
  Demo.createBox(world, 5, 185, 5, 125, true, true);
  Demo.createBox(world, 495, 185, 5, 125, true, true);
  return world;
};

/**
 @param {!box2d.World} world
 @param {number=} radius
 @return {!box2d.Body}
 */
Demo.createBall = function(world, x, y, radius) {
  radius = radius || 20;
  var ballSd = new box2d.CircleDef();
  ballSd.density = 1.0;
  ballSd.radius = radius;
  ballSd.restitution = 0.8;
  ballSd.friction = 0.9;
  var ballBd = new box2d.BodyDef();
  ballBd.AddShape(ballSd);
  ballBd.position.Set(x, y);
  return world.CreateBody(ballBd);
};

/**
 @param {!box2d.World} world
 @param {boolean=} fixed
 @param {boolean=} filled
 @return {!box2d.Body}
 */
Demo.createBox = function(world, x, y, width, height, fixed, filled) {
  if (typeof(fixed) == 'undefined') {
    fixed = true;
  }
  if (typeof(filled) == 'undefined') {
    filled = false;
  }
  var boxSd = new box2d.BoxDef();
  if (!fixed) {
    boxSd.density = 1.0;
  }
  if (filled) {
    boxSd.userData = 'filled';
  }
  boxSd.extents.Set(width, height);
  var boxBd = new box2d.BodyDef();
  boxBd.AddShape(boxSd);
  boxBd.position.Set(x, y);
  return world.CreateBody(boxBd);
};

/**
 @private
 @const
 @type {number}
 */
Demo._secondsPerFrame = 1.0 / 60;

/**
 @private
 @const
 @type {number}
 */
Demo._millisecondsPerFrame = Demo._secondsPerFrame * 1000;

//
// Events
//

/**
 * @param {number} fps
 * @constructor
 * @extends {goog.events.Event}
 */
Demo.FrameEvent = function(fps, sleeping) {
  goog.base(this, Demo.FrameEvent.Type);
  this.fps = fps;
  this.sleeping = sleeping;
};
goog.inherits(Demo.FrameEvent, goog.events.Event);

/**
 @const
 @type {string}
*/
Demo.FrameEvent.Type = "Demo.FrameEventType";
