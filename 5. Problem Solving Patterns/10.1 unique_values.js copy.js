function countUniqueValues(arr) {
    let i = 0, j = 1;

    while (j < arr.length) {

        let atI = arr[i];
        let atJ = arr[j];

        if (atI == atJ) {
            ++j;
        } else {
            ++i;
            arr[i] = atJ;
            ++j;
        }
    }

    return i + 1;
}
//                 i
countUniqueValues([1, 1, 2, 2, 2, 5, 7, 7, 99]);
//                    j