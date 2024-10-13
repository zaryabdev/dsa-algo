/***
 * Write a function sumNumbersRecursive that takes in an array of numbers
 *  and returns the sum of all the numbers in the array. All elements will
 * be integers. Solve this recursively.
 * https://www.structy.net/problems/sum-numbers-recursive
 *  */

const sumNumbersRecursive = (numbers) => {
    if (numbers.length == 0) return 0;
    return numbers[0] + sumNumbersRecursive(numbers.slice(1));
};


console.log(
    sumNumbersRecursive([5, 2, 9, 10]), // -> 26
    // sumNumbersRecursive([1, -1, 1, -1, 1, -1, 1]), // -> 1
    // sumNumbersRecursive([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]),// -> -55
    // sumNumbersRecursive([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) // -> 0
);

