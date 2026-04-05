async function loadClients() {
  let tableBody = document.getElementById("tableBody");
  try {
    tableBody.innerText = "Loading....";

    // Step 1: Using await we are fetching the data from the Url to load
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
    // Step 2: Loading the contents to show in the browser
    tableBody.innerHTML = "";
    data.forEach((element) => {
      let div = document.createElement("div");
      div.classList.add("container");
      let row = document.createElement("tr");
      row.innerHTML = `
            
            <td>${element.name}</td>
            <td>${element.phone}</td>
            <td>${element.website}</td>
            <td>${element.company.name}</td>
            <td>
            <span class="${status.toLowerCase()}">${status}</span>
            </td>
            `;
            tableBody.appendChild(row)
    });
  } catch (error) {
    console.log(error);
    tableBody.innerHTML = "Error loading data";
  }
}
