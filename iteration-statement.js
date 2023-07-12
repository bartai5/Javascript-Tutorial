for (let i= 0; i < 10; i++){
    console.log(i);
}

let names = ["Japheth", "Allan", "Ian", "James", "Lyne", "Shaw", "Jane", "Luke", "Maryann", "Ann"];

for (let i = 0; i < names.length; i++){
    for (let j = 0; j < i; j++){
        console.log(names[j]);
    }
}

function three(){
    return function(){
        return "three";
    }
}
let funct = three()
console.log(funct());

