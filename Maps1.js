//a
let dice = 1 + (Math.floor(Math.random() * 10) % 6);

//b
while (true) {
  dice = 1 + (Math.floor(Math.random() * 10) % 6);
  if (dice == 6) break;
}
//c
let counter = 0;
let dictionary = new Map();
while (true) {
  dice = 1 + (Math.floor(Math.random() * 10) % 6);
  if (dictionary.has(dice)) {
    counter = dictionary.get(dice);
    dictionary.set(dice, ++counter);
  } else {
    dictionary.set(dice, 1);
  }
  if (dice == 6) break;
}
//d
dictionary = new Map();

while (true) {
  dice = 1 + (Math.floor(Math.random() * 10) % 6);
  counter = 0;
  if (dictionary.has(dice)) counter = dictionary.get(dice);
  dictionary.set(dice, ++counter);
  if (Array.from(dictionary.values()).includes(10)) break;
}
console.log(dictionary);
//e
let maxCountNum = 0;
let minCountNum = 0;
let min = 11;
for (let [key, value] of dictionary) {
  if (min > value) {
    min = value;
    minCountNum = key;
  }

  if (value == 10) maxCountNum = key;
}
console.log("The dice with max count = " + maxCountNum);
console.log("The dice with min count = " + minCountNum);
