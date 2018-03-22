'use strict';

// TODO: Create a "Cart" constructor that holds quantity, item, and an array of items in the cart
var itemsInCart = [];

<<<<<<< HEAD
var Cart = function(item) {

  this.quantity = 0;
  this.item = item;
  itemsInCart.push(this);
};

console.log(Cart);
=======
//Cart Constructor
var Cart = function(item, quantity) {
  this.item = item;
  this.quantity = quantity;
  Cart.allItems.push(this);
}
//array of items and their quantities
Cart.allItems =[];
>>>>>>> 4bc892a374103e9813bd152837ebc158b4cb5315

// Product Contructor
var Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;
  this.quantity = 0;
  Product.allProducts.push(this);
};

Product.allProducts = [];


function generateCatalog() {

  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/usb.gif', 'USB');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');
}

console.log(generateCatalog);
// Initialize the app
generateCatalog();




