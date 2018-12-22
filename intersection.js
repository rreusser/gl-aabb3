module.exports = intersection;

/**
 * Compute the box which bounds the intersection of a and b
 *
 * @param {aabb3} out the intersection of a and b
 * @param {aabb3} a the first bounding box
 * @param {aabb3} b the second bounding box
 * @dreturns {aabb3} out
 */
function intersection (out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);

  out[3] = Math.min(a[3], b[3]);
  out[4] = Math.min(a[4], b[4]);
  out[5] = Math.min(a[5], b[5]);

  return out;
}
