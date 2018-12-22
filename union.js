module.exports = union;

/**
 * Compute the bounding box which bounds the union of two bounding boxes.
 *
 * @param {aabb3} out a bounding box which bounds the union of a and b
 * @param {aabb3} a the first bounding box
 * @param {aabb3} b the second bounding box
 * @returns {aabb3} out
 */
function union (out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);

  out[3] = Math.max(a[3], b[3]);
  out[4] = Math.max(a[4], b[4]);
  out[5] = Math.max(a[5], b[5]);

  return out;
}
