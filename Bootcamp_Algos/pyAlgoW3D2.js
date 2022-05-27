/* 
    Given two arrays, interleave them into one new array.
    The arrays may be different lengths. The extra items should be added to the
    back of the new array.
*/

const two_arrA1 = [1, 2, 3];
const two_arrB1 = ["a", "b", "c"];
const two_expected1 = [1, "a", 2, "b", 3, "c"];

const two_arrA2 = [1, 3];
const two_arrB2 = [2, 4, 6, 8];
const two_expected2 = [1, 2, 3, 4, 6, 8];

const two_arrA3 = [1, 3, 5, 7];
const two_arrB3 = [2, 4];
const two_expected3 = [1, 2, 3, 4, 5, 7];

const two_arrA4 = [];
const two_arrB4 = [42, 0, 6];
const two_expected4 = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */
function interleaveArrays(arr1, arr2) {
    let newArr = [];
    let arr = [];
    if (arr1.length > arr2.length) {
        arr = arr1;
    } else {
        arr = arr2;
    }
    for(let i=0; i<arr.length; i++) {
        if(i<arr1.length) {
            newArr.push(arr1[i]);
        }
        if(i<arr2.length) {
            newArr.push(arr2[i]);
        }
    }
    return newArr;
}

console.log(interleaveArrays(two_arrA1, two_arrB1));
console.log(interleaveArrays(two_arrA2, two_arrB2));
console.log(interleaveArrays(two_arrA3, two_arrB3));
console.log(interleaveArrays(two_arrA4, two_arrB4));
/* 
    Array: Binary Search (non recursive)
    Given a sorted array and a value, return whether the array contains that value.
    Do not sequentially iterate the array. Instead, ‘divide and conquer’,
    taking advantage of the fact that the array is sorted .
    Bonus (alumni interview): 
        first complete it without the bonus, because they ask for additions
        after the initial algo is complete
        return how many times the given number occurs
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
const expected4 = 4;

/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the given num exists in the given array.
 */
function binarySearch(sortedNums, searchNum) {
    let holder = Math.floor(sortedNums.length/2);
    let start = 0;
    let end = sortedNums.length - 1;
    while (sortedNums[holder] !== searchNum) {
        if(searchNum < sortedNums[holder]) {
            end = holder - 1;
        } else if ( searchNum > sortedNums[holder]) {
            start = holder + 1;
        }
        if(start > end) {
            return false;
        }
        holder = Math.floor((start + end)/2);
    }
    return true
}

console.log(binarySearch(nums1, searchNum1));
console.log(binarySearch(nums2, searchNum2));
console.log(binarySearch(nums3, searchNum3));