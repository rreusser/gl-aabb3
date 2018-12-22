module.exports = surfaceArea;

/**
 * Compute the surface area of a bounding box.
 *
 * @param {aabb3} a the bounding box
 * @returns {Number} the surface area
 */
function surfaceArea (a) {
  var dx = a[3] - a[0];
  var dy = a[4] - a[1];
  var dz = a[5] - a[2];

  return 2.0 * (dy * dz + dx * dz + dx * dy);
}
