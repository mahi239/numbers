/* nested Array" */
const nestedArray = [["maggi"], ["pasta"], [["noodles"], ["veg noodles"]]];

console.log(nestedArray[2][1][0]);

/* Random Numbers 1 to 50  by function deacleration */
function oneto50() {
  const RandomNumber = Math.floor(Math.random() * 51);
  return RandomNumber;
}
console.log(oneto50());
console.log(oneto50());
console.log(oneto50());
console.log(oneto50());
console.log(oneto50());
console.log(oneto50());

/* Random numbers 1 to 100 by Function expression */
const oneto100 = function () {
  const RandomNumber = Math.floor(Math.random() * 100) + 1;
  return RandomNumber;
};
console.log(oneto100());
console.log(oneto100());
console.log(oneto100());
console.log(oneto100());
console.log(oneto100());
console.log(oneto100());
