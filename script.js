let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${item.name} - ₹${item.price}</span>
        <button onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
  });

  cartTotal.textContent = total;
}

function checkoutOrder() {
  if (cart.length === 0) {
    alert("Please add items first.");
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  let orderList = "";

  cart.forEach((item, index) => {
    orderList += `${index + 1}. ${item.name} - ₹${item.price}\n`;
  });

  const message = `
Hello Bean & Bloom Café,

I would like to place an online delivery order.

Order Details:
${orderList}

Total Amount: ₹${total}

Payment Option:
UPI / Cash on Delivery

Delivery Address:
Please confirm delivery availability.

Thank you.
`;

  const phoneNumber = "919063652749";

  const encodedMessage = encodeURIComponent(message);

  window.open(
    `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
    "_blank"
  );
}