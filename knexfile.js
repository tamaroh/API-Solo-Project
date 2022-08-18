// Update with your config settings.
require('dotenv').config();
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    client: 'postgresql',
    connection: {
      database: process.env.DB_NAME || 'my_db',
      user:     process.env.DB_USER || 'username',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }

};
