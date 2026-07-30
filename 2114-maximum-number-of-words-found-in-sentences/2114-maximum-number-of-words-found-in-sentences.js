/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max = 0;
    for(let sentence of sentences){
        let count = 1
        for(let i=0;i<sentence.length;i++){
               if(sentence[i] === " "){
                  count++
               }
        }
        if(count>max){
            max = count;
        }
    } 
    return max;
    }
