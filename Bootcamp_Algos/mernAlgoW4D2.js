/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/

    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

function rehash(str) { 
    let map = {};
    let output = '';
    let tempLetter = '';
    let tempNumber = '';
    for(let i=0; i<=str.length; i++) {
        if(isNaN(str[i]) && tempLetter.length > 0 || tempLetter.length > 0 && i == str.length) {
            if(map.hasOwnProperty(tempLetter)) {
                map[tempLetter] += parseInt(tempNumber);
            } else {
                map[tempLetter] = parseInt(tempNumber);
            }
            tempLetter = '';
            tempNumber = '';
        }
        if(isNaN(str[i])) {
            tempLetter = str[i];
        } else {
            tempNumber += str[i];
        }
    }
    let tempArr = Object.keys(map).sort();
    for(key of tempArr) {
        output += key + map[key];
    }
    return output;
}

rehash(str1);
console.log(rehash(str1) === expected1, "<-- should be \"true\"");