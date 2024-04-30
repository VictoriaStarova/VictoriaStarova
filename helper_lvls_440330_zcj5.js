const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
apple

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
