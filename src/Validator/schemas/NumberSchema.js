import BaseSchema from './BaseSchema.js';

export default class NumberSchema extends BaseSchema {
  required() {
    this.applyValidator('required');
    return this;
  }

  positive() {
    this.applyValidator('positive');
    return this;
  }

  range(min, max) {
    this.applyValidator('range', min, max);
    return this;
  }
}
