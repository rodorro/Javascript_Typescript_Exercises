console.log("Acceso en profundidad, GET");

const deepGet = (obj: Object, ...prop: string[]) => 
    prop.reduce((obj, key) =>(obj && obj[key] !== 'undefined') ? obj[key] : undefined, obj);

const deepSet = (value: number | string, obj: Object, ...prop: string[]) => {
    prop.length===0
    ?
    obj
    :
    setValue(value, obj, ...prop);
}

const setValue = (value: number | string, obj: Object, ...prop: string[]) => {
    const [head, ...rest] = prop;
    if(!obj[head]){
        obj[head] = {};  
    }
    !rest.length
        ? obj[head] = value
        : deepSet(value, obj[head], ...rest);
}

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

console.log("Acceso en profundidad, SET");

const myObject2 = {};

deepSet(1, myObject2, "a", "b");
console.log(JSON.stringify(myObject2)); // {a: { b: 1}}
deepSet(2, myObject2, "a", "c");
console.log(JSON.stringify(myObject2)); // {a: { b: 1, c: 2}}
deepSet(3, myObject2, "a");
console.log(JSON.stringify(myObject2)); // {a: 3}
deepSet(4, myObject2);
console.log(JSON.stringify(myObject2)); // Do nothing // {a: 3}

console.log("***********************************************************");
