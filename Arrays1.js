let numArray = new Array();
for(let i=0;i<10;i++){
    let num = Math.floor(Math.random()*900)+100;
    numArray.push(num);
}
console.log(numArray);
let maxNum = 0;
let minNum = 1000;
let max2 = 0;
let min2 = 1000;
for(let element of numArray){ 
    maxNum = Math.max(element,maxNum);
    minNum = Math.min(element,minNum);
}
for(let element of numArray){
    max2 = (element<maxNum&&element>max2)?element:max2;
    min2 = (element>minNum&&element<min2)?element:min2;
}
console.log(maxNum);
console.log(max2);
console.log(minNum);
console.log(min2);
