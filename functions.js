function area(length=1, width=1){
    return length*width
}
console.log(area(2,1))
function volume(length=1, width=1,height=1){
    return length*width*height
}
console.log(volume(2,1,3))
//sum of an array
let sumArray=(a)=>{
let sum=0
for(let i=0;i<=a.length;i++){
    sum=sum+a[i];
    return sum}
}
console.log(sumArray([1,4,6,9]))

//check palindrome 252
//function reverse
function reverse(str){
    let revStr=""
    for(let i=strlength-1;i=>0;i--){
        revStr =revStr+str[i];
        console.log(revStr)
    }
    return revStr;
}
console.log(reverse("dayananda"))
function palindrome(n){
    let strN = '' + n;
    let revN = reverse(strN);

}
//write a function that takes a number n as input and output the list digit of digit of the number
//a=[];a.push(5);a=[5]a.push(1);a=[5,1]
function getDigits(n){
return Array.from(String(n),Number);

}
const number=23678;
const digits=getDigits(number);
console.log(digits);

//or
function digits(n){
    let strN='' + n;
    let arr=[];
    for(let i=0;i<strN.length;i++){
        arr.push(Number(strN[i]))
    }
    return arr;
}
console.log(digits(12345))