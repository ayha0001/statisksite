const productList = document.querySelector(".productlist");
console.log(productList);

fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  console.log(data);
  let markup = "";
  data
    .map((product) => {
      markup += `
    <div class='list'>
      <a href='produkt.html'>
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt='${product.productdisplayname}' />
      </a>
      <a href='produkt.html'>
        <h3>${product.productdisplayname}</h3>
      </a>
      <ul>
        <li>DKK ${product.price},-</li>
        <li>
          <a href='produkt.html'>Read More</a>
        </li>
      </ul>
    </div>`;
    })
    .join("");
  console.log(markup);
  productList.innerHTML = markup;
}
