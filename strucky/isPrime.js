function isPrime(n) {
    if (n == 1) return false;
    let sqrt = Math.sqrt(n);
    let i = 2, isPrime = true;
    while (i <= sqrt) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
        i++;
    }

    return isPrime;
}

console.log(isPrime(8));

