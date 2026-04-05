var result = document.getElementById("root");
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    var product = data.products;
    for (let i = 0; i < product.length; i++) {
      console.log(product[i].id);
      var myDiv = document.createElement("div");
      myDiv.classList.add("card");

      myDiv.innerHTML = `  
      <img class="image"src="${product[i].images[0]}">
      <h1 class="heading">${product[i].title}</h1>
      <h3 class="heading-2">${product[i].category}</h3>
      <p class="mypara">${product[i].description}</p>
      
      `;

      //   Main container
      
      myDiv.style.cssText = `
       border: 1px solid black;
       border-radius: 20px;
       `;

      //   Image
      let image = myDiv.querySelector(".image");
      image.style.cssText = `
        height: 300px;
        width: 300px;
        
      `;
      let newOne = myDiv.querySelector(".heading");
      newOne.style.color = "red";
      result.appendChild(myDiv);
    }
    // console.log(div)
  });
