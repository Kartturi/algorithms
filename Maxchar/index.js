// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


//method 1, my one solution
/* function maxChar(str) {
    let countMap = new Map();
    str.split("").map(char => {
        if (!countMap.get(char)) {
            countMap.set(char, 1);
        } else {
            countMap.set(char, countMap.get(char) + 1)
        }
    });
    countMap.forEach((value, key, map) => {
        if (!map.has("highest")) {
            map.set("highest", value)
            map.set("most", key);
        } else if (value > map.get("highest")) {
            map.set("highest", value);
            map.set("most", key);
        }
    })

    return countMap.get("most");
} */

//method 2
function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = maxChar;
