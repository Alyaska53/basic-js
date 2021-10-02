import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  let result = [];
  let count = 1;

  names.forEach(element => {
    if (result.includes(element)) {
      result.push( (result.includes(element + `(${count})`)) ? element + `(${count + 1})` : element + `(${count})` );
    } else {
      result.push(element);
    }
  });

  return result;
}
