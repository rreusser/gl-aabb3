module.exports = transformMat3;

/**
 * Transforms the aabb3 with a mat3. Note that the result will be large enough to fully bound the transformed input.
 *
 * @param {aabb3} out the receiving bounding box
 * @param {aabb3} a the bounding box to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {aabb3} out
 */
function transformMat3(out, a, m) {
  var x = a[0];
  var y = a[1];
  var z = a[2];

  var x1 = x * m[0] + y * m[3] + z * m[6];
  var y1 = x * m[1] + y * m[4] + z * m[7];
  var z1 = x * m[2] + y * m[5] + z * m[8];

  x = a[3];
  y = a[4];
  z = a[5];
  var x2 = x * m[0] + y * m[3] + z * m[6];
  var y2 = x * m[1] + y * m[4] + z * m[7];
  var z2 = x * m[2] + y * m[5] + z * m[8];

  out[0] = Math.min(x1, x2);
  out[1] = Math.min(y1, y2);
  out[2] = Math.min(z1, z2);
  out[3] = Math.max(x1, x2);
  out[4] = Math.max(y1, y2);
  out[5] = Math.max(z1, z2);

  return out;
}
