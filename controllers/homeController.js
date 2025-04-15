const { MENU_LINKS } = require("../constants/navigation");

exports.getHomeView = (req, res) => {
  res.render("home.ejs", {
    headTitle: "Shop - Home Page",
    path: "/",
    activeLinkPath: "/",
    menuLinks: MENU_LINKS,
  });
};
