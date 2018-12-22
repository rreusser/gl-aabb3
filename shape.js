module.exports = shape;

/**
 * Return the shape of the box as a vec3.
 *
 * @param {vec3} out size of the box in each dimension, respectively
 * @param {aabb3} a the bounding box
 * @returns {vec3} out
 */
function shape (out, a) {
  out[0] = a[3] - a[0];
  out[1] = a[4] - a[1];
  out[2] = a[5] - a[2];
  return out;
}
