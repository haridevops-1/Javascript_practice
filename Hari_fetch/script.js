const root = document.getElementById("root");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      const details = data.products;

      const div = document.createElement("div");
      div.classList.add("product")
      details.forEach(
        (x) =>
          (div.innerHTML += `   
             <div class="container">
      <img src=${x.images
      } alt="" />
      <div class="price">
           <div class="title">
        <h3>${x.title}</h3>
        <p>${x.price}</p>
      </div>
      <div >
        <p>${x.rating}</p>
      </div>
      </div>
   
    </div>`),
      );
      root.appendChild(div);
    });
});
