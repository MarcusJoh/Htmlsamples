//lets try and use it all to do something

// A bacis login function will do
var passSave = "admin";

//first test
logInTest()

//second test
logInTest()

//third test
logInTest()


//lets make it all lower case
passWord = passWord.toLowerCase();
// test upper case without it

//function to check the password
function checkPass(pass) {
    if (pass == passSave) {
        return true;
    } else {

        return false;
    }

}


//put all the login testing in a function to call is as many times as you need

function logInTest() {

    var passWord = prompt("Enter password please");
    var messsage = "";
    if (checkPass(passWord)) {
        messsage = "you are in";

    } else {

        messsage = "ACCESS DENIED";

    }

    console.log(messsage);
    passMessage(messsage);


}




// console is a bit boring so lets make it show up a bit more
function passMessage(passStatus) {

    // the document is the html from where this code started in
    document.write(passStatus);

}