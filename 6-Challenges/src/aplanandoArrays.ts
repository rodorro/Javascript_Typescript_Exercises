console.log("Challengue 1: Aplanando Arrays");

const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

interface TreeChildren<T> extends Array<T | TreeNode<T>> {
}
type TreeNode<T> = T | TreeChildren<T>;

const flattenDeep = (input: Array<TreeNode<Number>>) => {
  const resultado = [];
  const stack = [...input];
  while (stack.length) {
    // elimina ultimo valor del stack
    const next = stack.pop();
    if (Array.isArray(next)) {
      // agrega de nuevo los items al array, sin modificar la entrada original
      stack.push(...next);
    } else {
      resultado.push(next);
    }
  }
  //invierte para restaurar el orden de entrada
  return resultado.reverse();
};

console.log(flattenDeep(sample));

console.log("***********************************************************");