/**
 * @param {number[][]} grid
 * @return {number[]}
 */
function findMissingAndRepeatedValues(grid) {
    const n = grid.length;
    const total = n * n;

    const count = {};

    
    for (let row of grid) {
        for (let num of row) {
            count[num] = (count[num] || 0) + 1;
        }
    }

    let repeated;
    let missing;


    for (let i = 1; i <= total; i++) {
        if (count[i] === 2) {
            repeated = i;
        }

        if (!count[i]) {
            missing = i;
        }
    }

    return [repeated, missing];

};