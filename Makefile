install: install-deps

run:
	bin/nodejs-package.js 10

install-deps:
	npm ci

test:
	npm run test

test-coverage:
	npm run test-coverage

lint:
	npm run lint

publish:
	npm publish

.PHONY: test
