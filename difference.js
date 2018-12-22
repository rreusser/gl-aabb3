module.exports = difference;

/**
 * Compute the bounding box which bounds the boolean subtraction of two bounding boxes.
 * Note that this does not represent the shape of the boolean operation but only the box which bounds it.
 *
 * @param {aabb3} out the box which bounds a - b
 * @param {aabb3} a the bounding box
 * @param {aabb3} b the bounding box to be subtracted
 * @returns {aabb3} out
 */
function difference (out, a, b) {
  var axmin = a[0];
  var aymin = a[1];
  var azmin = a[2];
  var axmax = a[3];
  var aymax = a[4];
  var azmax = a[5];

  var oxmin = axmin;
  var oymin = aymin;
  var ozmin = azmin;
  var oxmax = axmax;
  var oymax = aymax;
  var ozmax = azmax;

  var bxmin = b[0];
  var bymin = b[1];
  var bzmin = b[2];
  var bxmax = b[3];
  var bymax = b[4];
  var bzmax = b[5];

  // Check for full cover along each axia and only subtract if it doesn't leave a wedge
  if (bymin <= aymin && bymax >= aymax && bzmin <= azmin && bzmax >= azmax) {
    oxmin = Math.max(axmin, bxmax);
    oxmax = Math.min(axmax, bxmin);
  }

  if (bxmin <= axmin && bxmax >= axmax && bzmin <= azmin && bzmax >= azmax) {
    oymin = Math.max(aymin, bymax);
    oymax = Math.min(aymax, bymin);
  }

  if (bxmin <= axmin && bxmax >= axmax && bymin <= aymin && bymax >= aymax) {
    ozmin = Math.max(azmin, bzmax);
    ozmax = Math.min(azmax, bzmin);
  }

  out[0] = oxmin;
  out[1] = oymin;
  out[2] = ozmin;
  out[3] = oxmax;
  out[4] = oymax;
  out[5] = ozmax;

  return out;
}
