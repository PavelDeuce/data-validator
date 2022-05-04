import BaseSchema from './BaseSchema.js';

export default class ArraySchema extends BaseSchema {
  required() {
    this.applyValidator('required');
    return this;
  }

  sizeof(size) {
    this.applyValidator('sizeof', size);
    return this;
  }
}
