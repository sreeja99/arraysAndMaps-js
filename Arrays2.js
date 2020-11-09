let numArray = new Array();
for(let i=0;i<10;i++){
    let num = Math.floor(Math.random()*900)+100;
    numArray.push(num);
}
console.log(numArray);
let sortedArray = new Array();
sortedArray = numArray.slice(0).sort();
console.log("2nd Max ="+sortedArray[numArray.length-2]);
console.log("2nd Min ="+sortedArray[1]);
