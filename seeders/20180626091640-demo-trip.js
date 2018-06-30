'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Trips', [{
      name: 'USA',
      dateStart: new Date("2018-07-5"),
      dateEnd: new Date("2018-07-25"),
        description: 'Some trip to USA',
        idUser: 1,
        createdAt : new Date(),
        updatedAt : new Date(),

    }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Trips', null, {});

  }
};
