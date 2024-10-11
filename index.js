function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}


console.log(
    isPrime(2), // -> true
    // isPrime(3), // -> true
    // isPrime(4), // -> false
    // isPrime(5), // -> true
    // isPrime(2048), // -> false
    // isPrime(713), // -> false
);