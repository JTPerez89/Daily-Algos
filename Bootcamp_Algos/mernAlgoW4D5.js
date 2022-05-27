// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/* 
  Given a string, find the length of the longest substring without repeating characters.
*/
//                👇
const str1 = "abcabcbb";
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.
//              v
const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = "pwwkew";
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */
//              v
const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"


function lengthOfLongestSubString(str) { 
    let map = {};
    let holder = 0;
    let largest = 0;
    for(let i=0; i<str.length; i++) {
        if(str.length - i < largest){
            break;
        }
        for(let f=i; f<str.length; f++){
            if(map.hasOwnProperty(str[f])){
                if(holder > largest) {
                    largest = holder;
                }
                map = {};
                holder = 0;
                continue;
            } else {
                map[str[f]] = 1;
                holder += 1;
            }
        }
    }
    return largest;
}

console.log(lengthOfLongestSubString(str1));
console.log(lengthOfLongestSubString(str2));
console.log(lengthOfLongestSubString(str3));
console.log(lengthOfLongestSubString(str4));