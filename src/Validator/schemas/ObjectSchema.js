import BaseSchema from './BaseSchema.js';

export default class ObjectSchema extends BaseSchema {
  shape(validationObject) {
    this.applyValidator('shape', validationObject);
    return this;
  }
}
