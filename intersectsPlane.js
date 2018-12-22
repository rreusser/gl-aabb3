'use strict';

/*
 * Returns true if aabb3 intersects a plane defined by an origin and normal.
 *
 * @param {aabb3} a the bounding box
 * @param {vec3} origin point through which the plane passes
 * @param {vec3} normal *normalized* normal vector
 * @returns {Boolean} true if plane intersects aabb.
 *
 * @note This function uses a standard technique from view frustum culling in which the
 * "p-vertex" is the positive-most vertex and the "n-vertex" is the negativemost vertex,
 * relative to the orientation of the plane. You know a priori which corners these are
 * by testing the sign of the plane normal vector.
 */
module.exports = function (a, origin, normal) {
  var pVertexX = normal[0] > 0 ? a[3] : a[0];
  var nVertexX = normal[0] > 0 ? a[0] : a[3];

  var pVertexY = normal[1] > 0 ? a[4] : a[1];
  var nVertexY = normal[1] > 0 ? a[1] : a[4];

  var pVertexZ = normal[2] > 0 ? a[5] : a[2];
  var nVertexZ = normal[2] > 0 ? a[2] : a[5];

  var pDist = (pVertexX - origin[0]) * normal[0] +
              (pVertexY - origin[1]) * normal[1] +
              (pVertexZ - origin[2]) * normal[2];

  var nDist = (nVertexX - origin[0]) * normal[0] +
              (nVertexY - origin[1]) * normal[1] +
              (nVertexZ - origin[2]) * normal[2];

  // The plane intersects if the signs are opposite (or if one is zero).
  return pDist * nDist <= 0;
};
