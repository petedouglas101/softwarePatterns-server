class Order {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  get allItems() {
    return this.items;
  }

  get total() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  toString() {
    return `Order: ${this.items} ${this.total}`;
  }
}
