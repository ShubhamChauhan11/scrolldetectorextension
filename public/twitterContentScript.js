let body = document.body;
let popupDiv = document.createElement("div");

popupDiv.style.position = "fixed";

popupDiv.style.height = "50px";
popupDiv.style.width = "300px";
popupDiv.style.background = "#000089";
popupDiv.style.color = "#ffffff";
popupDiv.style.borderRadius = "10px";
popupDiv.style.padding = "2px";

popupDiv.style.top = "50%";
popupDiv.style.right = "0";
popupDiv.style.display = "none";

body.appendChild(popupDiv);
let contentDiv = document.createElement("div");
contentDiv.style.background = "#000045";
contentDiv.style.borderRadius = "5px";
contentDiv.style.padding = "5px";
popupDiv.appendChild(contentDiv);
let interval;

window.addEventListener("scroll", () => {
  clearInterval(interval);
  const scrollY = window.scrollY;

  const articles = document.querySelectorAll("article");

  articles.forEach((article) => {
    const articleTop = article.offsetTop;
    const articleBottom = articleTop + article.clientHeight;
    const rect = article.getBoundingClientRect();
    console.log(
      `Currently scrolling in ${article.innerText} ${articleTop} ${articleBottom}, ${scrollY}, ${rect.top} , ${rect.bottom}`
    );

    if (rect.top < 0 && rect.bottom > 0) {
      let name = article.innerText.split("@")[0];
      contentDiv.innerHTML = `Just Scrolled the tweet by : ${name}`;
      popupDiv.style.display = "flex";
      popupDiv.style.justifyContent = "center";
      popupDiv.style.alignItems = "center";
    }
  });

  interval = setTimeout(() => {
    popupDiv.style.display = "none";
    contentDiv.innerHTML = "";
  }, 5000);
});
