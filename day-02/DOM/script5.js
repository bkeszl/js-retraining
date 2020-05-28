'use strict'
let button = document.getElementById("button");
let background = document.getElementsByTagName('body')
button.onclick = function(){
  if (!background[0].classList.contains("party")) {
    background[0].classList.add("party");
  } else {
    background[0].classList.remove("party");
  }
}
