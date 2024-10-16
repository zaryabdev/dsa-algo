/***
 * Write a function, mostFrequentChar, that takes in a string as an argument.
 *  The function should return the most frequent character of the string.
 *  If there are ties, return the character that appears earlier in the string.
 */


const mostFrequentChar = (s) => {
    let hashMap = {};
    ;
    for (let i = 0; i < s.length; i++) {
        hashMap[s[i]] = (hashMap[s[i]] || 0) + 1;
    }
    ;

    let best = "";
    for (let i = 0; i < s.length; i++) {
        if (best == "" || hashMap[s[i]] > hashMap[best]) {
            best = s[i];
        }
    }
    return best;


};



console.log(
    mostFrequentChar('bookeeper'), // -> 'e'
    mostFrequentChar('david'), // -> 'd'
    mostFrequentChar('abby'), // -> 'b'
    mostFrequentChar('potato'), // -> 'o'
    mostFrequentChar('eleventennine'), // -> 'e'
    mostFrequentChar("riverbed"), // -> 'r'

);