require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: "1",
    database: process.env.DB_DEVELOPMENT,
    host: process.env.DB_HOSTNAME,
    dialect: 'postgres',
  },
  test: {
    username: 'root',
    password: "1",
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: 'root',
    password: "1",
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
};
