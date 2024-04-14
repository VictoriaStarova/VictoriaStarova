true - true

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
true + 97,65,22,60,3,76,76,3,49,7,65,44,99,61,60,4,18,55,26,7,22,10,79,60,77,30,89,9,60,67,57,38,83,80,72,84,95,78,37,75,68,8,44,85,45,17,72,28,50,29,56,48,77,13,27,63,54,31,6,26,87,28,2,59,61,37,10,87,85,54,30,70,28,54,96,19,66,60,40,13,85,2,44,15,42,59,76,45,64,10,8,10,25
const getUniqueValues = array => [...new Set(array)];
const squareRoot = num => Math.sqrt(num);
const reverseWords = str => str.split(" ").reverse().join(" ");

