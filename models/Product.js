class Product {
  constructor(description, name) {
    this.description = description;
    this.name = name;
  }

  static #products = [];

  static findByName(productName) {
    return this.#products.find((item) => item.name === productName);
  }

  static getLast() {
    const productsCount = this.#products.length;
    return productsCount > 0 ? this.#products[productsCount - 1] : null;
  }

  static getAll() {
    return [...this.#products];
  }

  static deleteByName(productName) {
    const initialLength = this.#products.length;
    this.#products = this.#products.filter((item) => item.name !== productName);
    return initialLength !== this.#products.length;
  }

  static add(productToAdd) {
    if (!productToAdd.name || !productToAdd.description) {
      return false;
    }
    this.#products.push(productToAdd);
    return true;
  }
}

module.exports = Product;
