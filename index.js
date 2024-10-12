
const mostFrequentChar = (s) => {
    let hashMap = {
        // "e" : [idnex, times]
    };
    debugger;
    for (let i = 0; i < s.length; i++) {
        let letter = s[i];
        if (hashMap[letter]) {
            let [idx, count] = hashMap[letter];
            hashMap[letter] = [idx, ++count];
        } else {
            hashMap[letter] = [i, 1];
        }
    }
    debugger;

    let mostFreq = "";

};



console.log(
    mostFrequentChar('bookeeper'), // -> 'e'
    // mostFrequentChar('david'), // -> 'd'
    // mostFrequentChar('abby'), // -> 'b'
    // mostFrequentChar('potato'), // -> 'o'
    // mostFrequentChar('eleventennine'), // -> 'e'
    // mostFrequentChar("riverbed"), // -> 'r'

);