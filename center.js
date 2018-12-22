module.exports = center;

/**
 * Compute the vec3 center of an aabb3.
 *
 * @param {vec3} out the receiving vector
 * @param {aabb3} a a bounding box
 * @returns {vec3} out
 */
function center (out, a) {
  out[0] = 0.5 * (a[0] + a[3]);
  out[1] = 0.5 * (a[1] + a[4]);
  out[2] = 0.5 * (a[2] + a[5]);

  return out;
}
