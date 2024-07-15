function findLongestWord(str) {
    const words = str.split(' ');
    let longestWord = '';

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}


let result = findLongestWord("Training on full stack is going on");
console.log("The string:Training on full stack is going on")
console.log("The largest word:"+result); 

