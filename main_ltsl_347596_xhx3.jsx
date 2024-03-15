const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
29,59,97,80,82,98,20,5,65,60,33,23,33,30,91,84,14,72,37,94,19,53,92,71,13,12,60,67,79,18,68,31,39,50,20,65,46 / 66
const squareRoot = num => Math.sqrt(num);
const capitalizeString = str => str.toUpperCase();

const isEven = num => num % 2 === 0;
true * apple
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
false * 76,37,14,11,67,19,84,32,74,82,70,64,25,51,8,92,32,21,25,6,26,61,92,47,66,9,24,87,43,53,71,93,5,76,82,17,14,12,51,45,62,26,77,7,20,3,72,3,80,62,82,76,40,35,9,95,97,93,55,5,70,90,31,65,20,28,9,21,95,24,8,34,4,8,37,15,32,51,13,10

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const getRandomElement = array => array[getRandomIndex(array)];
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }

const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
false + 38,93,49,2,66,70,30,92,19,94,53,34,21,62,75,11,68,66,62,36,82,7,35,32,62,96,55,60,12,67,19,72,74,86,86,70,28,61,1,11,33,15,62,70,21,62,96,67,9,51,9,71,98,46,14,61,98,45,2,75,10,39,41,86,30,27,2,86,38,76,4,27,27,17,3,42,39,7,95,71,67,77,17,29,4,88,7,18,89,46,81,79,47,87,22
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
