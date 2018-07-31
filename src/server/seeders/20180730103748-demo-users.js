'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [{
    login: 'Batman',
    password: '$2a$08$qISkBMm1KJe8L/EP5fUwruHMQY9bvG6.MYYAJ6fs.HDe1uzJbyRPi',
      createdAt: new Date(),
      updatedAt: new Date(),
  },
  {
    login: 'Superman',
    password: '$2a$08$qISkBMm1KJe8L/EP5fUwruHMQY9bvG6.MYYAJ6fs.HDe1uzJbyRPi',
      createdAt: new Date(),
      updatedAt: new Date(),
  },
  {
    login: 'Joker',
    password: '$2a$08$qISkBMm1KJe8L/EP5fUwruHMQY9bvG6.MYYAJ6fs.HDe1uzJbyRPi',
      createdAt: new Date(),
      updatedAt: new Date(),
  },
  {
    login: 'Scarecrow',
    password: '$2a$08$qISkBMm1KJe8L/EP5fUwruHMQY9bvG6.MYYAJ6fs.HDe1uzJbyRPi',
      createdAt: new Date(),
      updatedAt: new Date(),
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
