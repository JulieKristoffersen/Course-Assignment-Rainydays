document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("productList");
    const loadingIndicator = document.getElementById("loadingIndicator");

    loadingIndicator.style.display = "block";

    fetch("https://api.example.com/rainy-days")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }
            return response.json();
        })
        .then(data => {
            const products = data.data;
            loadingIndicator.style.display = "none";

            products.forEach(product => {
                const productElement = document.createElement("div");
                productElement.innerHTML = `
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <button onclick="viewProduct('${product.id}')">View Details</button>
                `;
                productList.appendChild(productElement);
            });
        })
        .catch(error => {
            loadingIndicator.style.display = "none";

            productList.innerHTML = `<p>Error: ${error.message}</p>`;
        });
});

function viewProduct(productId) {
    window.location.href = `product-detail.html?id=${productId}`;
}
