const express = require("express");
const logoutController = require("../controllers/logoutController");

const router = express.Router();

router.get("/", logoutController.showLogoutView);
router.get("/kill", logoutController.terminateApplication);

module.exports = router;
