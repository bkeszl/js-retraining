'use strict'
var names: string[] = [];
console.log(names.length);
names.push("William");
console.log(names.length === 0);
names.push("James");
names.push("Amanada");
console.log(names.length);
console.log(names[2]);
names.forEach(name => console.log(name));
names.forEach(indexedArrayElements);

function indexedArrayElements(element: string, index: number, array: string[]){
  console.log((index + 1) + ". " +  element);
}

names.splice(1, 1);

for (let i = 0; i < names.length; i++) {
    console.log(names[names.length-1-i]);
}

names.splice(0, names.length);
console.log(names);
