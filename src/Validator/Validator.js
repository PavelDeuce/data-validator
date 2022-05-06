import _ from 'lodash';
import StringSchema from './schemas/StringSchema.js';
import NumberSchema from './schemas/NumberSchema.js';
import ArraySchema from './schemas/ArraySchema.js';
import ObjectSchema from './schemas/ObjectSchema.js';

export default class Validator {
  constructor() {
    this.validatorsInitialSchema = {
      string: {
        required(value) {
          return _.isString(value) && !_.isEmpty(value) && !_.isNil(value);
        },
        minLength(value, length) {
          return value.length >= length;
        },
        contains(value, substr) {
          return value.includes(substr);
        },
      },
      number: {
        required(value) {
          return _.isNumber(value);
        },
        positive(value) {
          return value > 0 || _.isNil(value);
        },
        range(value, min, max) {
          return value >= min && value <= max;
        },
      },
      array: {
        required(value) {
          return _.isArray(value) || !_.isEmpty(value);
        },
        sizeof(value, size) {
          return value.length === size;
        },
      },
      object: {
        shape(object, validationObject) {
          return Object.entries(object).every(
            ([key, value]) => validationObject[key].isValid(value),
          );
        },
      },
    };
  }

  string() {
    return new StringSchema(this.validatorsInitialSchema.string);
  }

  number() {
    return new NumberSchema(this.validatorsInitialSchema.number);
  }

  array() {
    return new ArraySchema(this.validatorsInitialSchema.array);
  }

  object() {
    return new ObjectSchema(this.validatorsInitialSchema.object);
  }

  addValidator(schema, validatorName, validateFunction) {
    const currentSchema = this.validatorsInitialSchema[schema];
    if (!currentSchema) throw new Error('Unknown schema');
    currentSchema[validatorName] = validateFunction;
  }
}
