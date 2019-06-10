// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//method 1 own figuration
/* function fib(n) {

    let base = 1;
    let newNum = 0;


    for (let i = 0; i < n; i++) {
        let holder = newNum;

        newNum = base + newNum;
        base = holder;


    }

    return newNum;
} */

//method 2 
// function fib(n) {
//   const result = [0, 1];
//
//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];
//
//     result.push(a + b);
//   }
//
//   return result[n];
// }

//method 3 recursive

/* function fib(n) {
    if (n <= 0) {
        n = 1
    }
    return fib(n - 1) + fib(n - 2);
}; */

//method 4 with memo
/* function fib(num, memo) {
    memo = memo || {};

    if (memo[num]) return memo[num];
    if (num <= 1) return 1;

    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
} */


//method 5
function memoize(fn) {
    const cache = {};
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    };
}

function slowFib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);


module.exports = fib;
