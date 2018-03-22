'use strict';

function populateForm() {
  //TODO: Add an <option> tag inside the form's select for each product

  // var jsonPics = localStorage.getItem('stored');
  // var catalogPics = JSON.parse(jsonPics);

  var catalog = document.getElementById('items');
  
  for(var i in Product.allProducts){

    var catalogItem = document.createElement('option');
    catalogItem.filePath = Product.allProducts[i].filePath;
    catalogItem.textContent =Product.allProducts[i].name;
    catalog.appendChild(catalogItem);

  }
  catalog.appendChild(catalogItem);

}

function handleSubmit(event) {
  // TODO: Prevent the page from reloading

  // Do all the things
  addSelectedItemToCart();
  saveCartToLocalStorage();
  updateCounter();
  updateCartPreview();

}

function addSelectedItemToCart() {

  // TODO: Add the selected item and quantity to the cart

  // event listener for the click of the button, push clickrd item into cart constructor
}

function saveCartToLocalStorage() {
  // TODO: Save the cart to Local Storage

}

function updateCounter() {
  // TODO: Update the cart count in the header
}

function updateCartPreview() {
  // TODO: Show the selected item & quantity in the cart div
}

// TODO: Put an event listener on the #catalog so that you can run the "handleSubmit" method when user submits the form (adding an item to their cart)


// Start it up ...
populateForm();
