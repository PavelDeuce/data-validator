export default {
  shape: (object, validationObject) => Object.entries(object).every(
    ([key, value]) => validationObject[key].isValid(value),
  ),
};
