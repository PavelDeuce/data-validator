export default class BaseSchema {
  constructor(validators) {
    this.validators = validators;
    this.checkedValidators = [];
    this.isRequired = false;
  }

  applyValidator(validatorName, ...args) {
    const validator = this.validators[validatorName];
    if (!validator) throw new Error('Unknown validator');
    if (validatorName === 'required') this.isRequired = true;
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
