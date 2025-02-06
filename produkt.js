console.log("siden loades");

const myProduct = new URLSearchParams(window.location.search).get("product");
// document.querySelector("").innerHTML = myProduct;

const productContainer = document.querySelector(".productcontainer");

fetch(`https://kea-alt-del.dk/t7/api/products/${myProduct}`)
  .then((response) => response.json()) //then gør det til en json
  .then((data) => {
    //then show product
    productContainer.innerHTML = `
 <div class="productimg ${data.soldout && "soldout"}">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${myProduct}.webp" alt="${data.productdisplayname}" />
        </div>
<div class="producth2">
          <h2>${data.productdisplayname}</h2>
          </div>
                <div class="productprice">
          <p>DKK ${data.price},- </p>
                     <div class="onsale2 ${data.discount && "isonsale"}">
          <p>${data.discount}%</p>
        </div>
   
        </div>
        <div class="productinfo">
          <ul>
            <li>
              <h3>Color</h3>
              <p>${data.basecolour}</p>
            </li>
            <li>
              <h3>Brand</h3>
              <p>${data.brandname}</p>
            </li>
            <li>
              <h3>Occasion</h3>
              <p>${data.usagetype}</p>
            </li>
          </ul>
        </div>
        <div class="button ${data.soldout && "soldout"}"><a href="produkt.html">Add to cart</a></div>
            `;
  });
