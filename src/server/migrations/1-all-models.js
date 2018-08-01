

const Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Users", deps: []
 * createTable "Profiles", deps: [Users]
 * createTable "Trips", deps: [Users]
 * createTable "UsersTrips", deps: [Users, Trips]
 *
 * */

const info = {
  revision: 1,
  name: 'all-models',
  created: '2018-07-31T14:30:33.747Z',
  comment: '',
};

const migrationCommands = [{
  fn: 'createTable',
  params: [
    'Users',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      login: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
        },
        unique: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
        },
        allowNull: false,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },
    {},
  ],
},
{
  fn: 'createTable',
  params: [
    'Profiles',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true,
        },
        unique: true,
        allowNull: false,
      },
      firstName: {
        type: Sequelize.STRING,
        validate: {
          is: ['^[a-z]+$', 'i'],
        },
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        validate: {
          is: ['^[a-z]+$', 'i'],
        },
        allowNull: false,
      },
      phoneNumber: {
        type: Sequelize.STRING,
        validate: {
          is: {},
        },
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        validate: {
          is: ['^[a-z]+$', 'i'],
        },
        allowNull: true,
      },
      country: {
        type: Sequelize.STRING,
        validate: {
          is: ['^[a-z]+$', 'i'],
        },
        allowNull: true,
      },
      gender: {
        type: Sequelize.STRING,
        validate: {
          isIn: [
            ['male', 'female'],
          ],
        },
        allowNull: true,
      },
      birthday: {
        type: Sequelize.DATEONLY,
      },
      photo: {
        type: Sequelize.STRING,
        validate: {
          isUrl: true,
        },
        allowNull: true,
      },
      about: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        references: {
          model: 'Users',
          key: 'id',
        },
        allowNull: true,
      },
    },
    {},
  ],
},
{
  fn: 'createTable',
  params: [
    'Trips',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
          len: [3, 15],
        },
      },
      dateStart: {
        type: Sequelize.DATEONLY,
      },
      dateEnd: {
        type: Sequelize.DATEONLY,
        validate: {},
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
      userId: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'NO ACTION',
        references: {
          model: 'Users',
          key: 'id',
        },
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },
    {},
  ],
},
{
  fn: 'createTable',
  params: [
    'UsersTrips',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
        },
        unique: 'UsersTrips_userId_tripId_unique',
      },
      tripId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Trips',
          key: 'id',
        },
        unique: 'UsersTrips_userId_tripId_unique',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },
    {},
  ],
},
];

module.exports = {
  pos: 0,
  up(queryInterface, Sequelize) {
    let index = this.pos;
    return new Promise(((resolve, reject) => {
      function next() {
        if (index < migrationCommands.length) {
          const command = migrationCommands[index];
          console.log(`[#${index}] execute: ${command.fn}`);
          index++;
          queryInterface[command.fn](...command.params).then(next, reject);
        } else { resolve(); }
      }
      next();
    }));
  },
  info,
};
