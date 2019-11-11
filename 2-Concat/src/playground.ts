console.log("Exercise 2: Concat");

const deportesEquipo = ["Baloncesto", "Fútbol", "Padel"];

const deportesIndividuales = ["Golf", "Tenis", "Badminton"];

const deportesMentales = ["Ajedrez"]

const concat = (a, b) => [...a, ...b];

const multipleConcat = (a, ...b) => [...a, ...b];

console.log(`Los deportes individuales y de equipo son:
    ${concat(deportesEquipo, deportesIndividuales)}`);

console.log(`Los deportes individuales y de equipo con concatenación de arrays múltiples son:
    ${multipleConcat(deportesEquipo, deportesIndividuales, deportesMentales)}`);
