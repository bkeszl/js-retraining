'use strict';

let lineCount: number = 44;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is


for (let i = 0; i <= lineCount; i++) {
    let currentString: string = "";
    for(let j = 0; j < i; j++) {
      currentString += "*";
    }
    console.log(currentString);
  }
