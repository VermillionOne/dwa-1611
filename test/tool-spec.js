/* global describe, it, res */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const expect = require('chai').expect;
const mainController = require('../app/controllers/main.controller');

describe('(showHome)', () => {
  it('should respond with pages/home', () => {
    const results = mainController.showHome();
    expect(results);
  });
});
