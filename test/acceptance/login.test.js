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

  // after(async () => {
  //   User.destroy({ where: {}, force: true }).then(function () {
  //     console.log('destroy all data');
  //   });

  //   Profile.destroy({ where: {}, force: true }).then(function () {
  //     console.log('destroy all data');
  //   });
  // });

  context('when pass the correct parameters', () => {
    let responce;
    before(async () => {
      try {
        responce = await axios.post(url, { password: fakeUser.password, login: fakeUser.login })
      } catch (error) {
        responce = error.responce;
      }
    });

    it('should return status 200', () => {
      assert.equal(responce.status, 200);
    })
  });

  context('when pass the incorrect parameters', () => {
    let responce;ы
    before(async () => {
      try {
        responce = await axios.post(url, { password: faker.random.word(), login: faker.random.word() })
      } catch (error) {
        responce = error;
      }
    });

    it('should return status 200', () => {
      console.log(1111, responce);

      // assert.equal(responce.status, 200);
    })
  });
});