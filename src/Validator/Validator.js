/* eslint-disable */

export default class Validator {
  constructor() {}

  string() {
    return this;
  }

  isValid(element) {
    return true;
  }

  required() {
    return this;
  }

  contains(element) {
    return this;
  }

  minLength() {
    return this;
  }
}
