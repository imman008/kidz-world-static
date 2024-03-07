// Step 1: Handle Click Events on "Add to cart" Buttons
const addButtons = document.querySelectorAll('.button');

addButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    items[index].quantity++; // Increment the quantity of the corresponding item
    updateCart(); // Update the cart display
  });
});

// Step 2: Handle Click Event on "Cart items" Button
const cartButton = document.getElementById('cart');
cartButton.addEventListener('click', () => {
  console.log('Order Details:');
  items.forEach(item => {
    if (item.quantity > 0) {
      console.log(${item.name} - Quantity: ${item.quantity});
    }
  });
  updatePrice(); // Calculate the total amount
  console.log(Total Amount: $${finalDollars}.${finalCents});
});

// Helper function to update the cart display
function updateCart() {
  let cart = 0;
  items.forEach(item => {
    cart += item.quantity;
  });
  cartValue.textContent = cart;
}

// Helper function to calculate the total amount
function updatePrice() {
  let totalPriceInCents = 0;
  items.forEach(item => {
    totalPriceInCents += item.quantity * (item.dollars * 100 + item.cents);
  });
  finalDollars = Math.floor(totalPriceInCents / 100);
  finalCents = totalPriceInCents % 100;
}