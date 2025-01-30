console.log("siden loades");

let productId = 1578;
let productContainer = document.querySelector(".productcontainer");

fetch("https://kea-alt-del.dk/t7/api/products/${productId}")
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
 <div class="productimg">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/1578.webp" alt="${data.productdisplayname}" />
        </div>
        <div class="productprice">
          <h2>${data.productdisplayname}</h2>
          <p>DKK ${data.price},-</p>
        </div>
        <div class="productinfo">
          <ul>
            <li>
              <h3>Color</h3>
              <p>${data.color}</p>
            </li>
            <li>
              <h3>Brand</h3>
              <p>${data.brand}</p>
            </li>
            <li>
              <h3>Occasion</h3>
              <p>${data.usagetype}</p>
            </li>
          </ul>
        </div>
        <div class="button"><a href="produkt.html">Add to cart</a></div>
            `;
  });
