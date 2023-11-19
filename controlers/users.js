const usersRouter = require('express').Router();

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;
    console.log(name, email, password);
  } catch (error) {
    console.log(error);
  }
});

module.exports = usersRouter;