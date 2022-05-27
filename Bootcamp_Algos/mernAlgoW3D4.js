/* 
  Given an array of objects representing people, and a string representing a bad habit
  return a "santasNaughtyList" containing the first and last names of all the people who
  have the matching bad habit so that santa knows how much coal he needs.
  Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
*/
const students = [
    {
        firstName: "Jane",
        lastName: "Doe",
        habits: [
            "doesn't wash dishes",
            "falls asleep in lecture",
            "shows up early",
        ],
    },
    {
        firstName: "John",
        lastName: "Smith",
        habits: ["shows up late", "washes dishes", "helps peers"],
    },
    {
        firstName: "Arya",
        lastName: "Stark",
        habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
    },
    {
        firstName: "Jon",
        lastName: "Snow",
        habits: ["shows up early", "helps peers", "washes dishes"],
    },
];

const badHabit1 = "doesn't wash dishes";
const expected1 = ["Jane Doe", "Arya Stark"];

const badHabit2 = "shows up late";
const expected2 = ["John Smith", "Arya Stark"];

const badHabit3 = "typo";
const expected3 = [];
/**
 * Finds a list of people whose habits contain the given bad habit.
 * - Time O(?).
 * - Space O(?).
 * @typedef {Object} Person
 * @property {string} firstName
 * @property {string} lastName
 * @property {Array<string>} habits
 * @param {Array<Person>} persons
 * @param {string} badHabit
 * @returns {Array<Person>} The people that have the given bad habit.
 */
function santasNaughtyList(persons, badHabit) {
    const returnedStudents = [];
    for (let i = 0; i < persons.length; i++) {
        if (persons[i].habits.includes(badHabit)) {
            returnedStudents.push(`${persons[i].firstName} ${persons[i].lastName}`)
        }
    }
    return returnedStudents;
}

/**
 * Finds a list of people whose habits contain the given bad habit.
 * - Time O(?).
 * - Space O(?).
 * @typedef {Object} Person
 * @property {string} firstName
 * @property {string} lastName
 * @property {Array<string>} habits
 * @param {Array<Person>} persons
 * @param {string} badHabit
 * @returns {Array<Person>} The people that have the given bad habit.
 */
function santasNaughtyListFunctional(persons, badHabit) {
    const arr = [];
    persons.forEach(item => {
        if (item.habits.includes(badHabit)) {
            arr.push(`${item.firstName} ${item.lastName}`)
        }
    })
    return arr;
}