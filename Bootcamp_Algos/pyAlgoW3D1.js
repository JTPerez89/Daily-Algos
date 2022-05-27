/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
*/

const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 * for loop to get through array
 *  if statement to check if value is > 0
 *      log i for position greater than 0
 *      check positions against eachother
 * 
 */
function socialDistancingEnforcer(queue) {
    let posArr= [];
    for(let i=0; i<queue.length; i++) {
        if(queue[i]>0) {
            posArr.push(i);
        }
    }
    console.log(posArr)
    for(let g=0;g<posArr.length; g++) {
        if((posArr[g+1]-posArr[g]) < 6) {
            return false;
        }
    }
    return true;
}

console.log(socialDistancingEnforcer(queue1));
console.log(socialDistancingEnforcer(queue2));
console.log(socialDistancingEnforcer(queue3));
console.log(socialDistancingEnforcer(queue4));

// *******************************************************************

/* 
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
  
*/

const two_nums1 = [-2, 5, 7, 0, 3];
const two_expected1 = 2;

const two_nums2 = [9, 9];
const two_expected2 = -1;

const two_nums3 = [9, 9, 0, 1];
const two_expected3 = -1;

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 *      
 */
function balanceIndex(nums) {
    let leftArr = [];
    let rightArr = [];
    let balancer = [];

    leftArr.push(nums[0])
    balancer.push(nums[1])

    if(nums.length<3) {
        return -1;
    }
    for(let i=2; i<nums.length; i++) {
        rightArr.push(nums[i]);
    }
    let leftSum = addArr(leftArr)
    let rightSum = addArr(rightArr)
    if(leftSum < rightSum) {
        leftSum.push(balancer[0])
        balancer.pop()
        balancer.push(rightArr[0])
        rightArr.shift()
    } else if(leftSum == rightSum) {
        return
    }
    console.log(leftSum);
    console.log(rightSum);
}

balanceIndex(two_nums1)

function addArr(arr) {
    let sum = 0;
    for(let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}