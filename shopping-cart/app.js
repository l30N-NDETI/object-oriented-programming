class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            const cartItem = new ShoppingCartItem(product, quantity);
            this.items.push(cartItem);
        }
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    displayCart() {
        this.items.forEach(item => {
            console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: ${item.getTotalPrice()}`);
        });
    }
}

// Create products
const product1 = new Product(1, 'Laptop', 1000);
const product2 = new Product(2, 'Phone', 500);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 2);
cart.addItem(product2, 3);

// Display the cart
console.log('Cart after adding items:');
cart.displayCart();

// Remove an item from the cart
cart.removeItem(1);

// Display the cart again
console.log('Cart after removing an item:');
cart.displayCart();

// Display the total items and total price
console.log(`Total items in cart: ${cart.getTotalItems()}`);
console.log(`Total price of items in cart: ${cart.getTotalPrice()}`);
