module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Trips', [{
      name: 'USA',
      dateStart: new Date('2018-07-05'),
      dateEnd: new Date('2018-07-25'),
      locationStart: 'Kiev',
      locationEnd: 'New York',
      userId: 1,
      description: 'Some trip to USA',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'England',
      dateStart: new Date('2018-07-05'),
      dateEnd: new Date('2018-07-25'),
      locationStart: 'Kiev',
      locationEnd: 'London',
      description: 'London-Liverpul',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Itally',
      dateStart: new Date('2018-07-5'),
      dateEnd: new Date('2018-07-25'),
      description: 'Rome-Venecia',
      locationStart: 'Kiev',
      locationEnd: 'Rome',
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Trips', null, {}),
};
