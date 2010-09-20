goog.provide('demos.compound');

demos.compound = function(world) {
  var i;
  for (i = 1; i <= 4; i++) {
    demos.compound.createCompoundPoly(world, 150 + 3 * Math.random(), 40 * i);
  }
  for (i = 1; i <= 4; i++) {
    demos.compound.createCompoundBall(world, 350 + 3 * Math.random(), 45 * i);
  }
};

demos.compound.createCompoundBall = function(world, x, y) {
  var ballSd1 = new box2d.CircleDef();
  ballSd1.density = 1.0;
  ballSd1.radius = 20;
  ballSd1.restitution = 0.2;
  ballSd1.localPosition.Set(-20, 0);
  var ballSd2 = new box2d.CircleDef();
  ballSd2.density = 1.0;
  ballSd2.radius = 20;
  ballSd2.restitution = 0.2;
  ballSd2.localPosition.Set(20, 0);
  var ballBd = new box2d.BodyDef();
  ballBd.AddShape(ballSd1);
  ballBd.AddShape(ballSd2);
  ballBd.position.Set(x, y);
  return world.CreateBody(ballBd);
};

demos.compound.createCompoundPoly = function(world, x, y) {
  var points = [
    [-30, 0],
    [30, 0],
    [0, 15]];
  var polySd1 = new box2d.PolyDef();
  polySd1.vertexCount = points.length;
  var i;
  for (i = 0; i < points.length; i++) {
    polySd1.vertices[i].Set(points[i][0], points[i][1]);
  }
  polySd1.localRotation = 0.3524 * Math.PI;
  var R1 = new box2d.Mat22(polySd1.localRotation);
  polySd1.localPosition = box2d.Math.b2MulMV(R1, new box2d.Vec2(30, 0));
  polySd1.density = 1.0;
  var polySd2 = new box2d.PolyDef();
  polySd2.vertexCount = points.length;
  for (i = 0; i < points.length; i++) {
    polySd2.vertices[i].Set(points[i][0], points[i][1]);
  }
  polySd2.localRotation = -0.3524 * Math.PI;
  var R2 = new box2d.Mat22(polySd2.localRotation);
  polySd2.localPosition = box2d.Math.b2MulMV(R2, new box2d.Vec2(-30, 0));
  var polyBd = new box2d.BodyDef();
  polyBd.AddShape(polySd1);
  polyBd.AddShape(polySd2);
  polyBd.position.Set(x, y);
  return world.CreateBody(polyBd);
};
