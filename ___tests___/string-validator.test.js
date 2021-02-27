import Validator from '../src';

test('string-validator', () => {
  const validator = new Validator();
  const schema = validator.string();

  expect(schema.isValid('')).toBeTruthy();

  schema.required();

  expect(schema.isValid('what does the fox say')).toBeTruthy();
  expect(schema.isValid('hexlet')).toBeTruthy();
  expect(schema.isValid(null)).toBeFalsy();
  expect(schema.isValid('')).toBeFalsy();

  expect(schema.contains('what').isValid('what does the fox say')).toBeTruthy();
  expect(schema.contains('whatthe').isValid('what does the fox say')).toBeFalsy();
});
