console.log("siden loades");

let productId = 1165;
let productContainer = document.querySelector(".productcontainer");

fetch("https://kea-alt-del.dk/t7/api/products/1165")
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = "";
  });
