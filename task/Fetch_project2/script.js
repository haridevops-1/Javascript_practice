const main = document.querySelector("#root");
const btn = document.querySelector("#myBtn");

btn.addEventListener("click", () => {
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
      const product = data.products;
      console.log(product);

      product.forEach((x) => {
        var myDiv = document.createElement("div");
        myDiv.classList.add("card");

        myDiv.innerHTML = `
        <img src="${x.images}" alt="Image is not Available" />
        <p>${x.title}</p>
        <p>${x.category}</p>
        <p>${x.price}</p>
        `;
        main.appendChild(myDiv);
      });
    });
});
