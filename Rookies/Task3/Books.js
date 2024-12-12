function maxNumOfBooks (n, t, timeToRead) {
    let maxBook = 0;
    let startTime = 0;
    let time = 0;
    for (let endTime = 0; endTime < n; endTime++) {
        time += timeToRead[endTime];
        if (time > t) {
            time -= timeToRead[startTime]
            startTime ++;
        }
        let currentBook = endTime - startTime + 1;
        if (currentBook > maxBook) {
            maxBook = currentBook;
        }
    }
    return maxBook;
}


// Example 1:

const n = 4;
const t = 5;
const books = [3, 1, 2, 1];

console.log(maxNumOfBooks(n, t, books));


// Example 2:

const n1 = 3;
const t1 = 3;
const books1 = [2, 2, 3];

console.log(maxNumOfBooks(n1, t1, books1));