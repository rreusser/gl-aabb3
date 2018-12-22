module.exports = squaredDiagonalLength;

/**
 * Compute the square of the length of a diagonal.
 *
 * @param {aabb3} a the bounding box
 * @returns {Number} the square of the length of a diagonal
 */
function squaredDiagonalLength (a) {
  var dx = a[3] - a[0];
  var dy = a[4] - a[1];
  var dz = a[5] - a[2];
  return dx * dx + dy * dy + dz * dz;
}
