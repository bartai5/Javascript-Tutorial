// console.log("hi");
let username;
let password;
function userLogin(){
    console.log("Hello Welcome to my site...\nEnter Username: ");
    if (username == "japheth"){
        console.log("Enter your password: ");
        if (password == 1823) {
            console.log("Login Success");
            setTimeout(function(){
                console.log("This is my site");
            }, 3000);
        } else {
            console.log("Incorrect password \nTry again...");
        }
    } else {
        console.log("Incorrect username.... Try again.....");
    }
}
userLogin()