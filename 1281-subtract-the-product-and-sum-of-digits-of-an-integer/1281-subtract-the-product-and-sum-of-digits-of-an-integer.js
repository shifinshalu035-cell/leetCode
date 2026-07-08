/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
 let sum = 0;
 let product = 1;
 let result = 0
 while(n>0){
    let digit = n%10;
    product = product*digit;
    sum = sum + digit;
     result = product - sum ;
    n = Math.floor(n/10);
 }
 return result
 
};