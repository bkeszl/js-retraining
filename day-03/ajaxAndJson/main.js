'use strict'
let infoDiv = document.getElementById("info-animal");
let button = document.getElementById('button');
let counter = 1;
button.onclick = function(){
  let http = new XMLHttpRequest();
  http.open("GET", "https://learnwebcode.github.io/json-example/animals-"+ counter +".json");
  http.onload = function() {
    let data = JSON.parse(http.responseText);
    renderHTML(data);
  }
  http.send();
  counter++;
  if (counter > 3) {
    button.classList.add("hide-me")
  }
};

function renderHTML(data) {
    let htmlString = "";

    data.forEach((item, i) => {
      htmlString += "<p>" + item.name + " is a " + item.species + " that likes to eat " +
      item.foods.likes + " and dislikes " + item.foods.dislikes + ".</p>";
    });


    infoDiv.insertAdjacentHTML('beforeend', htmlString);
}
