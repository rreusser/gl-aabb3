module.exports = create;

/**
 * Create a new, empty aabb3.
 *
 * @returns {aabb3} a new 3D vector
 */
function create () {
  var out = new Float32Array(6);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 0;
  return out;
}
