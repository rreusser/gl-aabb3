# gl-aabb3

[![unstable](http://badges.github.io/stability-badges/dist/unstable.svg)](http://github.com/badges/stability-badges)

## Introduction

This module implements gl-matrix style functions for axis-aligned bounding boxes defined by the 6-tuple `(xmin, ymin, zmin, xmax, ymax, zmax)`.

## Usage

[![NPM](https://nodei.co/npm/gl-aabb3.png)](https://nodei.co/npm/gl-aabb3/)

### `aabb3 = require('gl-aabb3')`

Will load all of the module's functionality and expose it on a single
object. Note that any of the methods may also be required directly
from their files.

For example, the following are equivalent:

``` javascript
var scale = require('gl-aabb3').scale;
var scale = require('gl-aabb3/scale');
```

## API

  - [center()](#centeroutvec3-aaabb3)
  - [clone()](#cloneaaabb3)
  - [copy()](#copyoutaabb3-aaabb3)
  - [create()](#create)
  - [diagonal()](#diagonaloutvec3-aaabb3)
  - [diagonalLength()](#diagonallengthaaabb3)
  - [difference()](#differenceoutaabb3-aaabb3-baabb3)
  - [equals()](#equalsaaabb3-baabb3)
  - [exactEquals()](#exactequalsaaabb3-baabb3)
  - [expand()](#expandoutaabb3-aaabb3-distancevec3)
  - [expandRelative()](#expandrelativeoutaabb3-aaabb3-scalevec3)
  - [fromValues()](#fromvaluesxminnumber-yminnumber-zminnumber-xmaxnumber-ymaxnumber-zmaxnumber)
  - [hasNonNegativeExtent](#hasnonnegativeextentaaabb3)
  - [hasPositiveExtent](#haspositiveextentaaabb3)
  - [intersection()](#intersectionoutaabb3-aaabb3-baabb3)
  - [intersectsPlane()](#intersectsplaneaaabb3-originvec3-normalvec3)
  - [intersectsRay()](#intersectsplaneaaabb3-originvec3-normalvec3)
  - [normalize()](#normalizeoutaabb3-aaabb3)
  - [radius()](#radiusaaabb3)
  - [scale()](#scaleoutaabb3-aaabb3-scalevec3)
  - [set()](#setoutaabb3-xminnumber-yminnumber-zminnumber-xmaxnumber-ymaxnumber-zmaxnumber)
  - [shape()](#shapeoutvec3-aaabb3)
  - [squaredDiagonalLength()](#squareddiagonallengthaaabb3)
  - [squaredRadius()](#squaredradiusaaabb3)
  - [surfaceArea()](#surfaceareaaaabb3)
  - [transformMat3()](#transformmat3outaabb3-aaabb3-mmat3)
  - [transformMat4()](#transformmat4outaabb3-aaabb3-mmat4)
  - [transformQuat()](#transformquatoutaabb3-aaabb3-qquat)
  - [translate()](#translateoutaabb3-aaabb3-bvec3)
  - [union()](#unionoutaabb3-aaabb3-baabb3)
  - [volume()](#volumeaaabb3)

### center(out:vec3, a:aabb3)

  Compute the vec3 center of an aabb3.

### clone(a:aabb3)

  Create a new aabb3 initialized with values from an existing bounding box.

### copy(out:aabb3, a:aabb3)

  Copy the values from one bounding box to another.

### create()

  Create a new, empty aabb3.

### diagonal(out:vec3, a:aabb3)

  Compute the diagonal as a vec3.

### diagonalLength(a:aabb3)

  Compute the length of a diagonal.

### difference(out:aabb3, a:aabb3, b:aabb3)

  Compute the bounding box which bounds the boolean subtraction of two bounding boxes.
  Note that this does not represent the shape of the boolean operation but only the box which bounds it.

### equals(a:aabb3, b:aabb3)

  Returns whether or not the bounding boxes have approximately the same elements in the same position.

### exactEquals(a:aabb3, b:aabb3)

  Returns whether or not the bounding boxes exactly have the same elements in the same position (when compared with ===)

### expand(out:aabb3, a:aabb3, distance:vec3)

  Expand a bounding box with respect to its center by a fixed per-axis distance.

### expandRelative(out:aabb3, a:aabb3, scale:vec3)

  Expand a bounding box with respect to its center by a relative per-axis scale factor.

### fromValues(xmin:Number, ymin:Number, zmin:Number, xmax:Number, ymax:Number, zmax:Number)

  Creates a new aabb3 initialized with the given values.

### hasNonNegativeExtent(a:aabb3)

  Returns true if the the bounding box has non-negative extent in every dimension.

### hasPositiveExtent(a:aabb3)

  Returns true if the the bounding box has positive extent in every dimension.

### intersection(out:aabb3, a:aabb3, b:aabb3)

  Compute the box which bounds the intersection of a and b

### intersectsPlane(a:aabb3, origin:vec3, normal:vec3)

  Returns true if aabb3 intersects a plane defined by an origin and normal.

### intersectsRay(a:aabb3, origin:aabb3, direction:aabb3)

  Returns true if a given ray intersects the bounding box.

### normalize(out:aabb3, a:aabb3)

  Enforce non-negative extent in each dimension.
  If the extent in a dimension is negative, the bounds in that dimension will be moved to the center.

### radius(a:aabb3)

  Compute the length of a half-diagonal.

### scale(out:aabb3, a:aabb3, scale:vec3)

  Scale a bounding box by a vec3 in each respective dimension

### set(out:aabb3, xmin:Number, ymin:Number, zmin:Number, xmax:Number, ymax:Number, zmax:Number)

  Set the components of a aabb3 to the given values.

### shape(out:vec3, a:aabb3)

  Return the shape of the box as a vec3.

### squaredDiagonalLength(a:aabb3)

  Compute the square of the length of a diagonal.

### squaredRadius(a:aabb3)

  Compute the squared length of a half-diagonal.

### surfaceArea(a:aabb3)

  Compute the surface area of a bounding box.

### transformMat3(out:aabb3, a:aabb3, m:mat3)

  Transforms the aabb3 with a mat3. Note that the result will be large enough to fully bound the transformed input.

### transformMat4(out:aabb3, a:aabb3, m:mat4)

  Transforms the aabb3 with a mat4. 4th vector component is implicitly '1'. Note that the result will be large enough to fully bound the transformed input.

### transformQuat(out:aabb3, a:aabb3, q:quat)

  Transforms the aabb3 with a quat. Note that the result will be large enough to fully bound the transformed input.

### translate(out:aabb3, a:aabb3, b:vec3)

  Translate a bounding box by a vec3.

### union(out:aabb3, a:aabb3, b:aabb3)

  Compute the bounding box which bounds the union of two bounding boxes.

### volume(a:aabb3)

  Compute the volume of a bounding box.

## License

&copy; 2018 Ricky Reusser. MIT License.
