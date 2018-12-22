module.exports = exactEquals

/**
 * Returns whether or not the bounding boxes exactly have the same elements in the same position (when compared with ===)
 *
 * @param {aabb3} a The first bounding box.
 * @param {aabb3} b The second bounding box.
 * @returns {Boolean} True if the bounding box are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] &&
         a[1] === b[1] &&
         a[2] === b[2] && 
         a[3] === b[3] &&
         a[4] === b[4] &&
         a[5] === b[5];
}
