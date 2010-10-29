goog.provide('box2d.ContactFactory');

goog.require('box2d.CircleContact');
goog.require('box2d.PolyAndCircleContact');
goog.require('box2d.PolyContact');
goog.require('box2d.Shape.Type');

/**
 @return {box2d.Contact}
 */
box2d.ContactFactory.Create = function(shape1, shape2) {
  if (box2d.ContactFactory.s_initialized == false) {
    box2d.ContactFactory._InitializeRegisters();
    box2d.ContactFactory.s_initialized = true;
  }

  var type1 = shape1.m_type;
  var type2 = shape2.m_type;

  //box2d.Settings.b2Assert(box2d.Shape.Type.unknownShape < type1 && type1 < box2d.Shape.Type.shapeTypeCount);
  //box2d.Settings.b2Assert(box2d.Shape.Type.unknownShape < type2 && type2 < box2d.Shape.Type.shapeTypeCount);
  var createFcn = box2d.ContactFactory.s_registers[type1][type2].createFcn;
  if (createFcn) {
    if (box2d.ContactFactory.s_registers[type1][type2].primary) {
      return createFcn(shape1, shape2);
    } else {
      var c = createFcn(shape2, shape1);
      for (var i = 0; i < c.GetManifoldCount(); ++i) {
        var m = c.GetManifolds()[i];
        m.normal = m.normal.Negative();
      }
      return c;
    }
  } else {
    return null;
  }
};

box2d.ContactFactory.Destroy = function(contact, allocator) {
  if (contact.GetManifoldCount() > 0) {
    contact.m_shape1.m_body.WakeUp();
    contact.m_shape2.m_body.WakeUp();
  }

  var type1 = contact.m_shape1.m_type;
  var type2 = contact.m_shape2.m_type;

  //box2d.Settings.b2Assert(box2d.Shape.Type.unknownShape < type1 && type1 < box2d.Shape.Type.shapeTypeCount);
  //box2d.Settings.b2Assert(box2d.Shape.Type.unknownShape < type2 && type2 < box2d.Shape.Type.shapeTypeCount);
  var destroyFcn = box2d.ContactFactory.s_registers[type1][type2].destroyFcn;
  destroyFcn(contact, allocator);
};

/**
 @private
 */
box2d.ContactFactory._InitializeRegisters = function() {
  box2d.ContactFactory.s_registers = new Array(box2d.Shape.Type.shapeTypeCount);
  for (var i = 0; i < box2d.Shape.Type.shapeTypeCount; i++) {
    box2d.ContactFactory.s_registers[i] = new Array(box2d.Shape.Type.shapeTypeCount);
    for (var j = 0; j < box2d.Shape.Type.shapeTypeCount; j++) {
      box2d.ContactFactory.s_registers[i][j] = new box2d.ContactRegister();
    }
  }

  box2d.ContactFactory._AddType(box2d.CircleContact.Create, box2d.CircleContact.Destroy, box2d.Shape.Type.circleShape, box2d.Shape.Type.circleShape);
  box2d.ContactFactory._AddType(box2d.PolyAndCircleContact.Create, box2d.PolyAndCircleContact.Destroy, box2d.Shape.Type.polyShape, box2d.Shape.Type.circleShape);
  box2d.ContactFactory._AddType(box2d.PolyContact.Create, box2d.PolyContact.Destroy, box2d.Shape.Type.polyShape, box2d.Shape.Type.polyShape);

};

/**
 @private
 */
box2d.ContactFactory._AddType = function(createFcn, destroyFcn, type1, type2) {
  //box2d.Settings.b2Assert(box2d.Shape.Type.unknownShape < type1 && type1 < box2d.Shape.Type.shapeTypeCount);
  //box2d.Settings.b2Assert(box2d.Shape.Type.unknownShape < type2 && type2 < box2d.Shape.Type.shapeTypeCount);
  box2d.ContactFactory.s_registers[type1][type2].createFcn = createFcn;
  box2d.ContactFactory.s_registers[type1][type2].destroyFcn = destroyFcn;
  box2d.ContactFactory.s_registers[type1][type2].primary = true;

  if (type1 != type2) {
    box2d.ContactFactory.s_registers[type2][type1].createFcn = createFcn;
    box2d.ContactFactory.s_registers[type2][type1].destroyFcn = destroyFcn;
    box2d.ContactFactory.s_registers[type2][type1].primary = false;
  }
};

box2d.ContactFactory.s_registers = null;
box2d.ContactFactory.s_initialized = false;
