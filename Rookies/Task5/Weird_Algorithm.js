function weirdAlgorithm(n) {
    console.log(n);
    if (n === 1) {
        return n;
    }

    if (n % 2 === 0) {
        weirdAlgorithm(n / 2);
    } else {
        weirdAlgorithm(3 * n + 1);
    }
}

// Example:


weirdAlgorithm(3);

weirdAlgorithm(7);

weirdAlgorithm(1);

