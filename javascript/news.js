const products = [
    {
        name: "Hikey Day",
        image: "images.css/Women.jackets/w9.jpg",
        alt: "Woman.hiking.jacket",
        description: "Our newest hiking jacket built for extreme weather over time",
        category: "NEW ARRIVALS"
    },
    {
        name: "Extreme Bom",
        image: "images.css/Mens.jackets/1.jpg",
        alt: "Man.with.red.jacket",
        description: "Our most waterproofed jacket ever, with an extreme waterproofness range +20000 mmH2o.",
        category: "NEW ARRIVALS"
    },
    {
        name: "Lightweight",
        image: "images.css/Mens.jackets/10.jpg",
        alt: "Light.climbing.jacket",
        description: "Our most breathable and lightweight jackets for climbing",
        category: "NEW ARRIVALS"
    }
];

function populateProducts(category, productListId) {
    const productList = document.getElementById(productListId);

    const filteredProducts = products.filter(product => product.category === category);

    filteredProducts.forEach(product => {
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
            <p>${product.description}</p>
        `;
        productList.appendChild(listItem);
    });
}

window.addEventListener('load', () => {
    populateProducts('NEW ARRIVALS', 'productList');
});
