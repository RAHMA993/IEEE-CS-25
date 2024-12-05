function calcMinimalDistance (n, m, cities, towers) {
    let maxDistance = 0;
    for (let i = 0; i < n; i++) {
        let minDistance = Infinity;
        for (let j = 0; j < m; j++) {
            let r = Math.abs(cities[i] - towers[j])
            if (r < minDistance) {
                minDistance = r;
            }
        }
        if (minDistance > maxDistance) {
            maxDistance = minDistance;
        }
    }
    return maxDistance;
}

// Example 1:

const n = 3;
const m = 2;
const cities = [-2, 2, 4];
const towers = [-3, 0];

console.log(calcMinimalDistance(n, m, cities, towers));


// Example 2:

const n1 = 5;
const m1 = 3;
const cities1 = [1, 5, 10, 14, 17];
const towers1 = [4, 11, 15];

console.log(calcMinimalDistance(n1, m1, cities1, towers1));