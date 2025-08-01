const {query} = require('../db');

module.exports.newUser = async function (userData) {
  const { username, email, password, first_name, last_name, phone_number} = userData;
  
  const queryText = 'INSERT INTO users (username, email, password, first_name, last_name, phone_number) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
  const values = [username, email, password, first_name, last_name, phone_number];
  
  try {
    const res = await query(queryText, values);
    return res.rows[0];
  } catch (err) {
    console.error('Error creating new user:', err);
    throw err;
  }
}

module.exports.getUsers = async function () {
  const queryText = 'SELECT * FROM users ORDER BY id';
  
  try {
    const res = await query(queryText);
    return res.rows;
  } catch (err) {
    console.error('Error fetching users:', err);
    throw err;
  }
}