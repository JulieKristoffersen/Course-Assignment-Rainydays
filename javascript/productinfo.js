document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.getElementById('product-container');
  
    const product = {
      name: 'EXTREME BOM',
      image: 'images.css/Mens.jackets/1.jpg',
      description: 'Stay dry, warm, and comfortable with our most waterproofed jacket ever. With fully taped seams, the jacket is breathable, windproof, and waterproof. It has an extreme waterproofness range +20000 mmH2o.',
      price: 205,
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    };
  
    const productHTML = `
      <img src="${product.image}" alt="a.man.with.a.rain.jacket" class="product-image" />
      <div class="product-info">
        <h1>${product.name}</h1>
        <p class="product-price">$${product.price}</p>
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
  });
  