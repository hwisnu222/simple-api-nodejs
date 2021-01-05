const jwt = require("jsonwebtoken");
const config = require("../config/secret");

function verifikasi(roles) {
  return function (req, rest, next) {
    // check authorization header
    const tokenWithBearer = req.headers.authorization;
    if (tokenWithBearer) {
      const token = tokenWithBearer.split(" ")[1];
      // verification
      jwt.verify(token, config.secret, function (err, decoded) {
        if (err) {
          return rest
            .status(401)
            .send({ auth: false, message: "Token tidak terdaftar" });
        } else {
          if (roles == 2) {
            req.auth = decoded;
            next();
          } else {
            return rest
              .status(401)
              .send({ auth: false, message: "Gagal mengotorisasi role anda" });
          }
        }
      });
    } else {
      return rest
        .status(401)
        .send({ auth: false, message: "Token tidak tersedia" });
    }
  };
}

module.exports = verifikasi;
