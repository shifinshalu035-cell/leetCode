/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const outPut = [];
    for(let i=1;i<=n;i++){
        if(i % 3 === 0 && i % 5=== 0){
             outPut.push("FizzBuzz")
        }
        else if(i%3===0){
           outPut.push("Fizz");
        }
        else if(i%5===0){
            outPut.push("Buzz")
        }
        else{
            outPut.push(String(i))
        }
    }
    return outPut;
}