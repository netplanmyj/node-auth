// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './db/memo_data.db'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'sqlite3',
    connection: {
      filename: './db/memo_data.db'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: './db/memo_data.db'
    },
    useNullAsDefault: true
  }

};
