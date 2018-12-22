module.exports = fromValues;

/**
 * Creates a new aabb3 initialized with the given values.
 *
 * @param {Number} xmin Lower x bound
 * @param {Number} ymin Lower y bound
 * @param {Number} zmin Lower z bound
 * @param {Number} xmax Upper x bound
 * @param {Number} ymax Upper y bound
 * @param {Number} zmax Upper z bound
 * @returns {vec3} a new 3D bounding box
 */
function fromValues (xmin, ymin, zmin, xmax, ymax, zmax) {
  var out = new Float32Array(6);

  out[0] = xmin;
  out[1] = ymin;
  out[2] = zmin;
  out[3] = xmax;
  out[4] = ymax;
  out[5] = zmax;

  return out;
}
