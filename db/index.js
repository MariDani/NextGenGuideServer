const pg = require('pg');

const client = new pg.Client({
  // connectionString: process.env.DATABASE_URL,
  ssl: true,
  host: "ec2-54-228-224-37.eu-west-1.compute.amazonaws.com",
  user: "qqrvtrdyciuoqa",
  password: "0018497b496e77a8835f995149204e890826c0e31a7ce4c9b72a66fe590e065a",    
  database: "de2l7jhij3adpn",
  port: 5432,
})
console.log("Env:");
console.log(process.env);

client.connect();

module.exports = {
  query: (text, params, callback) => {
    return client.query(text, params, callback)
  }
}
