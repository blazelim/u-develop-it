const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL usernaem
      user: 'root',
      // Your MySQL password
      password: 'livelife1234',
      database: 'election'
    },
    console.log('Connected to the election database.')
);


module.exports = db;