function numberOfUntreatedCrimes (n, array){
    let hiredNo = 0;
    let untreatedCrimesNo = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] == -1) {
            if (hiredNo >0) {
                hiredNo --;
            }
            else{
                untreatedCrimesNo ++;
            }
        }
        else if (array[i] > 0){
            hiredNo +=array[i];
        }
    }

    return untreatedCrimesNo;
}

// Example 1:

console.log(numberOfUntreatedCrimes(3, [-1, -1, 1]));

// Example 2:

console.log(numberOfUntreatedCrimes(8, [1, -1, 1, -1, -1, 1, 1, 1]));

// Example 3:

console.log(numberOfUntreatedCrimes(11, [-1, -1, 2, -1, -1, -1, -1, -1, -1, -1, -1]));