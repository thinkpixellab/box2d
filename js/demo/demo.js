goog.provide('demo');

goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.math.Vec2');

goog.require('b2AABB');
goog.require('b2World');
goog.require('b2BodyDef');
goog.require('b2BoxDef');
goog.require('b2CircleDef');

goog.require('demoDraw');

goog.require('demos.stack');
goog.require('demos.pendulum');
goog.require('demos.top');
goog.require('demos.crank');
goog.require('demos.compound');

/**
 @constructor
 */
demo = function(canvas) {
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

  var _this = this;

  goog.events.listen(window, goog.events.EventType.CLICK, function(e) {
    var offset = new goog.math.Vec2(e.offsetX, e.offsetY);
    offset.subtract(_this.m_translate);
    if (Math.random() < 0.5) {
      demo.createBall(_this.m_world, offset.x, offset.y, 10);
    } else {
      demo.createBox(_this.m_world, offset.x, offset.y, 10, 10, false);
    }
  });

  goog.events.listen(window, goog.events.EventType.CONTEXTMENU, function(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    _this._setupPrevWorld();
    return false;
  });

  this._setupWorld();
  this._step();
};

/**
 @private
 @param {number=} demoId
 */
demo.prototype._setupWorld = function(demoId) {
  if (!demoId) {
    demoId = 0;
  }
  this.m_world = demo.createWorld();
  this.m_initId += demoId;
  this.m_initId %= this.m_demos.length;
  if (!isNaN(this.m_initId)) {
    if (this.m_initId < 0) {
      this.m_initId = this.m_demos.length + this.m_initId;
    }
    this.m_demos[this.m_initId](this.m_world);
  }
};

demo.prototype._setupPrevWorld = function() {
  this._setupWorld(-1);
};

/**
 @private
 */
demo.prototype._step = function() {
  this.m_world.Step(demo._secondsPerFrame, 1);
  this.m_canvasContext.clearRect(-this.m_translate.x, -this.m_translate.y, this.m_canvasWidth, this.m_canvasHeight);
  demoDraw.drawWorld(this.m_world, this.m_canvasContext);
  goog.global.setTimeout(goog.bind(this._step, this), demo._millisecondsPerFrame);
};

demo.createWorld = function() {
  var worldAABB = new b2AABB();
  worldAABB.minVertex.Set(-1000, -1000);
  worldAABB.maxVertex.Set(1000, 1000);
  var gravity = new b2Vec2(0, 300);
  var doSleep = true;
  var world = new b2World(worldAABB, gravity, doSleep);
  demo.createBox(world, 250, 305, 250, 5, true, true);
  demo.createBox(world, 5, 185, 5, 125, true, true);
  demo.createBox(world, 495, 185, 5, 125, true, true);
  return world;
};

/**
 @param {!b2World} world
 @param {number=} radius
 @return {!b2Body}
 */
demo.createBall = function(world, x, y, radius) {
  if (!radius) {
    radius = 20;
  }
  var ballSd = new b2CircleDef();
  ballSd.density = 1.0;
  ballSd.radius = radius;
  ballSd.restitution = 0.9;
  ballSd.friction = 0.9;
  var ballBd = new b2BodyDef();
  ballBd.AddShape(ballSd);
  ballBd.position.Set(x, y);
  return world.CreateBody(ballBd);
};

/**
 @param {!b2World} world
 @param {boolean=} fixed
 @param {boolean=} filled
 @return {!b2Body}
 */
demo.createBox = function(world, x, y, width, height, fixed, filled) {
  if (typeof(fixed) == 'undefined') {
    fixed = true;
  }
  if (typeof(filled) == 'undefined') {
    filled = false;
  }
  var boxSd = new b2BoxDef();
  if (!fixed) {
    boxSd.density = 1.0;
  }
  if(filled){
    boxSd.userData = 'filled';
  }
  boxSd.extents.Set(width, height);
  var boxBd = new b2BodyDef();
  boxBd.AddShape(boxSd);
  boxBd.position.Set(x, y);
  return world.CreateBody(boxBd);
};

/**
 @private
 @const
 @type {number}
 */
demo._secondsPerFrame = 1.0 / 60;

/**
 @private
 @const
 @type {number}
 */
demo._millisecondsPerFrame = demo._secondsPerFrame * 1000;
