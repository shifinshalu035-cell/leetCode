/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let left = 0;
    let right  = 0;
    let underscore = 0;
    for(let ch of moves){
        if(ch === "R"){
            right++;
        }
        else if(ch === "L"){
            left++;
        }else{
           underscore++;
        }

    }
    return Math.abs(left-right) + underscore;
};