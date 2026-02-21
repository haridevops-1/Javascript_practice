var main = document.querySelector("#root");

// Fetching the URL
fetch(
  "https://my-json-server.typicode.com/msbAtGit/bootcamp-products-api/products",
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    // storing all the data's into one variable
    var product = data;

    for (let i = 0; i < product.length; i++) {
      var myDiv = document.createElement("div");
      myDiv.classList.add("card");

      myDiv.innerHTML = `
        <img src="${product[i].image}" />
        <p class="title">${product[i].title}</p>
        <p class="price">${product[i].price}</p>
        <p class="category">${product[i].category}</p>
        <p class="rating">${product[i].rating.rate}</p>
        <p class="stock">${product[i].stock}</p>
        <button class="btn">Add to cart</button>
        
        `;
      main.appendChild(myDiv);
    }
  });
