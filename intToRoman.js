var intToRoman = function(num) {

  const romanSymbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
   const romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
 
   let result = "";
 
   for (let i = 0; i < romanValues.length; i++) {
   
     while (num >= romanValues[i]) {
       num -= romanValues[i];
       result += romanSymbols[i];
     }
   }
 
   return result;
 
     
 };

 function romanToInt(s) {
  const romanToValue = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
    "IV": 4,
    "IX": 9,
    "XL": 40,
    "XC": 90,
    "CD": 400,
    "CM": 900
  };

  let result = 0;
  let i = 0;

  while (i < s.length) {
    if (i + 1 < s.length && romanToValue[s.substring(i, i + 2)]) {
      result += romanToValue[s.substring(i, i + 2)];
      i += 2;
    } else {
      result += romanToValue[s.charAt(i)];
      i++;
    }
  }

  return result;
}

// Example usage:
const romanNumeral = "MMMDXLIX"; // "MMMDXLIX" represents 3549
const integer = romanToInt(romanNumeral);
console.log(integer); // Output: 3549
