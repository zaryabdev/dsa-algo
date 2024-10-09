// Sum of odd numbers
// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript



function rowSumOddNumbers(n) {
    var odd = [];
    var starts = (n * n) - (n - 1);

    while (n > 0) {
        odd.push(starts);
        starts += 2;
        n--;
    }

    let sum = odd.reduce((value, element) => value + element);

    return sum;

}

console.log(rowSumOddNumbers(42)); // 74088
console.log(rowSumOddNumbers(2)); // 8
