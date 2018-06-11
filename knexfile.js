// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///wftdog'
  },

  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`
  }

};
