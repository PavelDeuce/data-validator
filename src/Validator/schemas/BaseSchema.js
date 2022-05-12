import errorMessages from '../constants.js';

export default class BaseSchema {
  constructor(validators) {
    this.validators = validators;
    this.checkedValidators = [];
  }

  applyValidator(validatorName, ...args) {
    const validator = this.validators[validatorName];
    if (!validator) throw new Error(errorMessages.unknownValidator(validatorName));
    this.checkedValidators.push({ validator, args });
    return this;
  }

  test(validatorName, ...args) {
    this.applyValidator(validatorName, ...args);
    return this;
  }

  isValid(data) {
    return this.checkedValidators.every(({ validator, args }) => validator(data, ...args));
  }
}
