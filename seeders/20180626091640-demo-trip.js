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
      name: 'German',
      dateStart: new Date('2018-07-05'),
      dateEnd: new Date('2018-07-25'),
      locationStart: 'Kiev',
      locationEnd: 'Berlin',
      description: 'berlin trip',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'France',
      dateStart: new Date('2018-07-5'),
      dateEnd: new Date('2018-07-25'),
      description: '2 daysin Paris',
      locationStart: 'Kiev',
      locationEnd: 'Paris',
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Trips', null, {}),
};
