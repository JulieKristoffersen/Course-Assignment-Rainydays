fetch('https://v2.api.noroff.dev/')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const filteredProducts = data.filter(product => product.category === category);

    productList.innerHTML = ''; 

    filteredProducts.forEach(product => {
      const productContainer = document.createElement('div');
      productContainer.classList.add('product-container');
      const productElement = createProductElement(product);
      productContainer.appendChild(productElement);
      productList.appendChild(productContainer);
    });

    hideLoadingIndicator();
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

function generateFooter() {
    const footerPlaceholder = document.getElementById('footerPlaceholder');

    const footerHTML = `
        <div class="footer">
            <div class="container">
                <div class="footer-section">
                    <h3>Follow us</h3>
                    <div class="social-icons">
                        <a href="facebook-icon.com" class="facebook-icon">
                            <img src="images.css/Div/facebook.png" alt="facebook-icon" />
                        </a>
                        <a href="instagram-icon.com" class="instagram-icon">
                            <img src="images.css/Div/instagram.png" alt="instagram-icon" />
                        </a>
                        <a href="youtube-icon.com" class="youtube-icon">
                            <img src="images.css/Div/youtube.png" alt="youtube-icon" />
                        </a>
                    </div>
                </div>
                <div class="footer-section">
                    <a href="about-us.html">
                        <h3>About us</h3>
                        <div class="footer-content">
                            <p><strong>Visit our store</strong></p>
                            <p>1600 Pennsylvania Avenue NW, Washington, DC 20500, United States</p>
                        </div>
                    </a>
                </div>
                <div class="footer-section">
                    <a href="contact-us.html">
                        <h3>Contact us</h3>
                        <div class="contact-info">
                            <p><img src="images.css/Div/email.png" alt="email-icon" /></p>
                            <p>rainydays.emailcontact@mail.com</p>
                            <p><img src="images.css/Div/phone-call.png" alt="phone-icon" /></p>
                            <p>123 45 678 (open 7am - 4pm)</p>
                        </div>
                    </a>
                </div>
                <div class="back-to-top">
                    <p><a href="#top">Back to top</a></p>
                </div>
            </div>
        </div>
    `;

    footerPlaceholder.innerHTML = footerHTML;
}

window.addEventListener('load', () => {
    generateFooter(); 
});
