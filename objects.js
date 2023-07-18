let myObj = {
    name: "Japheth Kipkurui",
    phone: ["0768302374", "0727637847"],
    email: {
        work_email: "6mutaibartai58@gmail.com",
        home_email: "kipkuruijapheth11@gmail.com"
    },
    location: "Murang'a",
    action: function(){
        return `Your work email is ${this.email.work_email}`;
    }
}
// console.log(myObj.action());
// console.log(`${myObj.phone[1]} is my work contact number`);
// let myObject = Object.create(myObj);
// myObject.home_location = "Eldoret";
// console.log(myObject.home_location);

let band = {
    vocals: "Emma Liam",
    guitar: "Olivia Baker",
    bass: "John Paul",
    drums: "Jimmy Downs",
    piano: "Lisa Mona"
}
console.log(Object.keys(band));
console.log(Object.values(band));

delete band.piano;
console.log(Object.keys(band));
console.log(Object.values(band));

for(let job in band){
    console.log(`${band[job]} plays the ${job}`);
}



let names = ["Emma","Liam","Olivia","Noah","Ava","Isabella","Sophia","Mia","Jackson","Aiden","Lucas","Luna","Amelia","Evelyn","Abigail","Harper","Ella","Alexander","Ethan","Mason","Aria","Emily","Scarlett","Grace","James","Caden","Ella","Chloe","Benjamin","Mila","Avery","Lily","Mila","Harper","Liam","Evelyn","Ella","Hannah","Aria","Oliver","Logan","Layla","Victoria","Penelope","Elijah","Michael","Sofia","Daniel","Madison","Eleanor","Elias","Grace"];
  