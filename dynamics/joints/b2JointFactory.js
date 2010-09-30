goog.provide('box2d.JointFactory');

goog.require('box2d.RevoluteJoint');
goog.require('box2d.PrismaticJoint');
goog.require('box2d.MouseJoint');
goog.require('box2d.DistanceJoint');
goog.require('box2d.PulleyJoint');
goog.require('box2d.GearJoint');

box2d.JointFactory.Create = function(def, allocator) {
  var joint = null;

  switch (def.type) {
  case box2d.Joint.e_distanceJoint:
    {
      //void* mem = allocator->Allocate(sizeof(b2DistanceJoint));
      joint = new box2d.DistanceJoint(def);
    }
    break;

  case box2d.Joint.e_mouseJoint:
    {
      //void* mem = allocator->Allocate(sizeof(b2MouseJoint));
      joint = new box2d.MouseJoint(def);
    }
    break;

  case box2d.Joint.e_prismaticJoint:
    {
      //void* mem = allocator->Allocate(sizeof(b2PrismaticJoint));
      joint = new box2d.PrismaticJoint(def);
    }
    break;

  case box2d.Joint.e_revoluteJoint:
    {
      //void* mem = allocator->Allocate(sizeof(b2RevoluteJoint));
      joint = new box2d.RevoluteJoint(def);
    }
    break;

  case box2d.Joint.e_pulleyJoint:
    {
      //void* mem = allocator->Allocate(sizeof(b2PulleyJoint));
      joint = new box2d.PulleyJoint(def);
    }
    break;

  case box2d.Joint.e_gearJoint:
    {
      //void* mem = allocator->Allocate(sizeof(b2GearJoint));
      joint = new box2d.GearJoint(def);
    }
    break;

  default:
    //box2d.Settings.b2Assert(false);
    break;
  }

  return joint;
};
box2d.JointFactory.Destroy = function(joint, allocator) {
  /*joint->~b2Joint();
    switch (joint.m_type)
    {
    case box2d.Joint.e_distanceJoint:
      allocator->Free(joint, sizeof(b2DistanceJoint));
      break;

    case box2d.Joint.e_mouseJoint:
      allocator->Free(joint, sizeof(b2MouseJoint));
      break;

    case box2d.Joint.e_prismaticJoint:
      allocator->Free(joint, sizeof(b2PrismaticJoint));
      break;

    case box2d.Joint.e_revoluteJoint:
      allocator->Free(joint, sizeof(b2RevoluteJoint));
      break;

    case box2d.Joint.e_pulleyJoint:
      allocator->Free(joint, sizeof(b2PulleyJoint));
      break;

    case box2d.Joint.e_gearJoint:
      allocator->Free(joint, sizeof(b2GearJoint));
      break;

    default:
      b2Assert(false);
      break;
    }*/
};
