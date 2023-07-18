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

console.log(myObj.action());
console.log(`${myObj.phone[1]} is my work contact number`);