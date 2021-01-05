const express = require("express");
const auth = require("./auth");
const verifikasi = require("./verifikasi");
const router = express.Router();

// registration
router.post("/api/v1/register", auth.registrasi);
// login
router.post("/api/v1/login", auth.login);

// url yang perlu otorisassi
router.get("/api/v1/rahasia", verifikasi(2), auth.halamanrahasia);

module.exports = router;
