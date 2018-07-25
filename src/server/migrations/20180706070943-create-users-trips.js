module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('UsersTrips', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      allowNull: false,
    },
    tripId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Trips',
        key: 'id',
      },
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('UsersTrips'),
};
