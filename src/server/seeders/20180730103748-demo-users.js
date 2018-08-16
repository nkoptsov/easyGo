module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [{
    login: 'Batman',
    password: '$2a$08$qISkBMm1KJe8L/EP5fUwruHMQY9bvG6.MYYAJ6fs.HDe1uzJbyRPi',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    login: 'Superman',
    password: '$2a$08$J5M7Ox5OrNg7OtkCChrfseiRoWeWy6oV5AVOwn.7/dtaZb./qPpby',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    login: 'Joker',
    password: '$2a$08$xlwJbqgqjz23pfFmuRSIi.3S4EdPJYwWUXAe/MrvC.fXLiyqyALe.',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    login: 'Scarecrow',
    password: '$2a$08$MaXIT65U5EDxb9N5qrjOUOk6pEzhPO6uPCyHB5R0SuCluypkFU6Gu',
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
