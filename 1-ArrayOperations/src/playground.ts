const deportes = ["Baloncesto", "Tenis", "Fútbol", "Padel"];

const head = ([head] : Array<string>) => head;

const tail = ([head, ...tail] : Array<string>) => tail;

const init = (array : Array<string>) => array.slice(0, array.length-1);

const last = (array : Array<string>) => array[array.length-1]; 

console.log(head(deportes));

console.log(tail(deportes));
 
console.log(init(deportes));

console.log(last(deportes));