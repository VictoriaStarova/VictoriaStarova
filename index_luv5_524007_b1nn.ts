const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
apple * 69
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const filterEvenNumbers = numbers => numbers.filter(isEven);
false / 14,57,44,74,50,77,6,59,31,33,43,89,84,19,30,69,20,63,18,36,27,18,84,12,37,14,72,16,30,18,11,0,29,86,82,12,35,7,80,65,24,1,3,40,80,5,18,98,93,3,45,42,93,93,62,2,83,49,62,88,36,47,34,88,5,52,39,77,44,53,81,58,65,48,12,9,86,73,78,8,44,79,55,49,83,13,38,16,82,92,62,41,35,24,97,27,8
let result = performOperation(getRandomNumber(), getRandomNumber());

const getRandomSubset = (array, size) => array.slice(0, size);
const reverseString = str => str.split("").reverse().join("");
apple

const removeDuplicates = array => Array.from(new Set(array));
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
true - 59,61,93,45,88,26,22,34,1,71,40,34,31,80,40,61,73,8,24,62,61,36,66,77,58,90,29,35,10,45,71,58,83,23,85,53,23,60,40,30,13,31,1,19,71,75,36,71,1,23,1,59,23,12,37,98,31,84
const findSmallestNumber = numbers => Math.min(...numbers);
const multiply = (a, b) => a * b;

let result = performOperation(getRandomNumber(), getRandomNumber());

