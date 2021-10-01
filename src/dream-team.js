import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let dreamTeam = [];
  if (Array.isArray(members)) {
    members.forEach(function(el) {
      if (typeof(el) === 'string') {
        dreamTeam.push(el.trim().charAt(0).toUpperCase());
      }
    });
    return dreamTeam.sort().join('')
  }
  return false;
}
