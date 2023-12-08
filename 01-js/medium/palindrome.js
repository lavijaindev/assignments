/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function removeNonAlphanumericChars(str) {
  return str.replace(/[^a-zA-Z]/g, '');
}

function isPalindrome(str) {
  // Remove non-alphabetic characters and convert to lowercase
  let cleanedStr = removeNonAlphanumericChars(str.toLowerCase());

  let strArr = cleanedStr.split("");
  let newStrArr = strArr.slice().reverse();

  let palindromeStr1 = strArr.join("");
  let palindromeStr2 = newStrArr.join("");

  // Check if the strings are equal (palindromes)
  return palindromeStr1 === palindromeStr2;
}

module.exports = isPalindrome;
