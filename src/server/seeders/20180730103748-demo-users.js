'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [{
    login: 'Batman',
    password: 'test',
      createdAt: new Date(),
      updatedAt: new Date(),
  },
  {
    login: 'Superman',
    password: 'test',
      createdAt: new Date(),
      updatedAt: new Date(),
  },
  {
    login: 'Joker',
    password: 'test',
      createdAt: new Date(),
      updatedAt: new Date(),
  },
  {
    login: 'Scarecrow',
    password: 'test',
      createdAt: new Date(),
      updatedAt: new Date(),
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
