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

goog.provide('box2d.PolyDef');

goog.require('box2d.ShapeDef');
goog.require('box2d.Shape');
goog.require('box2d.Vec2');

/**
 @constructor
 @extends {box2d.ShapeDef}
 */
box2d.PolyDef = function() {
  // The constructor for box2d.ShapeDef
  this.type = box2d.Shape.e_unknownShape;
  this.userData = null;
  this.localPosition = new box2d.Vec2(0.0, 0.0);
  this.localRotation = 0.0;
  this.friction = 0.2;
  this.restitution = 0.0;
  this.density = 0.0;
  this.categoryBits = 0x0001;
  this.maskBits = 0xFFFF;
  this.groupIndex = 0;
  //
  // initialize instance variables for references
  this.vertices = new Array(box2d.Settings.b2_maxPolyVertices);
  //
  this.type = box2d.Shape.e_polyShape;
  this.vertexCount = 0;

  for (var i = 0; i < box2d.Settings.b2_maxPolyVertices; i++) {
    this.vertices[i] = new box2d.Vec2();
  }
};

goog.inherits(box2d.PolyDef, box2d.ShapeDef);

box2d.PolyDef.prototype.SetVertices = function(vertexArray) {
  this.vertexCount = vertexArray.length;
  for (var i = 0; i < vertexArray.length; i++) {
    this.vertices[i].Set(vertexArray[i][0], vertexArray[i][1]);
  }
};
