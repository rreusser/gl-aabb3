module.exports = isPositive;

/**
 * Returns true if the the bounding box has positive extent in every dimension.
 *
 * @param {aabb3} a the bounding box
 * @returns {Boolean} true if the extent in each dimension is positive
 */
function isPositive (a) {
  return (a[3] > a[0]) && (a[4] > a[1]) && (a[5] > a[2]);
}
