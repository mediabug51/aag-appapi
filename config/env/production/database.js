const path = require('path');
const parse= require('pg-connection-string')
const config=parse(process.env.DATABASE_UR)
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host:config.host,
      port: config.port,
      database:config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
