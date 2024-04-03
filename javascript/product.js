function fetchProducts() {
    const apiUrl = 'https://v2.api.noroff.dev/';  
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then(data => {
        const productList = document.getElementById('productList');
  
        data.forEach(product => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `
            <div class="product">
              <div class="image-container">
                <img src="${product.image.url}" alt="${product.title}" class="product-img" />
                <img src="images.css/love.png" alt="like-button" class="top-left-img" />
                <a href="productinfo.html">
                  <img src="images.css/shopping-cart.png" alt="profile-button" class="bottom-right-btn" />
                </a>
              </div>
              <p><strong>${product.title}</strong></p>
              <p>$ ${product.price}</p>
            </div>
          `;
          productList.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }
  
  window.addEventListener('load', fetchProducts);
  