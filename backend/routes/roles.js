const express = require("express");

// Import roles controller
const { createNewRole } = require("../controllers/roles");

// Create roles router
const rolesRouter = express.Router();

/*
 * Testing Routes:
 * POST -> https://e-learning-platform-kmqb.onrender.com/roles/
*/


rolesRouter.post("/", createNewRole);

module.exports = rolesRouter;
