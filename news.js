// | #  | Problem                                 | Hint / JS Tip                                  |
// | -- | --------------------------------------- | ---------------------------------------------- |
// | 1  | Create an array of numbers from 1 to 10 | Use `Array.from({length:10}, (_,i)=>i+1)`      |
// | 2  | Reverse an array                        | Use `arr.reverse()` or loop backwards          |
// | 3  | Find max and min in an array            | Use `Math.max(...arr)` / `Math.min(...arr)`    |
// | 4  | Sum of all elements                     | Use `reduce((acc,n)=>acc+n,0)`                 |
// | 5  | Count even and odd numbers              | Loop + modulo `%`                              |
// | 6  | Find index of a number                  | Use `arr.indexOf(n)`                           |
// | 7  | Remove duplicates                       | Use `Set` → `Array.from(new Set(arr))`         |
// | 8  | Merge two arrays                        | Use `arr1.concat(arr2)` or `[...arr1,...arr2]` |
// | 9  | Check if array contains a value         | Use `arr.includes(value)`                      |
// | 10 | Print all elements with `forEach`       | `arr.forEach(el => console.log(el))`           |
// | #  | Problem                                       | Hint / JS Tip                            |
// | -- | --------------------------------------------- | ---------------------------------------- |
// | 11 | Move zeros to end                             | Two-pointer or `filter` + `length-zero`  |
// | 12 | Reverse only part of array                    | Use `slice()` + `reverse()` + `splice()` |
// | 13 | Find second largest number                    | Sort array and pick `arr[arr.length-2]`  |
// | 14 | Rotate array by k positions                   | Use `splice` + `concat`                  |
// | 15 | Merge sorted arrays                           | Two-pointer approach                     |
// | 16 | Count frequency of elements                   | Use `{}` object or `Map`                 |
// | 17 | Remove all duplicates except first occurrence | Use `Set` + `filter`                     |
// | 18 | Find missing number in 1..N                   | Use sum formula or `Set` lookup          |
// | 19 | Find common elements between arrays           | Use `Set` intersection                   |
// | 20 | Flatten nested arrays                         | Use `arr.flat()`                         |
// | #  | Problem                             | Hint / JS Tip                             |
// | -- | ----------------------------------- | ----------------------------------------- |
// | 21 | Two sum (find pair with target sum) | Use hash map or two-pointer if sorted     |
// | 22 | Triplets sum to zero                | Sort + two pointers                       |
// | 23 | Maximum sum subarray of size k      | Sliding window technique                  |
// | 24 | Longest subarray with sum = k       | Use prefix sum + hash map                 |
// | 25 | Move all negatives to left          | Two-pointer approach                      |
// | 26 | Container with most water           | Two-pointer approach                      |
// | 27 | Trapping rain water                 | Precompute left & right max arrays        |
// | 28 | Maximum consecutive ones            | Sliding window / count max consecutive 1s |
// | 29 | Minimum size subarray sum ≥ target  | Sliding window                            |
// | 30 | Product of array except self        | Prefix & suffix product arrays            |
// | #  | Problem                               | Hint / JS Tip                     |
// | -- | ------------------------------------- | --------------------------------- |
// | 31 | Kadane’s algorithm (max subarray sum) | Loop + maintain current sum & max |
// | 32 | Subarray sum equals k                 | Prefix sum + `Map`                |
// | 33 | Find duplicates in array              | Use `Set` or object frequency     |
// | 34 | Find first missing positive           | Use index mapping / array as hash |
// | 35 | Merge intervals                       | Sort by start + loop to merge     |
// | 36 | Insert interval                       | Similar to merge intervals        |
// | 37 | Spiral order of 2D array              | Loop through matrix layers        |
// | 38 | Rotate matrix 90°                     | Transpose + reverse rows          |
// | 39 | Flatten 2D array                      | `arr.flat()` or nested loops      |
// | 40 | Next greater element                  | Use monotonic stack               |
// | 41 | Stock buy & sell for max profit       | Track min price + max profit      |
// | 42 | Maximum product subarray              | Track max & min product           |
// | 43 | Trapping rain water                   | Precompute left & right max       |
// | 44 | Count pairs with given difference     | Use `Set` lookup                  |
// | 45 | Rearrange array alternately           | Positive & negative numbers       |
// | 46 | Dutch national flag problem           | Three pointers                    |
// | 47 | Longest increasing subsequence        | DP array or binary search         |
// | 48 | Subarray with equal 0s and 1s         | Convert 0→-1 + prefix sum         |
// | 49 | Find duplicates in O(n) time          | Hash map or modify array in-place |
// | 50 | Sliding window max                    | Deque or monotonic queue          |



// function findsumofdata(arr) {
    
// }
// console.log(findsumofdata([1,2,3,4,5,6,7,8]));

function duplicate(arr) {
    let result =[]
    let seen = new Map()
    for (let i = 0; i < arr.length; i++) {
        
        if (!seen.has(arr[i])) {
            result.push(arr[i])
            seen.set(arr[i],true)
        }
    }
    return result
}
console.log(duplicate([2,1,2,3,4,5,1,4]));



function foreachdata(params) {
    
}
console.log();
