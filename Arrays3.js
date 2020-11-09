function primeNumberChecker(num){
    if(num!==1){
        for(let i=2;i<=num;i++){
            if(i==num){
                return true;     
            }
            if(num%i==0){
                return false;
            }
        }
    }
}

let primeFactorsArray = new Array();
let num = Math.ceil(Math.random()*100);
console.log("Num is: "+num);
for(let i=1;i<=num/2;i++){
    if(num%i==0&&primeNumberChecker(i)){
        primeFactorsArray.push(i);
    }
}
console.log(primeFactorsArray);