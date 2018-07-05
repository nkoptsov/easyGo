module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Trips', [{
      name: 'USA',
      dateStart: new Date('2018-07-5'),
      dateEnd: new Date('2018-07-25'),
      description: 'Some trip to USA',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'England',
      dateStart: new Date('2018-07-5'),
      dateEnd: new Date('2018-07-25'),
      description: 'London-Liverpul',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Itally',
      dateStart: new Date('2018-07-5'),
      dateEnd: new Date('2018-07-25'),
      description: 'Rome-Venecia',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Trips', null, {}),
};
