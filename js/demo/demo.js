goog.provide('demo');

goog.require('b2AABB');
goog.require('b2World');
goog.require('b2BodyDef');
goog.require('b2BoxDef');

goog.require('demoDraw');

/**
 @constructor
 */
demo = function() {
  this.m_initId = 0;
  this.m_demos = {};
  this.m_demos.InitWorlds = [];

  this.setupWorld();
};

var world = null;
var ctx;
var canvasWidth;
var canvasHeight;

demo.prototype.setupWorld = function(demoId) {
  if (!demoId) {
    demoId = 0;
  }
  world = createWorld();
  this.m_initId += demoId;
  this.m_initId %= this.m_demos.InitWorlds.length;
  if (!isNaN(this.m_initId)) {
    if (this.m_initId < 0) {
      this.m_initId = this.m_demos.InitWorlds.length + this.m_initId;
    }
    this.m_demos.InitWorlds[this.m_initId](world);
  }
};



function setupPrevWorld() {
  setupWorld(-1);
}



function step(cnt) {
  var stepping = false;
  var timeStep = 1.0 / 60;
  var iteration = 1;
  world.Step(timeStep, iteration);
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  demoDraw.drawWorld(world, ctx);
  setTimeout('step(' + (cnt || 0) + ')', 10);
}



function createWorld() {
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
}



function createGround(world) {
  var groundSd = new b2BoxDef();
  groundSd.extents.Set(1000, 50);
  groundSd.restitution = 0.2;
  var groundBd = new b2BodyDef();
  groundBd.AddShape(groundSd);
  groundBd.position.Set(-500, 340);
  return world.CreateBody(groundBd);
}



function createBall(world, x, y) {
  var ballSd = new b2CircleDef();
  ballSd.density = 1.0;
  ballSd.radius = 20;
  ballSd.restitution = 1.0;
  ballSd.friction = 0;
  var ballBd = new b2BodyDef();
  ballBd.AddShape(ballSd);
  ballBd.position.Set(x, y);
  return world.CreateBody(ballBd);
}



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
