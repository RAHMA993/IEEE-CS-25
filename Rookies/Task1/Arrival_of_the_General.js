function numberOfSwaps (n, heights) {

    let maxNo = heights[0];
    let maxHeightIndex = 0;
    let minNo = heights[n-1];
    let minHeightIndex = n-1;

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] > maxNo) {
            maxNo = heights[i];
            maxHeightIndex = i;
        }
        if (heights[i] <= minNo) {
            minNo = heights[i];
            minHeightIndex = i;
        }
    }
    let noOfSwaps = maxHeightIndex + (n-1 - minHeightIndex);

    if(maxHeightIndex > minHeightIndex){
        noOfSwaps -=1;
    }

    return noOfSwaps;
}

// Example 1:

console.log(numberOfSwaps(4, [33, 44, 11, 22]));

// Example 2:

console.log(numberOfSwaps(7, [10, 10, 58, 31, 63, 40, 76]));