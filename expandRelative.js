module.exports = expandRelative;

/**
 * Expand a bounding box with respect to its center by a relative per-axis scale factor.
 *
 * @param {aabb3} out the destination bounding box
 * @param {aabb3} a the bounding box
 * @param {vec3} scale a per-axis expansion factor
 * @returns {aabb3} out
 */
function expandRelative (out, a, scale) {
  var cx = 0.5 * (a[3] + a[0]);
  var cy = 0.5 * (a[4] + a[1]);
  var cz = 0.5 * (a[5] + a[2]);

  var dx = 0.5 * (a[3] - a[0]);
  var dy = 0.5 * (a[4] - a[1]);
  var dz = 0.5 * (a[5] - a[2]);

  var sx = scale[0];
  var sy = scale[1];
  var sz = scale[2];

  out[0] = cx - dx * sx;
  out[1] = cy - dy * sy;
  out[2] = cz - dz * sz;

  out[3] = cx + dx * sx;
  out[4] = cy + dy * sy;
  out[5] = cz + dz * sz;

  return out;
}
