import Validator from '../src/index.js';
import errorMessages from '../src/Validator/constants.js';

test('String', () => {
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

test('Number', () => {
  const validator = new Validator();
  const schema = validator.number();

  expect(schema.isValid(null)).toBe(true);
  expect(schema.isValid(0)).toBe(true);
  expect(schema.isValid(100)).toBeTruthy();

  schema.required();

  expect(schema.isValid(null)).toBeFalsy();
  expect(schema.positive().isValid(100)).toBeTruthy();
  expect(schema.positive().isValid(-10)).toBeFalsy();
  expect(schema.range(99, 101)).toBeTruthy();
});

test('Array', () => {
  const validator = new Validator();
  const schema = validator.array();

  schema.required();
  expect(schema.isValid(null)).toBeFalsy();
  expect(schema.isValid([])).toBeTruthy();
  expect(schema.sizeof(3).isValid([1, 2, 3])).toBeTruthy();
});

test('Object', () => {
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
      }),
  ).toBeTruthy();
});

test('Custom', () => {
  const validator = new Validator();
  validator.addValidator('number', 'negative', (value) => value < 0);
  const schema = validator.number().required();
  schema.test('negative');
  expect(schema.isValid(10)).toBeFalsy();
  expect(schema.isValid(-10)).toBeTruthy();
});

test('Check immutable', () => {
  const validator1 = new Validator();
  const fn = (value, start) => value.startsWith(start);
  validator1.addValidator('string', 'startWith', fn);

  const validator2 = new Validator();
  expect(() => {
    validator2.string().test('startWith', 'H');
  }).toThrow(errorMessages.unknownValidator('startWith'));
});

test('Unsupported schema', () => {
  const v = new Validator();
  const fn = (value) => value === false;

  expect(() => {
    v.addValidator('boolean', 'isFalse', fn);
  }).toThrow(errorMessages.unknownSchema('boolean'));
});
