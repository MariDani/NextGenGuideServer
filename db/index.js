const pg = require('pg');

var prod = process.env.NODE_ENV === 'production';
db = process.env.DATABASE_URL

console.log("NODE_ENV:");
console.log(process.env.NODE_ENV);

let client;

if (prod) {
  client = new pg.Client({
    connectionString: db,
    ssl: true
  })
} else {
  client = new pg.Client({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: 5432
  })
}

client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
})

module.exports = {
  query: (text, params, callback) => {
    return client.query(text, params, callback)
  }
}
