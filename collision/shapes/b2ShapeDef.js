/*
* Copyright (c) 2006-2007 Erin Catto http:
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked, and must not be
* misrepresented the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/

goog.provide('box2d.ShapeDef');

goog.require('box2d.Shape.Type');
goog.require('box2d.Vec2');

/** @constructor */
box2d.ShapeDef = function() {
  this.type = box2d.Shape.Type.unknownShape;
  this.userData = null;
  this.localPosition = new box2d.Vec2(0.0, 0.0);
  this.localRotation = 0.0;
  this.friction = 0.2;
  this.restitution = 0.0;
  this.density = 0.0;
  this.categoryBits = 0x0001;
  this.maskBits = 0xFFFF;
  this.groupIndex = 0;
};

box2d.ShapeDef.prototype.ComputeMass = function(massData) {

  massData.center = new box2d.Vec2(0.0, 0.0);

  if (this.density == 0.0) {
    massData.mass = 0.0;
    massData.center.Set(0.0, 0.0);
    massData.I = 0.0;
  }

  switch (this.type) {
  case box2d.Shape.Type.circleShape:
    {
      var circle = this;
      massData.mass = this.density * box2d.Settings.b2_pi * circle.radius * circle.radius;
      massData.center.Set(0.0, 0.0);
      massData.I = 0.5 * (massData.mass) * circle.radius * circle.radius;
    }
    break;

  case box2d.Shape.Type.polyShape:
    {
      var poly = this;
      box2d.Shape.PolyMass(massData, poly.vertices, poly.vertexCount, this.density);
    }
    break;

  default:
    massData.mass = 0.0;
    massData.center.Set(0.0, 0.0);
    massData.I = 0.0;
    break;
  }
};

// The collision category bits. Normally you would just set one bit.
box2d.ShapeDef.prototype.categoryBits = 0;

// The collision mask bits. This states the categories that this
// shape would accept for collision.
box2d.ShapeDef.prototype.maskBits = 0;

// Collision groups allow a certain group of objects to never collide (negative)
// or always collide (positive). Zero means no collision group. Non-zero group
// filtering always wins against the mask bits.
box2d.ShapeDef.prototype.groupIndex = 0;
