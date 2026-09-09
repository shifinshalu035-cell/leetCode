/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function(nums, key) {

    let count = {};

    for (let i = 0; i < nums.length - 1; i++) {

        if (nums[i] === key) {

            let target = nums[i + 1];

            count[target] = (count[target] || 0) + 1;
        }
    }

    let answer = 0;
    let maxCount = 0;

    for (let target in count) {

        if (count[target] > maxCount) {
            maxCount = count[target];
            answer = Number(target);
        }
    }

    return answer;

};