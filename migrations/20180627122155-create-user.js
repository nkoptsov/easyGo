module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    login: {
      type: Sequelize.STRING,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      validate: {
        notNull: true,
        notEmpty: true,
      },
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Users'),
};
