const path = require('path');
require('dotenv').config({ debug: process.env.DEBUG });

// console.log(path.resolve());
module.exports = {
  database: process.env.MSSQL_DATABASE,
  user: process.env.MSSQL_USER,
  password: process.env.MSSQL_PASSWORD,
  option: {
    host: process.env.MSSQL_HOST,
    port: parseInt(process.env.MSSQL_PORT, 10),
    dialect: 'mssql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    additional: {
      timestamps: false,
      // createdAt: 'cdate',
      // updatedAt: 'udate',
    },
  },
};
