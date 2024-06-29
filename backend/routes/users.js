const express = require("express");
const { register, login,customerFeedBake } = require("../controllers/users");

// define router
const usersRouter = express.Router();

/*
 * Testing Routes:
 * POST -> https://k-e-learning.onrender.com/users/register
 * POST -> https://k-e-learning.onrender.com/users/login
 */



usersRouter.post("/register", register);
usersRouter.post("/login", login);
usersRouter.post("/customerfeedbake",customerFeedBake)

module.exports = usersRouter;
