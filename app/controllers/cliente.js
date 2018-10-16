var express = require('express');
var router = express.Router();

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

router.get("/list", (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM usuarios');
    const results = {'results ': (result) ? result.rows : null};
    res.render(JSON.stringify(results));
    client.release();
  } catch (err){
    console.error(err);
    res.send("Error "  + err);
  }
});

module.exports = router;
