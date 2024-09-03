const products = [
    {
        name: "Extreme Bom",
        image: "images/Mens.jackets/1.jpg",
        alt: "Man.with.red.jacket",
        price: 205,
        category: "RAIN JACKETS"
    },
    {
        name: "Rainy Breeze",
        image: "images/Women.jackets/w2.jpg",
        alt: "Rain.jacket.orange",
        price: 149,
        category: "RAIN JACKETS"
    },
    {
        name: "Tech Boomer",
        image: "images/Women.jackets/w3.jpg",
        alt: "Hiking.jacket.green.and.blue",
        price: 105,
        category: "RAIN JACKETS"
    },
    {
        name: "Woodie Zip",
        image: "images/Women.jackets/w4.jpg",
        alt: "yellow.rainjacket",
        price: 189,
        category: "RAIN JACKETS"
    },
    {
        name: "Hotwindy",
        image: "images/Women.jackets/w5.jpg",
        alt: "windproof.rainjacket",
        price: 156,
        category: "RAIN JACKETS"
    },
    {
        name: "Orange Poweron",
        image: "images/Women.jackets/w6.jpg",
        alt: "Sweatproof.green.jacket",
        price: 99,
        category: "ALL WEATHER JACKETS"
    },
    {
        name: "Sewed Antartik",
        image: "images/Women.jackets/w7.jpg",
        alt: "Windy.jacket",
        price: 139,
        category: "ALL WEATHER JACKETS"
    },
    {
        name: "Brown Bombom",
        image: "images/Women.jackets/w8.jpg",
        alt: "Hoddie.orange.jacket",
        price: 189,
        category: "ALL WEATHER JACKETS"
    },
    {
        name: "Snowboard Flow",
        image: "images/Women.jackets/w9.jpg",
        alt: "Hiking.jacket",
        price: 170,
        category: "ACTIVITY JACKETS"
    },
    {
        name: "Lightaweight",
        image: "images/Women.jackets/w10.jpg",
        alt: "Light.climbing.jacket",
        price: 139,
        category: "ACTIVITY JACKETS"
    },
    {
        name: "Buble Hot",
        image: "images/Women.jackets/w11.jpg",
        alt: "Winter.jacket.for.snow",
        price: 129,
        category: "ACTIVITY JACKETS"
    },
    {
        name: "Running Power",
        image: "images/Women.jackets/w12.jpg",
        alt: "Mountain.jscket",
        price: 129,
        category: "ACTIVITY JACKETS"
    },
    {
        name: "Surfy Light",
        image: "images/Women.jackets/w13.jpg",
        alt: "Running.easy.breathing.jacket",
        price: 109,
        category: "ACTIVITY JACKETS"
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
    populateProducts('RAIN JACKETS', 'productList');
    populateProducts('ALL WEATHER JACKETS', 'allWeatherProductList');
    populateProducts('ACTIVITY JACKETS', 'activityProductList');
});
