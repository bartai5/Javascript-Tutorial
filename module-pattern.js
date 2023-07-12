// Create an IIFE
var counter = (function(){
    // Private
    let count = 0;

    function print(message){
        console.log(message + "---" + count);
    }
    // Return the object
    return {
        // value: count, // This creates a closure. replace with the below functions == line 34
        get: function(){
            return count;
        },
        set: function(value){
            count = value;
        },
        increment: function(){
            count += 1;
            print('After increment: ');
        },
        reset: function(){
            print("Before Reset: ");
            count = 0;
            print("After Reset: ")
        }
    }
})();

counter.increment();
counter.increment();
counter.increment();

// console.log(counter.value);
counter.set(7);
console.log(counter.get());

counter.reset();