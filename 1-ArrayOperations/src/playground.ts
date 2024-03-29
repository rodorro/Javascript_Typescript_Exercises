console.log("Exercise 1: Array operations sobre");

const deportes = ["Baloncesto", "Tenis", "Fútbol", "Padel"];

console.log("EL array contiene los siguientes deportes: " + deportes);

const head = ([head] : Array<string>) => head;

const tail = ([, ...tail] : Array<string>) => tail;

const init = (array : Array<string>) => array.slice(0, array.length-1);

const last = (array : Array<string>) => array[array.length-1]; 

console.log(`El primer deporte de la lista es ${head(deportes)}`);

console.log(`Todos los deportes menos el primero son ${tail(deportes)}`);

console.log(`Todos los deportes menos el último son ${init(deportes)}`);

console.log(`El último deporte de la lista es ${last(deportes)}`);