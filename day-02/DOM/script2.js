'use strict'
let divs = document.getElementsByTagName('*');
let king;
let businessLamp = [];
let conceitedKing = [];
let noBusiness = [];
for (var i = 0; i < divs.length; i++) {
  if (divs[i].textContent == "The King") {
    king = divs[i];
    conceitedKing[0] = divs[i];
    noBusiness.push(divs[i]);
  }
  if (divs[i].textContent == "The Businessman") {
    businessLamp[0] = divs[i];
  }
  if (divs[i].textContent == "The Lamplighter") {
    businessLamp[1] = divs[i];
    noBusiness.push(divs[i]);
  }
  if (divs[i].textContent == "The Conceited Man") {
    conceitedKing[1] = divs[i];
    noBusiness.push(divs[i]);
  }
}

console.log(king);
console.log(businessLamp);
console.log(noBusiness)
conceitedKing.forEach((item, i) => {
  alert(item.innerHTML);
});
