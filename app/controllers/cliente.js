const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

module.exports = function(){
    this.listUsuarios = async (req, res) => {
       try {
         const client = await pool.connect();
         const result = await client.query('SELECT * FROM usuarios');
         const results = {'results ': (result) ? result.rows : null};
         res.send(JSON.stringify(results));
         client.release();
       } catch (err){
         console.error(err);
         res.send("Error "  + err);
       }
     };
}
