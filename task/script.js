//Selecting the label, input and button, output

var CaptainName = document.getElementById("captain");
var WicketKeeperName = document.getElementById("wicketkeeper");
var myBtn = document.querySelector("#myBtn");
var output = document.querySelector("#output");

myBtn.addEventListener("click", () => {
  let div = document.createElement("div");
  div.classList.add("empty");

  div.innerHTML = `
  <strong>Captain Name:</strong>${CaptainName.value}<br/>
  <strong>WicketKeeper Name:</strong>${WicketKeeperName.value}
  `;
  output.appendChild(div);
});
