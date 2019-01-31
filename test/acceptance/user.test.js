const assert = require('assert');
const axios = require('axios');
const fakeData = require('../fakedata/fakeData.js');
const {
  Trip, UsersTrips, User, Sequelize,Profile
} = require('../../src/server/models');

require('./helper.js');

const url = 'http://localhost:8080/users/profile';
let response;

describe('Get course', () => {
  console.log(fakeData.fakeProfile());
  
  Profile.create(fakeData.fakeProfile());
  before(async () => {
    try {
      response = await axios.get(url);
    } catch (error) {
      response = error.response;
    }
  });

  after(() => {
    Profile.destroy({
      where: {}
    })
  })

  it('should return status 401', () => {
    assert.equal(response.status, 401);
  });

});
