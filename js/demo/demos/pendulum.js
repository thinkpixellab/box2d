goog.provide('demos.pendulum');

goog.require('b2RevoluteJointDef');

demos.pendulum = function(world) {
  var i;
  var ground = world.GetGroundBody();
  var jointDef = new b2RevoluteJointDef();
  var L = 150;
  for (i = 0; i < 4; i++) {
    jointDef.anchorPoint.Set(250 + 40 * i, 200 - L);
    jointDef.body1 = ground;
    jointDef.body2 = Demo.createBall(world, 250 + 40 * i, 200);
    world.CreateJoint(jointDef);
  }
  jointDef.anchorPoint.Set(250 - 40, 200 - L);
  jointDef.body1 = ground;
  jointDef.body2 = Demo.createBall(world, 250 - 40 - L, 200 - L);
  world.CreateJoint(jointDef);
};
