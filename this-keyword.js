/* // The car in this situation is an object
let car = {
    make: "bmw",
    model: '745li',
    year: 2010,
    // The functions below are 'methods'
    getPrice: function(){
        return 5000;
    },
    printDescription: function(){
        console.log(this.make + " " + this.model);
    }
}
car.printDescription(); */

/* function first(){
    return this;
}
console.log(first() === global); */

function second(){
    'use strict';
    return this;
}
console.log(second() === global);