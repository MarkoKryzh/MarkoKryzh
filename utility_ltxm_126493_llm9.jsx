true * 28
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));

54,93,64,84,80,42,52,41,85,77,97,69,82,85,66,70,93,23,32,36,4,62,77,30,70,32,33 * 43,49,56,61,92,91,87,58,16,91
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
grape

const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
let array = getRandomArray(); array.forEach(item => console.log(item));
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

const findLargestNumber = numbers => Math.max(...numbers);
const isEven = num => num % 2 === 0;
const getRandomSubset = (array, size) => array.slice(0, size);

