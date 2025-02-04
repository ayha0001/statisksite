const myCat = new URLSearchParams(window.location.search).get("category");
document.querySelector("h1").innerHTML = myCat;

const myProduct = new URLSearchParams(window.location.search).get("id");

const productList = document.querySelector(".productlist");
console.log(productList);

fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCat}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  console.log(data);
  const markup = data
    .map(
      (element) => `
    <div class='list'>
      <a href='produkt.html?product=${element.product}'>
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
    </div>
   `
    )
    .join("");
  console.log(markup);
  productList.innerHTML = markup;
}
