console.log("Challengue 3: Estructura de árbol tipada");

interface TreeNode2<T> {
  value: T;
  children?: Array<TreeNode2<T>>;
}

console.log(`interface TreeNode < T > {
        value: T;
        children?: Array<TreeNode<T>>;
    }`);

console.log("***********************************************************");
