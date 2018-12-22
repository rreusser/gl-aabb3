module.exports = scale;

/**
 * Scale a bounding box by a vec3 in each respective dimension
 *
 * @param {aabb3} out the receiving bounding box
 * @param {aabb3} a the bounding box
 * @param {vec3} scale the per-axis scale
 * @returns {aabb3} out
 */
function scale(out, a, scale) {
  var x1 = a[0] * scale[0];
  var y1 = a[1] * scale[1];
  var z1 = a[2] * scale[2];
  var x2 = a[3] * scale[0];
  var y2 = a[4] * scale[1];
  var z2 = a[5] * scale[2];

  out[0] = Math.min(x1, x2);
  out[1] = Math.min(y1, y2);
  out[2] = Math.min(z1, z2);
  out[3] = Math.max(x1, x2);
  out[4] = Math.max(y1, y2);
  out[5] = Math.max(z1, z2);

  return out;
}
