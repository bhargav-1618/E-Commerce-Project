// Define an array to store cart items
let cartItems = [];

// Function to add item to the cart
function addToCart(name, price) {
    cartItems.push({ name: name, price: price });
    updateCart();
}

// Function to update the cart display
function updateCart() {
    let cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = ""; // Clear previous contents

    cartItems.forEach(item => {
        let itemElement = document.createElement("div");
        itemElement.classList.add("card", "mb-2");
        itemElement.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">Price: $${item.price}</p>
            </div>
        `;
        cartContainer.appendChild(itemElement);
    });
}
