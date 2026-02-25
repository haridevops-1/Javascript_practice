const container = document.querySelector("#container");
const btn = document.querySelector("#btn");

url = "https://my-json-server.typicode.com/msbAtGit/instafeed-api/posts";

btn.addEventListener("click", () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      var products = data;
      products.forEach((element) => {
        var card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
      <div class="main">
      <div>${element.username}</div>
      <div class="image">
        <img src="${element.profilePic}" alt="" />
        <img src="${element.image}" alt="" />
      </div>
      <small>${element.likes}</small>
      <p>${element.comments}</p>
      <p>${element.description}</p>
      <p>${element.timestamp}</p>
    </div>
      `;
        container.appendChild(card);
      });
    });
});
