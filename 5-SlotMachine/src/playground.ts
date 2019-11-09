console.log("Exercise 5: SlotMachine");

class SlotMachine {

    contMonedas = 0;

    play = () => {

        this.contMonedas++;

        let ruleta1 = Math.random() >= 0.5;
        let ruleta2 = Math.random() >= 0.5;
        let ruleta3 = Math.random() >= 0.5;

        let message = "";
        if(ruleta1 === ruleta2 === ruleta3 === true) {
            message = `Congratulations!!!. You won ${this.contMonedas} ${this.contMonedas>1?"coins":"coin"}`;
            this.contMonedas = 0;
        } else {
            message = "Goog luck next time!!";
        }

        return message;
    }
}

const machine1 = new SlotMachine();

console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
