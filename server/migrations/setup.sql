const { pool } = require('./server/config/db');

const createUser = async (username, email, password) => {
  const query = `
    INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3)
    RETURNING *
  `;
  const values = [username, email, password];
  const res = await pool.query(query, values);
  return res.rows[0];
};

