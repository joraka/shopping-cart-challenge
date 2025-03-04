const store = [
  { id: "1", name: "🥕 Carrot", price: 2, stock: 10 }, // i [0]
  { id: "2", name: "🍅 Tomato", price: 3, stock: 8 }, // i [1]
  { id: "3", name: "🥦 Broccoli", price: 4, stock: 5 }, // i [2]
  { id: "4", name: "🥑 Avocado", price: 5, stock: 12 }, // i [3]
  { id: "5", name: "🍌 Banana", price: 2, stock: 20 }, // i [4]
];
console.log("\n       Parduotuvės sandėlis");
console.table(store);
const cart = []; // Empty shopping cart

// Adds product to the cart
function addProduct(id, quantity) {
  if (quantity <= store[id - 1].stock) {
    store[id - 1].stock -= quantity;
    cart.push(store[id - 1]);
    store[id - 1].quantityReserved = quantity;
    return `✅ Added ${quantity} ${store[id - 1].name}`;
  }
  if (quantity > store[id - 1].stock) {
    return `❌ Sorry: Only ${store[id - 1].stock} ${
      store[id - 1].name
    } available!`;
  }
}
console.log("\n       Pirkinių krepšelis prikraunamas");
console.log(addProduct("1", 5)); // ✅ Adds 5 Carrots 🥕;
console.log(addProduct("2", 10)); // ❌ Error: Only 8 Tomatoes 🍅 available!
console.log(addProduct("5", 8)); // ✅ Added 8 🍌 Banana
console.log(addProduct("3", 3)); // ✅ Added 3 🥦 Broccoli
console.log(addProduct("2", 5)); // ✅ Added 5 🍅 Tomato
console.log(addProduct("4", 7)); // ✅ Added 7 🥑 Avocado
console.table(cart);

// Removes a product from the cart
// - If an item is removed from the cart, its **stock is restored**.
// - The ```removeProduct(id)``` function **removes the item completely** from the cart.

function removeProduct(id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      store[id - 1].stock += cart[i].quantityReserved;
      store[id - 1].quantityReserved -= cart[i].quantityReserved;
      cart.splice(i, 1);
    }
  }
  return `${store[id - 1].name} are completely removed from your cart`;
}
console.log("\n       Pirkinių krepšelis tuštinamas");

console.table(removeProduct("1")); // ✅ Completely removes Carrots, stock is restored
console.table(removeProduct("3")); //✅ Completely removes Broccoli, stock is restored
console.table(cart);

// Updates product quantity in the cart
// - The ```updateQuantity(id, quantity)``` function changes the quantity of an item in the cart.
function updateQuantity(id, quantity) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      store[id - 1].stock =
        store[id - 1].stock + cart[i].quantityReserved - quantity;
      store[id - 1].quantityReserved = quantity;
    }
  }
  return `✅ Updated ${store[id - 1].name} quantity in cart to ${quantity}`;
}

console.log("\n       Pirkinių krepšelyje keičiami produktų kiekiai");

console.log(addProduct("1", 5)); // ✅ Adds 5 Carrots 🥕;
console.table(cart);

console.log(updateQuantity("1", 2)); // ✅ Updates Carrots to 2 in the cart
console.log(updateQuantity("5", 12)); // ✅ Updates Banana to 12 in the cart
console.table(cart);

// Returns all cart items & total price
// - The ```getCartDetails()``` function should return a **summary of the cart**, including the total price.
function getCartDetails() {
  let totalPrice = 0;
  let totalPriceOneProduct = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].quantityReserved * cart[i].price;
    totalPriceOneProduct = cart[i].quantityReserved * cart[i].price;
    console.log(
      `${cart[i].name},  quantity: ${cart[i].quantityReserved},  price per piece: ${cart[i].price},  price: ${totalPriceOneProduct}`
    );
  }
  return `Cart products total price is: ${totalPrice}`;
}
console.log("\n        Pirkinių krepšelio suvestinė ir kaina");
console.log(getCartDetails());

function startShopping() {} // (EXTRA) Interactive shopping experience
