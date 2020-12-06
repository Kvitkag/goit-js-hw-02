const findLongestWord = function(string) {
    const array = string.split(' ');
    let wordMaxLength = array[0];

    for (let i = 1; i < array.length; i += 1) {
            if (array[i].length > wordMaxLength.length) {
                wordMaxLength = array[i];
            }
        }

    return wordMaxLength;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); 
console.log(findLongestWord('Google do a roll')); 
console.log(findLongestWord('May the force be with you'));