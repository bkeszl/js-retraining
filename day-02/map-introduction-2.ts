let hashmap = {
  "978-1-60309-452-8":"A Letter to Jo",
  "978-1-60309-459-7":"Lupus",
  "978-1-60309-444-3":"Red Panda and Moon Bear",
  "978-1-60309-461-0":"The Lab"
}

Object.keys(hashmap).forEach((key) => console.log(
  hashmap[key] + " (ISBN: " + key + ")"
  )
);

delete hashmap["978-1-60309-444-3"];

let deleteKey: string = "";
let obj = Object.getOwnPropertyNames(hashmap).forEach((key) => setDeleteKey(key))


delete hashmap[deleteKey];

function setDeleteKey(key) {
  if (hashmap[key] == "The Lab"){
    deleteKey = key;
  }
}

console.log(hashmap);
