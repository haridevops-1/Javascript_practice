const feed = document.getElementById("feed");

async function loadPosts() {
  try {
    // Fetching from your given API link
    const response = await fetch("https://my-json-server.typicode.com/msbAtGit/instafeed-api/posts");

    // Check if response is OK
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Convert to JSON
    const posts = await response.json();

    // Display posts
    displayPosts(posts);

  } catch (error) {
    console.log("Error fetching posts:", error);
    feed.innerHTML = "<p>Failed to load posts.</p>";
  }
}

function displayPosts(posts) {
  feed.innerHTML = ""; // clear before adding

  posts.forEach(post => {

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="card-header">
        <img src="${post.profilePic}" alt="">
        <strong>${post.username}</strong>
      </div>

      <div class="card-image">
        <img src="${post.image}" alt="">
      </div>

      <div class="card-content">
        <div class="likes">${post.likes} likes</div>
        <p>${post.description}</p>
        <p>${post.comments} comments</p>
        <small>${post.timestamp}</small>
      </div>
    `;

    feed.appendChild(card);
  });
}

loadPosts();