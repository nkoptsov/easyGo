const assert = require('assert');
const axios = require('axios');
const faker = require('faker');
const fakeData = require('../fakedata/fakeData.js');
const {
  Trip, UsersTrips, User, Sequelize, Profile
} = require('../../src/server/models');


const url = 'http://localhost:8080/users/login';
const fakeUser = fakeData.fakeUserData();
const fakeProfile = fakeData.fakeProfile();

describe.only('Log in', () => {

  before(async () => {

    await User.create(fakeUser).then(record => {
      const obj = fakeProfile
      obj.userId = record.id;
      Profile.create(obj);
    });


  });

  after(async () => {
    User.destroy({ where: {}, force: true }).then(function () {
      console.log('destroy all data');
    });

    Profile.destroy({ where: {}, force: true }).then(function () {
      console.log('destroy all data');
    });
  });

  context('when pass the correct parameters', () => {
    let response;
    before(async () => {
      try {
        response = await axios.post(url, { password: fakeUser.password, login: fakeUser.login })
      } catch (error) {
        response = error.response;
      }
    });

    it('should return status 200', () => {
      assert.equal(response.status, 200);
    })
  });

  context('when pass the incorrect parameters', () => {
    let response;
    before(async () => {
      try {
        response = await axios.post(url, { password: faker.random.word(), login: faker.random.word() })
      } catch (error) {
        response = error.response;
      }
    });

    it('should return status 400', () => {
      assert.equal(response.status, 400);
    })
  });
});