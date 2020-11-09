let numArray = new Array();
for(num=1;num<=100;num++){
    if(num%10==(Math.floor(num/10)%10)&&num%10!=0)
        numArray.push(num);
}
console.log(numArray);