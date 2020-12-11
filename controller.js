"use strict";

const response = require("./res");
const connection = require("./koneksi");

// route index
exports.index = function (req, res) {
  response.ok("Aplikasi REST API berjalan", res);
};

// route for view all student data
exports.viewAllData = function (req, res) {
  connection.query("SELECT * FROM mahasiswa", function (error, rows, fields) {
    if (error) {
      connection.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// view student data by id
exports.viewStudentById = function (req, res) {
  let idStudent = req.params.id;
  connection.query(
    "SELECT * FROM mahasiswa WHERE nim = ?",
    [idStudent],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// add student data
exports.addStudentData = function (req, res) {
  const nama = req.body.nama;
  const nim = req.body.nim;

  connection.query(
    "INSERT INTO mahasiswa (nama,nim) VALUES(?,?)",
    [nama, nim],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("berhasil menambahkan data", res);
      }
    }
  );
};

// change student data by id
exports.changeStudentData = function (req, res) {
  const nim = req.body.nim;
  const nama = req.body.nama;

  connection.query(
    "UPDATE mahasiswa SET nama=?, nim=? WHERE nim=?",
    [nama, nim, nim],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil mengupdate data", res);
      }
    }
  );
};

// Delete student data by id
exports.deleteStudent = function (req, res) {
  const nim = req.body.nim;

  connection.query(
    "DELETE FROM mahasiswa WHERE nim=?",
    [nim],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil menghapus data", res);
      }
    }
  );
};

// Add new user
