import Validator from '../src';

test('string-validator', () => {
  const validator = new Validator();
  const schema = validator.string();

  expect(schema.isValid('')).toBeTruthy();

  schema.required();

  expect(schema.minLength(5).isValid('k444443343')).toBe(true);
  expect(schema.minLength(5).isValid('test')).toBe(false);

  expect(schema.isValid('what does the fox say')).toBeTruthy();
  expect(schema.isValid('hexlet')).toBeTruthy();
  expect(schema.isValid(null)).toBeFalsy();
  expect(schema.isValid('')).toBeFalsy();

  expect(schema.contains('what').isValid('what does the fox say')).toBe(true);
  expect(schema.contains('whatthe').isValid('what does the fox say')).toBe(false);
});

test('number-validator', () => {
  const validator = new Validator();
  const schema = validator.number();

  expect(schema.isValid(100)).toBeTruthy();

  schema.required();

  expect(schema.isValid(null)).toBeFalsy();
  expect(schema.positive().isValid(100)).toBeTruthy();
  expect(schema.range(99, 101)).toBeTruthy();
});

test('array-validator', () => {
  const validator = new Validator();
  const schema = validator.array();

  schema.required();
  expect(schema.isValid(null)).toBeFalsy();
  expect(schema.isValid([])).toBeTruthy();
  expect(schema.sizeof(3).isValid([1, 2, 3])).toBeTruthy();
});

test('object-validator', () => {
  const validator = new Validator();
  const schema = validator.object();

  expect(
    schema
      .shape({
        name: validator.string().required().minLength(5),
        age: validator.number().required().positive(),
      })
      .isValid({
        name: 'Pavel',
        age: 12,
      })
  ).toBeTruthy();
});

test('add-new-validator', () => {
  const validator = new Validator();
  validator.addValidator('number', 'negative', (value) => value < 0);
  const schema = validator.number().required();
  schema.test('negative');
  expect(schema.isValid(10)).toBeFalsy();
  expect(schema.isValid(-10)).toBeTruthy();
});
