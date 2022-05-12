import _ from 'lodash';

export default {
  required: (value) => _.isString(value) && !_.isEmpty(value) && !_.isNil(value),
  minLength: (value, length) => value.length >= length,
  contains: (value, substr) => value.includes(substr),
};
