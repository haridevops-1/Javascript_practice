const root = document.querySelector("#root");
async function loadProducts() {
  try {
    url = "https://my-json-server.typicode.com/msbAtGit/instafeed-api/posts";
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network something went wrong");
    }
    const data = await response.json();
    console.log(data);
    displayPosts(data);
  } catch (error) {
    console.log(error);
    root.innerHTML = `<p>Failed to load posts</p>`;
  }
}

function displayPosts(data) {
  root.innerHTML = "";
  data.forEach((element) => {
    var card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    
    <div>${element.username}</div>
    <img src="${element.profilePic}" alt="" />
    <img src="${element.image}" alt="" />
    <p>${element.likes}</p>
    <p>${element.comments}</p>
    <p>${element.description}</p>
    <p><small>{element.timestamp}</small></p>
    
    `;
    root.appendChild(card);
  });
}
loadProducts();
