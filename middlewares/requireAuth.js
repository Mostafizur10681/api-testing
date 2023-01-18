const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).send({ message: "Unauthorized User" });
  }

  if (authorization && authorization.startsWith("Bearer")) {
    try {
      const token = authorization.split(" ")[1];
      const { _id } = jwt.verify(token, "My_Secret_Token");
      req.user = await UserModel.findById({ _id });
      next();
    } catch (error) {
      res.status(401).send({ message: "Unauthorized User" });
    }
  }
};

module.exports = requireAuth;
