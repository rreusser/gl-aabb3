module.exports = intersectsRay;

/**
 * Returns true if a given ray intersects the bounding box.
 *
 * @param {aabb3} a the bounding box
 * @param {vec3} origin the ray origin
 * @param {vec3} direction the ray direction
 * @returns {Boolean} true if the ray intersects the bounding box
 *
 * This code is based on code originally found in the the bvh-tree module
 * Source: https://github.com/benraziel/bvh-tree
 * Copyright (c) 2015 Ben Raziel. MIT License.
 */
function intersectsRay (a, origin, direction) {
  var xmin = a[0];
  var ymin = a[1];
  var zmin = a[2];
  var xmax = a[3];
  var ymax = a[4];
  var zmax = a[5];

  var ox = origin[0];
  var oy = origin[1];
  var oz = origin[2];

  var idx = 1.0 / direction[0];
  var idy = 1.0 / direction[1];
  var idz = 1.0 / direction[2];

  var txmin = ((idx >= 0 ? xmin : xmax) - ox) * idx;
  var txmax = ((idx >= 0 ? xmax : xmin) - ox) * idx;

  var tymin = ((idy >= 0 ? ymin : ymax) - oy) * idy;
  var tymax = ((idy >= 0 ? ymax : ymin) - oy) * idy;

  if ((txmin > tymax) || (tymin > txmax)) {
    return false;
  }

  // These lines also handle the case where tmin or tmax is NaN
  // (result of 0 * Infinity). x !== x returns true if x is NaN
  if (tymin > txmin || txmin !== txmin) txmin = tymin;
  if (tymax < txmax || txmax !== txmax) txmax = tymax;

  var tzmin = ((idz >= 0 ? zmin : zmax) - oz) * idz;
  var tzmax = ((idz >= 0 ? zmax : zmin) - oz) * idz;

  if ((txmin > tzmax) || (tzmin > txmax)) {
    return false;
  }

  if (tzmin > txmin || txmin !== txmin) txmin = tzmin;
  if (tzmax < txmax || txmax !== txmax) txmax = tzmax;

  //return point closest to the ray (positive side)
  if (txmax < 0) {
    return false;
  }

  return true;
};
