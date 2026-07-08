/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elementSum = 0;
    let digitSum = 0;
    let result = 0;
    for(let num of nums){
      elementSum+=num;
      let temp = num
      while (temp>0){
        let digit = temp%10;
        digitSum +=digit
        temp = Math.floor(temp/10);
      result = Math.abs(elementSum - digitSum);
      }
    }
      return result 
};