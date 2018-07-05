
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Trips', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    dateStart: {
      type: Sequelize.DATEONLY,
    },
    dateEnd: {
      type: Sequelize.DATEONLY,
    },
    locationStart: {
      type: Sequelize.STRING,
    },
    locationEnd: {
      type: Sequelize.STRING,
    },
    tripCost: {
      type: Sequelize.DOUBLE,
    },
    description: {
      type: Sequelize.TEXT,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Trips'),
};
