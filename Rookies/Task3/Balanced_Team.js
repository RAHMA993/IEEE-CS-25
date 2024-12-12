function maxBalancedTeam(n, skills) {
    let maxTeamSize = 0;
    let start = 0;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (skills[minIndex] > skills[j]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = skills[i];
            skills[i] = skills[minIndex];
            skills[minIndex] = temp;
        }
    }
    for (let end = 0; end < n; end++) {
        while (skills[end] - skills[start] > 5) {
            start++;
        }
        if (end - start + 1 > maxTeamSize) {
            maxTeamSize = end - start + 1;
        }
    }
    return maxTeamSize;
}

//Example:

console.log(maxBalancedTeam(6, [1, 10, 17, 12, 15, 2]));

console.log(maxBalancedTeam(10, [1337, 1337, 1337, 1337, 1337, 1337, 1337, 1337, 1337, 1337]));

console.log(maxBalancedTeam(6, [1, 1000, 10000, 10, 100, 1000000000]));
