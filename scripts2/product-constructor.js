function Product(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;

    Product.prototype.toString = function () {
        return this.name + "-" + this.price;
    }
}
