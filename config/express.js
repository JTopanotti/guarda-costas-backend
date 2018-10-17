var express = require('express');
//var bodyParser = require('body-parser');

module.exports = function(){
  var app = express();

  app.set('port', process.env.PORT || 3001);

  var cliente = require("../app/routes/cliente");

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
  app.use('/cliente', cliente);

  //app.use(express.static('./public'));
  //app.use(bodyParser.urlencoded({extended: true}));
  //app.use(bodyParser.json());
  //app.use(require('method-override')());

  return app;
};
