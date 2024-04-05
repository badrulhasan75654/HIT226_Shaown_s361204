
// Select elements
const featuredProducts = document.querySelector('.featured-products');
const allProducts = document.querySelector('.all-products');
const cartItems = document.querySelector('.cart-items');

// Example event listeners
featuredProducts.addEventListener('click', () => {
  // Handle click event for featured products
  console.log('Clicked on featured products');
});

allProducts.addEventListener('click', () => {
  // Handle click event for all products
  console.log('Clicked on all products');
});

cartItems.addEventListener('click', () => {
  // Handle click event for items in cart
  console.log('Clicked on items in cart');
});
