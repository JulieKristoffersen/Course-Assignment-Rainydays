const url = "https://julnys.no/Rainydays/app/public/wp-json/wc/store/products";

async function getProducts(){
    try{
        const response = await fetch(url);
        const getResults = await response.json();
        console.log(getResults);
    }
    
    catch (error) {
        console.log(error);
    }
}

getProducts();

function createHTML(products){
    product.forEach(function(product){
        productContainer.innerHTML += 
        `<div>
            <h2>{product.name}</h2>
            </div>`
    })
}

document.addEventListener('click', (event) => {
    const someElement = document.getElementById('someElement');
    if (someElement) { 
        if (someElement.contains(event.target)) {
            console.log('Clicked inside the element');
        } else {
            console.log('Clicked outside the element');
        }
    } else {
        console.log('Element not found or not a Node');
    }
});

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
