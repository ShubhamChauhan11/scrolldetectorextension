let body = document.body;
let popupDiv = document.createElement("div");

popupDiv.style.position = "fixed";

popupDiv.style.height = "50px";
popupDiv.style.width = "200px";
popupDiv.style.background = "#000089";
popupDiv.style.color = "#ffffff";
popupDiv.style.borderRadius = "10px";

popupDiv.style.top = "50%";
popupDiv.style.right = "0";
popupDiv.style.display = "none";
popupDiv.style.padding = "2px";

body.appendChild(popupDiv);
let contentDiv = document.createElement("div");
popupDiv.appendChild(contentDiv);
contentDiv.style.padding = "5px";
contentDiv.style.background = "#000034";
contentDiv.style.borderRadius = "5px";
let interval;
let lastScrollPostion = 0;

window.addEventListener("scroll", () => {
  clearInterval(interval);
  const scrollY = window.scrollY;
  console.log("scrolly", scrollY);

  contentDiv.innerHTML =
    lastScrollPostion < scrollY ? " You Scrolled Down" : " You Scrolled Up";

  popupDiv.style.display = "flex";
  popupDiv.style.justifyContent = "center";
  popupDiv.style.alignItems = "center";
  lastScrollPostion = scrollY;

  interval = setTimeout(() => {
    popupDiv.style.display = "none";
    contentDiv.innerHTML = "";
  }, 1000);
});
