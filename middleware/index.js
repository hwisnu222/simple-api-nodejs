const express = require("express");
const auth = require("./auth");
const router = express.Router();

// registration
router.post("/api/v1/register", auth.registrasi);
// login
router.post("/api/v1/login", auth.login);

module.exports = router;
