
goog.provide('box2d.ShapeFactory');

goog.require('box2d.CircleShape');
goog.require('box2d.PolyShape');
goog.require('box2d.Shape.Type');

/**
 @param {box2d.ShapeDef} def
 @param {box2d.Body} body
 @param {box2d.Vec2} center
 */
box2d.ShapeFactory.Create = function(def, body, center) {
  switch (def.type) {
  case box2d.Shape.Type.circleShape:
    {
      //void* mem = body->m_world->m_blockAllocator.Allocate(sizeof(b2CircleShape));
      return new box2d.CircleShape(def, body, center);
    }

  case box2d.Shape.Type.boxShape:
  case box2d.Shape.Type.polyShape:
    {
      //void* mem = body->m_world->m_blockAllocator.Allocate(sizeof(b2PolyShape));
      return new box2d.PolyShape(def, body, center);
    }
  }

  //box2d.Settings.b2Assert(false);
  return null;
};
