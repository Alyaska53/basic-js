import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  const repeatTimes = (options.repeatTimes !== undefined) ? options.repeatTimes : 1;
  const separator = (options.separator !== undefined) ? String(options.separator) : '+';
  const additionSeparator = (options.additionSeparator !== undefined) ? String(options.additionSeparator) : '|';
  const addition = (options.addition !== undefined) ? String(options.addition) : '';
  const additionRepeatTimes = (options.additionRepeatTimes !== undefined) ? options.additionRepeatTimes : 1;
  
  let repeatingString = '';
  
  for (let i = 0; i < repeatTimes; i++) {
    repeatingString += String(str);

    for (let j = 0; j < additionRepeatTimes; j++) {
      repeatingString += addition;      
      
      if (j < (additionRepeatTimes - 1)) {
        repeatingString += additionSeparator;
      }
    }

    if (i < (repeatTimes - 1)) {
      repeatingString += separator;
    }
  }

  return repeatingString;
}
