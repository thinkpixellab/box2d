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

goog.provide('box2d.BoxDef');

goog.require('box2d.ShapeDef');
goog.require('box2d.Vec2');

/**
 @constructor
 @extends {box2d.ShapeDef}
 */
box2d.BoxDef = function() {
  this.type = box2d.Shape.e_unknownShape;
  this.userData = null;
  /** @type {box2d.Vec2} */
  this.localPosition = new box2d.Vec2(0.0, 0.0);
  this.localRotation = 0.0;
  this.friction = 0.2;
  this.restitution = 0.0;
  this.density = 0.0;
  this.categoryBits = 0x0001;
  this.maskBits = 0xFFFF;
  this.groupIndex = 0;
  //
  this.type = box2d.Shape.e_boxShape;
  /** @type {box2d.Vec2} */
  this.extents = new box2d.Vec2(1.0, 1.0);
};
goog.inherits(box2d.BoxDef, box2d.ShapeDef);

/**
 @override
 */
box2d.BoxDef.prototype.ComputeMass = function(massData) {
  massData.center = new box2d.Vec2(0.0, 0.0);

  if (this.density == 0.0) {
    massData.mass = 0.0;
    massData.center.Set(0.0, 0.0);
    massData.I = 0.0;
  }

  massData.mass = 4.0 * this.density * this.extents.x * this.extents.y;
  massData.center.Set(0.0, 0.0);
  massData.I = massData.mass / 3.0 * box2d.Math.b2Dot(this.extents, box.extents);
};
