const logger = require("../utils/logger");
const { LOGOUT_LINKS } = require("../constants/navigation");

const logoutController = {
  showLogoutView: (req, res) => {
    res.render("logout.ejs", {
      headTitle: "Shop - Logout Page",
      path: "/logout",
      activeLinkPath: "/logout",
      menuLinks: LOGOUT_LINKS,
    });
  },

  terminateApplication: (req, res) => {
    logger.getProcessLog();
    setTimeout(() => {
      process.exit(0);
    }, 100);
  },
};

module.exports = logoutController;
