/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
   let smallest = nums[0];
   let largest = nums[0];
   for(let i=0;i<nums.length;i++){
    if(smallest>nums[i]){
        smallest=nums[i]
    }
    if(largest<nums[i]){
        largest = nums[i]
    }
   }
   let gcd = 1
   for(let i=1;i<=smallest;i++){
    if(smallest%i === 0 && largest%i ===0){
        gcd=i
    }
   }
   return gcd

    }
