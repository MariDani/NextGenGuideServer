const pg = require('pg');

const client = new pg({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
  // host: process.env.DB_HOST,
  // username: process.env.DB_USER,
  // password: process.env.DB_PASS,    
  // database: process.env.DB_NAME,
  // port: 5432,
})

  // added according to this: https://devcenter.heroku.com/articles/getting-started-with-nodejs#provision-a-database
.get('/db', async (req, res) => {
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM mentors');
    const results = { 'results': (result) ? result.rows : null};
    res.render('pages/db', results );
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
})

// client.connect();

// module.exports = {
//   query: (text, params, callback) => {
//     return client.query(text, params, callback)
//   }
// }
