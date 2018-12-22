module.exports = transformQuat;

/**
 * Transforms the aabb3 with a quat. Note that the result will be large enough to fully bound the transformed input.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */
function transformQuat(out, a, q) {
  var x = a[0];
  var y = a[1];
  var z = a[2];

  var qx = q[0];
  var qy = q[1];
  var qz = q[2];
  var qw = q[3];

  // calculate quat * vec
  var ix = qw * x + qy * z - qz * y;
  var iy = qw * y + qz * x - qx * z;
  var iz = qw * z + qx * y - qy * x;
  var iw = -qx * x - qy * y - qz * z;

  x = a[3];
  y = a[4];
  z = a[5];

    // calculate quat * vec
  ix = qw * x + qy * z - qz * y;
  iy = qw * y + qz * x - qx * z;
  iz = qw * z + qx * y - qy * x;
  iw = -qx * x - qy * y - qz * z;

  // calculate result * inverse quat
  var x2 = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  var y2 = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  var z2 = iz * qw + iw * -qz + ix * -qy - iy * -qx;

  out[0] = Math.min(x1, x2);
  out[1] = Math.min(y1, y2);
  out[2] = Math.min(z1, z2);
  out[3] = Math.max(x1, x2);
  out[4] = Math.max(y1, y2);
  out[5] = Math.max(z1, z2);

  return out;
}
