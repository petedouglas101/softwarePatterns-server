class Product {
  constructor(obj) {
    Object.assign(this, obj);
  }
  // constructor(title, price, manufacturer, image, category) {
  //   this.title = title;
  //   this.price = price;
  //   this.manufacturer = manufacturer;
  //   this.image = image;
  //   this.category = category;
  // }

  // getTitle() {
  //   return this.title;
  // }

  // getPrice() {
  //   return this.price;
  // }

  // getManufacturer() {
  //   return this.manufacturer;
  // }

  // getImage() {
  //   return this.image;
  // }

  // getCategory() {
  //   return this.category;
  // }

  // setTitle(title) {
  //   this.title = title;
  // }

  // setPrice(price) {
  //   this.price = price;
  // }

  // setManufacturer(manufacturer) {
  //   this.manufacturer = manufacturer;
  // }

  // setImage(image) {
  //   this.image = image;
  // }

  // setCategory(category) {
  //   this.category = category;
  // }

  toString() {
    return `Product: ${this.title} ${this.price} ${this.manufacturer} ${this.image} ${this.category}`;
  }
}

module.exports = Product;
