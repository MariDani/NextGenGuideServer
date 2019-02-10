const pg = require('pg');

console.log(process.env.DATABASE_URL)

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
  // host: process.env.DB_HOST,
  // username: process.env.DB_USER,
  // password: process.env.DB_PASS,    
  // database: process.env.DB_NAME,
  // port: 5432,
})

console.log("client", client)

client.connect();

module.exports = {
  query: (text, params, callback) => {
    return client.query(text, params, callback)
  }
}
