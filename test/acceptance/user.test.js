const assert = require('assert');
const axios = require('axios');
require('./helper.js');

const url = 'http://localhost:8080/users/profile';
let response;

describe('Get course', () => {
  before(async () => {
    try {
      response = await axios.get(url);
    } catch (error) {
      
      response = error.response;
    }
  });

  it('should return ', () => {
    assert.equal(response.status, 401);
  });
});
