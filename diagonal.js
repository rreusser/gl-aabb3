module.exports = diagonal;

/**
 * Compute the diagonal as a vec3.
 *
 * @param {vec3} out the diagonal
 * @param {aabb3} a the bounding box
 * @returns {out} out
 */
function diagonal (out, a) {
  out[0] = a[3] - a[0];
  out[1] = a[4] - a[1];
  out[2] = a[5] - a[2];
  
  return out;
}
