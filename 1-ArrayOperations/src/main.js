const deportes = ["Baloncesto", "Tenis", "Fútbol", "Padel"];

const head = ([head] = Array) => head;

const tail = ([head, ...tail] = Array) => tail;

const init = (array = Array) => {
    Array.prototype.myUcase = function () {
        for (i = 0; i < this.length; i++) {
            this[i] = this[i].toUpperCase();
        }
    };
    console.log(array.myUcase());
}

const last = () => {

}

console.log(head(deportes));

console.log(tail(deportes));

console.log(init(deportes));