//my implemantion
let numsArr = [4, 7, 4, 7, 0, 4, 0, 3];
function removeZeroes(arr) {
  let cleaned = arr.filter(value => value !== 0);
  console.log(cleaned, "tttteeest");
  return cleaned;
}

module.exports = removeZeroes;
