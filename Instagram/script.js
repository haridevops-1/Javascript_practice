const feed = document.getElementById("root");

async function loadPosts() {
  try {
    const posts = await fetch(
      "https://my-json-server.typicode.com/msbAtGit/instafeed-api/posts",
    );
    const scroll = await posts.json();
    console.log(scroll);
    scroll.forEach((element) => {
      let card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
            <div class="container">
            <div class="child-container">
        <div class="top-field">
            <img src="${element.profilePic}" alt="" />
            <h3>${element.username}</h3>
        </div>
        <div class="image">
            <img src="${element.image}" alt="" />
        </div>
        <div class="details">
            <p>${element.likes}<strong>  likes</strong></p>
            <p>${element.description}</p>
            <p>${element.comments}comments</p>
            <p>${element.timestamp}</p>
        </div>
        </div>
        </div>
            `;
      feed.append(card);
    });
  } catch (error) {
    console.log(error);
  }
}

loadPosts();
