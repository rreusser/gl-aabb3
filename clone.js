module.exports = clone;

/**
 * Create a new aabb3 initialized with values from an existing bounding box.
 *
 * @param {aabb3} a bounding box to clone
 * @returns {aabb3} a new 3D bounding box
 */
function clone(a) {
  var out = new Float32Array(6);

  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];

  return out;
}
