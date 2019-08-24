const { Pool } = require('pg');
require('env2')('./config.env')

const cities_url = process.env.DB_URL;

const options = {
  connectionString: cities_url,
  ssl: true,
}

module.exports = new Pool(options);