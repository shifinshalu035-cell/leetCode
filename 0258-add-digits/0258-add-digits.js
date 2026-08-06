/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  while(num >= 10){
    num = num
        .toString()
        .split('')
        .reduce((a,b)=> {
            return a + Number(b);
        },0)
  }
  return num 

    }