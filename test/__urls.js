/* global describe, beforeEach, afterEach, it*/
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const expect = require('chai').expect;
const rewire = require('rewire');
const request = require('supertest');

describe('URL Routes', () => {
  let api;
  let url;

  beforeEach(() => {
    api = require('../app/routes/api/v1/url.js');
  });

  afterEach(() => {
    api.close();
  });

  // Test for Multiple Apps
  it('GET /api/v1/urls returns multiple URLs', (done) => {
    request(api)
      .get('/urls')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const urls = res.body;

        // Save one single app from the list to test on in later tests
        this.app = urls[0]

        expect(urls.length).to.be.above(0)
      })
      .end(done)
  });

  // Test for a single app
  it('GET /api/v1/urls/:id returns a URL obj with id, name, description, and createdAt properties', (done) => {
    request(api)
      .get('/urls/' + this.url.id)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const url = res.body;
        expect(url).to.have.property('id')
        expect(url).to.have.property('name')
        expect(url).to.have.property('description')
        expect(url).to.have.property('createdAt')
      })
      .end(done)
  });

});
