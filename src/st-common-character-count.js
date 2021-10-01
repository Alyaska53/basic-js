import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let obj1 = {};
  let obj2 = {};
  let number = 0;

  for (let i = 0; i < s1.length; i++) {
    obj1[s1[i]] = (obj1[s1[i]]) ? (obj1[s1[i]] + 1) : 1;
  }

  for (let i = 0; i < s2.length; i++) {
    obj2[s2[i]] = (obj2[s2[i]]) ? (obj2[s2[i]] + 1) : 1;
  }

  for (let key in obj1) {
    if (obj2[key]) {
      number += Math.min(obj1[key], obj2[key]);
    }
  }

  return number;
}
