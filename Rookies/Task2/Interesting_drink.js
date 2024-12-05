function calcShopesNum (n, bottlePrice, q, budgets) {

    // sorting bottlePrice
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (bottlePrice[minIndex] > bottlePrice[j]) {
                minIndex = j;
            }
            
        }
        if (minIndex !== i){
            let temp = bottlePrice[i];
            bottlePrice[i] = bottlePrice[minIndex];
            bottlePrice[minIndex] = temp; 
        }
    }
    let result = [];
    for (let i = 0; i < q; i++) {
        let count = 0;
        let left = 0;
        let right = n - 1;
        let budget = budgets[i];
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (bottlePrice[mid] <= budget) {
                count = mid + 1; 
                left = mid + 1;  
            } else {
                right = mid - 1; 
            }
        }
        result.push(count);
    }
    return result;
}

// Example:

const n = 5;
const bottlePrice = [3, 10, 8, 6, 11];
const q = 4;
const budgets = [1, 10, 3, 11];

const result = calcShopesNum(n, bottlePrice, q, budgets);
console.log(result.join(' ')); // Output: 1 4 5