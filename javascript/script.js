function generateFooter() {
    const footerPlaceholder = document.getElementById('footerPlaceholder');

    const footerHTML = `
        <div class="footer">
            <div class="container">
                <div class="footer-section">
                    <h3>Follow us</h3>
                    <a href="facebook-icon.com" class="facebook-icon">
                        <p><img src="images.css/Div/facebook.png" alt="facebook-icon" /></p>
                    </a>
                    <a href="instagram-icon.com" class="instagram-icon">
                        <p>
                            <img src="images.css/Div/instagram.png" alt="instagram-icon" />
                        </p>
                    </a>
                    <a href="youtube-icon.com" class="youtube-icon">
                        <p><img src="images.css/Div/youtube.png" alt="youtube-icon" /></p>
                    </a>
                </div>
                <div class="footer-section">
                    <a href="about-us.html">
                        <h3>About us</h3>
                        <div class="footer-section">
                            <p><strong>Visit our store</strong></p>
                            <p>
                                1600 Pennsylvania Avenue NW, Washington, DC 20500, United States
                            </p>
                        </div>
                    </a>
                </div>
                <div class="footer-section">
                    <a href="contact-us.html">
                        <h3>Contact us</h3>
                        <div class="contact-info">
                            <p><img src="images.css/Div/email.png" alt="email-icon" /></p>
                            <p>rainydays.emailcontact@mail.com</p>
                            <p>
                                <img src="images.css/Div/phone-call.png" alt="phone-icon" />
                            </p>
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