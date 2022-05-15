import initStringValidators from './string.js';
import initNumberValidators from './number.js';
import initArrayValidators from './array.js';
import initObjectValidators from './object.js';

export default () => ({
  string: initStringValidators(),
  number: initNumberValidators(),
  array: initArrayValidators(),
  object: initObjectValidators(),
});
