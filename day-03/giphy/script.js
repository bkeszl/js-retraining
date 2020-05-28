'use strict'
let apiKey = "annONvgb7tplcvjiD2ee4LebgcS443Rc"

let fetchGifs = new XMLHttpRequest();
fetchGifs.open("GET", "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=fox&limit=16")
fetchGifs.onload = function() {
  let gifs = JSON.parse(fetchGifs.responseText);
  renderImages(gifs);
}
fetchGifs.send();

function renderImages(gifs){
  let container = document.getElementById("gif");
  gifs.data.forEach((item, i) => {
    let gif = document.createElement("img")
    gif.setAttribute("src", item.images.fixed_height_still.url);
    gif.setAttribute("class", "img");
    gif.setAttribute("id", item.id);
    container.appendChild(gif);
  });
}

let body = document.getElementsByTagName("body");
body[0].addEventListener('click', event => {
  let fetchClickedGif = new XMLHttpRequest();
  fetchClickedGif.open("GET", "https://api.giphy.com/v1/gifs/" + event.target.id
                            + "?api_key=" + apiKey);
  fetchClickedGif.onload = function() {
    let singleGifData = JSON.parse(fetchClickedGif.responseText);
    changeUrl(singleGifData);
  }
  fetchClickedGif.send();
})

function changeUrl(singleGifData) {
  let gif = document.getElementById(singleGifData.data.id);
  gif.setAttribute("src", singleGifData.data.images.fixed_height.url);
}
