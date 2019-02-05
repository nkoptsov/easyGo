const assert = require('assert');
const axios = require('axios');
const fakeData = require('../fakedata/fakeData.js');
const {
  Trip, UsersTrips, User, Sequelize, Profile
} = require('../../src/server/models');

require('./helper.js');

const url = 'http://localhost:8080/users/profile';
let response;


describe.only('Get course', () => {

  before(async () => {
    await User.create(fakeData.fakeUserData()).then(record => {
      const obj = fakeData.fakeProfile();
      obj.userId = record.id;
      Profile.create(obj);
    });
  
    try {
      response = await axios.get(url);
    } catch (error) {
      response = error.response;
    }
  });

  // after(async () => {
  //   User.destroy({ where: {}, force: true }).then(function () {
  //     console.log('destroy all data');
  //   });

  //   Profile.destroy({ where: {}, force: true }).then(function () {
  //     console.log('destroy all data');
  //   });
  // });

  it('should return status 401', () => {
    assert.equal(response.status, 401);
  });

});
