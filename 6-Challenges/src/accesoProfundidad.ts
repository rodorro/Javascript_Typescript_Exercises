console.log("Acceso en profundidad");

interface IObject extends Object {
    a: number,
    b: {
        c: number,
        d: {
            e: number,
            f: {
                g: string
            }
        }
    }
}

const deepGet = (obj: IObject, ...prop: string[]) => 
    prop.reduce((obj, key) =>(obj && obj[key] !== 'undefined') ? obj[key] : undefined, obj);

const myObject = {
    a: 1,
    b: {
        c: null,
        d: {
            e: 3,
            f: {
                g: "bingo",
            }
        }
    }
};    

console.log(deepGet(myObject, "x")); // undefined
console.log(deepGet(myObject, "a")); // 1
console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
console.log(deepGet(myObject, "b", "c")); // null
console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
console.log(deepGet(myObject)); // {a: 1, b: {...}}

console.log("***********************************************************");