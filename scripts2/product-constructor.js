function Product(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
    
    this.toString = function(){
        console.log("this is "+name +" and costs "+price);
    }
}
