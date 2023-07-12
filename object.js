// The car in this situation is an object
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
// car.printDescription();
// console.log(car.year); // OR
// // console.log(car['year']);
// console.log(car.getPrice());

// Object c
let c = {
    myProperty:[
        {d: "This"},
        {e: "is"},
        {f: "an"},
        {g: "array"},
        {h: "object"}
    ]
}
// Example 2
let contact = {
    customers: [
        {firstName: "Japheth", lastName: "Kipkurui", contactNo: "+253727637947"},
        {firstName: "Bartai", lastName: "Mutai", contactNo: "+254768302374"}
    ]
};
// Finnaly 
console.log(contact.customers[1].firstName);