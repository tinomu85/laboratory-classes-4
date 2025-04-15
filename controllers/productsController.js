const { MENU_LINKS } = require("../constants/navigation");
const { STATUS_CODE } = require("../constants/statusCode");
const Product = require("../models/Product");

const productsController = {
  getProductsView: (req, res) => {
    const allProducts = Product.getAll();
    res.render("products.ejs", {
      headTitle: "Shop - Products List",
      path: "/products",
      menuLinks: MENU_LINKS,
      activeLinkPath: "/products",
      products: allProducts,
    });
  },

  getAddProductView: (req, res) => {
    res.render("add-product.ejs", {
      headTitle: "Shop - Create Product",
      path: "/products/add",
      menuLinks: MENU_LINKS,
      activeLinkPath: "/products/add",
    });
  },

  addNewProduct: (req, res) => {
    const { description, name } = req.body;
    const product = new Product(description, name);
    Product.add(product);
    res.status(STATUS_CODE.FOUND).redirect("/products/new");
  },

  getNewProductView: (req, res) => {
    const latest = Product.getLast();
    res.render("new-product.ejs", {
      headTitle: "Shop - Latest Addition",
      path: "/products/new",
      activeLinkPath: "/products/new",
      menuLinks: MENU_LINKS,
      newestProduct: latest || {},
    });
  },

  getProductView: (req, res) => {
    const { name } = req.params;
    const foundProduct = Product.findByName(name);
    res.render("product.ejs", {
      headTitle: foundProduct
        ? `Product - ${foundProduct.name}`
        : "Product Not Found",
      path: `/products/${name}`,
      activeLinkPath: "/products",
      menuLinks: MENU_LINKS,
      product: foundProduct,
    });
  },

  deleteProduct: (req, res) => {
    const { name } = req.params;
    Product.deleteByName(name);
    res.status(STATUS_CODE.OK).json({ success: true });
  },
};

module.exports = productsController;
