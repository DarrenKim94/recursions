// Write a JavaScript function to compute the sum of an array of integers.

const nums = [1, 5, 4, 3, 6];

function sumOfArr(arr) {
    // the recursion is done once the array hits 0
    if (arr.length < 1) {
        // return 0 so that it stops adding
        return 0;
    }
    // pop each number on by one and keep adding at 
    // the end of the array until it is less than 1
    else {
        return arr.pop() + sumOfArr(arr);
    }
}

console.log(sumOfArr(nums))