export default class BaseSchema {
  constructor(validators) {
    this.validators = validators;
    this.checkedValidators = [];
  }

  applyValidator(validatorName, ...args) {
    const validator = this.validators[validatorName];
    if (!validator) throw new Error('Unknown validator');
    this.checkedValidators.push({ validator, args });
    return this;
  }

  test(validatorName, ...args) {
    const validator = this.validators[validatorName];
    if (!validator) throw new Error('Unknown validator');
    this.checkedValidators.push({ validator, args });
    return this;
  }

  isValid(data) {
    return this.checkedValidators.every(({ validator, args }) => validator(data, ...args));
  }
}
