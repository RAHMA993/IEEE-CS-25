function numOfGroups (n, d, points){
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n; j++) {
            if (points[j] - points[i] > d) {
                break;
            }
            for (let k = j+1; k < n; k++) {
                if (points[k] - points[i] > d) {
                    break;
                }
                count ++;
            }
        }
    }
    return count;
}

// Example 1:

const n1 = 4;
const d1 = 3;
const points1 = [1, 2, 3, 4];

console.log(numOfGroups(n1, d1, points1));


// Example 2:

const n2 = 4;
const d2 = 2;
const points2 = [-3, -2, -1, 0];

console.log(numOfGroups(n2, d2, points2));


// Example 3:

const n = 5;
const d = 19;
const points = [1, 10, 20, 30, 50];

console.log(numOfGroups(n, d, points));