function chocolateBars(n, times) {
    let aliceTime = 0;
    let bobTime = 0;
    let aliceCount = 0;
    let bobCount = 0;
    let left = 0;
    let right = n - 1;

    while (left <= right) {
        if (aliceTime <= bobTime) {
            aliceTime += times[left];
            aliceCount++;
            left++;
        } else {
            bobTime += times[right];
            bobCount++;
            right--;
        }
    }
    return [aliceCount, bobCount];
}


// Example:

console.log(chocolateBars(5, [2, 9, 8, 2, 7])); 
