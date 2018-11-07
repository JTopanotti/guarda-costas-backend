var express = require('express');
//var bodyParser = require('body-parser');
const Sequelize = require('sequelize');



module.exports = function(){
  var app = express();

  process.env.SEQUELIZE = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres"
  });

  app.set('port', process.env.PORT || 3001);

  var clientRouter = require("../app/routes/client");

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
  app.use('/client', clientRouter);

  //app.use(express.static('./public'));

  return app;
};
