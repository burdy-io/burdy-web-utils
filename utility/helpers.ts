/**
 * Utility function to execute callback for eack key->value pair.
 */
export const forEach = (obj, callback) => {
  if (obj) {
    for (const key in obj) { // eslint-disable-line no-restricted-syntax
      if ({}.hasOwnProperty.call(obj, key)) {
        callback(key, obj[key]);
      }
    }
  }
}

/**
 * The function returns true if the string passed to it has no content.
 */
export const isEmptyString = (str) => {
  if (str === undefined || str === null || str.length === 0 || str.trim().length === 0) {
    return true;
  }
  return false;
}
