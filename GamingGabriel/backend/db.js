let mysql2 = require('mysql2');
let connection = mysql2.createConnection({
    'host':'localhost',
    'user':'root',
    'password':'Thundiyil100*',
    'database':'gaminggabriel'
})
connection.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected");
});
module.exports = connection;