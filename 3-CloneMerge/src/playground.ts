console.log("Exercise 3: CloneMerge");

const deportista = {
    nombre: "Fernando",
    apellido: "Belastegin",
    edad: "40",
    deporte: "Padel"
}

const persona = {
    nombre: "Martina",
    apellido: "Martin",
    pais: "Argentina",
}

const clone = (source) => {

    let cloned = {};

    for(let prop in source) {
        cloned[prop] = source[prop];
    }

    return cloned;
}

console.log("El deportista clonado es: ");
console.log(clone(deportista));
console.log("El deportista original es: ");
console.log(deportista);

const merge = (source, target) => {

    let merged = {...target, ...source};

    return merged;
}

console.log("El primer objeto es: ");
console.log(deportista);
console.log("El segundo objeto es: ");
console.log(persona);
console.log("El objeto mergeado es: ");
console.log(merge(deportista, persona));