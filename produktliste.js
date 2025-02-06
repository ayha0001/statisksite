const myCat = new URLSearchParams(window.location.search).get("category");
document.querySelector("h1").innerHTML = myCat;

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
    <div class='list ${element.soldout && "soldout"}'>
      <a  href="produkt.html?product=${element.id}">
        <img class="productimg" src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt='${element.productdisplayname}' />
      </a>
      <a href="produkt.html?product=${element.id}">
        <h3>${element.productdisplayname}</h3>
      </a>
      <ul>
        <li>DKK ${element.price},-</li>
    <li class=" onsale ${element.discount && "isonsale"}">-${element.discount}%</li>
<li class=" soldoutlabel ${element.soldout && "issoldout"}">Soldout</li>
      </ul>
    </div>
   `
    )
    .join("");
  console.log(markup);
  productList.innerHTML = markup;
}
