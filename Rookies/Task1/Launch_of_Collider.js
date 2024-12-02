function firstCollisionTime(n, direction, position) {
    let minTime = Infinity;

    for (let i = 0; i < n - 1; i++) {
        if (direction[i] === 'R' && direction[i + 1] === 'L') {
            let collisionTime = (position[i + 1] - position[i]) / 2;
            if (collisionTime < minTime) {
                minTime = collisionTime;
            }
        }
    }

    return minTime === Infinity ? -1 : minTime;
}

// Example 1:
let n = 4;  
let directions = "RLRL";  
let positions = [2, 4, 6, 10]; 

console.log(firstCollisionTime(n, directions, positions)); 


// Example 2:
let num = 3;  
let direction = "LLR";  
let position = [40, 50, 60]; 

console.log(firstCollisionTime(num, direction, position)); 
