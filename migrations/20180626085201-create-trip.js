
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
      validate: {
        is: /^[a-z]+$/i,
        len: [5, 15],
        allowNull: false,
      },
    },
    dateStart: {
      type: Sequelize.DATEONLY,
      validate: {
        isDate: true,
        isBefore: this.dateEnd,
        isAfter: time.Now(),
        notNull: true,
      },
    },
    dateEnd: {
      type: Sequelize.DATEONLY,
      validate: {
        isDate: true,
        isAfter: this.dateStart,
        notNull: true,
      },
    },
    locationStart: {
      type: Sequelize.STRING,
      validate: {
        is: /^[a-z]+$/i,
        len: [5, 15],
        notEmpty: true,
      },
    },
    locationEnd: {
      type: Sequelize.STRING,
      validate: {
        is: /^[a-z]+$/i,
        len: [5, 15],
        notEmpty: true,
      },
    },
    tripCost: {
      type: Sequelize.DOUBLE,
      validate: {
        isDecimal: true,
        notNull: true,
      },
    },
    description: {
      type: Sequelize.TEXT,
      validate: {
        isNull: true,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Trips'),
};
