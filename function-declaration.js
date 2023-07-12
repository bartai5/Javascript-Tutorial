function sayHello (name){
    console.log("-------------------------------");
    console.log("Hello " + name + "!");
    console.log("-------------------------------");
}
sayHello('japheth');

function calculateRes (ammount){
    let results = ammount * 0.125;
    return results;
}
let tax = calculateRes(100);
console.log("Total Tax = " + tax);

