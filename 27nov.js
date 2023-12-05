/* create a function to check the minimum no  */
function minNumber(num) {
  let minNum = num[0];
  for (let i of num) {
    if (minNumber < num[i]) minNum = num[i];
  }
  return minNumber;
}
let x = [12, 34, 45, 3, 67];
console.log(minNumber(x));
