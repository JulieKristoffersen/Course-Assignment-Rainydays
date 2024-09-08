const url = "https://julnys.no/Rainydays/app/public/wp-json/wc/store/products";

async function getProducts() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        createHTML(data);
    } catch (error) {
        console.log('Error fetching products:', error);
        const errorMessage = document.getElementById('errorMessage')
         displayErrorMessage("Failed to load products");;
        if (errorMessage) {
            errorMessage.innerHTML = 'Failed to load products.';
            errorMessage.style.display = 'block';
        }
    }
}

getProducts();

function createHTML(products) {
    const productContainer = document.getElementById('productList');
    if (productContainer) {
        products.forEach(function(product) {
            productContainer.innerHTML += 
            `<div class="product" data-product-id="${product.id}">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <img src="${product.images[0].src}" alt="${product.name}">
                <p>Price: $${product.price}</p>
            </div>`;
        });
    }
}

function showLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.style.display = 'block';
    }
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.style.display = 'none';
    }
}

const productLists = document.querySelectorAll('.image-list');
productLists.forEach(productList => {
    productList.addEventListener('click', event => {
        const product = event.target.closest('.product');
        if (product) {
            showLoadingScreen();
            setTimeout(() => {
                const productId = product.dataset.productId;
                window.location.href = `productinfo.html?productId=${productId}`;
            }, 1000);
        }
    });
});
