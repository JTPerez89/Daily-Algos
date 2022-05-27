/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/
// set

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7]; // [2, 2, 7]
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

/**
 * Efficiently combine the two sorted arrays into a new array that is the a
 * sorted set intersection.
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) { 
    let arr = [];
    let i = 0;
    let j = 0;
    while(i<sortedA.length && j<sortedB.length) {
        if(sortedA[i] === sortedB[j]) {
            if(arr[arr.length-1] !== sortedA[i]){
                arr.push(sortedA[i]);
            }
            i++;
            j++;
        } else if(sortedA[i] < sortedB[j]) {
            i++;
        } else if (sortedB[j] < sortedA[i]) {
            j++;
        }
    }
    return arr;
}

console.log(orderedIntersection(numsA1, numsB1));
console.log(orderedIntersection(numsA2, numsB2));
console.log(orderedIntersection(numsA3, numsB3));

user1 = {
    username: "user1", // at least 2 characters
    age: 30,// must be positive
    password: "password",  // at least 8 characters
    confirm: "password" // confirm must match password
}

user2 = {
    username: "u", // at least 2 characters
    age: 30,// must be positive
    password: "password",  // at least 8 characters
    confirm: "pass" // confirm must match password
}

function errorCheck(user) {
    // given an object, if any of the fields fails the validation, return true
return ( user['username'].length <= 2 ||
        user['age'] < 0 ||
        user['password'].length < 8 ||
        user['password'] !== user['confirm']
    )? true: false;
}

function goodUser(user) {
    // given an object, if all fields pass the validation, return true
    return (
        user['username'].length >= 2 &&
        user['age'] > 0 &&
        user['password'].length >= 8 &&
        user['password'] === user['confirm']
    )? true: false;
}

console.log(errorCheck(user1))
console.log(errorCheck(user2))

console.log(goodUser(user1))
console.log(goodUser(user2))