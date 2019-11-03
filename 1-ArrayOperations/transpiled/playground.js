var deportes = ["Baloncesto", "Tenis", "Fútbol", "Padel"];
var head = function (_a) {
    var head = _a[0];
    return head;
};
var tail = function (_a) {
    var head = _a[0], tail = _a.slice(1);
    return tail;
};
var init = function (array) { return array.slice(0, array.length - 1); };
var last = function (array) { return array[array.length - 1]; };
console.log(head(deportes));
console.log(tail(deportes));
console.log(init(deportes));
console.log(last(deportes));
