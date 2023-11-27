/* nested Array" */
const nestedArray = [["maggi"], ["pasta"], [["noodles"], ["veg noodles"]]];

console.log(nestedArray[2][0][0]);

/* Random Numbers 1 to 50  by function deacleration */
function oneto50() {
  const randomNumber = Math.floor(Math.random() * 51);
  return randomNumber;
}
console.log(oneto50());
console.log(oneto50());
console.log(oneto50());
console.log(oneto50());
console.log(oneto50());
console.log(oneto50());

/* Random numbers 1 to 100 by Function expression */
const oneto100 = function () {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  return randomNumber;
};
console.log(oneto100());
console.log(oneto100());
console.log(oneto100());
console.log(oneto100());
console.log(oneto100());
console.log(oneto100()); 

/* Reverse an Array */

const fruits = ["apple", "banana", "mango"];
fruits.reverse();
console.log(fruits);

const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); 

/* while loop  */

let sum = 0;
let num = 1;
while (num <= 10) {
  sum += num;
  num++;
}
console.log("Sum of numbers from 1 to 10:", sum); 

/* back counting 5 to 1 */

let x = 5;
while (x > 0) {
  console.log(x);
  x--;
}
