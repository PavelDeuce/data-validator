# data-validator

[![Maintainability](https://api.codeclimate.com/v1/badges/14ddf4272f570ead26e6/maintainability)](https://codeclimate.com/github/PavelDeuce/js-oop-project-lvl1/maintainability)
[![Actions Status](https://github.com/PavelDeuce/js-oop-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/PavelDeuce/js-oop-project-lvl1/actions)
[![Node CI](https://github.com/PavelDeuce/js-oop-project-lvl1/actions/workflows/nodejs.yml/badge.svg)](https://github.com/PavelDeuce/js-oop-project-lvl1/actions/workflows/nodejs.yml)
[![Test Coverage](https://api.codeclimate.com/v1/badges/14ddf4272f570ead26e6/test_coverage)](https://codeclimate.com/github/PavelDeuce/js-oop-project-lvl1/test_coverage)

JS schema builder for value validation

## Example

```
  const validator = new Validator();
  const schema = validator.number();
  schema.isValid(null)) // true
  schema.required();
  schema.isValid(null)) // false
```
