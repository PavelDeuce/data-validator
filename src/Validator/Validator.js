import StringSchema from './schemas/StringSchema.js';
import NumberSchema from './schemas/NumberSchema.js';
import ArraySchema from './schemas/ArraySchema.js';
import ObjectSchema from './schemas/ObjectSchema.js';
import initValidators from './initial-validators/index.js';
import errorMessages from './constants.js';

export default class Validator {
  constructor() {
    this.validatorsInitialSchema = initValidators();
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

  addValidator(schemaName, validatorName, validateFunction) {
    const currentSchema = this.validatorsInitialSchema[schemaName];
    if (!currentSchema) throw new Error(errorMessages.unknownSchema(schemaName));
    currentSchema[validatorName] = validateFunction;
  }
}
