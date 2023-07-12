function sayHello(name){
    return function(){
        console.log("Hello " + name);
    }
}

sayHello('Japheth')();
sayHello('Kipkurui')();
sayHello('Bartai')();
