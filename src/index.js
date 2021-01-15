// Problem: 1
// Function to convert string to integer without using built-in functions
const stringToNum = (numStr) => {
  // Initialize all variables
  let ch = numStr.split("");
  let sum = 0;
  let isNegative = false;
  let zeroAscii = "0".charCodeAt(0); //i.e 48

  // Check if number is positive or negative
  if (ch[0] === "-") {
    isNegative = true;
    ch[0] = "0";
  }

  // Iterate till length of the string
  for (let index = 0; index < ch.length; index++) {
    let c = ch[index];

    let tmpAscii = c.charCodeAt(0);

    // compare with ASCII range of [0 - 9] & subtracting 48 from the current digit
    if (tmpAscii >= 48 && tmpAscii <= 57) {
      sum = sum * 10 + (tmpAscii - zeroAscii);
    } else {
      break;
    }
  }
  return isNegative ? sum * -1 : sum;
};
console.log(stringToNum("0"));
console.log(stringToNum("120"));
console.log(stringToNum("42a"));
console.log(stringToNum("43a35"));
console.log(stringToNum("-42"));

//Proble: 2
/**
 * The problem here was variable 'btnNum' was declared using var
 * which refers to window i.e global scope
 * Solution : Changing it to let fixed the problem
 * **/

const prizes = ["A Unicorn!", "A Hug!", "Fresh Laundry!"];
for (let btnNum = 0; btnNum < prizes.length; btnNum++) {
  // For each of our buttons, when the user clicks it...
  document.getElementById(`btn-${btnNum}`).onclick = () => {
    // Tell her what she's won!
    alert(prizes[btnNum]);
  };
}
