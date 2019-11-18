console.log("Aplanando Arrays");

const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

interface NestedArray<T> extends Array<T | NestedArray<T>> {
}

const flattenDeep = (array: NestedArray<number>) => array.reduce((acc : NestedArray<number>, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);

console.log(flattenDeep(sample));

console.log("***********************************************************");


