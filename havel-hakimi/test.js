const removeZeroes = require("./index");

test("removeZeroes function exists", () => {
  expect(removeZeroes).toBeDefined();
});

test("check if array contains zeroes", () => {
  let numsArr = [4, 7, 4, 7, 0, 0, 4, 3];
  expect(removeZeroes(numsArr)).not.toContain(0);
});

test("removeZeroes([]) => []", () => {
  let numsArr = [];
  expect(removeZeroes(numsArr)).toEqual([]);
});

// test("ReverseInt handles 0 as an input", () => {
//   expect(reverseInt(0)).toEqual(0);
// });

// test("ReverseInt flips a positive number", () => {
//   expect(reverseInt(5)).toEqual(5);
//   expect(reverseInt(15)).toEqual(51);
//   expect(reverseInt(90)).toEqual(9);
//   expect(reverseInt(2359)).toEqual(9532);
// });

// test("ReverseInt flips a negative number", () => {
//   expect(reverseInt(-5)).toEqual(-5);
//   expect(reverseInt(-15)).toEqual(-51);
//   expect(reverseInt(-90)).toEqual(-9);
//   expect(reverseInt(-2359)).toEqual(-9532);
// });
