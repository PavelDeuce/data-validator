import _ from 'lodash';

export default {
  required: (value) => _.isNumber(value),
  positive: (value) => value > 0 || _.isNil(value),
  range: (value, min, max) => value >= min && value <= max,
};
