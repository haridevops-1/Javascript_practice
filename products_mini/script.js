const main = document.getElementById("root");
const button = document.getElementById("btn");

button.addEventListener("click", async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    console.log(products);
    main.innerHTML = ""; // clear previous content

    products.forEach((element) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
         <div class="container">
      <div class="products">
        <div class="image">
          <img src="${element.image}" alt="" height="200px width = "200px"/>
        </div>
        <div class="details">
          <p>${element.title}</p>
          <p>${element.price}</p>
          <p>${element.category}</p>
          <button class="button1">Buy now</button>
        </div>
        </div>
      </div>    
      `;

      main.appendChild(card);
    });
  } catch (error) {
    console.log("Error:", error);
  }
});
