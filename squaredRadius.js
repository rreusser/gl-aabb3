module.exports = squaredRadius;

/**
 * Compute the squared length of a half-diagonal.
 *
 * @param {aabb3} a the bounding box
 * @returns {Number} the squared length of a half-diagonal
 */
function squaredRadius (a) {
  var dx = a[3] - a[0];
  var dy = a[4] - a[1];
  var dz = a[5] - a[2];
  return 0.25 * (dx * dx + dy * dy + dz * dz);
}
