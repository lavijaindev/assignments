/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function removeWhiteSpaceFromString(str) {
  return str.replace(/[^a-zA-Z]/g, '');
}

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  cleanStr1 = removeWhiteSpaceFromString(str1.toLowerCase());
  cleanStr2 = removeWhiteSpaceFromString(str2.toLowerCase());
  str1 = cleanStr1.split("").sort();
  str2 = cleanStr2.split("").sort();

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
