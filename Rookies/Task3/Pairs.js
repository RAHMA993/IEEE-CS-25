function maxPairs (n, k, arr) {
    let start = 0;
    let count = 0;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    for (let end = 1; end < n; end++) {
        while (arr[end] - arr[start] > k) {
            start++;  
        }
        if (arr[end] - arr[start] == k) {
            count++;
            start++;  
        }
    }
    return count;
}

//Example:


console.log(maxPairs(4, 1, [1, 2, 3, 4]));

console.log(maxPairs(5, 2, [1, 5, 3, 4, 2]));
