class ProductClass {
  constructor(title, manufacturer, price, description, image, category) {
    this.title = title;
    this.manufacturer = manufacturer;
    this.price = price;
    this.description = description;
    this.image = image;
    this.category = category;
  }

  get Title() {
    return this.title;
  }

  get Manufacturer() {
    return this.manufacturer;
  }

  get Price() {
    return this.price;
  }

  get Description() {
    return this.description;
  }

  get Image() {
    return this.image;
  }

  get Category() {
    return this.category;
  }

  set Title(title) {
    this.title = title;
  }

  set Manufacturer(manufacturer) {
    this.manufacturer = manufacturer;
  }

  set Price(price) {
    this.price = price;
  }

  set Description(description) {
    this.description = description;
  }

  set Image(image) {
    this.image = image;
  }

  set Category(category) {
    this.category = category;
  }
}
