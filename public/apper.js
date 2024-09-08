let shortUrl = document.getElementById("shortURL");
let shortUrlDiv = document.getElementById("divver");

function sendUrl() {
  let url = document.getElementById("url").value;
  fetch("http://localhost:3000/geturl", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      url: url,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      shortUrl.innerText = `http://localhost:3000/${data.hash}`;
      shortUrlDiv.style.display = "block";
    });
}

let copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", (event) => {
  event.preventDefault();
  navigator.clipboard.writeText(shortURL.innerText);
  copyButton.innerHTML = "Copied";
  setTimeout(() => {
    copyButton.innerHTML = "Click to copy";
  }, 1000);
});
