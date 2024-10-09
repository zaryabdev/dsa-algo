var searchMatrix = (matrix, target) => {

    if (matrix.length == 0) return false;

    let m = matrix.length;
    let n = matrix[0].length;

    let l = 0, r = m;
    let potencialArrIndex = null;

    while (l <= r) {
        if (target <= matrix[l][0]) {

        }
        if (target <= matrix[r][0]) {

        }
    }
};

// console.log(searchMatrix([[1, 2, 4, 8], [10, 11, 12, 13], [14, 20, 30, 40]], 10));
console.log(searchMatrix([[1], [10], [14]], 10));
