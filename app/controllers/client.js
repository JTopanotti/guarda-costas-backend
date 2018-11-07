const { Pool } = require('pg');
const Sequelize = require('sequelize');
var Usuarios = require('../models/usuarios');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres"
});



module.exports.listClients = async (req, res) => {

  console.log(Usuarios);
  res.status(200);

  // sequelize.authenticate().then(() => {
  //   console.log("Sequelize auth successful");
  // }).catch(() => {
  //   console.log("Sequelize auth error");
  // })

  // try {
  //    const client = await pool.connect();
  //    const result = await client.query('SELECT * FROM usuarios');
  //    const results = {'results': (result) ? result.rows : null};
  //    client.release();
  //    res.status(200).json(results);
  // } catch (err){
  //    console.error(err);
  //    res.status(500).send("Error "  + err);
  // }
};
