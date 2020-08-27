const db = require('../../database/db_connection');

// !! will turn the value into a boolean
// so if length is 0 then it's converted to false which means user not found
const checkIfUserExists = (username) =>
  !!db.users.filter((user) => user.username === username).length;


exports.findByUserEmail = (userEmail) =>
  new Promise((resolve, reject) =>
    db
      .query('SELECT * FROM users WHERE email = $1', [userEmail])
      .then((email) => {
        console.log('eyani', email.rows)
        if (!email.rows.length) {
          reject(new Error('No email was found'));
        }
        
        resolve(email.rows[0]);
      })
      .catch((error) => {
        console.log(`findByUseremail Error: ${error}`);
        reject(new Error('An error has occurred in the db, findByUseremail'));
      })
  );
