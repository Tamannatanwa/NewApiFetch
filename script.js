const API_KEY = "1adfb2faf79041de8a1c109436ae5d89";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => {
  fetchMovieData("India");
});
async function fetchMovieData(query) {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${query}&apikey=1adfb2faf79041de8a1c109436ae5d89`
  );
  const newsData = await response.json();
  bindMovieData(newsData.articles);
}

function bindMovieData(article) {
  const parentCard = document.querySelector(".cards-parent");
  const movieCardTemplate = document.querySelector("#movie-card-template");
  parentCard.innerHTML = "";
  article.forEach((newsImg) => {
    if (!newsImg.urlToImage) return;
    const cardClone = movieCardTemplate.content.cloneNode(true);
    makeCard(cardClone, newsImg);
    parentCard.appendChild(cardClone);
  });
}

function makeCard(cardClone,newsImg) {
  const newsimg = cardClone.getElementById("news-img");
  const title = cardClone.getElementById("heading");
  const source = cardClone.getElementById("source");
  const description = cardClone.getElementById("description");
  newsimg.src = newsImg.urlToImage;
  title.innerHTML = newsImg.title;
  source.innerHTML = newsImg.source.name;
  description.innerHTML = newsImg.description;
}


const searchInput = document.getElementById("searchNews")
const searchButton = document.getElementById("button")

searchButton.addEventListener("click",()=>{
  const value = searchInput.value
  if (!value) return;
  fetchMovieData(value);
})


function onNavItemClick(id) {
  fetchMovieData(id)
}