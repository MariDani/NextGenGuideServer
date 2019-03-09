require('dotenv').config()

var express = require("express");
var xAdmin = require('express-admin');
const db = require('./db')
var cors = require('cors')

var prod = process.env.NODE_ENV === 'production';
let pgConfig;

var corsOptions = {
  origin: ["http://nextgenguide.com", "0.0.0.0:2015"]
}

if (prod) {
   pgConfig =  {
     "database": "de2l7jhij3adpn",
     "host":"ec2-54-228-224-37.eu-west-1.compute.amazonaws.com",
     "user": "qqrvtrdyciuoqa",
     "password": "0018497b496e77a8835f995149204e890826c0e31a7ce4c9b72a66fe590e065a",
     "schema": "public"
    }
} else {
   pgConfig =  {
      "database": "next-gen-guide-development",
      "user": "arnoldov",
      "password": "1",
      "schema": "public"
    }
}

var mainConfig =
  {
    "pg": pgConfig,
    "server": {
          "port": 3000
      },
      "app": {
          "layouts": true,
          "themes": true,
          "languages": true,
          "root": "/admin"
      }
  }

var config = {
  dpath: './express-admin-config/',
  config: mainConfig,
  settings: require('./express-admin-config/settings.json'),
  custom: require('./express-admin-config/custom.json'),
  users: require('./express-admin-config/users.json')
};

xAdmin.init(config, function (err, admin) {
  var app = express();

  app.use(cors(corsOptions));

  if (err) return console.log(err);
  app.use('/admin', admin);

  app.get('/mentors', (req, res, next) => {
    db.query('SELECT * FROM mentors', (err, dbRes) => {
      if (err) {
        return next(err)
      }
      res.json(dbRes.rows)
    })
  });

  app.get('/mentors/:id', (req, res, next) => {
    db.query(`SELECT * FROM mentors where id = ${req.params.id}`, (err, dbRes) => {
      if (err) {
        return next(err)
      }
      res.json(dbRes.rows)
    })
  });

  app.get('/mentees', (req, res, next) => {
    db.query('SELECT * FROM mentees', (err, dbRes) => {
      if (err) {
        return next(err)
      }
      res.json(dbRes.rows)
    })
  });

  app.set('port', process.env.PORT || 3000)

  app.listen(process.env.PORT || 3000, "0.0.0.0", () => {
      console.log("Server running on port 3000");
  });
});


