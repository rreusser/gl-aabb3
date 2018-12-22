module.exports = translate;

/**
 * Translate a bounding box by a vec3.
 *
 * @param {aabb3} out the receiving vector
 * @param {aabb3} a the bounding box
 * @param {vec3} b a vector by which to translate a
 * @returns {aabb3} out
 */
function translate(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[0];
  out[4] = a[4] + b[1];
  out[5] = a[5] + b[2];

  return out;
}
