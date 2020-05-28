'use strict'
const kids = [
        { 'petName': 'Wattled crane', 'owner': 'Bryant' },
        { 'petName': 'Devil, tasmanian', 'owner': 'Alejandro' },
        { 'petName': 'Mynah, common', 'owner': 'Nelie' },
        { 'petName': 'Dolphin, common', 'owner': 'Mariele' },
        { 'petName': 'Gray duiker', 'owner': 'Maddalena' },
        { 'petName': 'Crab (unidentified)', 'owner': 'Lucine' },
        { 'petName': 'Ant (unidentified)', 'owner': 'Lorianna' },
        { 'petName': 'Bison, american', 'owner': 'Tommie' },
        { 'petName': 'Yellow mongoose', 'owner': 'Vivyan' },
        { 'petName': 'Carpet snake', 'owner': 'Veda' },
        { 'petName': 'Lesser mouse lemur', 'owner': 'Isidor' },
      ];

let petsDiv = document.getElementById("pets");
kids.forEach((item, i) => {
  let article = document.createElement("article");
  let heading = document.createElement("h3");
  let paragaraph = document.createElement("p");
  heading.textContent = item.owner;
  paragaraph.textContent = item.petName;
  article.appendChild(heading);
  article.appendChild(paragaraph);
  petsDiv.appendChild(article);
});
