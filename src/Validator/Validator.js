import StringSchema from './schemas/StringSchema.js';
import NumberSchema from './schemas/NumberSchema.js';
import ArraySchema from './schemas/ArraySchema.js';
import ObjectSchema from './schemas/ObjectSchema.js';
import validatorsInitialSchema from './initial-validators/index.js';

export default class Validator {
  constructor() {
    this.validatorsInitialSchema = validatorsInitialSchema;
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
