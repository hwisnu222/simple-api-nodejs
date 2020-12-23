const connection = require("../koneksi");
const mysql = require("mysql");
const md5 = require("md5");
const response = require("../res");
const jwt = require("jsonwebtoken");
const config = require("../config/secret");
const ip = require("ip");

// controller for register
exports.registrasi = function (req, res) {
  const post = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    tanggal_daftar: new Date(),
  };

  let query = "SELECT email FROM ?? WHERE ??=?";
  const table = ["user", "email", post.email];

  query = mysql.format(query, table);
  connection.query(query, table, function (error, rows) {
    if (error) {
      console.log(error);
    } else {
      if (rows.length == 0) {
        let query = "INSERT INTO ?? SET ?";
        const table = ["user"];

        query = mysql.format(query, table);
        connection.query(query, post, function (error, rows) {
          if (error) {
            console.log(error);
          } else {
            response.ok("Berhasil menambahkan data user baru", res);
          }
        });
      } else {
        response.ok("email sudah terdaftar", res);
      }
    }
  });
};
