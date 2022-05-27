/* 
Recursive Factorial
Input: integer
Output: integer, product of ints from 1 up to given integer

If less than zero, treat as zero.
Bonus: If not integer, truncate (remove decimals).

Experts tell us 0! is 1.

rFact(3) = 6 (1*2*3)
rFact(6.8) = 720 (1*2*3*4*5*6)

    1. Edge Case
    2. Base Case
    3. Recursive Call

*/

const num1 = 3;
const expected1 = 6;
// Explanation: 1*2*3 = 6

const num2 = 6.8;
const expected2 = 720;
// Explanation: 1*2*3*4*5*6 = 720

const num3 = 0;
const expected3 = 1;

/**
 * Recursively multiples 1 to the given int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} n The int to factorial. Treat negatives as zero and
 *    floor decimals.
 * @returns {number} The result of !n.
 */
function factorial(n, i=1) {
    n = Math.floor(n)
    if (n < 1) {
        return 1;
    }
    if(i == n) {
        return i;
    }
    return i * factorial(n, ++i);
}

// console.log(factorial(num1))
// console.log(factorial(num2))
// console.log(factorial(num3))

// *****************************************************************

/* 
Return the fibonacci number at the nth position, recursively.

Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
The next number is found by adding up the two numbers before it,
starting with 0 and 1 as the first two numbers of the sequence.
*/

const two_num1 = 0;
const two_expected1 = 0;

const two_num2 = 1;
const two_expected2 = 1;

const two_num3 = 2;
const two_expected3 = 1;

const two_num4 = 3;
const two_expected4 = 2;

const two_num5 = 4;
const two_expected5 = 3;

const two_num6 = 8;
const two_expected6 = 21;

/**
 * Recursively finds the nth number in the fibonacci sequence.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num The position of the desired number in the fibonacci sequence.
 * @returns {number} The fibonacci number at the given position.
 */
let fib1 = 0;
let fib2 = 1;
let sum = 0;

function fibonacci(num, i=2) {
    if(num < 1) {
        return 0;
    } else if (num == 1) {
        return 1;
    }

    if(i == 2) {
        fib1 = 0;
        fib2 = 1;
        sum = 0;
    }

    if(i == num) {
        sum = fib1 +fib2;
        return sum
    }

    sum = fib1 + fib2
    fib1 = fib2
    fib2 = sum

    return fibonacci(num, ++i)
}

console.log(fibonacci(two_num1))
console.log(fibonacci(two_num2))
console.log(fibonacci(two_num3))
console.log(fibonacci(two_num4))
console.log(fibonacci(two_num5))
console.log(fibonacci(two_num6))

function efficient(num) {
    
}