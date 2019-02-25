const pg = require('pg');

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
  // host: process.env.DB_HOST,
  // username: process.env.DB_USER,
  // password: process.env.DB_PASS,    
  // database: process.env.DB_NAME,
  // port: 5432,
})
console.log("Database URL:");
console.log(process.env.DATABASE_URL);

client.connect();

module.exports = {
  query: (text, params, callback) => {
    return client.query(text, params, callback)
  }
}
