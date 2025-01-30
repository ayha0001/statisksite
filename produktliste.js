const productList = document.querySelector(".productlist");
const productId = 1578;

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productList.innerHTML = `
    <div class="list">
          <a href="produkt.html">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="Product Image" />
          </a>
          <a href="produkt.html">
            <h3>${data.productdisplayname}</h3>
          </a>
          <ul>
            <li>DKK ${data.price},-</li>
            <li><a href="produkt.html">Read More</a></li>
          </ul>
        </div>
    `;
  });
