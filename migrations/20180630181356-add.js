module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Profiles', 'userId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users', // ??? or mofel variable can be referencec of string
        key: 'id',
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Profiles', 'userId');
  },
};
