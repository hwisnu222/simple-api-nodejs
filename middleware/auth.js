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
};
