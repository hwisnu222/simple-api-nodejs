const mysql = require("mysql");

// create connection
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbpresensi",
});

// check if error
conn.connect((err) => {
  if (err) throw err;
  console.log("mysql terkoneksi");
});

module.exports = conn;
