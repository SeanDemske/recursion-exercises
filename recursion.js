/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, longestWord = words[0]) {
  if (words.length === 0) return longestWord.length;
  if (words[0].length > longestWord.length) longestWord = words[0];
  return longest(words.slice(1), longestWord);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, newStr = "", idx = 0) {
  if (idx > str.length) return newStr;
  newStr += str.slice(idx, idx + 1);
  return everyOther(str, newStr, idx + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  let leftIdx = idx;
  let rightIdx = str.length - idx - 1;
  if (leftIdx >= rightIdx) return true;
  if (str[leftIdx] !== str[rightIdx]) return false;
  return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (arr.length === 0) return -1;
  return arr[0] === val ? idx : findIndex(arr.slice(1), val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, revStr = "") {
  if (str.length === 0) return revStr;
  revStr += str[str.length - 1];
  return revString(str = str.substring(0, str.length - 1), revStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  const strArray = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") strArray.push(obj[key]);
    if (typeof obj[key] === "object") strArray.push(...gatherStrings(obj[key]));
  }
  return strArray;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, leftIdx = 0, rightIdx = arr.length - 1) {
  if (leftIdx > rightIdx) return -1;
  let midIdx = Math.floor((leftIdx + rightIdx) / 2);
  if (val > arr[midIdx]) {
    return binarySearch(arr, val, midIdx + 1, rightIdx);
  }
  if (val < arr[midIdx]) {
    return binarySearch(arr, val, leftIdx, midIdx - 1);
  }
  if (val === arr[midIdx]) {
    return midIdx;
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
