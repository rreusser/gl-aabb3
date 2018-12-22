module.exports = equals;

var EPSILON = require('./epsilon');

/**
 * Returns whether or not the bounding boxes have approximately the same elements in the same position.
 *
 * @param {aabb3} a The first bounding box.
 * @param {aabb3} b The second bounding box.
 * @returns {Boolean} True if the bounding boxes are equal, false otherwise.
 */
function equals(a, b) {
  var axmin = a[0];
  var aymin = a[1];
  var azmin = a[2];
  var axmax = a[3];
  var aymax = a[4];
  var azmax = a[5];

  var bxmin = b[0];
  var bymin = b[1];
  var bzmin = b[2];
  var bxmax = b[3];
  var bymax = b[4];
  var bzmax = b[5];

  return (Math.abs(axmin - bxmin) <= EPSILON * Math.max(1.0, Math.abs(axmin), Math.abs(bxmin)) &&
          Math.abs(aymin - bymin) <= EPSILON * Math.max(1.0, Math.abs(aymin), Math.abs(bymin)) &&
          Math.abs(azmin - bzmin) <= EPSILON * Math.max(1.0, Math.abs(azmin), Math.abs(bzmin)) &&
          Math.abs(axmax - bxmax) <= EPSILON * Math.max(1.0, Math.abs(axmax), Math.abs(bxmax)) &&
          Math.abs(aymax - bymax) <= EPSILON * Math.max(1.0, Math.abs(aymax), Math.abs(bymax)) &&
          Math.abs(azmax - bzmax) <= EPSILON * Math.max(1.0, Math.abs(azmax), Math.abs(bzmax)));
}
