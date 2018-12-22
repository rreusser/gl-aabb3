module.exports = set;

/**
 * Set the components of a aabb3 to the given values.
 *
 * @param {aabb3} out the receiving vector
 * @param {Number} x Lower x component
 * @param {Number} y Lower y component
 * @param {Number} z Lower z component
 * @param {Number} x Upper x component
 * @param {Number} y Upper y component
 * @param {Number} z Upper z component
 * @returns {aabb3} out
 */
function set(out, xmin, ymin, zmin, xmax, ymax, zmax) {
  out[0] = xmin;
  out[1] = ymin;
  out[2] = zmin;
  out[3] = xmax;
  out[4] = ymax;
  out[5] = zmax;

  return out;
}
