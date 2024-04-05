// Define the array of products
const accessoriesProducts = [
    {
        name: "Running hat",
        image: "images.css/Accesories/hat1.jpg",
        alt: "Running hat black",
        price: 35
    },
    {
        name: "Classic beanie",
        image: "images.css/Accesories/hat2.jpg",
        alt: "Classic beanie",
        price: 49
    },
    {
        name: "Thin gloves",
        image: "images.css/Homepage/HOME-woman.with.accesories.jpg",
        alt: "Thin gloves",
        price: 29
    }
];

// Function to populate products in the given productListId
function populateProducts(products, productListId) {
    const productList = document.getElementById(productListId);

    // Loop through each product and create HTML elements
    products.forEach(product => {
        const listItem = document.createElement('div');
        listItem.classList.add('product');
        listItem.innerHTML = `
            <div class="image-container">
                <img src="${product.image}" alt="${product.alt}" class="product-img" />
                <img src="images.css/love.png" alt="like-button" class="top-left-img" />
                <a href="productinfo.html">
                    <img src="images.css/shopping-cart.png" alt="profile-button" class="bottom-right-btn" />
                </a>
            </div>
            <p><strong>${product.name}</strong></p>
            <p>$ ${product.price}</p>
        `;
        productList.appendChild(listItem);
    });
}

// Call the populateProducts function when the window is loaded
window.addEventListener('load', () => {
    populateProducts(accessoriesProducts, 'productList');
});
