import BaseSchema from './BaseSchema.js';

export default class StringSchema extends BaseSchema {
  required() {
    this.applyValidator('required');
    return this;
  }

  minLength(length) {
    this.applyValidator('minLength', length);
    return this;
  }

  contains(substr) {
    this.applyValidator('contains', substr);
    return this;
  }
}
