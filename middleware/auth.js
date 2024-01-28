const jwt = require('jsonwebtoken');
const user = require('../models/user');

const userExtractor = async (request, response, next) => {
  try {
    const token = request.cookies.acessToken;
    if (!token) {
      return response.sendStatus(401);
    }
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const usuario = await user.findById(decoded.id);
    request.usuario = usuario;
  } catch (error) {
    return response.sendStatus(401);
  }
  next();
};

module.exports = { userExtractor };