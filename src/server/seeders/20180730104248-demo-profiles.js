'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Profiles', [{
    email: 'batman@gmail.com',
    firstName: 'Bruce',
    lastName: 'Wayne',
    phoneNumber: '+380678888888',
    userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
  },
  {
    email: 'superman@gmail.com',
    firstName: 'Clark',
    lastName: 'Kent',
    phoneNumber: '+380679999999',
    userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
  },
  {
    email: 'joker111@gmail.com',
    firstName: 'JokerF',
    lastName: 'JokerL',
    phoneNumber: '+380671111111',
    userId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
  },
  {
    email: 'scarecrow@gmail.com',
    firstName: 'Jonathan',
    lastName: 'Crane',
    phoneNumber: '+380672222222',
    userId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
  }], {}),

    down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Profiles', null, {}),
};
