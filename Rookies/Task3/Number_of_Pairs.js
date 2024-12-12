function numOfPairs (n, l, r, array) {
    let count =0;
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[i] + array[j] >= l && array[i] + array[j] <= r) {
                count ++
            }
        }
        
    }
    return count;
}

// Example:

console.log(numOfPairs(3, 4, 7, [5, 1, 2]));

console.log(numOfPairs(5, 5, 8, [5, 1, 2, 4, 3]));

console.log(numOfPairs(4, 100, 1000, [1, 1, 1, 1]));

console.log(numOfPairs(5, 9, 13, [2, 5, 5, 1, 1]));
