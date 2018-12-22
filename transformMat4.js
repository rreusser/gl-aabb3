module.exports = transformMat4;

/**
 * Transforms the aabb3 with a mat4. 4th vector component is implicitly '1'. Note that the result will be large enough to fully bound the transformed input.
 *
 * @param {aabb3} out the receiving bounding box
 * @param {aabb3} a the bounding box to transform
 * @param {mat4} m matrix to transform with
 * @returns {aabb3} out
 */
function transformMat4(out, a, m) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  var x1 = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  var y1 = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  var z1 = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;

  x = a[3];
  y = a[4];
  z = a[5];
  w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  var x2 = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  var y2 = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  var z2 = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;

  out[0] = Math.min(x1, x2);
  out[1] = Math.min(y1, y2);
  out[2] = Math.min(z1, z2);
  out[3] = Math.max(x1, x2);
  out[4] = Math.max(y1, y2);
  out[5] = Math.max(z1, z2);

  return out
}
