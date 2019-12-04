console.log("Challengue 5: Memoization");

const expensiveFunction = () => {
  console.log("Una única llamada");
  return 3.1415;
};

const memoize = fn => {
  let cache = {};
  return () =>
    (cache[JSON.stringify("")] = cache[JSON.stringify("")] || fn());
};

const memoized = memoize(expensiveFunction);
console.log(memoized()); // Una única llamada // 3.1415
console.log(memoized()); // 3.1415
console.log(memoized()); // 3.1415

console.log("***********************************************************");

let count = 0; // Comprobacion de nº de ejecuciones
const repeatText = (repetitions: number, text: string): string => (
  count++, `${text} `.repeat(repetitions).trim()
);
const memoizeWithArgs = fn => {
  let cache = {};
  return (...args) =>
    (cache[JSON.stringify(args)] = cache[JSON.stringify(args)] || fn(...args));
};
const memoizedGreet = memoizeWithArgs(repeatText);
console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(count); // 2
