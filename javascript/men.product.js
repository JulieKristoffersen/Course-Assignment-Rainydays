const products = [
    {
        name: "Extreme Bom",
        image: "images.css/Mens.jackets/1.jpg",
        alt: "Man.with.red.jacket",
        price: 205,
        category: "RAIN JACKETS"
    },
    {
        name: "Rainy Breeze",
        image: "images.css/Mens.jackets/2.jpg",
        alt: "Rain.wind.jacket",
        price: 149,
        category: "RAIN JACKETS"
    },
    {
        name: "Tech Boomer",
        image: "images.css/Mens.jackets/3.jpg",
        alt: "Hoodie.jacket",
        price: 105,
        category: "RAIN JACKETS"
    },
    {
        name: "Woodie Zip",
        image: "images.css/Mens.jackets/4.jpg",
        alt: "Jacket.red.and.blue",
        price: 189,
        category: "RAIN JACKETS"
    },
    {
        name: "Hotwindy",
        image: "images.css/Mens.jackets/5.jpg",
        alt: "Hot.rainjacket",
        price: 156,
        category: "RAIN JACKETS"
    },
    {
        name: "Orange Poweron",
        image: "images.css/Mens.jackets/6.jpg",
        alt: "Classic.rainjacket",
        price: 99,
        category: "ALL WEATHER JACKETS"
    },
    {
        name: "Sewed Antartik",
        image: "images.css/Mens.jackets/7.jpg",
        alt: "Green.anorakk",
        price: 139,
        category: "ALL WEATHER JACKETS"
    },
    {
        name: "Brown Bombom",
        image: "images.css/Mens.jackets/8.jpg",
        alt: "Military.rainjacket",
        price: 189,
        category: "ALL WEATHER JACKETS"
    },
    {
        name: "Snowboard Flow",
        image: "images.css/Mens.jackets/9.jpg",
        alt: "Snowboard.jacket.red.brown.and.whit",
        price: 170,
        category: "ACTIVITY JACKETS"
    },
    {
        name: "Lightaweight",
        image: "images.css/Mens.jackets/10.jpg",
        alt: "Climing.light",
        price: 139,
        category: "ACTIVITY JACKETS"
    },
    {
        name: "Buble Hot",
        image: "images.css/Mens.jackets/11.jpg",
        alt: "Hot.bubblejacket",
        price: 129,
        category: "ACTIVITY JACKETS"
    },
    {
        name: "Running Power",
        image: "images.css/Mens.jackets/12.jpg",
        alt: "Running.vest",
        price: 129,
        category: "ACTIVITY JACKETS"
    },
    {
        name: "Surfy Light",
        image: "images.css/Mens.jackets/13.jpg",
        alt: "Suring.jacket",
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

window.addEventListener('load', () => {
    populateProducts('RAIN JACKETS', 'productList');
    populateProducts('ALL WEATHER JACKETS', 'allWeatherProductList');
    populateProducts('ACTIVITY JACKETS', 'activityProductList');
});
