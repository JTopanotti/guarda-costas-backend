var express = require('express');
//var load = require('express-load');
//var bodyParser = require('body-parser');

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

module.exports = function(){
  var app = express();
  app.get('/db', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM test_table');
      const results = {'results': (result) ? result.rows : null};
      res.render(results);
      client.release();
    } catch (err){
      console.error(err);
      res.send("Error "  + err);
    }
  });
  //var home = require('../app/routes/home');

  app.set('port', process.env.PORT || 3001);
  //app.set('view engine', 'ejs');
  //app.set('views', './app/views');

  //app.use(express.static('./public'));
  //app.use(bodyParser.urlencoded({extended: true}));
  //app.use(bodyParser.json());
  //app.use(require('method-override')());

  //load('models', {cwd: 'app'})
  //  .then('controllers')
  //  .then('routes')
  //  .into(app);

  return app;
};
