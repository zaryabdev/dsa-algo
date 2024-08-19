function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        for (let j = i; j < arr.length; j++) {
            if (current + arr[j] == 0) {
                return [current, arr[j]];
            }
        }
    }
}


console.log(

    sumZero([-4, -3, -2, -1, 0, 1, 2, 5])
);