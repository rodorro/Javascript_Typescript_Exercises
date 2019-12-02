console.log("Challengue 5: Memoization");

const expensiveFunction = () => {
  console.log("Una única llamada");
  return 3.1415;
};

const memoize = fn => {
  let cache = {};
  return (...args) => {
    let stringifiedArgs = JSON.stringify(args);
    let result = cache[stringifiedArgs] = cache[stringifiedArgs] || fn(...args);
    return result;
  }
};

const memoized = memoize(expensiveFunction);
console.log(memoized()); // Una única llamada // 3.1415
console.log(memoized()); // 3.1415
console.log(memoized()); // 3.1415
