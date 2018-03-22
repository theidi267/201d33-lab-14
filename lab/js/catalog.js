'use strict';

function populateForm() {
  //TODO: Add an <option> tag inside the form's select for each product
  var catalog = document.getElementById('items');

  for(var i in Product.allProducts) {
    var item = document.createElement('option');
    item.textContent = Product.allProducts[i].name;
    catalog.appendChild(item);
  }

}

function handleSubmit(event) {
  // TODO: Prevent the page from reloading
    event.preventDefault();
    for(var i in Product.allProducts){
      if(event.target.items.value === Product.allProducts[i].name) {
        console.log(Product.allProducts[i].name);
      // Cart.allItems[i].quantity++;
      // Cart.allItems[i].push(Product.allProducts[i].name);
    }
  }
  
  // Do all the things
  addSelectedItemToCart();
  saveCartToLocalStorage();
  updateCounter();
  updateCartPreview();
    
}

function addSelectedItemToCart() {
  // TODO: Add the selected item and quantity to the cart
}

function saveCartToLocalStorage() {
  // TODO: Save the cart to Local Storage
  var saveProducts = JSON.stringify(Product.allProducts);
  localStorage.setItem('catalog items', saveProducts);
}

function updateCounter() {
  // TODO: Update the cart count in the header
}

function updateCartPreview() {
  // TODO: Show the selected item & quantity in the cart div
}


// TODO: Put an event listener on the #catalog so that you can run the "handleSubmit" method when user submits the form (adding an item to their cart)

var submitButton = document.getElementById('catalog');

submitButton.addEventListener('submit', handleSubmit);

console.log(handleSubmit);


// Start it up ...
populateForm();
