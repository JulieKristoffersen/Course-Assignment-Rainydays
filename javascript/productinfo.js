document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.getElementById('product-container');
    const logo = document.getElementById('rainydays-logo');

    const product = {
        name: "Extreme Bom",
        image: "images.css/Mens.jackets/1.jpg",
        alt: "Man.with.red.jacket",
        price: 205,
        category: "RAIN JACKETS",
        description: "Stay dry, warm, and comfortable with our most waterproofed jacket ever. With fully taped seams, the jacket is breathable, windproof, and waterproof. It has an extreme waterproofness range +20000 mmH2o.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        baseColor: "Red",
        onSale: true,
        discountedPrice: 155,
        tags: ["jacket", "mens"],
        favorite: false
    };

    const productHTML = `
        <div class="product-image-container">
            <img src="${product.image}" alt="${product.alt}" class="product-image" />
            ${product.onSale ? '<span class="sale-badge">Sale</span>' : ''}
        </div>
        <div class="product-info">
            <h1>${product.name}</h1>
            ${product.onSale ? `
                <p class="product-price">
                    <span class="original-price">$${product.price}</span>
                    <span class="discounted-price">$${product.discountedPrice}</span>
                </p>
            ` : `<p class="product-price">$${product.price}</p>`}
            <p>${product.description}</p>
            <p>Material: 100% Polyester</p>
            <p>Model is 180 cm tall wearing a size M</p>
            <div class="size-box" id="size-box">
                ${product.sizes.map(size => `
                    <input type="radio" id="size-${size.toLowerCase()}" name="size" class="size-input" />
                    <label for="size-${size.toLowerCase()}" class="size">${size}</label>
                `).join('')}
            </div>
            <div class="button-container">
                <a href="checkout.html" class="buy-button">Add to Cart</a>
            </div>
        </div>
    `;

    productContainer.innerHTML = productHTML;

    if (logo) {
        logo.addEventListener('click', function() {
            window.location.href = "index.html"; 
        });
    }
});
