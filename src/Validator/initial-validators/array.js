import _ from 'lodash';

export default {
  required: (value) => _.isArray(value) || !_.isEmpty(value),
  sizeof: (value, size) => value.length === size,
};
