/* 
Array: Mode

Create a function that, given an array of ints,
returns the int that occurs most frequently in the array.
What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
    - return empty array
*/

const nums1 = [];
const expected1 = [];

const nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];

const nums4 = [5, 1, 4, 1];
const expected4 = [1];

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];
//  - order doesn't matter

/**
 * Finds the mode or all modes if there are more than one. The mode is the
 *    value which occurs the most times in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Test
 * @returns {Array<number>} Mode or modes in any order.
 */
function mode(nums) {
    let dict = {}
    let arr = [];
    for(i=0; i<nums.length; i++) {
        let holder = nums[i]
        if (dict.hasOwnProperty(nums[i])){
            dict[`${holder}`] += 1;
        }
        else if (!dict.hasOwnProperty(nums[i])) {
            dict[`${holder}`] = 1;
        }
    }
    let highValue;
    let highKey;
    let secondHigh;
    let secondKey;
    for( key in dict) {
        if(highValue < dict[`${key}`]) {
            highKey = key;
            highValue = dict[`${key}`];
        }
        else if (highValue == dict[`${key}`]) {
            secondKey = key;
            secondHigh = dict[`${key}`];
        }
        else if(dict[`${key}`]) {
            highKey = key;
            highValue = dict[`${key}`];
        }
    }
    if(secondKey) {
        arr.push(highKey);
        arr.push(secondKey);
    }else {
        arr.push(highKey);
    }
    return arr
}

console.log(mode(nums1))
console.log(mode(nums2))
console.log(mode(nums3))
console.log(mode(nums4))
console.log(mode(nums5))

/* 
Given an array of objects / dictionaries to represent new inventory,
and an array of objects / dictionaries to represent current inventory,
update the quantities of the current inventory

if the item doesn't exist in current inventory, add it to the inventory
return the current inventory after updating it.
*/

const newInv1 = [
    { name: "Grain of Rice", quantity: 9000 },
    { name: "Peanut Butter", quantity: 50 },
    { name: "Royal Jelly", quantity: 20 },
];
const currInv1 = [
    { name: "Peanut Butter", quantity: 20 },
    { name: "Grain of Rice", quantity: 1 },
];
const two_expected1 = [
    { name: "Peanut Butter", quantity: 70 },
    { name: "Grain of Rice", quantity: 9001 },
    { name: "Royal Jelly", quantity: 20 },
];

const newInv2 = [];
const currInv2 = [{ name: "Peanut Butter", quantity: 20 }];
const two_expected2 = [{ name: "Peanut Butter", quantity: 20 }];

const newInv3 = [{ name: "Peanut Butter", quantity: 20 }];
const currInv3 = [];
const two_expected3 = [{ name: "Peanut Butter", quantity: 20 }];

/**
   * @typedef {Object} Inventory
   * @property {string} Inventory.name The name of the item.
   * @property {number} Inventory.quantity The quantity of the item.
   */

/**
   * Updates the current inventory based on the new inventory.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Array<Inventory>} newInv A shipment of new inventory.
   *    An array of inventory objects.
   * @param {Array<Inventory>} currInv
   * @return The currInv after being updated.
   */
function updateInventory(newInv, currInv) {}