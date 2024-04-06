function showLoadingIndicator() {
    document.getElementById('loadingIndicator').style.display = 'block';
  }
  
  function hideLoadingIndicator() {
    document.getElementById('loadingIndicator').style.display = 'none';
  }

const products = [
    {
        name: "Extreme Bom",
        image: "images.css/Mens.jackets/1.jpg",
        alt: "Man.with.red.jacket",
        price: 205,
        category: "RAIN JACKETS",
        description: "Our most waterproofed jacket ever, with an extreme waterproofness range +20000 mmH2o.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        baseColor: "Red",
        onSale: true,
        discountedPrice: 155,
        tags: ["jacket", "mens"],
        favorite: false
    },
    {
        name: "Rainy Breeze",
        image: "images.css/Mens.jackets/2.jpg",
        alt: "Rain.wind.jacket",
        price: 149,
        category: "RAIN JACKETS",
        description: "Stay dry and comfortable with our Rainy Breeze jacket. Windproof and breathable.",
        sizes: ["S", "M", "L", "XL"],
        baseColor: "Blue",
        onSale: false,
        tags: ["jacket", "mens"],
        favorite: false
    },
    {
        name: "Tech Boomer",
        image: "images.css/Mens.jackets/3.jpg",
        alt: "Hoodie.jacket",
        price: 105,
        category: "RAIN JACKETS",
        description: "Hooded jacket made for the rainy days. Lightweight and stylish.",
        sizes: ["S", "M", "L"],
        baseColor: "Black",
        onSale: false,
        tags: ["jacket", "mens"],
        favorite: false
    },
    {
        name: "Woodie Zip",
        image: "images.css/Mens.jackets/4.jpg",
        alt: "Jacket.red.and.blue",
        price: 189,
        category: "RAIN JACKETS",
        description: "Stylish zip-up jacket with a mix of red and blue colors.",
        sizes: ["M", "L", "XL"],
        baseColor: "Red/Blue",
        onSale: false,
        tags: ["jacket", "mens"],
        favorite: false
    },
    {
        name: "Hotwindy",
        image: "images.css/Mens.jackets/5.jpg",
        alt: "Hot.rainjacket",
        price: 156,
        category: "RAIN JACKETS",
        description: "Hot and trendy rain jacket for the fashion-forward.",
        sizes: ["S", "M", "L", "XL"],
        baseColor: "Yellow",
        onSale: false,
        tags: ["jacket", "mens"],
        favorite: false
    },
    {
        name: "Orange Poweron",
        image: "images.css/Mens.jackets/6.jpg",
        alt: "Classic.rainjacket",
        price: 99,
        category: "ALL WEATHER JACKETS",
        description: "Classic all-weather jacket in vibrant orange color.",
        sizes: ["S", "M", "L"],
        baseColor: "Orange",
        onSale: false,
        tags: ["jacket", "mens"],
        favorite: false
    },
    {
        name: "Sewed Antartik",
        image: "images.css/Mens.jackets/7.jpg",
        alt: "Green.anorakk",
        price: 139,
        category: "ALL WEATHER JACKETS",
        description: "Anorak-style jacket designed for the great outdoors. Made with durable materials.",
        sizes: ["M", "L", "XL"],
        baseColor: "Green",
        onSale: false,
        tags: ["jacket", "mens"],
        favorite: false
    },
    {
        name: "Brown Bombom",
        image: "images.css/Mens.jackets/8.jpg",
        alt: "Military.rainjacket",
        price: 189,
        category: "ALL WEATHER JACKETS",
        description: "Military-inspired rain jacket for rugged adventures.",
        sizes: ["M", "L", "XL"],
        baseColor: "Brown",
        onSale: false,
        tags: ["jacket", "mens"],
        favorite: false
    },
    {
        name: "Snowboard Flow",
        image: "images.css/Mens.jackets/9.jpg",
        alt: "Snowboard.jacket.red.brown.and.whit",
        price: 170,
        category: "ACTIVITY JACKETS",
        description: "Snowboard jacket designed for maximum performance on the slopes.",
        sizes: ["S", "M", "L"],
        baseColor: "Red/Brown/White",
        onSale: false,
        tags: ["jacket", "mens", "snowboard"],
        favorite: false
    },
    {
        name: "Lightaweight",
        image: "images.css/Mens.jackets/10.jpg",
        alt: "Climing.light",
        price: 139,
        category: "ACTIVITY JACKETS",
        description: "Lightweight jacket perfect for climbing and outdoor activities.",
        sizes: ["S", "M", "L"],
        baseColor: "Gray",
        onSale: false,
        tags: ["jacket", "mens", "outdoor"],
        favorite: false
    },
    {
        name: "Buble Hot",
        image: "images.css/Mens.jackets/11.jpg",
        alt: "Hot.bubblejacket",
        price: 129,
        category: "ACTIVITY JACKETS",
        description: "Stay warm with our hot bubble jacket. Perfect for cold weather activities.",
        sizes: ["S", "M", "L"],
        baseColor: "Black",
        onSale: false,
        tags: ["jacket", "mens", "winter"],
        favorite: false
    },
    {
        name: "Running Power",
        image: "images.css/Mens.jackets/12.jpg",
        alt: "Running.vest",
        price: 129,
        category: "ACTIVITY JACKETS",
        description: "Performance running vest designed for runners.",
        sizes: ["S", "M", "L"],
        baseColor: "Blue",
        onSale: false,
        tags: ["vest", "mens", "running"],
        favorite: false
    },
    {
        name: "Surfy Light",
        image: "images.css/Mens.jackets/13.jpg",
        alt: "Suring.jacket",
        price: 109,
        category: "ACTIVITY JACKETS",
        description: "Lightweight jacket for surfing and beach activities.",
        sizes: ["S", "M", "L"],
        baseColor: "Blue/White",
        onSale: false,
        tags: ["jacket", "mens", "surfing"],
        favorite: false
    }
];
function createProductElement(product) {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    if (product.onSale) {
        const saleBadge = document.createElement('span');
        saleBadge.classList.add('sale-badge');
        saleBadge.textContent = 'On Sale';
        productElement.appendChild(saleBadge);
    }

    productElement.innerHTML = `
        <div class="image-container">
            <img src="${product.image}" alt="${product.alt}" class="product-img" />
            <img src="images.css/love.png" alt="like-button" class="top-left-img" />
            <a href="productinfo.html">
                <img src="images.css/shopping-cart.png" alt="profile-button" class="bottom-right-btn" />
            </a>
        </div>
        <p><strong>${product.name}</strong></p>
        ${product.onSale ? `
            <p class="price-section">
                <span class="original-price"> $${product.price}</span> 
                <span class="discount-price"> $${product.discountedPrice}</span>
            </p>
        ` : `<p>$ ${product.price}</p>`}
    `;

    return productElement;
}

function populateProducts(category, productListId) {
    const productList = document.getElementById(productListId);

    const filteredProducts = products.filter(product => product.category === category);

    filteredProducts.forEach(product => {
        const productContainer = document.createElement('div');
        productContainer.classList.add('product-container');
        const productElement = createProductElement(product);

        productContainer.appendChild(productElement);

        productList.appendChild(productContainer);
    });
}

window.addEventListener('load', () => {
    populateProducts('RAIN JACKETS', 'productList');
    populateProducts('ALL WEATHER JACKETS', 'allWeatherProductList');
    populateProducts('ACTIVITY JACKETS', 'activityProductList');
});