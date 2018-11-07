const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres"
});


var client = sequelize.define('usuarios', {

});

module.exports = client;
