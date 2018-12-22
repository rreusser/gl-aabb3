'use strict';

var test = require('tape');
var aabb3 = require('./');

test('center', function (t) {
  var a = aabb3.center(
    new Float32Array(6),
    new Float32Array([1, 2, 3, 4, 5, 6])
  );

  t.equal(a[0], 2.5);
  t.equal(a[1], 3.5);
  t.equal(a[2], 4.5);

  t.end();
});

test('clone', function (t) {
  var a = new Float32Array([1, 2, 3, 4, 5, 6]);
  var b = aabb3.clone(a);

  t.equal(a[0], 1);
  t.equal(a[1], 2);
  t.equal(a[2], 3);
  t.equal(a[3], 4);
  t.equal(a[4], 5);
  t.equal(a[5], 6);

  t.end();
});

test('create', function (t) {
  var a = aabb3.create();

  t.equal(a[0], 0);
  t.equal(a[1], 0);
  t.equal(a[2], 0);
  t.equal(a[3], 0);
  t.equal(a[4], 0);
  t.equal(a[5], 0);

  t.end();
});

test('diagonalLength', function (t) {
  var a = new Float32Array([1, 2, 3, 4, 6, 8]);
  var b = new Float32Array(3);
  aabb3.diagonal(b, a);

  t.equal(b[0], 3);
  t.equal(b[1], 4);
  t.equal(b[2], 5);

  t.end();
});

test('diagonalLength', function (t) {
  var a = new Float32Array([1, 2, 3, 4, 6, 8]);
  t.equal(aabb3.diagonalLength(a), Math.sqrt(50));
  t.end();
});

test('equals', function (t) {
  var a = new Float32Array([1.00000001, 2, 3.00000001, 4, 5, 5.9999999]);
  var b = new Float32Array([1, 2, 3, 4, 5, 6]);

  t.equal(aabb3.equals(a, b), true);

  t.end();
});

test('exactEquals', function (t) {
  var a = new Float32Array([1, 2, 3, 4, 5, 6]);
  var b = new Float32Array([1, 2, 3, 4, 5, 6]);

  t.equal(aabb3.exactEquals(a, b), true);

  t.end();
});

test('expand', function (t) {
  var a = new Float32Array([1, 2, 3, 4, 5, 6]);
  var b = new Float32Array([0.5, 1, 1.5]);

  aabb3.expand(a, a, b);

  t.equal(a[0], 0.5);
  t.equal(a[1], 1);
  t.equal(a[2], 1.5);
  t.equal(a[3], 4.5);
  t.equal(a[4], 6);
  t.equal(a[5], 7.5);

  t.end();
});

test('expandRelative', function (t) {
  var a = new Float32Array([1, 2, 3, 4, 5, 6]);
  var b = new Float32Array([0.5, 1, 1.5]);

  aabb3.expandRelative(a, a, b);

  t.equal(a[0], 1.75);
  t.equal(a[1], 2);
  t.equal(a[2], 2.25);
  t.equal(a[3], 3.25);
  t.equal(a[4], 5);
  t.equal(a[5], 6.75);

  t.end();
});

test('fromValues', function (t) {
  var a = new Float32Array([1, 2, 3, 4, 5, 6]);
  t.equal(a[0], 1);
  t.equal(a[1], 2);
  t.equal(a[2], 3);
  t.equal(a[3], 4);
  t.equal(a[4], 5);
  t.equal(a[5], 6);
  t.end();
});

test('intersection', function (t) {
  var a = new Float32Array([1, 1, 1, 3, 3, 3]);
  var b = new Float32Array([2, 2, 2, 4, 4, 4]);
  var c = aabb3.intersection(new Float32Array(6), a, b);

  t.equal(c[0], 2);
  t.equal(c[1], 2);
  t.equal(c[2], 2);
  t.equal(c[3], 3);
  t.equal(c[4], 3);
  t.equal(c[5], 3);

  t.end();
});

test('intersectsRay', function (t) {
  var a = new Float32Array([1, 2, 3, 4, 5, 6]);
  var origin = new Float32Array([1.5, -100, 4.5]);
  var direction = new Float32Array([0, 1, 0]);

  t.equal(aabb3.intersectsRay(a, origin, direction), true);

  t.end();
});

test('intersectsPlane', function (t) {
  var a = new Float32Array([1, 2, 3, 4, 5, 6]);
  var origin = new Float32Array([100, 3.5, 100]);
  var normal = new Float32Array([0, 1, 0]);

  t.equal(aabb3.intersectsPlane(a, origin, normal), true);

  t.end();
});

test('hasNonNegativeExtent', function (t) {
  var a = new Float32Array([1, 2, 3, 1, 5, 6]);
  t.equal(aabb3.hasNonNegativeExtent(a), true);
  t.end();
});

test('hasPositiveExtent', function (t) {
  var a = new Float32Array([1, 2, 3, 1, 5, 6]);
  t.equal(aabb3.hasPositiveExtent(a), false);
  t.end();
});

test('squaredRadius', function (t) {
  var a = new Float32Array([1, 2, 3, 4, 6, 8]);
  t.equal(aabb3.squaredRadius(a), 12.5);
  t.end();
});

test('squaredDiagonalLength', function (t) {
  var a = new Float32Array([1, 2, 3, 4, 6, 8]);
  t.equal(aabb3.squaredDiagonalLength(a), 50);
  t.end();
});

test('radius', function (t) {
  var a = new Float32Array([1, 2, 3, 4, 6, 8]);
  t.equal(aabb3.radius(a), Math.sqrt(12.5));
  t.end();
});

test('normalize', function (t) {
  var a = new Float32Array([1, 2, 10, 0, 6, -10]);
  aabb3.normalize(a, a);

  t.equal(a[0], 0.5);
  t.equal(a[1], 2);
  t.equal(a[2], 0);
  t.equal(a[3], 0.5);
  t.equal(a[4], 6);
  t.equal(a[5], 0);

  t.end();
});

test('translate', function (t) {
  var a = aabb3.translate(
    new Float32Array(6),
    new Float32Array([1, 2, 3, 4, 5, 6]),
    new Float32Array([2, 3, 4])
  );

  t.equal(a[0], 3);
  t.equal(a[1], 5);
  t.equal(a[2], 7);
  t.equal(a[3], 6);
  t.equal(a[4], 8);
  t.equal(a[5], 10);

  t.end();
});

test('scale', function (t) {
  var a = aabb3.scale(
    new Float32Array(6),
    new Float32Array([1, 2, 3, 4, 5, 6]),
    new Float32Array([-2, 3, -4])
  );

  t.equal(a[0], -8);
  t.equal(a[1], 6);
  t.equal(a[2], -24);
  t.equal(a[3], -2);
  t.equal(a[4], 15);
  t.equal(a[5], -12);

  t.end();
});

test('shape', function (t) {
  var a = new Float32Array([1, 2, 4, 8, 16, 32]);
  var b = new Float32Array(3);

  aabb3.shape(b, a);

  t.equal(b[0], 7);
  t.equal(b[1], 14);
  t.equal(b[2], 28);

  t.end();
});

test('surfaeArea', function (t) {
  var a = new Float32Array([1, 2, 4, 8, 16, 32]);
  t.equal(aabb3.surfaceArea(a), 1372);
  t.end();
});

test('union', function (t) {
  var a = new Float32Array([1, 2, 3, 4, 5, 6]);
  var b = new Float32Array([7, 8, 9, 10, 11, 12]);
  var c = aabb3.union(new Float32Array(6), a, b);

  t.equal(c[0], 1);
  t.equal(c[1], 2);
  t.equal(c[2], 3);

  t.equal(c[3], 10);
  t.equal(c[4], 11);
  t.equal(c[5], 12);
  t.end();
});

test('volume', function (t) {
  var a = new Float32Array([1, 2, 4, 8, 16, 32]);
  t.equal(aabb3.volume(a), 2744);
  t.end();
});
