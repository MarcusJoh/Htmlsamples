

var passSave = "admin";

//with a loop now
let isPassOK=false; //a boollean to see if the pass is ok
let passCount=1;
let passMax=3; 


//bonus bit
//let passMax= prompt("How many?");

while(!isPassOK){

// lets move the first prompt to here	
 var passWord = prompt("Enter password please");

// test the password
  logInTest(passWord)
 
 
 // update isPassOK to se of it should be true
 isPassOK=checkPass(passWord);
 
 // check if the number of pass chances is above the max
 if(passCount>=passMax){
	passMessage("out of chances")
	break; // break is a simple way to leave a loop no matter what
 }
passCount++;

}








// lets reuse as much code as we can 




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

function logInTest(passWord){
	


var messsage = "";
if (checkPass(passWord)){
messsage="you are in";

}else {

messsage="ACCESS DENIED";

}

console.log(messsage);
passMessage(messsage);


	
}

 

 
 
 
 
 
 
// console is a bit boring so lets make it show up a bit more
function passMessage(passStatus) {

	// the document is the html from where this code started in
	document.write("<p>"+passStatus+"</p>");

}

