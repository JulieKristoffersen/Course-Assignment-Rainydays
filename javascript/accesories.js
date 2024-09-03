const accessoriesProducts = [
    {
        name: "Running hat",
        image: "images/Accesories/hat1.jpg",
        alt: "Running hat black",
        price: 35
    },
    {
        name: "Classic beanie",
        image: "images/Accesories/hat2.jpg",
        alt: "Classic beanie",
        price: 49
    },
    {
        name: "Thin gloves",
        image: "images/Homepage/HOME-woman.with.accesories.jpg",
        alt: "Thin gloves",
        price: 29
    }
];

function populateProducts(products, productListId) {
    const productList = document.getElementById(productListId);

    products.forEach(product => {
        const listItem = document.createElement('div');
        listItem.classList.add('product');
        listItem.innerHTML = `
            <div class="image-container">
                <img src="${product.image}" alt="${product.alt}" class="product-img" />
                <img src="images/love.png" alt="like-button" class="top-left-img" />
                <a href="productinfo.html">
                    <img src="images/shopping-cart.png" alt="profile-button" class="bottom-right-btn" />
                </a>
            </div>
            <p><strong>${product.name}</strong></p>
            <p>$ ${product.price}</p>
        `;
        productList.appendChild(listItem);
    });
}

window.addEventListener('load', () => {
    populateProducts(accessoriesProducts, 'productList');
});
