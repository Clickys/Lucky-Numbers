//Create an object that will organize informations about the lucky numbers
let luckyNumbers = {
    numbers: [],

    randomNumbers: function () {
        for (let i = 0; i < 5; i++) {
            this.numbers.push(Math.floor((Math.random() * 100) + 1));
        }
    },

    showLuckyNumbers: function() {
        for (let i = 0; i < this.numbers.length; i++) {
            console.log(this.numbers[i]);
        }
    }


};


