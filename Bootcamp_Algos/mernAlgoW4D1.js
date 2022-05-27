/* 
  Given to me (Neil) in an interview
  Given a string
  return whether or not it's possible to make a palindrome out of the string's
  characters.
  What is it about a string that makes it possible for it to become a
  palindrome?
*/
// a
const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa"; // adda , daad
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;
// all characters should be repeated in even number
// no more than one character is repeated in odd number
/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * - Space: O(?).
 * - Time: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str can be rearranged into a palindrome.
 */
function canStringBecomePalindrome(str) {
    let map = {};
    let holder = false;
    let canBePalindrome = true;
    if (str.length < 1) {
        return false
    }
    for (let i = 0; i < str.length; i++) {
        if (map.hasOwnProperty(str[i])) {
            map[str[i]] = map[str[i]] + 1;
        }
        else {
            map[str[i]] = 1;
        }
    }
    for (let key in map) {
        if (map[key] % 2 !== 0) {
            if (holder == false) {
                holder = true;
            } else {
                canBePalindrome = false;
            }
        }
    }
    return canBePalindrome;
}

// console.log(canStringBecomePalindrome(str1))
// console.log(canStringBecomePalindrome(str2))
// console.log(canStringBecomePalindrome(str3))
// console.log(canStringBecomePalindrome(str4))
// console.log(canStringBecomePalindrome(str5))
// console.log(canStringBecomePalindrome(str6))

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

/*
  Input: arr, callback
  Output: arr (with elements removed)
  Remove every element in the array, starting from idx 0,
  until the callback function returns true when passed the
  iterated element.
  Return an empty array if the callback never returns true
*/

const nums1 = [1, 4, 3, 6, 9, 15];
const callback1 = (elem) => {
    return elem > 5;
};
//const expected1 = [6, 9, 15];

const nums2 = [...nums1];
const callback2 = (elem) => {
    return elem > 2;
};
//const expected2 = [4, 3, 6, 9, 15];

const nums3 = [...nums1];
const callback3 = (elem) => false;
//const expected3 = [];

/**
 * Removes every element in the array, starting from idx 0 until the callback
 * function returns true when passed the iterated element.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr
 * @callback cb A callback function that expects to receive an array element.
 * @returns {Array<any>} The given array with only the remaining items.
 */
function dropIt(arr, cb) {
    let newArr = [];
    let holder = false;
    for (let i = 0; i < arr.length; i++) {
        if (holder == false) {
            holder = cb(arr[i]);
        }
        if (holder == true) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(dropIt(nums1, callback1))
console.log(dropIt(nums1, callback2))
console.log(dropIt(nums1, callback3))