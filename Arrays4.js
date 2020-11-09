let numberArray = new Array();
numberArray.push(5);
numberArray.push(6);
numberArray.push(-11);
console.log(numberArray);
let sum =0;
function findSum(sum,num){
    sum+=num;
    return sum;
}
numberArray.reduce(findSum,0);
console.log(numberArray);
console.log("Sum is "+sum);