var express = require('express');
//var bodyParser = require('body-parser');

module.exports = function(){
  var app = express();

  app.set('port', process.env.PORT || 3001);

  var cliente = require("../app/controllers/cliente");
  app.use('/cliente', cliente);

  //app.use(express.static('./public'));
  //app.use(bodyParser.urlencoded({extended: true}));
  //app.use(bodyParser.json());
  //app.use(require('method-override')());

  return app;
};
