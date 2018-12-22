module.exports = volume;

/**
 * Compute the volume of a bounding box.
 *
 * @param {aabb3} a the bounding box
 * @returns {Number} the volume of a
 */
function volume (a) {
  return (a[3] - a[0]) * (a[4] - a[1]) * (a[5] - a[2]);
}
