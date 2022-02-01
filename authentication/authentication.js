const json_w_t = require("jsonwebtoken");

const userVerification = (req, res, next) => {
  const token = req.get("token");
  json_w_t.verify(token, "secret", (e, decoded) => {
    if (e) {
      return res.status(401).json({
        message: "El usuario no es valido o no esta loggeado",
      });
    }
    req.user = decoded.data;
    next();
  });
};
//Verifica si es ADMIN
const adminVerification = (req, res, next) => {
  const rol = req.user.userRole;
  if (rol === "Admin") {
    next();
  } else {
    return res.status(401).json({
      message: "El usuario no es admin",
    });
  }
};
module.exports = { userVerification, adminVerification };
