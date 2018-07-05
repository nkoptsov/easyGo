module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'Trips',
    'userId',
    {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    },
  ),

  down: (queryInterface, Sequelize) => queryInterface.removeColumn('Trips', 'userId'),
};
