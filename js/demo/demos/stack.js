goog.provide('demos.stack');

demos.stack = function(world) {
  var sd = new box2d.BoxDef();
  var bd = new box2d.BodyDef();
  bd.AddShape(sd);
  sd.density = 1.0;
  sd.friction = 0.5;
  sd.extents.Set(10, 10);

  var i;
  for (i = 0; i < 8; i++) {
    bd.position.Set(500/2-Math.random()*2-1, (250-5-i*22));
    world.CreateBody(bd);
  }
  for (i = 0; i < 8; i++) {
    bd.position.Set(500/2-100-Math.random()*5+i, (250-5-i*22));
    world.CreateBody(bd);
  }
  for (i = 0; i < 8; i++) {
    bd.position.Set(500/2+100+Math.random()*5-i, (250-5-i*22));
    world.CreateBody(bd);
  }
}
