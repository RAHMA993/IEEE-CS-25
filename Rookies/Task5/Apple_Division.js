function minimalDifference(n, weights) {
    function recursion(index, group1, group2) {
        if (index === n) {
            const difference = Math.abs(group1 - group2);
            return difference;
        }

        const addToGroup1 = recursion(index + 1, group1 + weights[index], group2);

        const addToGroup2 = recursion(index + 1, group1, group2 + weights[index]);

        if (addToGroup1 < addToGroup2) {
            return addToGroup1;
        } else {
            return addToGroup2;
        }
    }

    return recursion(0, 0, 0);
}

// Example:

console.log(minimalDifference(5, [3, 2, 7, 4, 1])); 