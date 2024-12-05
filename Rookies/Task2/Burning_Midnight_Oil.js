function calcMinCodeLines (n, k) {
    let left = 1;
    let right = n;
    let result = n;

    while (right >= left) {
        let mid = Math.floor((left + right)/2);
        let totalLines = 0;
        let current = mid;

        while(current > 0){
            totalLines += current;
            current = Math.floor(current / k);
        }
            if (totalLines >= n) {
                result = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
    }
    return result;
}

// Example 1:

let n = 7;
let k = 2;

console.log(calcMinCodeLines(n, k));


// Example 2:

let n1 = 59;
let k1 = 9;

console.log(calcMinCodeLines(n1, k1));

