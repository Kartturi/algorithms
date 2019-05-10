// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


//method 1 array methods time O(n) space O(1)
/* function reverse(str) {
     
    return str.split("").reverse().join("");
} */


//method 2 es6 for of loop
/* function reverse(str) {
    let reversed = "";
    let wordLength = str.length

    for(let char of str) {
        reversed += reversed;
    }

    return reversed;
} */

//method 3 reduce method
/* function reverse(str) {
    return str.split("").reduce((acc,curr) => {
        return curr + acc
    }, "")

} */
//method 4 spread operator
/* function reverse(str) {
    return [...str].reverse().join("");
} */

//method 5 recursion

function reverse(str) {
    if (str === "") {
        return str
    } else {
        return reverse(str.substr(1)) + str[0];
    }
}


module.exports = reverse;
