module.exports = normalize;

/**
 * Enforce non-negative extent in each dimension.
 * If the extent in a dimension is negative, the bounds in that dimension will be moved to the center.
 *
 * @param {aabb3} out an equivalent bounding box with strictly non-negative extent in each dimension
 * @param {aabb3} a the bounding box
 * @returns {aabb3} out
 */
function normalize (out, a) {
  var axmin = a[0];
  var aymin = a[1];
  var azmin = a[2];
  var axmax = a[3];
  var aymax = a[4];
  var azmax = a[5];

  if (axmax < axmin) {
    out[0] = out[3] = 0.5 * (axmax + axmin);
  } else {
    out[0] = axmin;
    out[3] = axmax;
  }

  if (aymax < aymin) {
    out[1] = out[4] = 0.5 * (aymax + aymin);
  } else {
    out[1] = aymin;
    out[4] = aymax;
  }

  if (azmax < azmin) {
    out[2] = out[5] = 0.5 * (azmax + azmin);
  } else {
    out[2] = azmin;
    out[5] = azmax;
  }

  return out;
}
