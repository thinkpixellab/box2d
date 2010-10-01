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

goog.provide('box2d.Math');

/**
 @const 
 @param {number} x
 @return {boolean}
 */
box2d.Math.b2IsValid = function(x) {
  return isFinite(x);
};
/**
 @const 
 @param {box2d.Vec2} a
 @param {box2d.Vec2} b
 @return {number}
 */
box2d.Math.b2Dot = function(a, b) {
  return a.x * b.x + a.y * b.y;
};
/**
 @const 
 @param {box2d.Vec2} a
 @param {box2d.Vec2} b
 @return {number}
 */
box2d.Math.b2CrossVV = function(a, b) {
  return a.x * b.y - a.y * b.x;
};
/**
 @const 
 @param {box2d.Vec2} a
 @param {number} s
 @return {box2d.Vec2}
 */
box2d.Math.b2CrossVF = function(a, s) {
  return new box2d.Vec2(s * a.y, -s * a.x);
};
/**
 @const 
 @param {number} s
 @param {box2d.Vec2} a
 @return {!box2d.Vec2}
 */
box2d.Math.b2CrossFV = function(s, a) {
  return new box2d.Vec2(-s * a.y, s * a.x);
};
/**
 @const 
 @param {!box2d.Mat22} A
 @param {!box2d.Vec2} v
 @return {!box2d.Vec2}
 */
box2d.Math.b2MulMV = function(A, v) {
  var u = new box2d.Vec2(A.col1.x * v.x + A.col2.x * v.y, A.col1.y * v.x + A.col2.y * v.y);
  return u;
};
/**
 @const 
 @return {box2d.Vec2}
 */
box2d.Math.b2MulTMV = function(A, v) {
  var u = new box2d.Vec2(box2d.Math.b2Dot(v, A.col1), box2d.Math.b2Dot(v, A.col2));
  return u;
};
/**
 @const 
 @param {box2d.Vec2} a
 @param {box2d.Vec2} b
 @return {!box2d.Vec2}
 */
box2d.Math.AddVV = function(a, b) {
  return new box2d.Vec2(a.x + b.x, a.y + b.y);
};
box2d.Math.SubtractVV = function(a, b) {
  return new box2d.Vec2(a.x - b.x, a.y - b.y);
};
box2d.Math.MulFV = function(s, a) {
  return new box2d.Vec2(s * a.x, s * a.y);
};
box2d.Math.AddMM = function(A, B) {
  var C = new box2d.Mat22(0, box2d.Math.AddVV(A.col1, B.col1), box2d.Math.AddVV(A.col2, B.col2));
  return C;
};
box2d.Math.b2MulMM = function(A, B) {
  var C = new box2d.Mat22(0, box2d.Math.b2MulMV(A, B.col1), box2d.Math.b2MulMV(A, B.col2));
  return C;
};
box2d.Math.b2MulTMM = function(A, B) {
  var c1 = new box2d.Vec2(box2d.Math.b2Dot(A.col1, B.col1), box2d.Math.b2Dot(A.col2, B.col1));
  var c2 = new box2d.Vec2(box2d.Math.b2Dot(A.col1, B.col2), box2d.Math.b2Dot(A.col2, B.col2));
  var C = new box2d.Mat22(0, c1, c2);
  return C;
};
box2d.Math.b2Abs = function(a) {
  return a > 0.0 ? a : -a;
};
box2d.Math.b2AbsV = function(a) {
  var b = new box2d.Vec2(box2d.Math.b2Abs(a.x), box2d.Math.b2Abs(a.y));
  return b;
};
box2d.Math.b2AbsM = function(A) {
  var B = new box2d.Mat22(0, box2d.Math.b2AbsV(A.col1), box2d.Math.b2AbsV(A.col2));
  return B;
};
box2d.Math.b2Min = function(a, b) {
  return a < b ? a : b;
};
box2d.Math.b2MinV = function(a, b) {
  var c = new box2d.Vec2(box2d.Math.b2Min(a.x, b.x), box2d.Math.b2Min(a.y, b.y));
  return c;
};
box2d.Math.b2Max = function(a, b) {
  return a > b ? a : b;
};
box2d.Math.b2MaxV = function(a, b) {
  var c = new box2d.Vec2(box2d.Math.b2Max(a.x, b.x), box2d.Math.b2Max(a.y, b.y));
  return c;
};
box2d.Math.b2Clamp = function(a, low, high) {
  return box2d.Math.b2Max(low, box2d.Math.b2Min(a, high));
};
box2d.Math.b2ClampV = function(a, low, high) {
  return box2d.Math.b2MaxV(low, box2d.Math.b2MinV(a, high));
};
box2d.Math.b2Swap = function(a, b) {
  var tmp = a[0];
  a[0] = b[0];
  b[0] = tmp;
};
box2d.Math.b2Random = function() {
  return Math.random() * 2 - 1;
};
box2d.Math.b2NextPowerOfTwo = function(x) {
  x |= (x >> 1) & 0x7FFFFFFF;
  x |= (x >> 2) & 0x3FFFFFFF;
  x |= (x >> 4) & 0x0FFFFFFF;
  x |= (x >> 8) & 0x00FFFFFF;
  x |= (x >> 16) & 0x0000FFFF;
  return x + 1;
};
box2d.Math.b2IsPowerOfTwo = function(x) {
  var result = x > 0 && (x & (x - 1)) == 0;
  return result;
};
