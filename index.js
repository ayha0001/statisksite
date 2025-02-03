const categoryList = document.querySelector(".container");
console.log(categoryList);

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then((data) => showCategory(data));

function showCategory(data) {
  console.log(data);
  const markup = data
    .map(
      (myCategory) => `
        <div class="box"><a href="produktliste.html?category=${myCategory.category}">${myCategory.category}</a></div>
   `
    )
    .join("");
  console.log(markup);
  categoryList.innerHTML = markup;
}
