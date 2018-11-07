const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres"
});


var client = sequelize.define('usuarios', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.STRING(45),
    unique: "usuarios_username_un",
    defaultValue: null
  },
  password: {
    type: Sequelize.STRING(45),
    allowNull: false,
    defaultValue: "pass123"
  },
  data_hora_cadastro: {
    type: Sequelize.DATE,
    defaultValue: null
  },
  email: {
    type: Sequelize.STRING(45),
    unique: "usuarios_email_un",
    allowNull: false
  },
  data_hora_nascimento: {
    type: Sequelize.DATE,
    defaultValue: null
  },
  telefone: {
    type: Sequelize.STRING(11),
    defaultValue: null
  },
  nome: {
    type: Sequelize.STRING(11),
    allowNull: false
  }

}, {timestamps: false});

module.exports = client;
