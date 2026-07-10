/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
  let num = x;
  let sum = 0;
  while (num > 0){
    sum += num % 10
    num = Math.floor(num/10);
  }
  if(x % sum === 0){
    return sum;
  }
    
  return -1
};