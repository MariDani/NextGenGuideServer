const pg = require('pg');

db = process.env.DATABASE_URL
client = new pg.Client({ connectionString: "postgres://djefulzgiienox:d2ff11216c21ea5ac36f9811b2f2fb48b38b3c1718580a00093d81654ae44816@ec2-46-137-170-51.eu-west-1.compute.amazonaws.com:5432/d4t2nf9mkd6gij", ssl: true})

console.log(client);

client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
})

console.log(client);

module.exports = {
  query: (text, params, callback) => {
    return client.query(text, params, callback)
  }
}
