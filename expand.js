module.exports = expandRelative;

/**
 * Expand a bounding box with respect to its center by a fixed per-axis distance.
 *
 * @param {aabb3} out the destination bounding box
 * @param {aabb3} a the bounding box
 * @param {vec3} distance a per-axis expansion distance
 * @returns {aabb3} out
 */
function expandRelative (out, a, distance) {
  out[0] = a[0] - distance[0];
  out[1] = a[1] - distance[1];
  out[2] = a[2] - distance[2];

  out[3] = a[3] + distance[0];
  out[4] = a[4] + distance[1];
  out[5] = a[5] + distance[2];

  return out;
}
