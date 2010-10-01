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

goog.provide('box2d.Vec2');

goog.require('box2d.Math');

// box2d.Vec2 has no constructor so that it
// can be placed in a union.
/**
 @constructor
 @extends {goog.math.Vec2}
 @param {number=} x_
 @param {number=} y_
*/
box2d.Vec2 = function(x_, y_) {

  if (x_ === undefined) {
    x_ = 0;
  }
  /** @type {number} */
  this.x = x_;

  if (y_ === undefined) {
    y_ = 0;
  }
  /** @type {number} */
  this.y = y_;
};
goog.inherits(box2d.Vec2, goog.math.Vec2);

box2d.Vec2.prototype.SetZero = function() {
  this.x = 0.0;
  this.y = 0.0;
};

/** @param {number} x_
 @param {number} y_ */
box2d.Vec2.prototype.Set = function(x_, y_) {
  this.x = x_;
  this.y = y_;
};

/** @param {box2d.Vec2} v */
box2d.Vec2.prototype.SetV = function(v) {
  this.x = v.x;
  this.y = v.y;
};

/** @return {box2d.Vec2} */
box2d.Vec2.prototype.Negative = function() {
  return new box2d.Vec2(-this.x, -this.y);
};

/** @return {box2d.Vec2} */
box2d.Vec2.prototype.Copy = function() {
  return new box2d.Vec2(this.x, this.y);
};

/** @param {box2d.Mat22} A */
box2d.Vec2.prototype.MulM = function(A) {
  var tX = this.x;
  this.x = A.col1.x * tX + A.col2.x * this.y;
  this.y = A.col1.y * tX + A.col2.y * this.y;
};

/** @param {box2d.Mat22} A */
box2d.Vec2.prototype.MulTM = function(A) {
  var tX = box2d.Math.b2Dot(this, A.col1);
  this.y = box2d.Math.b2Dot(this, A.col2);
  this.x = tX;
};

/** @param {number} s */
box2d.Vec2.prototype.CrossVF = function(s) {
  var tX = this.x;
  this.x = s * this.y;
  this.y = -s * tX;
};

/** @param {number} s */
box2d.Vec2.prototype.CrossFV = function(s) {
  var tX = this.x;
  this.x = -s * this.y;
  this.y = s * tX;
};

/** @param {box2d.Vec2} b */
box2d.Vec2.prototype.MinV = function(b) {
  this.x = this.x < b.x ? this.x : b.x;
  this.y = this.y < b.y ? this.y : b.y;
};

/** @param {box2d.Vec2} b */
box2d.Vec2.prototype.MaxV = function(b) {
  this.x = this.x > b.x ? this.x : b.x;
  this.y = this.y > b.y ? this.y : b.y;
};

box2d.Vec2.prototype.Abs = function() {
  this.x = Math.abs(this.x);
  this.y = Math.abs(this.y);
};

/** @return {number} */
box2d.Vec2.prototype.Normalize = function() {
  var length = this.magnitude();
  if (length < Number.MIN_VALUE) {
    return 0.0;
  }
  var invLength = 1.0 / length;
  this.x *= invLength;
  this.y *= invLength;

  return length;
};

/** @return {boolean} */
box2d.Vec2.prototype.IsValid = function() {
  return box2d.Math.b2IsValid(this.x) && box2d.Math.b2IsValid(this.y);
};

/**
 @param {number} x_
 @param {number} y_
 @return {box2d.Vec2} */
box2d.Vec2.Make = function(x_, y_) {
  return new box2d.Vec2(x_, y_);
};
