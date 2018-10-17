const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

module.exports.listUsuarios = async (req, res) => {
  try {
     const client = await pool.connect();
     const result = await client.query('SELECT * FROM usuarios');
     const results = {'results': (result) ? result.rows : null};
     client.release();
     res.status(200).json(results);
  } catch (err){
     console.error(err);
     res.send("Error "  + err);
  }
};
