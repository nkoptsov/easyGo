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
      console.log(error);
      
      response = error.response;
    }
  });

  it('should return ', () => {
    console.log('aaaa');
    assert.equal(response.status, 200);
  });
});
