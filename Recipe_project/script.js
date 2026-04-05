const root = document.getElementById("root");

async function loadProducts() {
  try {
    const response = await fetch("https://dummyjson.com/recipes");

    const products = await response.json();
    console.log(products);
    products.recipes.forEach((element) => {
      let card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
      <div class="container">
      <div class="products">
      <div class="image-section">
        <img src="${element.image}" alt="" />
      </div>
      <div class="details">
        <h1>${element.name}</h1>
        <div class="rating">
        <p><strong>⭐
 rating:</strong> ${element.rating}</p>
        <p class="change">(${element.reviewCount}  <small>Reviews</small>)</p>
        </div>
        <div class="food-det">
        <p>• ${element.cuisine}</p>
        <p>• ${element.difficulty}</p>
        <p>• ${element.caloriesPerServing}</p>
        </div>
        </div>
      </div>
    </div>
      
      `;
      root.appendChild(card);
    });
  } catch (error) {
    console.log(error);
  }
}
loadProducts();
