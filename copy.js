module.exports = copy;

/**
 * Copy the values from one bounding box to another.
 *
 * @param {aabb3} out the receiving bounding box
 * @param {aabb3} a the source bounding box
 * @returns {aabb3} out
 */
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    return out;
}
