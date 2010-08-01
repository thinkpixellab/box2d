
goog.provide('demo');

goog.require('goog.events');
goog.require('goog.events.EventType');

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

  this.ctx = canvas.getContext('2d');

  canvasWidth = canvas.width;
  canvasHeight = canvas.height;

  var _this = this;

  goog.events.listen(window, goog.events.EventType.CLICK, function(e) {
    if (Math.random() < 0.5) {
      createBall(_this.world, e.offsetX, e.offsetY, 10);
    } else {
      createBox(_this.world, e.offsetX, e.offsetY, 10, 10, false);
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

var world = null;
var canvasWidth;
var canvasHeight;

/**
 @private
 @param {number=} demoId
 */
demo.prototype._setupWorld = function(demoId) {
  if (!demoId) {
    demoId = 0;
  }
  this.world = demo.createWorld();
  this.m_initId += demoId;
  this.m_initId %= this.m_demos.length;
  if (!isNaN(this.m_initId)) {
    if (this.m_initId < 0) {
      this.m_initId = this.m_demos.length + this.m_initId;
    }
    this.m_demos[this.m_initId](this.world);
  }
};

demo.prototype._setupPrevWorld = function() {
  this._setupWorld(-1);
};

/**
 @private
 @param {number=} cnt
 */
demo.prototype._step = function(cnt) {
  var stepping = false;
  var timeStep = 1.0 / 60;
  var iteration = 1;
  this.world.Step(timeStep, iteration);
  this.ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  demoDraw.drawWorld(this.world, this.ctx);
  setTimeout('_demo._step(' + (cnt || 0) + ')', 10);
};

demo.createWorld = function() {
  var worldAABB = new b2AABB();
  worldAABB.minVertex.Set(-1000, -1000);
  worldAABB.maxVertex.Set(1000, 1000);
  var gravity = new b2Vec2(0, 300);
  var doSleep = true;
  var world = new b2World(worldAABB, gravity, doSleep);
  createGround(world);
  createBox(world, 0, 125, 10, 250);
  createBox(world, 500, 125, 10, 250);
  return world;
};



function createGround(world) {
  var groundSd = new b2BoxDef();
  groundSd.extents.Set(1000, 50);
  groundSd.restitution = 0.2;
  var groundBd = new b2BodyDef();
  groundBd.AddShape(groundSd);
  groundBd.position.Set(-500, 340);
  return world.CreateBody(groundBd);
}

/**
 @param {number=} radius
 */
function createBall(world, x, y, radius) {
  if (!radius) {
    radius = 20;
  }
  var ballSd = new b2CircleDef();
  ballSd.density = 1.0;
  ballSd.radius = radius;
  ballSd.restitution = 1.0;
  ballSd.friction = 0;
  var ballBd = new b2BodyDef();
  ballBd.AddShape(ballSd);
  ballBd.position.Set(x, y);
  return world.CreateBody(ballBd);
}

/**
 @param {boolean=} fixed
 */
function createBox(world, x, y, width, height, fixed) {
  if (typeof(fixed) == 'undefined') fixed = true;
  var boxSd = new b2BoxDef();
  if (!fixed) boxSd.density = 1.0;
  boxSd.extents.Set(width, height);
  var boxBd = new b2BodyDef();
  boxBd.AddShape(boxSd);
  boxBd.position.Set(x, y);
  return world.CreateBody(boxBd);
}
