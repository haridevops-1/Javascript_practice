async function asyncFetchingData() {
  try {
    const response = await fetch(
      "https://my-json-server.typicode.com/msbAtGit/bootcamp-products-api/products",
    );
    if (!response.ok) {
      throw error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}

asyncFetchingData()